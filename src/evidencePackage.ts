import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';
import { CklbDocument } from './types';
import { buildCsv } from './exportCsv';
import { buildCkl } from './exportCkl';
import { buildPoam } from './exportPoam';

/**
 * Minimal zip builder using the ZIP format spec.
 * Avoids external dependencies — produces a valid .zip file.
 */
class ZipBuilder {
  private files: Array<{ name: string; data: Buffer; crc: number; compressedData: Buffer }> = [];

  addFile(name: string, content: string | Buffer): void {
    const data = typeof content === 'string' ? Buffer.from(content, 'utf-8') : content;
    const compressedData = zlib.deflateRawSync(data);
    const crc = this.crc32(data);
    this.files.push({ name, data, crc, compressedData });
  }

  build(): Buffer {
    const parts: Buffer[] = [];
    const centralParts: Buffer[] = [];
    let offset = 0;

    for (const file of this.files) {
      const nameBuffer = Buffer.from(file.name, 'utf-8');

      // Local file header
      const local = Buffer.alloc(30 + nameBuffer.length);
      local.writeUInt32LE(0x04034b50, 0);   // signature
      local.writeUInt16LE(20, 4);            // version needed
      local.writeUInt16LE(0, 6);             // flags
      local.writeUInt16LE(8, 8);             // compression: deflate
      local.writeUInt16LE(0, 10);            // mod time
      local.writeUInt16LE(0, 12);            // mod date
      local.writeUInt32LE(file.crc, 14);     // crc32
      local.writeUInt32LE(file.compressedData.length, 18);  // compressed size
      local.writeUInt32LE(file.data.length, 22);            // uncompressed size
      local.writeUInt16LE(nameBuffer.length, 26);           // name length
      local.writeUInt16LE(0, 28);            // extra length
      nameBuffer.copy(local, 30);

      // Central directory entry
      const central = Buffer.alloc(46 + nameBuffer.length);
      central.writeUInt32LE(0x02014b50, 0);  // signature
      central.writeUInt16LE(20, 4);          // version made by
      central.writeUInt16LE(20, 6);          // version needed
      central.writeUInt16LE(0, 8);           // flags
      central.writeUInt16LE(8, 10);          // compression: deflate
      central.writeUInt16LE(0, 12);          // mod time
      central.writeUInt16LE(0, 14);          // mod date
      central.writeUInt32LE(file.crc, 16);   // crc32
      central.writeUInt32LE(file.compressedData.length, 20); // compressed
      central.writeUInt32LE(file.data.length, 24);           // uncompressed
      central.writeUInt16LE(nameBuffer.length, 28);          // name length
      central.writeUInt16LE(0, 30);          // extra length
      central.writeUInt16LE(0, 32);          // comment length
      central.writeUInt16LE(0, 34);          // disk number
      central.writeUInt16LE(0, 36);          // internal attrs
      central.writeUInt32LE(0, 38);          // external attrs
      central.writeUInt32LE(offset, 42);     // local header offset
      nameBuffer.copy(central, 46);

      parts.push(local, file.compressedData);
      centralParts.push(central);
      offset += local.length + file.compressedData.length;
    }

    const centralDirOffset = offset;
    let centralDirSize = 0;
    for (const cp of centralParts) {
      parts.push(cp);
      centralDirSize += cp.length;
    }

    // End of central directory
    const eocd = Buffer.alloc(22);
    eocd.writeUInt32LE(0x06054b50, 0);       // signature
    eocd.writeUInt16LE(0, 4);                // disk number
    eocd.writeUInt16LE(0, 6);                // central dir disk
    eocd.writeUInt16LE(this.files.length, 8);  // entries on disk
    eocd.writeUInt16LE(this.files.length, 10); // total entries
    eocd.writeUInt32LE(centralDirSize, 12);    // central dir size
    eocd.writeUInt32LE(centralDirOffset, 16);  // central dir offset
    eocd.writeUInt16LE(0, 20);               // comment length
    parts.push(eocd);

    return Buffer.concat(parts);
  }

