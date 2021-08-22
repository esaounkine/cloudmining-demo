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
  return (totalConsumptionKW * config.costPerKWUsd) / totalHashRateTh;
};

const withValue = <T, R>(value: T, fn: (val: T) => R): R => {
  return fn(value);
};

const calculateReductions = (
  earnedUsd: number,
  producedTh: number,
  config: Config
): Reductions => {
  // TODO figure out what's the order of application of the commissions
  return withValue(
    producedTh * calculateElectricityCostPerThUsd(config),
    (utilities) => {
      const minusElectricity = earnedUsd - utilities;
      return withValue(
        minusElectricity * config.commissionShare,
        (commission) => {
          const minusCommission = minusElectricity - commission;
          return withValue(minusCommission * config.taxShare, (tax) => {
            const minusTax = minusCommission - tax;
            return { commission, tax, utilities };
          });
        }
      );
    }
  );
};

const applyCoefficient = (num: number, period: number, step: number) => {
  return num * (1 + period * step);
};

const vest = (state: State, config: Config) => {
  const period = state.output.months.length + 1;

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
    adjusted: {
      rewardPerBlockBtc: config.rewardPerBlockBtc,
      computationsPerBlock: config.computationsPerBlockEh,
      btcPriceUsd: config.btcPriceUsd,
    },
  });

  // update the config with the adjusted values
  config.rewardPerBlockBtc = applyCoefficient(
    config.rewardPerBlockBtc,
    period,
    -0.001 // block reward reduces by 0.1% every month
  );
  config.computationsPerBlockEh =
    applyCoefficient(
      config.computationsPerBlockEh * 1000000,
      period,
      0.005 // computations per block grow by 0.5% every month
    ) / 1000000;
  config.btcPriceUsd = applyCoefficient(
    config.btcPriceUsd,
    period,
    0.005 // btc price grows by 0.5% every month
  );
};

export const reduce = (
  state: State,
  config: Config
): { state: State; config: Config } => {
  vest(state, config);
  return { state, config };
};
