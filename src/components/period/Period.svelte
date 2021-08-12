<script lang="ts">
import { VESTING_PERIOD } from "../../state/reducers";

  import { state } from "../../state/state";

  const getParticle = (remainder: number) => {
    console.log(remainder);
    return remainder <= 10
      ? "ten"
      : remainder <= 25
      ? "twentyfive"
      : remainder <= 50
      ? "fifty"
      : remainder <= 75
      ? "seventyfive"
      : "onehundred";
  };
</script>

<pie class={getParticle(($state.timeElapsed % VESTING_PERIOD) / VESTING_PERIOD * 100)} />

<style>
  pie {
    width: 25px;
    height: 25px;
    display: block;
    border-radius: 50%;
    background-color: green;
    border: 2px solid green;
    float: left;
    margin: 1em;
  }

  .ten {
    background-image: linear-gradient(126deg, transparent 50%, white 50%),
      linear-gradient(90deg, white 50%, transparent 50%);
  }

  .twentyfive {
    background-image: linear-gradient(180deg, transparent 50%, white 50%),
      linear-gradient(90deg, white 50%, transparent 50%);
  }

  .fifty {
    background-image: linear-gradient(90deg, white 50%, transparent 50%);
  }

  /* Slices greater than 50% require first gradient
   to be transparent -> green */

  .seventyfive {
    background-image: linear-gradient(180deg, transparent 50%, green 50%),
      linear-gradient(90deg, white 50%, transparent 50%);
  }

  .onehundred {
    background-image: none;
  }
</style>
