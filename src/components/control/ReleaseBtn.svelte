<script lang="ts">
  import { updateTotalAsics } from "../../state/reducers";

  import { state } from "../../state/state";

  const isDecreaseAllowed = () => {
    return $state.thh.purchased > 0;
  };
  
  const decrease = () => {
    $state.thh.purchased = isDecreaseAllowed() ? $state.thh.purchased - 1 : 0;
    $state = updateTotalAsics($state);
  };
</script>

<button on:click={decrease} disabled={!isDecreaseAllowed()}>-1000</button>
