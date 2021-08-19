<script lang="ts">
  import { state } from "../../state/state";
  import Month from "./Month.svelte";
</script>

<h2>Vesting calendar</h2>
<calendar>
  {#if !$state.output.months.length}
    <i>No vesting yet</i>
  {/if}

  {#each $state.output.months as month, i}
    <Month state={month}>{$state.output.months.length - i}</Month>
  {/each}
</calendar>

<style>
  calendar {
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    overflow-x: scroll;
  }
</style>
