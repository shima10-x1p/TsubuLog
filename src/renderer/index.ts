import './index.css';
import { getAppVersion } from './adapters/api/client';

const button = document.getElementById('button');
const output = document.getElementById('out');

button?.addEventListener('click', async () => {
  const version = await getAppVersion();
  if (output) {
    output.textContent = version;
  }
});
