import { head, tail } from "../shared/util";

const calculateMonthlyTh = (state: State, config: Config): number => {
  const hashRate = state.hashRate.purchased + state.hashRate.vested;
  return hashRate * config.secondsInMonth;
};

export const getLastMonth = (state: State): FarmOutput | undefined => {
  return head(state.output.months);
};

export const getFirstMonth = (state: State): FarmOutput | undefined => {
  return tail(state.output.months);
};

const addMonth = (state: State, month: FarmOutput): void => {
  state.output.months = [month, ...state.output.months];
};

const vest = (state: State, config: Config) => {
  const thProduced = calculateMonthlyTh(state, config);
  const blocksGuessed = thProduced / (1000 * config.computationsPerBlockPh);
  const btcRewarded = blocksGuessed * config.rewardPerBlockBtc;
  const usdEarned = Math.round(btcRewarded * config.btcPriceUsd);

  const reinvestAmountUsd = usdEarned * config.reinvestShare;
  const keepAmountUsd = usdEarned - reinvestAmountUsd;

  state.hashRate.vested += reinvestAmountUsd / config.costPerThUsd;

  addMonth(state, {
    thProduced,
    blocksGuessed,
    btcRewarded,
    usdEarned,
  });

  state.output.total = {
    thProduced: state.output.total.thProduced + thProduced,
    blocksGuessed: state.output.total.blocksGuessed + blocksGuessed,
    btcRewarded: state.output.total.btcRewarded + btcRewarded,
    usdEarned: state.output.total.usdEarned + keepAmountUsd,
  };
};

export const reduce = (state: State, config: Config): State => {
  vest(state, config);
  return state;
};
