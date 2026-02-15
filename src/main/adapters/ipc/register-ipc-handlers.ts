import { app, ipcMain } from 'electron';

import type { AppGetVersionResponse } from '../../../shared/types/ipc';
import { IPC_CHANNELS } from '../../../shared/types/ipc';

export const registerIpcHandlers = (): void => {
  ipcMain.handle(IPC_CHANNELS.appGetVersion, () => {
    const version: AppGetVersionResponse = app.getVersion();
    return version;
  });
};
