import type { WafRule } from "@agapi-development-tools/sveltekit-aws-adapter/cdk";

/**
 * AWS managed rule groups
 * See: https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-list.html
 */
const managedRules: WafRule[] = [
  /**
   * AWS managed rule group for common rules
   * Summary: Baseline managed rule groups provide general protection against a wide variety of common threats.
   * See: https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-baseline.html
   */
  {
    name: 'AWS-AWSManagedRulesCommonRuleSet',
    priority: 2,
    statement: {
      managedRuleGroupStatement: {
        vendorName: 'AWS',
        name: 'AWSManagedRulesCommonRuleSet',
      },
    },
    overrideAction: { none: {} }, // use "none" to allow default managed rule behavior
    visibilityConfig: {
      cloudWatchMetricsEnabled: true,
      sampledRequestsEnabled: true,
      metricName: 'CommonRuleSet',
    },
  },
  /**
   * NOTE: this will block internal calls from the lambda function (this is why we need the AllowInternalLambdaCalls rule below)
   *
   * AWS managed rule group for bot control
   * Summary: Blocks requests from bots and crawlers.
   * See: https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html
   */
  /*
  {
    name: 'AWS-AWSManagedRulesBotControlRuleSet',
    priority: 3,
    statement: {
      managedRuleGroupStatement: {
        vendorName: 'AWS',
        name: 'AWSManagedRulesBotControlRuleSet',
        // optional: enable specific options like InspectionLevel
        managedRuleGroupConfigs: [{
          awsManagedRulesBotControlRuleSet: {
            inspectionLevel: 'COMMON' // or ADVANCED if we want to use it later
          }
        }]
      }
    },
    overrideAction: { none: {} },
    visibilityConfig: {
      sampledRequestsEnabled: true,
      cloudWatchMetricsEnabled: true,
      metricName: 'AWSBotControl'
    }
  },
  */
  /**
   * AWS managed rule group for IP reputation
   * Summary: Blocks requests from IP addresses that are known to be associated with malicious activity.
   * See: https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-ip-rep.html
   */
  {
    name: 'AWS-AWSManagedRulesAmazonIpReputationList',
    priority: 4,
    statement: {
      managedRuleGroupStatement: {
        vendorName: 'AWS',
        name: 'AWSManagedRulesAmazonIpReputationList',
      },
    },
    overrideAction: { none: {} },
    visibilityConfig: {
      cloudWatchMetricsEnabled: true,
      sampledRequestsEnabled: true,
      metricName: 'IpReputationList',
    },
  }
];

/**
 * Custom rules
 * Notice that "AllowInternalCalls" and "AllowAgapiBot" needs to be evaluated before blocking rules
 * See: https://docs.aws.amazon.com/waf/latest/developerguide/waf-rules.html
 */
const customRules: WafRule[] = [
  /**
   * Custom rule to allow internal calls (from the server lambda function or related services)
   * Summary: Allows requests from internal calls.
   * See: https://docs.aws.amazon.com/waf/latest/developerguide/waf-rules.html
   */
  {
    name: 'AllowInternalCalls',
    priority: 0,
    action: {
      allow: {}
    },
    statement: {
      byteMatchStatement: {
        searchString: 'a1f3e9d2-8c4f-4b9c-bf1a-7e3c2a6d10ef', // Replace with your secret
        fieldToMatch: {
          singleHeader: {
            name: 'x-internal-call'
          }
        },
        textTransformations: [
          {
            priority: 0,
            type: 'NONE'
          }
        ],
        positionalConstraint: 'EXACTLY'
      }
    },
    visibilityConfig: {
      sampledRequestsEnabled: true,
      cloudWatchMetricsEnabled: true,
      metricName: 'AllowInternalCalls'
    }
  },
  /**
   * Custom rule to allow Agapi bot
   * Summary: Allows requests from Agapi bot.
   * See: https://docs.aws.amazon.com/waf/latest/developerguide/waf-rules.html
   */
  {
    name: 'AllowAgapiBot',
    priority: 1,
    action: {
      allow: {}
    },
    statement: {
      byteMatchStatement: {
        searchString: 'agapi-bot',   // lowercase for case-insensitive match
        fieldToMatch: {
          singleHeader: {
            name: 'user-agent'
          }
        },
        textTransformations: [
          {
            priority: 0,
            type: 'LOWERCASE'       // Ensures case-insensitive match
          }
        ],
        positionalConstraint: 'CONTAINS' // Matches anywhere in the header string
      }
    },
    visibilityConfig: {
      sampledRequestsEnabled: true,
      cloudWatchMetricsEnabled: true,
      metricName: 'AllowAgapiBot'
    }
  },
  /**
   * Custom rate limiting rule
   * Summary: Prevents abuse by limiting the number of requests from a single IP address.
   * See: https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-groups-rate-limit.html
   */
  {
    name: 'RateLimit',
    priority: 5,
    statement: {
      rateBasedStatement: {
        limit: 10000,
        aggregateKeyType: 'IP'
      }
    },
    action: {
      // block: {} // Uncomment this to block the request rather than captcha
      captcha: {} // More friendly than blocking
    },
    visibilityConfig: {
      cloudWatchMetricsEnabled: true,
      metricName: 'RateLimitMetric',
      sampledRequestsEnabled: true
    }
  }
]

export const rules: WafRule[] = [...managedRules, ...customRules];
