import * as vscode from 'vscode';
import * as fs from 'fs';
import { CklbDocument, CklbRule } from './types';

// Reverse of the export label maps in exportCsv.ts. Also accept the raw
// internal values so a CSV produced from another tool (or hand-edited) works.
const STATUS_FROM_LABEL: Record<string, CklbRule['status']> = {
  'not reviewed': 'not_reviewed',
  'not_reviewed': 'not_reviewed',
  'open': 'open',
  'not a finding': 'not_a_finding',
  'not_a_finding': 'not_a_finding',
  'notafinding': 'not_a_finding',
  'not applicable': 'not_applicable',
  'not_applicable': 'not_applicable',
  'notapplicable': 'not_applicable',
};

interface CsvRow {
  vulnId: string;
  ruleId: string;
  status: string;
  findingDetails: string;
  comments: string;
  rowNumber: number;
}

// ─── RFC 4180 parser (handles quoted fields, escaped quotes, CRLF/LF) ──────

function parseCsv(text: string): string[][] {
  // Strip UTF-8 BOM Excel likes to add
  if (text.charCodeAt(0) === 0xFEFF) {
    text = text.slice(1);
  }

  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let inQuotes = false;
  let i = 0;

  while (i < text.length) {
    const c = text[i];

    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i++;
        continue;
      }
      field += c;
      i++;
      continue;
    }

    if (c === '"') {
      inQuotes = true;
      i++;
      continue;
    }
    if (c === ',') {
      row.push(field);
      field = '';
      i++;
      continue;
    }
    if (c === '\r') {
      i++;
      continue;
    }
    if (c === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
      i++;
      continue;
    }

    field += c;
    i++;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

// ─── Header resolution (case/spacing/underscore tolerant) ──────────────────

function normalizeHeader(s: string): string {
  return s.toLowerCase().replace(/[\s_-]+/g, '');
}

function findColumn(headers: string[], ...candidates: string[]): number {
  const normalized = headers.map(normalizeHeader);
  for (const cand of candidates) {
    const idx = normalized.indexOf(normalizeHeader(cand));
    if (idx !== -1) {
      return idx;
    }
  }
  return -1;
}

// ─── Main ──────────────────────────────────────────────────────────────────

