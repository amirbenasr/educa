<script defer>
  import { onMount } from "svelte";
  let featured;
  onMount(() => {
    const listedVideos = document.querySelectorAll("video#list");
    let currentActive = document.querySelector(".active");
    listedVideos.forEach((video) => {
      const _url = video.getAttribute("src");
      video.addEventListener("click", (e) => {
        currentActive.classList.remove("active");
        video.classList.add("active");
        currentActive = document.querySelector(".active");
        featured.setAttribute("src", _url);
      });
    });
  });
</script>

<section class="testimonials">
  <h1>client testimonials</h1>
  <div class="testimonials_container">
    <div class="featured_testimonial">
      <!-- svelte-ignore a11y-media-has-caption -->
      <video
        controlslist="nodownload"
        bind:this={featured}
        id="featured_video"
        controls
        src="https://res.cloudinary.com/dyw4slb0a/video/upload/v1684865635/HAYTHEM_CARRe%CC%81_mjzsrk.mov"
      />
    </div>
    <div class="wrapper">
      <div class="testimonial_list">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video
          class="active"
          id="list"
          src="https://res.cloudinary.com/dyw4slb0a/video/upload/v1684865635/HAYTHEM_CARRe%CC%81_mjzsrk.mov"
        />
        <video
          id="list"
          src="https://res.cloudinary.com/dyw4slb0a/video/upload/v1684865383/walid_ferjani_2_gistfm.mov"
        />
        <video
          id="list"
          src="https://res.cloudinary.com/dyw4slb0a/video/upload/v1684865024/mahdi_te%CC%81moignge_002_yy6tfs.mov"
        />
        <video
          id="list"
          src="https://res.cloudinary.com/dyw4slb0a/video/upload/v1684864466/te%CC%81moignage_3_u8rrrb.mov"
        />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  h1 {
    color: var(--primary-color) !important;
  }
  @media (max-width: 980px) {
    .testimonials_container {
      flex-direction: column;
      // align-items: center;
      // background: white;
    }
    .testimonial_list {
      flex-direction: row !important;
      height: 8rem;
      max-width: max-content !important;
    }
    .wrapper {
      /* min-height: 200px; */
      overflow-x: scroll !important;
      height: auto !important;
    }
    .featured_testimonial {
      height: auto !important;
    }
  }
  .active {
    border: 2px solid hsl(150, 150, 30%);
  }
  video {
    aspect-ratio: 16/9;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  video#list {
    background: white;
    margin: 0 auto;
    aspect-ratio: 16/9;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    cursor: pointer;
  }
  .testimonials {
    height: auto;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto !important;
  }
  .testimonials_container {
    // border: 1px solid ;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    gap: 1.5rem;
  }

  .wrapper {
    height: 500px;
    overflow-y: scroll;
  }
  .wrapper::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  .wrapper::-webkit-scrollbar-thumb {
    background-color: hsl(0, 0, 100%);
    border-radius: 3px;

    &:hover {
      background-color: hsl(0, 0, 50%);
    }
  }
  .testimonial_list {
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.2rem;
  }

  .featured_testimonial {
    background: white;
    width: auto;
    height: 500px;
    display: flex;
  }

  .testimonial {
    margin: 0 auto;
    width: 80%;
    height: 150px;
    aspect-ratio: 16/9;
    object-fit: contain;
    background: green;
  }

  h1 {
    text-transform: uppercase;
  }
</style>
