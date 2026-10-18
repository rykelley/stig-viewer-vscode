import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

const NOT_WRITABLE_CODES = new Set(['EACCES', 'EPERM', 'EROFS']);

/**
 * Write a generated checklist to `preferredPath`. If that folder is not writable,
 * prompt the user for another location. Returns undefined if the user cancels.
 */
export async function writeCklb(preferredPath: string, contents: string): Promise<vscode.Uri | undefined> {
  try {
    fs.writeFileSync(preferredPath, contents);
    return vscode.Uri.file(preferredPath);
  } catch (e) {
    const code = (e as NodeJS.ErrnoException).code;
    if (!code || !NOT_WRITABLE_CODES.has(code)) { throw e; }
  }

  const workspaceFolder = vscode.workspace.workspaceFolders?.[0]?.uri;
  const outName = path.basename(preferredPath);
  const target = await vscode.window.showSaveDialog({
    title: `Cannot write to ${path.dirname(preferredPath)} \u2014 choose where to save the checklist`,
    defaultUri: workspaceFolder ? vscode.Uri.joinPath(workspaceFolder, outName) : undefined,
    filters: { 'STIG Checklist': ['cklb'] },
  });
  if (!target) { return undefined; }

  await vscode.workspace.fs.writeFile(target, Buffer.from(contents, 'utf-8'));
  return target;
}
