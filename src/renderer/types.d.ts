export {};

import type { AppApi } from '../shared/types/api';

declare global {
  interface Window {
    api: AppApi;
  }
}
