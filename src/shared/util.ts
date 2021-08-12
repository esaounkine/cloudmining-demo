export const formatTime = (ms: number) => {
  if (ms < 1000) {
    return `${ms} ms`;
  } else if (ms < 60000) {
    return `${Math.round(ms / 1000)} sec`;
  } else if (ms < 60 * 60 * 1000) {
    return `${Math.round(ms / 1000 / 60)} min`;
  } else {
    return `${Math.round(ms / 1000 / 60 / 60)} h`;
  }
};
