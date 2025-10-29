import fs from 'node:fs';
import { fromIni } from '@aws-sdk/credential-providers';
import { loadSharedConfigFiles } from '@aws-sdk/shared-ini-file-loader';
import { EC2Client, DescribeKeyPairsCommand, CreateKeyPairCommand } from '@aws-sdk/client-ec2';

export const getDefaultRegion = async (profile = 'default'): Promise<string | undefined> => {
  const { configFile } = await loadSharedConfigFiles();
  const profileConfig = configFile[profile];
  return profileConfig?.region;
};

export const createKeyPair = async (keyName: string, profile: string) => {
  const credentials = fromIni({ profile });
  const client = new EC2Client({ credentials });

  try {
    // Check if the key already exists
    const describeCommand = new DescribeKeyPairsCommand({ KeyNames: [keyName] });
    await client.send(describeCommand);

    console.log(`[createKeyPair] Key pair "${keyName}" already exists. Using existing key.`);
  } catch (err) {
    if (err instanceof Error && err.name === 'InvalidKeyPair.NotFound') {
      console.log(`[createKeyPair] Key pair "${keyName}" not found. Creating a new one...`);
      const createCommand = new CreateKeyPairCommand({ KeyName: keyName });
      const response = await client.send(createCommand);
      if (response.KeyMaterial) {
        fs.writeFileSync(`${keyName}.pem`, response.KeyMaterial, { mode: 0o400 });
        console.log(`[createKeyPair] Key pair created and saved as ${keyName}.pem`);
      }
    } else {
      console.error(`[createKeyPair] Error checking key pair: ${err}`);
    }
  }
};
