import { Writable, writable } from "svelte/store";

export const state: Writable<State> = writable({
  purchasedAsics: 1,
  vestedAsics: 0,
  totalAsics: 0,
  startTime: new Date(),
  timeElapsed: 0,
  periods: 0,
  periodLength: 5000,
});
