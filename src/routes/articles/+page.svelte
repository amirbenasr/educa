<script>
  export let data;
  const { posts } = data;
</script>

<section class="container">
  <h1 class="title">News at Educa Us</h1>
  <div class="articles">
    {#each posts as post}
      <div class="article">
        <header>
          <span class="article-category">{post.category}</span>
          <span class="article-title">{post.title.rendered}</span>
          <p>{@html post.excerpt.rendered}</p>
          <a href={`/articles/${post.slug}`}>Read More</a>
        </header>
        <div class="img">
          <img src={post.image} alt="" />
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  .articles {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .article {
    cursor: pointer;
    color: black;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--primary-color-lighter);
    p {
      transition: all 200ms ease-in;
      font-weight: 500;
    }
    p:hover {
      color: var(--primary-color);
    }
    .img {
      img {
        width: 100%;
        aspect-ratio: 1.15/1;
      }
    }

    a {
      text-decoration: none;
      color: white;
      background: hsl(240, 45%, 55%);
      padding: 0.2rem;
      border-radius: 5px;
      margin-top: 0.5rem;
    }

    span {
      display: block;
    }
    .article-title {
      color: black;
      font-weight: 500;
    }
    .article-category {
      color: var(--primary-color-lighter);
      font-size: 0.8rem;
      font-style: italic;
      text-transform: uppercase;
    }
  }
</style>
