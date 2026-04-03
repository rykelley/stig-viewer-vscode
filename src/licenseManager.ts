import * as vscode from 'vscode';

const SECRET_KEY = 'stigWorkbench.licenseKey';
const VALIDATION_URL = 'https://api.stigworkbench.com/v1/license/validate';

// Cache validation result for the session so we don't hit the API on every command
let cachedValid: boolean | null = null;
let cacheExpiry = 0;
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

let _secrets: vscode.SecretStorage | undefined;

export function initLicenseManager(secrets: vscode.SecretStorage): void {
  _secrets = secrets;
  // Clear cache when the key changes
  secrets.onDidChange(e => {
    if (e.key === SECRET_KEY) {
      cachedValid = null;
      cacheExpiry = 0;
    }
  });
}

// ─── Key storage ────────────────────────────────────────────────────────────

async function getStoredKey(): Promise<string | undefined> {
  return _secrets?.get(SECRET_KEY);
}

async function storeKey(key: string): Promise<void> {
  await _secrets?.store(SECRET_KEY, key);
  cachedValid = null;
  cacheExpiry = 0;
}

async function removeKey(): Promise<void> {
  await _secrets?.delete(SECRET_KEY);
  cachedValid = null;
  cacheExpiry = 0;
}

// ─── Validation ─────────────────────────────────────────────────────────────

async function validateKey(key: string): Promise<{ valid: boolean; message?: string }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(VALIDATION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json() as { valid: boolean; message?: string };
      return data;
    }

    // If server returns 4xx/5xx, treat as invalid
    return { valid: false, message: `Server returned ${res.status}` };
  } catch (e: unknown) {
    // Network error — allow offline grace period
    // If we previously validated successfully, keep working
    if (cachedValid === true) {
      return { valid: true, message: 'Offline — using cached validation' };
    }

    // First-time validation with no network — allow a trial
    return { valid: false, message: 'Could not reach license server. Check your connection.' };
  }
}

async function isProLicensed(): Promise<boolean> {
  const now = Date.now();
  if (cachedValid !== null && now < cacheExpiry) {
    return cachedValid;
  }

  const key = await getStoredKey();
  if (!key) {
    cachedValid = false;
    cacheExpiry = now + CACHE_TTL_MS;
    return false;
  }

  const result = await validateKey(key);
  cachedValid = result.valid;
  cacheExpiry = now + CACHE_TTL_MS;
  return result.valid;
}

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Gate a Pro feature. Returns true if the user has a valid Pro license.
 * If not, shows an upgrade prompt and returns false.
 */
export async function requirePro(): Promise<boolean> {
  const licensed = await isProLicensed();
  if (licensed) return true;

  const choice = await vscode.window.showInformationMessage(
    'This is a STIG Workbench Pro feature. Enter a license key to unlock.',
    'Enter License Key',
    'Get a License',
    'Cancel'
  );

  if (choice === 'Enter License Key') {
    await enterLicenseKey();
    return await isProLicensed();
  }

  if (choice === 'Get a License') {
    vscode.env.openExternal(vscode.Uri.parse('https://stigworkbench.com/pro'));
    return false;
  }

  return false;
}

/**
 * Command: Enter or update a license key.
 */
export async function enterLicenseKey(): Promise<void> {
  const key = await vscode.window.showInputBox({
    prompt: 'Enter your STIG Workbench Pro license key',
    placeHolder: 'SW-XXXX-XXXX-XXXX-XXXX',
    password: false,
    ignoreFocusOut: true,
  });

  if (!key) return;

  const trimmed = key.trim();
  if (!trimmed) return;

  await vscode.window.withProgress(
    { location: vscode.ProgressLocation.Notification, title: 'Validating license...' },
    async () => {
      const result = await validateKey(trimmed);
      if (result.valid) {
        await storeKey(trimmed);
        vscode.window.showInformationMessage('License activated! Pro features are now unlocked.');
      } else {
        vscode.window.showErrorMessage(
          `Invalid license key. ${result.message || 'Please check and try again.'}`
        );
      }
    }
  );
}

/**
 * Command: Show current license status.
 */
export async function showLicenseStatus(): Promise<void> {
  const key = await getStoredKey();
  if (!key) {
    const choice = await vscode.window.showInformationMessage(
      'STIG Workbench: Free tier. No Pro license key entered.',
      'Enter License Key',
      'Get a License'
    );
    if (choice === 'Enter License Key') await enterLicenseKey();
    if (choice === 'Get a License') vscode.env.openExternal(vscode.Uri.parse('https://stigworkbench.com/pro'));
    return;
  }

  const valid = await isProLicensed();
  if (valid) {
    const masked = key.substring(0, 7) + '...' + key.substring(key.length - 4);
    vscode.window.showInformationMessage(`STIG Workbench Pro — Licensed (${masked})`);
  } else {
    vscode.window.showWarningMessage(
      'STIG Workbench: License key is stored but could not be validated. Check your connection or key.'
    );
  }
}

/**
 * Command: Remove the stored license key.
 */
export async function removeLicenseKey(): Promise<void> {
  const key = await getStoredKey();
  if (!key) {
    vscode.window.showInformationMessage('No license key is stored.');
    return;
  }

  const confirm = await vscode.window.showWarningMessage(
    'Remove your Pro license key? Pro features will be locked.',
    { modal: true },
    'Remove'
  );

  if (confirm === 'Remove') {
    await removeKey();
    vscode.window.showInformationMessage('License key removed. Pro features are now locked.');
  }
}
