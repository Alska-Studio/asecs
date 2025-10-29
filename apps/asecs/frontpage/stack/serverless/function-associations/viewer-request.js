/// <reference types="./types" />
import cf from 'cloudfront';

const redirectsKvs = cf.kvs();

// Hardcoded values from environment
const AVAILABLE_MARKETS = ['SE','NO','DK','FI','AT','BE','DE','FR','IE','NL','GB','ES','GR','IT','MT','PT','BG','CZ','HU','PL','RO','SK','EE','LV','LT','HR','SI'];
const DEFAULT_MARKET = 'SE';

/**
 * CloudFront Function to normalize query parameters and update headers.
 *
 * This function normalizes query parameters by encoding problematic characters in the keys.
 * It handles keys that include "/", "[" and "]" by URL encoding them.
 * It also sets the x-forwarded-host header to the value of the host header.
 * Additionally, it redirects www traffic to the non-www domain.
 * It also handles country redirects based on the __agapi_selected_country cookie.
 *
 * @param event {AWSCloudFrontFunction.Event}
 * @returns {AWSCloudFrontFunction.Response}
 */
async function handler(event) {
  const request = event.request;

  // Check for www redirect
  const host = request.headers.host.value;
  if (host.startsWith('www.')) {
    const nonWwwHost = host.substring(4); // Remove 'www.' prefix
    const redirectUrl = `https://${nonWwwHost}${request.uri}`;

    // Add query string if present
    const queryString = Object.keys(request.querystring).length > 0
      ? '?' + Object.keys(request.querystring).map(key =>
          `${key}=${request.querystring[key].value}`
        ).join('&')
      : '';

    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        location: { value: redirectUrl + queryString }
      }
    };
  }

  request.headers["x-forwarded-host"] = request.headers.host;
  request.headers['x-viewer-country'] = request.headers['cloudfront-viewer-country'];

  // Normalize query parameters
  for (var qrsKey in request.querystring) {
    if (qrsKey.includes("/") || qrsKey.includes("[") || qrsKey.includes("]")) {
      request.querystring[encodeURIComponent(qrsKey)] = request.querystring[qrsKey];
      delete request.querystring[qrsKey];
    }
  }


  const key = request.uri;
  try {
    const redirectUrl = await redirectsKvs.get(key);
    if (redirectUrl) {
      return {
        statusCode: 301,
        statusDescription: 'Moved', headers: { location: { value: redirectUrl } }
      };
    }
  } catch (e) {
    // Do nothing, return request as is
  }

  return request;
}
