/// <reference types="svelte" />

interface FarmOutput {
  thProduced: number;
  blocksGuessed: number;
  btcRewarded: number;
  usdEarned: number;
}

interface State {
  debug: boolean;
  hashRate: {
    purchased: number;
    vested: number;
  };
  startTime: Date;
  timeElapsed: number;
  periods: number;
  lastVest: Date;
  output: {
    total: FarmOutput;
    lastMonth: FarmOutput;
  };
}

interface Config {
  periodLength: number;
  secondsInMonth: number;
  kWtCostUsd: number;
  btcPriceUsd: number;
  rewardPerBlockBtc: number;
  computationsPerBlockTh: number;
  costPerThUsd: number;
  reinvestShare: number;
  hashRatePerUnitThs: number;
}
