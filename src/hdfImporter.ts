// Pure host-agnostic HDF (Heimdall Data Format) importer.
// No vscode.*, no Node fs, no DOM — safe to run anywhere TypeScript runs.

import { v4 as uuidv4 } from 'uuid';
import { CklbDocument, CklbRule, CklbStig, CklbTargetData } from './types';

// ─── HDF schema types ──────────────────────────────────────────────────────

export interface HdfDocument {
  platform?: { name?: string; release?: string };
  version?: string;
  statistics?: { duration?: number };
  profiles: HdfProfile[];
  passthrough?: {
    target?: {
      hostname?: string;
      fqdn?: string;
      ip_address?: string;
      mac_address?: string;
    };
    [key: string]: unknown;
  };
}

export interface HdfProfile {
  name: string;
  version?: string;
  sha256?: string;
  title?: string;
  maintainer?: string;
  summary?: string;
  supports?: Array<{ 'platform-family'?: string; platform?: string; release?: string }>;
  controls: HdfControl[];
}

export interface HdfControl {
  id: string;
  title: string;
  desc?: string;
  descriptions?: Array<{ label: string; data: string }>;
  impact?: number;
  refs?: unknown[];
  tags: {
    severity?: 'high' | 'medium' | 'low' | 'none';
    gtitle?: string;
    gid?: string;
    rid?: string;
    stig_id?: string;
    fix_id?: string;
    cci?: string[];
    nist?: string[];
    legacy?: string[];
    [key: string]: unknown;
  };
  code?: string;
  source_location?: { ref?: string; line?: number };
  results?: HdfResult[];
}

export interface HdfResult {
  status: 'passed' | 'failed' | 'skipped' | 'error';
  code_desc: string;
  message?: string;
  exception?: string;
  backtrace?: string[];
  run_time?: number;
  start_time?: string;
  resource?: string;
}

export interface HdfImportSummary {
  profileName: string;
  profileVersion?: string;
  hostName?: string;
  totalControls: number;
  matchedRules: number;
  unmatchedControls: number;
  unmatchedRules: number;
  statusBreakdown: {
    passed: number;
    failed: number;
    skipped: number;
    error: number;
    noResults: number;
  };
  appliedChanges: AppliedChange[];
  unmatchedControlIds: string[];
  unmatchedRuleVersions: string[];
  warnings: string[];
}

export interface AppliedChange {
  ruleVersion: string;
  groupId: string;
  oldStatus: string;
  newStatus: string;
  matchedBy: 'rule_version' | 'group_id' | 'gid_tag';
}

export interface HdfImportOptions {
  /** Default false. If false, keeps any status that isn't `not_reviewed`. */
  overwriteExistingStatus?: boolean;
  /** Default true. Append to existing finding_details with a divider instead of replacing. */
  preserveExistingFindingDetails?: boolean;
  /** Default true. Only fills empty target_data fields; never overwrites non-empty ones. */
  updateTargetData?: boolean;
}

// ─── Parse / detect ─────────────────────────────────────────────────────────

const INVALID_HDF_MSG =
  'The selected file is not valid HDF JSON. Expected structure: profiles[] with controls[].';

export function parseHdf(jsonContent: string): HdfDocument {
  let obj: unknown;
  try {
    obj = JSON.parse(jsonContent);
  } catch (e) {
    throw new Error(`${INVALID_HDF_MSG} (JSON parse error: ${(e as Error).message})`);
  }

  if (!obj || typeof obj !== 'object') {
    throw new Error(INVALID_HDF_MSG);
  }

  const doc = obj as Partial<HdfDocument>;
  if (!Array.isArray(doc.profiles) || doc.profiles.length === 0) {
    throw new Error(INVALID_HDF_MSG);
  }

  for (const profile of doc.profiles) {
    if (!profile || typeof profile !== 'object') {
      throw new Error(INVALID_HDF_MSG);
    }
    if (!Array.isArray(profile.controls)) {
      throw new Error(INVALID_HDF_MSG);
    }
    for (const ctrl of profile.controls) {
      if (!ctrl || typeof ctrl !== 'object') {
        throw new Error(INVALID_HDF_MSG);
      }
      if (typeof ctrl.id !== 'string' || typeof ctrl.title !== 'string') {
        throw new Error(INVALID_HDF_MSG);
      }
      if (!ctrl.tags || typeof ctrl.tags !== 'object') {
        // tags is required by the HDF schema; add an empty one defensively
        (ctrl as HdfControl).tags = {};
      }
    }
  }

  return doc as HdfDocument;
}

