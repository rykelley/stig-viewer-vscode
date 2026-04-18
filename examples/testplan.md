# STIG Workbench — Test Plan

A step-by-step guide to exercise the main extension workflows as a real user would.

> **Prerequisites:** Install the extension and have at least one `.cklb` checklist in your workspace.  
> The **ASD STIG** (Application Security and Development) is a good single STIG for testing since its rules cover code security, dependencies, crypto, auth, etc.

---

## 1. Scan Repo Against Checklist

Scans source code for security issues (hardcoded secrets, SQL injection, XSS, etc.) and maps findings to STIG rules.

### Steps

1. Open a workspace with real code (the `stig-viewer-vscode` repo itself works).
2. Create a checklist by importing an ASD STIG XCCDF benchmark.
3. Run **STIG Workbench: Scan Repo Against Checklist** from the command palette.
4. Select your `.cklb` file when prompted.
5. Select the repo folder to scan (e.g., `~/workspace/stig-viewer-vscode`).
6. Choose **Use default scan patterns**.

### What to Verify

- [ ] Progress notification shows scanning progress with rule IDs.
- [ ] Rules get marked **Open** or **Not a Finding** with `[AUTO-SCAN]` prefixed finding details.
- [ ] Finding details include file paths and line numbers of matches.
- [ ] The checklist reopens automatically when done.
- [ ] Summary message shows rule counts (open, not a finding, unmatched).

### Tip

The scanner looks for hardcoded secrets, `innerHTML`, `eval()`, `http://` URLs, `console.log` with sensitive data, `chmod 777`, etc. Your own extension codebase should trigger some of these.

---

## 2. Import Dependency Audit

Imports output from `npm audit` or `pip-audit` and maps vulnerabilities to dependency-related STIG rules.

### Generate Test Data

```bash
# npm
cd ~/workspace/stig-viewer-vscode
npm audit --json > /tmp/npm-audit-output.json

# pip (if Python is available)
pip-audit --format=json > /tmp/pip-audit-output.json
```

### Steps

1. Run **STIG Workbench: Import Dependency Audit** from the command palette.
2. Select a `.cklb` checklist (use one whose STIG has rules mentioning "third-party", "dependency", "vulnerability", "library", "component").
3. Select `/tmp/npm-audit-output.json`.

### What to Verify

- [ ] Vulnerabilities are parsed and matched to dependency-related STIG rules.
- [ ] Matched rules get set to **Open** with `[AUDIT IMPORT]` prefixed details.
- [ ] Severity breakdown is shown in the finding details.
- [ ] If no dependency rules exist in the checklist, a warning message appears.
- [ ] Test with both npm and pip-audit formats if possible.

---

## 3. Diff Two Checklists

Compares two checklists side-by-side and highlights regressions, improvements, new rules, and removed rules.

### Setup

1. Import an XCCDF benchmark to create a blank checklist (`baseline.cklb`).
2. Copy that file and manually change some rule statuses (`current.cklb`) — mark a few as Open, Not a Finding, etc.

### Steps

1. Run **STIG Workbench: Diff Two Checklists** from the command palette.
2. Select `baseline.cklb` as the **FIRST** (old/baseline) checklist.
3. Select `current.cklb` as the **SECOND** (new/current) checklist.

### What to Verify

- [ ] Diff panel opens with summary cards (Regressions, Improvements, New, Removed, Unchanged).
- [ ] Changed rows show correct color-coding (red = regression, green = improvement).
- [ ] Status columns show correct before/after statuses.
- [ ] "Show unchanged rules" checkbox toggles the full list.
- [ ] Column sorting works by clicking headers.

### Harder Test

Import two different versions of the same STIG (e.g., V1R1 and V1R2) to see New/Removed rules appear.

---

## 4. Import SARIF Results

Imports SARIF output from SAST tools (CodeQL, Semgrep, Bandit) and maps findings to STIG rules via CWE IDs.

### Generate Test Data

```bash
# Semgrep (free, fast)
cd ~/workspace/stig-viewer-vscode
pip install semgrep
semgrep --config auto --sarif -o /tmp/semgrep-results.sarif src/
```

Alternatively, use CodeQL output or download a sample SARIF file from a GitHub Actions CI artifact.

### Steps

1. Run **STIG Workbench: Import SARIF Results** from the command palette.
2. Select your ASD STIG checklist.
3. Select the `.sarif` file.

### What to Verify

- [ ] Findings are mapped to STIG rules via CWE IDs.
- [ ] Finding details show `[SARIF IMPORT]` with CWE groupings, file paths, and line numbers.
- [ ] Summary message shows total findings, mapped count, and any unmapped CWEs.
- [ ] Rules are marked **Open**.

