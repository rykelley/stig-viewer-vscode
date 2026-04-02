import * as vscode from 'vscode';
import { CklbEditorProvider } from './cklbEditorProvider';
import { importXccdf } from './xccdfImporter';
import { mergeFindings } from './mergeFindings';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(CklbEditorProvider.register(context));

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.openFile', async () => {
      const uris = await vscode.window.showOpenDialog({
        canSelectMany: false,
        filters: { 'STIG Checklist': ['cklb'] },
        title: 'Open STIG Checklist (.cklb)',
      });
      if (uris?.[0]) {
        await vscode.commands.executeCommand('vscode.openWith', uris[0], 'stigViewer.cklbEditor');
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.importXccdf', async (uri?: vscode.Uri) => {
      if (!uri) {
        const uris = await vscode.window.showOpenDialog({
          canSelectMany: false,
          filters: { 'XCCDF Benchmark': ['xml'] },
          title: 'Import XCCDF Benchmark',
        });
        if (!uris?.[0]) { return; }
        uri = uris[0];
      }
      try {
        await importXccdf(uri);
      } catch (e) {
        vscode.window.showErrorMessage(`XCCDF import failed: ${e}`);
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.mergeFindings', async () => {
      try {
        await mergeFindings();
      } catch (e) {
        vscode.window.showErrorMessage(`Merge failed: ${e}`);
      }
    })
  );
}

export function deactivate() {}
