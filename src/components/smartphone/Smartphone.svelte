<script lang="ts">
  export let width: number;
  export let height: number = 0;
  if (!height) {
    height = width * 1.77;
  }
</script>

<div
  class="smartphone"
  style="width: {width}px; height: {height}px; border-width: {width /
    6}px 2px; border-radius: {width / 10}px;">
  <div class="content" style="width: {width}px; height: {height}px">
    <slot />
  </div>
</div>

<style>
  /* The device with borders */
  .smartphone {
    position: relative;
    margin: auto;
    border: black solid;
    margin: 0;
  }

  /* The screen (or content) of the device */
  .smartphone .content {
    background: white;
    position: relative;
  }
</style>
