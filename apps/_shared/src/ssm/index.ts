import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';

export const getParameter = async (name: string, throwError = true) => {
  if (!global.PARAMETERS) {
    global.PARAMETERS = {};
  }

  if (global.PARAMETERS[name]) {
    return global.PARAMETERS[name];
  }

  const ssmClient = new SSMClient();
  const parameter = await ssmClient.send(new GetParameterCommand({ Name: '/asecs/resources/assets-bucket-name' }));

  if (parameter.Parameter?.Value) {
    global.PARAMETERS[name] = parameter.Parameter?.Value;
    return parameter.Parameter?.Value;
  }

  if (throwError) {
    throw new Error(`SSM parameter "${name}" not found`);
  }

  return undefined;
};
