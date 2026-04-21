# AGENTS.md — STIG Workbench VSCode Extension

Agent guidance for working in this repository.

---

## Project Overview

**STIG Workbench** is a VS Code extension (TypeScript) for viewing, editing, importing, and exporting DISA STIG Checklist files (`.cklb`). It uses the VS Code Custom Text Editor API — the `.cklb` file stays a plain JSON text document; all edits go through `WorkspaceEdit` so undo/redo and Cmd+S work natively.

- **Entry point:** `src/extension.ts` — registers all commands and the custom editor provider
- **Core editor:** `src/cklbEditorProvider.ts` — resolves the custom editor, handles webview ↔ document messaging
- **Shared types:** `src/types.ts` — `CklbDocument`, `CklbStig`, `CklbRule` interfaces
- **Build output:** `dist/extension.js` (bundled by esbuild, never edit directly)

---

## Repository Layout

```
src/
  extension.ts          # Activation, command registration
  cklbEditorProvider.ts # Custom editor provider (webview ↔ document bridge)
  types.ts              # Shared TypeScript interfaces
  webviewContent.ts     # HTML/CSS/JS for the checklist editor webview
  dashboardPanel.ts     # Multi-checklist dashboard WebviewPanel
  diffPanel.ts          # Checklist diff WebviewPanel
  crosswalkPanel.ts     # NIST 800-53 crosswalk WebviewPanel
  xccdfImporter.ts      # XCCDF/SCAP benchmark → .cklb
  importCkl.ts          # Legacy CKL (XML) → .cklb
  importScapResults.ts  # SCAP XCCDF scan results → rule statuses
  importSarif.ts        # SARIF → rule statuses via CWE mapping
  importAudit.ts        # npm audit / pip-audit JSON → rule statuses
  hdfImporter.ts        # InSpec/HDF JSON → rule statuses
  hdfImportPanel.ts     # HDF import UI flow
  mergeFindings.ts      # Carry-forward findings between checklist versions
  repoScanner.ts        # Source code scan → rule statuses (uses scan-patterns.json)
  exportCkl.ts          # .cklb → CKL XML
  exportCsv.ts          # .cklb → summary CSV
  exportPoam.ts         # .cklb → POA&M CSV
  evidencePackage.ts    # Bundles all exports into a .zip
  cciNistMap.ts         # CCI → NIST 800-53 bundled mapping + XML parser
  nistCrosswalk.ts      # NIST crosswalk analysis engine + CSV parser
  cweStigMap.ts         # CWE → STIG rule keyword mapping

examples/
  example.cklb                  # Sample checklist for manual testing
  nist-controls-baseline.csv    # 16-control NIST baseline for crosswalk tests
  nist-controls-emass-format.csv # Same data, alternate column names
  testplan.md                   # Manual test plan covering all major workflows

scan-patterns.json    # Configurable repo scan patterns (secrets, SQLi, XSS, etc.)
esbuild.js            # Build script (bundle + minify for production)
tsconfig.json         # TypeScript config (strict mode, ES2020, commonjs)
package.json          # Extension manifest + npm scripts
```

---

## Tech Stack

| Concern | Choice |
|---|---|
| Language | TypeScript 5.x, strict mode |
| Runtime | Node.js (VS Code extension host) |
| Build | esbuild (single bundle → `dist/extension.js`) |
| UI | VS Code Webview API (vanilla HTML/CSS/JS, no framework) |
| XML parsing | xml2js |
| ID generation | uuid |
| Tests | `vscode-test` (no unit tests currently exist) |

---

## Build & Development

```bash
# Install dependencies
npm install

# Type-check only (no emit)
npm run check-types

# Compile (type-check + bundle)
npm run compile

# Watch mode (esbuild + tsc in parallel)
npm run watch

# Production bundle (minified)
npm run package
```

The extension is activated when a workspace contains a `*.cklb` file (`activationEvents`).

To test locally: press **F5** in VS Code to launch the Extension Development Host.

---

## Key Patterns & Conventions

### Webview ↔ Document Communication
All state lives in the `.cklb` JSON file. The webview sends messages (`saveRule`, `bulkSaveRules`, `saveTargetData`, `exportCsv`, `exportCkl`, `exportPoam`) and the provider applies `WorkspaceEdit` to the document. Never mutate document state directly from the webview.

### Adding a New Command
1. Register the command in `package.json` under `contributes.commands`.
2. Add the handler in `extension.ts` using the existing try/catch + `showErrorMessage` pattern.
3. Implement the logic in a new `src/<feature>.ts` module.
4. If it needs a webview panel, follow the pattern in `dashboardPanel.ts` or `crosswalkPanel.ts`.

### Adding a New Import Format
1. Create `src/import<Format>.ts` — accept a `vscode.Uri` for the checklist and a `vscode.Uri` for the import file.
2. Parse the format, map findings to `CklbRule.status` and `CklbRule.finding_details`.
3. Write back via `WorkspaceEdit` (see `importSarif.ts` for reference).
4. Register the command in `extension.ts` and `package.json`.

### Webview HTML
All webview HTML is generated in TypeScript (no separate HTML files). Keep inline scripts minimal — prefer `postMessage` for data transfer rather than embedding large JSON blobs in the HTML string.

### Error Handling
Every command handler wraps its logic in `try/catch` and calls `vscode.window.showErrorMessage`. Do not let unhandled rejections surface to the user as silent failures.

---

## Commit Style

Short imperative subject line, no period. Examples from this repo:
```
6.3.0
Rename screenshot.png to Screenshot.png
Refactor extension.js to further streamline code and reduce file size
```

Follow the same style. Do not use conventional commit prefixes (`feat:`, `fix:`) unless the project adopts them.

---

## What Does Not Exist Yet

- **Unit tests** — `vscode-test` is configured but no test files exist under `src/test/`
- **Linting** — no ESLint or Prettier config
- **CI/CD** — no GitHub Actions workflows
- **Changelog** — no `CHANGELOG.md`
- **Configuration schema** — no `contributes.configuration` in `package.json` (no user-facing settings)
