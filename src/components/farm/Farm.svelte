<script lang="ts">
  import { state, config } from "../../state/state";

  const hashRateToUnits = (thh: number): number => {
    return Math.floor(thh / config.hashRatePerUnitThs);
  };

  $: asics = {
    purchased: hashRateToUnits($state.hashRate.purchased),
    vested: hashRateToUnits($state.hashRate.vested),
  };
</script>

<div class="farm purchased">
  <ul>
    {#if asics.purchased === 0}
      No ASICs
    {:else}
      {#each Array(asics.purchased) as _, i}
        <li>
          <img src="img/asic-purchased.png" alt="Purchased" />
        </li>
      {/each}
    {/if}
  </ul>
</div>

<div class="farm vested">
  <ul>
    {#if asics.vested === 0}
      No ASICs
    {:else}
      {#each Array(asics.vested) as _, i}
        <li>
          <img src="img/asic-vested.png" alt="Vested" />
        </li>
      {/each}
    {/if}
  </ul>
</div>

<style>
  .purchased {
    color: green;
  }
  .vested {
    color: blue;
  }
  .farm img {
    height: 40px;
  }
  ul > li {
    display: inline-block;
    /* You can also add some margins here to make it look prettier */
    zoom: 1;
    *display: inline;
    /* this fix is needed for IE7- */
  }
</style>
