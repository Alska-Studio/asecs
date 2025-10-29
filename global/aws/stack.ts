#!/usr/bin/env node
import { Construct } from 'constructs';
import { App, Stack, StackProps } from 'aws-cdk-lib';

type StackExtensionConstructor = new (scope: Construct, props?: StackProps) => Stack;

const stage = process.env.NODE_ENV || 'dev';

console.log('== Running AWS CDK for Global Stacks');
console.log(' - Stage:', stage);

const app = new App();

// Add more extensions stacks here if needed
const STACKS: StackExtensionConstructor[] = [];

for (const Stack of STACKS) {
  new Stack(app);
}
