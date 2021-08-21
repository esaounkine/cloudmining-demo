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

export const getTotals = (
  state: State
): { earnedUsd: number; spentUsd: number } => {
  return state.output.months.reduce(
    (acc, curr: FarmOutput) => {
      return {
        spentUsd: acc.spentUsd + curr.spentUsd,
        earnedUsd: acc.earnedUsd + curr.earnedUsd,
      };
    },
    { spentUsd: 0, earnedUsd: 0 }
  );
};

const vest = (state: State, config: Config) => {
  const producedTh = calculateMonthlyTh(state, config);
  const blocksGuessed = producedTh / (1000 * config.computationsPerBlockPh);
  const rewardedBtc = blocksGuessed * config.rewardPerBlockBtc;
  const earnedUsd = Math.round(rewardedBtc * config.btcPriceUsd);

  const reinvestAmountUsd = earnedUsd * config.reinvestShare;
  const keepAmountUsd = earnedUsd - reinvestAmountUsd;

  const vestedTh = reinvestAmountUsd / config.costPerThUsd;
  state.hashRate.vested += vestedTh;

  addMonth(state, {
    hashRate: {
      purchased: state.hashRate.purchased,
      vested: state.hashRate.vested,
    },
    producedTh,
    blocksGuessed,
    rewardedBtc,
    vestedTh,
    spentUsd: reinvestAmountUsd, // TODO rethink how we calculate the amonut spent every month
    earnedUsd,
    keepAmountUsd,
    reinvestAmountUsd,
  });
};

export const reduce = (state: State, config: Config): State => {
  vest(state, config);
  return state;
};
