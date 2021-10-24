<script>
import Email from "./Icons/Email.svelte";
import Github from "./Icons/Github.svelte";
import Linkedin from "./Icons/Linkedin.svelte";

</script>

<style>
    .contacts {
        display: grid;
        grid-auto-flow: column;
        justify-content: center;
        justify-items: center;
        gap: 2em;
        margin: 0;
        height: 100%;
        position: relative;
    }

    :global(.contacts > * > svg) {
        height: 80%;
        fill: var(--pale-yellow);
        transition: 0.4s ease-in-out;
    }

    :global(.contacts > * > svg):hover {
        height: 90%;
    } 

</style>

<div class="contacts">
    <a rel="noreferrer" href="https://github.com/louismeunier" target="_blank">
        <Github/>
    </a>
    <a rel="noreferrer" href="https://www.linkedin.com/in/louis-meunier-112b55203/" target="_blank">
        <Linkedin/>
    </a>
    <a rel="noreferrer" href="mailto:louismeunier123@gmail.com" target="_blank">
        <Email/>
    </a>
</div>