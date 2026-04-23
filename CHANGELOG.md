# Changelog

All notable changes to the STIG Workbench VSCode extension are documented here.
Version headings match the `version` field in `package.json` and the git tags.

## [Unreleased]

### Added

- **InSpec / MITRE SAF (HDF) importer.** New command `STIG Workbench: Import InSpec / HDF Results` and right-click action on any `.json` file. Ingests Heimdall Data Format produced by InSpec, SAF CLI, or Heimdall. Two modes:
  - *Mode A* — apply results to the currently open `.cklb`. Matching is tried in order: `tags.stig_id` → `rule_version`, then `control.id` → `group_id`, then `tags.gid` → `group_id`.
  - *Mode B* — generate a new `.cklb` from HDF alone.
  - WebviewPanel with live preview, option toggles (overwrite existing statuses / append vs. replace finding details / update empty target data), summary view with expandable unmatched lists, and a downloadable markdown import report.
  - User-entered status and finding details are preserved by default; HDF evidence is appended below a `--- HDF Import ---` divider.
- **Clickable stat cards** — Total / Open / Not a Finding / Not Reviewed / Not Applicable cards in the checklist header toggle a status filter on click; the severity-bar segments (CAT I / II / III) toggle a severity filter. Active selection is highlighted and stays in sync with the drop-down filters.
- **`[HDF IMPORT]` finding-details callout style** — HDF evidence now gets the same badge + monospace block styling that `[AUTO-SCAN]`, `[SARIF IMPORT]`, and `[AUDIT IMPORT]` blocks already had, so tool-generated evidence is visually distinct from user-entered narrative.

### Changed

- Architecture section of the README now lists `hdfImporter.ts` and `hdfImportPanel.ts`.

## [6.4.0]

- Webview interactivity and styling enhancements.
- Devcontainer configuration for reproducible development environment.
- `AGENTS.md` and improvement spec added to the repo.

## [6.3.0]

- Screenshot asset renamed (`screenshot.png` → `Screenshot.png`) and README link updated.

## [6.2.0]

- Further bundle-size and maintainability refactors to the webview script.

## [6.1.0]

- Bundle-size reduction pass; removal of unused code paths.

## [6.0.0]

- **NIST 800-53 Crosswalk** feature added: CSV-based control-baseline import, CCI-chained mapping, interactive crosswalk panel with per-control status (Fully Satisfied / Partially Satisfied / At Risk / Gap), and CSV export.
- Bundled CCI → NIST 800-53 mapping with optional import of DISA's full `U_CCI_List.xml`.

## [5.5.0] and earlier

- Pro-feature dependencies removed; full OSS build.
- SARIF import with CWE-to-STIG mapping; dependency audit import (npm / pip-audit / bundler-audit); built-in regex repo scanner.
- Evidence package export (zip).
- Dashboard and diff panels.
- XCCDF + SCAP data-stream import; legacy `.ckl` import; SCAP XCCDF results application.
- CKL / CSV / POA&M export.
