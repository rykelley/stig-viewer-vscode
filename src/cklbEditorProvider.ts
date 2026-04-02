import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { CklbDocument } from './types';
import { buildWebviewHtml } from './webviewContent';
import { buildCsv } from './exportCsv';
import { buildCkl } from './exportCkl';

export class CklbEditorProvider implements vscode.CustomTextEditorProvider {

  public static register(context: vscode.ExtensionContext): vscode.Disposable {
    return vscode.window.registerCustomEditorProvider(
      'stigViewer.cklbEditor',
      new CklbEditorProvider(context),
      { webviewOptions: { retainContextWhenHidden: true }, supportsMultipleEditorsPerDocument: false }
    );
  }

  constructor(private readonly _context: vscode.ExtensionContext) {}

  public async resolveCustomTextEditor(
    document: vscode.TextDocument,
    webviewPanel: vscode.WebviewPanel,
    _token: vscode.CancellationToken
  ): Promise<void> {
    webviewPanel.webview.options = { enableScripts: true };

    const updateWebview = () => {
      try {
        const data: CklbDocument = JSON.parse(document.getText());
        webviewPanel.webview.html = buildWebviewHtml(data);
      } catch (e) {
        webviewPanel.webview.html = `<!DOCTYPE html><html><body>
          <h2 style="color:#f44;">Error parsing .cklb file</h2>
          <pre>${String(e)}</pre></body></html>`;
      }
    };

    updateWebview();

    const changeSub = vscode.workspace.onDidChangeTextDocument(e => {
      if (e.document.uri.toString() === document.uri.toString()) {
        // External edits — could refresh, but we retain context to avoid flicker
      }
    });

    webviewPanel.webview.onDidReceiveMessage(async (msg) => {
      if (msg.type === 'saveRule') {
        const { ruleUuid, stigUuid, status, finding_details, comments } = msg;
        try {
          const data: CklbDocument = JSON.parse(document.getText());
          const stig = data.stigs.find(s => s.uuid === stigUuid);
          const rule = stig?.rules.find(r => r.uuid === ruleUuid);
          if (rule) {
            rule.status = status;
            rule.finding_details = finding_details;
            rule.comments = comments;

            const edit = new vscode.WorkspaceEdit();
            const fullRange = new vscode.Range(
              document.positionAt(0),
              document.positionAt(document.getText().length)
            );
            edit.replace(document.uri, fullRange, JSON.stringify(data, null, 2));
            await vscode.workspace.applyEdit(edit);
            vscode.window.showInformationMessage(
              `Updated ${rule.group_id} → ${status.replace(/_/g, ' ')}`
            );
          }
        } catch (e) {
          vscode.window.showErrorMessage(`Save failed: ${e}`);
        }
      }

      if (msg.type === 'saveTargetData') {
        try {
          const data: CklbDocument = JSON.parse(document.getText());
          Object.assign(data.target_data, msg.targetData);
          const edit = new vscode.WorkspaceEdit();
          const fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(document.getText().length)
          );
          edit.replace(document.uri, fullRange, JSON.stringify(data, null, 2));
          await vscode.workspace.applyEdit(edit);
          vscode.window.showInformationMessage('Target data updated');
        } catch (e) {
          vscode.window.showErrorMessage(`Save target data failed: ${e}`);
        }
      }

      if (msg.type === 'exportCsv') {
        try {
          const data: CklbDocument = JSON.parse(document.getText());
          const csv = buildCsv(data);
          const defaultName = path.basename(document.uri.fsPath, '.cklb') + '.csv';
          const saveUri = await vscode.window.showSaveDialog({
            defaultUri: vscode.Uri.file(path.join(path.dirname(document.uri.fsPath), defaultName)),
            filters: { 'CSV': ['csv'] },
            title: 'Export Summary CSV',
          });
          if (saveUri) {
            fs.writeFileSync(saveUri.fsPath, csv, 'utf-8');
            vscode.window.showInformationMessage(`Exported CSV → ${path.basename(saveUri.fsPath)}`);
          }
        } catch (e) {
          vscode.window.showErrorMessage(`CSV export failed: ${e}`);
        }
      }

      if (msg.type === 'exportCkl') {
        try {
          const data: CklbDocument = JSON.parse(document.getText());
          const ckl = buildCkl(data);
          const defaultName = path.basename(document.uri.fsPath, '.cklb') + '.ckl';
          const saveUri = await vscode.window.showSaveDialog({
            defaultUri: vscode.Uri.file(path.join(path.dirname(document.uri.fsPath), defaultName)),
            filters: { 'CKL Checklist': ['ckl'] },
            title: 'Export CKL (XML)',
          });
          if (saveUri) {
            fs.writeFileSync(saveUri.fsPath, ckl, 'utf-8');
            vscode.window.showInformationMessage(`Exported CKL → ${path.basename(saveUri.fsPath)}`);
          }
        } catch (e) {
          vscode.window.showErrorMessage(`CKL export failed: ${e}`);
        }
      }

      if (msg.type === 'bulkSaveRules') {
        const { ruleUuids, stigUuid, status, comments } = msg;
        try {
          const data: CklbDocument = JSON.parse(document.getText());
          const stig = data.stigs.find(s => s.uuid === stigUuid);
          if (!stig) { return; }
          let count = 0;
          for (const rule of stig.rules) {
            if (ruleUuids.includes(rule.uuid)) {
              rule.status = status;
              if (comments) { rule.comments = comments; }
              count++;
            }
          }
          const edit = new vscode.WorkspaceEdit();
          const fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(document.getText().length)
          );
          edit.replace(document.uri, fullRange, JSON.stringify(data, null, 2));
          await vscode.workspace.applyEdit(edit);
          vscode.window.showInformationMessage(
            `Bulk updated ${count} rules → ${status.replace(/_/g, ' ')}`
          );
        } catch (e) {
          vscode.window.showErrorMessage(`Bulk save failed: ${e}`);
        }
      }
    });

    webviewPanel.onDidDispose(() => changeSub.dispose());
  }
}
