<script lang="ts">
  import type { Testimonial } from "$lib/testimonial.type";
  import TestimonialCard from "./testimonial-card.svelte";
  let testimonials: Testimonial[] = [
    {
      content:
        "Sunt irure quis consequat culpa qui est laboris Lorem. Exercitation ad tempor aliqua quis do velit. Sint sint mollit nisi irure laborum non eu aliqua nulla enim enim laboris ipsum elit.",
      name: "Cornell",
      pic: "http://placeimg.com/640/480",
      profession: "Chief Quality Analyst",
    },
    {
      content:
        "Culpa ipsum Lorem ea elit. Dolore et id quis deserunt. Aute enim ea in incididunt aute proident esse. Do mollit reprehenderit cillum nulla nostrud enim nulla elit est adipisicing. Elit quis ex reprehenderit eiusmod duis qui commodo.",
      name: "Jayce",
      pic: "http://placeimg.com/640/480",
      profession: "International Functionality Officer",
    },
    {
      content:
        "Aute exercitation incididunt veniam cupidatat minim adipisicing quis qui do esse anim proident ullamco. Culpa enim commodo anim deserunt quis aliqua. Et ullamco eiusmod officia nostrud dolore consectetur occaecat enim eu deserunt culpa sunt voluptate.",
      name: "Brendon",
      pic: "http://placeimg.com/640/480",
      profession: "Customer Program Engineer",
    },
    {
      content:
        "Ullamco irure ut dolor dolor laborum irure pariatur ullamco amet tempor. Officia magna exercitation nostrud ea excepteur sunt occaecat deserunt velit fugiat sint mollit. Et ad non eu eu minim labore cupidatat in nisi. Eu esse occaecat in irure ad eu esse culpa nostrud pariatur. Nulla deserunt nulla nisi ea. Tempor non magna sint tempor reprehenderit in in commodo ipsum nisi qui. Fugiat exercitation non occaecat anim nulla magna reprehenderit eu.",
      name: "Kory",
      pic: "http://placeimg.com/640/480",
      profession: "Future Web Designer",
    },
    {
      content:
        "Labore mollit nulla irure labore. Ullamco duis consectetur elit qui ea minim aliqua eiusmod. Nulla consectetur in amet occaecat et ut aliqua non nisi et nulla enim qui. Dolor fugiat aute ullamco velit labore cillum labore dolor duis ad ex magna aliquip. Elit ex deserunt ullamco proident pariatur anim mollit cillum qui proident qui in.",
      name: "Wiley",
      pic: "http://placeimg.com/640/480",
      profession: "Dynamic Intranet Orchestrator",
    },
    {
      content:
        "Dolor id officia eiusmod cillum esse. Ea consequat in ut esse culpa laborum proident duis. Tempor irure voluptate duis sint. Elit deserunt elit eiusmod sint ut voluptate. In ad in est qui reprehenderit elit quis.",
      name: "Giuseppe",
      pic: "http://placeimg.com/640/480",
      profession: "Future Accounts Director",
    },
  ];
</script>

<div class="blue">
  <section class="container testimonials">
    <h1 style="margin-bottom: 1rem;">Testimonials</h1>
    <div class="box">
      {#each testimonials as testimonial}
        <TestimonialCard {testimonial} />
      {/each}
    </div>
  </section>
</div>

<style lang="scss">
  .blue {
    background: var(--primary-color);
  }
  @media (min-width: 820px) {
    .box {
      display: grid !important;
      //   grid-template-columns: 1fr 1fr 1fr;
      //   grid-auto-rows: 1fr;
      grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    }
  }
  .testimonials {
    p {
      color: black;
      font-weight: 400;
      line-height: 1.6;
    }
    background: var(--primary-color);

    .box {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
