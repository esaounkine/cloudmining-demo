<script lang="ts">
  import { state } from "../../state/state";

  const purchaseAmount = 100;

  const increase = () => {
    $state.hashRate.purchased += purchaseAmount;
  };
</script>

<button on:click={increase}>+{purchaseAmount} TH</button>

<style>
  button {
    margin-top: 5px;
  }
</style>