export const IPC_CHANNELS = {
  appGetVersion: 'app:getVersion',
} as const;

export type AppGetVersionResponse = import('./api').AppVersion;
