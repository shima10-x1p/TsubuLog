import type { IpcRenderer } from 'electron';

import type { AppApi } from '../../shared/types/api';
import { IPC_CHANNELS } from '../../shared/types/ipc';

export const createAppApi = (ipcRenderer: IpcRenderer): AppApi => {
	return {
		getAppVersion: () => ipcRenderer.invoke(IPC_CHANNELS.appGetVersion),
	};
};

