<script lang="ts">
  import { state } from "../../state/state";
</script>

<div class="farm purchased">
  <ul>
    {#each Array($state.thh.purchased) as _, i}
      <li>
        <img src="img/asic-purchased.png" alt="Purchased" />
      </li>
    {/each}
  </ul>
</div>

<div class="farm vested">
  <ul>
    {#each Array($state.thh.vested) as _, i}
      <li>
        <img src="img/asic-vested.png" alt="Vested" />
      </li>
    {/each}
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
    zoom:1;
    *display:inline;
    /* this fix is needed for IE7- */
  }
</style>
