import * as vscode from 'vscode';
import * as fs from 'fs';
import { parseStringPromise, processors } from 'xml2js';
import { CklbDocument, CklbRule } from './types';

function toArray<T>(val: T | T[] | undefined | null): T[] {
  if (val == null) return [];
  return Array.isArray(val) ? val : [val];
}

function txt(node: unknown): string {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return txt(node[0]);
  if (typeof node === 'object' && '_' in (node as Record<string, unknown>)) {
    return String((node as Record<string, unknown>)._);
  }
  return String(node);
}

const RESULT_MAP: Record<string, CklbRule['status']> = {
  'pass': 'not_a_finding',
  'fail': 'open',
  'error': 'open',
  'unknown': 'not_reviewed',
  'notapplicable': 'not_applicable',
  'notchecked': 'not_reviewed',
  'informational': 'not_reviewed',
  'fixed': 'not_a_finding',
};

/** Extract the SV-######r#_rule portion from an XCCDF idref */
function extractRuleId(idref: string): string {
  const m = idref.match(/(SV-\d+r\d+_rule)/);
  return m ? m[1] : idref;
}

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function importScapResults(activeCklbUri?: vscode.Uri): Promise<void> {
  // 1. Use active checklist or ask user to pick one
  let cklbUri = activeCklbUri;
  if (!cklbUri) {
    const uris = await vscode.window.showOpenDialog({
      canSelectMany: false,
      filters: { 'STIG Checklist': ['cklb'] },
      title: 'Select checklist to update with SCAP results',
    });
    if (!uris?.[0]) return;
    cklbUri = uris[0];
  }

  // 2. Select the XCCDF results file
  const xmlUris = await vscode.window.showOpenDialog({
    canSelectMany: false,
    filters: { 'XCCDF Results': ['xml'] },
    title: 'Select SCAP XCCDF results file',
  });
  if (!xmlUris?.[0]) return;

  const doc: CklbDocument = JSON.parse(fs.readFileSync(cklbUri.fsPath, 'utf-8'));
  const xmlContent = fs.readFileSync(xmlUris[0].fsPath, 'utf-8');

  const parsed = await parseStringPromise(xmlContent, {
    explicitArray: false,
    tagNameProcessors: [processors.stripPrefix],
  });

  // Find TestResult — may be at root, under Benchmark, or elsewhere
  let testResult: any = null;
  if (parsed.TestResult) {
    testResult = parsed.TestResult;
  } else if (parsed.Benchmark?.TestResult) {
    testResult = parsed.Benchmark.TestResult;
    // Could be an array of test results — use the last one (most recent)
    if (Array.isArray(testResult)) {
      testResult = testResult[testResult.length - 1];
    }
  }

  if (!testResult) {
    throw new Error('No <TestResult> element found in the XCCDF results file.');
  }

  // Build a map from rule_id → result status
  const resultMap = new Map<string, { status: CklbRule['status']; detail: string }>();
  for (const rr of toArray<any>(testResult['rule-result'])) {
    const idref = rr?.$?.idref || '';
    const ruleId = extractRuleId(idref);
    const resultVal = txt(rr.result).toLowerCase();
    const status = RESULT_MAP[resultVal] || 'not_reviewed';

    // Try to get check content for finding details
    let detail = '';
    const check = toArray<any>(rr.check)[0];
    if (check) {
      detail = txt(check['check-content']);
    }
    if (!detail && rr.message) {
      detail = txt(rr.message);
    }

    resultMap.set(ruleId, { status, detail });
  }

  // Apply results to the checklist
  let updated = 0;
  let skipped = 0;
  const now = new Date().toISOString();

  for (const stig of doc.stigs) {
    for (const rule of stig.rules) {
      const result = resultMap.get(rule.rule_id);
      if (result) {
        rule.status = result.status;
        if (result.detail) {
          rule.finding_details = result.detail;
        }
        rule.updatedAt = now;
        updated++;
      } else {
        skipped++;
      }
    }
  }

  fs.writeFileSync(cklbUri.fsPath, JSON.stringify(doc, null, 2));

  await vscode.commands.executeCommand('vscode.openWith', cklbUri, 'stigViewer.cklbEditor');

  vscode.window.showInformationMessage(
    `SCAP import: ${updated} rules updated, ${skipped} unmatched`
  );
}
