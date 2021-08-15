<script lang="ts">
  import { config } from "../../state/state";

  export let machineType: "purchased" | "vested";
  export let units: number;
  export let totalHashRate: number;

  $: totalValue = totalHashRate * config.costPerThUsd;

  const machineTypeLabel = `${machineType
    .charAt(0)
    .toUpperCase()}${machineType.slice(1)}`;
</script>

<div class="farm {machineType}">
  <h2>{machineTypeLabel}</h2>
  <div class="totals">
    <div>
      <div class="label">Hash Rate:</div>
      {totalHashRate} TH/s
    </div>
    <div>
      <div class="label">Value:</div>
      ${totalValue}
    </div>
  </div>
  <div>
    <img src="img/asic-{machineType}.png" alt={machineTypeLabel} />
    <span class="center">
      x {units}
    </span>
  </div>
</div>

<style>
  .purchased {
    color: green;
  }
  .vested {
    color: blue;
  }
  .farm img {
    height: 40px;
  }
  .totals {
    margin: 10px 0;
  }
</style>
