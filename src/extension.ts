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
import {
  initLicenseManager,
  requirePro,
  enterLicenseKey,
  showLicenseStatus,
  removeLicenseKey,
} from './licenseManager';

export function activate(context: vscode.ExtensionContext) {
  // Initialize license manager with VS Code's encrypted secret storage
  initLicenseManager(context.secrets);

  context.subscriptions.push(CklbEditorProvider.register(context));

  // ─── Free commands ──────────────────────────────────────────────────

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
    vscode.commands.registerCommand('stigViewer.importScapResults', async () => {
      try {
        await importScapResults(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode.window.showErrorMessage(`SCAP import failed: ${e}`);
      }
    })
  );

  // ─── Pro commands (gated) ───────────────────────────────────────────

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.mergeFindings', async () => {
      if (!await requirePro()) return;
      try {
        await mergeFindings(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode.window.showErrorMessage(`Merge failed: ${e}`);
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.dashboard', async () => {
      if (!await requirePro()) return;
      try {
        await DashboardPanel.show(context);
      } catch (e) {
        vscode.window.showErrorMessage(`Dashboard failed: ${e}`);
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.diffChecklists', async () => {
      if (!await requirePro()) return;
      try {
        await DiffPanel.show(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode.window.showErrorMessage(`Diff failed: ${e}`);
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.scanRepo', async () => {
      if (!await requirePro()) return;
      try {
        await scanRepo(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode.window.showErrorMessage(`Repo scan failed: ${e}`);
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.importSarif', async () => {
      if (!await requirePro()) return;
      try {
        await importSarif(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode.window.showErrorMessage(`SARIF import failed: ${e}`);
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.importAudit', async () => {
      if (!await requirePro()) return;
      try {
        await importAudit(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode.window.showErrorMessage(`Dependency audit import failed: ${e}`);
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.exportEvidence', async () => {
      if (!await requirePro()) return;
      try {
        await exportEvidence(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode.window.showErrorMessage(`Evidence package failed: ${e}`);
      }
    })
  );

  // ─── Pro: POA&M export in webview (CSV is free; see cklbEditorProvider) ──

  // ─── License management commands ────────────────────────────────────

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.enterLicense', enterLicenseKey)
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.licenseStatus', showLicenseStatus)
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('stigViewer.removeLicense', removeLicenseKey)
  );
}

export function deactivate() {}
