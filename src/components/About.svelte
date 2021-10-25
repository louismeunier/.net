<script>
  // let wave;
</script>

<style>
  /* div {
        background-color: var(--dark-tan);
    } */

  h2,
  p {
    font-size: 1.1em;
    margin-right: 3rem;
    margin-left: 3rem;
    text-align: center;
  }

  h2 {
    font-size: 1.5em;
    /* text-decoration: underline; */
    font-weight: 900;
    color: var(--pale-yellow);
  }

  @keyframes wave {
    0% {
      transform: rotate(-20deg);
    }
    50% {
      transform: rotate(40deg);
    }
    100% {
      transform: rotate(-20deg);
    }
  }

  @keyframes fall {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
</style>

<div>
  <!-- <p 
        bind:this={wave}
        class="falling"
        id="wave"
    >👋</p> -->
  <h2>Hello!</h2>
  <p>
    I'm an 18 year old high school senior, amateur software developer, and avid speedcuber from
    Upstate New York.
  </p>
  <p>
    I love creating software to explore data and express trends, and while I
    primarily work on web development, am very open to trying new directions and
    technologies.
  </p>
  <p>Welcome to my (WIP) website!</p>
</div>
