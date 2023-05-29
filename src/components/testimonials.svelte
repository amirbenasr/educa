<script lang="ts">
  import type { Testimonial } from "$lib/testimonial.type";
  import TestimonialCard from "./testimonial-card.svelte";
  let testimonials: Testimonial[] = [
    {
      content:
        "EducaUs offers expert guidance to help you choose the right college and navigate the application process, ultimately helping you achieve success in your academic and professional pursuits.",
      name: "Mahdi Daraji",
      pic: "mahdi.jpg",
      profession: "Student",
    },
    {
      content:
        "Despite my unique personal profile, there are solutions available to help me overcome any challenges and succeed in my academic and professional pursuits. With the right resources and support from EducaUS, I can navigate my differences and find a path that aligns with my goals and aspirations",
      name: "Walid Ferjani",
      pic: "walid.jpg",
      profession: "Student",
    },
    {
      content:
        "With the guidance and assistance of EducaUs, I was able to successfully pursue my studies in IT and obtain a visa to study in the United States. I'm grateful for their support and wish them the best as they continue to help other students achieve their academic and professional goals. ",
      name: "Siwar Ben Khlifa",
      pic: "siwar.jpg",
      profession: "Student",
    },
    {
      content:
        "EducaUs provides tailored support and guidance to help you identify the best college or university for your academic and career goals, and assists you throughout the application process to ensure your success.",
      name: "Adem Haddaji",
      pic: "adem.jpg",
      profession: "Student",
    },
    {
      content:
        "Since childhood, I have nurtured the dream of studying in the United States, and thanks to EducaUs, I was able to realize that dream. The English language reinforcement sessions organized by EducaUs enabled me to improve significantly, and I received assistance from their team throughout my academic journey.",
      name: "Aya Trabelsi",
      pic: "eya.jpg",
      profession: "Student",
    },
    {
      content:
        "EducaUs provided me with invaluable guidance and support that enabled me to achieve my dream of studying in the United States in the field of IT. With their help, I successfully obtained a visa and embarked on a journey of academic excellence. I am deeply thankful to EducaUs and their team for their dedication to helping students achieve their aspirations.",
      name: "Haythem el ghribi",
      pic: "haythem.jpg",
      profession: "Student",
    },
  ];
</script>

<section class="testimonials blue">
  <!-- <h1 style="margin-top:0;margin-bottom:2rem;">Testimonials</h1> -->
  <div class="box">
    {#each testimonials as testimonial}
      <TestimonialCard {testimonial} />
    {/each}
  </div>
</section>

<style lang="scss">
  @media (max-width: 700px) {
    .box {
      grid-template-columns: 1fr 1fr !important;
      justify-content: center;
      gap: 0.5rem;
    }
  }
  .blue {
    background: var(--primary-color);
  }

  .testimonials {
    padding: 1rem;
    .box {
      display: grid;
      grid-template-columns: repeat(3, minmax(14rem, 18rem));
      justify-content: center;
      gap: 0.5rem;
    }
    p {
      color: black;
      font-weight: 400;
      line-height: 1.6;
    }
    background: var(--primary-color);
  }
</style>
