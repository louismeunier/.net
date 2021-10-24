<script>
    // let wave;
</script>

<style>
    /* div {
        background-color: var(--dark-tan);
    } */

   h2, p {
       font-size: 1.1em;
       text-align: center;
   }

   h2 {
       font-size: 1.3em;
       /* text-decoration: underline; */
        font-weight: 900;
       color: var(--silver);
   }

  
   @keyframes wave {
    0% {transform: rotate(-20deg);}
    50% {transform: rotate(40deg);}
    100% {transform: rotate(-20deg);}
   }
   
   @keyframes fall {
       0% {transform: translateY(0);}
       100% {transform: translateY(100%);}
   }
</style>

<div>
    <!-- <p 
        bind:this={wave}
        class="falling"
        id="wave"
    >👋</p> -->
    <h2>
        Hello!
    </h2>
    <p>I'm an 18 year old high school senior and hobbyist software developer from Upstate New York.</p>
    <p>Welcome to my website!</p>
</div>