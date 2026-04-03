import * as vscode from 'vscode';
import * as fs from 'fs';
import { CklbDocument, CklbRule } from './types';

// ─── Audit format types ─────────────────────────────────────────────────────

interface NpmAuditV2 {
  vulnerabilities: Record<string, {
    name: string;
    severity: string;
    via: Array<string | { title: string; url: string; severity: string; cwe: string[]; range: string }>;
    fixAvailable: boolean | { name: string; version: string };
  }>;
}

interface PipAuditEntry {
  name: string;
  version: string;
  vulns: Array<{
    id: string;
    fix_versions: string[];
    description: string;
  }>;
}

interface GenericAuditEntry {
  name: string;
  version?: string;
  severity?: string;
  title?: string;
  description?: string;
  id?: string;
  url?: string;
  cwe?: string;
  fixAvailable?: string;
}

// ─── Parsers ────────────────────────────────────────────────────────────────

function parseNpmAudit(data: any): GenericAuditEntry[] {
  const entries: GenericAuditEntry[] = [];
  if (!data.vulnerabilities) return entries;

  for (const [name, vuln] of Object.entries(data.vulnerabilities as NpmAuditV2['vulnerabilities'])) {
    for (const v of vuln.via) {
      if (typeof v === 'object') {
        entries.push({
          name,
          severity: v.severity,
          title: v.title,
          url: v.url,
          cwe: v.cwe?.[0],
          fixAvailable: vuln.fixAvailable ? 'Yes' : 'No',
        });
      }
    }
  }
  return entries;
}

function parsePipAudit(data: any): GenericAuditEntry[] {
  const entries: GenericAuditEntry[] = [];
  const items: PipAuditEntry[] = Array.isArray(data) ? data : data.dependencies || [];

  for (const pkg of items) {
    if (!pkg.vulns?.length) continue;
    for (const v of pkg.vulns) {
      entries.push({
        name: pkg.name,
        version: pkg.version,
        id: v.id,
        description: v.description,
        fixAvailable: v.fix_versions?.length ? v.fix_versions.join(', ') : 'No',
      });
    }
  }
  return entries;
}

function detectAndParse(data: any): { entries: GenericAuditEntry[]; source: string } {
  // npm audit --json (v2+ format)
  if (data.vulnerabilities && typeof data.vulnerabilities === 'object') {
    return { entries: parseNpmAudit(data), source: 'npm audit' };
  }

  // pip-audit --format json
  if (Array.isArray(data) && data[0]?.vulns !== undefined) {
    return { entries: parsePipAudit(data), source: 'pip-audit' };
  }
  if (data.dependencies && Array.isArray(data.dependencies)) {
    return { entries: parsePipAudit(data), source: 'pip-audit' };
  }

  // bundler-audit / generic array of { name, severity, ... }
  if (Array.isArray(data)) {
    return {
      entries: data.map((d: any) => ({
        name: d.name || d.package || d.module || '',
        version: d.version || d.installed_version || '',
        severity: d.severity || d.level || '',
        title: d.title || d.advisory || d.description || '',
        id: d.id || d.cve || d.advisory_id || '',
        url: d.url || d.reference || '',
      })),
      source: 'dependency audit',
    };
  }

  throw new Error('Unrecognized audit format. Expected npm audit, pip-audit, or a JSON array of vulnerabilities.');
}

// ─── Main ───────────────────────────────────────────────────────────────────

export async function importAudit(): Promise<void> {
  // 1. Select .cklb checklist
  const cklbUris = await vscode.window.showOpenDialog({
    canSelectMany: false,
    filters: { 'STIG Checklist': ['cklb'] },
    title: 'Select checklist to populate with audit findings',
  });
  if (!cklbUris?.[0]) return;

  // 2. Select audit JSON file
  const auditUris = await vscode.window.showOpenDialog({
    canSelectMany: false,
    filters: { 'JSON': ['json'] },
    title: 'Select dependency audit JSON (npm audit, pip-audit, etc.)',
  });
  if (!auditUris?.[0]) return;

  const doc: CklbDocument = JSON.parse(fs.readFileSync(cklbUris[0].fsPath, 'utf-8'));
  const auditData = JSON.parse(fs.readFileSync(auditUris[0].fsPath, 'utf-8'));

  const { entries, source } = detectAndParse(auditData);

  if (entries.length === 0) {
    vscode.window.showInformationMessage(`No vulnerabilities found in ${source} output.`);
    return;
  }

  // Find rules related to dependencies / third-party components
  const depKeywords = [
    'third-party', 'component', 'dependency', 'library', 'vulnerability',
    'known vulnerabilit', 'patch', 'update', 'unsupported', 'software composition',
    'package', 'module', 'open source',
  ];

  const now = new Date().toISOString();
  let matched = 0;

  for (const stig of doc.stigs) {
    for (const rule of stig.rules) {
      const ruleText = `${rule.rule_title} ${rule.discussion} ${rule.check_content}`.toLowerCase();
      const isDepRule = depKeywords.some(kw => ruleText.includes(kw));
      if (!isDepRule) continue;

      matched++;
      rule.status = 'open';
      rule.updatedAt = now;

      const sevCounts: Record<string, number> = {};
      for (const e of entries) {
        const sev = (e.severity || 'unknown').toLowerCase();
        sevCounts[sev] = (sevCounts[sev] || 0) + 1;
      }
      const sevSummary = Object.entries(sevCounts).map(([s, n]) => `${n} ${s}`).join(', ');

      const lines: string[] = [
        `[AUDIT IMPORT] ${entries.length} vulnerable dependencies found via ${source}`,
        `Severity breakdown: ${sevSummary}\n`,
      ];

      const shown = entries.slice(0, 25);
      for (const e of shown) {
        const parts = [e.name];
        if (e.version) parts.push(`v${e.version}`);
        if (e.severity) parts.push(`[${e.severity}]`);
        if (e.title) parts.push(`— ${e.title}`);
        if (e.id) parts.push(`(${e.id})`);
        if (e.fixAvailable && e.fixAvailable !== 'No') parts.push(`fix: ${e.fixAvailable}`);
        lines.push(`  ${parts.join(' ')}`);
      }
      if (entries.length > 25) {
        lines.push(`  ... and ${entries.length - 25} more`);
      }

      rule.finding_details = lines.join('\n');
    }
  }

  fs.writeFileSync(cklbUris[0].fsPath, JSON.stringify(doc, null, 2));
  await vscode.commands.executeCommand('vscode.openWith', cklbUris[0], 'stigViewer.cklbEditor');

  if (matched > 0) {
    vscode.window.showInformationMessage(
      `Imported ${entries.length} vulnerabilities from ${source} → ${matched} STIG rule(s) marked open`
    );
  } else {
    vscode.window.showWarningMessage(
      `Imported ${entries.length} vulnerabilities but no dependency-related STIG rules found in the checklist.`
    );
  }
}
