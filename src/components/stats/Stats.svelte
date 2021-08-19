<script lang="ts">
  import { state } from "../../state/state";
  import Json from "./Json.svelte";
</script>

<h2>Stats</h2>

<Json json={state} />
