import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Architecture, Code, LayerVersion, Runtime } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class LambdaLayerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Creating the Lambda Layer
    const badLayer = new LayerVersion(this, 'NextLambdaLayer', {
      layerVersionName: 'next-lambda-layer',
      compatibleRuntimes: [Runtime.NODEJS_20_X],
      compatibleArchitectures: [Architecture.ARM_64],
      code: Code.fromAsset(path.resolve(__dirname, 'next-lambda-layer.zip'))
    });

    new CfnOutput(this, 'NextLambdaLayerArn', {
      value: badLayer.layerVersionArn
    });
  }
}
