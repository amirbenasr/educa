<script>
  export let figure = "";
  export let title = "";
  export let svg = "";
  export let linePosition = { left: 0, right: 0 };
  export let theme = { color1: "", color2: "" };
  export let positions = { figure: "3 / 7", stickers: "8 / 12" };
  export let titleGrid = "1/8";
</script>

<div class="program__container">
  <header>
    <div class="program__title" style:grid-column={titleGrid}>
      <h1 style:color={theme.color1}>{title}</h1>
    </div>
  </header>
  <div class="content">
    <div class="left" style:grid-column={positions.figure}>
      <img src={figure} alt="" />
    </div>
    <div class="right" style:grid-column={positions.stickers}>
      <slot name="stickers" {theme} />
    </div>
  </div>
</div>

<style lang="scss">
  .lines {
    position: absolute;
    z-index: -1;
  }
  .program__container {
    // padding: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    img {
      height: 100%;
      max-width: 100%;
      object-fit: contain;
      aspect-ratio: 1/1;
    }

    .right {
      grid-row: 1;
    }

    .program__title {
      grid-column: 1;

      h1 {
        font-size: var(--font-size-lg);
        text-transform: capitalize;
        color: var(--primary-color);
        margin-bottom: 1.5rem;
      }
    }

    .content {
      grid-column: 1/13;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
  }
</style>
