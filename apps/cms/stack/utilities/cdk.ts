import { exec } from 'node:child_process';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const cdkExecutable = require.resolve('aws-cdk/bin/cdk');

export const executeAsyncCmd = async ({ cmd, path, env }: { cmd: string; path?: string, env?: Record<string, string> }) => {
  if (path) {
    process.chdir(path);
  }

  return new Promise((resolve, reject) => {
    // console.log('Executing command: ', cmd);
    const sh = exec(cmd, { env: { ...process.env, ...env } }, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });

    sh.stdout?.on('data', (data) => {
      console.log(data);
    });
    sh.stderr?.on('data', (data) => {
      console.error(data);
    });
  });
};

export const deploy  = async (appPath: string, profile: string) => {
  const args = ['--app', `"npx tsx ${appPath}"`, '--require-approval never', '--ci', '--profile', profile];
  await executeAsyncCmd({
    cmd: `${cdkExecutable} deploy ${args.join(' ')}`,
    env: {}
  });
};

export const destroy = async (appPath: string, profile: string) => {
  const args = ['--app', `"npx tsx ${appPath}"`, '--require-approval never', '--ci', '--profile', profile];
  await executeAsyncCmd({
    cmd: `${cdkExecutable} destroy ${args.join(' ')}`,
    env: {}
  });
};

export const bootstrap  = async (appPath: string, profile: string) => {
  const args = ['--app', `"npx tsx ${appPath}"`, '--require-approval never', '--ci', '--profile', profile];
  await executeAsyncCmd({
    cmd: `${cdkExecutable} bootstrap ${args.join(' ')}`,
    env: {}
  });
};
