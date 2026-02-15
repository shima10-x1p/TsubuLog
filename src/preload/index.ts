import { contextBridge, ipcRenderer } from 'electron';

import { createAppApi } from './api';

contextBridge.exposeInMainWorld('api', createAppApi(ipcRenderer));
