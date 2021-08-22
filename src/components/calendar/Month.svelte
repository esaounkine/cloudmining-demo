<script lang="ts">
  import { formatNumber } from "../../shared/util";

  export let state: any;
  export let index: number;
</script>

<div class="container month ">
  <h3>{index}</h3>
  <div>
    <span class="left"> Performance: </span>
    <span class="right">
      {formatNumber(state.hashRate.purchased + state.hashRate.vested)} TH/s
    </span>
  </div>
  <div>
    <span class="left"> Produced: </span>
    <span class="right digital">
      {formatNumber(state.producedTh, 0)} TH
    </span>
  </div>
  <div>
    <span class="left"> Blocks: </span>
    <span class="right digital">
      {formatNumber(state.blocksGuessed, 10)}
    </span>
  </div>
  <div>
    <span class="left"> Rewarded: </span>
    <span class="right positive">
      {formatNumber(state.rewardedBtc)} BTC
    </span>
  </div>
  <div>
    <span class="left"> Earned: </span>
    <span class="right positive">
      ${formatNumber(state.earnedUsd)}
    </span>
  </div>
  <div>
    <span class="left"> Vested TH: </span>
    <span class="right positive">
      + {formatNumber(state.vestedTh)} TH
    </span>
  </div>
  <div>
    <span class="left"> Reinvest amount: </span>
    <span class="right positive">
      ${formatNumber(state.reinvestAmountUsd)}
    </span>
  </div>
  <div>
    <span class="left"> Keep Amount: </span>
    <span class="right positive">
      ${formatNumber(state.keepAmountUsd)}
    </span>
  </div>
  <div>
    <span class="left"> Reductions: </span>
    <span class="right negative">
      ${formatNumber(
        state.reductions.commission +
          state.reductions.tax +
          state.reductions.utilities
      )}
    </span>
  </div>
</div>

<style>
  .container {
    border: 1px solid black;
    min-height: 100px;
    min-width: 200px;
    padding: 10px;
    font-size: 0.75em;
  }
  .left {
    width: 50%;
    text-align: right;
  }
  .right {
    width: 50%;
    text-align: left;
  }
</style>