export function isLikelyHdf(jsonContent: string): boolean {
  try {
    const obj = JSON.parse(jsonContent) as { profiles?: Array<{ controls?: unknown }> };
    return Array.isArray(obj?.profiles) && Array.isArray(obj.profiles[0]?.controls);
  } catch {
    return false;
  }
}

// ─── Status mapping ────────────────────────────────────────────────────────

export function mapHdfStatus(results?: HdfResult[]): CklbRule['status'] {
  if (!results || results.length === 0) return 'not_reviewed';

  const hasFailed = results.some(r => r.status === 'failed');
  if (hasFailed) return 'open';

  const hasError = results.some(r => r.status === 'error');
  const hasPassed = results.some(r => r.status === 'passed');
  const allSkipped = results.every(r => r.status === 'skipped');

  if (allSkipped) return 'not_applicable';
  if (hasError && !hasPassed) return 'not_reviewed';
  if (hasPassed) return 'not_a_finding';
  return 'not_reviewed';
}

// ─── Severity derivation ───────────────────────────────────────────────────

export function deriveHdfSeverity(control: HdfControl): 'high' | 'medium' | 'low' {
  const tagSev = control.tags?.severity;
  if (tagSev === 'high' || tagSev === 'medium' || tagSev === 'low') {
    return tagSev;
  }
  if (typeof control.impact === 'number') {
    if (control.impact >= 0.7) return 'high';
    if (control.impact >= 0.4) return 'medium';
    return 'low';
  }
  return 'medium';
}

// ─── Description helpers ───────────────────────────────────────────────────

function getDescription(control: HdfControl, label: string): string {
  if (!control.descriptions) return '';
  const entry = control.descriptions.find(d => d.label === label);
  return entry?.data ?? '';
}

function getDiscussion(control: HdfControl): string {
  if (control.desc) return control.desc;
  return getDescription(control, 'default');
}

// ─── Finding details ───────────────────────────────────────────────────────

export function buildFindingDetails(control: HdfControl): string {
  if (!control.results || control.results.length === 0) {
    if (control.code) {
      const snippet = control.code.length > 500
        ? `${control.code.slice(0, 500)}…`
        : control.code;
      return `[HDF IMPORT] No test results recorded.\nInSpec control source (truncated):\n${snippet}`;
    }
    return '';
  }

  const lines: string[] = ['[HDF IMPORT] InSpec automated scan results:', ''];

  for (let i = 0; i < control.results.length; i++) {
    const result = control.results[i];
    lines.push(`Test ${i + 1}: ${result.status.toUpperCase()}`);
    lines.push(`  ${result.code_desc}`);
    if (result.message) lines.push(`  Message: ${result.message}`);
    if (result.exception) lines.push(`  Exception: ${result.exception}`);
    if (result.run_time !== undefined) lines.push(`  Duration: ${result.run_time}s`);
    if (result.start_time) lines.push(`  Started: ${result.start_time}`);
    lines.push('');
  }

  return lines.join('\n').trim();
}

// ─── Mode A: Apply HDF to existing checklist ───────────────────────────────

interface MatchedControl {
  control: HdfControl;
  rule: CklbRule;
  matchedBy: AppliedChange['matchedBy'];
}

function mergeFindingDetails(existing: string, incoming: string, preserve: boolean): string {
  if (!incoming) return existing;
  if (!existing || !preserve) return incoming;
  return `${existing}\n\n--- HDF Import ---\n${incoming}`;
}

function updateTargetDataFields(
  td: CklbTargetData,
  hdf: HdfDocument,
  touchedProfiles: HdfProfile[],
): void {
  const pt = hdf.passthrough;
  if (!pt) return;

  const target = pt.target;
  if (target) {
    if (!td.host_name && target.hostname) td.host_name = target.hostname;
    if (!td.fqdn && target.fqdn) td.fqdn = target.fqdn;
    if (!td.ip_address && target.ip_address) td.ip_address = target.ip_address;
    if (!td.mac_address && target.mac_address) td.mac_address = target.mac_address;
  }

  // Preserve any non-target passthrough payload (CDM data, SAF-specific keys) as JSON
  const extras: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(pt)) {
    if (k !== 'target') extras[k] = v;
  }
  if (Object.keys(extras).length > 0) {
    const snippet = `[HDF passthrough] ${JSON.stringify(extras)}`;
    if (!td.comments) {
      td.comments = snippet;
    } else if (!td.comments.includes('[HDF passthrough]')) {
      td.comments = `${td.comments}\n${snippet}`;
    }
  }

  // Note profile count if this HDF covered multiple profiles
  if (touchedProfiles.length > 1) {
    const noteLine = `[HDF] Scan covered ${touchedProfiles.length} profiles: ${touchedProfiles
      .map(p => p.title || p.name)
      .join(', ')}`;
    if (!td.comments) {
      td.comments = noteLine;
    } else if (!td.comments.includes('[HDF] Scan covered')) {
      td.comments = `${td.comments}\n${noteLine}`;
    }
  }
}

