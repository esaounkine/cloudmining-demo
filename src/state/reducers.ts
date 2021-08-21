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
        spentUsd: acc.spentUsd + 0,
        earnedUsd: acc.earnedUsd + curr.keepAmountUsd,
      };
    },
    { spentUsd: 0, earnedUsd: 0 }
  );
};

const calculateElectricityCostPerThUsd = (config: Config) => {
  const hoursPerMonth = 24 * 30;
  const totalConsumptionKW = config.unitConsumptionKWh * hoursPerMonth;
  const secondsPerMonth = 60 * 60 * hoursPerMonth;
  const totalHashRateTh = config.unitHashRateThs * secondsPerMonth;
  return totalConsumptionKW * config.costPerKWUsd / totalHashRateTh;
};

const calculateReductions = (
  earnedUsd: number,
  producedTh: number,
  config: Config
): Reductions => {
  return {
    commission: earnedUsd * config.commissionShare,
    tax: earnedUsd * config.taxShare,
    utilities: producedTh * calculateElectricityCostPerThUsd(config),
  };
};

const vest = (state: State, config: Config) => {
  const producedTh = calculateMonthlyTh(state, config);

  const blocksGuessed = producedTh / (config.computationsPerBlockEh * 1000000);
  const rewardedBtc = blocksGuessed * config.rewardPerBlockBtc;
  const earnedUsd = Math.round(rewardedBtc * config.btcPriceUsd);

  const reductions = calculateReductions(earnedUsd, producedTh, config);
  const reductionsUsd =
    reductions.commission + reductions.tax + reductions.utilities;
  const remainderUsd = earnedUsd - reductionsUsd;

  const reinvestAmountUsd = remainderUsd * config.reinvestShare;
  const keepAmountUsd = remainderUsd - reinvestAmountUsd;

  const vestedTh = reinvestAmountUsd / config.unitCostPerThUsd;
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
    earnedUsd,
    reductions,
    reinvestAmountUsd,
    keepAmountUsd,
  });
};

export const reduce = (state: State, config: Config): State => {
  vest(state, config);
  return state;
};
