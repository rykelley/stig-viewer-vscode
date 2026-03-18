# STIG Viewer — VSCode Extension

A Visual Studio Code extension for viewing and managing DISA STIG Checklist files (`.cklb` format) with a rich, interactive overview panel.

## What is a STIG?

A **Security Technical Implementation Guide (STIG)** is a configuration standard published by DISA (Defense Information Systems Agency) for hardening systems to meet DoD security requirements. The `.cklb` format is the JSON-based checklist format used by tools like [STIG Viewer](https://www.stigviewer.com/) and the official [DISA STIG Viewer](https://public.cyber.mil/stigs/).

## Features

- **Auto-opens `.cklb` files** — double-click any `.cklb` file and it renders in a custom editor
- **Dashboard overview** — stat cards showing Open / Not a Finding / Not Reviewed / N/A counts
- **Severity breakdown** — visual bar showing CAT I (High), CAT II (Medium), CAT III (Low) distribution
- **Completion tracker** — progress bar showing how much of the checklist has been evaluated
- **Filterable rule table** — filter by status, severity, or free-text search across all rule fields
- **Detail slide-over panel** — click any rule to see full Discussion, Check Content, and Fix Text
- **Edit status in-place** — change a rule's status, enter finding details and comments, and save back to the `.cklb` file
- **Respects VSCode themes** — uses CSS variables so it looks correct in dark, light, and high-contrast themes

![STIG Viewer Screenshot](media/screenshot.png)

## Installation (Development)

```bash
cd stig-viewer-vscode
npm install
npm run compile
code .
```

Then press **F5** to launch an Extension Development Host. Open any `.cklb` file in that window.

## Packaging for Distribution

```bash
npm install -g @vscode/vsce
vsce package
# Produces stig-viewer-0.1.0.vsix
code --install-extension stig-viewer-0.1.0.vsix
```

## How the .cklb Format Works

A `.cklb` file is JSON with this structure:

```
{
  "title": "Checklist Title",
  "id": "uuid",
  "cklb_version": "1.0",
  "target_data": { host_name, ip_address, fqdn, ... },
  "stigs": [
    {
      "stig_name": "Full STIG Name",
      "display_name": "Short Name",
      "release_info": "Release: 1 Benchmark Date: ...",
      "rules": [
        {
          "group_id": "V-233511",           // Vuln ID
          "rule_version": "CD12-00-000100",
          "severity": "high|medium|low",
          "status": "not_reviewed|open|not_a_finding|not_applicable",
          "rule_title": "...",
          "discussion": "...",              // Why this matters
          "check_content": "...",           // How to verify
          "fix_text": "...",                // How to remediate
          "finding_details": "...",         // Your assessment notes
          "comments": "...",                // Additional notes
          "ccis": ["CCI-000382"],           // Control Correlation Identifiers
          "srg_id": "SRG-APP-000142-DB-000094"
        }
      ]
    }
  ]
}
```

**Key concepts:**

| Term | Meaning |
|------|---------|
| CAT I | High severity — most critical, must fix first |
| CAT II | Medium severity — bulk of most STIGs |
| CAT III | Low severity — less urgent |
| Open | A finding exists — the system fails this check |
| Not a Finding | System passes this check |
| Not Reviewed | Nobody has evaluated this yet |
| Not Applicable | This rule doesn't apply to this system |
| CCI | Control Correlation Identifier — maps to NIST 800-53 controls |
| SRG | Security Requirements Guide — the parent requirement |
| Vuln ID (V-xxxxx) | Unique identifier for the vulnerability group |

## Architecture

```
src/
  extension.ts          # Activation, command registration
  types.ts              # TypeScript interfaces for .cklb schema
  cklbEditorProvider.ts # CustomTextEditorProvider (parse, render, save)
  webviewContent.ts     # HTML/CSS/JS builder for the webview UI
```

The extension uses VSCode's **Custom Text Editor API**, meaning the `.cklb` file stays a text document you can save with Cmd+S/Ctrl+S, and status changes write back via WorkspaceEdit.

## License

MIT
