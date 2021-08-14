<script lang="ts">
  import { state } from "../../state/state";

  const increase = () => {
    $state.hashRate.purchased += 1000;
  };
</script>

<button on:click={increase}>+1000</button>
