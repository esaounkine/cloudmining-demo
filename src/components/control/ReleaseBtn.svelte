<script lang="ts">
  import { state } from "../../state/state";

  const isDecreaseAllowed = (by: number) => {
    return $state.hashRate.purchased >= by;
  };
  
  const decrease = () => {
    $state.hashRate.purchased = isDecreaseAllowed(1000) ? $state.hashRate.purchased - 1000 : 0;
  };
</script>

<button on:click={decrease} disabled={!isDecreaseAllowed(1000)}>-1000</button>
