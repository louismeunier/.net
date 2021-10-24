<script lang="ts">
    import Tech from "./Tech.svelte";

    export let name:string;
    export let description:string;
    export let source:string;
    export let live:string|null = null;
    export let technologies:string[];
    
    let overlay;
</script>

<style>
    .project {
        /* border-block: 2px solid black; */
        height: max-content;
        padding: 1rem;
        transition: 0.25s ease-in-out;
        position: relative;
        box-shadow: 0.2em 0.2em 0.1em black;
    }

    .project:hover {
        box-shadow: 0.4em 0.4em 0.2em black;
    }

    .tech {
        display: grid;
        grid-auto-flow: column;
        /* justify-items: center; */
        justify-content: left;
        font-size: 1.5em;
        gap: 2em;
    }
    .links {
        display: grid;
        grid-auto-flow: column;
        justify-items: center;
        justify-content: left;
        gap: 2em;
    }

    .overlay {
        display: none;
        background-color: var(--light-purple); 
        opacity: 0.5;
        position: absolute;
        height: 100%;
        width: 100%;
        margin: -1rem;
        place-items: center;
    }
</style>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- <div class="project" on:mouseover={()=>{overlay.style.display = "grid"}} on:mouseout={()=>{overlay.style.display = "none"}}> -->
    <div class="project">
    <!-- <div class="overlay" bind:this={overlay} on:click={()=>{}}>
        READ MORE
    </div> -->
    <h3>
        {name}
    </h3>
    <div class="tech">
        {#each technologies as tech}
            <Tech name={tech}/>
        {/each}
    </div>
    <p>
        {description}
    </p>
    
    <div class="links">
        <a rel="noreferrer" target="_blank" href={source}>Source Code</a>
        {#if live}
        <a rel="noreferrer" target="_blank" href={live}>Site</a>
        {/if}
    </div>
</div>