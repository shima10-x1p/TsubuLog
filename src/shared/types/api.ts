export type AppVersion = string;

export interface AppApi {
  getAppVersion: () => Promise<AppVersion>;
}
