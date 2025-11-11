#!/usr/bin/env node
import { Construct } from 'constructs';
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { LambdaLayerStack } from './stacks/next-lambda-layer';
import { AssetsBucketStack } from './stacks/assets-bucket';

type StackExtensionConstructor = new (scope: Construct, id: string, props?: StackProps) => Stack;

const stage = process.env.NODE_ENV || 'dev';

console.log('== Running AWS CDK for Global Stacks');
console.log(' - Stage:', stage);

const app = new App();

// Add more extensions stacks here if needed
const STACKS: StackExtensionConstructor[] = [
  LambdaLayerStack,
  AssetsBucketStack
];

for (const Stack of STACKS) {
  new Stack(app, Stack.name, {
    stackName: Stack.name
  });
}
