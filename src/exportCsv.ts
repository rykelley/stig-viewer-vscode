import { CklbDocument, CklbRule } from './types';

const STATUS_LABELS: Record<string, string> = {
  not_reviewed: 'Not Reviewed',
  open: 'Open',
  not_a_finding: 'Not a Finding',
  not_applicable: 'Not Applicable',
};

const SEV_LABELS: Record<string, string> = {
  high: 'CAT I',
  medium: 'CAT II',
  low: 'CAT III',
};

function csvEsc(s: string): string {
  if (!s) { return ''; }
  if (s.includes('"') || s.includes(',') || s.includes('\n') || s.includes('\r')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

export function buildCsv(data: CklbDocument): string {
  const headers = [
    'Vuln ID', 'Rule ID', 'Rule Version', 'Severity', 'Status',
    'Title', 'Finding Details', 'Comments', 'CCIs', 'SRG ID',
  ];

  const rows: string[] = [headers.map(csvEsc).join(',')];

  for (const stig of data.stigs) {
    for (const r of stig.rules) {
      rows.push([
        r.group_id,
        r.rule_id,
        r.rule_version,
        SEV_LABELS[r.severity] || r.severity,
        STATUS_LABELS[r.status] || r.status,
        r.rule_title,
        r.finding_details,
        r.comments,
        r.ccis.join('; '),
        r.srg_id,
      ].map(csvEsc).join(','));
    }
  }

  return rows.join('\r\n');
}
