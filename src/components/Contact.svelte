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
    cursor: pointer;
  }
</style>

<div class="contacts">
  <div
    on:click={() => {
      location.href = "https://github.com/louismeunier";
    }}
  >
    <Github />
  </div>
  <div
    on:click={() => {
      location.href = "https://www.linkedin.com/in/louis-meunier-112b55203/";
    }}
  >
    <Linkedin />
  </div>
  <div
    on:click={() => {
      location.href = "mailto:louismeunier123@gmail.com";
    }}
  >
    <Email />
  </div>
</div>
