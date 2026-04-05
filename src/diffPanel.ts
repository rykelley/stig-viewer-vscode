import * as vscode from 'vscode';
import * as fs from 'fs';
import { CklbDocument, CklbRule } from './types';

interface DiffEntry {
  ruleVersion: string;
  groupId: string;
  ruleTitle: string;
  severity: string;
  statusA: string;
  statusB: string;
  change: 'improved' | 'regression' | 'unchanged' | 'new' | 'removed';
}

const STATUS_LABELS: Record<string, string> = {
  not_reviewed: 'Not Reviewed',
  open: 'Open',
  not_a_finding: 'Not a Finding',
  not_applicable: 'Not Applicable',
};

const STATUS_RANK: Record<string, number> = {
  open: 0,
  not_reviewed: 1,
  not_applicable: 2,
  not_a_finding: 3,
};

function sevCat(s: string): string {
  return s === 'high' ? 'I' : s === 'medium' ? 'II' : 'III';
}

export class DiffPanel {
  public static async show(activeCklbUri?: vscode.Uri): Promise<void> {
    let uriAResolved = activeCklbUri;
    if (!uriAResolved) {
      const uriA = await vscode.window.showOpenDialog({
        canSelectMany: false,
        filters: { 'STIG Checklist': ['cklb'] },
        title: 'Select FIRST checklist (baseline / old)',
      });
      if (!uriA?.[0]) return;
      uriAResolved = uriA[0];
    }

    const uriB = await vscode.window.showOpenDialog({
      canSelectMany: false,
      filters: { 'STIG Checklist': ['cklb'] },
      title: 'Select SECOND checklist (current / new)',
    });
    if (!uriB?.[0]) return;

    const docA: CklbDocument = JSON.parse(fs.readFileSync(uriAResolved.fsPath, 'utf-8'));
    const docB: CklbDocument = JSON.parse(fs.readFileSync(uriB[0].fsPath, 'utf-8'));

    // Build rule maps keyed by rule_version
    const mapA = new Map<string, CklbRule>();
    for (const s of docA.stigs) { for (const r of s.rules) { mapA.set(r.rule_version, r); } }
    const mapB = new Map<string, CklbRule>();
    for (const s of docB.stigs) { for (const r of s.rules) { mapB.set(r.rule_version, r); } }

    const entries: DiffEntry[] = [];
    const allKeys = new Set([...mapA.keys(), ...mapB.keys()]);

    for (const rv of allKeys) {
      const a = mapA.get(rv);
      const b = mapB.get(rv);

      if (a && b) {
        let change: DiffEntry['change'] = 'unchanged';
        if (a.status !== b.status) {
          change = STATUS_RANK[b.status] > STATUS_RANK[a.status] ? 'improved' : 'regression';
        }
        entries.push({
          ruleVersion: rv,
          groupId: b.group_id,
          ruleTitle: b.rule_title,
          severity: b.severity,
          statusA: a.status,
          statusB: b.status,
          change,
        });
      } else if (b && !a) {
        entries.push({
          ruleVersion: rv,
          groupId: b.group_id,
          ruleTitle: b.rule_title,
          severity: b.severity,
          statusA: '',
          statusB: b.status,
          change: 'new',
        });
      } else if (a && !b) {
        entries.push({
          ruleVersion: rv,
          groupId: a.group_id,
          ruleTitle: a.rule_title,
          severity: a.severity,
          statusA: a.status,
          statusB: '',
          change: 'removed',
        });
      }
    }

    // Sort: regressions first, then new, improved, removed, unchanged
    const ORDER: Record<string, number> = { regression: 0, new: 1, improved: 2, removed: 3, unchanged: 4 };
    entries.sort((a, b) => ORDER[a.change] - ORDER[b.change]);

    const regressions = entries.filter(e => e.change === 'regression').length;
    const improvements = entries.filter(e => e.change === 'improved').length;
    const newRules = entries.filter(e => e.change === 'new').length;
    const removed = entries.filter(e => e.change === 'removed').length;
    const unchanged = entries.filter(e => e.change === 'unchanged').length;

    // Only show changed entries by default
    const changedEntries = entries.filter(e => e.change !== 'unchanged');

    const panel = vscode.window.createWebviewPanel(
      'stigViewer.diff',
      'STIG Diff',
      vscode.ViewColumn.One,
      { enableScripts: true }
    );

    panel.webview.html = buildDiffHtml(
      uriAResolved.fsPath, uriB[0].fsPath,
      changedEntries, entries,
      { regressions, improvements, newRules, removed, unchanged }
    );
  }
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

interface DiffStats {
  regressions: number; improvements: number; newRules: number; removed: number; unchanged: number;
}

function buildDiffHtml(
  pathA: string, pathB: string,
  changedEntries: DiffEntry[], allEntries: DiffEntry[],
  stats: DiffStats
): string {
  const nameA = pathA.split('/').pop() || pathA;
  const nameB = pathB.split('/').pop() || pathB;

  const changeLabel: Record<string, string> = {
    regression: '\u2193 Regression',
    improved: '\u2191 Improved',
    new: '+ New',
    removed: '\u2212 Removed',
    unchanged: '= Unchanged',
  };

  const changeCls: Record<string, string> = {
    regression: 'chg-reg',
    improved: 'chg-imp',
    new: 'chg-new',
    removed: 'chg-rem',
    unchanged: 'chg-unc',
  };

  const rows = (list: DiffEntry[]) => list.map(e => `<tr class="row ${changeCls[e.change]}" data-change="${e.change}">
    <td><span class="pill sev-${e.severity}">CAT ${sevCat(e.severity)}</span></td>
    <td><code>${esc(e.groupId)}</code></td>
    <td><code>${esc(e.ruleVersion)}</code></td>
    <td class="td-title">${esc(e.ruleTitle)}</td>
    <td>${e.statusA ? `<span class="pill st-${e.statusA}">${STATUS_LABELS[e.statusA] || e.statusA}</span>` : '<span class="muted">\u2014</span>'}</td>
    <td>${e.statusB ? `<span class="pill st-${e.statusB}">${STATUS_LABELS[e.statusB] || e.statusB}</span>` : '<span class="muted">\u2014</span>'}</td>
    <td><span class="pill ${changeCls[e.change]}">${changeLabel[e.change]}</span></td>
  </tr>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Diff</title>
<style>${CSS}</style>
</head><body>
<header class="hdr">
  <h1>Checklist Diff</h1>
  <div class="diff-files">
    <span class="chip">A: ${esc(nameA)}</span>
    <span class="arrow">\u2192</span>
    <span class="chip">B: ${esc(nameB)}</span>
  </div>
</header>

<div class="cards">
  <div class="card card-reg"><div class="card-n">${stats.regressions}</div><div class="card-l">Regressions</div></div>
  <div class="card card-imp"><div class="card-n">${stats.improvements}</div><div class="card-l">Improvements</div></div>
  <div class="card card-new"><div class="card-n">${stats.newRules}</div><div class="card-l">New Rules</div></div>
  <div class="card card-rem"><div class="card-n">${stats.removed}</div><div class="card-l">Removed</div></div>
  <div class="card card-unc"><div class="card-n">${stats.unchanged}</div><div class="card-l">Unchanged</div></div>
</div>

<div class="filters">
  <label><input type="checkbox" id="showUnchanged" /> Show ${stats.unchanged} unchanged rules</label>
</div>

<div class="tbl-wrap">
  <table class="tbl">
    <thead><tr>
      <th style="width:72px">CAT</th>
      <th style="width:90px">Vuln ID</th>
      <th style="width:130px">Rule Ver</th>
      <th>Title</th>
      <th style="width:120px">Status A</th>
      <th style="width:120px">Status B</th>
      <th style="width:120px">Change</th>
    </tr></thead>
    <tbody id="diffBody">
      ${rows(changedEntries)}
    </tbody>
  </table>
</div>

<script>
const CHANGED = ${JSON.stringify(changedEntries)};
const ALL     = ${JSON.stringify(allEntries)};

document.getElementById('showUnchanged').addEventListener('change', function() {
  const list = this.checked ? ALL : CHANGED;
  const tbody = document.getElementById('diffBody');
  tbody.innerHTML = list.map(e => rowHtml(e)).join('');
});

const CL = { regression:'chg-reg', improved:'chg-imp', new:'chg-new', removed:'chg-rem', unchanged:'chg-unc' };
const LB = { regression:'\\u2193 Regression', improved:'\\u2191 Improved', new:'+ New', removed:'\\u2212 Removed', unchanged:'= Unchanged' };
const SL = { not_reviewed:'Not Reviewed', open:'Open', not_a_finding:'Not a Finding', not_applicable:'Not Applicable' };
function sev(s){return s==='high'?'I':s==='medium'?'II':'III';}
function h(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}
function pill(status){return status?'<span class="pill st-'+status+'">'+(SL[status]||status)+'</span>':'<span class="muted">\\u2014</span>';}
function rowHtml(e){
  return '<tr class="row '+CL[e.change]+'">'
    +'<td><span class="pill sev-'+e.severity+'">CAT '+sev(e.severity)+'</span></td>'
    +'<td><code>'+h(e.groupId)+'</code></td>'
    +'<td><code>'+h(e.ruleVersion)+'</code></td>'
    +'<td class="td-title">'+h(e.ruleTitle)+'</td>'
    +'<td>'+pill(e.statusA)+'</td>'
    +'<td>'+pill(e.statusB)+'</td>'
    +'<td><span class="pill '+CL[e.change]+'">'+LB[e.change]+'</span></td>'
    +'</tr>';
}
</script>
</body></html>`;
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
  --red:#e74c3c;--orange:#e67e22;--green:#27ae60;--blue:#3498db;--gray:#7f8c8d;
}
body{font-family:var(--vscode-font-family,system-ui,sans-serif);font-size:13px;color:var(--fg);background:var(--bg);padding:0 20px 40px}
.hdr{padding:20px 0 16px;border-bottom:1px solid var(--border);margin-bottom:20px}
.hdr h1{font-size:1.35em;font-weight:600;margin-bottom:8px}
.diff-files{display:flex;align-items:center;gap:8px}
.arrow{font-size:1.2em;color:var(--gray)}
.chip{display:inline-block;padding:2px 9px;border-radius:10px;font-size:.8em;background:var(--card);border:1px solid var(--border)}
.muted{color:var(--gray);font-style:italic}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;margin-bottom:14px}
.card{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:12px 10px;text-align:center}
.card-n{font-size:1.6em;font-weight:700;line-height:1.2}
.card-l{font-size:.78em;color:var(--gray);margin-top:2px}
.card-reg .card-n{color:var(--red)}
.card-imp .card-n{color:var(--green)}
.card-new .card-n{color:var(--blue)}
.card-rem .card-n{color:var(--orange)}
.card-unc .card-n{color:var(--gray)}
.filters{margin-bottom:12px;font-size:.85em}
.filters label{cursor:pointer;display:flex;align-items:center;gap:6px}
.tbl-wrap{overflow-x:auto;border:1px solid var(--border);border-radius:6px}
.tbl{width:100%;border-collapse:collapse}
.tbl th{text-align:left;padding:8px 10px;background:var(--card);border-bottom:1px solid var(--border);font-weight:600;font-size:.82em;color:var(--gray);position:sticky;top:0;z-index:1}
.tbl td{padding:7px 10px;border-bottom:1px solid var(--border);vertical-align:top}
.td-title{max-width:360px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.row{transition:background .12s}
.row:hover{background:var(--hover)}
.pill{display:inline-block;padding:2px 8px;border-radius:4px;font-size:.78em;font-weight:600;white-space:nowrap}
.sev-high{background:#c0392b;color:#fff}.sev-medium{background:#e67e22;color:#fff}.sev-low{background:#2980b9;color:#fff}
.st-not_reviewed{background:#34495e;color:#ecf0f1}.st-open{background:#e74c3c;color:#fff}.st-not_a_finding{background:#27ae60;color:#fff}.st-not_applicable{background:#7f8c8d;color:#fff}
.chg-reg{background:rgba(231,76,60,.15);color:#e74c3c}
.chg-imp{background:rgba(39,174,96,.15);color:#27ae60}
.chg-new{background:rgba(52,152,219,.15);color:#3498db}
.chg-rem{background:rgba(230,126,34,.15);color:#e67e22}
.chg-unc{background:var(--card);color:var(--gray)}
tr.chg-reg{border-left:3px solid var(--red)}
tr.chg-imp{border-left:3px solid var(--green)}
tr.chg-new{border-left:3px solid var(--blue)}
tr.chg-rem{border-left:3px solid var(--orange)}
`;
