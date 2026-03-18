import * as vscode from 'vscode';
import { CklbDocument } from './types';
import { buildWebviewHtml } from './webviewContent';

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
            edit.replace(document.uri, fullRange, JSON.stringify(data));
            await vscode.workspace.applyEdit(edit);
            vscode.window.showInformationMessage(
              `Updated ${rule.group_id} → ${status.replace(/_/g, ' ')}`
            );
          }
        } catch (e) {
          vscode.window.showErrorMessage(`Save failed: ${e}`);
        }
      }
    });

    webviewPanel.onDidDispose(() => changeSub.dispose());
  }
}
