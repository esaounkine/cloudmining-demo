<script lang="ts">
  import { _ } from "svelte-i18n";

  import { state, config } from "../../state/state";
  import Rack from "./Rack.svelte";

  const hashRateToUnits = (
    thh: number
  ): { units: number; remainder: number } => {
    return {
      units: Math.floor(thh / $config.unitHashRateThs),
      remainder: Math.floor(thh % $config.unitHashRateThs),
    };
  };

  $: asics = {
    purchased: hashRateToUnits($state.hashRate.purchased),
    vested: hashRateToUnits($state.hashRate.vested),
  };
</script>

<h1>{$_("farm.title")}</h1>
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