  private crc32(buf: Buffer): number {
    let crc = 0xFFFFFFFF;
    for (let i = 0; i < buf.length; i++) {
      crc ^= buf[i];
      for (let j = 0; j < 8; j++) {
        crc = (crc >>> 1) ^ ((crc & 1) ? 0xEDB88320 : 0);
      }
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }
}

// ─── Summary report builder ────────────────────────────────────────────────

function buildSummaryReport(data: CklbDocument): string {
  const lines: string[] = [];
  lines.push('STIG ASSESSMENT EVIDENCE PACKAGE');
  lines.push('================================\n');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Title: ${data.title}`);
  lines.push(`Host: ${data.target_data.host_name || 'N/A'}`);
  lines.push(`IP: ${data.target_data.ip_address || 'N/A'}`);
  lines.push(`FQDN: ${data.target_data.fqdn || 'N/A'}\n`);

  for (const stig of data.stigs) {
    const counts = { open: 0, not_a_finding: 0, not_reviewed: 0, not_applicable: 0, high: 0, medium: 0, low: 0 };
    for (const r of stig.rules) {
      (counts as any)[r.status]++;
      (counts as any)[r.severity]++;
    }
    const total = stig.rules.length;
    const completion = total ? Math.round(((counts.not_a_finding + counts.not_applicable) / total) * 100) : 0;

    lines.push(`STIG: ${stig.stig_name}`);
    lines.push(`  ${stig.release_info} | Version ${stig.version}`);
    lines.push(`  Total Rules: ${total}`);
    lines.push(`  Open: ${counts.open} | Not a Finding: ${counts.not_a_finding} | Not Reviewed: ${counts.not_reviewed} | Not Applicable: ${counts.not_applicable}`);
    lines.push(`  CAT I: ${counts.high} | CAT II: ${counts.medium} | CAT III: ${counts.low}`);
    lines.push(`  Completion: ${completion}%\n`);

    // List open findings
    const openRules = stig.rules.filter(r => r.status === 'open');
    if (openRules.length > 0) {
      lines.push('  OPEN FINDINGS:');
      for (const r of openRules) {
        const cat = r.severity === 'high' ? 'I' : r.severity === 'medium' ? 'II' : 'III';
        lines.push(`    [CAT ${cat}] ${r.group_id} — ${r.rule_title}`);
        if (r.finding_details) {
          const detail = r.finding_details.substring(0, 200).replace(/\n/g, '\n      ');
          lines.push(`      ${detail}`);
        }
      }
      lines.push('');
    }
  }

  lines.push('\nPACKAGE CONTENTS:');
  lines.push('  checklist.cklb    — Full checklist in JSON format');
  lines.push('  checklist.ckl     — Checklist in DISA CKL XML format');
  lines.push('  summary.csv       — All rules with status and findings');
  lines.push('  poam.csv          — Plan of Action & Milestones (open findings only)');
  lines.push('  report.txt        — This summary report');

  return lines.join('\n');
}

// ─── Main ───────────────────────────────────────────────────────────────────

export async function exportEvidence(activeCklbUri?: vscode.Uri): Promise<void> {
  // 1. Use active checklist or ask user to pick one
  let cklbUri = activeCklbUri;
  if (!cklbUri) {
    const uris = await vscode.window.showOpenDialog({
      canSelectMany: false,
      filters: { 'STIG Checklist': ['cklb'] },
      title: 'Select checklist to package as evidence',
    });
    if (!uris?.[0]) return;
    cklbUri = uris[0];
  }

  const doc: CklbDocument = JSON.parse(fs.readFileSync(cklbUri.fsPath, 'utf-8'));
  const baseName = path.basename(cklbUri.fsPath, '.cklb');

  // Build zip
  const zip = new ZipBuilder();
  zip.addFile('checklist.cklb', JSON.stringify(doc, null, 2));
  zip.addFile('checklist.ckl', buildCkl(doc));
  zip.addFile('summary.csv', buildCsv(doc));
  zip.addFile('poam.csv', buildPoam(doc));
  zip.addFile('report.txt', buildSummaryReport(doc));

  // Ask user to optionally attach additional evidence files
  const attachMore = await vscode.window.showQuickPick(
    ['Save package now', 'Attach additional evidence files first'],
    { title: 'Evidence package' }
  );

  if (attachMore?.includes('Attach')) {
    const extraUris = await vscode.window.showOpenDialog({
      canSelectMany: true,
      title: 'Select additional evidence files (screenshots, scan reports, etc.)',
    });
    if (extraUris) {
      for (const u of extraUris) {
        const name = 'evidence/' + path.basename(u.fsPath);
        zip.addFile(name, fs.readFileSync(u.fsPath));
      }
    }
  }

  // Save the zip
  const defaultName = `${baseName}_evidence_${new Date().toISOString().slice(0, 10)}.zip`;
  const saveUri = await vscode.window.showSaveDialog({
    defaultUri: vscode.Uri.file(path.join(path.dirname(cklbUri.fsPath), defaultName)),
    filters: { 'ZIP Archive': ['zip'] },
    title: 'Save Evidence Package',
  });

  if (!saveUri) return;

  fs.writeFileSync(saveUri.fsPath, zip.build());

  const totalRules = doc.stigs.reduce((n, s) => n + s.rules.length, 0);
  const openCount = doc.stigs.reduce((n, s) => n + s.rules.filter(r => r.status === 'open').length, 0);

  vscode.window.showInformationMessage(
    `Evidence package saved: ${totalRules} rules, ${openCount} open findings → ${path.basename(saveUri.fsPath)}`
  );
}
