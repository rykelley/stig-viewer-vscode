import * as vscode from 'vscode';
import { CklbEditorProvider } from './cklbEditorProvider';

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
}

export function deactivate() {}