export function applyHdfToChecklist(
  doc: CklbDocument,
  hdf: HdfDocument,
  options?: HdfImportOptions,
): { updated: CklbDocument; summary: HdfImportSummary } {
  const opts: Required<HdfImportOptions> = {
    overwriteExistingStatus: options?.overwriteExistingStatus ?? false,
    preserveExistingFindingDetails: options?.preserveExistingFindingDetails ?? true,
    updateTargetData: options?.updateTargetData ?? true,
  };

  // Deep clone so the caller can do a clean WorkspaceEdit replace.
  const updated: CklbDocument = JSON.parse(JSON.stringify(doc));

  // Build lookup maps across all stigs in the checklist.
  const byRuleVersion = new Map<string, CklbRule>();
  const byGroupId = new Map<string, CklbRule>();
  for (const stig of updated.stigs) {
    for (const rule of stig.rules) {
      if (rule.rule_version) byRuleVersion.set(rule.rule_version, rule);
      if (rule.group_id) byGroupId.set(rule.group_id, rule);
    }
  }

  const warnings: string[] = [];
  const statusBreakdown = { passed: 0, failed: 0, skipped: 0, error: 0, noResults: 0 };
  const appliedChanges: AppliedChange[] = [];
  const unmatchedControlIds: string[] = [];
  const matchedRuleUuids = new Set<string>();

  let totalControls = 0;
  let missingStigId = 0;

  // Iterate every profile; later profiles' matches overlay earlier ones.
  const matchedByKey = new Map<string, MatchedControl>();

  for (const profile of hdf.profiles) {
    for (const control of profile.controls) {
      totalControls++;

      // Update status breakdown (per-control, based on first/aggregate result mapping)
      if (!control.results || control.results.length === 0) {
        statusBreakdown.noResults++;
      } else {
        const hasFailed = control.results.some(r => r.status === 'failed');
        const hasError = control.results.some(r => r.status === 'error');
        const hasPassed = control.results.some(r => r.status === 'passed');
        const allSkipped = control.results.every(r => r.status === 'skipped');
        if (hasFailed) statusBreakdown.failed++;
        else if (allSkipped) statusBreakdown.skipped++;
        else if (hasPassed) statusBreakdown.passed++;
        else if (hasError) statusBreakdown.error++;
        else statusBreakdown.noResults++;
      }

      if (!control.tags?.stig_id) missingStigId++;

      let rule: CklbRule | undefined;
      let matchedBy: AppliedChange['matchedBy'] | undefined;

      const stigId = control.tags?.stig_id;
      if (stigId && byRuleVersion.has(stigId)) {
        rule = byRuleVersion.get(stigId);
        matchedBy = 'rule_version';
      } else if (control.id && byGroupId.has(control.id)) {
        rule = byGroupId.get(control.id);
        matchedBy = 'group_id';
      } else if (control.tags?.gid && byGroupId.has(control.tags.gid)) {
        rule = byGroupId.get(control.tags.gid);
        matchedBy = 'gid_tag';
      }

      if (!rule || !matchedBy) {
        unmatchedControlIds.push(control.tags?.stig_id || control.id);
        continue;
      }

      matchedByKey.set(rule.uuid, { control, rule, matchedBy });
    }
  }

  const now = new Date().toISOString();

  for (const { control, rule, matchedBy } of matchedByKey.values()) {
    const newStatus = mapHdfStatus(control.results);
    const oldStatus = rule.status;

    const canOverwriteStatus =
      opts.overwriteExistingStatus || rule.status === 'not_reviewed';

    let appliedStatus = oldStatus;
    if (canOverwriteStatus) {
      rule.status = newStatus;
      appliedStatus = newStatus;
    }

    const incoming = buildFindingDetails(control);
    if (incoming) {
      rule.finding_details = mergeFindingDetails(
        rule.finding_details,
        incoming,
        opts.preserveExistingFindingDetails,
      );
    }

    rule.updatedAt = now;
    matchedRuleUuids.add(rule.uuid);

    appliedChanges.push({
      ruleVersion: rule.rule_version,
      groupId: rule.group_id,
      oldStatus,
      newStatus: appliedStatus,
      matchedBy,
    });
  }

  // Unmatched checklist rules
  const unmatchedRuleVersions: string[] = [];
  for (const stig of updated.stigs) {
    for (const rule of stig.rules) {
      if (!matchedRuleUuids.has(rule.uuid)) {
        unmatchedRuleVersions.push(rule.rule_version || rule.group_id);
      }
    }
  }

  // Target data update
  if (opts.updateTargetData) {
    updateTargetDataFields(updated.target_data, hdf, hdf.profiles);
  }

  if (missingStigId > 0) {
    warnings.push(
      `${missingStigId} HDF control(s) lacked tags.stig_id; matching fell back to control.id / tags.gid.`,
    );
  }

  const firstProfile = hdf.profiles[0];
  const summary: HdfImportSummary = {
    profileName: firstProfile?.title || firstProfile?.name || '(unknown profile)',
    profileVersion: firstProfile?.version,
    hostName: hdf.passthrough?.target?.hostname || hdf.passthrough?.target?.fqdn,
    totalControls,
    matchedRules: matchedRuleUuids.size,
    unmatchedControls: unmatchedControlIds.length,
    unmatchedRules: unmatchedRuleVersions.length,
    statusBreakdown,
    appliedChanges,
    unmatchedControlIds,
    unmatchedRuleVersions,
    warnings,
  };

  return { updated, summary };
}

