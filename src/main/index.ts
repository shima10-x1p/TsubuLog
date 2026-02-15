import { app, BrowserWindow } from 'electron';

import { registerIpcHandlers } from './adapters/ipc/register-ipc-handlers';
import { createMainWindow } from './wiring/create-main-window';

// インストール・アンインストール時の Windows ショートカット処理
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = (): void => {
  createMainWindow();
};

registerIpcHandlers();

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
