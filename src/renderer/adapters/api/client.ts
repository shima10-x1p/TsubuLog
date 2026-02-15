import type { AppApi, AppVersion } from '../../../shared/types/api';

const getApi = (): AppApi => {
  if (!window.api) {
    throw new Error('window.api が初期化されていません');
  }

  return window.api;
};

export const getAppVersion = async (): Promise<AppVersion> => {
  return getApi().getAppVersion();
};
