import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { CklbDocument, CklbRule } from './types';

// ─── Types ──────────────────────────────────────────────────────────────────

interface ScanCheck {
  pattern: string;
  description?: string;
}

interface ScanPattern {
  id: string;
  name: string;
  ruleKeywords: string[];
  fileGlobs: string[];
  patterns: string[];
  caseSensitive: boolean;
  matchMeansOpen: boolean;
  findingDetailOverride?: string;
}

interface ScanConfig {
  version: string;
  excludeGlobs: string[];
  scanPatterns: ScanPattern[];
}

interface ScanMatch {
  file: string;
  line: number;
  content: string;
  patternId: string;
}

interface RuleScanResult {
  ruleUuid: string;
  groupId: string;
  status: CklbRule['status'];
  findingDetails: string;
  matchedPatterns: string[];
  matchCount: number;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function loadScanConfig(configPath?: string): ScanConfig {
  const defaultPath = path.join(__dirname, '..', 'scan-patterns.json');
  const cfgPath = configPath || defaultPath;
  if (!fs.existsSync(cfgPath)) {
    throw new Error(`Scan patterns file not found: ${cfgPath}`);
  }
  return JSON.parse(fs.readFileSync(cfgPath, 'utf-8'));
}

/** Check if any keyword from the pattern appears in the rule text */
function patternMatchesRule(pattern: ScanPattern, rule: CklbRule): boolean {
  const ruleText = [
    rule.rule_title,
    rule.discussion,
    rule.check_content,
    rule.group_title,
  ].join(' ').toLowerCase();

  return pattern.ruleKeywords.some(kw => ruleText.includes(kw.toLowerCase()));
}

/** Minimatch-style glob to regex (simple subset) */
function globToRegex(glob: string): RegExp {
  const escaped = glob
    .replace(/[.+^${}()|[\]\\]/g, '\\$&')
    .replace(/\*\*/g, '__DOUBLESTAR__')
    .replace(/\*/g, '[^/]*')
    .replace(/__DOUBLESTAR__/g, '.*')
    .replace(/\?/g, '.');
  return new RegExp(`^${escaped}$`);
}

function matchesAnyGlob(filePath: string, globs: string[]): boolean {
  const normalized = filePath.replace(/\\/g, '/');
  return globs.some(g => {
    // Handle {ext1,ext2} syntax
    if (g.includes('{')) {
      const match = g.match(/^(.*)\{([^}]+)\}(.*)$/);
      if (match) {
        const [, prefix, alts, suffix] = match;
        return alts.split(',').some(alt => {
          const expanded = prefix + alt.trim() + suffix;
          return globToRegex(expanded).test(normalized);
        });
      }
    }
    return globToRegex(g).test(normalized);
  });
}

// ─── File walker ────────────────────────────────────────────────────────────

function walkDir(dir: string, excludeGlobs: string[]): string[] {
  const results: string[] = [];

  function walk(currentDir: string) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(currentDir, { withFileTypes: true });
    } catch {
      return; // Skip unreadable dirs
    }
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relPath = path.relative(dir, fullPath);

      if (matchesAnyGlob(relPath, excludeGlobs)) {
        continue;
      }

      if (entry.isDirectory()) {
        // Also check directory-level excludes
        if (!matchesAnyGlob(relPath + '/', excludeGlobs)) {
          walk(fullPath);
        }
      } else if (entry.isFile()) {
        results.push(fullPath);
      }
    }
  }

  walk(dir);
  return results;
}

// ─── Scanner ────────────────────────────────────────────────────────────────

