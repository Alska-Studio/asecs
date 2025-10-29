/* eslint-disable */
// ! This is needed for nextjs to correctly resolve.

import type { Options } from 'next/dist/server/next-server';
import type NextServerType from 'next/dist/server/next-server';

import { createRequire } from 'module';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path'
import { ServerResponse } from 'node:http'
import slsHttp from 'serverless-http';

/* TODO: ESM support
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url);
*/

process.chdir(__dirname);
(process.env as any).NODE_ENV = 'production';

const { default: NextServer }: { default: typeof NextServerType } = require('next/dist/server/next-server');

// This will be loaded from custom config parsed via CLI.
const configFilePath = process.env.NEXT_CONFIG_FILE ?? './config.json';
const nextConf = JSON.parse(readFileSync(configFilePath, 'utf-8'));

const config: Options = {
  hostname: 'localhost',
  port: Number(process.env.PORT) || 3000,
  dir: path.join(__dirname),
  dev: false,
  customServer: false,
  conf: nextConf,
};

const getErrMessage = (e: any) => ({ message: 'Server failed to respond.', details: e });

const nextHandler = new NextServer(config).getRequestHandler();

type Handler = (event: Object, context: Object) => Promise<Object>;

const server = async (event: Object, context: Object) => {
  console.log('server:event', event);
  console.log('server:context', context);

  return await slsHttp(
    async (req: any, res: ServerResponse) => {
      try {
        console.log('http:request', req);
        const response = await nextHandler(req, res);

        console.log('http:response', response);
        return response;
      } catch (e: any) {
        // Log into Cloudwatch for easier debugging.
        console.error(`NextJS request failed due to:`);
        console.error(e)

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(getErrMessage(e), null, 3));
      }
    },
    {
      // We have separate function for handling images. Assets are handled by S3.
      binary: true,
      provider: 'aws',
      basePath: process.env.NEXTJS_LAMBDA_BASE_PATH,
      request: (request: any) => {
        console.log('binary:request', request);
        // See following for more details:
        //  - https://github.com/jetbridge/cdk-nextjs/pull/33/files
        //  - https://github.com/dougmoscrop/serverless-http/issues/227
        delete request.body;
      },
    }
  )(event, context)
};

export const handler = server as Handler;
