<script lang="ts">
    export let title:string;
    let expanded = true;
</script>

<style>
    .section {
        display: grid;
        grid-auto-flow: row;
        justify-content: left;
    }

    .header {
        display: grid;
        grid-auto-flow: column;
        color: white;
    }

    h2 {
        font-size: 2em;
        text-align: center;
        color: var(--light-purple);
    }

    h2:hover {
        text-decoration: underline;
        cursor: pointer;
    }
</style>

<div class="section">
    <div class="header">
        <h2 on:click={()=>{expanded=!expanded}}>
            {expanded ? "|" : "-"}
            {title}
            {expanded ? "|" : "-"}
        </h2>
        <!-- <button on:click={()=>expanded=!expanded}>{expanded ? "▼": "▲"}</button> -->
    </div>
    {#if expanded}
        <slot/>
    {/if}
</div>
