import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { parseStringPromise, processors } from 'xml2js';
import { v4 as uuidv4 } from 'uuid';
import { CklbDocument, CklbRule, CklbStig, CklbTargetData } from './types';

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Normalise a value that may be a single item, an array, or absent into an array. */
function toArray<T>(val: T | T[] | undefined | null): T[] {
  if (val == null) return [];
  return Array.isArray(val) ? val : [val];
}

/** Pull text from an xml2js node (string | { _ } | array). */
function textOf(node: unknown): string {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return textOf(node[0]);
  if (typeof node === 'object' && '_' in (node as Record<string, unknown>)) {
    return String((node as Record<string, unknown>)._);
  }
  return String(node);
}

/** Extract content between XML-like tags in a decoded description string. */
function extractTag(text: string, tag: string): string {
  const m = text.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
  return m ? m[1].trim() : '';
}

/** Normalise a Vuln ID (V-######). */
function normalizeVulnId(id: string): string {
  const m = id.match(/(V-\d+)/);
  return m ? m[1] : id;
}

/** Normalise a Rule ID (SV-######r#_rule). */
function normalizeRuleId(id: string): string {
  const m = id.match(/(SV-\d+r\d+_rule)/);
  return m ? m[1] : id;
}

function normalizeSeverity(sev: string | undefined): 'high' | 'medium' | 'low' {
  const s = (sev || '').toLowerCase();
  if (s === 'high') return 'high';
  if (s === 'medium') return 'medium';
  return 'low';
}

