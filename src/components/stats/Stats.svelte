<script lang="ts">
  import { formatTime } from "../../shared/util";
  import { state } from "../../state/state";
</script>

<h2>Stats</h2>
<p>Purchased TH/h: {$state.thh.purchased}</p>
<p>Vested TH/h: {$state.thh.vested}</p>
<p>Total TH/h: {$state.thh.purchased + $state.thh.vested}</p>
<p>Period Length: {$state.periodLength}</p>
<p>Start Time: {$state.startTime}</p>
<p>Time Elapsed: {formatTime($state.timeElapsed, $state.periodLength)}</p>

<style>
  h2 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
  }
</style>
