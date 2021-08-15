<script lang="ts">
  import { config, state } from "../../state/state";
</script>

<div>
  <div class="oneline">
    <div class="label">Spent:</div>
    <div class="negative">
      -${$state.hashRate.purchased * $config.costPerThUsd}
    </div>
  </div>
  <div class="oneline">
    <div class="label">Earned:</div>
    <div class="positive">
      ${$state.output.total.usdEarned}
    </div>
  </div>
</div>

<style>
    .negative {
        color: red;
    }
    .positive {
        color:  green;
    }
</style>
