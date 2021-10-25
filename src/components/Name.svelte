<script>
  import { onMount } from "svelte";
  import typewriter from "../utils/typewriter";

  let visible = false;
  onMount(() => (visible = true));
</script>

<style>
  div {
    text-align: left;
    color: var(--light-purple);
    display: flex;
    flex-direction: row;
    /* transform: translateY(50vh); */
    /* font-size: 3em; */
    /* animation-name: move; */
    /* animation-delay: 1.8s; */
    /* animation-duration: 1.4s; */
    /* animation-timing-function: ease-in-out; */
    /* animation-iteration-count: 1; */
    /* animation-fill-mode: forwards; */
  }

  .cursor {
    color: transparent;
    animation: 0.9s infinite ease-in-out blink;
  }

  @keyframes blink {
    0% {
      color: var(--dark-purple);
    }
    50% {
      color: transparent;
    }
    100% {
      color: var(--dark-purple);
    }
  }

  /* @keyframes move {
    from {
      transform: translateY(50vh);
    }
    to {
      transform: translateY(0vh);
      font-size: 1.3em;
    }
  } */

  h1 {
    font-size: 2.6em;
    text-shadow: 0.1em 0.1em black;
  }

  h1:hover {
    cursor: pointer;
    text-shadow: 0.2em 0.2em black;
  }
</style>

<div>
  {#if visible}
    <h1
      on:click={() => {
        visible = false;
        setTimeout(() => {
          visible = true;
        }, 1300);
      }}
      transition:typewriter={{ delay: 200 }}
    >
      Louis Meunier
    </h1>
  {/if}
  <h1 class="cursor">|</h1>
</div>
