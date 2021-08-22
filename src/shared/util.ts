export const head = <T>(list: T[]): T | undefined => {
  return list && list.length && list[0];
};

export const tail = <T>(list: T[]): T | undefined => {
  return list && list.length && list[list.length - 1];
};

export const formatTime = (ms: number, periodLength: number) => {
  return Math.round(ms / periodLength) + " months";
};

export const formatNumber = (num: number, precision: number = 2) => {
  const coef = Math.pow(10, precision);
  return Math.round(num * coef) / coef;
};