<script lang="ts">
  import { formatTime } from "../../shared/util";
  import { state } from "../../state/state";
</script>

<h2>Stats</h2>
<p>Purchased Asics: {$state.thh.purchased}</p>
<p>Vested Asics: {$state.thh.vested}</p>
<p>Total Asics: {$state.thh.total}</p>
<p>Period Length: {$state.periodLength}</p>
<p>Start Time: {$state.startTime}</p>
<p>Time Elapsed: {formatTime($state.timeElapsed)}</p>

<style>
  h2 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
  }
</style>
