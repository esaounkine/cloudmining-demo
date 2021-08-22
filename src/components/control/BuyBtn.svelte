<script lang="ts">
  import { _ } from "svelte-i18n";

  import { state } from "../../state/state";

  const purchaseAmount = 100;

  const increase = () => {
    $state.hashRate.purchased += purchaseAmount;
  };
</script>

<button on:click={increase}>+{purchaseAmount} {$_("units.th")}</button>

<style>
  button {
    margin-top: 5px;
  }
</style>
