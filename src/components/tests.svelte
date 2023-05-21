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
    height: 800px;
    width: 1200px;
    overflow: auto;
  }
  .testimonials_container {
    padding: 2rem;
    display: flex;
    gap: 1.5rem;
    height: 300px;
  }

  .wrapper {
    min-height: 400px;
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
    width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.2rem;
  }

  .featured_testimonial {
    width: 720px;
    height: 400px;
    aspect-ratio: 16/9;
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
