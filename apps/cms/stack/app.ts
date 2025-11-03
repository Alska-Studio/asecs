#!/usr/bin/env node
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { App } from 'aws-cdk-lib';

import { NextjsApp } from '@agapi-development-tools/nextjs-aws-adapter/cdk';
import { MongoDbEc2Stack } from './stacks/mongodb-stack';

import { getCertificate, getDomainName, getAlternateNames } from './domain';
import { rules as wafRules } from './waf-rules';

const __dirname = dirname(fileURLToPath(import.meta.url)); // Directory of this file (app.ts)

// Next.js build folder (this is where the build files are stored when building the app)
const buildFolder = '.next/nextjs-aws-adapter';

const stage = process.env.NODE_ENV || 'dev';
const brand = 'asecs';

const certificateArn = getCertificate(stage);
const domainNames = getDomainName(stage);

console.log('== Running AWS CDK');
console.log(' - Stage:', stage);
console.log(' - Certificate:', certificateArn);
console.log(' - Domain name:', domainNames);

const app = new App();

// AWS CDK Cloudformation Stack
new NextjsApp(app, `${brand}-cms-${stage}`, {
  stackNamePrefix: `${brand}-cms-${stage}`,
  vars: {
    stage: stage,
    brand: brand,
    brandSlug: brand
  },
  cdn: {
    certificateArn: certificateArn,
    domainNames: domainNames,
    // alternateNames: alternateNames,
    waf: {
      enabled: ['stage', 'prod'].includes(stage), // Enable only in production and stage
      rules: wafRules
    },
    functionAssociations: {
      viewerRequest: {
        file: resolve(__dirname, './function-associations/viewer-request.js'),
        description: 'Viewer request function for redirecting requests and adding preview support for Storyblok',
        associateKeyValueStore: `${brand}-redirects-${stage}`
      }
    }
  },
  app: {
    entryDir: buildFolder,
    cookieAllowList: [
      'payload-token'
    ],
    lambdaOptions: {
      memorySize: ['prod'].includes(stage) ? 3008 : 1024, // Max memory/vCPU
      bundling: {
        sourceMap: true // Boolean(stage !== 'prod') Disable in production?
      }
    }
  }
},
// Explicit region is required for cross-region references
{ env: { region: process.env.CDK_DEFAULT_REGION || 'eu-north-1', account: process.env.CDK_DEFAULT_ACCOUNT } },
[ /* MongoDbEc2Stack */ ]
);
