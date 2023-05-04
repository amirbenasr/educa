<script>
  export let data;
  const { post } = data;
</script>

<section class="container article">
  <h1>{post.title.rendered.toString()}</h1>
  {#if post.image}
    <img src={post.image} alt="" srcset="" />
  {/if}
  <p>{@html post.content.rendered}</p>
</section>
