<script>
  import map from "$lib/images/map.png";
</script>

<section id="destinations" class="destinations">
  <!-- <span class="title">our <h1 class="wb">destinations</h1></span> -->
  <h1 class="title">
    our <div class="wb"><span>destinations</span></div>
  </h1>
  <p class="max-t">
    We work <span style:color={"var(--accent-color)"}>closely</span> with High Schools,
    Universities, and other educational institutions to create customized programs
    that meet the specific needs and interests of their students.
  </p>

  <div class="map">
    <div class="stats-banner">
      <div class="stat-block">
        <span class="title">+50</span>
        <span class="sub-title">Universitites and High Schools</span>
      </div>
      <hr />
      <div class="stat-block">
        <span class="title">95%</span>
        <span class="sub-title">Master acceptance rate</span>
      </div>
      <hr />
      <div class="stat-block">
        <span class="title">100%</span>
        <span class="sub-title">Intergration rate</span>
      </div>
    </div>
    <img src={map} alt="" srcset="" />
  </div>
</section>

<style lang="scss">
  h1.title {
    margin-bottom: 1rem !important;
  }
  @media (min-width: 1000px) {
    .stats-banner {
      max-width: 150px !important;

      span {
        font-size: 1em !important;
      }
      .title {
        font-size: 2em !important;
      }
    }
  }
  @media (max-width: 720px) {
    .stats-banner {
      max-width: 90px !important;
      span {
        font-size: 0.7em !important;
      }
      .title {
        font-size: 1.5em !important;
      }
    }
  }
  @media (max-width: 580px) {
    .stats-banner {
      max-width: 65px !important;
      span {
        font-size: 0.6em !important;
      }
      .title {
        font-size: 1em !important;
      }
    }
  }
  section {
    margin-bottom: 0 !important;
  }
  .destinations {
    padding-block: 1rem;
    position: relative;
    background: hsla(213, 81%, 21%, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .max-t {
      max-width: 60%;
      font-size: var(--font-size-base);
      // max-width: 700px;
      text-align: center;
    }
    .title {
      text-transform: uppercase;
      color: white;
    }
    .wb {
      display: inline-flex;
      padding: 0.2rem;
      background-color: var(--accent-color);
      rotate: 1deg;
      span {
        rotate: -1deg;
      }
    }
  }
  .map {
    width: 100%;
    position: relative;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    img {
      max-width: 80%;
      max-height: 100%;
    }
  }
  .stats-banner {
    margin-top: 1rem;
    // margin-bottom: 1rem;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: var(--accent-color);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // gap: 1rem;
    max-width: 100px;
    font-size: 100%;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;

    span {
      font-size: 0.8em;
      display: block;
      color: white;
      line-height: 3ex;
    }
    .title {
      line-height: 2ex;

      font-size: 1.5em;
      font-weight: 600;
    }
  }
</style>
