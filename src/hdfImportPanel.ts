import * as vscode from 'vscode';
import * as path from 'path';
import { CklbDocument } from './types';
import { CklbEditorProvider } from './cklbEditorProvider';
import {
  HdfDocument,
  HdfImportOptions,
  HdfImportSummary,
  applyHdfToChecklist,
  generateHdfImportReport,
  hdfToNewChecklist,
  parseHdf,
} from './hdfImporter';

type Mode = 'apply' | 'new';

interface PanelState {
  hdf: HdfDocument;
  checklistDoc: CklbDocument | null;
  checklistUri: vscode.Uri | null;
  mode: Mode;
}

export async function importHdfFlow(
  context: vscode.ExtensionContext,
  uri?: vscode.Uri,
): Promise<void> {
  // 1. Resolve the HDF file URI
  let hdfUri = uri;
  if (!hdfUri) {
    const picks = await vscode.window.showOpenDialog({
      canSelectMany: false,
      filters: { 'HDF / InSpec JSON': ['json'] },
      title: 'Select InSpec / HDF Results File',
    });
    if (!picks?.[0]) return;
    hdfUri = picks[0];
  }

  // 2. Read + parse
  let hdf: HdfDocument;
  try {
    const bytes = await vscode.workspace.fs.readFile(hdfUri);
    const content = new TextDecoder('utf-8').decode(bytes);
    hdf = parseHdf(content);
  } catch (e) {
    vscode.window.showErrorMessage((e as Error).message);
    return;
  }

  // 3. Detect active checklist
  const activeUri = CklbEditorProvider.activeDocumentUri;
  let mode: Mode;

  if (activeUri) {
    const pick = await vscode.window.showQuickPick(
      [
        {
          label: 'Apply results to the current checklist',
          description: path.basename(activeUri.fsPath),
          value: 'apply' as Mode,
        },
        {
          label: 'Generate a new checklist from these results',
          description: hdf.profiles[0]?.title || hdf.profiles[0]?.name,
          value: 'new' as Mode,
        },
      ],
      { placeHolder: 'How should the HDF file be imported?' },
    );
    if (!pick) return;
    mode = pick.value;
  } else {
    mode = 'new';
  }

  // 4. Load checklist doc if Mode A
  let checklistDoc: CklbDocument | null = null;
  let checklistUri: vscode.Uri | null = null;
  if (mode === 'apply' && activeUri) {
    try {
      const doc = await vscode.workspace.openTextDocument(activeUri);
      checklistDoc = JSON.parse(doc.getText());
      checklistUri = activeUri;
    } catch (e) {
      vscode.window.showErrorMessage(`Failed to read active checklist: ${e}`);
      return;
    }
  }

  // 5. Open a webview panel that drives the rest of the flow
  openImportPanel(context, { hdf, checklistDoc, checklistUri, mode });
}

// ─── Panel ─────────────────────────────────────────────────────────────────

function openImportPanel(context: vscode.ExtensionContext, state: PanelState): void {
  const panel = vscode.window.createWebviewPanel(
    'stigWorkbenchHdfImport',
    'HDF Import',
    vscode.ViewColumn.Active,
    { enableScripts: true, retainContextWhenHidden: true },
  );

  panel.webview.html = buildWebviewHtml();

  // Kick off the initial view
  const sendInitial = () => {
    if (state.mode === 'apply' && state.checklistDoc) {
      const projection = projectApply(state.checklistDoc, state.hdf, defaultOptions());
      panel.webview.postMessage({
        type: 'showPreview',
        summary: projection.summary,
        profile: profileInfo(state.hdf),
        checklistTitle: state.checklistDoc.title,
        options: defaultOptions(),
      });
    } else {
      // Mode B — go directly to save + summary
      void runModeB(panel, state);
    }
  };

  // Wait for the webview to signal ready, then push the first view
  const readySub = panel.webview.onDidReceiveMessage(async (msg) => {
    if (msg?.type === 'ready') {
      sendInitial();
    }

    if (msg?.type === 'reproject' && state.mode === 'apply' && state.checklistDoc) {
      const projection = projectApply(state.checklistDoc, state.hdf, msg.options || defaultOptions());
      panel.webview.postMessage({
        type: 'updatePreview',
        summary: projection.summary,
        options: msg.options || defaultOptions(),
      });
    }

    if (msg?.type === 'apply' && state.mode === 'apply' && state.checklistDoc && state.checklistUri) {
      await runModeA(panel, state, msg.options || defaultOptions());
    }

    if (msg?.type === 'downloadReport' && msg.summary && msg.checklistTitle !== undefined) {
      await downloadReport(msg.summary as HdfImportSummary, msg.checklistTitle as string);
    }

    if (msg?.type === 'cancel') {
      panel.dispose();
    }
  });

  panel.onDidDispose(() => readySub.dispose());
}

