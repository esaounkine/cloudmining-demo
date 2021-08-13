import { Writable, writable } from "svelte/store";

export const state: Writable<State> = writable({
  thh: {
    purchased: 1,
    vested: 0,
    total: 1,
  },
  startTime: new Date(),
  timeElapsed: 0,
  periods: 0,
  periodLength: 5000,
});
