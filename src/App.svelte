<script lang="ts">
  import { state } from "./state/state";
  import { reduce } from "./state/reducers";

  import Stats from "./components/stats/Stats.svelte";
  import Controls from "./components/control/Controls.svelte";
  import Farm from "./components/farm/Farm.svelte";
  import Period from "./components/period/Period.svelte";
  import Smartphone from "./components/smartphone/Smartphone.svelte";

  const tick = () => {
    $state = reduce($state);
    setTimeout(tick, 1000);
  };

  tick();
</script>

<main>
  <div class="oneline">
    <Smartphone width={100}>
      <Controls />
    </Smartphone>
  </div>

  <Period />

  <Farm />

  <Stats />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
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

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
