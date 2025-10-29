import { run, THROTTLE_RATES, type Config } from "@agapi-development-tools/site-load-tester";

const main = async () => {
  const config: Config = {
    agents: {
      amount: 100,
      timeout: 2,
      spawning: {
        rate: 1,
        perMinute: 1,
      },
      throttle: {
        type: 'fixed',
        includes: {
          '3G': 2,
          '4G': null, // Rest of agents will share this (14 left, share with FIBER = 7)
          '5G_LOW': 2,
          '5G_HIGH': 2,
          'FIBER': null,
        },
      },
    },
  }
  const { totalPercentiles } = await run('https://d35u6y3ipv7ocu.cloudfront.net', config);
  console.log(totalPercentiles);
}

main().catch(console.error);
