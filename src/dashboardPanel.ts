import * as vscode from 'vscode';
import * as fs from 'fs';
import { CklbDocument } from './types';

interface ChecklistSummary {
  file: string;
  uri: string;
  title: string;
  hostName: string;
  stigName: string;
  total: number;
  open: number;
  not_a_finding: number;
  not_reviewed: number;
  not_applicable: number;
  high: number;
  medium: number;
  low: number;
}

export class DashboardPanel {
  private static _panel: vscode.WebviewPanel | undefined;

  public static async show(context: vscode.ExtensionContext): Promise<void> {
    if (DashboardPanel._panel) {
      DashboardPanel._panel.reveal();
      await DashboardPanel._refresh();
      return;
    }

    const panel = vscode.window.createWebviewPanel(
      'stigViewer.dashboard',
      'STIG Dashboard',
      vscode.ViewColumn.One,
      { enableScripts: true, retainContextWhenHidden: true }
    );

    DashboardPanel._panel = panel;
    panel.onDidDispose(() => { DashboardPanel._panel = undefined; });

    panel.webview.onDidReceiveMessage(async (msg) => {
      if (msg.type === 'openFile') {
        const uri = vscode.Uri.file(msg.path);
        await vscode.commands.executeCommand('vscode.openWith', uri, 'stigViewer.cklbEditor');
      }
      if (msg.type === 'refresh') {
        await DashboardPanel._refresh();
      }
    });

    await DashboardPanel._refresh();
  }

  private static async _refresh(): Promise<void> {
    const panel = DashboardPanel._panel;
    if (!panel) return;

    const files = await vscode.workspace.findFiles('**/*.cklb', '**/node_modules/**');
    const summaries: ChecklistSummary[] = [];

    for (const f of files) {
      try {
        const raw = fs.readFileSync(f.fsPath, 'utf-8');
        const doc: CklbDocument = JSON.parse(raw);
        for (const stig of doc.stigs) {
          const s: ChecklistSummary = {
            file: vscode.workspace.asRelativePath(f),
            uri: f.fsPath,
            title: doc.title,
            hostName: doc.target_data.host_name || '—',
            stigName: stig.display_name || stig.stig_name,
            total: stig.rules.length,
            open: 0, not_a_finding: 0, not_reviewed: 0, not_applicable: 0,
            high: 0, medium: 0, low: 0,
          };
          for (const r of stig.rules) {
            (s as any)[r.status]++;
            (s as any)[r.severity]++;
          }
          summaries.push(s);
        }
      } catch { /* skip unparseable */ }
    }

    panel.webview.html = buildDashboardHtml(summaries);
  }
}

// ─── HTML builder ───────────────────────────────────────────────────────────

