#!/usr/bin/env node
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { App } from 'aws-cdk-lib';

import { SvelteKitApp } from '@agapi-development-tools/sveltekit-aws-adapter/cdk';

import { rules as wafRules } from './waf-rules.js';

// @ts-ignore (may not been generated yet)
import { manifest } from '../../.svelte-kit/sveltekit-aws-adapter/server/manifest.js';
import { getCertificate, getDomainName, getAlternateNames } from './domain.js';

// @ts-ignore (may not been generated yet)
// import { prerender } from '../../.svelte-kit/sveltekit-aws-adapter/server/prerender.js';

const __dirname = dirname(fileURLToPath(import.meta.url)); // Directory of this file (app.ts)

// Sveltekit build folder (this is where the build files are stored when building the app)
const buildFolder = '.svelte-kit/sveltekit-aws-adapter';

const stage = process.env.NODE_ENV || 'dev';
const brand = 'asecs';

const certificateArn = getCertificate(stage);
const domainNames = getDomainName(stage);
const alternateNames = getAlternateNames(stage);

console.log('== Running AWS CDK');
console.log(' - Stage:', stage);
console.log(' - Certificate:', certificateArn);
console.log(' - Domain name:', domainNames);
console.log(' - Alternate names:', alternateNames);

const app = new App();

// AWS CDK Cloudformation Stack
new SvelteKitApp(app, `${brand}-site-${stage}`, {
  manifest: manifest,
  stackNamePrefix: `${brand}-site-${stage}`,
  vars: {
    stage: stage,
    brand: brand,
    brandSlug: brand
  },
  cdn: {
    certificateArn: certificateArn,
    domainNames: domainNames,
    alternateNames: alternateNames,
    waf: {
      enabled: ['stage', 'prod'].includes(stage), // Enable only in production and stage
      rules: wafRules
    },
    functionAssociations: {
      viewerRequest: {
        file: resolve(__dirname, './function-associations/viewer-request.js'),
        description: 'Viewer request function for redirecting requests and adding preview support for Storyblok',
        associateKeyValueStore: `${brand}-redirects-${stage}`
      },
      /*
      viewerResponse: {
        file: resolve(__dirname, './function-associations/viewer-response.js'),
        description: 'Viewer response function for logging cache hits'
      }
      */
    },
  },
  app: {
    entry: join(buildFolder, 'index.js'),
    cookieAllowList: [
      '__asecs_identifier'
    ],
    lambdaOptions: {
      memorySize: 3008, // Max memory/vCPU
      bundling: {
        sourceMap: true // Boolean(stage !== 'prod') Disable in production?
      }
    }
  }
},
// Explicit region is required for cross-region references
{ env: { region: process.env.CDK_DEFAULT_REGION || 'eu-west-1', account: process.env.CDK_DEFAULT_ACCOUNT } },
[]
);
