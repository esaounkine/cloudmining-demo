<script lang="ts">
  import { state } from "./state/state";
  import { reduce } from "./state/reducers";

  import Stats from "./components/stats/Stats.svelte";
  import Controls from "./components/control/Controls.svelte";
  import Farm from "./components/farm/Farm.svelte";
  import Period from "./components/period/Period.svelte";

  const tick = () => {
    $state = reduce($state);
    setTimeout(tick, 500);
  };

  tick();
</script>

<main>
  <Controls />

  <div>
    <Period />
  </div>

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

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
