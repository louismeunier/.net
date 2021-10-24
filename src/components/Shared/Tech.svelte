<script lang="ts">
    export let name:string;

    let overlay;
</script>

<style>
    div {
        position: relative;
        transition: 0.1s ease-in-out;
    }

    div:hover {
        cursor: help;
        color: var(--silver)
    }

    span {
        font-size: 0.5em;
        position: absolute;
        color: var(--pale-yellow);
        display: none;
    }

</style>


<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    on:mouseover={()=>{overlay.style.display = "block"} }
    on:mouseout={()=>{overlay.style.display = "none"}}
    >
    <span bind:this={overlay}>{name}</span>
    <i 
        class={`devicon-${name}-plain`} 
    />
</div>