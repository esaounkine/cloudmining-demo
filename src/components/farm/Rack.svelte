<script lang="ts">
  export let machineType: "purchased" | "vested";
  export let units: number;
  export let totalHashRate: number;

  const machineTypeLabel = `${machineType
    .charAt(0)
    .toUpperCase()}${machineType.slice(1)}`;
</script>

<div class="farm {machineType}">
  <h2>{machineTypeLabel}</h2>
  <div>
    total: {totalHashRate} TH/s
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
</style>
