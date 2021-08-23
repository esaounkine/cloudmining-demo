<script lang="ts">
  import { _ } from "svelte-i18n";

  import { config } from "../../state/state";
</script>

<h2>{$_("config.title")}</h2>
<div>
  <span class="label">{$_("config.btc-price")}:</span>
  <input type="number" bind:value={$config.btcPriceUsd} />
</div>
<div>
  <span class="label">{$_("config.computations-per-block-eh")}:</span>
  <input type="number" bind:value={$config.computationsPerBlockEh} />
</div>
<div>
  <span class="label">{$_("config.reward-per-block")}:</span>
  <input type="number" step="0.01" bind:value={$config.rewardPerBlockBtc} />
</div>
<div>
  <span class="label">{$_("config.reinvest-share")}:</span>
  <input type="number" step="0.1" bind:value={$config.reinvestShare} />
</div>

<style>
</style>
