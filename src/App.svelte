<script lang="ts">
  import { state } from "./state/state";

  import Stats from "./components/stats/Stats.svelte";
  import Controls from "./components/control/Controls.svelte";
  import Farm from "./components/farm/Farm.svelte";
  import Smartphone from "./components/smartphone/Smartphone.svelte";
  import Bank from "./components/bank/Bank.svelte";
  import Config from "./components/stats/Config.svelte";
  import Calendar from "./components/calendar/Calendar.svelte";
  import NextMonth from "./components/control/NextMonth.svelte";
</script>

<main>
  <div class="oneline">
    <Smartphone width={100}>
      <Controls />
    </Smartphone>

    <Bank />
  </div>

  <div class="row">
    <NextMonth />
  </div>

  <Calendar />

  <Farm />

  <Config />

  {#if $state.debug}
    <Stats />
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  :global(h1) {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 300;
  }

  :global(h2) {
    text-transform: uppercase;
    font-size: 1.5em;
    font-weight: 300;
  }

  :global(.oneline) {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
  }

  :global(.label) {
    font-weight: 600;
    display: inline-block;
  }

  :global(.row) {
    margin: 20px 0;
  }

  :global(.negative) {
    color: red;
  }

  :global(.positive) {
    color: green;
  }

  :global(.digital) {
    color: darkblue;
  }

  :global(.neutral) {
    color: darkgray;
  }
</style>