function scanFile(
  filePath: string,
  patterns: string[],
  caseSensitive: boolean
): Array<{ line: number; content: string }> {
  let content: string;
  try {
    // Skip binary files
    const buf = fs.readFileSync(filePath);
    if (buf.includes(0)) return []; // null byte → binary
    content = buf.toString('utf-8');
  } catch {
    return [];
  }

  const lines = content.split('\n');
  const matches: Array<{ line: number; content: string }> = [];

  for (const pat of patterns) {
    const flags = caseSensitive ? 'g' : 'gi';
    let re: RegExp;
    try {
      re = new RegExp(pat, flags);
    } catch {
      continue; // Skip invalid regex
    }

    for (let i = 0; i < lines.length; i++) {
      if (re.test(lines[i])) {
        matches.push({
          line: i + 1,
          content: lines[i].trim().substring(0, 200),
        });
      }
      re.lastIndex = 0; // Reset for next line
    }
  }

  return matches;
}

// ─── Main export ────────────────────────────────────────────────────────────

export async function scanRepo(activeCklbUri?: vscode.Uri): Promise<void> {
  // 1. Use active checklist or ask user to pick one
  let cklbUri = activeCklbUri;
  if (!cklbUri) {
    const uris = await vscode.window.showOpenDialog({
      canSelectMany: false,
      filters: { 'STIG Checklist': ['cklb'] },
      title: 'Select checklist to populate with scan results',
    });
    if (!uris?.[0]) return;
    cklbUri = uris[0];
  }

  // 2. Select the repo folder to scan
  const repoUris = await vscode.window.showOpenDialog({
    canSelectFolders: true,
    canSelectFiles: false,
    canSelectMany: false,
    title: 'Select repository folder to scan',
  });
  if (!repoUris?.[0]) return;

  // 3. Optionally select a custom scan-patterns.json
  const useCustom = await vscode.window.showQuickPick(
    ['Use default scan patterns', 'Select custom scan-patterns.json'],
    { title: 'Scan pattern configuration' }
  );
  if (!useCustom) return;

  let configPath: string | undefined;
  if (useCustom.includes('custom')) {
    const cfgUris = await vscode.window.showOpenDialog({
      canSelectMany: false,
      filters: { 'JSON': ['json'] },
      title: 'Select scan-patterns.json',
    });
    if (!cfgUris?.[0]) return;
    configPath = cfgUris[0].fsPath;
  }

  // Load config and checklist
  const config = loadScanConfig(configPath);
  const doc: CklbDocument = JSON.parse(fs.readFileSync(cklbUri.fsPath, 'utf-8'));
  const repoDir = repoUris[0].fsPath;

  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: 'STIG Repo Scan',
      cancellable: true,
    },
    async (progress, token) => {
      // Discover files
      progress.report({ message: 'Discovering files...' });
      const allFiles = walkDir(repoDir, config.excludeGlobs);
      if (token.isCancellationRequested) return;

      const results: RuleScanResult[] = [];
      const now = new Date().toISOString();
      let rulesScanned = 0;
      let rulesUpdated = 0;
      let openCount = 0;
      let nafCount = 0;

      const totalRules = doc.stigs.reduce((n, s) => n + s.rules.length, 0);

      for (const stig of doc.stigs) {
        for (const rule of stig.rules) {
          if (token.isCancellationRequested) return;

          // Find applicable patterns for this rule
          const applicablePatterns = config.scanPatterns.filter(p =>
            patternMatchesRule(p, rule)
          );

          if (applicablePatterns.length === 0) continue;

          rulesScanned++;
          progress.report({
            message: `Scanning ${rule.group_id} (${rulesScanned}/${totalRules})`,
            increment: (1 / totalRules) * 100,
          });

          const allMatches: ScanMatch[] = [];
          const matchedPatternNames: string[] = [];

          for (const pattern of applicablePatterns) {
            // Filter files by pattern's fileGlobs
            const targetFiles = allFiles.filter(f => {
              const rel = path.relative(repoDir, f);
              return matchesAnyGlob(rel, pattern.fileGlobs);
            });

            let patternHasMatch = false;
            for (const file of targetFiles) {
              if (token.isCancellationRequested) return;
              const fileMatches = scanFile(file, pattern.patterns, pattern.caseSensitive);
              if (fileMatches.length > 0) {
                patternHasMatch = true;
                const relFile = path.relative(repoDir, file);
                for (const m of fileMatches) {
                  allMatches.push({
                    file: relFile,
                    line: m.line,
                    content: m.content,
                    patternId: pattern.id,
                  });
                }
              }
            }

            if (patternHasMatch) {
              matchedPatternNames.push(pattern.name);
            }
          }

          // Determine status based on matches
          const hasOpenPattern = applicablePatterns.some(p => p.matchMeansOpen);
          const matchingOpenPatterns = applicablePatterns.filter(p => p.matchMeansOpen);
          const openMatches = allMatches.filter(m =>
            matchingOpenPatterns.some(p => p.id === m.patternId)
          );

          let newStatus: CklbRule['status'];
          let findingDetails: string;

          if (openMatches.length > 0) {
            // Found issues
            newStatus = 'open';
            openCount++;

            // Check for custom finding detail override
            const overridePattern = applicablePatterns.find(p => p.findingDetailOverride && allMatches.some(m => m.patternId === p.id));
            if (overridePattern?.findingDetailOverride) {
              const matchList = allMatches
                .filter(m => m.patternId === overridePattern.id)
                .slice(0, 20)
                .map(m => `  ${m.file}:${m.line} — ${m.content}`)
                .join('\n');
              findingDetails = overridePattern.findingDetailOverride
                .replace('{count}', String(allMatches.filter(m => m.patternId === overridePattern.id).length))
                .replace('{matches}', matchList)
                .replace('{file}', allMatches[0]?.file || '');
            } else {
              const matchList = openMatches.slice(0, 20).map(m =>
                `  ${m.file}:${m.line} — ${m.content}`
              ).join('\n');
              const truncated = openMatches.length > 20 ? `\n  ... and ${openMatches.length - 20} more` : '';
              findingDetails = `[AUTO-SCAN] Found ${openMatches.length} potential issue(s) matching: ${matchedPatternNames.join(', ')}\n\n${matchList}${truncated}`;
            }
          } else if (hasOpenPattern) {
            // Scanned for issues but found none
            newStatus = 'not_a_finding';
            nafCount++;
            findingDetails = `[AUTO-SCAN] Scanned ${allFiles.length} files for: ${applicablePatterns.map(p => p.name).join(', ')}. No issues detected.`;
          } else {
            // Info-only patterns (like dependency lockfile check)
            const infoMatches = allMatches.slice(0, 10);
            if (infoMatches.length > 0) {
              newStatus = 'not_reviewed';
              const overridePattern = applicablePatterns.find(p => p.findingDetailOverride);
              if (overridePattern?.findingDetailOverride) {
                findingDetails = overridePattern.findingDetailOverride
                  .replace('{count}', String(allMatches.length))
                  .replace('{matches}', infoMatches.map(m => m.file).join(', '))
                  .replace('{file}', infoMatches[0]?.file || '');
              } else {
                findingDetails = `[AUTO-SCAN] Found relevant files: ${infoMatches.map(m => m.file).join(', ')}. Manual review required.`;
              }
            } else {
              continue; // Nothing to report
            }
          }

          rule.status = newStatus;
          rule.finding_details = findingDetails;
          rule.updatedAt = now;
          rulesUpdated++;
        }
      }

      // Save results
      fs.writeFileSync(cklbUri.fsPath, JSON.stringify(doc, null, 2));

      await vscode.commands.executeCommand('vscode.openWith', cklbUri, 'stigViewer.cklbEditor');

      const skipped = totalRules - rulesUpdated;
      vscode.window.showInformationMessage(
        `Scan complete: ${rulesUpdated} rules evaluated (${openCount} open, ${nafCount} not a finding, ${skipped} unmatched — review manually)`
      );
    }
  );
}
