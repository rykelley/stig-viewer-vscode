# AGENTS-IMPROVEMENT-SPEC.md

Concrete improvements to `AGENTS.md` and the agent-facing developer experience for this repository.

---

## Audit Summary

### What's Good

- **README is thorough.** Feature list, architecture diagram, file tree, and usage instructions are all present. An agent can orient quickly.
- **`types.ts` is the single source of truth.** `CklbDocument`, `CklbStig`, and `CklbRule` are fully typed with strict mode on. An agent editing any module can rely on these interfaces.
- **`examples/testplan.md` is detailed.** Step-by-step manual test scenarios with explicit verification checklists exist for every major workflow. This is unusually good for a solo project.
- **Build is simple and reproducible.** One `npm run compile` command, no hidden steps, no environment-specific config.
- **Error handling is consistent.** Every command handler uses the same `try/catch` + `showErrorMessage` pattern.

### What's Missing

1. **No `AGENTS.md` existed.** Agents had no structured entry point — they had to infer architecture from README prose.
2. **No linting config.** No ESLint or Prettier. An agent making edits has no automated style enforcement and may introduce inconsistencies.
3. **No unit tests.** `vscode-test` is declared as a dev dependency but `src/test/` does not exist. An agent cannot verify correctness of logic changes.
4. **No CI.** No GitHub Actions workflows. There is no automated gate on type errors, build failures, or (future) test failures.
5. **No `CHANGELOG.md`.** Version bumps (`6.1.0`, `6.2.0`, `6.3.0`) are commit messages with no structured change log. An agent cannot determine what changed between versions.
6. **No user-facing configuration.** `contributes.configuration` is absent from `package.json`. There is no documented way for users to customize behavior (e.g., scan pattern file path, default export directory).
7. **`scan-patterns.json` has no schema file.** The format is documented only by example and a `$comment` field. An agent extending scan patterns has no validation.
8. **Webview HTML is entirely inline.** `webviewContent.ts` generates all HTML/CSS/JS as a TypeScript string. This makes it hard for an agent to reason about the UI structure or make targeted edits without reading thousands of lines.
9. **`activeDocumentUri` is a static mutable field.** `CklbEditorProvider._activeDocumentUri` is a class-level static. An agent adding multi-document features may introduce subtle bugs without understanding this constraint.
10. **Commit messages are inconsistent.** Some are version numbers (`6.3.0`), some are imperative sentences, one is `[short summary of changes]`. An agent cannot reliably infer the convention.

### What's Wrong

1. **`AGENTS.md` did not exist** — now created, but was absent.
2. **No `.gitignore` for `dist/`.** The `dist/` directory (compiled output) appears to be committed. Build artifacts should not be in source control for a project that uses a build step.
3. **`devcontainer.json` uses the 10 GB universal image** with no Node.js-specific optimizations. This slows environment startup significantly for a pure Node/TypeScript project.
4. **`vscode:prepublish` runs `npm run package`** which minifies. The `compile-tests` script outputs to `out/` but `tsconfig.json` also has `outDir: "out"` — these may conflict if both are run.
5. **No `engines.node` field in `package.json`.** The required Node.js version is unspecified. An agent setting up a new environment may use an incompatible version.

---

## Improvement Spec

### 1. Strengthen `AGENTS.md`

**Priority: High**

The newly created `AGENTS.md` covers architecture, layout, build, patterns, and conventions. The following additions would make it more useful:

#### 1a. Add a "Common Agent Tasks" section

```markdown
## Common Agent Tasks

### Fix a bug in an importer
1. Read `src/import<Format>.ts` to understand the parsing logic.
2. Check `src/types.ts` for the target data shape.
3. Run `npm run check-types` to verify no type errors.
4. Manually test using `examples/testplan.md` section for that importer.

### Add a new export format
1. Create `src/export<Format>.ts` — accept `CklbDocument`, return a string.
2. Add a message handler in `cklbEditorProvider.ts` (follow `exportCsv` pattern).
3. Add a button in `webviewContent.ts` that posts the corresponding message.
4. Register no new command — exports are triggered from within the webview.

### Modify the webview UI
- All UI is in `src/webviewContent.ts` as an inline HTML string.
- Search for the relevant section by its HTML comment or element ID.
- Test by running `npm run compile` and pressing F5 to launch the Extension Development Host.
```

#### 1b. Document the `activeDocumentUri` constraint

```markdown
### Multi-document Limitation
`CklbEditorProvider.activeDocumentUri` is a static field that tracks the most recently
focused `.cklb` editor. Commands that operate on "the current checklist" read this value.
This means only one checklist can be "active" at a time. Any feature that needs to operate
on a specific document must either accept a `vscode.Uri` argument or prompt the user to
select a file — do not assume `activeDocumentUri` is always set.
```

