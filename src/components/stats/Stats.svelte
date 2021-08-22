<script lang="ts">
  import { _ } from "svelte-i18n";

  import { state } from "../../state/state";
  import Json from "./Json.svelte";
</script>

<h2>{$_("stats.title")}</h2>

<Json json={state} />
