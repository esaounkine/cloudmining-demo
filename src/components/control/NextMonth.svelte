<script lang="ts">
  import { state, config } from "../../state/state";
  import { reduce } from "../../state/reducers";
  import { _ } from "svelte-i18n";

  const enact = () => {
    const res = reduce($state, $config);
    $state = res.state;
    $config = res.config;
  };
</script>

<div>
  <button on:click={enact}>{$_("calendar.next-month")}</button>
</div>
