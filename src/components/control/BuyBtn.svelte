<script lang="ts">
import { updateTotalAsics } from "../../state/reducers";

  import { state } from "../../state/state";

  const increase = () => {
    $state.purchasedAsics += 1;
    $state = updateTotalAsics($state);
  };
</script>

<button on:click={increase}>+</button>
