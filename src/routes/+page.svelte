<script>
  import Chartsbanner from "../components/chartsbanner.svelte";
  import figure from "$lib/images/figure1.png";
  import figure1 from "$lib/images/figure2.png";
  import figure2 from "$lib/images/figure3.png";
  import line1 from "$lib/svgs/line1.png";
  import Sticker from "../components/sticker.svelte";
  import Offersection from "../components/offersection.svelte";
  import Destinations from "../components/destinations.svelte";
  import Footer from "../components/layout/footer.svelte";

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
</script>

<section class="hero">
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla neque ac dignissim aliquet. ",
        }}
      />
      <Sticker
        props={{
          rot: -2,
          theme: theme,
          title: "program",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla neque ac dignissim aliquet. ",
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
          rot: 2,
          theme: theme,
          title: "Language classes",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla neque ac dignissim aliquet. ",
        }}
      />
      <Sticker
        props={{
          rot: -2,
          theme: theme,
          title: "cultural excursions",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla neque ac dignissim aliquet. ",
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
          rot: 2,
          theme: theme,
          title: "Transportation",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla neque ac dignissim aliquet. ",
        }}
      />
      <Sticker
        props={{
          rot: -2,
          theme: theme,
          title: "Guidance",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla neque ac dignissim aliquet. ",
        }}
      />
    </div>
  </Offersection>
</section>
<Destinations />
<Footer />

<style lang="scss">
  @media (min-width: 850px) {
    .offers_title {
      font-size: var(--font-size-xl) !important;
    }
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
    background: url("$lib/images/hero.jpg");
    box-shadow: inset 0 2em 100px 0 var(--primary-color);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: calc(100vh - 60px);
    height: calc(100svh - 60px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .hero-text {
      display: block;
    }

    .hero-text {
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
