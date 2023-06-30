<script>
  import anime from "animejs";
  import gsap from "gsap/dist/gsap";
  import { onMount } from "svelte";
  import { TextPlugin } from "gsap/dist/TextPlugin";
  import { browser } from "$app/environment";

  if (browser) {
    gsap.registerPlugin(TextPlugin);
  }
  onMount(() => {
    let tl = gsap.timeline();

    let q = gsap.utils.selector(".chart-banner"); // or use selector text like ".class"
    let boxes = q(".chart-block"); // finds only elements with the class "box" that are INSIDE myElement
    // or plug directly into animations
    tl.fromTo(
      boxes,
      { x: "-100%", opacity: "0" },
      { x: 0, stagger: 0.4, opacity: "1" }
    ).to("#ns", {
      duration: "2.5",
      opacity: "1",
      text: "+700",

      ease: "power2",
    });

    anime({
      targets: "#pr",
      innerHTML: ["0%", "95%"],
      easing: "easeInOutQuad",
      duration: "2500",
      round: 1,
      delay: 600,
    });
  });
</script>

<div class="chart-banner pattern1">
  <div id="one" class="chart-block">
    <span class="emph">#1</span>
    <span class="content">study & travel agency in tunisia</span>
  </div>
  <div id="two" class="chart-block">
    <span id="ns" class="emph">+0</span>
    <span class="content">students all across the us</span>
  </div>
  <div id="three" class="chart-block">
    <span id="pr" class="emph">95</span>
    <span class="content">visa approval rate</span>
  </div>
</div>

<style lang="scss">
  @media (min-width: 1020px) {
    .chart-block {
      font-weight: 600;
      height: 2rem;
      display: flex;
      flex-direction: row !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 1.5rem;
      text-transform: uppercase;

      .emph {
        width: 100px;
        font-size: clamp(3em, 0.25vw + 2em, 0.5em) !important;
        display: inline-block;
        text-align: center;
      }
      span.content {
        font-size: clamp(0.5em, 0.5vw + 0.5em, 1em);
        width: 200px;
        line-height: 1.5 !important;
      }
    }
  }
  .pattern1 {
    background-image: repeating-linear-gradient(
      36deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 1px,
      transparent 0px,
      transparent 2px
    );
  }
  .chart-banner {
    opacity: 1;
    display: flex;
    position: absolute;
    align-items: start;
    justify-content: space-around;
    padding-block: clamp(1rem, 5vw, 0.5rem);
    width: 100%;
    background-color: var(--accent-color);
    bottom: 0;
    overflow: hidden;
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
    span.content {
      font-size: clamp(1em, 0.1vw + 0.5em, 1em);
      line-height: 1.5 !important;
    }
  }
</style>
