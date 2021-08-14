import { config } from "./state";

const secondsInMonth = 60 * 60 * 24 * 30;
const kWtCostUsd = 0.05;
const btcPriceUsd = 47000; // TODO fetch live BTC price
const rewardPerBlockBtc = 6.25; // TODO use a coefficient to predict reward adjustments
// number is based on the assumption that a 100m TH/s pool requires 600 seconds to produce a block
const computationsPerBlockTh = 60000000000; // TODO replace with a more accurate adjusted number of computations required on average
const unitCostUsd = 50; // TODO clarify
const reinvestShare = 0.5; // reinvest half of all earned money

const calculateMonthlyTh = (hashRate: number): number => {
  return hashRate * secondsInMonth;
};

const vest = (state: State) => {
  state.lastVest = new Date();
  state.periods = Math.round(state.timeElapsed / config.periodLength);
  
  const thProduced = calculateMonthlyTh(
    state.hashRate.purchased + state.hashRate.vested
    );
    const blocksGuessed = thProduced / computationsPerBlockTh;
    const btcRewarded = blocksGuessed * rewardPerBlockBtc;
    const usdEarned = Math.round(btcRewarded * btcPriceUsd);
    
    const reinvestAmountUsd = usdEarned * reinvestShare;
    const keepAmountUsd = usdEarned - reinvestAmountUsd;
    
    state.hashRate.vested += reinvestAmountUsd / unitCostUsd;

    state.output.lastMonth = {
      thProduced,
      blocksGuessed,
      btcRewarded,
      usdEarned,
    };
    
    state.output.total = {
      thProduced: state.output.total.thProduced + thProduced,
      blocksGuessed: state.output.total.blocksGuessed + blocksGuessed,
      btcRewarded: state.output.total.btcRewarded + btcRewarded,
      usdEarned: state.output.total.usdEarned + keepAmountUsd,
    };
};

export const reduce = (state: State): State => {
  state.timeElapsed = Date.now() - state.startTime.getTime();
  const timeSinceLastVest = Date.now() - state.lastVest.getTime();
  if (timeSinceLastVest >= config.periodLength) {
    vest(state);
  }
  return state;
};
