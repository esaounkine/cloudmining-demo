<script lang="ts">
  import { state, config } from "../../state/state";
  import { reduce } from "../../state/reducers";

  const enact = () => {
    const res = reduce($state, $config);
    $state = res.state;
    $config = res.config;
  };
</script>

<div>
  <button on:click={enact}>Next month >></button>
</div>
