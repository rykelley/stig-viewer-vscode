import * as vscode from 'vscode';
import { CklbEditorProvider } from './cklbEditorProvider';
import { importXccdf } from './xccdfImporter';
import { importCkl } from './importCkl';
import { mergeFindings } from './mergeFindings';
import { DashboardPanel } from './dashboardPanel';
import { DiffPanel } from './diffPanel';
import { importScapResults } from './importScapResults';
import { scanRepo } from './repoScanner';
import { importSarif } from './importSarif';
import { importAudit } from './importAudit';
import { exportEvidence } from './evidencePackage';

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
    vscode.commands.registerCommand('stigViewer.importCkl', async (uri?: vscode.Uri) => {
      if (!uri) {
        const uris = await vscode.window.showOpenDialog({
          canSelectMany: false,
          filters: { 'CKL Checklist': ['ckl'] },
          title: 'Import CKL Checklist',
        });
        if (!uris?.[0]) { return; }
        uri = uris[0];
      }
      try {
        await importCkl(uri);
      } catch (e) {
        vscode.window.showErrorMessage(`CKL import failed: ${e}`);
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

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.dashboard', async () => {
      try {
        await DashboardPanel.show(context);
      } catch (e) {
        vscode.window.showErrorMessage(`Dashboard failed: ${e}`);
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.diffChecklists', async () => {
      try {
        await DiffPanel.show();
      } catch (e) {
        vscode.window.showErrorMessage(`Diff failed: ${e}`);
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.importScapResults', async () => {
      try {
        await importScapResults();
      } catch (e) {
        vscode.window.showErrorMessage(`SCAP import failed: ${e}`);
      }
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.scanRepo', async () => {
      try {
        await scanRepo();
      } catch (e) {
        vscode.window.showErrorMessage(`Repo scan failed: ${e}`);
      }
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.importSarif', async () => {
      try {
        await importSarif();
      } catch (e) {
        vscode.window.showErrorMessage(`SARIF import failed: ${e}`);
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.importAudit', async () => {
      try {
        await importAudit();
      } catch (e) {
        vscode.window.showErrorMessage(`Dependency audit import failed: ${e}`);
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.exportEvidence', async () => {
      try {
        await exportEvidence();
      } catch (e) {
        vscode.window.showErrorMessage(`Evidence package failed: ${e}`);
      }
    })
  );
}

export function deactivate() {}
