<script>
  import Header from "../components/layout/header.svelte";
  import "../styles.css";
</script>

<main class="">
  <Header />
  <slot />
</main>

<style>
  main {
    overflow-x: hidden !important;
  }
</style>
