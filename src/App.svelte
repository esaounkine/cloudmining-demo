<script lang="ts">
  import { config, state } from "./state/state";
  import { reduce } from "./state/reducers";

  import Stats from "./components/stats/Stats.svelte";
  import Controls from "./components/control/Controls.svelte";
  import Farm from "./components/farm/Farm.svelte";
  import Period from "./components/period/Period.svelte";
  import Smartphone from "./components/smartphone/Smartphone.svelte";
  import Bank from "./components/bank/Bank.svelte";
  import Config from "./components/stats/Config.svelte";

  const tick = () => {
    $state = reduce($state, $config);
    setTimeout(tick, 1000);
  };

  tick();
</script>

<main>
  <div class="oneline">
    <Smartphone width={100}>
      <Controls />
    </Smartphone>

    <Bank />
  </div>

  <Period />

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
    justify-content: space-evenly;
  }

  :global(.label) {
    font-weight: 600;
    display: inline-block;
  }
</style>
