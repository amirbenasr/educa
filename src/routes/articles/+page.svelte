<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  export let data;
  let article;
  const { posts } = data;
</script>

<section class="container">
  <div class="articles">
    <h1 class="title">News at Educa Us</h1>
    {#each posts as post}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => {
          goto(`articles/${post.slug}`);
        }}
        class="article"
        bind:this={article}
      >
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
  a {
    position: absolute;
    bottom: 5;
  }
  .articles {
    margin-top: 2rem;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .article {
    position: relative;
    cursor: pointer;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
      width: 150px;
      height: 150px;

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: fill !important;
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
