<script lang="ts">
  import { getTotals } from "../../state/reducers";
  import { state } from "../../state/state";

  $: total = getTotals($state);
</script>

<div>
  <div class="oneline">
    <div class="label">Spent:</div>
    <div class="negative">
      ${total.spentUsd}
    </div>
  </div>
  <div class="oneline">
    <div class="label">Earned:</div>
    <div class="positive">
      ${total.earnedUsd}
    </div>
  </div>
</div>

<style>
  .negative {
    color: red;
  }
  .positive {
    color: green;
  }
</style>
