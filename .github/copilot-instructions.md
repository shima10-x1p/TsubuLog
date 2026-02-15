# Repository instructions for GitHub Copilot (Electron Forge + Webpack)

## 概要
- このリポジトリは、TsubuLog という、個人用のミニブログ風メモアプリです。
- メモの各エントリは短いテキストメモです。ローカルファーストになるようにしてください。

## Tech stack and verification
- Electron Forge + Webpack + TypeScript.
- Dev run: npm start
- Package build: npm run make
- Do not edit generated output under `.webpack/`.

## Architecture
- Keep the core independent from Electron and the DOM (ports and adapters).
- Core must not import Electron, node:fs, or browser-only APIs.

## Process boundaries (Electron)
- main process:
  - Owns OS integration, persistence, and ipcMain handlers.
  - No UI code.
- preload:
  - Expose a minimal, typed API via contextBridge.
  - Do not expose raw ipcRenderer or Node APIs.
- renderer:
  - UI only. No direct access to Node APIs.
  - Call only the API exposed by preload.

## Webpack template specifics (Forge plugin)
- `package.json#main` is expected to point to `./.webpack/main` (generated entry). Do not repoint it to `src/*`. 
- In main process, `loadURL(...)` and `webPreferences.preload` must use Forge webpack globals:
  - Use `<NAME>_WEBPACK_ENTRY` for the renderer URL.
  - Use `<NAME>_PRELOAD_WEBPACK_ENTRY` for the preload path.
- When adding a new window/renderer entrypoint, update Forge/webpack configs rather than hardcoding file paths.

## IPC rules
- Prefer request/response with `ipcMain.handle` + `ipcRenderer.invoke`.
- IPC payloads must be typed (shared DTO types) and validated at the boundary.
- Errors crossing IPC must be serializable (code, message, optional safe details).

## Persistence rules (local-first)
- Persistence is behind a repository port.
- Store app data under Electron userData (main process decides the actual path).
- Add migrations for schema changes.
- Never delete user data silently.

## Code style
- TypeScript: prefer strict typing, avoid `any`.
- Do not swallow exceptions. Avoid logging sensitive content.

## Output expectations for Copilot
- Before implementing, mention which files will be changed.
- After implementing, summarize what changed and why, and list commands run (or why not).
