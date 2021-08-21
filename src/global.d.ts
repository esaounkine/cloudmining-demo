/// <reference types="svelte" />

interface FarmOutput {
  hashRate: HashRate;
  producedTh: number;
  blocksGuessed: number;
  rewardedBtc: number;
  vestedTh: number;
  spentUsd: number;
  earnedUsd: number;
  keepAmountUsd: number;
  reinvestAmountUsd: number;
}

interface HashRate {
  purchased: number;
  vested: number;
}

interface State {
  debug: boolean;
  hashRate: HashRate;
  startTime: Date;
  output: {
    months: FarmOutput[];
  };
}

interface Config {
  periodLength: number;
  secondsInMonth: number;
  kWtCostUsd: number;
  btcPriceUsd: number;
  rewardPerBlockBtc: number;
  computationsPerBlockPh: number;
  costPerThUsd: number;
  reinvestShare: number;
  hashRatePerUnitThs: number;
}
