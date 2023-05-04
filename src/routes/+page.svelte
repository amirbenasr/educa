<script lang="ts">
  import Chartsbanner from "../components/chartsbanner.svelte";
  import figure from "$lib/images/figure1.png";
  import figure1 from "$lib/images/figure2.png";
  import figure2 from "$lib/images/figure3.png";
  import line1 from "$lib/svgs/line1.png";
  import Sticker from "../components/sticker.svelte";
  import Offersection from "../components/offersection.svelte";
  import Destinations from "../components/destinations.svelte";
  import Footer from "../components/layout/footer.svelte";
  import Testimonials from "../components/testimonials.svelte";
  import video2 from "$lib/video.mp4";
  import { onMount } from "svelte";

  const themes = {
    blueG: {
      color1: "#224373",
      color2: "#14FF00",
    },
    redY: {
      color1: "#C10B17",
      color2: "#F7FF00",
    },
    purpleC: {
      color1: "#680A89",
      color2: "#00FFBE",
    },
  };

  //video appending logic
  let video: HTMLElement;

  let WindowWidth;
  onMount(() => {
    if (WindowWidth < 1200) {
      //It is a small screen
      video.innerHTML = `<source src="${video2}">`;
    } else if (WindowWidth > 1200) {
      //It is a big screen or desktop
      video.innerHTML = `<source src="${video2}">`;
    }
  });
</script>

<svelte:window bind:innerWidth={WindowWidth} />
<section class="hero">
  <video bind:this={video} muted autoplay loop id="myVideo" />
  <div class="hero-text">
    <span class="big-title">EDUCA US.</span>
    <hr />
    <span>
      <span style="color:var(--accent-color);">Your</span> dreams
      <span style="color:var(--primary-color)">begins</span> here.
    </span>
  </div>
  <Chartsbanner />
</section>

<div class="offers__header">
  <span class="offers_title">what we offer at educa us ?</span>
</div>
<section class="offers">
  <!-- FIRST OFFER -->
  <Offersection
    title="Program design & customization"
    {figure}
    svg={line1}
    linePosition={{ left: 500, right: 0 }}
    theme={{
      ...themes.blueG,
    }}
  >
    <div slot="stickers" let:theme>
      <Sticker
        props={{
          rot: 2,
          theme: theme,
          title: "program",
          content:
            "We help choose destinations, develop itineraries, and plan educational activities.",
        }}
      />
      <Sticker
        props={{
          rot: -1,
          theme: theme,
          title: "customization",
          content:
            "We work with educational institutions to create customized programs that meet the specific needs and interests of our students.",
        }}
      />
    </div>
  </Offersection>
  <!-- SECOND OFFER -->
  <Offersection
    title="Academic coursework"
    figure={figure1}
    svg={line1}
    linePosition={{ left: 32, right: 0 }}
    theme={{ ...themes.redY }}
    positions={{ figure: "8/12", stickers: "3/7" }}
    titleGrid="7/12"
  >
    <div slot="stickers" let:theme>
      <Sticker
        props={{
          rot: 1,
          theme: theme,
          title: "Language classes",
          content:
            "We offer a set of academic language classes suitable for every level. ",
        }}
      />
      <Sticker
        props={{
          rot: -1,
          theme: theme,
          title: "cultural excursions",
          content:
            "We work with local partners and institutions to provide opportunities for students to learn about history, art, language.",
        }}
      />
    </div>
  </Offersection>
  <!-- THIRD OFFER -->
  <Offersection
    title="Logistics and coordination"
    figure={figure2}
    svg={line1}
    linePosition={{ left: 32, right: 0 }}
    theme={{ ...themes.purpleC }}
  >
    <div slot="stickers" let:theme>
      <Sticker
        props={{
          rot: 0,
          theme: theme,
          title: "Transportation",
          content:
            "We handle the logistics of travel and coordinate all aspects of the program, from transportation to lodging to meals.",
        }}
      />
      <Sticker
        props={{
          rot: 0,
          theme: theme,
          title: "Guidance",
          content:
            "We also provide on-site support and guidance to participants.",
        }}
      />
    </div>
  </Offersection>
</section>
<Destinations />
<Testimonials />
<Footer />

<style lang="scss">
  video {
    object-position: 50% 20% !important;
  }
  @media (min-width: 850px) {
    .offers_title {
      font-size: var(--font-size-xl) !important;
    }
  }
  video {
    position: relative;
  }
  .offers__header {
    text-transform: uppercase;
    text-align: center;
    padding: 2rem;
    background: url("$lib/images/splash-bg.jpg");
    .offers_title {
      color: var(--primary-color);
      font-size: var(--font-size-md);

      letter-spacing: -0.5px;
      font-weight: 800;
    }
  }
  .offers {
    max-width: 100%;
    margin: 0 auto;
  }
  .hero {
    // background: url("$lib/images/hero.jpg");

    box-shadow: inset 0 2em 100px 0 var(--primary-color);
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: center;
    height: calc(100vh - 60px);
    height: calc(100svh - 60px);
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .hero-text {
      display: block;
      opacity: 0;
    }

    video {
      z-index: -1;
      scale: 1;
      object-fit: cover;
      width: 100%;
      height: 100%;
      object-position: 50% 20%;
    }

    .hero-text {
      position: absolute;
      text-shadow: 0px 1px 5px rgb(44, 42, 42);
      text-align: center;
      font-weight: 700;
      z-index: 1;
      transform: translateY(-50px);
      .big-title {
        font-size: 4rem;
      }
    }
  }
</style>