---

## 5. Merge / Carry Forward Findings

Carries over statuses, finding details, and comments from an old completed checklist into a new/blank one (simulates STIG version upgrades).

### Steps

1. Take a completed checklist with statuses and finding details filled in (use one from the scan or import tests above).
2. Import a fresh/blank XCCDF benchmark from the same or newer STIG version.
3. Run **STIG Workbench: Merge / Carry Forward Findings** from the command palette.
4. Select the completed checklist as the **OLD** checklist.
5. Select the blank one as the **NEW** checklist.

### What to Verify

- [ ] Matching rules (by `rule_version`) carry over status, finding details, and comments.
- [ ] Summary shows carried count, new rules, and removed rules.
- [ ] The new checklist opens with the merged data.
- [ ] Rules that exist only in the new STIG remain as Not Reviewed.

---

## 6. Export Evidence Package

Bundles the checklist, CKL export, CSV summary, POA&M, and a summary report into a single `.zip` file.

### Steps

1. Open a checklist that has some findings populated (from steps above).
2. Run **STIG Workbench: Export Evidence Package** from the command palette.
3. Select the `.cklb` file.
4. Try both **Save package now** and **Attach additional evidence files first**.
5. Save the `.zip` file.

### What to Verify

- [ ] Unzip and confirm it contains: `checklist.cklb`, `checklist.ckl`, `summary.csv`, `poam.csv`, `report.txt`.
- [ ] `report.txt` has the correct host info, rule counts, severity breakdown, and open findings list.
- [ ] `poam.csv` only includes Open rules.
- [ ] `summary.csv` includes all rules with their statuses.
- [ ] If you attached extra files, they appear in an `evidence/` subfolder inside the zip.

---

## 7. Export POA&M

Exports a Plan of Action & Milestones CSV for all Open findings.

### Steps

1. Open a `.cklb` file in the editor that has some rules marked **Open**.
2. Click the **Export POA&M** button in the webview toolbar.

### What to Verify

- [ ] Saves a CSV with POA&M headers (POA&M ID, Vuln ID, Rule ID, Rule Version, Raw Severity, etc.).
- [ ] Only Open findings are included.
- [ ] CCIs and host name are populated from the checklist.
- [ ] Severity labels are correct (CAT I / CAT II / CAT III).

---

## 8. Multi-Checklist Dashboard

Displays an aggregate view of all `.cklb` files in the workspace.

### Setup

Place 2–3 `.cklb` files in your workspace (different STIGs, different completion levels).

### Steps

1. Run **STIG Workbench: Open Dashboard** from the command palette.

### What to Verify

- [ ] Shows aggregate stats (Total Rules, Open, Not a Finding, Not Reviewed, Not Applicable).
- [ ] Severity bar renders correctly (CAT I / CAT II / CAT III).
- [ ] Completion percentage is accurate.
- [ ] Each checklist appears as a row in the table.
- [ ] Clicking a row opens that checklist in the editor.
- [ ] **Refresh** button reloads data.
- [ ] Column sorting works by clicking headers.

---

## 9. NIST 800-53 Control Crosswalk

Maps NIST 800-53 controls against STIG rules via the CCI chain and displays coverage, gaps, and per-control rule detail.

### Test Data (provided)

Two sample CSVs are included in `examples/`:

- **`examples/nist-controls-baseline.csv`** — a 16-control baseline that exercises every status type (fully satisfied, partially satisfied, at risk, not covered) against `examples/example.cklb`
- **`examples/nist-controls-emass-format.csv`** — same data with different column names (`control_id`, `name`, `description`) to verify the CSV parser auto-detects the control ID column

### Steps

1. Open `examples/example.cklb` in the editor (double-click it in the explorer)
2. Run **STIG Workbench: NIST 800-53 Crosswalk** from the command palette
3. Confirm the active checklist when prompted (or pick `examples/example.cklb`)
4. Select `examples/nist-controls-baseline.csv` as the NIST controls CSV
5. Choose **"Use bundled CCI mapping (covers common CCIs)"**
6. The crosswalk panel opens

### What to Verify — Summary Cards

- [ ] **Total Controls:** 16
- [ ] **Covered:** 4 (AC-8, CM-6, SC-8, SC-8 (1))
- [ ] **Gaps:** 12 (AC-1, AC-2, AU-3, AU-12, CM-7, CP-9, IA-2, IA-5 (1), PE-2, RA-5, SI-10, SI-11)
- [ ] **At Risk:** 3 (AC-8, SC-8, SC-8 (1))
- [ ] **Partial:** 1 (CM-6)
- [ ] **Coverage %** updates correctly

