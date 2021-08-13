/// <reference types="svelte" />

interface State {
  thh: {
    purchased: number;
    vested: number;
    total: number;
  },
  startTime: Date;
  timeElapsed: number;
  periods: number;
  periodLength: number;
}