// ─── Mode B: Generate new checklist from HDF ───────────────────────────────

function blankTargetData(): CklbTargetData {
  return {
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
}

function controlToRule(
  control: HdfControl,
  stigUuid: string,
  now: string,
): CklbRule {
  const discussion = getDiscussion(control);
  const checkContent = getDescription(control, 'check');
  const fixText = getDescription(control, 'fix');
  const severity = deriveHdfSeverity(control);
  const status = mapHdfStatus(control.results);
  const finding_details = buildFindingDetails(control);
  const ruleUuid = uuidv4();

  const groupId = control.tags?.gid || control.id;
  const ruleId = control.tags?.rid || '';
  const ruleVersion = control.tags?.stig_id || control.id;
  const srgId = control.tags?.gtitle || '';
  const ccis = Array.isArray(control.tags?.cci) ? [...(control.tags.cci as string[])] : [];
  const legacyIds = Array.isArray(control.tags?.legacy)
    ? [...(control.tags.legacy as string[])]
    : [];

  return {
    uuid: ruleUuid,
    stig_uuid: stigUuid,
    target_key: null,
    stig_ref: null,
    group_id: groupId,
    rule_id: ruleId,
    rule_id_src: ruleId,
    weight: '10.0',
    classification: 'Unclassified',
    severity,
    rule_version: ruleVersion,
    group_title: srgId,
    rule_title: control.title,
    fix_text: fixText,
    false_positives: '',
    false_negatives: '',
    discussion,
    check_content: checkContent,
    documentable: '',
    mitigations: '',
    potential_impacts: '',
    third_party_tools: '',
    mitigation_control: '',
    responsibility: '',
    security_override_guidance: '',
    ia_controls: '',
    check_content_ref: { href: '', name: '' },
    legacy_ids: legacyIds,
    ccis,
    group_tree: [{ id: groupId, title: srgId, description: discussion }],
    createdAt: now,
    updatedAt: now,
    STIGUuid: stigUuid,
    status,
    overrides: {},
    comments: '',
    finding_details,
    srg_id: srgId,
  };
}

export function hdfToNewChecklist(hdf: HdfDocument): CklbDocument {
  const now = new Date().toISOString();
  const docId = uuidv4();

  const stigs: CklbStig[] = [];
  for (const profile of hdf.profiles) {
    const stigUuid = uuidv4();
    const rules: CklbRule[] = profile.controls.map(c => controlToRule(c, stigUuid, now));
    const stigName = profile.title || profile.name || 'InSpec Profile';
    stigs.push({
      stig_name: stigName,
      display_name: stigName,
      stig_id: profile.name,
      release_info: profile.version ? `Version ${profile.version}` : '',
      version: profile.version || '1',
      uuid: stigUuid,
      reference_identifier: profile.name,
      size: rules.length,
      rules,
    });
  }

  const targetData = blankTargetData();
  const target = hdf.passthrough?.target;
  if (target) {
    if (target.hostname) targetData.host_name = target.hostname;
    if (target.fqdn) targetData.fqdn = target.fqdn;
    if (target.ip_address) targetData.ip_address = target.ip_address;
    if (target.mac_address) targetData.mac_address = target.mac_address;
  }

  // Preserve passthrough extras for provenance
  if (hdf.passthrough) {
    const extras: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(hdf.passthrough)) {
      if (k !== 'target') extras[k] = v;
    }
    if (Object.keys(extras).length > 0) {
      targetData.comments = `[HDF passthrough] ${JSON.stringify(extras)}`;
    }
  }

  const firstProfile = hdf.profiles[0];
  const title =
    firstProfile?.title || firstProfile?.name || 'InSpec / HDF Import';

  return {
    title,
    id: docId,
    stigs,
    active: true,
    mode: 1,
    has_path: true,
    target_data: targetData,
    cklb_version: '1',
  };
}

