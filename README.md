# STIG Workbench — VSCode Extension

A Visual Studio Code extension for viewing, editing, importing, and exporting DISA STIG Checklist files (`.cklb` format) with a rich, interactive overview panel. Built for security assessors, ISSMs, and compliance teams working with STIGs daily.

![STIG Workbench Screenshot](media/Screenshot.png)

## Overview

STIG Workbench helps you open and edit `.cklb` checklists; import benchmarks from **XCCDF**, **SCAP 1.2/1.3** data streams, or legacy **CKL**; apply **SCAP XCCDF scan results**; merge and diff checklists; integrate **SARIF**, dependency audits, and a **repo scanner**; and export **CKL**, **CSV**, **POA&M**, or a full **evidence package** for eMASS and reporting workflows.

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

- **Import XCCDF Benchmark** — generate a blank `.cklb` checklist from DISA STIG benchmark XML. Right-click any supported `.xml` in the explorer or run the command from the palette. Supported inputs:
  - **Standalone XCCDF** — files named like `*-xccdf.xml` with a root `<Benchmark>` element (classic DISA layout).
  - **SCAP data stream** — SCAP **1.2** or **1.3** bundles (often `*Benchmark*.xml` or `*SCAP*Benchmark*.xml`) whose root is `<data-stream-collection>`; the extension finds the embedded XCCDF `<Benchmark>` inside the checklist component.
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

### NIST 800-53 Control Crosswalk

- **Crosswalk analysis** — import a CSV of your organization's NIST 800-53 control baseline, and the extension maps those controls against the STIG rules in your checklist via the CCI (Control Correlation Identifier) chain. See which controls are fully satisfied, partially satisfied, at risk, or have no STIG coverage (gaps).
- **Bundled CCI mapping** — includes 150+ of the most common CCI → NIST 800-53 mappings out of the box. For complete coverage, optionally import DISA's full `U_CCI_List.xml` (available from [cyber.mil](https://public.cyber.mil/stigs/cci/)).
- **Flexible CSV parsing** — auto-detects the control ID column regardless of header names; handles base controls (`CM-7`) and enhancements (`CM-7 (1)`); works with eMASS exports, NIST spreadsheets, or simple hand-typed CSVs.
- **Interactive panel** — summary cards, status/family/text filters, sortable columns, expandable rows with per-rule detail and CCI linkage.
- **Crosswalk CSV export** — one-click export of the full crosswalk report with control status, rule counts, and mapped rule details.

### Evidence & Deliverables

- **Evidence package builder** — export a complete ATO evidence zip containing: the `.cklb` checklist, `.ckl` XML export, summary CSV, POA&M CSV, a text summary report, and optionally attached screenshots or scan reports

**From the checklist toolbar:** use **Export CKL**, **Export CSV**, or **Export POA&M**.

## Commands