function defaultOptions(): Required<HdfImportOptions> {
  return {
    overwriteExistingStatus: false,
    preserveExistingFindingDetails: true,
    updateTargetData: true,
  };
}

function profileInfo(hdf: HdfDocument) {
  const p = hdf.profiles[0];
  return {
    name: p?.title || p?.name || '(unknown)',
    version: p?.version || '',
    hostName: hdf.passthrough?.target?.hostname || hdf.passthrough?.target?.fqdn || '',
    inspecVersion: hdf.version || '',
    profileCount: hdf.profiles.length,
  };
}

function projectApply(
  doc: CklbDocument,
  hdf: HdfDocument,
  options: HdfImportOptions,
): { summary: HdfImportSummary } {
  // Projection uses the full apply function on a clone so the user sees exactly what would happen.
  const { summary } = applyHdfToChecklist(doc, hdf, options);
  return { summary };
}

// ─── Mode A: apply to current checklist ────────────────────────────────────

async function runModeA(
  panel: vscode.WebviewPanel,
  state: PanelState,
  options: HdfImportOptions,
): Promise<void> {
  if (!state.checklistDoc || !state.checklistUri) return;

  try {
    const { updated, summary } = applyHdfToChecklist(state.checklistDoc, state.hdf, options);

    const document = await vscode.workspace.openTextDocument(state.checklistUri);
    const edit = new vscode.WorkspaceEdit();
    const fullRange = new vscode.Range(
      document.positionAt(0),
      document.positionAt(document.getText().length),
    );
    edit.replace(document.uri, fullRange, JSON.stringify(updated, null, 2));
    const applied = await vscode.workspace.applyEdit(edit);
    if (!applied) {
      vscode.window.showErrorMessage('HDF import: failed to apply edit to the checklist.');
      return;
    }
    await document.save();

    // Re-open in the custom editor so the view refreshes
    await vscode.commands.executeCommand(
      'vscode.openWith',
      state.checklistUri,
      'stigViewer.cklbEditor',
    );

    panel.webview.postMessage({
      type: 'showSummary',
      summary,
      profile: profileInfo(state.hdf),
      checklistTitle: updated.title,
    });

    vscode.window.showInformationMessage(
      `HDF import: ${summary.matchedRules} rule(s) updated, ${summary.unmatchedControls} unmatched control(s).`,
    );
  } catch (e) {
    vscode.window.showErrorMessage(`HDF import failed: ${e}`);
  }
}

// ─── Mode B: create new checklist ──────────────────────────────────────────

