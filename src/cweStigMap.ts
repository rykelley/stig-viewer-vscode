/**
 * CWE-to-STIG keyword mapping.
 *
 * Maps CWE IDs to keywords that match against ASD STIG rule titles,
 * discussions, and check_content fields. When a SARIF finding includes
 * a CWE ID, the mapper finds STIG rules whose text contains the
 * corresponding keywords.
 *
 * This covers the four key ASD STIG scanning rules:
 *   V-69513 — OWASP Top 10
 *   V-70277 — Buffer overflows
 *   V-70185 — Race conditions
 *   V-70391 — Error handling
 *
 * Plus broader ASD STIG rules for auth, crypto, sessions, logging, etc.
 */

export interface CweMapping {
  cweId: number;
  name: string;
  keywords: string[];
  stigCategory: string;
}

/** Map of CWE ID → mapping info */
export const CWE_STIG_MAP: Map<number, CweMapping> = new Map([
  // ─── Injection (OWASP A03) ──────────────────────────────────────────
  [89,  { cweId: 89,  name: 'SQL Injection',                keywords: ['injection', 'SQL', 'query', 'parameterized', 'prepared statement'], stigCategory: 'Input Validation' }],
  [78,  { cweId: 78,  name: 'OS Command Injection',         keywords: ['injection', 'command', 'OS command', 'execute', 'system command'], stigCategory: 'Input Validation' }],
  [77,  { cweId: 77,  name: 'Command Injection',            keywords: ['injection', 'command', 'execute'], stigCategory: 'Input Validation' }],
  [94,  { cweId: 94,  name: 'Code Injection',               keywords: ['injection', 'code injection', 'eval', 'execute'], stigCategory: 'Input Validation' }],
  [79,  { cweId: 79,  name: 'Cross-Site Scripting (XSS)',   keywords: ['cross-site scripting', 'XSS', 'script injection', 'output encoding', 'sanitize'], stigCategory: 'Input Validation' }],
  [90,  { cweId: 90,  name: 'LDAP Injection',               keywords: ['injection', 'LDAP', 'directory'], stigCategory: 'Input Validation' }],
  [91,  { cweId: 91,  name: 'XML Injection',                keywords: ['injection', 'XML', 'input validation'], stigCategory: 'Input Validation' }],
  [917, { cweId: 917, name: 'Expression Language Injection', keywords: ['injection', 'expression', 'template'], stigCategory: 'Input Validation' }],
  [116, { cweId: 116, name: 'Improper Output Encoding',     keywords: ['output encoding', 'encoding', 'sanitize', 'neutralize'], stigCategory: 'Input Validation' }],
  [20,  { cweId: 20,  name: 'Improper Input Validation',    keywords: ['input validation', 'validate', 'sanitize', 'user input', 'untrusted'], stigCategory: 'Input Validation' }],

  // ─── Broken Auth (OWASP A07) ────────────────────────────────────────
  [287, { cweId: 287, name: 'Improper Authentication',      keywords: ['authenticat', 'identity', 'login', 'credential'], stigCategory: 'Authentication' }],
  [306, { cweId: 306, name: 'Missing Authentication',       keywords: ['authenticat', 'access control', 'login', 'identity'], stigCategory: 'Authentication' }],
  [798, { cweId: 798, name: 'Hardcoded Credentials',        keywords: ['credential', 'password', 'embedded', 'hardcoded', 'hard-coded'], stigCategory: 'Authentication' }],
  [259, { cweId: 259, name: 'Hardcoded Password',           keywords: ['password', 'embedded', 'hardcoded', 'hard-coded', 'credential'], stigCategory: 'Authentication' }],
  [522, { cweId: 522, name: 'Insufficiently Protected Credentials', keywords: ['credential', 'password', 'protect', 'cleartext', 'plain text'], stigCategory: 'Authentication' }],

  // ─── Broken Access Control (OWASP A01) ──────────────────────────────
  [862, { cweId: 862, name: 'Missing Authorization',        keywords: ['authoriz', 'access control', 'permission', 'privilege'], stigCategory: 'Access Control' }],
  [863, { cweId: 863, name: 'Incorrect Authorization',      keywords: ['authoriz', 'access control', 'permission', 'privilege'], stigCategory: 'Access Control' }],
  [284, { cweId: 284, name: 'Improper Access Control',      keywords: ['access control', 'permission', 'privilege', 'authoriz'], stigCategory: 'Access Control' }],
  [22,  { cweId: 22,  name: 'Path Traversal',               keywords: ['path traversal', 'directory traversal', 'file access', 'canonicalize'], stigCategory: 'Access Control' }],
  [434, { cweId: 434, name: 'Unrestricted File Upload',     keywords: ['file upload', 'unrestricted', 'file type', 'content type'], stigCategory: 'Access Control' }],
  [352, { cweId: 352, name: 'Cross-Site Request Forgery',   keywords: ['CSRF', 'cross-site request', 'token', 'forgery'], stigCategory: 'Session Management' }],

  // ─── Cryptographic Failures (OWASP A02) ─────────────────────────────
  [327, { cweId: 327, name: 'Broken Crypto Algorithm',      keywords: ['cryptograph', 'encrypt', 'cipher', 'algorithm', 'FIPS', 'approved'], stigCategory: 'Cryptography' }],
  [328, { cweId: 328, name: 'Weak Hash',                    keywords: ['hash', 'cryptograph', 'MD5', 'SHA-1', 'FIPS'], stigCategory: 'Cryptography' }],
  [326, { cweId: 326, name: 'Inadequate Encryption Strength', keywords: ['encrypt', 'key length', 'strength', 'cryptograph', 'FIPS'], stigCategory: 'Cryptography' }],
  [311, { cweId: 311, name: 'Missing Encryption of Sensitive Data', keywords: ['encrypt', 'sensitive', 'cleartext', 'plain text', 'protect', 'transit'], stigCategory: 'Cryptography' }],
  [319, { cweId: 319, name: 'Cleartext Transmission',       keywords: ['cleartext', 'plain text', 'encrypt', 'TLS', 'HTTPS', 'transit', 'transport'], stigCategory: 'Cryptography' }],

  // ─── Security Misconfiguration (OWASP A05) ──────────────────────────
  [209, { cweId: 209, name: 'Error Info Leak',              keywords: ['error', 'stack trace', 'diagnostic', 'verbose', 'information exposure'], stigCategory: 'Error Handling' }],
  [215, { cweId: 215, name: 'Debug Info Leak',              keywords: ['debug', 'diagnostic', 'information exposure', 'verbose'], stigCategory: 'Error Handling' }],
  [532, { cweId: 532, name: 'Log Info Leak',                keywords: ['log', 'sensitive', 'information exposure', 'audit'], stigCategory: 'Logging' }],
  [614, { cweId: 614, name: 'Missing Secure Cookie Flag',   keywords: ['cookie', 'secure flag', 'session', 'httpOnly'], stigCategory: 'Session Management' }],
  [1004,{ cweId: 1004,name: 'Missing HttpOnly Cookie Flag', keywords: ['cookie', 'httpOnly', 'session', 'script access'], stigCategory: 'Session Management' }],

  // ─── Buffer Overflow (V-70277) ──────────────────────────────────────
  [120, { cweId: 120, name: 'Buffer Overflow',              keywords: ['buffer overflow', 'buffer', 'memory', 'bounds'], stigCategory: 'Buffer Handling' }],
  [119, { cweId: 119, name: 'Buffer Boundary Violation',    keywords: ['buffer', 'boundary', 'memory', 'bounds check'], stigCategory: 'Buffer Handling' }],
  [787, { cweId: 787, name: 'Out-of-bounds Write',          keywords: ['buffer', 'out-of-bounds', 'memory', 'write'], stigCategory: 'Buffer Handling' }],
  [125, { cweId: 125, name: 'Out-of-bounds Read',           keywords: ['buffer', 'out-of-bounds', 'memory', 'read'], stigCategory: 'Buffer Handling' }],
  [190, { cweId: 190, name: 'Integer Overflow',             keywords: ['integer overflow', 'overflow', 'arithmetic'], stigCategory: 'Buffer Handling' }],

  // ─── Race Conditions (V-70185) ──────────────────────────────────────
  [362, { cweId: 362, name: 'Race Condition',               keywords: ['race condition', 'concurren', 'synchroniz', 'TOCTOU', 'time-of-check'], stigCategory: 'Concurrency' }],
  [367, { cweId: 367, name: 'TOCTOU Race Condition',        keywords: ['race condition', 'TOCTOU', 'time-of-check', 'time-of-use'], stigCategory: 'Concurrency' }],

  // ─── Error Handling (V-70391) ───────────────────────────────────────
  [755, { cweId: 755, name: 'Improper Exception Handling',  keywords: ['error handling', 'exception', 'catch', 'handle error'], stigCategory: 'Error Handling' }],
  [754, { cweId: 754, name: 'Improper Check for Unusual Conditions', keywords: ['error handling', 'exception', 'unusual condition', 'error check'], stigCategory: 'Error Handling' }],
  [390, { cweId: 390, name: 'Detection of Error without Action', keywords: ['error handling', 'exception', 'ignore', 'catch'], stigCategory: 'Error Handling' }],

  // ─── Insecure Deserialization (OWASP A08) ───────────────────────────
  [502, { cweId: 502, name: 'Insecure Deserialization',     keywords: ['deserializ', 'serializ', 'untrusted data', 'marshal', 'pickle'], stigCategory: 'Input Validation' }],

  // ─── Vulnerable Components (OWASP A06) ──────────────────────────────
  [1104,{ cweId: 1104,name: 'Unmaintained Third-Party Component', keywords: ['third-party', 'component', 'dependency', 'library', 'vulnerability', 'patch'], stigCategory: 'Dependencies' }],
  [937, { cweId: 937, name: 'Known Vulnerable Component',   keywords: ['known vulnerabilit', 'component', 'dependency', 'library', 'patch', 'CVE'], stigCategory: 'Dependencies' }],

  // ─── Logging & Monitoring (OWASP A09) ───────────────────────────────
  [778, { cweId: 778, name: 'Insufficient Logging',         keywords: ['log', 'audit', 'monitor', 'record', 'event'], stigCategory: 'Logging' }],
  [117, { cweId: 117, name: 'Log Injection',                keywords: ['log', 'injection', 'audit', 'forging'], stigCategory: 'Logging' }],
]);

/**
 * Find all CWE mappings whose keywords match a rule's text fields.
 */
export function findMappingsForRule(
  ruleTitle: string,
  discussion: string,
  checkContent: string
): CweMapping[] {
  const text = `${ruleTitle} ${discussion} ${checkContent}`.toLowerCase();
  const matches: CweMapping[] = [];

  for (const mapping of CWE_STIG_MAP.values()) {
    if (mapping.keywords.some(kw => text.includes(kw.toLowerCase()))) {
      matches.push(mapping);
    }
  }
  return matches;
}

/**
 * Find all rules in the checklist that match a given CWE ID.
 */
export function findRulesForCwe(
  cweId: number,
  rules: Array<{ rule_title: string; discussion: string; check_content: string }>
): number[] {
  const mapping = CWE_STIG_MAP.get(cweId);
  if (!mapping) return [];

  const indices: number[] = [];
  for (let i = 0; i < rules.length; i++) {
    const text = `${rules[i].rule_title} ${rules[i].discussion} ${rules[i].check_content}`.toLowerCase();
    if (mapping.keywords.some(kw => text.includes(kw.toLowerCase()))) {
      indices.push(i);
    }
  }
  return indices;
}
