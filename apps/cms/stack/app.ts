import { App, StackProps } from 'aws-cdk-lib';
import { MongoDbEc2Stack } from './stacks/mongodb-stack';

const app = new App();

const DEFAULT_PROPS: StackProps = {
  env: {
    region: process.env.CDK_DEFAULT_REGION || 'eu-north-1',
    account: process.env.CDK_DEFAULT_ACCOUNT
  }
};

new MongoDbEc2Stack(app, 'mongodb', DEFAULT_PROPS);

app.synth();
