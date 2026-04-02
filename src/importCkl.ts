import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { parseStringPromise, processors } from 'xml2js';
import { v4 as uuidv4 } from 'uuid';
import { CklbDocument, CklbRule, CklbStig, CklbTargetData } from './types';

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

const STATUS_MAP: Record<string, CklbRule['status']> = {
  'Not_Reviewed': 'not_reviewed',
  'Open': 'open',
  'NotAFinding': 'not_a_finding',
  'Not_Applicable': 'not_applicable',
};

function normalizeSeverity(sev: string | undefined): 'high' | 'medium' | 'low' {
  const s = (sev || '').toLowerCase();
  if (s === 'high') return 'high';
  if (s === 'medium') return 'medium';
  return 'low';
}

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function importCkl(uri: vscode.Uri): Promise<void> {
  const xmlPath = uri.fsPath;
  const xmlContent = fs.readFileSync(xmlPath, 'utf-8');

  const parsed = await parseStringPromise(xmlContent, {
    explicitArray: false,
    tagNameProcessors: [processors.stripPrefix],
  });

  const checklist = parsed.CHECKLIST;
  if (!checklist) {
    throw new Error('No <CHECKLIST> element found in the CKL file.');
  }

  // ── Parse ASSET ──
  const asset: any = checklist.ASSET || {};
  const targetData: CklbTargetData = {
    target_type: txt(asset.ASSET_TYPE) || 'Computing',
    host_name: txt(asset.HOST_NAME),
    ip_address: txt(asset.HOST_IP),
    mac_address: txt(asset.HOST_MAC),
    fqdn: txt(asset.HOST_FQDN),
    comments: txt(asset.TARGET_COMMENT),
    role: txt(asset.ROLE) || 'None',
    is_web_database: txt(asset.WEB_OR_DATABASE).toLowerCase() === 'true',
    technology_area: txt(asset.TECH_AREA),
    web_db_site: txt(asset.WEB_DB_SITE),
    web_db_instance: txt(asset.WEB_DB_INSTANCE),
    classification: null,
  };

  // ── Parse STIGs ──
  const iStigs = toArray<any>(checklist.STIGS?.iSTIG);
  const docId = uuidv4();
  const now = new Date().toISOString();
  const stigs: CklbStig[] = [];

  for (const iStig of iStigs) {
    // Parse STIG_INFO
    const siMap = new Map<string, string>();
    for (const si of toArray<any>(iStig.STIG_INFO?.SI_DATA)) {
      siMap.set(txt(si.SID_NAME), txt(si.SID_DATA));
    }

    const stigUuid = siMap.get('uuid') || uuidv4();
    const stigName = siMap.get('title') || '';
    const stigId = siMap.get('stigid') || '';
    const version = siMap.get('version') || '';
    const releaseInfo = siMap.get('releaseinfo') || '';

    // Parse VULNs
    const vulns = toArray<any>(iStig.VULN);
    const rules: CklbRule[] = [];

    for (const vuln of vulns) {
      // Build attribute map from STIG_DATA entries
      const attrMap = new Map<string, string>();
      const cciRefs: string[] = [];
      const legacyIds: string[] = [];

      for (const sd of toArray<any>(vuln.STIG_DATA)) {
        const attr = txt(sd.VULN_ATTRIBUTE);
        const data = txt(sd.ATTRIBUTE_DATA);
        if (attr === 'CCI_REF') {
          cciRefs.push(data);
        } else if (attr === 'Legacy_ID' && data) {
          legacyIds.push(data);
        } else {
          attrMap.set(attr, data);
        }
      }

      const groupId = attrMap.get('Vuln_Num') || '';
      const ruleId = attrMap.get('Rule_ID') || '';
      const ruleUuid = uuidv4();

      const rawStatus = txt(vuln.STATUS);
      const status = STATUS_MAP[rawStatus] || 'not_reviewed';

      rules.push({
        uuid: ruleUuid,
        stig_uuid: stigUuid,
        target_key: attrMap.get('TargetKey') || null,
        stig_ref: attrMap.get('STIGRef') || null,
        group_id: groupId,
        rule_id: ruleId,
        rule_id_src: ruleId,
        weight: attrMap.get('Weight') || '10.0',
        classification: attrMap.get('Class') || 'Unclassified',
        severity: normalizeSeverity(attrMap.get('Severity')),
        rule_version: attrMap.get('Rule_Ver') || '',
        group_title: attrMap.get('Group_Title') || '',
        rule_title: attrMap.get('Rule_Title') || '',
        fix_text: attrMap.get('Fix_Text') || '',
        false_positives: attrMap.get('False_Positives') || '',
        false_negatives: attrMap.get('False_Negatives') || '',
        discussion: attrMap.get('Vuln_Discuss') || '',
        check_content: attrMap.get('Check_Content') || '',
        documentable: attrMap.get('Documentable') || '',
        mitigations: attrMap.get('Mitigations') || '',
        potential_impacts: attrMap.get('Potential_Impact') || '',
        third_party_tools: attrMap.get('Third_Party_Tools') || '',
        mitigation_control: attrMap.get('Mitigation_Control') || '',
        responsibility: attrMap.get('Responsibility') || '',
        security_override_guidance: attrMap.get('Security_Override_Guidance') || '',
        ia_controls: attrMap.get('IA_Controls') || '',
        check_content_ref: { href: attrMap.get('Check_Content_Ref') || '', name: '' },
        legacy_ids: legacyIds,
        ccis: cciRefs,
        group_tree: [{ id: groupId, title: attrMap.get('Group_Title') || '', description: '' }],
        createdAt: now,
        updatedAt: now,
        STIGUuid: stigUuid,
        status,
        overrides: {},
        comments: txt(vuln.COMMENTS),
        finding_details: txt(vuln.FINDING_DETAILS),
        srg_id: attrMap.get('Group_Title') || '',
      });
    }

    stigs.push({
      stig_name: stigName,
      display_name: stigName,
      stig_id: stigId,
      release_info: releaseInfo,
      version,
      uuid: stigUuid,
      reference_identifier: stigId,
      size: rules.length,
      rules,
    });
  }

  const doc: CklbDocument = {
    title: stigs[0]?.stig_name || 'Imported CKL',
    id: docId,
    stigs,
    active: true,
    mode: 1,
    has_path: true,
    target_data: targetData,
    cklb_version: '1',
  };

  const outName = path.basename(xmlPath, '.ckl') + '.cklb';
  const outPath = path.join(path.dirname(xmlPath), outName);
  fs.writeFileSync(outPath, JSON.stringify(doc, null, 2));

  const outUri = vscode.Uri.file(outPath);
  await vscode.commands.executeCommand('vscode.openWith', outUri, 'stigViewer.cklbEditor');

  const totalRules = stigs.reduce((n, s) => n + s.rules.length, 0);
  vscode.window.showInformationMessage(
    `Imported ${totalRules} rules from CKL \u2192 ${outName}`
  );
}
