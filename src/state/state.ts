import { Writable, writable } from "svelte/store";

export const config: Writable<Config> = writable({
  secondsInMonth: 60 * 60 * 24 * 30,
  kWtCostUsd: 0.05,
  btcPriceUsd: 35000, // TODO fetch live BTC price
  rewardPerBlockBtc: 6.25,
  // number is based on the assumption that a 100m TH/s pool requires 600 seconds to produce a block
  computationsPerBlockEh: 60000,
  unitCostPerThUsd: 50,
  reinvestShare: 0.5,
  costPerKWUsd: 0.05,
  unitConsumptionKWh: 2.3,
  unitHashRateThs: 30,
  taxShare: 0,
  commissionShare: 0.05,
});

export const state: Writable<State> = writable({
  debug: false,
  hashRate: {
    purchased: 100,
    vested: 0,
  },
  startTime: new Date(),
  output: {
    total: {
      thProduced: 0,
      blocksGuessed: 0,
      btcRewarded: 0,
      earnedUsd: 0,
    },
    months: [],
  },
});
