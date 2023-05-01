<div class="chart-banner">
  <div class="chart-block">
    <span class="emph">#1</span>
    <span class="content">study & travel agency in tunisia</span>
  </div>
  <div class="chart-block">
    <span class="emph">+215</span>
    <span class="content">students all across the us</span>
  </div>
  <div class="chart-block">
    <span class="emph">95%</span>
    <span class="content">visa approval rate</span>
  </div>
</div>

<style lang="scss">
  @media (min-width: 1020px) {
    .chart-block {
      font-weight: 600;
      display: flex;
      flex-direction: row !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 1rem;
      text-transform: uppercase;
      .emph {
        font-size: clamp(3em, 0.25vw + 2em, 0.5em) !important;
      }
      .content {
        font-size: clamp(0.5em, 0.5vw + 0.5em, 1em);
        max-width: 200px;
      }
    }
  }
  .chart-banner {
    display: flex;
    position: absolute;
    align-items: start;
    justify-content: space-around;
    padding-inline: clamp(1rem, 5vw, 1rem);
    width: 100%;
    background-color: var(--accent-color);
    bottom: 0;
  }
  .chart-banner > * {
    flex: 1;
  }
  .chart-block {
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-transform: capitalize;
    text-align: center;
    .emph {
      font-size: clamp(2em, 0.25vw + 1em, 0.5em);
    }
    .content {
      font-size: clamp(0.5em, 0.1vw + 0.5em, 1em);
    }
  }
</style>
