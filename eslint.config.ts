import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import eslintConfig from '@agapi-development-tools/eslint-config';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Later we might want to use eslint.config.ts in each package and override parts of configuration file,
 * however it is a feature of eslint v10 and now probably not supported in the vscode eslint plugin, it has been enabled in the workspace.
 * See: https://eslint.org/docs/latest/use/configure/configuration-files#experimental-configuration-file-resolution
 * See: http://github.com/eslint/eslint/discussions/18574
 * See: https://eslint.org/docs/latest/flags
 */
export default eslintConfig({
  tsconfigRootDir: __dirname,
  gitignorePath: resolve(__dirname, '.gitignore'),
  projects: [
    resolve(__dirname, 'tsconfig.json'),
    resolve(__dirname, 'apps/**/tsconfig.json'),
    resolve(__dirname, 'packages/**/tsconfig.json')
  ]
});
