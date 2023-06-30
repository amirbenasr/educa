<script lang="ts">
  import Chartsbanner from "../components/chartsbanner.svelte";
  import Destinations from "../components/destinations.svelte";
  import Footer from "../components/layout/footer.svelte";
  import Testimonials from "../components/testimonials.svelte";
  import OffersSlider from "../components/offersSlider.svelte";
  import Tests from "../components/tests.svelte";
  import OffersNew from "../components/offersNew.svelte";
  import Loading from "../components/layout/loading.svelte";
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
  <!-- <img class="" src={hero} alt="" srcset=""> -->
  <!-- <video
    src="https://res.cloudinary.com/dyw4slb0a/video/upload/v1684920302/video_n1hsqo.mp4"
    muted
    autoplay
    loop
    id="myVideo"
  /> -->
  <div class="hero-text">
    <span class="big-title">EDUCA US.</span>
    <hr />
    <span>
      <span style="color:var(--accent-color);">Your</span> dream
      <span style="color:var(--primary-color)">begins</span> here.
    </span>
  </div>
  <Chartsbanner />
</section>

<OffersNew />
<OffersSlider />
<Destinations />
<Tests />
<Testimonials />
<Footer />

<style lang="scss">
  .spacer {
    aspect-ratio: 2/1;
    height: 200px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .layer {
    background-image: url("$lib/svgs/waves.svg");
    width: 100%;
  }
  @media (min-width: 850px) {
    .offers_title {
      font-size: var(--font-size-xl) !important;
    }
  }
  @media (max-width: 800px) {
    video {
      max-width: 100% !important;
      max-height: 100% !important;
      object-position: 15% 60%;
      object-fit: cover !important;
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
    background: url("$lib/images/hero.jpg");
    position: relative;
    box-shadow: inset 0 2em 100px 0 var(--primary-color);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: calc(100vh - 60px);
    height: calc(100svh - 60px);
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .hero-text {
      display: block;
      opacity: 1;
    }

    video {
      z-index: -1;
      object-fit: fill;
      width: 100%;
      height: 100%;
    }

    .hero-text {
      position: absolute;
      text-shadow: 0px 1px 5px rgb(44, 42, 42);
      text-align: center;
      font-weight: 700;
      z-index: 8;
      transform: translateY(-50px);
      .big-title {
        font-size: 4rem;
      }
    }
  }
</style>
