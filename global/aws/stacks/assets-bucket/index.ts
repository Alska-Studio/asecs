import { Construct } from "constructs";
import { CfnOutput, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";

import { BlockPublicAccess, Bucket, HttpMethods, ObjectOwnership } from 'aws-cdk-lib/aws-s3';
import { StringParameter } from "aws-cdk-lib/aws-ssm";

export class AssetsBucketStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    // Creating the Lambda Layer
    const assetsBucket = new Bucket(this, 'AssetsBucket', {
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error.html',
      publicReadAccess: true,
      objectOwnership: ObjectOwnership.OBJECT_WRITER,
      blockPublicAccess: new BlockPublicAccess({
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false
      }),
      cors: [
        {
          allowedMethods: [HttpMethods.GET, HttpMethods.HEAD],
          allowedOrigins: ['*']
        }
      ]
    });

    new StringParameter(this, 'AssetsBucketNameParam', {
      parameterName: '/asecs/resources/assets-bucket-name',
      stringValue: assetsBucket.bucketName,
    });


    new CfnOutput(this, 'AssetsBucketArn', {
      value: assetsBucket.bucketArn,
      exportName: 'AssetsBucketStack-AssetsBucketArn'
    });

    new CfnOutput(this, 'AssetsBucketName', {
      value: assetsBucket.bucketName,
      exportName: 'AssetsBucketStack-AssetsBucketName'
    });

    new CfnOutput(this, 'AssetsBucketWebsiteUrl', {
      value: assetsBucket.bucketWebsiteUrl,
      description: 'S3 Static Website URL',
      exportName: 'AssetsBucketStack-AssetsBucketWebsiteUrl'
    });
  }
}
