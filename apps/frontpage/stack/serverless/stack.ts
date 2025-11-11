#!/usr/bin/env node
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { App, Fn, Stack } from 'aws-cdk-lib';

import { SvelteKitApp } from '@agapi-development-tools/sveltekit-aws-adapter/cdk';

import { rules as wafRules } from './waf-rules.js';

// @ts-expect-error (may not been generated yet)
import { manifest } from '../../.svelte-kit/sveltekit-aws-adapter/server/manifest.js';
import { getCertificate, getDomainName, getAlternateNames } from './domain.js';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { S3StaticWebsiteOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { AllowedMethods, ViewerProtocolPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Role } from 'aws-cdk-lib/aws-iam';
import { CrossAccountZoneDelegationRecord, PublicHostedZone } from 'aws-cdk-lib/aws-route53';
import { Certificate, CertificateValidation } from 'aws-cdk-lib/aws-certificatemanager';

// (may not been generated yet)
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
    // certificateArn: certificateArn,
    // domainNames: domainNames,
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
      /*
      viewerResponse: {
        file: resolve(__dirname, './function-associations/viewer-response.js'),
        description: 'Viewer response function for logging cache hits'
      }
      */
    }
  },
  app: {
    entry: join(buildFolder, 'index.js'),
    cookieAllowList: [
      '__asecs_identifier'
    ],
    lambdaOptions: {
      memorySize: 3008, // Max memory/vCPU
      runtime: Runtime.NODEJS_22_X,
      bundling: {
        sourceMap: true // Boolean(stage !== 'prod') Disable in production?
      },
      layers: [
        {
          // Package 'sharp' as Linux-ARM64 binary for Lambda compatibility
          name: 'SharpLayer',
          arn: 'arn:aws:lambda:eu-north-1:266671103811:layer:next-lambda-layer:1' // LayerVersion.fromLayerVersionArn(app, 'SharpLayer', 'arn:aws:lambda:eu-north-1:266671103811:layer:next-lambda-layer:1')
        }
      ]
    }
  },
  custom: (scope, _id, _stackProps, resources) => {
    // Import the bucket ARN from the AssetsBucketStack CloudFormation export
    const assetsBucketArn = Fn.importValue('AssetsBucketStack-AssetsBucketArn');

    // Create a bucket reference from the ARN
    const assetsBucket = Bucket.fromBucketArn(scope, 'AssetsBucket', assetsBucketArn);

    // Use S3StaticWebsiteOrigin for public buckets (works across stacks)
    const assetsOrigin = new S3StaticWebsiteOrigin(assetsBucket);
    resources.cloudfront.addBehavior('media/*', assetsOrigin, {
      allowedMethods: AllowedMethods.ALLOW_GET_HEAD,
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS
    });

    const subDomainHostedZone = new PublicHostedZone(scope, 'AsecsDevSubDomainHostedZone', {
      zoneName: 'dev.asecs.alska.cloud'
    });

    // Construct the ARN for our cross account role
    const delegationRoleArn = Stack.of(scope).formatArn({
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
      resource: 'role',
      resourceName: 'AlskaCloudZoneOrganizationRole',
      service: 'iam'
    });

    // Get the role by ARN
    const delegationRole = Role.fromRoleArn(scope, 'DelegationRole', delegationRoleArn);

    new CrossAccountZoneDelegationRecord(scope, 'DelegationRecord', {
      delegationRole,
      delegatedZone: subDomainHostedZone,
      parentHostedZoneName: 'alska.cloud'
    });

    const certificate = new Certificate(scope, 'appSubDomainHostedZoneCert', {
      domainName: 'asecs.dev-asecs.alska.cloud',
      validation: CertificateValidation.fromDns(subDomainHostedZone)
    });
  }
},
// Explicit region is required for cross-region references
{ env: { region: process.env.CDK_DEFAULT_REGION || 'eu-north-1', account: process.env.CDK_DEFAULT_ACCOUNT } },
[]
);
