const vest = (state: State) => {
  state.periods = Math.round(state.timeElapsed / state.periodLength);
  state.thh.vested = state.periods;
  state.lastVest = new Date();
};

export const reduce = (state: State): State => {
  state.timeElapsed = Date.now() - state.startTime.getTime();
  const timeSinceLastVest = Date.now() - state.lastVest.getTime();
  if(timeSinceLastVest >= state.periodLength) {
    vest(state);
  }
  return state;
};