function buildDashboardHtml(summaries: ChecklistSummary[]): string {
  const agg = {
    total: 0, open: 0, not_a_finding: 0, not_reviewed: 0, not_applicable: 0,
    high: 0, medium: 0, low: 0,
  };
  for (const s of summaries) {
    agg.total += s.total;
    agg.open += s.open;
    agg.not_a_finding += s.not_a_finding;
    agg.not_reviewed += s.not_reviewed;
    agg.not_applicable += s.not_applicable;
    agg.high += s.high;
    agg.medium += s.medium;
    agg.low += s.low;
  }

  const pct = (n: number) => agg.total ? Math.round((n / agg.total) * 100) : 0;
  const completion = pct(agg.not_a_finding + agg.not_applicable);

  const rows = summaries.map(s => {
    const sPct = s.total ? Math.round(((s.not_a_finding + s.not_applicable) / s.total) * 100) : 0;
    return `<tr class="row" data-path="${esc(s.uri)}">
      <td class="td-host">${esc(s.hostName)}</td>
      <td class="td-stig">${esc(s.stigName)}</td>
      <td class="td-n">${s.total}</td>
      <td class="td-n td-open">${s.open}</td>
      <td class="td-n td-naf">${s.not_a_finding}</td>
      <td class="td-n td-nr">${s.not_reviewed}</td>
      <td class="td-n td-na">${s.not_applicable}</td>
      <td class="td-n">${sPct}%</td>
      <td class="td-file">${esc(s.file)}</td>
    </tr>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Dashboard</title>
<style>${CSS}</style>
</head>
<body>

<header class="hdr">
  <div class="hdr-row">
    <h1>STIG Dashboard</h1>
    <span class="chip">${summaries.length} checklists</span>
    <button class="btn-refresh" id="btnRefresh">Refresh</button>
  </div>
</header>

<div class="cards">
  <div class="card card-total"><div class="card-n">${agg.total}</div><div class="card-l">Total Rules</div></div>
  <div class="card card-open"><div class="card-n">${agg.open}</div><div class="card-l">Open</div></div>
  <div class="card card-naf"><div class="card-n">${agg.not_a_finding}</div><div class="card-l">Not a Finding</div></div>
  <div class="card card-nr"><div class="card-n">${agg.not_reviewed}</div><div class="card-l">Not Reviewed</div></div>
  <div class="card card-na"><div class="card-n">${agg.not_applicable}</div><div class="card-l">Not Applicable</div></div>
</div>

<div class="sev-bar">
  <div class="sev-seg sev-high" style="width:${pct(agg.high)}%"><span>CAT I \u00B7 ${agg.high}</span></div>
  <div class="sev-seg sev-med"  style="width:${pct(agg.medium)}%"><span>CAT II \u00B7 ${agg.medium}</span></div>
  <div class="sev-seg sev-low"  style="width:${pct(agg.low)}%"><span>CAT III \u00B7 ${agg.low}</span></div>
</div>

<div class="completion">
  <div class="completion-label">Overall Completion: ${completion}%</div>
  <div class="completion-track">
    <div class="completion-fill completion-naf" style="width:${pct(agg.not_a_finding)}%"></div>
    <div class="completion-fill completion-na"  style="width:${pct(agg.not_applicable)}%"></div>
  </div>
</div>

${summaries.length === 0 ? '<p class="muted">No .cklb files found in this workspace.</p>' : `
<div class="tbl-wrap">
  <table class="tbl">
    <thead><tr>
      <th>Host</th>
      <th>STIG</th>
      <th style="width:60px">Total</th>
      <th style="width:60px">Open</th>
      <th style="width:60px">NaF</th>
      <th style="width:60px">NR</th>
      <th style="width:60px">NA</th>
      <th style="width:60px">Done</th>
      <th>File</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>
</div>`}

<script>
const vscode = acquireVsCodeApi();
document.getElementById('btnRefresh').onclick = () => vscode.postMessage({ type: 'refresh' });
document.querySelectorAll('tr.row').forEach(tr => {
  tr.addEventListener('click', () => {
    vscode.postMessage({ type: 'openFile', path: tr.dataset.path });
  });
});

// Sort
document.querySelectorAll('.tbl th').forEach((th, i) => {
  th.style.cursor = 'pointer';
  th.style.userSelect = 'none';
  th.addEventListener('click', () => {
    const table = th.closest('.tbl');
    const tbody = table.querySelector('tbody');
    const rows = [...tbody.querySelectorAll('tr.row')];
    const asc = th.dataset.sort !== 'asc';
    table.querySelectorAll('th').forEach(h => { h.dataset.sort = ''; h.classList.remove('sort-asc','sort-desc'); });
    th.dataset.sort = asc ? 'asc' : 'desc';
    th.classList.add(asc ? 'sort-asc' : 'sort-desc');
    rows.sort((a, b) => {
      const av = a.cells[i].textContent.trim();
      const bv = b.cells[i].textContent.trim();
      return (asc ? 1 : -1) * av.localeCompare(bv, undefined, { numeric: true });
    });
    rows.forEach(r => tbody.appendChild(r));
  });
});
</script>
</body></html>`;
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

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
  --red:#e74c3c;--orange:#e67e22;--green:#27ae60;--blue:#3498db;--gray:#7f8c8d;
}
body{font-family:var(--vscode-font-family,system-ui,sans-serif);font-size:13px;color:var(--fg);background:var(--bg);padding:0 20px 40px}
.hdr{padding:20px 0 16px;border-bottom:1px solid var(--border);margin-bottom:20px}
.hdr-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.hdr h1{font-size:1.35em;font-weight:600}
.chip{display:inline-block;padding:2px 9px;border-radius:10px;font-size:.8em;background:var(--card);border:1px solid var(--border)}
.muted{color:var(--gray);font-style:italic;margin-top:20px}
.btn-refresh{background:var(--btn-bg);color:var(--btn-fg);border:none;border-radius:4px;padding:4px 14px;font-size:.82em;font-weight:600;cursor:pointer;margin-left:auto}
.btn-refresh:hover{opacity:.9}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;margin-bottom:14px}
.card{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:12px 10px;text-align:center}
.card-n{font-size:1.6em;font-weight:700;line-height:1.2}
.card-l{font-size:.78em;color:var(--gray);margin-top:2px}
.card-open  .card-n{color:var(--red)}
.card-naf   .card-n{color:var(--green)}
.card-nr    .card-n{color:var(--orange)}
.card-na    .card-n{color:var(--gray)}
.card-total .card-n{color:var(--blue)}
.sev-bar{display:flex;height:28px;border-radius:6px;overflow:hidden;margin-bottom:10px;font-size:.78em;font-weight:600}
.sev-seg{display:flex;align-items:center;justify-content:center;color:#fff;min-width:50px}
.sev-high{background:#c0392b}.sev-med{background:#e67e22}.sev-low{background:#2980b9}
.completion{margin-bottom:20px}
.completion-label{font-size:.82em;margin-bottom:3px;color:var(--gray)}
.completion-track{height:8px;background:var(--card);border-radius:4px;display:flex;overflow:hidden}
.completion-fill{height:100%}
.completion-naf{background:var(--green)}.completion-na{background:var(--gray)}
.tbl-wrap{overflow-x:auto;border:1px solid var(--border);border-radius:6px}
.tbl{width:100%;border-collapse:collapse}
.tbl th{text-align:left;padding:8px 10px;background:var(--card);border-bottom:1px solid var(--border);font-weight:600;font-size:.82em;color:var(--gray);position:sticky;top:0;z-index:1}
.tbl td{padding:7px 10px;border-bottom:1px solid var(--border);vertical-align:top}
.td-n{text-align:center;font-weight:600}
.td-open{color:var(--red)}.td-naf{color:var(--green)}.td-nr{color:var(--orange)}.td-na{color:var(--gray)}
.td-host{font-weight:600}.td-stig{max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.td-file{font-size:.82em;color:var(--gray)}
.row{cursor:pointer;transition:background .12s}
.row:hover{background:var(--hover)}
.sort-asc::after{content:' \\25B2';font-size:.7em}
.sort-desc::after{content:' \\25BC';font-size:.7em}
`;
