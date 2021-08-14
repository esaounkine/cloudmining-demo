<script lang="ts">
  import { state } from "../../state/state";

  const purchaseAmount = 100;

  const isDecreaseAllowed = (by: number) => {
    return $state.hashRate.purchased >= by;
  };

  const decrease = (by: number) => {
    if (isDecreaseAllowed(by)) {
      $state.hashRate.purchased = $state.hashRate.purchased - by;
    }
  };
</script>

<button on:click={() => decrease(purchaseAmount)}>
  -{purchaseAmount}
</button>

<style>
  button {
    position: absolute;
    bottom: 0;
  }
</style>