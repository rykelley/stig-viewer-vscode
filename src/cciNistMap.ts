import { parseStringPromise, processors } from 'xml2js';

// ─── Types ──────────────────────────────────────────────────────────────────

export interface CciEntry {
  control: string;
  title: string;
  definition: string;
}

// ─── Bundled CCI → NIST 800-53 mapping ─────────────────────────────────────
// Source: DISA U_CCI_List.xml — covers the most common CCIs across popular STIGs.
// Users can import the full XML for complete coverage (~5 000 entries).

export const CCI_TO_NIST: Record<string, CciEntry> = {
  // ── Access Control (AC) ─────────────────────────────────────────────────
  'CCI-000005': { control: 'AC-2',     title: 'Account Management', definition: 'The organization manages information system accounts, including establishing, activating, modifying, reviewing, disabling, and removing accounts.' },
  'CCI-000009': { control: 'AC-2',     title: 'Account Management', definition: 'The organization reviews information system accounts for compliance with account management requirements.' },
  'CCI-000010': { control: 'AC-2',     title: 'Account Management', definition: 'The organization requires approvals by organization-defined personnel or roles for requests to create information system accounts.' },
  'CCI-000012': { control: 'AC-2',     title: 'Account Management', definition: 'The organization creates, enables, modifies, disables, and removes information system accounts in accordance with organization-defined procedures or conditions.' },
  'CCI-000015': { control: 'AC-2 (1)', title: 'Account Management | Automated System Account Management', definition: 'The organization employs automated mechanisms to support the management of information system accounts.' },
  'CCI-000017': { control: 'AC-2 (2)', title: 'Account Management | Removal of Temporary/Emergency Accounts', definition: 'The information system automatically removes or disables temporary and emergency accounts after a defined time period.' },
  'CCI-000018': { control: 'AC-2 (3)', title: 'Account Management | Disable Inactive Accounts', definition: 'The information system automatically disables inactive accounts after a defined time period.' },
  'CCI-000019': { control: 'AC-2 (3)', title: 'Account Management | Disable Inactive Accounts', definition: 'The organization defines the time period after which the information system automatically disables inactive accounts.' },
  'CCI-000020': { control: 'AC-2 (3)', title: 'Account Management | Disable Inactive Accounts', definition: 'The information system automatically disables inactive accounts after the organization-defined time period.' },
  'CCI-000023': { control: 'AC-2 (4)', title: 'Account Management | Automated Audit Actions', definition: 'The information system automatically audits account creation, modification, enabling, disabling, and removal actions and notifies organization-defined personnel or roles.' },
  'CCI-000032': { control: 'AC-3',     title: 'Access Enforcement', definition: 'The information system enforces approved authorizations for logical access to information and system resources.' },
  'CCI-000033': { control: 'AC-3 (3)', title: 'Access Enforcement | Mandatory Access Control', definition: 'The information system enforces organization-defined mandatory access control policy.' },
  'CCI-000038': { control: 'AC-6',     title: 'Least Privilege', definition: 'The organization employs the principle of least privilege, allowing only authorized accesses for users which are necessary to accomplish assigned tasks.' },
  'CCI-000039': { control: 'AC-6 (1)', title: 'Least Privilege | Authorize Access to Security Functions', definition: 'The organization explicitly authorizes access to organization-defined security functions and security-relevant information.' },
  'CCI-000040': { control: 'AC-6 (1)', title: 'Least Privilege | Authorize Access to Security Functions', definition: 'The organization explicitly authorizes access to organization-defined security functions.' },
  'CCI-000044': { control: 'AC-7',     title: 'Unsuccessful Logon Attempts', definition: 'The information system enforces a limit of consecutive invalid logon attempts by a user during a defined time period.' },
  'CCI-000045': { control: 'AC-7',     title: 'Unsuccessful Logon Attempts', definition: 'The organization defines the number of consecutive invalid logon attempts allowed.' },
  'CCI-000047': { control: 'AC-7',     title: 'Unsuccessful Logon Attempts', definition: 'The information system automatically locks the account/node until released by an administrator when the maximum number of unsuccessful attempts is exceeded.' },
  'CCI-000048': { control: 'AC-8',     title: 'System Use Notification', definition: 'The information system displays an approved system use notification message or banner before granting access.' },
  'CCI-000050': { control: 'AC-8',     title: 'System Use Notification', definition: 'The information system retains the notification message or banner on the screen until users acknowledge the usage conditions.' },
  'CCI-000054': { control: 'AC-10',    title: 'Concurrent Session Control', definition: 'The information system limits the number of concurrent sessions for each account to an organization-defined number.' },
  'CCI-000056': { control: 'AC-11',    title: 'Session Lock', definition: 'The information system initiates a session lock after the organization-defined time period of inactivity.' },
  'CCI-000057': { control: 'AC-11',    title: 'Session Lock', definition: 'The information system provides the capability for users to initiate a session lock for display devices.' },
  'CCI-000058': { control: 'AC-11 (1)', title: 'Session Lock | Pattern-Hiding Displays', definition: 'The information system conceals, via the session lock, information previously visible on the display.' },
  'CCI-000060': { control: 'AC-11',    title: 'Session Lock', definition: 'The organization defines the time period of inactivity after which the information system initiates a session lock.' },
  'CCI-000068': { control: 'AC-17 (2)', title: 'Remote Access | Protection of Confidentiality/Integrity Using Encryption', definition: 'The information system implements cryptographic mechanisms to protect the confidentiality and integrity of remote access sessions.' },
  'CCI-000070': { control: 'AC-17 (2)', title: 'Remote Access | Protection of Confidentiality/Integrity Using Encryption', definition: 'The organization defines cryptographic requirements for protecting confidentiality and integrity of remote access sessions.' },
  'CCI-000082': { control: 'AC-17 (9)', title: 'Remote Access | Disconnect/Disable Access', definition: 'The organization provides the capability to expeditiously disconnect or disable remote access.' },
  'CCI-000213': { control: 'AC-3',     title: 'Access Enforcement', definition: 'The information system enforces approved authorizations for logical access to information and system resources in accordance with applicable access control policies.' },
  'CCI-001084': { control: 'SC-3',     title: 'Security Function Isolation', definition: 'The information system isolates security functions from nonsecurity functions.' },

  // ── Audit and Accountability (AU) ───────────────────────────────────────
  'CCI-000126': { control: 'AU-2',     title: 'Audit Events', definition: 'The organization determines that the information system is capable of auditing organization-defined auditable events.' },
  'CCI-000130': { control: 'AU-3',     title: 'Content of Audit Records', definition: 'The information system generates audit records containing information that establishes what type of event occurred.' },
  'CCI-000131': { control: 'AU-3',     title: 'Content of Audit Records', definition: 'The information system generates audit records containing information that establishes when an event occurred.' },
  'CCI-000132': { control: 'AU-3',     title: 'Content of Audit Records', definition: 'The information system generates audit records containing information that establishes where the event occurred.' },
  'CCI-000133': { control: 'AU-3',     title: 'Content of Audit Records', definition: 'The information system generates audit records containing information that establishes the source of the event.' },
  'CCI-000134': { control: 'AU-3',     title: 'Content of Audit Records', definition: 'The information system generates audit records containing information that establishes the outcome of the event.' },
  'CCI-000135': { control: 'AU-3 (1)', title: 'Content of Audit Records | Additional Audit Information', definition: 'The information system generates audit records containing organization-defined additional, more detailed information.' },
  'CCI-000136': { control: 'AU-3 (2)', title: 'Content of Audit Records | Centralized Management', definition: 'The information system provides centralized management and configuration of the content to be captured in audit records.' },
  'CCI-000139': { control: 'AU-5',     title: 'Response to Audit Processing Failures', definition: 'The information system alerts designated personnel in the event of an audit processing failure.' },
  'CCI-000140': { control: 'AU-5',     title: 'Response to Audit Processing Failures', definition: 'The information system takes organization-defined actions in the event of an audit processing failure.' },
  'CCI-000154': { control: 'AU-6',     title: 'Audit Review, Analysis, and Reporting', definition: 'The organization reviews and analyzes information system audit records for indications of inappropriate or unusual activity.' },
  'CCI-000158': { control: 'AU-7',     title: 'Audit Reduction and Report Generation', definition: 'The information system provides an audit reduction and report generation capability.' },
  'CCI-000162': { control: 'AU-9',     title: 'Protection of Audit Information', definition: 'The information system protects audit information from unauthorized access.' },
  'CCI-000163': { control: 'AU-9',     title: 'Protection of Audit Information', definition: 'The information system protects audit information from unauthorized modification.' },
  'CCI-000164': { control: 'AU-9',     title: 'Protection of Audit Information', definition: 'The information system protects audit information from unauthorized deletion.' },
  'CCI-000166': { control: 'AU-10',    title: 'Non-repudiation', definition: 'The information system protects against an individual falsely denying having performed a particular action.' },
  'CCI-000167': { control: 'AU-10',    title: 'Non-repudiation', definition: 'The information system provides irrefutable evidence that a specific action was performed.' },
  'CCI-000169': { control: 'AU-12',    title: 'Audit Generation', definition: 'The information system provides audit record generation capability for the auditable events defined.' },
  'CCI-000171': { control: 'AU-12',    title: 'Audit Generation', definition: 'The information system allows designated personnel to select which auditable events are to be audited by specific components.' },
  'CCI-000172': { control: 'AU-12 (3)', title: 'Audit Generation | Changes by Authorized Individuals', definition: 'The information system provides the capability for authorized individuals to change the auditing to be performed on specific components.' },
  'CCI-001464': { control: 'AU-4',     title: 'Audit Storage Capacity', definition: 'The organization allocates audit record storage capacity and configures auditing to reduce the likelihood of capacity being exceeded.' },
  'CCI-001487': { control: 'AU-9',     title: 'Protection of Audit Information', definition: 'The information system protects audit information and audit tools from unauthorized access, modification, and deletion.' },
  'CCI-001493': { control: 'AU-9 (4)', title: 'Protection of Audit Information | Access by Subset of Privileged Users', definition: 'The organization authorizes access to management of audit functionality to only an organization-defined subset of privileged users.' },
  'CCI-001494': { control: 'AU-9 (4)', title: 'Protection of Audit Information | Access by Subset of Privileged Users', definition: 'The organization authorizes access to management of audit functionality to only a defined subset of privileged users.' },
  'CCI-001495': { control: 'AU-9 (4)', title: 'Protection of Audit Information | Access by Subset of Privileged Users', definition: 'The organization defines the subset of privileged users authorized for audit management.' },
  'CCI-001496': { control: 'AU-9 (5)', title: 'Protection of Audit Information | Dual Authorization', definition: 'The organization enforces dual authorization for movement and/or deletion of organization-defined audit information.' },
  'CCI-001851': { control: 'AU-4 (1)', title: 'Audit Storage Capacity | Transfer to Alternate Storage', definition: 'The information system off-loads audit records onto a different system or media.' },
  'CCI-001855': { control: 'AU-5 (1)', title: 'Response to Audit Processing Failures | Audit Storage Capacity', definition: 'The information system provides a warning to organization-defined personnel when allocated audit record storage volume reaches a defined percentage.' },
  'CCI-001857': { control: 'AU-5 (2)', title: 'Response to Audit Processing Failures | Real-Time Alerts', definition: 'The information system provides an alert in real-time to organization-defined personnel when audit failure events occur.' },
  'CCI-001858': { control: 'AU-5 (2)', title: 'Response to Audit Processing Failures | Real-Time Alerts', definition: 'The organization defines the audit failure events requiring real-time alerts.' },

  // ── Configuration Management (CM) ───────────────────────────────────────
  'CCI-000345': { control: 'CM-5',     title: 'Access Restrictions for Change', definition: 'The organization defines, documents, approves, and enforces physical and logical access restrictions associated with changes to the information system.' },
  'CCI-000363': { control: 'CM-6',     title: 'Configuration Settings', definition: 'The organization defines security configuration settings for the information system components.' },
  'CCI-000366': { control: 'CM-6',     title: 'Configuration Settings', definition: 'The organization ensures that the information system components comply with organization-defined configuration settings.' },
  'CCI-000370': { control: 'CM-6',     title: 'Configuration Settings', definition: 'The organization establishes and documents configuration settings for information technology products employed within the information system.' },
  'CCI-000379': { control: 'CM-7',     title: 'Least Functionality', definition: 'The organization configures the information system to provide only essential capabilities.' },
  'CCI-000381': { control: 'CM-7',     title: 'Least Functionality', definition: 'The organization prohibits or restricts the use of organization-defined functions, ports, protocols, and/or services.' },
  'CCI-000382': { control: 'CM-7',     title: 'Least Functionality', definition: 'The organization configures the information system to provide only essential capabilities and prohibits or restricts the use of prohibited functions, ports, protocols, and/or services.' },
  'CCI-001749': { control: 'CM-5 (3)', title: 'Access Restrictions for Change | Signed Components', definition: 'The information system prevents the installation of software and firmware components without verification that the component has been digitally signed.' },
  'CCI-001812': { control: 'CM-11',    title: 'User-Installed Software', definition: 'The organization defines policies governing the installation of software by users.' },
  'CCI-001813': { control: 'CM-5 (1)', title: 'Access Restrictions for Change | Automated Access Enforcement/Auditing', definition: 'The information system enforces access restrictions and supports auditing of the enforcement actions.' },
  'CCI-001814': { control: 'CM-5 (1)', title: 'Access Restrictions for Change | Automated Access Enforcement/Auditing', definition: 'The information system supports auditing of the enforcement actions.' },

  // ── Identification and Authentication (IA) ──────────────────────────────
  'CCI-000185': { control: 'IA-5 (2)', title: 'Authenticator Management | PKI-Based Authentication', definition: 'The information system validates certificates by constructing and verifying a certification path.' },
  'CCI-000186': { control: 'IA-5 (2)', title: 'Authenticator Management | PKI-Based Authentication', definition: 'The information system enforces authorized access to the corresponding private key.' },
  'CCI-000187': { control: 'IA-5 (2)', title: 'Authenticator Management | PKI-Based Authentication', definition: 'The information system maps the authenticated identity to the account of the individual or group.' },
  'CCI-000192': { control: 'IA-5 (1)', title: 'Authenticator Management | Password-Based Authentication', definition: 'The information system enforces password complexity by the minimum number of uppercase characters used.' },
  'CCI-000193': { control: 'IA-5 (1)', title: 'Authenticator Management | Password-Based Authentication', definition: 'The information system enforces password complexity by the minimum number of lowercase characters used.' },
  'CCI-000194': { control: 'IA-5 (1)', title: 'Authenticator Management | Password-Based Authentication', definition: 'The information system enforces password complexity by the minimum number of numeric characters used.' },
  'CCI-000195': { control: 'IA-5 (1)', title: 'Authenticator Management | Password-Based Authentication', definition: 'The information system enforces password complexity by the minimum number of special characters used.' },
  'CCI-000196': { control: 'IA-5 (1)', title: 'Authenticator Management | Password-Based Authentication', definition: 'The information system, for password-based authentication, stores only cryptographically-protected passwords.' },
  'CCI-000197': { control: 'IA-5 (1)', title: 'Authenticator Management | Password-Based Authentication', definition: 'The information system, for password-based authentication, transmits only cryptographically-protected passwords.' },
  'CCI-000198': { control: 'IA-5 (1)', title: 'Authenticator Management | Password-Based Authentication', definition: 'The information system enforces minimum password lifetime restrictions.' },
  'CCI-000199': { control: 'IA-5 (1)', title: 'Authenticator Management | Password-Based Authentication', definition: 'The information system enforces maximum password lifetime restrictions.' },
  'CCI-000200': { control: 'IA-5 (1)', title: 'Authenticator Management | Password-Based Authentication', definition: 'The information system prohibits password reuse for a defined number of generations.' },
  'CCI-000205': { control: 'IA-5 (1)', title: 'Authenticator Management | Password-Based Authentication', definition: 'The information system enforces minimum password length.' },
  'CCI-000764': { control: 'IA-2',     title: 'Identification and Authentication (Organizational Users)', definition: 'The information system uniquely identifies and authenticates organizational users.' },
  'CCI-000765': { control: 'IA-2 (1)', title: 'Identification and Authentication | Multi-Factor Authentication to Privileged Accounts', definition: 'The information system implements multifactor authentication for network access to privileged accounts.' },
  'CCI-000766': { control: 'IA-2 (2)', title: 'Identification and Authentication | Multi-Factor Authentication to Non-Privileged Accounts', definition: 'The information system implements multifactor authentication for network access to non-privileged accounts.' },
  'CCI-000767': { control: 'IA-2 (3)', title: 'Identification and Authentication | Local Access to Privileged Accounts', definition: 'The information system implements multifactor authentication for local access to privileged accounts.' },
  'CCI-000768': { control: 'IA-2 (4)', title: 'Identification and Authentication | Local Access to Non-Privileged Accounts', definition: 'The information system implements multifactor authentication for local access to non-privileged accounts.' },
  'CCI-000770': { control: 'IA-2 (5)', title: 'Identification and Authentication | Group Authentication', definition: 'The organization requires individuals to be authenticated with an individual authenticator when a group authenticator is employed.' },
  'CCI-000778': { control: 'IA-3',     title: 'Device Identification and Authentication', definition: 'The information system uniquely identifies and authenticates devices before establishing a connection.' },
  'CCI-000795': { control: 'IA-4',     title: 'Identifier Management', definition: 'The organization manages information system identifiers for users and devices.' },
  'CCI-000803': { control: 'IA-7',     title: 'Cryptographic Module Authentication', definition: 'The information system implements mechanisms for authentication to a cryptographic module that meet the requirements of applicable laws.' },
  'CCI-001941': { control: 'IA-2 (8)', title: 'Identification and Authentication | Network Access to Privileged Accounts — Replay Resistant', definition: 'The information system implements replay-resistant authentication mechanisms for network access to privileged accounts.' },
  'CCI-001942': { control: 'IA-2 (9)', title: 'Identification and Authentication | Network Access to Non-Privileged Accounts — Replay Resistant', definition: 'The information system implements replay-resistant authentication mechanisms for network access to non-privileged accounts.' },
  'CCI-001953': { control: 'IA-2 (12)', title: 'Identification and Authentication | Acceptance of PIV Credentials', definition: 'The information system accepts and electronically verifies Personal Identity Verification (PIV) credentials.' },
  'CCI-001954': { control: 'IA-2 (12)', title: 'Identification and Authentication | Acceptance of PIV Credentials', definition: 'The information system accepts PIV credentials from other agencies.' },
  'CCI-002007': { control: 'IA-5',     title: 'Authenticator Management', definition: 'The organization manages information system authenticators.' },
  'CCI-002009': { control: 'IA-5 (1)', title: 'Authenticator Management | Password-Based Authentication', definition: 'The information system, for password-based authentication, enforces the password complexity defined by the organization.' },
  'CCI-002010': { control: 'IA-5 (1)', title: 'Authenticator Management | Password-Based Authentication', definition: 'The information system enforces the number of characters that are changed when new passwords are created.' },
  'CCI-002041': { control: 'IA-11',    title: 'Re-authentication', definition: 'The information system requires users to re-authenticate when organization-defined circumstances or situations require re-authentication.' },

  // ── Maintenance (MA) ────────────────────────────────────────────────────
  'CCI-000877': { control: 'MA-4',     title: 'Nonlocal Maintenance', definition: 'The organization authorizes, monitors, and controls nonlocal maintenance and diagnostic activities.' },
  'CCI-001880': { control: 'MA-4 (6)', title: 'Nonlocal Maintenance | Cryptographic Protection', definition: 'The information system implements cryptographic mechanisms to protect the integrity and confidentiality of nonlocal maintenance and diagnostic communications.' },

  // ── Media Protection (MP) ───────────────────────────────────────────────
  'CCI-001199': { control: 'SC-28',    title: 'Protection of Information at Rest', definition: 'The information system protects the confidentiality and integrity of information at rest.' },

  // ── Physical and Environmental (PE) ─────────────────────────────────────
  'CCI-000924': { control: 'PE-2',     title: 'Physical Access Authorizations', definition: 'The organization develops, approves, and maintains a list of individuals with authorized access to the facility.' },

  // ── Risk Assessment (RA) ────────────────────────────────────────────────
  'CCI-001643': { control: 'RA-5',     title: 'Vulnerability Scanning', definition: 'The organization scans for vulnerabilities in the information system and hosted applications.' },
  'CCI-001644': { control: 'RA-5',     title: 'Vulnerability Scanning', definition: 'The organization defines the frequency at which vulnerability scans are conducted.' },

  // ── System and Services Acquisition (SA) ────────────────────────────────
  'CCI-002233': { control: 'SA-11',    title: 'Developer Security Testing and Evaluation', definition: 'The organization requires the developer of the information system to create and implement a security assessment plan.' },
  'CCI-003123': { control: 'SA-11 (1)', title: 'Developer Security Testing and Evaluation | Static Code Analysis', definition: 'The organization requires the developer to employ static code analysis tools.' },

  // ── System and Communications Protection (SC) — additional entries ─────
  'CCI-001130': { control: 'SC-5',     title: 'Denial of Service Protection', definition: 'The information system protects against or limits the effects of organization-defined types of denial-of-service attacks.' },
  'CCI-001184': { control: 'SC-23',    title: 'Session Authenticity', definition: 'The information system protects the authenticity of communications sessions.' },
  'CCI-001188': { control: 'SC-23 (1)', title: 'Session Authenticity | Invalidate Session Identifiers at Logout', definition: 'The information system invalidates session identifiers upon user logout or other session termination.' },
  'CCI-002418': { control: 'SC-8',     title: 'Transmission Confidentiality and Integrity', definition: 'The information system protects the confidentiality and integrity of transmitted information.' },
  'CCI-002420': { control: 'SC-8 (1)', title: 'Transmission Confidentiality and Integrity | Cryptographic or Alternate Physical Protection', definition: 'The information system implements cryptographic mechanisms to prevent unauthorized disclosure of information during transmission.' },
  'CCI-002421': { control: 'SC-8 (1)', title: 'Transmission Confidentiality and Integrity | Cryptographic or Alternate Physical Protection', definition: 'The information system implements cryptographic mechanisms to recognize changes to information during transmission.' },
  'CCI-002422': { control: 'SC-8',     title: 'Transmission Confidentiality and Integrity', definition: 'The information system maintains the confidentiality and integrity of information during preparation for transmission and during reception.' },
  'CCI-002450': { control: 'SC-13',    title: 'Cryptographic Protection', definition: 'The information system implements FIPS-validated or NSA-approved cryptography in accordance with applicable laws and policies.' },
  'CCI-002530': { control: 'SC-17',    title: 'Public Key Infrastructure Certificates', definition: 'The organization issues public key certificates under an appropriate certificate policy or obtains public key certificates from an approved service provider.' },
  'CCI-002824': { control: 'SI-16',    title: 'Memory Protection', definition: 'The information system implements organization-defined security safeguards to protect its memory from unauthorized code execution.' },
  'CCI-003568': { control: 'SC-28 (1)', title: 'Protection of Information at Rest | Cryptographic Protection', definition: 'The information system implements cryptographic mechanisms to prevent unauthorized disclosure and modification of information at rest.' },

  // ── System and Information Integrity (SI) — additional entries ──────────
  'CCI-001310': { control: 'SI-10',    title: 'Information Input Validation', definition: 'The information system checks the validity of organization-defined information inputs.' },
  'CCI-001312': { control: 'SI-11',    title: 'Error Handling', definition: 'The information system generates error messages that provide information necessary for corrective actions without revealing information exploitable by adversaries.' },
  'CCI-001314': { control: 'SI-11',    title: 'Error Handling', definition: 'The information system reveals error messages only to authorized personnel.' },
  'CCI-002235': { control: 'SI-2 (2)', title: 'Flaw Remediation | Automated Flaw Remediation Status', definition: 'The organization employs automated mechanisms to determine the state of information system components with regard to flaw remediation.' },
  'CCI-002605': { control: 'SI-6',     title: 'Security Function Verification', definition: 'The information system verifies the correct operation of security-relevant software and firmware.' },
  'CCI-002617': { control: 'SI-2',     title: 'Flaw Remediation', definition: 'The organization installs security-relevant software and firmware updates within the time period directed by an authoritative source.' },
  'CCI-002699': { control: 'SI-6',     title: 'Security Function Verification', definition: 'The information system notifies defined personnel of failed security verification tests.' },
  'CCI-002702': { control: 'SI-6',     title: 'Security Function Verification', definition: 'The information system implements organization-defined security safeguards when anomalies in security function verification are discovered.' },

  // ── Contingency Planning (CP) ───────────────────────────────────────────
  'CCI-000537': { control: 'CP-9',     title: 'Information System Backup', definition: 'The organization conducts backups of user-level information contained in the information system.' },
  'CCI-000538': { control: 'CP-9',     title: 'Information System Backup', definition: 'The organization conducts backups of system-level information contained in the information system.' },
  'CCI-000539': { control: 'CP-9',     title: 'Information System Backup', definition: 'The organization conducts backups of information system documentation including security-related documentation.' },

  // ── Program Management (PM) ─────────────────────────────────────────────
  'CCI-001682': { control: 'PM-6',     title: 'Information Security Measures of Performance', definition: 'The organization develops, monitors, and reports on the results of information security measures of performance.' },

  // ── Personnel Security (PS) ─────────────────────────────────────────────
  'CCI-000971': { control: 'PS-4',     title: 'Personnel Termination', definition: 'The organization, upon termination of individual employment, disables information system access within the organization-defined time period.' },
};

