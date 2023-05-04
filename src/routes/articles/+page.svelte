<script>
  export let data;
  const { posts } = data;
</script>

<section class="container">
  <h1>Articles</h1>
  {#each posts as post}
    <h1>{post.title.rendered}</h1>
    <p>{@html post.excerpt.rendered}</p>
    <a href={`/articles/${post.slug}`}>Read More</a>
  {/each}
</section>

<style>
</style>
