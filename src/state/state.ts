import { Writable, writable } from "svelte/store";

export const config: Writable<Config> = writable({
  periodLength: 10000,
  secondsInMonth: 60 * 60 * 24 * 30,
  kWtCostUsd: 0.05,
  btcPriceUsd: 35000, // TODO fetch live BTC price
  rewardPerBlockBtc: 6.25, // TODO use a coefficient to predict reward adjustments
  // number is based on the assumption that a 100m TH/s pool requires 600 seconds to produce a block
  computationsPerBlockPh: 60000000, // TODO replace with a more accurate adjusted number of computations required on average
  costPerThUsd: 50,
  reinvestShare: 0.5, // reinvest half of all earned money
  hashRatePerUnitThs: 100,
});

export const state: Writable<State> = writable({
  debug: false,
  hashRate: {
    purchased: 100,
    vested: 0,
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
    months: [],
  },
});