// ─── XML parser ─────────────────────────────────────────────────────────────

/* eslint-disable @typescript-eslint/no-explicit-any */

function toArray<T>(val: T | T[] | undefined | null): T[] {
  if (val == null) return [];
  return Array.isArray(val) ? val : [val];
}

function textOf(node: unknown): string {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return textOf(node[0]);
  if (typeof node === 'object' && '_' in (node as Record<string, unknown>)) {
    return String((node as Record<string, unknown>)._);
  }
  return String(node);
}

export async function parseCciListXml(xmlContent: string): Promise<Record<string, CciEntry>> {
  const parsed = await parseStringPromise(xmlContent, {
    explicitArray: false,
    tagNameProcessors: [processors.stripPrefix],
  });

  const root = parsed.cci_list ?? parsed['cci-list'];
  if (!root) { throw new Error('Not a valid CCI List XML — no <cci_list> root element found.'); }

  const items = toArray<any>((root.cci_items ?? root['cci-items'])?.cci_item ?? (root.cci_items ?? root['cci-items'])?.['cci-item']);
  if (items.length === 0) { throw new Error('No <cci_item> elements found in the CCI List XML.'); }

  const map: Record<string, CciEntry> = {};
  for (const item of items) {
    const id: string = item?.$?.id || '';
    if (!id.startsWith('CCI-')) continue;

    const definition = textOf(item.definition);
    const refs = toArray<any>(item.references?.reference);

    let control = '';
    let title = '';
    for (const ref of refs) {
      const attrs = ref?.$ ?? ref ?? {};
      const ver = String(attrs.version ?? '');
      if (ver === '5' || ver === '4') {
        control = attrs.index ?? '';
        title = attrs.title ?? '';
        if (ver === '5') break;
      }
    }
    if (!control && refs.length > 0) {
      const last = refs[refs.length - 1];
      const attrs = last?.$ ?? last ?? {};
      control = attrs.index ?? '';
      title = attrs.title ?? '';
    }

    if (control) {
      map[id] = { control, title, definition };
    }
  }
  return map;
}

// ─── Lookup helpers ─────────────────────────────────────────────────────────

export function lookupCci(
  cci: string,
  importedMap?: Record<string, CciEntry>,
): CciEntry | undefined {
  return importedMap?.[cci] ?? CCI_TO_NIST[cci];
}

export function ccisToControls(
  ccis: string[],
  importedMap?: Record<string, CciEntry>,
): string[] {
  const controls = new Set<string>();
  for (const cci of ccis) {
    const entry = lookupCci(cci, importedMap);
    if (entry) controls.add(entry.control);
  }
  return [...controls].sort();
}
