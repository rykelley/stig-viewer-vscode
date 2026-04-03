# STIG Workbench — VSCode Extension

A Visual Studio Code extension for viewing, editing, importing, and exporting DISA STIG Checklist files (`.cklb` format) with a rich, interactive overview panel. Built for security assessors, ISSMs, and compliance teams working with STIGs daily.

![STIG Workbench Screenshot](media/screenshot.png)

## Features

### Checklist Viewer & Editor

- **Auto-opens `.cklb` files** with a custom editor — double-click any `.cklb` file
- **File icon** — `.cklb` files display a blue shield icon in the explorer
- **Stat cards** — Open / Not a Finding / Not Reviewed / Not Applicable counts at a glance
- **Severity bar** — proportional CAT I / CAT II / CAT III breakdown
- **Completion tracker** — progress bar showing evaluation progress
- **Filterable rule table** — filter by status, severity, or free-text search
- **Column sorting** — click any table header to sort ascending/descending
- **Detail slide-over** — click a rule to see full Discussion, Check Content, Fix Text, and edit findings
- **Keyboard navigation** — Arrow keys / j/k to move through rows, Enter to open detail, Escape to close
- **Respects VS Code themes** — uses CSS variables for dark, light, and high-contrast themes

### Inline Editing

- **Inline status dropdown** — change a rule's status directly from the table without opening the detail panel
- **Auto-save** — status changes, finding details, and comments save automatically (no manual Save button click required)
- **Bulk status updates** — select multiple rules with checkboxes, set them all to the same status at once with an optional shared comment
- **Target data editing** — click "Edit Target" to set host name, IP, FQDN, MAC, role, and other asset info
- **Undo/redo support** — Ctrl+Z / Cmd+Z works naturally, syncing the webview with VS Code's undo stack
- **Finding details templates** — dropdown with common assessment phrases (Compliant, N/A, Open, Screenshot evidence, Inherited control) that insert at the cursor

### Import & Export

- **Import XCCDF Benchmark** — generate a blank `.cklb` checklist from a DISA STIG XCCDF XML file (`*-xccdf.xml`). Right-click in the explorer or use the command palette
- **Import CKL (legacy)** — convert older `.ckl` XML checklists to `.cklb` format, preserving all statuses, findings, and comments
- **Import SCAP scan results** — parse XCCDF results files from automated SCAP scans and auto-populate rule statuses (pass/fail/error mapped to the correct checklist statuses)
- **Export to CKL** — generate a DISA STIG Workbench 2.x compatible `.ckl` XML file for eMASS submission
- **Export summary CSV** — full checklist data with Vuln ID, severity, status, finding details, comments, CCIs
- **Export POA&M** — auto-generate a Plan of Action & Milestones CSV from all Open findings with standard DOD columns (weakness, POC, scheduled completion, milestones, status)

### Multi-Checklist Dashboard

- **Aggregate view** — open the dashboard to see stats across all `.cklb` files in your workspace
- **Per-checklist breakdown** — table showing host, STIG name, total/open/NaF/NR/NA counts, and completion percentage for each checklist
- **Click to open** — click any row in the dashboard to open that checklist in the viewer
- **Sortable columns** — sort the dashboard table by any column
- **Refresh** — re-scan the workspace for new or changed checklists

### Merge & Compare

- **Carry forward findings** — when a new STIG version drops, merge your completed findings from the old checklist into the new one. Matches rules by `rule_version` (the most stable identifier across STIG releases). Reports how many carried forward, how many are new, how many were removed
- **Diff two checklists** — side-by-side comparison showing status regressions, improvements, new rules, and removed rules. Color-coded with regressions sorted first. Toggle to show/hide unchanged rules

### SAST & Security Tool Integration

- **SARIF import with CWE-to-STIG mapping** — import SARIF output from any SAST tool (CodeQL, Semgrep, ESLint security, Bandit, SpotBugs) and auto-map findings to ASD STIG rules via a built-in CWE mapping table covering 50+ CWEs across OWASP Top 10, buffer overflows (V-70277), race conditions (V-70185), and error handling (V-70391). Findings include file paths, line numbers, and CWE descriptions
- **Dependency audit import** — import `npm audit --json`, `pip-audit --format json`, or `bundler-audit` output to auto-populate dependency/third-party component STIG rules. Auto-detects the audit format
- **Repo scanner** — built-in regex-based scanner with 15+ configurable patterns for hardcoded secrets, SQL injection, XSS, command injection, insecure crypto, debug mode, and more. Bring your own `scan-patterns.json` to customize
- **SCAP results import** — parse XCCDF results files from automated SCAP scans and auto-populate rule statuses

### Evidence & Deliverables

- **Evidence package builder** — export a complete ATO evidence zip containing: the `.cklb` checklist, `.ckl` XML export, summary CSV, POA&M CSV, a text summary report, and optionally attached screenshots or scan reports
- **Export to CKL** — DISA STIG Viewer 2.x compatible `.ckl` XML for eMASS submission
- **Export summary CSV** — full checklist data with all rule fields
- **Export POA&M** — auto-generated Plan of Action & Milestones from all Open findings with standard DOD columns

