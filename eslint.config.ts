import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import eslintConfig from '@agapi-development-tools/eslint-config';

const __dirname = fileURLToPath(import.meta.url);

/**
 * Later we want to probably be able to use eslint.config.ts in each package and override parts of the root configuration file,
 * however it is a feature of eslint v10 and now probably not supported in the vscode eslint plugin.
 * See: https://eslint.org/docs/latest/use/configure/configuration-files#experimental-configuration-file-resolution
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
