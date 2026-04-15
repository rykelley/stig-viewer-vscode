import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { CklbDocument } from './types';
import { parseCciListXml, CciEntry } from './cciNistMap';
import {
  parseNistControlsCsv,
  analyzeCrosswalk,
  buildCrosswalkCsv,
  CrosswalkResult,
} from './nistCrosswalk';

export class CrosswalkPanel {
  private static _panel: vscode.WebviewPanel | undefined;

  public static async show(activeCklbUri?: vscode.Uri): Promise<void> {
    // 1. Select checklist
    let cklbUri = activeCklbUri;
    if (!cklbUri) {
      const uris = await vscode.window.showOpenDialog({
        canSelectMany: false,
        filters: { 'STIG Checklist': ['cklb'] },
        title: 'Select STIG Checklist for Crosswalk',
      });
      if (!uris?.[0]) return;
      cklbUri = uris[0];
    }
    const doc: CklbDocument = JSON.parse(fs.readFileSync(cklbUri.fsPath, 'utf-8'));

    // 2. Select NIST controls CSV
    const csvUris = await vscode.window.showOpenDialog({
      canSelectMany: false,
      filters: { 'CSV': ['csv'] },
      title: 'Select NIST 800-53 Controls CSV',
    });
    if (!csvUris?.[0]) return;
    const csvContent = fs.readFileSync(csvUris[0].fsPath, 'utf-8');
    const nistControls = parseNistControlsCsv(csvContent);
    if (nistControls.length === 0) {
      vscode.window.showErrorMessage('No valid NIST 800-53 control IDs found in the CSV. Expected values like AC-2, CM-7, SI-10.');
      return;
    }

    // 3. Optional CCI List XML
    let importedCciMap: Record<string, CciEntry> | undefined;
    const useCci = await vscode.window.showQuickPick(
      ['Use bundled CCI mapping (covers common CCIs)', 'Import full CCI List XML from DISA'],
      { title: 'CCI Mapping Source' },
    );
    if (useCci?.includes('Import')) {
      const xmlUris = await vscode.window.showOpenDialog({
        canSelectMany: false,
        filters: { 'XML': ['xml'] },
        title: 'Select U_CCI_List.xml from DISA',
      });
      if (xmlUris?.[0]) {
        try {
          const xml = fs.readFileSync(xmlUris[0].fsPath, 'utf-8');
          importedCciMap = await parseCciListXml(xml);
          vscode.window.showInformationMessage(`Loaded ${Object.keys(importedCciMap).length} CCI entries from XML.`);
        } catch (e) {
          vscode.window.showWarningMessage(`Failed to parse CCI List XML: ${e}. Falling back to bundled map.`);
        }
      }
    }

    // 4. Run analysis
    const result = analyzeCrosswalk(doc, nistControls, importedCciMap);

    if (result.unmappedCciCount > 0) {
      vscode.window.showInformationMessage(
        `${result.unmappedCciCount} CCIs in this checklist could not be mapped. Import the full CCI List XML for complete coverage.`
      );
    }

    // 5. Show panel
    if (CrosswalkPanel._panel) {
      CrosswalkPanel._panel.reveal();
    } else {
      const panel = vscode.window.createWebviewPanel(
        'stigViewer.crosswalk',
        `NIST 800-53 Crosswalk — ${doc.title}`,
        vscode.ViewColumn.One,
        { enableScripts: true, retainContextWhenHidden: true },
      );
      CrosswalkPanel._panel = panel;
      panel.onDidDispose(() => { CrosswalkPanel._panel = undefined; });

      panel.webview.onDidReceiveMessage(async (msg) => {
        if (msg.type === 'exportCsv') {
          const defaultName = path.basename(cklbUri!.fsPath, '.cklb') + '_NIST_crosswalk.csv';
          const saveUri = await vscode.window.showSaveDialog({
            defaultUri: vscode.Uri.file(path.join(path.dirname(cklbUri!.fsPath), defaultName)),
            filters: { 'CSV': ['csv'] },
            title: 'Export Crosswalk Report',
          });
          if (saveUri) {
            fs.writeFileSync(saveUri.fsPath, buildCrosswalkCsv(result), 'utf-8');
            vscode.window.showInformationMessage(`Exported crosswalk → ${path.basename(saveUri.fsPath)}`);
          }
        }
      });
    }

    CrosswalkPanel._panel.webview.html = buildHtml(result);
  }
}