// ─── Main import ────────────────────────────────────────────────────────────

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function importXccdf(uri: vscode.Uri): Promise<void> {
  const xmlPath = uri.fsPath;
  const xmlContent = fs.readFileSync(xmlPath, 'utf-8');

  const parsed = await parseStringPromise(xmlContent, {
    explicitArray: false,
    tagNameProcessors: [processors.stripPrefix],
  });

  const benchmark = parsed.Benchmark;
  if (!benchmark) {
    throw new Error('No <Benchmark> element found in the XCCDF file.');
  }

  const attrs: any = benchmark.$ || {};
  const benchmarkId: string = attrs.id || '';
  const benchmarkTitle = textOf(benchmark.title);
  const benchmarkVersion = textOf(benchmark.version);

  // Release info from <plain-text id="release-info">
  let releaseInfo = '';
  for (const pt of toArray<any>(benchmark['plain-text'])) {
    const ptAttrs: any = pt?.$ || {};
    if (ptAttrs.id === 'release-info') {
      releaseInfo = textOf(pt);
      break;
    }
  }

  const stigUuid = uuidv4();
  const docId = uuidv4();
  const now = new Date().toISOString();

  const groups = toArray<any>(benchmark.Group);
  const rules: CklbRule[] = [];

  for (const group of groups) {
    const gAttrs: any = group?.$ || {};
    const groupId = normalizeVulnId(gAttrs.id || '');
    const groupTitle = textOf(group.title);
    const groupDesc = textOf(group.description);

    for (const rule of toArray<any>(group.Rule)) {
      const rAttrs: any = rule?.$ || {};
      const ruleId = normalizeRuleId(rAttrs.id || '');
      const severity = normalizeSeverity(rAttrs.severity);
      const weight: string = rAttrs.weight || '10.0';
      const ruleVersion = textOf(rule.version);
      const ruleTitle = textOf(rule.title);

      // ── Decode the encoded description and extract sub-fields ──
      const descRaw = textOf(rule.description);
      const discussion = extractTag(descRaw, 'VulnDiscussion');
      const falsePositives = extractTag(descRaw, 'FalsePositives');
      const falseNegatives = extractTag(descRaw, 'FalseNegatives');
      const documentable = extractTag(descRaw, 'Documentable');
      const mitigations = extractTag(descRaw, 'Mitigations');
      const severityOverrideGuidance = extractTag(descRaw, 'SeverityOverrideGuidance');
      const potentialImpacts = extractTag(descRaw, 'PotentialImpacts');
      const thirdPartyTools = extractTag(descRaw, 'ThirdPartyTools');
      const mitigationControl = extractTag(descRaw, 'MitigationControl');
      const responsibility = extractTag(descRaw, 'Responsibility');
      const iaControls = extractTag(descRaw, 'IAControls');

      // ── Fix text ──
      const fixText = textOf(rule.fixtext);

      // ── Check content — prefer manual check over OVAL references ──
      const checks = toArray<any>(rule.check);
      let checkContent = '';
      let checkContentRef = { href: '', name: '' };

      const manualCheck = checks.find((c: any) => c['check-content']);
      const selectedCheck = manualCheck || checks[0];
      if (selectedCheck) {
        checkContent = textOf(selectedCheck['check-content']);
        const ref: any = toArray<any>(selectedCheck['check-content-ref'])[0];
        if (ref?.$) {
          checkContentRef = { href: ref.$.href || '', name: ref.$.name || '' };
        }
      }

      // ── CCIs and legacy IDs from <ident> elements ──
      const ccis: string[] = [];
      const legacyIds: string[] = [];
      for (const ident of toArray<any>(rule.ident)) {
        const sys: string = ident?.$?.system || '';
        const val = textOf(ident);
        if (sys.includes('cci')) {
          ccis.push(val);
        } else if (sys.includes('legacy')) {
          legacyIds.push(val);
        }
      }

      // ── target_key / stig_ref from <reference> ──
      let targetKey: string | null = null;
      let stigRef: string | null = null;
      for (const ref of toArray<any>(rule.reference)) {
        if (ref?.identifier) { targetKey = textOf(ref.identifier); }
        if (ref?.title) { stigRef = textOf(ref.title); }
      }

      const ruleUuid = uuidv4();

      rules.push({
        uuid: ruleUuid,
        stig_uuid: stigUuid,
        target_key: targetKey,
        stig_ref: stigRef,
        group_id: groupId,
        rule_id: ruleId,
        rule_id_src: ruleId,
        weight,
        classification: 'Unclassified',
        severity,
        rule_version: ruleVersion,
        group_title: groupTitle,
        rule_title: ruleTitle,
        fix_text: fixText,
        false_positives: falsePositives,
        false_negatives: falseNegatives,
        discussion,
        check_content: checkContent,
        documentable,
        mitigations,
        potential_impacts: potentialImpacts,
        third_party_tools: thirdPartyTools,
        mitigation_control: mitigationControl,
        responsibility,
        security_override_guidance: severityOverrideGuidance,
        ia_controls: iaControls,
        check_content_ref: checkContentRef,
        legacy_ids: legacyIds,
        ccis,
        group_tree: [{ id: groupId, title: groupTitle, description: groupDesc }],
        createdAt: now,
        updatedAt: now,
        STIGUuid: stigUuid,
        status: 'not_reviewed',
        overrides: {},
        comments: '',
        finding_details: '',
        srg_id: groupTitle,
      });
    }
  }

  // ── Assemble the STIG ──

  const stig: CklbStig = {
    stig_name: benchmarkTitle,
    display_name: benchmarkTitle,
    stig_id: benchmarkId,
    release_info: releaseInfo,
    version: benchmarkVersion,
    uuid: stigUuid,
    reference_identifier: benchmarkId,
    size: rules.length,
    rules,
  };

  // ── Assemble the document ──

  const targetData: CklbTargetData = {
    target_type: 'Non-Computing',
    host_name: '',
    ip_address: '',
    mac_address: '',
    fqdn: '',
    comments: '',
    role: 'None',
    is_web_database: false,
    technology_area: '',
    web_db_site: '',
    web_db_instance: '',
    classification: null,
  };

  const doc: CklbDocument = {
    title: benchmarkTitle,
    id: docId,
    stigs: [stig],
    active: true,
    mode: 1,
    has_path: true,
    target_data: targetData,
    cklb_version: '1',
  };

  // ── Write .cklb alongside the source XML ──

  const outName = path.basename(xmlPath)
    .replace(/-xccdf\.xml$/i, '.cklb')
    .replace(/\.xml$/i, '.cklb');
  const outPath = path.join(path.dirname(xmlPath), outName);
  fs.writeFileSync(outPath, JSON.stringify(doc, null, 2));

  // ── Open in the STIG Viewer webview ──

  const outUri = vscode.Uri.file(outPath);
  await vscode.commands.executeCommand('vscode.openWith', outUri, 'stigViewer.cklbEditor');

  vscode.window.showInformationMessage(
    `Imported ${rules.length} rules from XCCDF \u2192 ${outName}`
  );
}
