import type { Payload } from 'payload';
import path from 'node:path';

import { deleteFile, fileExistsWithPrefix } from '@asecs/shared/s3';
import { getParameter } from '@asecs/shared/ssm';

const BUCKET_PAREMETER_NAME = '/asecs/resources/assets-bucket-name';

const checkIfFileExists = async (payload: Payload, fileName: string): Promise<string | undefined> => {
  // Check if already exists in database
  const id = (await payload.find({
    collection: 'media',
    where: { filename: { like: `${path.parse(fileName).name}.` } }, // Starts with filename without extension (may exist .png or .jpg)
    limit: 1
  })).docs[0]?.id;

  const bucketName = await getParameter(BUCKET_PAREMETER_NAME);
  const existInS3 = await fileExistsWithPrefix(bucketName, `media/${path.parse(fileName).name}.`);

  // console.log(fileName, { db: Boolean(id), s3: existInS3 });

  if (existInS3 && !id) {
    const bucketName = await getParameter(BUCKET_PAREMETER_NAME);
    const file = `media/${fileName}`;
    await deleteFile(bucketName, file);
  }

  if (!existInS3 && id) {
    await payload.delete({
      collection: 'media',
      where: { filename: { equals: fileName } }
    });
  }

  return existInS3 && id ? id : undefined;
};

export const uploadMedia = async (payload: Payload, file: {
  filePath: string;
  fileName: string;
  fileData: Buffer;
}) => {
  const id = await checkIfFileExists(payload, file.fileName);
  if (id) {
    console.log(`[MEDIA:INFO] ✗ Image: "${file.fileName}" already exists, skipping...`);
    return id;
  } else {
    const media = await payload.create({
      collection: 'media',
      data: {
        title: path.parse(file.filePath).name,
        alt: `Detail image ${path.parse(file.filePath).name}`
      },
      file: {
        data: file.fileData,
        mimetype: `image/${path.extname(file.filePath).slice(1)}`,
        name: file.fileName,
        size: file.fileData.length
      }
    });
    console.log(`[MEDIA:INFO] ✓ Uploaded: ${file.fileName}`);
    return media.id;
  }
};
