import fs from 'node:fs';
import path from 'node:path';

export function resolveLegacyProfilePath(appData: string, packaged: boolean): string {
  const names = packaged ? ['CinnaTool', 'cinna-tools'] : ['cinna-tools'];
  const candidates = names.map((name) => path.join(appData, name));
  const saved = candidates.find((directory) => ['config.json', 'window-state.json', 'Local Storage'].some((entry) => fs.existsSync(path.join(directory, entry))));
  return saved ?? candidates.find((directory) => fs.existsSync(directory)) ?? candidates[0]!;
}
