import * as vscode from 'vscode';
import { CklbDocument, CklbRule } from './types';

// ─── Reading / writing the open checklist ───────────────────────────────────

/**
 * Load a checklist through the TextDocument so unsaved edits from the open
 * editor are included (reading the file from disk would miss them).
 */
export async function loadChecklist(uri: vscode.Uri): Promise<{ document: vscode.TextDocument; doc: CklbDocument }> {
  const document = await vscode.workspace.openTextDocument(uri);
  return { document, doc: JSON.parse(document.getText()) };
}

/** Write a checklist back via WorkspaceEdit (keeps the editor in sync, undoable in one step) and save. */
export async function saveChecklist(document: vscode.TextDocument, doc: CklbDocument): Promise<void> {
  const edit = new vscode.WorkspaceEdit();
  const fullRange = new vscode.Range(
    document.positionAt(0),
    document.positionAt(document.getText().length)
  );
  edit.replace(document.uri, fullRange, JSON.stringify(doc, null, 2));
  if (!(await vscode.workspace.applyEdit(edit))) {
    throw new Error('Failed to apply changes to the checklist.');
  }
  await document.save();
}

// ─── Merging tool results into rules ────────────────────────────────────────

export interface EvidenceSource {
  /** Prefix the tool's finding details start with, e.g. `[SARIF IMPORT]`. */
  prefix: string;
  /** Label used in the `--- Label ---` divider when appended below other notes. */
  label: string;
}

export const REPO_SCAN: EvidenceSource = { prefix: '[AUTO-SCAN]', label: 'Repo Scan' };
export const SARIF_IMPORT: EvidenceSource = { prefix: '[SARIF IMPORT]', label: 'SARIF Import' };
export const AUDIT_IMPORT: EvidenceSource = { prefix: '[AUDIT IMPORT]', label: 'Audit Import' };

const TOOL_PREFIXES = ['[AUTO-SCAN]', '[SARIF IMPORT]', '[AUDIT IMPORT]', '[HDF IMPORT]'];
const BLOCK_DIVIDER = /\n\n--- (.+?) ---\n/;

interface SplitDetails {
  head: string;
  blocks: Array<{ label: string; body: string }>;
}

function splitDetails(details: string): SplitDetails {
  const parts = (details || '').split(BLOCK_DIVIDER);
  const blocks: SplitDetails['blocks'] = [];
  for (let i = 1; i + 1 < parts.length; i += 2) {
    blocks.push({ label: parts[i], body: parts[i + 1] });
  }
  return { head: parts[0], blocks };
}

function isToolGenerated(text: string): boolean {
  const trimmed = text.trim();
  return trimmed === '' || TOOL_PREFIXES.some(p => trimmed.startsWith(p));
}

/** A rule a person has assessed — tools must not replace its status. */
function isReviewed(rule: CklbRule): boolean {
  return rule.status !== 'not_reviewed' && !isToolGenerated(splitDetails(rule.finding_details).head);
}

function startsWithOtherTool(text: string, source: EvidenceSource): boolean {
  const trimmed = text.trim();
  return TOOL_PREFIXES.some(p => p !== source.prefix && trimmed.startsWith(p));
}

/** True if evidence from a different tool remains in the finding details. */
function hasOtherToolEvidence(details: string, source: EvidenceSource): boolean {
  const { head, blocks } = splitDetails(details);
  return startsWithOtherTool(head, source)
    || blocks.some(b => b.label !== source.label && startsWithOtherTool(b.body, source));
}

/**
 * Merge new tool evidence into existing finding details: the user's notes and other
 * tools' blocks are kept, and any earlier evidence from the same tool is replaced.
 */
function mergeEvidence(existing: string, evidence: string, source: EvidenceSource): string {
  const { head, blocks } = splitDetails(existing);
  const keptHead = head.trim().startsWith(source.prefix) ? '' : head.trimEnd();
  const rest = blocks
    .filter(b => b.label !== source.label)
    .map(b => `\n\n--- ${b.label} ---\n${b.body}`)
    .join('');
  if (!keptHead) { return evidence + rest; }
  return `${keptHead}${rest}\n\n--- ${source.label} ---\n${evidence}`;
}

/**
 * Apply a tool's result to a rule. Returns true if the existing status was kept —
 * either a person already reviewed the rule, or another tool's evidence still marks
 * it open (one tool's clean result must not clear another tool's finding).
 */
export function applyToolResult(
  rule: CklbRule,
  status: CklbRule['status'],
  evidence: string,
  source: EvidenceSource,
): boolean {
  const reviewed = isReviewed(rule);
  rule.finding_details = mergeEvidence(rule.finding_details, evidence, source);
  const keepOpen = rule.status === 'open' && status !== 'open'
    && hasOtherToolEvidence(rule.finding_details, source);
  const preserved = reviewed || keepOpen;
  if (!preserved) { rule.status = status; }
  return preserved;
}
