<script>
  import { browser } from "$app/environment";
  import image from "$lib/images/logistics.jpeg";
  import image2 from "$lib/images/language.jpeg";
  import image3 from "$lib/images/hero.jpg";
  import { onMount } from "svelte";

  let selectedArticle = 1;

  let options = {
    root: null,
    rootMargin: "0px 0px -30px 0px",
    threshold: 1.0,
  };
  onMount(() => {
    let element = document.querySelectorAll("article");

    let observer = new IntersectionObserver(callback, options);
    element.forEach((element) => observer.observe(element));
  });

  function callback(element) {
    console.log(element[0].target.id);
    selectedArticle = element[0].target.id;
    selectImage(selectedArticle);
  }
  function selectImage(id) {
    document.querySelectorAll(".list-right img").forEach((element) => {
      element.classList.remove("active");

      if (selectedArticle.toString() == element.id) {
        element.classList.add("active");
      }
    });

    let more = document.querySelectorAll(".more");
    more.forEach((_more) => {
      _more.addEventListener("mouseover", (e) => {
        let svg = e.target.querySelector("svg");
        if (svg) {
          svg.classList.add("move");
        }
      });
      _more.addEventListener("mouseleave", (e) => {
        let svg = e.target.querySelector("svg");
        if (svg) {
          svg.classList.remove("move");
        }
      });
    });
  }
</script>

<h1 style="text-align: center;  padding-block:20px;background:#f8f8f8">
  What we offer at educa us ?
</h1>
<section class="offers">
  <div class="container">
    <div class="row">
      <div class="list-right">
        <img id="1" src={image3} class="active" alt="" />
        <img id="2" src={image2} alt="" />
        <img id="3" src={image} alt="" />
      </div>
      <div class="list-left">
        <article id="1">
          <h1 class="special">PROGRAM DESIGN & CUSTOMIZATION</h1>
          <p>
            We help choose destinations, develop itineraries, and plan
            educational activities. We work with educational institutions to
            create customized programs that meet the specific needs and
            interests of our students.
          </p>
          <div class="tags">
            <span class="tag">
              <i class="fa-solid fa-map-location-dot" />
              Destinations</span
            >
            <span class="tag">
              <i class="fa-brands fa-connectdevelop" />
              Itineraries
            </span>
            <span class="tag">
              <i class="fa-solid fa-school" />
              Educational
            </span>
          </div>
          <a class="more" href="#">
            <span>Know More</span>
            <span>
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                /></svg
              >
            </span>
          </a>
        </article>
       
        <article id="2">
          <h1 class="special">ACADEMIC COURSEWORK</h1>
          <p>
            We offer a set of academic language classes suitable for every
            level. We work with local partners and institutions to provide
            opportunities for students to learn about history, art, and
            language.
          </p>
          <div class="tags">
            <span class="tag">
              <i class="fa-solid fa-language" />
              Language</span
            >
            <span class="tag">
              <i class="fa-solid fa-graduation-cap" /> Academic
            </span>
            <span class="tag">
              <i class="fa-solid fa-handshake" />
              Partners
            </span>
          </div>
          <a class="more" href="#">
            <span>Know More</span>
            <span>
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                /></svg
              >
            </span>
          </a>
        </article>
        <article id="3">
          <h1 class="special">LOGISTICS AND COORDINATION</h1>
          <p>
            We handle the logistics of travel and coordinate all aspects of the
            program, from transportation to lodging to meals.We also provide
            on-site support and guidance to participants.
          </p>
          <div class="tags">
            <span class="tag">
              <i class="fa-solid fa-truck-plane" />
              Logistics</span
            >
            <span class="tag">
              <i class="fa-solid fa-hand-holding-medical" />
              Support
            </span>
            <span class="tag">
              <i class="fa-solid fa-person-shelter" />
              Security
            </span>
          </div>
          <a class="more" href="#">
            <span>Know More</span>
            <span>
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                /></svg
              >
            </span>
          </a>
        </article>
      </div>
    </div>
  </div>
</section>

<style>
  .tags {
    display: flex;
    gap: 0.2rem;
    margin-bottom: 2rem;
  }
  span.tag {
    color: white;
    background: var(--primary-color);
    padding-inline: 0.4rem;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    border-radius: 15px;
  }
  @media (width < 750px) {
    .list-right {
      display: none !important;
    }
    article {
      margin: 0 auto !important;
      
      margin-bottom: 1rem !important;
      height: auto !important;
    }
    .tags {
    display: flex;
    /* gap: 1rem; */
    margin-bottom: 1rem;
  }
  article {
    margin-bottom: 2rem;
  }
  /* h1,p {
    text-align: center;

  } */
  }
  h1 {
    text-transform: uppercase;
    margin-bottom: 2rem;
    color: var(--primary-color) !important;
  }
  h1.special {
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    /* padding: 1rem; */
    border-radius: 60% 0% 42% 10% / 5% 15% 100% 10%;
  }
  p {
    line-height: 1.4rem;
    font-weight: 500;
    font-size: 1rem !important;
    color: black !important;
  }
  a {
    border-radius: 15px;
    padding-inline: 0.5rem;
    font-weight: bold;
    width: fit-content;
    text-decoration: none;
    background: var(--accent-color) !important;
    color: white;
    vertical-align: middle !important;
  }
  svg {
    padding-left: 0.5rem;
    vertical-align: middle !important;
    transition: all 0.2s ease;
  }
  :global(.move) {
    padding-left: 1rem !important;
  }
  .tags {
    text-align: center;
    width: 100%;
    align-items: center !important;
    justify-content: start !important;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70vh;
    padding-left: 1rem;
    margin-bottom: 2rem !important;
    /* padding: 1rem; */
    /* background: blue; */
    /* border-radius: 40% 16% 42% 10% / 29% 0% 45% 10%; */
    /* border-top-left-radius: 15%; */
  }
  article p {
    padding-bottom: 16px;
  }

  .offers {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-bottom: 48px;
  }
  .row {
    display: flex;
    flex-direction: row-reverse;
    gap: 4rem;
    width: 100%;
  }
  .list-right {
    height: 70vh !important;
    position: sticky;
    flex: 1;
    top: calc(50% - 35vh);
    left: 50%;
  }
  .list-left {
    flex: 1;
  }
  img {
    border-radius: 15%;
    /* border-radius: 40% 25% 42% 10% / 29% 21% 71% 10%; */
    opacity: 0;
    height: 70vh;
    width: 100%;
    position: absolute;
    top: calc(50% - 35vh);
    overflow: hidden;
    /* max-height: 100%; */
    object-fit: cover !important;
    transition: 0.5s all ease 0s;
  }

  :global(.active) {
    z-index: 5;
    opacity: 1 !important;
    transition: 0.5s all ease 0s;
  }
</style>
