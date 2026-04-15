import { CklbDocument } from './types';
import { CciEntry, CCI_TO_NIST, lookupCci } from './cciNistMap';

// ─── Types ──────────────────────────────────────────────────────────────────

export interface NistControl {
  controlId: string;
  title?: string;
  family?: string;
  description?: string;
  extra?: Record<string, string>;
}

export type ControlStatus = 'fully_satisfied' | 'partially_satisfied' | 'at_risk' | 'not_covered';
export type MappedRuleStatus = 'passing' | 'open' | 'not_reviewed';

export interface MappedRule {
  groupId: string;
  ruleVersion: string;
  severity: 'high' | 'medium' | 'low';
  ruleTitle: string;
  status: string;
  mappedStatus: MappedRuleStatus;
  cci: string;
}

export interface ControlMapping {
  control: NistControl;
  status: ControlStatus;
  mappedRules: MappedRule[];
  ccis: string[];
}

export interface CrosswalkResult {
  analyzedAt: string;
  checklistTitle: string;
  stigName: string;
  totalNistControls: number;
  coveredControls: number;
  uncoveredControls: number;
  fullySatisfiedControls: number;
  atRiskControls: number;
  partiallySatisfiedControls: number;
  controlMappings: ControlMapping[];
  unmappedCciCount: number;
}

// ─── CSV parser ─────────────────────────────────────────────────────────────

const CONTROL_ID_RE = /^[A-Z]{2}-\d+(\s*\(\d+\))?$/;

function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let cur = '';
  let inQuote = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuote) {
      if (ch === '"') {
        if (i + 1 < line.length && line[i + 1] === '"') { cur += '"'; i++; }
        else { inQuote = false; }
      } else { cur += ch; }
    } else {
      if (ch === '"') { inQuote = true; }
      else if (ch === ',') { fields.push(cur.trim()); cur = ''; }
      else { cur += ch; }
    }
  }
  fields.push(cur.trim());
  return fields;
}

export function parseNistControlsCsv(csvContent: string): NistControl[] {
  const lines = csvContent.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (lines.length < 2) return [];

  const header = parseCsvLine(lines[0]);
  const lowerHeader = header.map(h => h.toLowerCase().replace(/[_\s-]+/g, ' ').trim());

  let controlCol = -1;
  for (let i = 0; i < header.length; i++) {
    const h = lowerHeader[i];
    if (h.includes('control') && (h.includes('id') || h.includes('identifier'))) { controlCol = i; break; }
  }

  if (controlCol < 0) {
    for (let i = 0; i < header.length; i++) {
      let matches = 0;
      for (let j = 1; j < Math.min(lines.length, 10); j++) {
        const row = parseCsvLine(lines[j]);
        if (row[i] && CONTROL_ID_RE.test(row[i].trim())) matches++;
      }
      if (matches >= Math.min(lines.length - 1, 3)) { controlCol = i; break; }
    }
  }

  if (controlCol < 0) {
    for (let i = 0; i < header.length; i++) {
      if (CONTROL_ID_RE.test(header[i].trim())) continue;
      const h = lowerHeader[i];
      if (h.includes('control') || h === 'id') { controlCol = i; break; }
    }
  }

  if (controlCol < 0) controlCol = 0;

  const titleCol = lowerHeader.findIndex((h, i) => i !== controlCol && (h.includes('title') || h.includes('name')));
  const familyCol = lowerHeader.findIndex((h, i) => i !== controlCol && h.includes('family'));
  const descCol = lowerHeader.findIndex((h, i) => i !== controlCol && (h.includes('description') || h.includes('text')));

  const seen = new Set<string>();
  const controls: NistControl[] = [];

  for (let r = 1; r < lines.length; r++) {
    const row = parseCsvLine(lines[r]);
    const raw = (row[controlCol] ?? '').trim();
    if (!raw || !CONTROL_ID_RE.test(raw)) continue;
    const controlId = raw.replace(/\s+/g, ' ');
    if (seen.has(controlId)) continue;
    seen.add(controlId);

    const nc: NistControl = { controlId };
    if (titleCol >= 0 && row[titleCol]) nc.title = row[titleCol].trim();
    if (familyCol >= 0 && row[familyCol]) nc.family = row[familyCol].trim();
    if (descCol >= 0 && row[descCol]) nc.description = row[descCol].trim();

    const extra: Record<string, string> = {};
    for (let c = 0; c < header.length; c++) {
      if (c === controlCol || c === titleCol || c === familyCol || c === descCol) continue;
      if (row[c]?.trim()) extra[header[c]] = row[c].trim();
    }
    if (Object.keys(extra).length > 0) nc.extra = extra;

    controls.push(nc);
  }
  return controls;
}

// ─── Crosswalk analysis ─────────────────────────────────────────────────────

function baseControl(controlId: string): string {
  return controlId.replace(/\s*\(\d+\)$/, '').trim();
}

function ruleStatus(status: string): MappedRuleStatus {
  if (status === 'not_a_finding' || status === 'not_applicable') return 'passing';
  if (status === 'open') return 'open';
  return 'not_reviewed';
}

