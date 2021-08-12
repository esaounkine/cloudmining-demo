<script lang="ts">
  import { updateTotalAsics } from "../../state/reducers";

  import { state } from "../../state/state";

  const isDecreaseAllowed = () => {
    return $state.purchasedAsics > 0;
  };
  
  const decrease = () => {
    $state.purchasedAsics = isDecreaseAllowed() ? $state.purchasedAsics - 1 : 0;
    $state = updateTotalAsics($state);
  };
</script>

<button on:click={decrease} disabled={!isDecreaseAllowed()}>-</button>
