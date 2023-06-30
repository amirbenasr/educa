<script>
  import gsap from "gsap";
  import { onMount } from "svelte";
</script>

<div class="divv">
  <div class="left slide-l" />
  <div class="right slide" />
</div>

<style>
  .left {
    height: 100vh;
    width: 50vw;
    position: absolute;
    top: 0;
    z-index: 2000;
    background: black;
  }
  .right {
    height: 100vh;
    width: 50vw;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2000;
    background: black;
  }
</style>