function controlStatus(rules: MappedRule[]): ControlStatus {
  if (rules.length === 0) return 'not_covered';
  const allPassing = rules.every(r => r.mappedStatus === 'passing');
  if (allPassing) return 'fully_satisfied';
  const anyPassing = rules.some(r => r.mappedStatus === 'passing');
  if (anyPassing) return 'partially_satisfied';
  return 'at_risk';
}

const STATUS_ORDER: Record<ControlStatus, number> = {
  not_covered: 0, at_risk: 1, partially_satisfied: 2, fully_satisfied: 3,
};

export function analyzeCrosswalk(
  doc: CklbDocument,
  nistControls: NistControl[],
  cciMap?: Record<string, CciEntry>,
): CrosswalkResult {
  const effectiveMap: Record<string, CciEntry> = { ...CCI_TO_NIST, ...cciMap };

  // 1. Reverse lookup: NIST control → CCIs
  const controlToCcis = new Map<string, Set<string>>();
  for (const [cci, entry] of Object.entries(effectiveMap)) {
    const ctrl = entry.control;
    if (!controlToCcis.has(ctrl)) controlToCcis.set(ctrl, new Set());
    controlToCcis.get(ctrl)!.add(cci);
  }

  // 2. Forward lookup: CCI → checklist rules
  const cciToRules = new Map<string, Array<{ rule: typeof doc.stigs[0]['rules'][0]; cci: string }>>();
  let unmappedCciCount = 0;
  for (const stig of doc.stigs) {
    for (const rule of stig.rules) {
      for (const cci of rule.ccis) {
        if (!effectiveMap[cci]) { unmappedCciCount++; continue; }
        if (!cciToRules.has(cci)) cciToRules.set(cci, []);
        cciToRules.get(cci)!.push({ rule, cci });
      }
    }
  }

  // 3. Per-control mapping
  const mappings: ControlMapping[] = [];

  for (const nc of nistControls) {
    const isBase = !nc.controlId.includes('(');
    const relevantCcis = new Set<string>();

    if (isBase) {
      for (const [ctrl, ccis] of controlToCcis.entries()) {
        if (baseControl(ctrl) === nc.controlId) {
          for (const c of ccis) relevantCcis.add(c);
        }
      }
    } else {
      const ccis = controlToCcis.get(nc.controlId);
      if (ccis) { for (const c of ccis) relevantCcis.add(c); }
    }

    const seenRules = new Set<string>();
    const mapped: MappedRule[] = [];

    for (const cci of relevantCcis) {
      const entries = cciToRules.get(cci) ?? [];
      for (const { rule } of entries) {
        const key = `${rule.group_id}::${cci}`;
        if (seenRules.has(key)) continue;
        seenRules.add(key);
        mapped.push({
          groupId: rule.group_id,
          ruleVersion: rule.rule_version,
          severity: rule.severity,
          ruleTitle: rule.rule_title,
          status: rule.status,
          mappedStatus: ruleStatus(rule.status),
          cci,
        });
      }
    }

    mappings.push({
      control: nc,
      status: controlStatus(mapped),
      mappedRules: mapped,
      ccis: [...relevantCcis].sort(),
    });
  }

  mappings.sort((a, b) => {
    const d = STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
    if (d !== 0) return d;
    return a.control.controlId.localeCompare(b.control.controlId, undefined, { numeric: true });
  });

  const stigName = doc.stigs.map(s => s.display_name || s.stig_name).join(', ');

  return {
    analyzedAt: new Date().toISOString(),
    checklistTitle: doc.title,
    stigName,
    totalNistControls: nistControls.length,
    coveredControls: mappings.filter(m => m.status !== 'not_covered').length,
    uncoveredControls: mappings.filter(m => m.status === 'not_covered').length,
    fullySatisfiedControls: mappings.filter(m => m.status === 'fully_satisfied').length,
    partiallySatisfiedControls: mappings.filter(m => m.status === 'partially_satisfied').length,
    atRiskControls: mappings.filter(m => m.status === 'at_risk').length,
    controlMappings: mappings,
    unmappedCciCount,
  };
}

// ─── CSV export ─────────────────────────────────────────────────────────────

function csvEsc(v: string): string {
  if (v.includes(',') || v.includes('"') || v.includes('\n')) return `"${v.replace(/"/g, '""')}"`;
  return v;
}

export function buildCrosswalkCsv(result: CrosswalkResult): string {
  const header = 'Control ID,Title,Family,Status,Mapped Rules,Passing,Open,Not Reviewed,CCIs,Rule Details';
  const rows = result.controlMappings.map(m => {
    const passing = m.mappedRules.filter(r => r.mappedStatus === 'passing').length;
    const open = m.mappedRules.filter(r => r.mappedStatus === 'open').length;
    const nr = m.mappedRules.filter(r => r.mappedStatus === 'not_reviewed').length;
    const details = m.mappedRules.map(r => `${r.groupId} (${r.status.replace(/_/g, ' ')})`).join('; ');
    return [
      csvEsc(m.control.controlId),
      csvEsc(m.control.title ?? ''),
      csvEsc(m.control.family ?? ''),
      csvEsc(m.status.replace(/_/g, ' ')),
      String(m.mappedRules.length),
      String(passing),
      String(open),
      String(nr),
      csvEsc(m.ccis.join(', ')),
      csvEsc(details),
    ].join(',');
  });
  return [header, ...rows].join('\n');
}
