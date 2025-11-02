import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { deploy } from './utilities/cdk';
import { createKeyPair } from './utilities/keypair';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const profile = 'asecs-dev';

const main = async () => {
  createKeyPair('mongodb-cdk-key', profile);
  await deploy(path.resolve(__dirname, './app.ts'), profile);
};

main().catch((error) => console.error(error));
