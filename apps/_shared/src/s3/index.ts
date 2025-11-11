import path from 'node:path';
import { S3Client, HeadObjectCommand, DeleteObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';

export const fileExists = async (bucketName: string, key: string): Promise<boolean> => {
  if (!global.BUCKETS_EXISTS) {
    global.BUCKETS_EXISTS = {};
  }

  if (global.BUCKETS_EXISTS[path.posix.join(bucketName, key)]) {
    return true;
  }

  try {
    const s3Client = new S3Client();
    const command = new HeadObjectCommand({ Bucket: bucketName, Key: key });
    const response = await s3Client.send(command);

    if (response.$metadata.httpStatusCode === 200) {
      return global.BUCKETS_EXISTS[path.posix.join(bucketName, key)] = true;
    }
  } catch (_error) {
    return BUCKETS_EXISTS[bucketName] = false;
  }
  return false;
};

/**
 * Checks if any file exists matching a prefix pattern (e.g., "detail-1." will match "detail-1.jpg", "detail-1.png", etc.)
 * @param bucketName - The S3 bucket name
 * @param prefix - The prefix pattern to search for (e.g., "detail-1." or "media/detail-1.")
 * @returns Promise<boolean> - True if any file matching the prefix exists
 */
export const fileExistsWithPrefix = async (bucketName: string, prefix: string): Promise<boolean> => {
  const s3Client = new S3Client();

  try {
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: prefix,
      MaxKeys: 1 // Only need to know if at least one exists
    });

    const response = await s3Client.send(command);
    return Boolean(response.Contents?.length);
  } catch (_error) {
    return false;
  }
};

export const deleteFile = async (bucketName: string, key: string): Promise<boolean> => {
  const s3Client = new S3Client();
  const command = new DeleteObjectCommand({ Bucket: bucketName, Key: key });
  const response = await s3Client.send(command);
  if (response.$metadata.httpStatusCode === 204) {
    return true;
  }
  return false;
};