// ─── Markdown report ───────────────────────────────────────────────────────

const STATUS_LABELS: Record<string, string> = {
  not_reviewed: 'Not Reviewed',
  open: 'Open',
  not_a_finding: 'Not a Finding',
  not_applicable: 'Not Applicable',
};

function mdEscape(s: string): string {
  return s.replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

export function generateHdfImportReport(
  summary: HdfImportSummary,
  checklistTitle: string,
): string {
  const lines: string[] = [];
  lines.push('# HDF Import Report');
  lines.push('');
  lines.push(`**Source:** ${summary.profileName}`);
  if (summary.profileVersion) {
    lines.push(`**Profile Version:** ${summary.profileVersion}`);
  }
  if (summary.hostName) {
    lines.push(`**Target Host:** ${summary.hostName}`);
  }
  lines.push(`**Imported:** ${new Date().toISOString()}`);
  lines.push(`**Checklist:** ${checklistTitle}`);
  lines.push('');

  lines.push('## Summary');
  lines.push('');
  lines.push('| Metric | Count |');
  lines.push('|--------|-------|');
  lines.push(`| HDF Controls | ${summary.totalControls} |`);
  lines.push(`| Matched to Checklist | ${summary.matchedRules} |`);
  lines.push(`| Unmatched HDF Controls | ${summary.unmatchedControls} |`);
  lines.push(`| Unmatched Checklist Rules | ${summary.unmatchedRules} |`);
  lines.push('');

  lines.push('## Status Breakdown (HDF Results)');
  lines.push('');
  lines.push('| Status | Count |');
  lines.push('|--------|-------|');
  lines.push(`| Open (failed) | ${summary.statusBreakdown.failed} |`);
  lines.push(`| Not a Finding (passed) | ${summary.statusBreakdown.passed} |`);
  lines.push(`| Not Applicable (skipped) | ${summary.statusBreakdown.skipped} |`);
  lines.push(
    `| Not Reviewed (error/no results) | ${
      summary.statusBreakdown.error + summary.statusBreakdown.noResults
    } |`,
  );
  lines.push('');

  if (summary.warnings.length > 0) {
    lines.push('## Warnings');
    lines.push('');
    for (const w of summary.warnings) {
      lines.push(`- ${w}`);
    }
    lines.push('');
  }

  lines.push('## Rules Updated');
  lines.push('');
  if (summary.appliedChanges.length === 0) {
    lines.push('_No rules were updated._');
  } else {
    lines.push('| Rule Version | Vuln ID | Old Status | New Status | Matched By |');
    lines.push('|--------------|---------|------------|------------|------------|');
    for (const ch of summary.appliedChanges) {
      lines.push(
        `| ${mdEscape(ch.ruleVersion)} | ${mdEscape(ch.groupId)} | ${
          STATUS_LABELS[ch.oldStatus] || ch.oldStatus
        } | ${STATUS_LABELS[ch.newStatus] || ch.newStatus} | ${ch.matchedBy} |`,
      );
    }
  }
  lines.push('');

  lines.push('## Unmatched HDF Controls');
  lines.push('');
  lines.push(
    'These controls in the HDF file had no corresponding rule in the checklist. ' +
      "This may indicate a STIG version mismatch or that the HDF covers additional " +
      "controls beyond the checklist's STIG.",
  );
  lines.push('');
  if (summary.unmatchedControlIds.length === 0) {
    lines.push('_None._');
  } else {
    for (const id of summary.unmatchedControlIds) {
      lines.push(`- ${id}`);
    }
  }
  lines.push('');

  lines.push('## Unmatched Checklist Rules');
  lines.push('');
  lines.push(
    'These rules in the checklist were not addressed by any HDF control. ' +
      'They retain their previous status.',
  );
  lines.push('');
  if (summary.unmatchedRuleVersions.length === 0) {
    lines.push('_None._');
  } else {
    for (const rv of summary.unmatchedRuleVersions) {
      lines.push(`- ${rv}`);
    }
  }
  lines.push('');

  return lines.join('\n');
}
