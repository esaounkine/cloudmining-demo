/// <reference types="svelte" />

interface FarmOutput {
  thProduced: number;
  blocksGuessed: number;
  btcRewarded: number;
  usdEarned: number;
}

interface State {
  hashRate: {
    purchased: number;
    vested: number;
    total: number;
  },
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
  monthHours: number;
  periodLength: number;
  hashPerBlock: number;
  blockReward: number;
  prices: {
    btc: number;
  };
}