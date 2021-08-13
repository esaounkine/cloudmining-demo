export const VESTING_PERIOD = 10000;

export const updateTotalAsics = (state: State) => {
  state.thh.total = state.thh.purchased + state.thh.vested;
  return state;
};

const reinvestToBuyAsics = (state: State) => {
  state.periods = Math.round(state.timeElapsed / VESTING_PERIOD);
  state.thh.vested = state.periods;
  updateTotalAsics(state);
};

export const reduce = (state: State): State => {
  reinvestToBuyAsics(state);
  state.timeElapsed = Date.now() - state.startTime.getTime();
  return state;
};
