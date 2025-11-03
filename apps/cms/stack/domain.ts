export const getCertificate = (stage: string): string | undefined => {
  switch(stage) {
    case 'dev':
      return 'arn:aws:acm:us-east-1:266671103811:certificate/d82a9c30-1eb0-4536-b54a-1cdb57185fd1';
    case 'stage':
      return undefined;
    case 'prod':
      return undefined;
    default:
      throw new Error(`Unsupported stage: ${stage}`);
  }
};

export const getDomainName = (stage: string): string[] | undefined => {
  switch(stage) {
    case 'dev':
      return ['asecs-dev-cms.alska.cloud'];
    case 'stage':
      return undefined;
    case 'prod':
      return ['admin.asecs.com'];
    default:
      throw new Error(`Unsupported stage: ${stage}`);
  }
};

export const getAlternateNames = (stage: string): string[] | undefined => {
  switch(stage) {
    case 'dev':
    case 'stage':
    case 'prod':
      return undefined;
    default:
      throw new Error(`Unsupported stage: ${stage}`);
  }
};
