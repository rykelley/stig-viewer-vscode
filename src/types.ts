/** Top-level .cklb document */
export interface CklbDocument {
  title: string;
  id: string;
  stigs: CklbStig[];
  active: boolean;
  mode: number;
  has_path: boolean;
  target_data: CklbTargetData;
  cklb_version: string;
}

export interface CklbTargetData {
  target_type: string;
  host_name: string;
  ip_address: string;
  mac_address: string;
  fqdn: string;
  comments: string;
  role: string;
  is_web_database: boolean;
  technology_area: string;
  web_db_site: string;
  web_db_instance: string;
  classification: string | null;
}

export interface CklbStig {
  stig_name: string;
  display_name: string;
  stig_id: string;
  release_info: string;
  version: string;
  uuid: string;
  reference_identifier: string;
  size: number;
  rules: CklbRule[];
}

export interface CklbRule {
  uuid: string;
  stig_uuid: string;
  target_key: string | null;
  stig_ref: string | null;
  group_id: string;
  rule_id: string;
  rule_id_src: string;
  weight: string;
  classification: string;
  severity: 'high' | 'medium' | 'low';
  rule_version: string;
  group_title: string;
  rule_title: string;
  fix_text: string;
  false_positives: string;
  false_negatives: string;
  discussion: string;
  check_content: string;
  documentable: string;
  mitigations: string;
  potential_impacts: string;
  third_party_tools: string;
  mitigation_control: string;
  responsibility: string;
  security_override_guidance: string;
  ia_controls: string;
  check_content_ref: { href: string; name: string };
  legacy_ids: string[];
  ccis: string[];
  group_tree: Array<{ id: string; title: string; description: string }>;
  createdAt: string;
  updatedAt: string;
  STIGUuid: string;
  status: 'not_reviewed' | 'open' | 'not_a_finding' | 'not_applicable';
  overrides: Record<string, unknown>;
  comments: string;
  finding_details: string;
  srg_id: string;
}
