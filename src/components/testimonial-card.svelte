<script lang="ts">
  import type { Testimonial } from "$lib/testimonial.type";

  let content: HTMLElement;
  let image: HTMLElement;
  export let testimonial: Testimonial = {
    content: "",
    name: "",
    pic: "",
    profession: "",
  };
  const slideText = (e) => {
    content.classList.add("slidetext");
    image.classList.add("zoom");
    image.style.filter = "brightness(30%)";
  };
  const removeText = (e) => {
    image.classList.remove("zoom");
    image.style.filter = "brightness(100%)";
    content.classList.remove("slidetext");
  };
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  class="testimonial__card"
  on:mouseleave={(e) => removeText(e)}
  on:mouseover={(e) => slideText(e)}
>
  <div class="content" bind:this={content}>
    <h2>{testimonial.name}</h2>
    <p>
      {testimonial.content}
    </p>
  </div>
  <img src={testimonial.pic} alt="" srcset="" bind:this={image} />
</div>

<style lang="scss">
  @media (max-width: 720px) {
    img {
      // height: 12rem !important;
      width: auto !important;
      text-align: center !important;
    }
    .content {
      height: min-content;
      font-size: 100%;
      h2 {
        font-size: 10px !important;
      }
      p {
        font-size: 10px !important;
      }
    }
  }
  :global(.slidetext) {
    transform: translateY(0%) !important;
  }
  :global(.zoom) {
    transform: scale(1.02);
  }
  h2 {
    font-size: var(--font-size-md) !important;
  }
  p {
    font-size: var(--font-size-xsm) !important;
  }
  .testimonial__card {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    color: black;
    border-right: 0.5px solid #eee;
    border-bottom: 0.5px solid #eee;
    transition: all 300ms ease-in;

    .content {
      color: white;
      z-index: 1;
      padding: 1rem;
      transform: translateY(200%);
      position: absolute;
      bottom: 0;
      transition: transform 400ms ease-in-out !important ;
    }
    .content::before {
      background: url("");
    }

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: fill;
      transition: all 400ms ease-in-out !important ;
    }
  }
</style>