### What to Verify — Info Message

- [ ] A popup appears: **"1 CCI in this checklist could not be mapped…"** — this is from `CCI-000052` on V-257781, which is intentionally absent from the bundled map to demonstrate the warning

### What to Verify — Control Statuses in the Table

| Control | Expected Status | Why |
| ------- | --------------- | --- |
| AC-1, CP-9, PE-2, RA-5, … | **Not Covered (red ●)** | No CCIs in the checklist map to these |
| CM-6 | **Partially Satisfied (⊙ amber)** | V-257777 is NR, V-257778 is NaF (both via CCI-000366) |
| AC-8 | **At Risk (⚠ amber)** | V-257779 and V-257780 are both Open (via CCI-000048) |
| SC-8 | **At Risk** | SC-8 is the base control — the crosswalk rolls up CCI-002421 (which maps to SC-8 (1)) into SC-8 since no specific enhancement is listed |
| SC-8 (1) | **At Risk** | V-257780 is Open via CCI-002421 — exact-match enhancement |

### What to Verify — Detail Expansion

- [ ] Click the CM-6 row → sub-table shows **V-257777 (Not Reviewed)** and **V-257778 (Not a Finding)**, both with CCI-000366
- [ ] Click the AC-8 row → sub-table shows **V-257779** and **V-257780**, both Open
- [ ] Click an AC-1 (Not Covered) row → description panel says *"No STIG rules in this checklist map to this control…"*

### What to Verify — Filters

- [ ] Status dropdown → select **"Gaps"** → only the 12 uncovered controls remain
- [ ] Status dropdown → select **"At Risk"** → only AC-8, SC-8, SC-8 (1) remain
- [ ] Family dropdown → select **"Configuration Management"** → CM-6 and CM-7 only
- [ ] Search → type `SC` → only SC-* rows remain
- [ ] Column sort → click **Control** header → sort ascending/descending

### What to Verify — Alternate CSV Format

1. Run the crosswalk command again
2. Select `examples/nist-controls-emass-format.csv`
3. Confirm the parser picked up the correct column:
   - [ ] 6 controls loaded (AC-2, AC-8, CM-6, CM-7, SC-8, SI-10)
   - [ ] Titles and descriptions from `name`/`description` columns populate the detail view

### What to Verify — Bonus: Test Fully Satisfied

Before running the crosswalk:

1. Open `examples/example.cklb` in the editor
2. Change **V-257777** status from "Not Reviewed" to **"Not a Finding"**
3. Save (Cmd+S / Ctrl+S)
4. Re-run the crosswalk

- [ ] CM-6 now shows **Fully Satisfied (✔ green)** since both V-257777 and V-257778 are passing

### What to Verify — Export

1. Click **Export Crosswalk CSV**
2. Save to `/tmp/crosswalk-report.csv`

- [ ] CSV has 16 data rows (one per control)
- [ ] Columns: Control ID, Title, Family, Status, Mapped Rules, Passing, Open, Not Reviewed, CCIs, Rule Details
- [ ] AC-8 row lists `V-257779 (open); V-257780 (open)` in Rule Details
- [ ] Gap rows (AC-1 etc.) have 0 mapped rules and empty CCIs

### What to Verify — Full CCI XML Import (optional)

1. Download `U_CCI_List.xml` from [public.cyber.mil/stigs/cci/](https://public.cyber.mil/stigs/cci/)
2. Re-run the crosswalk, select **"Import full CCI List XML from DISA"**, point to the downloaded XML
3. Select the baseline CSV again

- [ ] Info toast: *"Loaded {N} CCI entries from XML."* (should be ~5000+)
- [ ] The "1 CCI unmapped" warning no longer appears — CCI-000052 is now resolved
- [ ] CM-6 or another control gains an extra mapped rule (V-257781)

---

## Suggested Test Order

1. Import an ASD STIG XCCDF to create a blank checklist.
2. **Scan Repo** — populates the checklist with automated findings.
3. **Import Dependency Audit** — adds vulnerability data.
4. **Import SARIF** — adds SAST findings.
5. **Export POA&M** — verify Open findings export correctly.
6. **Export Evidence Package** — bundle everything.
7. **Merge / Carry Forward** — test with a second blank checklist.
8. **Diff Two Checklists** — compare the original vs. merged checklist.
9. **Dashboard** — view all checklists at once.
10. **NIST 800-53 Crosswalk** — run against `examples/example.cklb` with `examples/nist-controls-baseline.csv` to validate CCI → NIST coverage analysis.
