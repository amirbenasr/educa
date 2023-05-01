<script>
  export let props = {
    title: "",
    content: "",
    rot: 0,
    theme: { color1: "", color2: "" },
  };
  const { title, content, rot, theme } = { ...props };
</script>

<div
  class="sticker"
  style:background-color={theme.color1}
  style:rotate={`${rot}deg`}
>
  <div class="sticker-content" style:rotate={`${-rot}deg`}>
    <span style:color={theme.color2}>#{props.title}</span>
    <p>{props.content}</p>
  </div>
</div>

<style lang="scss">
  @media (max-width: 800px) {
    .sticker {
      margin-top: 0.5rem !important;
    }
    .sticker-content {
      padding: 0.8rem !important;
    }
  }
  .sticker {
    position: relative;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    background: #000;

    .sticker-content {
      padding: 1rem;
    }
    span {
      font-weight: 600;
      font-size: var(--font-size-md);
      text-transform: capitalize;
    }
    p {
      font-size: var(--font-size-sm);

      color: white;
      font-weight: 400;
    }
  }
</style>
