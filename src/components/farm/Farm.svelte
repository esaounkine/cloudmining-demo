<script lang="ts">
  import { state, config } from "../../state/state";
  import Rack from "./Rack.svelte";

  const hashRateToUnits = (
    thh: number
  ): { units: number; remainder: number } => {
    return {
      units: Math.floor(thh / config.hashRatePerUnitThs),
      remainder: Math.floor(thh % config.hashRatePerUnitThs),
    };
  };

  $: asics = {
    purchased: hashRateToUnits($state.hashRate.purchased),
    vested: hashRateToUnits($state.hashRate.vested),
  };
</script>

<h1>Farm</h1>
<div class="oneline">
  <Rack
    machineType="purchased"
    units={asics.purchased.units}
    totalHashRate={$state.hashRate.purchased}
  />

  <Rack
    machineType="vested"
    units={asics.vested.units}
    totalHashRate={$state.hashRate.vested}
  />
</div>
