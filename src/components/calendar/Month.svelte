<script lang="ts">
  import Json from "../stats/Json.svelte";

  export let state: any;
</script>

<div class="container month">
  <slot />
  <Json json={state} />
</div>

<style>
  .container {
    border: 1px solid black;
    min-height: 100px;
  }
</style>