## Commands

All commands are available from the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`):

| Command | Description |
| ------- | ----------- |
| `STIG Workbench: Open .cklb File` | Open a `.cklb` file via file picker |
| `STIG Workbench: Import XCCDF Benchmark` | Generate a blank `.cklb` from an XCCDF XML |
| `STIG Workbench: Import CKL Checklist` | Convert a legacy `.ckl` to `.cklb` |
| `STIG Workbench: Import SCAP Scan Results` | Apply SCAP scan results to a checklist |
| `STIG Workbench: Merge / Carry Forward Findings` | Copy findings from an old checklist to a new one |
| `STIG Workbench: Diff Two Checklists` | Compare two checklists side-by-side |
| `STIG Workbench: Open Dashboard` | Aggregate stats across all workspace checklists |
| `STIG Workbench: Import SARIF Results` | Map SAST findings to STIG rules via CWE |
| `STIG Workbench: Import Dependency Audit` | Import npm audit / pip-audit JSON |
| `STIG Workbench: Scan Repo Against Checklist` | Run built-in regex scanner on a codebase |
| `STIG Workbench: Export Evidence Package` | Bundle checklist + exports + evidence into a zip |

**Context menus:**

- Right-click any `.xml` file → **STIG Workbench: Import XCCDF Benchmark**
- Right-click any `.ckl` file → **STIG Workbench: Import CKL Checklist**

## Installation

### From VSIX

```bash
npm install -g @vscode/vsce
cd stig-viewer-vscode
npm install
vsce package
code --install-extension stig-viewer-*.vsix
```

### Development

```bash
cd stig-viewer-vscode
npm install
npm run compile
code .
```

Press **F5** to launch an Extension Development Host. Open the included `samples/example.cklb` to test.

## Typical Workflows

### Starting a new assessment

1. Download the STIG benchmark from [public.cyber.mil](https://public.cyber.mil/stigs/)
2. Run `STIG Workbench: Import XCCDF Benchmark` and select the `*-xccdf.xml` file
3. A blank `.cklb` is generated and opens automatically
4. Click "Edit Target" to fill in host name, IP, FQDN, and other asset info
5. Work through rules — use inline status dropdowns for quick triage, detail panel for findings

### Updating to a new STIG version

1. Import the new XCCDF benchmark to generate a blank `.cklb`
2. Run `STIG Workbench: Merge / Carry Forward Findings`
3. Select your old completed checklist, then the new blank one
4. Review the merge report — carry-forward count, new rules, removed rules

### Importing legacy checklists

1. Right-click a `.ckl` file → `STIG Workbench: Import CKL Checklist`
2. The converted `.cklb` opens with all statuses and findings preserved

### Applying SCAP scan results

1. Run your SCAP scan and save the XCCDF results file
2. Run `STIG Workbench: Import SCAP Scan Results`
3. Select your `.cklb` checklist, then the results XML
4. Automated results are applied — review and supplement with manual checks

### Example: ASD STIG assessment of a Python repo with Bandit

This walkthrough creates a complete ASD STIG checklist for a Python codebase using automated scanning and manual review.

#### Prerequisites

- STIG Workbench installed in VS Code
- Bandit installed (`pip install bandit`)
- The ASD STIG XCCDF benchmark from [public.cyber.mil](https://public.cyber.mil/stigs/) — search "Application Security and Development" and download the zip. Inside you'll find a file like `U_ASD_STIG_V5R3-xccdf.xml`

#### Step 1: Create a blank ASD STIG checklist

```text
Cmd+Shift+P → STIG Workbench: Import XCCDF Benchmark
```

Select `U_ASD_STIG_V5R3-xccdf.xml`. This generates `U_ASD_STIG_V5R3.cklb` and opens it. You now have ~280 rules, all set to `Not Reviewed`.

#### Step 2: Fill in target data

Click **Edit Target** in the header. Set the host name to the repo/application name, target type to `Computing`, and add a comment like "Python web application, assessed against ASD STIG V5R3". Save.

#### Step 3: Run Bandit and export SARIF

```bash
cd /path/to/your-code-repo
bandit -r . -f sarif -o bandit-results.sarif
```

This scans all Python files and outputs SARIF format with CWE IDs attached to each finding.

#### Step 4: Import SARIF results into the checklist

```text
Cmd+Shift+P → STIG Workbench: Import SARIF Results (Pro)
```

Or right-click `bandit-results.sarif` → **STIG Workbench: Import SARIF Results (Pro)**

Select your `.cklb` checklist, then `bandit-results.sarif`. The extension reads each finding's CWE ID, maps it to matching ASD STIG rules via the built-in CWE table, and marks those rules as **Open** with file paths and line numbers as evidence.

#### Step 5: Run the repo scanner for patterns Bandit doesn't cover

```text
Cmd+Shift+P → STIG Workbench: Scan Repo Against Checklist (Pro)
```

Select the checklist, then the repo folder, then "Use default scan patterns." This catches hardcoded secrets, HTTP URLs, debug flags, insecure cookies, CORS wildcards, file permissions, and more. Rules with no findings get marked **Not a Finding** with evidence.

#### Step 6: Import dependency audit

```bash
pip-audit --format json -o pip-audit.json
```

```text
Cmd+Shift+P → STIG Workbench: Import Dependency Audit (Pro)
```

Select the checklist, then `pip-audit.json`. This populates the third-party component/dependency STIG rules.

#### Step 7: Manual review

Filter by **Status → Not Reviewed** to see what's left. These are rules that can't be automated — architecture documentation, SDLC process, security training, etc. Work through them using the detail panel. Use **finding templates** for common answers.

#### Step 8: Export deliverables

- **For eMASS:** Click **Export CKL** in the header
- **For your ISSM:** Click **Export POA&M** for a CSV of all Open findings
- **For the ATO package:**

  ```text
  Cmd+Shift+P → STIG Workbench: Export Evidence Package (Pro)
  ```

  Attach `bandit-results.sarif` and `pip-audit.json` as additional evidence. This produces a zip with: checklist.cklb, checklist.ckl, summary.csv, poam.csv, report.txt, and your attached evidence.

#### What gets automated vs. what needs manual review

| Method | Rules covered | Examples |
| ------ | ------------- | -------- |
| Bandit SARIF import | Injection, XSS, eval, hardcoded passwords, weak crypto, error handling | V-69513, V-70391 |
| Repo scanner | Secrets, debug mode, HTTP URLs, CORS, cookies, file permissions | Various ASD rules |
| pip-audit import | Known vulnerable dependencies | V-70261 and similar |
| Manual review | Architecture, SDLC process, documentation, training | ~40-50% of ASD rules |

For a typical Python web app, expect to auto-evaluate about 50-60% of ASD STIG rules.

**Other SAST tools that export SARIF:**

- CodeQL: `codeql database analyze --format=sarif-latest`
- Semgrep: `semgrep --sarif -o results.sarif`
- ESLint: `eslint --format @microsoft/eslint-formatter-sarif -o results.sarif`
- SpotBugs: `spotbugs -sarif -output results.sarif`

### Generating deliverables

- **For eMASS**: click "Export CKL" to generate a `.ckl` XML file
- **For briefings**: click "Export CSV" for a full summary spreadsheet
- **For POA&Ms**: click "Export POA&M" to generate a CSV of all Open findings with standard DOD columns

## How the .cklb Format Works

A `.cklb` file is JSON with this structure:

```json
{
  "title": "Checklist Title",
  "id": "uuid",
  "cklb_version": "1",
  "target_data": { "host_name": "", "ip_address": "", "fqdn": "" },
  "stigs": [
    {
      "stig_name": "Full STIG Name",
      "display_name": "Short Name",
      "release_info": "Release: 1 Benchmark Date: ...",
      "rules": [
        {
          "group_id": "V-233511",
          "rule_version": "CD12-00-000100",
          "severity": "high",
          "status": "not_reviewed",
          "rule_title": "...",
          "discussion": "...",
          "check_content": "...",
          "fix_text": "...",
          "finding_details": "...",
          "comments": "...",
          "ccis": ["CCI-000382"]
        }
      ]
    }
  ]
}
```

| Term | Meaning |
| ---- | ------- |
| CAT I | High severity — most critical |
| CAT II | Medium severity — bulk of most STIGs |
| CAT III | Low severity — less urgent |
| Open | System fails this check |
| Not a Finding | System passes this check |
| Not Reviewed | Not yet evaluated |
| Not Applicable | Rule doesn't apply to this system |
| CCI | Control Correlation Identifier — maps to NIST 800-53 |
| SRG | Security Requirements Guide — the parent requirement |

## Architecture

```text
src/
  extension.ts            # Activation, command registration
  types.ts                # TypeScript interfaces for .cklb schema
  cklbEditorProvider.ts   # Custom editor (parse, render, save, export)
  webviewContent.ts       # HTML/CSS/JS builder for the checklist webview
  dashboardPanel.ts       # Multi-checklist dashboard webview
  diffPanel.ts            # Checklist diff comparison webview
  xccdfImporter.ts        # XCCDF benchmark → .cklb import
  importCkl.ts            # Legacy .ckl → .cklb import
  importScapResults.ts    # SCAP XCCDF results → .cklb import
  mergeFindings.ts        # Carry forward findings between checklist versions
  exportCkl.ts            # .cklb → .ckl XML export
  exportCsv.ts            # .cklb → summary CSV export
  exportPoam.ts           # .cklb → POA&M CSV export
  importSarif.ts          # SARIF → .cklb with CWE-to-STIG mapping
  importAudit.ts          # npm audit / pip-audit → .cklb
  cweStigMap.ts           # CWE ID → STIG rule keyword mapping table
  repoScanner.ts          # Regex-based repo scanner
  evidencePackage.ts      # Evidence zip builder
```

The extension uses VS Code's **Custom Text Editor API**. The `.cklb` file stays a text document — status changes write back via `WorkspaceEdit`, so Cmd+S / Ctrl+S and undo/redo work naturally.

## License

MIT
