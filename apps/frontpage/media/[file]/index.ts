import type { APIGatewayProxyEvent } from 'aws-lambda';

import { getParameter } from '@asecs/shared/ssm';

/**
 * Local end-point for retrieving media files from the S3 bucket directly rather than through CloudFront (as in production).
 * Uses Vite proxy-handling to forward the request to AWS-Local-API-Gateway Vite Plugin.
 * NOTICE: Used in develpoment ONLY and never deployed to production.
 * @see {@link @agapi-development-tools/aws-local-api/vite}
 */
export const GET = async (event: APIGatewayProxyEvent ) => {
  const path = event.path;
  if (!path) {
    return { statusCode: 404, body: 'Not found' };
  }

  // Retrieve and cache SSM parameter in Global scope
  const assetsBucketName = await getParameter('/asecs/resources/assets-bucket-name', false); // Retrieve key from process.env?
  if (!assetsBucketName) {
    console.error('[media] failed to retrieve name of S3 bucket');
    return { statusCode: 404, body: 'Not found' };
  }

  const redirectUrl = `https://${assetsBucketName}.s3.amazonaws.com${path}`;
  console.log(`[REDIRECT] http://${event.headers.host}${path} ➜ ${redirectUrl}`);

  return { statusCode: 302, headers: { Location: redirectUrl } }; // 302 (temporary) to avoid browser caching
};
