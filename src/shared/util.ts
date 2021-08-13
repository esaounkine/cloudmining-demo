export const formatTime = (ms: number, periodLength: number) => {
  return Math.round(ms / periodLength) + " months";
};
