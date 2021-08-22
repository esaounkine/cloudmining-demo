<script lang="ts">
  import { _ } from "svelte-i18n";

  import { state } from "../../state/state";
  import Month from "./Month.svelte";
</script>

<h2>{$_("calendar.title")}</h2>
<calendar>
  {#if !$state.output.months.length}
    <i>{$_("calendar.no-vesting")}</i>
  {/if}

  {#each $state.output.months as month, i}
    <Month state={month} index={$state.output.months.length - i} />
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
