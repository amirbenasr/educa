<script>
  import anime from "animejs";
  import { onMount } from "svelte";
  onMount(() => {
    anime({
      targets: ".chart-block",
      opacity: [0, 1],
      // translateX: [-500, 0],
      duration: "1000",
      delay: anime.stagger(400), // increase delay by 100ms for each elements.
    });

    anime({
      targets: "#ns",
      innerHTML: ["0+", "250+"],
      easing: "linear",
      duration: "2500",
      round: 1,
      delay: 600,
    });
    anime({
      targets: "#pr",
      innerHTML: ["0%", "95%"],
      easing: "linear",
      duration: "2500",
      round: 1,
      delay: 600,
    });
  });
</script>

<div class="chart-banner">
  <div id="one" class="chart-block">
    <span class="emph">#1</span>
    <span class="content">study & travel agency in tunisia</span>
  </div>
  <div id="two" class="chart-block">
    <span id="ns" class="emph">+215</span>
    <span class="content">students all across the us</span>
  </div>
  <div id="three" class="chart-block">
    <span id="pr" class="emph">95%</span>
    <span class="content">visa approval rate</span>
  </div>
</div>

<style lang="scss">
  @media (min-width: 1020px) {
    .chart-block {
      font-weight: 600;
      display: flex;
      flex-direction: row !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 1rem;
      text-transform: uppercase;
      .emph {
        font-size: clamp(3em, 0.25vw + 2em, 0.5em) !important;
      }
      .content {
        font-size: clamp(0.5em, 0.5vw + 0.5em, 1em);
        max-width: 200px;
      }
    }
  }
  .chart-banner {
    opacity: 0.8;
    display: flex;
    position: absolute;
    align-items: start;
    justify-content: space-around;
    padding-inline: clamp(1rem, 5vw, 1rem);
    width: 100%;
    background-color: var(--accent-color);
    bottom: 0;
  }
  .chart-banner > * {
    flex: 1;
  }

  .chart-block {
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-transform: capitalize;
    text-align: center;
    .emph {
      font-size: clamp(2em, 0.25vw + 1em, 0.5em);
    }
    .content {
      font-size: clamp(0.5em, 0.1vw + 0.5em, 1em);
    }
  }
</style>
