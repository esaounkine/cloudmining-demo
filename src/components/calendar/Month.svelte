<script lang="ts">
  import { _ } from "svelte-i18n";

  import { formatNumber } from "../../shared/util";

  export let state: any;
  export let index: number;
</script>

<div class="container month ">
  <h3>{index}</h3>
  <div>
    <span class="left"> {$_("month.performance")}: </span>
    <span class="right">
      {formatNumber(state.hashRate.purchased + state.hashRate.vested)} {$_("units.ths")}
    </span>
  </div>
  <div>
    <span class="left"> {$_("month.produced-th")}: </span>
    <span class="right digital">
      {formatNumber(state.producedTh, 0)} {$_("units.th")}
    </span>
  </div>
  <div>
    <span class="left"> {$_("month.blocks-guessed")}: </span>
    <span class="right digital">
      {formatNumber(state.blocksGuessed, 10)}
    </span>
  </div>
  <div>
    <span class="left"> {$_("month.rewarded")}: </span>
    <span class="right positive">
      {formatNumber(state.rewardedBtc)} {$_("units.btc")}
    </span>
  </div>
  <div>
    <span class="left"> {$_("month.earned")}: </span>
    <span class="right positive">
      {formatNumber(state.earnedUsd)} {$_("units.usd")}
    </span>
  </div>
  <div>
    <span class="left"> {$_("month.vested-th")}: </span>
    <span class="right positive">
      + {formatNumber(state.vestedTh)} {$_("units.th")}
    </span>
  </div>
  <div>
    <span class="left"> {$_("month.reinvest-amount")}: </span>
    <span class="right positive">
      {formatNumber(state.reinvestAmountUsd)} {$_("units.usd")}
    </span>
  </div>
  <div>
    <span class="left"> {$_("month.keep-amount")}: </span>
    <span class="right positive">
      {formatNumber(state.keepAmountUsd)} {$_("units.usd")}
    </span>
  </div>
  <div>
    <span class="left"> {$_("month.reductions")}: </span>
    <span class="right negative">
      {formatNumber(
        state.reductions.commission +
          state.reductions.tax +
          state.reductions.utilities
      )} {$_("units.usd")}
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
