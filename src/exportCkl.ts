import { CklbDocument, CklbRule, CklbStig } from './types';

function x(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const STATUS_MAP: Record<string, string> = {
  not_reviewed: 'Not_Reviewed',
  open: 'Open',
  not_a_finding: 'NotAFinding',
  not_applicable: 'Not_Applicable',
};

function stigData(name: string, data: string): string {
  return `        <STIG_DATA>\n          <VULN_ATTRIBUTE>${x(name)}</VULN_ATTRIBUTE>\n          <ATTRIBUTE_DATA>${x(data)}</ATTRIBUTE_DATA>\n        </STIG_DATA>`;
}

function buildVuln(r: CklbRule): string {
  const parts: string[] = [
    stigData('Vuln_Num', r.group_id),
    stigData('Severity', r.severity),
    stigData('Group_Title', r.group_title),
    stigData('Rule_ID', r.rule_id),
    stigData('Rule_Ver', r.rule_version),
    stigData('Rule_Title', r.rule_title),
    stigData('Vuln_Discuss', r.discussion),
    stigData('IA_Controls', r.ia_controls),
    stigData('Check_Content', r.check_content),
    stigData('Fix_Text', r.fix_text),
    stigData('False_Positives', r.false_positives),
    stigData('False_Negatives', r.false_negatives),
    stigData('Documentable', r.documentable),
    stigData('Mitigations', r.mitigations),
    stigData('Potential_Impact', r.potential_impacts),
    stigData('Third_Party_Tools', r.third_party_tools),
    stigData('Mitigation_Control', r.mitigation_control),
    stigData('Responsibility', r.responsibility),
    stigData('Security_Override_Guidance', r.security_override_guidance),
    stigData('Check_Content_Ref', r.check_content_ref?.href || ''),
    stigData('Weight', r.weight),
    stigData('Class', r.classification),
    stigData('STIGRef', r.stig_ref || ''),
    stigData('TargetKey', r.target_key || ''),
  ];

  for (const cci of r.ccis) {
    parts.push(stigData('CCI_REF', cci));
  }
  for (const lid of r.legacy_ids) {
    parts.push(stigData('Legacy_ID', lid));
  }

  return `      <VULN>
${parts.join('\n')}
        <STATUS>${x(STATUS_MAP[r.status] || 'Not_Reviewed')}</STATUS>
        <FINDING_DETAILS>${x(r.finding_details)}</FINDING_DETAILS>
        <COMMENTS>${x(r.comments)}</COMMENTS>
        <SEVERITY_OVERRIDE></SEVERITY_OVERRIDE>
        <SEVERITY_JUSTIFICATION></SEVERITY_JUSTIFICATION>
      </VULN>`;
}

function siData(name: string, data: string): string {
  return `          <SI_DATA>\n            <SID_NAME>${x(name)}</SID_NAME>\n            <SID_DATA>${x(data)}</SID_DATA>\n          </SI_DATA>`;
}

function buildIStig(stig: CklbStig): string {
  const info = [
    siData('version', stig.version),
    siData('classification', 'UNCLASSIFIED'),
    siData('customname', ''),
    siData('stigid', stig.stig_id),
    siData('description', ''),
    siData('filename', ''),
    siData('releaseinfo', stig.release_info),
    siData('title', stig.stig_name),
    siData('uuid', stig.uuid),
    siData('notice', 'terms-of-use'),
    siData('source', ''),
  ].join('\n');

  const vulns = stig.rules.map(buildVuln).join('\n');

  return `    <iSTIG>
        <STIG_INFO>
${info}
        </STIG_INFO>
${vulns}
    </iSTIG>`;
}

export function buildCkl(data: CklbDocument): string {
  const td = data.target_data;
  const webDb = td.is_web_database ? 'true' : 'false';

  const asset = `  <ASSET>
    <ROLE>${x(td.role)}</ROLE>
    <ASSET_TYPE>${x(td.target_type)}</ASSET_TYPE>
    <HOST_NAME>${x(td.host_name)}</HOST_NAME>
    <HOST_IP>${x(td.ip_address)}</HOST_IP>
    <HOST_MAC>${x(td.mac_address)}</HOST_MAC>
    <HOST_FQDN>${x(td.fqdn)}</HOST_FQDN>
    <TARGET_COMMENT>${x(td.comments)}</TARGET_COMMENT>
    <TECH_AREA>${x(td.technology_area)}</TECH_AREA>
    <TARGET_KEY></TARGET_KEY>
    <WEB_OR_DATABASE>${webDb}</WEB_OR_DATABASE>
    <WEB_DB_SITE>${x(td.web_db_site)}</WEB_DB_SITE>
    <WEB_DB_INSTANCE>${x(td.web_db_instance)}</WEB_DB_INSTANCE>
  </ASSET>`;

  const stigs = data.stigs.map(buildIStig).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<!--DISA STIG Viewer :: 2.x-->
<CHECKLIST>
${asset}
  <STIGS>
${stigs}
  </STIGS>
</CHECKLIST>`;
}
