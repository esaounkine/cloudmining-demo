<script lang="ts">
  import { state, config } from "../../state/state";

  $: progress = Math.round(($state.timeElapsed % config.periodLength) / config.periodLength * 100);
</script>

<!-- <pie class={} /> -->
<div class="outer">
    <div class="inner" style="width: {progress}%;">
        <div class="progress">{progress}%</div>
    </div>
</div>

<style>
    .outer {
        height: 10px;
        background-color: bisque;
        position: relative;
        font-size: 9px;
        text-align: center;
    }
    .inner {
        position: absolute;
        width: 0;
        height: 100%;
        left: 0;
        background-color: blue;
    }
    .progress {
        position: absolute;
        right: 0;
        color: white;
        z-index: 100;
    }
</style>
