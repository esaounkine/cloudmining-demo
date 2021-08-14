import { config } from "./state";

const calculateMonthlyTh = (hashRate: number): number => {
  return hashRate * config.secondsInMonth;
};

const vest = (state: State) => {
  state.lastVest = new Date();
  state.periods = Math.round(state.timeElapsed / config.periodLength);
  
  const thProduced = calculateMonthlyTh(
    state.hashRate.purchased + state.hashRate.vested
    );
    const blocksGuessed = thProduced / config.computationsPerBlockTh;
    const btcRewarded = blocksGuessed * config.rewardPerBlockBtc;
    const usdEarned = Math.round(btcRewarded * config.btcPriceUsd);
    
    const reinvestAmountUsd = usdEarned * config.reinvestShare;
    const keepAmountUsd = usdEarned - reinvestAmountUsd;
    
    state.hashRate.vested += reinvestAmountUsd / config.unitCostUsd;

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
