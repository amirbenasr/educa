<script>
  export let data;
  const { post, slug } = data;
  import { format } from "date-fns";
</script>

<section class="article container">
  <div class="article">
    <h6>{format(new Date(post.date), "dd, MMM YYY")}</h6>
    <h5>{post.category}</h5>
    <hr />
    <h1 class="title">{post.title.rendered.toString()}</h1>
    {#if post.image}
      <img src={post.image} alt="" srcset="" />
    {/if}
    <p>{@html post.content.rendered}</p>
  </div>
</section>

<style>
  .article {
    max-width: 80%;
    margin: 0 auto;
    color: black;
  }
</style>