All commands are available from the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`):

| Command | Description |
| ------- | ----------- |
| `STIG Workbench: Open .cklb File` | Open a `.cklb` file via file picker |
| `STIG Workbench: Import XCCDF Benchmark` | Generate a blank `.cklb` from standalone XCCDF or an SCAP 1.2/1.3 benchmark data stream |
| `STIG Workbench: Import CKL Checklist` | Convert a legacy `.ckl` to `.cklb` |
| `STIG Workbench: Import SCAP Scan Results` | Apply SCAP XCCDF scan results to a checklist |
| `STIG Workbench: Merge / Carry Forward Findings` | Copy findings from an old checklist to a new one |
| `STIG Workbench: Diff Two Checklists` | Compare two checklists side-by-side |
| `STIG Workbench: Open Dashboard` | Aggregate stats across all workspace checklists |
| `STIG Workbench: Import SARIF Results` | Map SAST findings to STIG rules via CWE |
| `STIG Workbench: Import Dependency Audit` | Import npm audit / pip-audit JSON |
| `STIG Workbench: Scan Repo Against Checklist` | Run built-in regex scanner on a codebase |
| `STIG Workbench: Export Evidence Package` | Bundle checklist + exports + evidence into a zip |
| `STIG Workbench: NIST 800-53 Crosswalk` | Map NIST controls to STIG rules via CCI and show coverage |

**Context menus:**

- Right-click any `.xml` file (including SCAP benchmark bundles) → **STIG Workbench: Import XCCDF Benchmark**
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
2. Run `STIG Workbench: Import XCCDF Benchmark` and select the benchmark XML — either a standalone `*-xccdf.xml` file or an **SCAP 1.2/1.3** package such as `U_*_STIG_SCAP_1-3_Benchmark.xml` (data stream with embedded XCCDF).
3. A blank `.cklb` is written next to the source file and opens automatically
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

### Automated ASD STIG assessment with SAST tools

1. Import the ASD STIG XCCDF benchmark to create a blank `.cklb`
2. Run your SAST tool and export results as SARIF:
   - CodeQL: `codeql database analyze --format=sarif-latest`
   - Semgrep: `semgrep --sarif -o results.sarif`
   - Bandit: `bandit -r . -f sarif -o results.sarif`
   - ESLint: `eslint --format @microsoft/eslint-formatter-sarif -o results.sarif`
3. Run `STIG Workbench: Import SARIF Results` — select your checklist and SARIF file(s)
4. Findings are auto-mapped to STIG rules via CWE IDs with file/line evidence
5. Run `npm audit --json > audit.json` and import with `STIG Workbench: Import Dependency Audit`
6. Use the repo scanner for additional pattern checks: `STIG Workbench: Scan Repo Against Checklist`
7. Review remaining `Not Reviewed` rules manually
8. Export the evidence package: `STIG Workbench: Export Evidence Package`

### Running a NIST 800-53 control crosswalk

The crosswalk maps your organization's NIST 800-53 control baseline against the STIG rules in a checklist using DISA's CCI (Control Correlation Identifier) chain:  
`STIG Rule → CCI → NIST 800-53 Control`.

1. Open a `.cklb` checklist (or have one active in the editor)
2. Run **`STIG Workbench: NIST 800-53 Crosswalk`** from the Command Palette
3. If no checklist is active, you'll be prompted to select one
4. Select your **NIST 800-53 controls CSV** — this is your organization's applicable control baseline. The CSV just needs a column with control IDs (e.g. `AC-2`, `CM-7`, `SI-10 (1)`). The parser auto-detects the right column, so exports from eMASS, NIST spreadsheets, or a simple hand-typed file all work:

   ```csv
   Control ID,Title,Family
   AC-2,Account Management,Access Control
   CM-7,Least Functionality,Configuration Management
   SI-10,Information Input Validation,System and Information Integrity
   ```

5. Choose whether to **use the bundled CCI mapping** (covers the most common CCIs out of the box) or **import the full `U_CCI_List.xml`** from [public.cyber.mil/stigs/cci/](https://public.cyber.mil/stigs/cci/) for complete coverage
6. The crosswalk panel opens with:
   - **Summary cards** — total controls, covered, gaps, fully satisfied, at risk, and coverage percentage
   - **Crosswalk table** — each NIST control shows its status, mapped STIG rule count, and pass/open/NR breakdown
   - **Expandable detail** — click any row to see the individual STIG rules, their severity and status, and the CCIs that created the mapping
7. Use the **filter bar** to narrow by status (Gaps, At Risk, Partially Satisfied, Fully Satisfied), NIST family, or free-text search
8. Click **Export Crosswalk CSV** to save the full report for inclusion in your security authorization package

**How control statuses are determined:**

| Status | Meaning |
| ------ | ------- |
| **Fully Satisfied** | All mapped STIG rules are Not a Finding or Not Applicable |
| **Partially Satisfied** | At least one mapped rule is passing, but others are Open or Not Reviewed |
| **At Risk** | All mapped rules are Open or Not Reviewed |
| **Not Covered (Gap)** | No STIG rules in this checklist map to this control — it may be addressed by other STIGs or non-STIG evidence |

**Tips:**

- If you import only base controls (e.g. `CM-7`), the crosswalk rolls up coverage from enhancement CCIs too (e.g. rules mapped to `CM-7 (1)` count under `CM-7`)
- If you import specific enhancements (e.g. `CM-7 (1)`), only exact matches are shown
- An info message tells you how many CCIs couldn't be mapped — importing the full XML eliminates these gaps

**Want to try it immediately?** Use the included sample data:

- Checklist: `examples/example.cklb`
- Controls baseline: `examples/nist-controls-baseline.csv` (16 controls exercising every status type)
- Alternate format: `examples/nist-controls-emass-format.csv` (demonstrates the CSV auto-detection against different column names)

See `examples/testplan.md` section 9 for a step-by-step verification walkthrough.

### Generating deliverables

- **For eMASS**: click **Export CKL** to generate a `.ckl` XML file
- **For briefings**: click **Export CSV** for a full summary spreadsheet
- **For POA&Ms**: click **Export POA&M** to generate a CSV of all Open findings with standard DOD columns

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
  xccdfImporter.ts        # Standalone XCCDF + SCAP data-stream benchmark → .cklb import
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
  cciNistMap.ts           # CCI → NIST 800-53 bundled mapping + XML parser
  nistCrosswalk.ts        # NIST 800-53 crosswalk analysis engine + CSV parser
  crosswalkPanel.ts       # NIST crosswalk WebviewPanel UI
```

The extension uses VS Code's **Custom Text Editor API**. The `.cklb` file stays a text document — status changes write back via `WorkspaceEdit`, so Cmd+S / Ctrl+S and undo/redo work naturally.

## License

MIT
