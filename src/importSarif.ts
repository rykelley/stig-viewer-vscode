import * as vscode from 'vscode';
import * as fs from 'fs';
import { CklbDocument, CklbRule } from './types';
import { CWE_STIG_MAP } from './cweStigMap';

// ─── SARIF types (subset) ───────────────────────────────────────────────────

interface SarifLog {
  runs: SarifRun[];
}

interface SarifRun {
  tool: { driver: { name: string; rules?: SarifRuleDescriptor[] } };
  results: SarifResult[];
}

interface SarifRuleDescriptor {
  id: string;
  name?: string;
  shortDescription?: { text: string };
  properties?: { tags?: string[] };
  relationships?: Array<{ target: { id: string; toolComponent?: { name: string } } }>;
}

interface SarifResult {
  ruleId: string;
  level?: string;
  message: { text: string };
  locations?: Array<{
    physicalLocation?: {
      artifactLocation?: { uri: string };
      region?: { startLine?: number; startColumn?: number };
    };
  }>;
  taxa?: Array<{ id: string; toolComponent?: { name: string } }>;
}

// ─── CWE extraction ────────────────────────────────────────────────────────

function extractCweIds(result: SarifResult, ruleDesc?: SarifRuleDescriptor): number[] {
  const ids: number[] = [];

  // From result taxa
  if (result.taxa) {
    for (const t of result.taxa) {
      const n = parseCweId(t.id);
      if (n) ids.push(n);
    }
  }

  // From rule relationships
  if (ruleDesc?.relationships) {
    for (const rel of ruleDesc.relationships) {
      if (rel.target.toolComponent?.name?.toUpperCase() === 'CWE' || rel.target.id.startsWith('CWE-')) {
        const n = parseCweId(rel.target.id);
        if (n) ids.push(n);
      }
    }
  }

  // From rule tags (e.g., "external/cwe/cwe-79")
  if (ruleDesc?.properties?.tags) {
    for (const tag of ruleDesc.properties.tags) {
      const m = tag.match(/cwe[/-](\d+)/i);
      if (m) ids.push(parseInt(m[1], 10));
    }
  }

  // From ruleId itself (e.g., "CWE-79")
  const fromId = parseCweId(result.ruleId);
  if (fromId) ids.push(fromId);

  return [...new Set(ids)];
}

function parseCweId(s: string): number | null {
  const m = s.match(/(?:CWE-?)(\d+)/i);
  return m ? parseInt(m[1], 10) : null;
}

// ─── Main ───────────────────────────────────────────────────────────────────

export async function importSarif(sarifUri?: vscode.Uri): Promise<void> {
  // 1. Select .cklb checklist
  const cklbUris = await vscode.window.showOpenDialog({
    canSelectMany: false,
    filters: { 'STIG Checklist': ['cklb'] },
    title: 'Select checklist to populate with SARIF findings',
  });
  if (!cklbUris?.[0]) return;

  // 2. Select SARIF file(s) — use context menu URI if provided
  let sarifUris: vscode.Uri[];
  if (sarifUri) {
    sarifUris = [sarifUri];
  } else {
    const picked = await vscode.window.showOpenDialog({
      canSelectMany: true,
      filters: { 'SARIF': ['sarif', 'json'] },
      title: 'Select SARIF results file(s)',
    });
    if (!picked?.length) return;
    sarifUris = picked;
  }

  const doc: CklbDocument = JSON.parse(fs.readFileSync(cklbUris[0].fsPath, 'utf-8'));
  const now = new Date().toISOString();

  // Flatten all rules for matching
  const allRules: CklbRule[] = [];
  for (const stig of doc.stigs) {
    allRules.push(...stig.rules);
  }

  // Track findings per rule UUID
  const ruleFindings = new Map<string, Array<{ tool: string; cwe: number; file: string; line: number; message: string }>>();

  let totalResults = 0;
  let mappedResults = 0;
  let unmappedCwes = new Set<number>();
  const tools: string[] = [];

  for (const uri of sarifUris) {
    const sarif: SarifLog = JSON.parse(fs.readFileSync(uri.fsPath, 'utf-8'));

    for (const run of sarif.runs) {
      const toolName = run.tool.driver.name;
      if (!tools.includes(toolName)) tools.push(toolName);

      // Build rule descriptor lookup
      const ruleMap = new Map<string, SarifRuleDescriptor>();
      if (run.tool.driver.rules) {
        for (const r of run.tool.driver.rules) {
          ruleMap.set(r.id, r);
        }
      }

      for (const result of run.results) {
        totalResults++;
        const ruleDesc = ruleMap.get(result.ruleId);
        const cweIds = extractCweIds(result, ruleDesc);

        if (cweIds.length === 0) continue;

        // Extract location
        const loc = result.locations?.[0]?.physicalLocation;
        const file = loc?.artifactLocation?.uri || '';
        const line = loc?.region?.startLine || 0;

        // Map each CWE to matching STIG rules
        let matched = false;
        for (const cweId of cweIds) {
          const mapping = CWE_STIG_MAP.get(cweId);
          if (!mapping) {
            unmappedCwes.add(cweId);
            continue;
          }

          // Find rules whose text matches the CWE keywords
          for (const rule of allRules) {
            const ruleText = `${rule.rule_title} ${rule.discussion} ${rule.check_content}`.toLowerCase();
            if (mapping.keywords.some(kw => ruleText.includes(kw.toLowerCase()))) {
              if (!ruleFindings.has(rule.uuid)) {
                ruleFindings.set(rule.uuid, []);
              }
              ruleFindings.get(rule.uuid)!.push({
                tool: toolName,
                cwe: cweId,
                file: file.replace(/^file:\/\//, ''),
                line,
                message: result.message.text.substring(0, 300),
              });
              matched = true;
            }
          }
        }
        if (matched) mappedResults++;
      }
    }
  }

  // Apply findings to rules
  let openCount = 0;
  for (const [uuid, findings] of ruleFindings) {
    const rule = allRules.find(r => r.uuid === uuid);
    if (!rule) continue;

    rule.status = 'open';
    openCount++;

    const grouped = new Map<string, typeof findings>();
    for (const f of findings) {
      const key = `CWE-${f.cwe}`;
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key)!.push(f);
    }

    const sections: string[] = [`[SARIF IMPORT] ${findings.length} finding(s) from: ${tools.join(', ')}\n`];
    for (const [cwe, items] of grouped) {
      const cweName = CWE_STIG_MAP.get(parseInt(cwe.replace('CWE-', '')))?.name || cwe;
      sections.push(`${cwe} — ${cweName}:`);
      const shown = items.slice(0, 10);
      for (const item of shown) {
        sections.push(`  ${item.file}:${item.line} — ${item.message}`);
      }
      if (items.length > 10) {
        sections.push(`  ... and ${items.length - 10} more`);
      }
    }

    rule.finding_details = sections.join('\n');
    rule.updatedAt = now;
  }

  // Save
  fs.writeFileSync(cklbUris[0].fsPath, JSON.stringify(doc, null, 2));
  await vscode.commands.executeCommand('vscode.openWith', cklbUris[0], 'stigViewer.cklbEditor');

  let msg = `SARIF import: ${totalResults} findings processed, ${mappedResults} mapped to ${openCount} rules`;
  if (unmappedCwes.size > 0) {
    msg += ` (${unmappedCwes.size} unmapped CWEs: ${[...unmappedCwes].slice(0, 5).map(c => `CWE-${c}`).join(', ')}${unmappedCwes.size > 5 ? '...' : ''})`;
  }
  vscode.window.showInformationMessage(msg);
}