// ─── HTML builder ───────────────────────────────────────────────────────────

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function statusIcon(s: string): string {
  switch (s) {
    case 'fully_satisfied':    return '<span class="st-icon st-sat">\u2714</span>';
    case 'partially_satisfied': return '<span class="st-icon st-par">\u25D1</span>';
    case 'at_risk':            return '<span class="st-icon st-risk">\u26A0</span>';
    default:                   return '<span class="st-icon st-gap">\u25CF</span>';
  }
}

function statusLabel(s: string): string {
  return s.replace(/_/g, ' ');
}

function buildHtml(result: CrosswalkResult): string {
  const families = [...new Set(result.controlMappings.map(m => m.control.family).filter(Boolean) as string[])].sort();
  const familyOptions = families.map(f => `<option value="${esc(f)}">${esc(f)}</option>`).join('');

  const covPct = result.totalNistControls ? Math.round((result.coveredControls / result.totalNistControls) * 100) : 0;

  const rows = result.controlMappings.map((m, idx) => {
    const passing = m.mappedRules.filter(r => r.mappedStatus === 'passing').length;
    const open = m.mappedRules.filter(r => r.mappedStatus === 'open').length;
    const nr = m.mappedRules.filter(r => r.mappedStatus === 'not_reviewed').length;

    const subRows = m.mappedRules.map(r => {
      const sevClass = r.severity === 'high' ? 'sev-high' : r.severity === 'medium' ? 'sev-med' : 'sev-low';
      const stClass = r.mappedStatus === 'passing' ? 'rs-pass' : r.mappedStatus === 'open' ? 'rs-open' : 'rs-nr';
      return `<tr>
        <td class="sub-td">${esc(r.groupId)}</td>
        <td class="sub-td">${esc(r.ruleVersion)}</td>
        <td class="sub-td ${sevClass}">${r.severity === 'high' ? 'CAT I' : r.severity === 'medium' ? 'CAT II' : 'CAT III'}</td>
        <td class="sub-td ${stClass}">${esc(statusLabel(r.status))}</td>
        <td class="sub-td sub-title">${esc(r.ruleTitle)}</td>
        <td class="sub-td sub-cci">${esc(r.cci)}</td>
      </tr>`;
    }).join('');

    const desc = m.control.description
      ? `<div class="ctrl-desc">${esc(m.control.description)}</div>`
      : (m.status === 'not_covered'
        ? '<div class="ctrl-desc muted">No STIG rules in this checklist map to this control. This control may be addressed by other STIGs or non-STIG evidence.</div>'
        : '');

    const detail = m.mappedRules.length > 0 ? `<table class="sub-tbl">
      <thead><tr><th>Vuln ID</th><th>Rule Version</th><th>CAT</th><th>Status</th><th>Rule Title</th><th>CCI</th></tr></thead>
      <tbody>${subRows}</tbody>
    </table>` : '';

    return `<tr class="cw-row" data-idx="${idx}" data-status="${m.status}" data-family="${esc(m.control.family ?? '')}">
      <td class="td-st">${statusIcon(m.status)}</td>
      <td class="td-ctrl">${esc(m.control.controlId)}</td>
      <td class="td-title">${esc(m.control.title ?? '')}</td>
      <td class="td-fam">${esc(m.control.family ?? '')}</td>
      <td class="td-n">${m.mappedRules.length}</td>
      <td class="td-n td-pass">${passing || ''}</td>
      <td class="td-n td-open">${open || ''}</td>
      <td class="td-n td-nr">${nr || ''}</td>
      <td class="td-ccis">${esc(m.ccis.slice(0, 5).join(', '))}${m.ccis.length > 5 ? '\u2026' : ''}</td>
    </tr>
    <tr class="cw-detail" data-idx="${idx}" style="display:none">
      <td colspan="9">
        <div class="detail-wrap">${desc}${detail}</div>
      </td>
    </tr>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>NIST 800-53 Crosswalk</title>
<style>${CSS}</style>
</head>
<body>

<header class="hdr">
  <h1>NIST 800-53 Crosswalk</h1>
  <span class="chip">${esc(result.checklistTitle)}</span>
  <span class="chip">${esc(result.stigName)}</span>
</header>

<div class="cards">
  <div class="card"><div class="card-n">${result.totalNistControls}</div><div class="card-l">Total Controls</div></div>
  <div class="card card-cov"><div class="card-n">${result.coveredControls}</div><div class="card-l">Covered</div></div>
  <div class="card card-gap"><div class="card-n">${result.uncoveredControls}</div><div class="card-l">Gaps</div></div>
  <div class="card card-sat"><div class="card-n">${result.fullySatisfiedControls}</div><div class="card-l">Fully Satisfied</div></div>
  <div class="card card-par"><div class="card-n">${result.partiallySatisfiedControls}</div><div class="card-l">Partial</div></div>
  <div class="card card-risk"><div class="card-n">${result.atRiskControls}</div><div class="card-l">At Risk</div></div>
  <div class="card card-pct"><div class="card-n">${covPct}%</div><div class="card-l">Coverage</div></div>
</div>

<div class="filters">
  <select id="fStatus">
    <option value="">All statuses</option>
    <option value="not_covered">Gaps</option>
    <option value="at_risk">At Risk</option>
    <option value="partially_satisfied">Partially Satisfied</option>
    <option value="fully_satisfied">Fully Satisfied</option>
  </select>
  <select id="fFamily">
    <option value="">All families</option>
    ${familyOptions}
  </select>
  <input type="text" id="fSearch" placeholder="Search control ID or title\u2026" />
  <button class="btn-export" id="btnExport">Export Crosswalk CSV</button>
</div>

<div class="tbl-wrap">
<table class="tbl">
  <thead><tr>
    <th style="width:40px">St</th>
    <th>Control</th>
    <th>Title</th>
    <th>Family</th>
    <th style="width:50px">Rules</th>
    <th style="width:50px">Pass</th>
    <th style="width:50px">Open</th>
    <th style="width:50px">NR</th>
    <th>CCIs</th>
  </tr></thead>
  <tbody>${rows}</tbody>
</table>
</div>

<script>
const vscode = acquireVsCodeApi();
document.getElementById('btnExport').onclick = () => vscode.postMessage({ type: 'exportCsv' });

// Expand/collapse
document.querySelectorAll('tr.cw-row').forEach(tr => {
  tr.addEventListener('click', () => {
    const idx = tr.dataset.idx;
    const detail = document.querySelector('tr.cw-detail[data-idx="'+idx+'"]');
    if (detail) detail.style.display = detail.style.display === 'none' ? '' : 'none';
  });
});

// Filters
const fStatus = document.getElementById('fStatus');
const fFamily = document.getElementById('fFamily');
const fSearch = document.getElementById('fSearch');
function applyFilters() {
  const sv = fStatus.value;
  const fv = fFamily.value.toLowerCase();
  const q = fSearch.value.toLowerCase();
  document.querySelectorAll('tr.cw-row').forEach(tr => {
    const status = tr.dataset.status;
    const family = (tr.dataset.family || '').toLowerCase();
    const text = tr.textContent.toLowerCase();
    const show = (!sv || status === sv) && (!fv || family === fv) && (!q || text.includes(q));
    tr.style.display = show ? '' : 'none';
    const detail = document.querySelector('tr.cw-detail[data-idx="'+tr.dataset.idx+'"]');
    if (detail && !show) detail.style.display = 'none';
  });
}
fStatus.onchange = applyFilters;
fFamily.onchange = applyFilters;
fSearch.oninput = applyFilters;

// Sort
document.querySelectorAll('.tbl thead th').forEach((th, i) => {
  th.style.cursor = 'pointer';
  th.style.userSelect = 'none';
  th.addEventListener('click', () => {
    const tbody = th.closest('.tbl').querySelector('tbody');
    const pairs = [];
    const cwRows = [...tbody.querySelectorAll('tr.cw-row')];
    cwRows.forEach(row => {
      const detail = tbody.querySelector('tr.cw-detail[data-idx="'+row.dataset.idx+'"]');
      pairs.push({ row, detail });
    });
    const asc = th.dataset.sort !== 'asc';
    th.closest('thead').querySelectorAll('th').forEach(h => { h.dataset.sort=''; h.classList.remove('sort-asc','sort-desc'); });
    th.dataset.sort = asc ? 'asc' : 'desc';
    th.classList.add(asc ? 'sort-asc' : 'sort-desc');
    pairs.sort((a, b) => {
      const av = a.row.cells[i].textContent.trim();
      const bv = b.row.cells[i].textContent.trim();
      return (asc ? 1 : -1) * av.localeCompare(bv, undefined, { numeric: true });
    });
    pairs.forEach(p => { tbody.appendChild(p.row); if (p.detail) tbody.appendChild(p.detail); });
  });
});
</script>
</body></html>`;
}

// ─── CSS ────────────────────────────────────────────────────────────────────

const CSS = `
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:var(--vscode-editor-background,#1e1e1e);
  --fg:var(--vscode-editor-foreground,#ccc);
  --border:var(--vscode-panel-border,#3c3c3c);
  --card:var(--vscode-editorWidget-background,#252526);
  --hover:var(--vscode-list-hoverBackground,#2a2d2e);
  --accent:var(--vscode-focusBorder,#007acc);
  --btn-bg:var(--vscode-button-background,#0e639c);
  --btn-fg:var(--vscode-button-foreground,#fff);
  --input-bg:var(--vscode-input-background,#3c3c3c);
  --input-fg:var(--vscode-input-foreground,#ccc);
  --input-border:var(--vscode-input-border,#3c3c3c);
  --green:#27ae60;--amber:#f39c12;--red:#c0392b;--gray:#7f8c8d;--blue:#3498db;
}
body{font-family:var(--vscode-font-family,system-ui,sans-serif);font-size:13px;color:var(--fg);background:var(--bg);padding:0 20px 40px}
.hdr{padding:20px 0 16px;border-bottom:1px solid var(--border);margin-bottom:16px;display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.hdr h1{font-size:1.3em;font-weight:600}
.chip{display:inline-block;padding:2px 9px;border-radius:10px;font-size:.8em;background:var(--card);border:1px solid var(--border)}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:8px;margin-bottom:14px}
.card{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:10px 8px;text-align:center}
.card-n{font-size:1.5em;font-weight:700;line-height:1.2}
.card-l{font-size:.75em;color:var(--gray);margin-top:2px}
.card-cov .card-n{color:var(--green)}
.card-gap .card-n{color:var(--red)}
.card-sat .card-n{color:var(--green)}
.card-par .card-n{color:var(--amber)}
.card-risk .card-n{color:var(--amber)}
.card-pct .card-n{color:var(--blue)}
.filters{display:flex;gap:8px;align-items:center;margin-bottom:14px;flex-wrap:wrap}
.filters select,.filters input{background:var(--input-bg);color:var(--input-fg);border:1px solid var(--input-border);border-radius:4px;padding:5px 8px;font-size:.85em;font-family:inherit}
.filters input{flex:1;min-width:160px}
.btn-export{background:var(--btn-bg);color:var(--btn-fg);border:none;border-radius:4px;padding:5px 14px;font-size:.82em;font-weight:600;cursor:pointer;margin-left:auto;white-space:nowrap}
.btn-export:hover{opacity:.9}
.tbl-wrap{overflow-x:auto;border:1px solid var(--border);border-radius:6px}
.tbl{width:100%;border-collapse:collapse}
.tbl th{text-align:left;padding:7px 10px;background:var(--card);border-bottom:1px solid var(--border);font-weight:600;font-size:.82em;color:var(--gray);position:sticky;top:0;z-index:1}
.tbl td{padding:6px 10px;border-bottom:1px solid var(--border);vertical-align:top}
.td-n{text-align:center;font-weight:600}
.td-pass{color:var(--green)}.td-open{color:var(--red)}.td-nr{color:var(--amber)}
.td-ctrl{font-weight:600;white-space:nowrap}
.td-title{max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.td-fam{font-size:.85em;color:var(--gray)}
.td-ccis{font-size:.78em;color:var(--gray);max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cw-row{cursor:pointer;transition:background .12s}
.cw-row:hover{background:var(--hover)}
.st-icon{font-size:1.1em}
.st-sat{color:var(--green)}.st-par{color:var(--amber)}.st-risk{color:var(--amber)}.st-gap{color:var(--red)}
.detail-wrap{padding:8px 12px 12px 24px;background:color-mix(in srgb,var(--card) 60%,var(--bg));border-radius:4px;margin:4px 0}
.ctrl-desc{font-size:.85em;color:var(--gray);margin-bottom:8px;line-height:1.45}
.muted{font-style:italic}
.sub-tbl{width:100%;border-collapse:collapse;font-size:.88em;margin-top:4px}
.sub-tbl th{text-align:left;padding:4px 8px;border-bottom:1px solid var(--border);font-weight:600;font-size:.8em;color:var(--gray)}
.sub-td{padding:4px 8px;border-bottom:1px solid color-mix(in srgb,var(--border) 50%,transparent)}
.sub-title{max-width:320px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sub-cci{font-size:.82em;color:var(--gray)}
.sev-high{color:#c0392b;font-weight:600}.sev-med{color:#e67e22;font-weight:600}.sev-low{color:#2980b9}
.rs-pass{color:var(--green)}.rs-open{color:var(--red)}.rs-nr{color:var(--amber)}
.sort-asc::after{content:' \\25B2';font-size:.7em}
.sort-desc::after{content:' \\25BC';font-size:.7em}
`;