async function runModeB(panel: vscode.WebviewPanel, state: PanelState): Promise<void> {
  try {
    const newDoc = hdfToNewChecklist(state.hdf);

    const defaultName = (newDoc.title || 'hdf-import').replace(/\s+/g, '-') + '.cklb';
    const saveUri = await vscode.window.showSaveDialog({
      title: 'Save New Checklist',
      defaultUri: vscode.Uri.file(defaultName),
      filters: { 'CKLB Checklist': ['cklb'] },
    });
    if (!saveUri) {
      panel.dispose();
      return;
    }

    const bytes = new TextEncoder().encode(JSON.stringify(newDoc, null, 2));
    await vscode.workspace.fs.writeFile(saveUri, bytes);

    await vscode.commands.executeCommand('vscode.openWith', saveUri, 'stigViewer.cklbEditor');

    // Build a synthetic summary for Mode B
    const totalControls = state.hdf.profiles.reduce((n, p) => n + p.controls.length, 0);
    let passed = 0, failed = 0, skipped = 0, error = 0, noResults = 0;
    for (const profile of state.hdf.profiles) {
      for (const c of profile.controls) {
        if (!c.results || c.results.length === 0) { noResults++; continue; }
        const hasFailed = c.results.some(r => r.status === 'failed');
        const hasError = c.results.some(r => r.status === 'error');
        const hasPassed = c.results.some(r => r.status === 'passed');
        const allSkipped = c.results.every(r => r.status === 'skipped');
        if (hasFailed) failed++;
        else if (allSkipped) skipped++;
        else if (hasPassed) passed++;
        else if (hasError) error++;
        else noResults++;
      }
    }
    const profInfo = profileInfo(state.hdf);
    const summary: HdfImportSummary = {
      profileName: profInfo.name,
      profileVersion: profInfo.version,
      hostName: profInfo.hostName,
      totalControls,
      matchedRules: totalControls,
      unmatchedControls: 0,
      unmatchedRules: 0,
      statusBreakdown: { passed, failed, skipped, error, noResults },
      appliedChanges: [],
      unmatchedControlIds: [],
      unmatchedRuleVersions: [],
      warnings: [],
    };

    panel.webview.postMessage({
      type: 'showSummary',
      summary,
      profile: profInfo,
      checklistTitle: newDoc.title,
      modeB: true,
    });

    vscode.window.showInformationMessage(
      `HDF import: created new checklist with ${totalControls} rules.`,
    );
  } catch (e) {
    vscode.window.showErrorMessage(`HDF new-checklist import failed: ${e}`);
    panel.dispose();
  }
}

// ─── Report download ───────────────────────────────────────────────────────

async function downloadReport(summary: HdfImportSummary, checklistTitle: string): Promise<void> {
  const md = generateHdfImportReport(summary, checklistTitle);
  const defaultName = `hdf-import-${(summary.profileName || 'report').replace(/\s+/g, '-')}.md`;
  const saveUri = await vscode.window.showSaveDialog({
    title: 'Save HDF Import Report',
    defaultUri: vscode.Uri.file(defaultName),
    filters: { 'Markdown': ['md'] },
  });
  if (!saveUri) return;
  const bytes = new TextEncoder().encode(md);
  await vscode.workspace.fs.writeFile(saveUri, bytes);
  vscode.window.showInformationMessage(`HDF report saved: ${path.basename(saveUri.fsPath)}`);
}

// ─── Webview HTML ──────────────────────────────────────────────────────────

function getNonce(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let out = '';
  for (let i = 0; i < 32; i++) out += chars.charAt(Math.floor(Math.random() * chars.length));
  return out;
}

function buildWebviewHtml(): string {
  const nonce = getNonce();
  return /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="Content-Security-Policy"
  content="default-src 'none'; style-src 'unsafe-inline'; script-src 'nonce-${nonce}';" />
<title>HDF Import</title>
<style>
  :root {
    --status-open: #e74c3c;
    --status-naf: #27ae60;
    --status-nr: #e67e22;
    --status-na: #7f8c8d;
  }
  body {
    font-family: var(--vscode-font-family);
    color: var(--vscode-editor-foreground);
    background: var(--vscode-editor-background);
    margin: 0;
    padding: 24px;
    font-size: var(--vscode-font-size);
  }
  h1 { margin-top: 0; font-weight: 400; }
  h2 { font-weight: 500; margin-top: 28px; }
  .card {
    background: var(--vscode-editorWidget-background, rgba(127,127,127,0.08));
    border: 1px solid var(--vscode-widget-border, var(--vscode-panel-border, rgba(127,127,127,0.25)));
    padding: 16px;
    border-radius: 6px;
    margin-bottom: 16px;
  }
  .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; }
  .stat {
    padding: 12px 16px;
    background: var(--vscode-editor-background);
    border: 1px solid var(--vscode-panel-border, rgba(127,127,127,0.25));
    border-radius: 4px;
  }
  .stat .label { font-size: 11px; text-transform: uppercase; opacity: 0.7; }
  .stat .value { font-size: 22px; font-weight: 500; margin-top: 4px; }
  label.option { display: block; margin: 8px 0; cursor: pointer; }
  label.option input { margin-right: 8px; }
  button {
    background: var(--vscode-button-background);
    color: var(--vscode-button-foreground);
    border: none;
    padding: 6px 14px;
    cursor: pointer;
    font-family: inherit;
    border-radius: 2px;
    margin-right: 8px;
  }
  button:hover { background: var(--vscode-button-hoverBackground); }
  button.secondary {
    background: var(--vscode-button-secondaryBackground, transparent);
    color: var(--vscode-button-secondaryForeground, var(--vscode-editor-foreground));
    border: 1px solid var(--vscode-panel-border, rgba(127,127,127,0.4));
  }
  button.secondary:hover { background: var(--vscode-button-secondaryHoverBackground, rgba(127,127,127,0.1)); }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 8px;
    font-size: 12px;
  }
  th, td {
    text-align: left;
    padding: 6px 10px;
    border-bottom: 1px solid var(--vscode-panel-border, rgba(127,127,127,0.2));
  }
  th { font-weight: 500; opacity: 0.8; }
  .badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 11px;
    color: #fff;
    font-weight: 500;
  }
  .badge.open { background: var(--status-open); }
  .badge.not_a_finding { background: var(--status-naf); }
  .badge.not_reviewed { background: var(--status-nr); }
  .badge.not_applicable { background: var(--status-na); }
  details { margin-top: 10px; }
  details summary { cursor: pointer; padding: 6px 0; font-weight: 500; }
  details ul { margin: 8px 0 8px 20px; font-size: 12px; max-height: 240px; overflow: auto; }
  .hidden { display: none; }
  .actions { margin-top: 16px; display: flex; justify-content: flex-end; }
  .scroll { max-height: 320px; overflow: auto; }
  .warn {
    padding: 8px 12px;
    background: rgba(231, 126, 34, 0.12);
    border-left: 3px solid var(--status-nr);
    margin: 8px 0;
  }