#### 1c. Document the webview message protocol

Add a table of all `postMessage` types, their payload shapes, and which side sends them. This is currently only discoverable by reading `cklbEditorProvider.ts` and `webviewContent.ts` in full.

---

### 2. Add ESLint

**Priority: Medium**

Install `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` with a minimal config that enforces:
- No `any` (or explicit `@ts-ignore` required)
- No unused variables
- Consistent import ordering

Add `"lint": "eslint src --ext .ts"` to `package.json` scripts and document it in `AGENTS.md`.

**Why:** Without a linter, agents making edits have no automated feedback on style or type-safety regressions short of a full compile.

---

### 3. Add Unit Tests for Pure Logic Modules

**Priority: Medium**

The following modules contain pure logic with no VS Code API dependency and are straightforward to unit test:

| Module | What to test |
|---|---|
| `src/exportCsv.ts` | CSV output shape, escaping, column order |
| `src/exportCkl.ts` | XML structure, CDATA handling, severity mapping |
| `src/exportPoam.ts` | Only Open rules included, CAT severity labels |
| `src/nistCrosswalk.ts` | CCI → control mapping, status rollup logic |
| `src/cciNistMap.ts` | XML parse, bundled map lookup |

Create `src/test/` with a `mocha`-based suite (already supported by `vscode-test`). Start with `exportCsv` and `exportPoam` as they are the simplest.

Document the test command in `AGENTS.md`:
```bash
npm test   # runs vscode-test suite
```

---

### 4. Add GitHub Actions CI

**Priority: Medium**

Create `.github/workflows/ci.yml`:

```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run check-types
      - run: npm run compile
```

Add lint and test steps once those exist. Document the CI badge in `README.md`.

---

### 5. Add `engines.node` to `package.json`

**Priority: Low**

```json
"engines": {
  "vscode": "^1.85.0",
  "node": ">=20.0.0"
}
```

This prevents agents and contributors from accidentally using an incompatible Node version.

---

### 6. Add a JSON Schema for `scan-patterns.json`

**Priority: Low**

Create `scan-patterns.schema.json` and add a `$schema` reference to `scan-patterns.json`. This gives agents (and editors) validation and autocomplete when editing scan patterns.

Minimum schema fields to document:
- `version` (string)
- `excludeGlobs` (string[])
- `scanPatterns[].id` (string, unique)
- `scanPatterns[].name` (string)
- `scanPatterns[].ruleKeywords` (string[])
- `scanPatterns[].fileGlobs` (string[])
- `scanPatterns[].patterns` (string[] — regex)
- `scanPatterns[].caseSensitive` (boolean)
- `scanPatterns[].matchMeansOpen` (boolean)

---

### 7. Optimize `devcontainer.json`

**Priority: Low**

Replace the 10 GB universal image with a Node.js-specific image:

```json
{
  "name": "STIG Workbench",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:20",
  "postCreateCommand": "npm install",
  "customizations": {
    "vscode": {
      "extensions": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
    }
  }
}
```

This reduces environment startup time and makes the Node version explicit.

---

### 8. Add `CHANGELOG.md`

**Priority: Low**

Create a minimal changelog starting from the current version. Use [Keep a Changelog](https://keepachangelog.com) format. This gives agents context on what changed between versions when debugging regressions.

---

### 9. Clarify `dist/` in `.gitignore`

**Priority: Low**

Verify whether `dist/extension.js` is intentionally committed (some VS Code extensions commit the built artifact for marketplace publishing without a CI pipeline). If it is intentional, document this in `AGENTS.md`. If not, add `dist/` to `.gitignore`.

Current state is ambiguous — `dist/` is listed in `scan-patterns.json`'s `excludeGlobs` (suggesting it is present in the repo) but is a build output.

---

## Implementation Order

| # | Item | Effort | Impact |
|---|---|---|---|
| 1 | Strengthen `AGENTS.md` (sections 1a–1c) | Low | High |
| 2 | Add `engines.node` to `package.json` | Trivial | Medium |
| 3 | Clarify `dist/` gitignore situation | Trivial | Medium |
| 4 | Add ESLint | Low | Medium |
| 5 | Add unit tests for pure logic modules | Medium | High |
| 6 | Add GitHub Actions CI | Low | Medium |
| 7 | Add JSON schema for `scan-patterns.json` | Low | Low |
| 8 | Optimize `devcontainer.json` | Trivial | Low |
| 9 | Add `CHANGELOG.md` | Low | Low |
