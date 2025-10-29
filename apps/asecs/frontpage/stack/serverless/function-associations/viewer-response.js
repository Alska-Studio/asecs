/// <reference types="./types" />

/**
 * This function is used to log cached requests paths to CloudWatch logs.
 *
 * @param event {AWSCloudFrontFunction.Event}
 * @returns {AWSCloudFrontFunction.Response}
*/
async function handler(event) {
  return event.response;
}