</style>
</head>
<body>
  <div id="viewPreview" class="hidden">
    <h1>Import HDF / InSpec Results</h1>
    <div class="card">
      <div><strong>Profile:</strong> <span id="pProfile"></span></div>
      <div><strong>Profile Version:</strong> <span id="pVersion"></span></div>
      <div><strong>Target Host:</strong> <span id="pHost"></span></div>
      <div><strong>InSpec Version:</strong> <span id="pInspec"></span></div>
      <div><strong>Checklist:</strong> <span id="pChecklist"></span></div>
    </div>

    <div class="stats">
      <div class="stat"><div class="label">Total HDF Controls</div><div class="value" id="sTotal">0</div></div>
      <div class="stat"><div class="label">Projected Matches</div><div class="value" id="sMatched">0</div></div>
      <div class="stat"><div class="label">Unmatched HDF</div><div class="value" id="sUnmatchedHdf">0</div></div>
      <div class="stat"><div class="label">Unmatched Rules</div><div class="value" id="sUnmatchedRules">0</div></div>
    </div>

    <h2>Options</h2>
    <div class="card">
      <label class="option"><input type="checkbox" id="optOverwrite" /> Overwrite existing rule statuses (even if the user has already set them)</label>
      <label class="option"><input type="checkbox" id="optPreserve" checked /> Append HDF evidence to existing finding details instead of replacing</label>
      <label class="option"><input type="checkbox" id="optTarget" checked /> Update empty target data (hostname, IP, FQDN) from HDF</label>
    </div>

    <h2>Preview Changes</h2>
    <div class="card scroll">
      <table id="changesTable">
        <thead>
          <tr>
            <th>Rule Version</th>
            <th>Vuln ID</th>
            <th>Old Status</th>
            <th>New Status</th>
            <th>Matched By</th>
          </tr>
        </thead>
        <tbody id="changesBody"></tbody>
      </table>
    </div>

    <div id="warningsBlock"></div>

    <div class="actions">
      <button class="secondary" id="btnCancel">Cancel</button>
      <button id="btnApply">Apply Import</button>
    </div>
  </div>

  <div id="viewSummary" class="hidden">
    <h1>Import Complete</h1>
    <div class="card">
      <div><strong>Profile:</strong> <span id="rProfile"></span></div>
      <div><strong>Checklist:</strong> <span id="rChecklist"></span></div>
    </div>

    <div class="stats">
      <div class="stat"><div class="label">Controls Processed</div><div class="value" id="rTotal">0</div></div>
      <div class="stat"><div class="label">Matched</div><div class="value" id="rMatched">0</div></div>
      <div class="stat"><div class="label">Unmatched HDF</div><div class="value" id="rUnmatchedHdf">0</div></div>
      <div class="stat"><div class="label">Unmatched Rules</div><div class="value" id="rUnmatchedRules">0</div></div>
    </div>

    <h2>Status Breakdown</h2>
    <div class="stats">
      <div class="stat"><div class="label">Open (failed)</div><div class="value" id="bFailed">0</div></div>
      <div class="stat"><div class="label">Not a Finding (passed)</div><div class="value" id="bPassed">0</div></div>
      <div class="stat"><div class="label">Not Applicable (skipped)</div><div class="value" id="bSkipped">0</div></div>
      <div class="stat"><div class="label">Error</div><div class="value" id="bError">0</div></div>
      <div class="stat"><div class="label">No Results</div><div class="value" id="bNoResults">0</div></div>
    </div>

    <div id="rWarnings"></div>

    <details id="unmatchedHdfDetails">
      <summary>Unmatched HDF Controls (<span id="rUnmatchedHdfCount">0</span>)</summary>
      <ul id="rUnmatchedHdfList"></ul>
    </details>
    <details id="unmatchedRulesDetails">
      <summary>Unmatched Checklist Rules (<span id="rUnmatchedRulesCount">0</span>)</summary>
      <ul id="rUnmatchedRulesList"></ul>
    </details>

    <div class="actions">
      <button class="secondary" id="btnClose">Close</button>
      <button id="btnDownload">Download Import Report</button>
    </div>
  </div>

  <script nonce="${nonce}">
    (function() {
      const vscode = acquireVsCodeApi();
      let lastSummary = null;
      let lastChecklistTitle = '';

      const previewView = document.getElementById('viewPreview');
      const summaryView = document.getElementById('viewSummary');

      function show(view) {
        previewView.classList.add('hidden');
        summaryView.classList.add('hidden');
        view.classList.remove('hidden');
      }

      function statusLabel(s) {
        return ({
          open: 'Open',
          not_a_finding: 'Not a Finding',
          not_reviewed: 'Not Reviewed',
          not_applicable: 'Not Applicable',
        })[s] || s;
      }

      function renderPreview(summary, profile, checklistTitle, options) {
        document.getElementById('pProfile').textContent = profile.name || '';
        document.getElementById('pVersion').textContent = profile.version || '—';
        document.getElementById('pHost').textContent = profile.hostName || '—';
        document.getElementById('pInspec').textContent = profile.inspecVersion || '—';
        document.getElementById('pChecklist').textContent = checklistTitle || '—';

        document.getElementById('sTotal').textContent = summary.totalControls;
        document.getElementById('sMatched').textContent = summary.matchedRules;
        document.getElementById('sUnmatchedHdf').textContent = summary.unmatchedControls;
        document.getElementById('sUnmatchedRules').textContent = summary.unmatchedRules;

        document.getElementById('optOverwrite').checked = !!options.overwriteExistingStatus;
        document.getElementById('optPreserve').checked = options.preserveExistingFindingDetails !== false;
        document.getElementById('optTarget').checked = options.updateTargetData !== false;

        const body = document.getElementById('changesBody');
        body.innerHTML = '';
        const rows = summary.appliedChanges.slice(0, 500);
        for (const ch of rows) {
          const tr = document.createElement('tr');
          tr.innerHTML = [
            '<td>', escapeHtml(ch.ruleVersion || ''), '</td>',
            '<td>', escapeHtml(ch.groupId || ''), '</td>',
            '<td><span class="badge ', ch.oldStatus, '">', statusLabel(ch.oldStatus), '</span></td>',
            '<td><span class="badge ', ch.newStatus, '">', statusLabel(ch.newStatus), '</span></td>',
            '<td>', ch.matchedBy, '</td>',
          ].join('');
          body.appendChild(tr);
        }
        if (summary.appliedChanges.length > rows.length) {
          const tr = document.createElement('tr');
          tr.innerHTML = '<td colspan="5"><em>… and ' + (summary.appliedChanges.length - rows.length) + ' more</em></td>';
          body.appendChild(tr);
        }

        const warnBlock = document.getElementById('warningsBlock');
        warnBlock.innerHTML = '';
        for (const w of summary.warnings || []) {
          const div = document.createElement('div');
          div.className = 'warn';
          div.textContent = w;
          warnBlock.appendChild(div);
        }

        show(previewView);
      }

      function renderSummary(summary, profile, checklistTitle) {
        lastSummary = summary;
        lastChecklistTitle = checklistTitle || '';

        document.getElementById('rProfile').textContent = profile?.name || summary.profileName || '';
        document.getElementById('rChecklist').textContent = checklistTitle || '';

        document.getElementById('rTotal').textContent = summary.totalControls;
        document.getElementById('rMatched').textContent = summary.matchedRules;
        document.getElementById('rUnmatchedHdf').textContent = summary.unmatchedControls;
        document.getElementById('rUnmatchedRules').textContent = summary.unmatchedRules;

        document.getElementById('bFailed').textContent = summary.statusBreakdown.failed;
        document.getElementById('bPassed').textContent = summary.statusBreakdown.passed;
        document.getElementById('bSkipped').textContent = summary.statusBreakdown.skipped;
        document.getElementById('bError').textContent = summary.statusBreakdown.error;
        document.getElementById('bNoResults').textContent = summary.statusBreakdown.noResults;

        const warnBlock = document.getElementById('rWarnings');
        warnBlock.innerHTML = '';
        for (const w of summary.warnings || []) {
          const div = document.createElement('div');
          div.className = 'warn';
          div.textContent = w;
          warnBlock.appendChild(div);
        }

        document.getElementById('rUnmatchedHdfCount').textContent = summary.unmatchedControls;
        document.getElementById('rUnmatchedRulesCount').textContent = summary.unmatchedRules;

        fillList('rUnmatchedHdfList', summary.unmatchedControlIds || []);
        fillList('rUnmatchedRulesList', summary.unmatchedRuleVersions || []);

        show(summaryView);
      }

      function fillList(id, items) {
        const ul = document.getElementById(id);
        ul.innerHTML = '';
        const shown = items.slice(0, 500);
        for (const item of shown) {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        }
        if (items.length > shown.length) {
          const li = document.createElement('li');
          li.innerHTML = '<em>… and ' + (items.length - shown.length) + ' more</em>';
          ul.appendChild(li);
        }
      }

      function escapeHtml(s) {
        return String(s).replace(/[&<>"]/g, c => ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
        }[c]));
      }

      function currentOptions() {
        return {
          overwriteExistingStatus: document.getElementById('optOverwrite').checked,
          preserveExistingFindingDetails: document.getElementById('optPreserve').checked,
          updateTargetData: document.getElementById('optTarget').checked,
        };
      }

      for (const id of ['optOverwrite', 'optPreserve', 'optTarget']) {
        document.getElementById(id).addEventListener('change', () => {
          vscode.postMessage({ type: 'reproject', options: currentOptions() });
        });
      }

      document.getElementById('btnCancel').addEventListener('click', () => {
        vscode.postMessage({ type: 'cancel' });
      });
      document.getElementById('btnApply').addEventListener('click', () => {
        vscode.postMessage({ type: 'apply', options: currentOptions() });
      });
      document.getElementById('btnClose').addEventListener('click', () => {
        vscode.postMessage({ type: 'cancel' });
      });
      document.getElementById('btnDownload').addEventListener('click', () => {
        vscode.postMessage({
          type: 'downloadReport',
          summary: lastSummary,
          checklistTitle: lastChecklistTitle,
        });
      });

      window.addEventListener('message', (event) => {
        const msg = event.data;
        if (msg.type === 'showPreview') {
          renderPreview(msg.summary, msg.profile, msg.checklistTitle, msg.options);
        } else if (msg.type === 'updatePreview') {
          renderPreview(msg.summary, lastProfile(), document.getElementById('pChecklist').textContent, msg.options);
        } else if (msg.type === 'showSummary') {
          renderSummary(msg.summary, msg.profile, msg.checklistTitle);
        }
      });

      function lastProfile() {
        return {
          name: document.getElementById('pProfile').textContent,
          version: document.getElementById('pVersion').textContent,
          hostName: document.getElementById('pHost').textContent,
          inspecVersion: document.getElementById('pInspec').textContent,
        };
      }

      vscode.postMessage({ type: 'ready' });
    }());
  </script>
</body>
</html>`;
}
