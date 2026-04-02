import { CklbDocument } from './types';

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

export function buildPoam(data: CklbDocument): string {
  const headers = [
    'POA&M ID',
    'Vuln ID',
    'Rule ID',
    'Rule Version',
    'Raw Severity',
    'Weakness Description',
    'Source',
    'Finding Details',
    'Point of Contact',
    'Resources Required',
    'Scheduled Completion Date',
    'Milestones with Completion Dates',
    'Milestone Changes',
    'Identified By',
    'Status',
    'Comments',
    'CCIs',
    'Host Name',
  ];

  const rows: string[] = [headers.map(csvEsc).join(',')];
  let id = 1;

  for (const stig of data.stigs) {
    const openRules = stig.rules.filter(r => r.status === 'open');
    for (const r of openRules) {
      rows.push([
        String(id++),
        r.group_id,
        r.rule_id,
        r.rule_version,
        SEV_LABELS[r.severity] || r.severity,
        r.rule_title,
        `${stig.stig_name} ${stig.release_info}`,
        r.finding_details,
        '',  // POC — user fills in
        '',  // Resources — user fills in
        '',  // Scheduled completion — user fills in
        '',  // Milestones — user fills in
        '',  // Milestone changes — user fills in
        '',  // Identified by — user fills in
        'Ongoing',
        r.comments,
        r.ccis.join('; '),
        data.target_data.host_name,
      ].map(csvEsc).join(','));
    }
  }

  return rows.join('\r\n');
}
