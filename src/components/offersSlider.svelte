<!-- <script>
  import figure from "$lib/images/figure1.png";
  import figure2 from "$lib/images/figure2.png";
  import figure3 from "$lib/images/figure3.png";
  import { onMount } from "svelte";
  import Sticker from "./sticker.svelte";

  let index = 1;
  let translation = 0;
  let offers;
  let theme1 = "linear-gradient(hsla(94, 31%, 82%, 1),hsla(213, 81%, 21%, 1))";
  let theme2 =
    "linear-gradient(hsla(270, 36%, 80%, 1), hsla(213, 81%, 21%, 1))";
  let theme3 = "linear-gradient(hsla(0, 56%, 89%, 1), hsla(213, 81%, 21%, 1))";
  let slides;

  onMount(() => {
    // select slides
    slides = document.querySelectorAll(".offer");
  });

  // slide right
  const slideRight = (e) => {
    if (index <= 1) return;
    index--;
    translation -= 100;
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${translation}%)`;
    });
    changeTheme();
  };
  // slide left
  const slideLeft = (e) => {
    if (index >= 3) return;
    index++;
    translation += 100;
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${translation}%)`;
    });
    changeTheme();
  };

  // change theme
  function changeTheme() {
    if (index == 1) offers.style.background = theme1;

    if (index == 2) offers.style.background = theme2;

    if (index == 3) offers.style.background = theme3;
  }
</script>

<section class="offers" bind:this={offers}>
  <header>
    <h1 class="title">what we offer at educa us</h1>
  </header>

  <div class="offers__slider">
    <div class="right" on:click={slideLeft} />
    <div class="left" on:click={slideRight} />

    <div id="offer1" class="offer">
      <div class="offer-slide">
        <header>
          <h2 style:padding-top={"1rem"}>program design & customization</h2>
        </header>
        <div class="slide-content">
          <div class="figure">
            <img src={figure} alt="" srcset="" />
          </div>
          <div class="services">
            <Sticker
              props={{
                rot: 0,
                theme: { color1: "hsla(213, 81%, 21%, 1)", color2: "white" },
                title: "program",
                content:
                  "We help choose destinations, develop itineraries, and plan educational activities.",
              }}
            />
            <Sticker
              props={{
                rot: 0,
                theme: { color1: "hsla(213, 81%, 21%, 1)", color2: "white" },
                title: "customization",
                content:
                  "We work with educational institutions to create customized programs that meet the specific needs and interests of our students.",
              }}
            />
          </div>
        </div>
      </div>
    </div>
    <div id="offer2" class="offer">
      <div class="offer-slide">
        <header>
          <h2 style:padding-top={"1rem"}>Academic coursework</h2>
        </header>
        <div class="slide-content">
          <div class="figure">
            <img src={figure2} alt="" srcset="" />
          </div>
          <div class="services">
            <Sticker
              props={{
                rot: 0,
                theme: { color1: "hsla(213, 81%, 21%, 1)", color2: "white" },
                title: "Language classes",
                content:
                  "We offer a set of academic language classes suitable for every level. ",
              }}
            />
            <Sticker
              props={{
                rot: 0,
                theme: { color1: "hsla(213, 81%, 21%, 1)", color2: "white" },
                title: "cultural excursions",
                content:
                  "We work with local partners and institutions to provide opportunities for students to learn about history, art, and language.",
              }}
            />
          </div>
        </div>
      </div>
    </div>
    <div id="offer3" class="offer">
      <div class="offer-slide">
        <header>
          <h2 style:padding-top={"1rem"}>Logistics and coordination</h2>
        </header>
        <div class="slide-content">
          <div class="services">
            <Sticker
              props={{
                rot: 0,
                theme: { color1: "hsla(213, 81%, 21%, 1)", color2: "white" },
                title: "Transportation",
                content:
                  "We handle the logistics of travel and coordinate all aspects of the program, from transportation to lodging to meals.",
              }}
            />
            <Sticker
              props={{
                rot: 0,
                theme: { color1: "hsla(213, 81%, 21%, 1)", color2: "white" },
                title: "Guidance",
                content:
                  "We also provide on-site support and guidance to participants.",
              }}
            />
          </div>
          <div class="figure">
            <img src={figure3} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @media (max-width: 900px) {
    .figure {
      display: none;
    }
    .slide-content {
      max-width: auto !important;
      width: 50%;
    }
  }
  .right {
    cursor: pointer;
    position: absolute;
    background: url("$lib/svgs/right.svg");
    background-repeat: no-repeat;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    z-index: 99;
  }
  .left {
    cursor: pointer;
    position: absolute;
    background: url("$lib/svgs/right.svg");
    background-repeat: no-repeat;
    left: 32px;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
    width: 25px;
    height: 25px;
    z-index: 99;
  }

  .slider-nav {
    display: flex;
    column-gap: 1rem;
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 55;
  }
  .offers_slider::-webkit-scrollbar {
    display: none;
  }
  .slider-nav button {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.75;
    transition: opacity ease 250ms;
  }

  .slider-nav a:hover {
    opacity: 1;
  }

  .offers {
    // word-wrap: break-word;
    word-break: break-word;
    overflow: hidden;
    background: linear-gradient(hsla(94, 31%, 82%, 1), hsla(213, 81%, 21%, 1));
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: background-color 1s ease-in;
  }

  .offers__slider {
    display: flex;
    // max-width: 60rem;
    height: 100%;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none; /* Hide scrollbar IE and Edge */
    scrollbar-width: none;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .offer {
    word-wrap: break-word;

    flex: 1 0 100%;
    object-fit: cover;
    scroll-snap-align: start;
    transition: all 800ms ease-in-out;
  }
  .offer-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    // transition: all 2s ease-in;

    .slide-content {
      max-width: 80%;
      // margin-inline: 4rem;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
    }
    .services {
      flex: 1;
      flex-shrink: 1;
    }
    .figure {
      flex: 1;
      flex-shrink: 0;
      flex-grow: 1;

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: fill;
      }
    }
  }
  h1,
  h2 {
    text-transform: uppercase;
    text-align: center;
  }
</style> -->
