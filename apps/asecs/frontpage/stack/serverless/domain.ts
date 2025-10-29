export const getCertificate = (stage: string): string | undefined => {
  switch(stage) {
    case 'dev':
      return 'arn:aws:acm:us-east-1:390403853239:certificate/4fb10b81-b024-4193-872e-1ebfda58e14f';
    case 'feature':
      return 'arn:aws:acm:us-east-1:390403853239:certificate/4fb10b81-b024-4193-872e-1ebfda58e14f';
    case 'feature-2':
      return 'arn:aws:acm:us-east-1:390403853239:certificate/4fb10b81-b024-4193-872e-1ebfda58e14f';
    case 'stage':
      return 'arn:aws:acm:us-east-1:273354650290:certificate/e3977732-9760-44bd-878c-42819cc48c57';
    case 'prod':
      return 'arn:aws:acm:us-east-1:000000000000:certificate/00000000-0000-0000-0000-000000000000';
    default:
      throw new Error(`Unsupported stage: ${stage}`);
  }
}

export const getDomainName = (stage: string): string[] | undefined => {
  switch(stage) {
    case 'dev':
      return ['asecs-dev.alska.cloud']
    case 'stage':
      return ['asecs-stage.alska.cloud']
    case 'prod':
      return ['www.asecs.se', 'asecs.se']
    default:
      throw new Error(`Unsupported stage: ${stage}`);
  }
}

export const getAlternateNames = (stage: string): string[] | undefined => {
  switch(stage) {
    case 'dev':
    case 'stage':
    case 'prod':
      return undefined
    default:
      throw new Error(`Unsupported stage: ${stage}`);
  }
}
