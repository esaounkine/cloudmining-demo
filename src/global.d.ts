/// <reference types="svelte" />

interface FarmOutput {
  hashRate: HashRate;
  producedTh: number;
  blocksGuessed: number;
  rewardedBtc: number;
  vestedTh: number;
  earnedUsd: number;
  keepAmountUsd: number;
  reinvestAmountUsd: number;
  reductions: Reductions;
  adjusted: {
    rewardPerBlockBtc: number;
    computationsPerBlock: number;
    btcPriceUsd: number;
  };
}

interface Reductions {
  commission: number;
  tax: number;
  utilities: number;
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
  secondsInMonth: number;
  kWtCostUsd: number;
  btcPriceUsd: number;
  rewardPerBlockBtc: number;
  computationsPerBlockEh: number;
  unitCostPerThUsd: number;
  reinvestShare: number;
  commissionShare: number;
  taxShare: number;
  costPerKWUsd: number;
  unitConsumptionKWh: number;
  unitHashRateThs: number;
}
