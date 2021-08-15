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
  <Smartphone width={100}>
    <Controls />
  </Smartphone>

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

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
