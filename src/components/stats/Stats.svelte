<script lang="ts">
  import { config, state } from "../../state/state";
</script>

<h2>Stats</h2>

{#if $state.debug}
  <pre>{JSON.stringify($state, "", 2)}</pre>
{/if}

<div>
  <span class="label">BTC price:</span>
  ${$config.btcPriceUsd}
  <span class="note">this number will change randomly over time</span>
</div>
<div>
  <span class="label">Computations per block:</span>
  {$config.computationsPerBlockPh} PH
  <span class="note">this number with increase over time</span>
</div>
<div>
  <span class="label">Reward per block:</span>
  {$config.rewardPerBlockBtc} BTC
  <span class="note">this number will decrease over time</span>
</div>
<div>
  <span class="label">Reinvest into the infrastructure:</span>
  {$config.reinvestShare}
</div>
<div>
  <span class="label">Month duration:</span>
  {$config.periodLength / 1000} s
</div>

<style>
  .note {
    font-style: italic;
    color: grey;
  }
</style>