export async function importCsv(activeCklbUri?: vscode.Uri): Promise<void> {
  let cklbUri = activeCklbUri;
  if (!cklbUri) {
    const uris = await vscode.window.showOpenDialog({
      canSelectMany: false,
      filters: { 'STIG Checklist': ['cklb'] },
      title: 'Select checklist to update from CSV',
    });
    if (!uris?.[0]) { return; }
    cklbUri = uris[0];
  }

  const csvUris = await vscode.window.showOpenDialog({
    canSelectMany: false,
    filters: { 'CSV': ['csv'] },
    title: 'Select CSV file to merge into checklist',
  });
  if (!csvUris?.[0]) { return; }

  const csvText = fs.readFileSync(csvUris[0].fsPath, 'utf-8');
  const grid = parseCsv(csvText);

  if (grid.length < 2) {
    vscode.window.showErrorMessage('CSV is empty or has no data rows.');
    return;
  }

  const headers = grid[0];
  const vulnCol = findColumn(headers, 'Vuln ID', 'VulnID', 'group_id');
  const ruleCol = findColumn(headers, 'Rule ID', 'RuleID', 'rule_id');
  const statusCol = findColumn(headers, 'Status');
  const findingsCol = findColumn(headers, 'Finding Details', 'FindingDetails', 'finding_details');
  const commentsCol = findColumn(headers, 'Comments');

  if (vulnCol === -1 && ruleCol === -1) {
    vscode.window.showErrorMessage(
      'CSV must contain a "Vuln ID" or "Rule ID" column to match rules.'
    );
    return;
  }
  if (statusCol === -1 && findingsCol === -1 && commentsCol === -1) {
    vscode.window.showErrorMessage(
      'CSV must contain at least one of: "Status", "Finding Details", or "Comments".'
    );
    return;
  }

  const csvRows: CsvRow[] = [];
  for (let r = 1; r < grid.length; r++) {
    const cells = grid[r];
    // Skip blank lines
    if (cells.every(c => c.trim() === '')) { continue; }
    csvRows.push({
      vulnId: vulnCol !== -1 ? (cells[vulnCol] || '').trim() : '',
      ruleId: ruleCol !== -1 ? (cells[ruleCol] || '').trim() : '',
      status: statusCol !== -1 ? (cells[statusCol] || '').trim() : '',
      findingDetails: findingsCol !== -1 ? (cells[findingsCol] || '') : '',
      comments: commentsCol !== -1 ? (cells[commentsCol] || '') : '',
      rowNumber: r + 1, // 1-indexed for humans, accounting for header
    });
  }

  const doc: CklbDocument = JSON.parse(fs.readFileSync(cklbUri.fsPath, 'utf-8'));

  // Index rules by both keys so we can match either
  const byVuln = new Map<string, CklbRule>();
  const byRule = new Map<string, CklbRule>();
  for (const stig of doc.stigs) {
    for (const rule of stig.rules) {
      if (rule.group_id) { byVuln.set(rule.group_id, rule); }
      if (rule.rule_id) { byRule.set(rule.rule_id, rule); }
    }
  }

  const now = new Date().toISOString();
  let updated = 0;
  let unmatched = 0;
  let invalidStatus = 0;
  const unmatchedKeys: string[] = [];
  const invalidStatusValues: string[] = [];
  const seenRules = new Set<string>(); // dedupe if CSV has multiple rows for same rule

  for (const row of csvRows) {
    let rule: CklbRule | undefined;
    if (row.vulnId) { rule = byVuln.get(row.vulnId); }
    if (!rule && row.ruleId) { rule = byRule.get(row.ruleId); }

    if (!rule) {
      unmatched++;
      const key = row.vulnId || row.ruleId || `(row ${row.rowNumber})`;
      if (unmatchedKeys.length < 10) { unmatchedKeys.push(key); }
      continue;
    }

    if (seenRules.has(rule.uuid)) {
      // Last write wins — fall through and overwrite
    }
    seenRules.add(rule.uuid);

    let changed = false;

    if (statusCol !== -1 && row.status !== '') {
      const mapped = STATUS_FROM_LABEL[row.status.toLowerCase()];
      if (mapped) {
        if (rule.status !== mapped) {
          rule.status = mapped;
          changed = true;
        }
      } else {
        invalidStatus++;
        if (invalidStatusValues.length < 5 && !invalidStatusValues.includes(row.status)) {
          invalidStatusValues.push(row.status);
        }
      }
    }

    if (findingsCol !== -1 && rule.finding_details !== row.findingDetails) {
      rule.finding_details = row.findingDetails;
      changed = true;
    }

    if (commentsCol !== -1 && rule.comments !== row.comments) {
      rule.comments = row.comments;
      changed = true;
    }

    if (changed) {
      rule.updatedAt = now;
      updated++;
    }
  }

  fs.writeFileSync(cklbUri.fsPath, JSON.stringify(doc, null, 2));
  await vscode.commands.executeCommand('vscode.openWith', cklbUri, 'stigViewer.cklbEditor');

  let msg = `CSV import: ${updated} rule(s) updated, ${unmatched} unmatched`;
  if (invalidStatus > 0) {
    msg += `, ${invalidStatus} row(s) had unrecognized Status (${invalidStatusValues.join(', ')})`;
  }
  if (unmatched > 0 && unmatchedKeys.length > 0) {
    msg += ` — first unmatched: ${unmatchedKeys.slice(0, 5).join(', ')}${unmatchedKeys.length > 5 ? '…' : ''}`;
  }
  vscode.window.showInformationMessage(msg);
}
