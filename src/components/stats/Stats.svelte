<script lang="ts">
  import { formatTime } from "../../shared/util";
  import { state } from "../../state/state";
</script>

<h2>Stats</h2>
<pre>{JSON.stringify($state, "", 2)}</pre>

<style>
  h2 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
  }
</style>
