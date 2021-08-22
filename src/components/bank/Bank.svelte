<script lang="ts">
  import { formatNumber } from "../../shared/util";

  import { getTotals } from "../../state/reducers";
  import { state } from "../../state/state";

  $: total = getTotals($state);
</script>

<div>
  <i class="fa fa-bank" />

  <div class="oneline">
    <div class="label">Spent:</div>
    <div class="negative">
      ${formatNumber(total.spentUsd, 0)}
    </div>
  </div>
  <div class="oneline">
    <div class="label">Earned:</div>
    <div class="positive">
      ${formatNumber(total.earnedUsd, 0)}
    </div>
  </div>
</div>

<style>
</style>
