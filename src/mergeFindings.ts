import * as vscode from 'vscode';
import * as fs from 'fs';
import { CklbDocument } from './types';

export async function mergeFindings(activeCklbUri?: vscode.Uri): Promise<void> {
  // 1. Pick the OLD (completed) checklist
  const oldUris = await vscode.window.showOpenDialog({
    canSelectMany: false,
    filters: { 'STIG Checklist': ['cklb'] },
    title: 'Select OLD (completed) checklist to carry findings FROM',
  });
  if (!oldUris?.[0]) { return; }

  // 2. Use active checklist as the NEW target, or ask user to pick one
  let newUri = activeCklbUri;
  if (!newUri) {
    const uris = await vscode.window.showOpenDialog({
      canSelectMany: false,
      filters: { 'STIG Checklist': ['cklb'] },
      title: 'Select NEW checklist to carry findings INTO',
    });
    if (!uris?.[0]) { return; }
    newUri = uris[0];
  }

  const oldDoc: CklbDocument = JSON.parse(fs.readFileSync(oldUris[0].fsPath, 'utf-8'));
  const newDoc: CklbDocument = JSON.parse(fs.readFileSync(newUri.fsPath, 'utf-8'));

  // Build lookup from old rules keyed by rule_version (most stable across STIG releases)
  const oldRuleMap = new Map<string, typeof oldDoc.stigs[0]['rules'][0]>();
  for (const stig of oldDoc.stigs) {
    for (const rule of stig.rules) {
      oldRuleMap.set(rule.rule_version, rule);
    }
  }

  let carried = 0;
  let newRules = 0;
  let total = 0;

  for (const stig of newDoc.stigs) {
    for (const rule of stig.rules) {
      total++;
      const oldRule = oldRuleMap.get(rule.rule_version);
      if (oldRule) {
        rule.status = oldRule.status;
        rule.finding_details = oldRule.finding_details;
        rule.comments = oldRule.comments;
        rule.updatedAt = new Date().toISOString();
        carried++;
      } else {
        newRules++;
      }
    }
  }

  // Count rules that were in old but not in new
  const newRuleVersions = new Set<string>();
  for (const stig of newDoc.stigs) {
    for (const rule of stig.rules) {
      newRuleVersions.add(rule.rule_version);
    }
  }
  let removed = 0;
  for (const rv of oldRuleMap.keys()) {
    if (!newRuleVersions.has(rv)) { removed++; }
  }

  fs.writeFileSync(newUri.fsPath, JSON.stringify(newDoc, null, 2));

  await vscode.commands.executeCommand('vscode.openWith', newUri, 'stigViewer.cklbEditor');

  vscode.window.showInformationMessage(
    `Merge complete: ${carried} carried forward, ${newRules} new rules, ${removed} removed from old STIG`
  );
}
