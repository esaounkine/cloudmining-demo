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
<div>
  <span class="label">{$_("config.kwt-cost")}:</span>
  <input type="number" step="0.1" bind:value={$config.kWtCostUsd} />
</div>
<div>
  <span class="label">{$_("config.commission-share")}:</span>
  <input type="number" step="0.1" bind:value={$config.commissionShare} />
</div>
<div>
  <span class="label">{$_("config.tax-share")}:</span>
  <input type="number" step="0.1" bind:value={$config.taxShare} />
</div>
<div>
  <span class="label">{$_("config.unit-hashrate")}:</span>
  <input type="number" step="0.1" bind:value={$config.unitHashRateThs} />
</div>
<div>
  <span class="label">{$_("config.unit-consumption")}:</span>
  <input type="number" step="0.1" bind:value={$config.unitConsumptionKWh} />
</div>

<style>
</style>
