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
      <video
        controlslist="nodownload"
        bind:this={featured}
        id="featured_video"
        controls
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </div>
    <div class="wrapper">
      <div class="testimonial_list">
        <video
          class="active"
          id="list"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <video
          id="list"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        />
        <video
          id="list"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        />
        <video
          id="list"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        />
        <video
          id="list"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        />
        <video id="list" src="https://www.w3schools.com/html/mov_bbb.mp4" />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @media (width < 980px) {
    .testimonials_container {
      flex-direction: column;
    }
    .testimonial_list {
      flex-direction: row !important;
      height: 8rem;
      max-width: max-content !important;
    }
    .wrapper {
      // min-height: 200px;
      overflow-x: scroll !important;
      height: auto !important;
    }
  }
  .active {
    border: 2px solid hsl(150, 150, 30%);
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  video#list {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  .testimonials {
    height: auto;
    position: relative;
    overflow: hidden;
  }
  .testimonials_container {
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    width: 100%;
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
    max-width: auto;
    height: 500px;
    background: red;
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
