<script lang="ts">
    export let state: any;
</script>

<div class="container month">
    <slot />
    <pre>{JSON.stringify(state, "", 2)}</pre>
</div>

<style>
    .container {
        border: 1px solid black;
        min-height: 100px;
    }
</style>