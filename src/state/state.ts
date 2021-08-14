import { Writable, writable } from "svelte/store";

export const config: Config = {
  monthHours: 24 * 30,
  periodLength: 10000,
  hashPerBlock: 1000000,
  blockReward: 6.75,
  prices: {
    btc: 47000,
  },
};

export const state: Writable<State> = writable({
  hashRate: {
    purchased: 1,
    vested: 0,
    total: 1,
  },
  startTime: new Date(),
  lastVest: new Date(),
  timeElapsed: 0,
  periods: 0,
  output: {
    total: {
      thProduced: 0,
      blocksGuessed: 0,
      btcRewarded: 0,
      usdEarned: 0,
    },
    lastMonth: {
      thProduced: 0,
      blocksGuessed: 0,
      btcRewarded: 0,
      usdEarned: 0,
    },
  },
});
