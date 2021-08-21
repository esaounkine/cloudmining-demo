<script lang="ts">
  import { config } from "../../state/state";
</script>

<h2>Config</h2>
<div>
  <span class="label">BTC price (US$):</span>
  <input type="number" bind:value={$config.btcPriceUsd} />
  <span class="note">this number will change randomly over time</span>
</div>
<div>
  <span class="label">Computations per block (ExaHash):</span>
  <input type="number" bind:value={$config.computationsPerBlockEh} />
  <span class="note">this number with increase over time</span>
</div>
<div>
  <span class="label">Reward per block (BTC):</span>
  <input type="number" step="0.01" bind:value={$config.rewardPerBlockBtc} />
  <span class="note">this number will decrease over time</span>
</div>
<div>
  <span class="label">Reinvest into the infrastructure:</span>
  <input type="number" step="0.1" bind:value={$config.reinvestShare} />
</div>

<style>
  .note {
    font-style: italic;
    color: grey;
  }
</style>
