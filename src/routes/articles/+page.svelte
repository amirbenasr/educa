<script>
  import { goto } from "$app/navigation";
  import { BASE_URL, POSTS_API_URL } from "$lib/consts";
  import { onMount } from "svelte";

  let article;
  let posts = [];

  async function loadPosts() {
    const response = await fetch(BASE_URL + POSTS_API_URL + "?_embed");
    const _posts = await response.json();
    _posts.map((post) => {
      if (post._embedded && post._embedded["wp:featuredmedia"]) {
        post.image = post._embedded["wp:featuredmedia"][0].source_url;
      }
      post.category = post._embedded["wp:term"][0][0].name;
    });
    posts = _posts;
    return posts;
  }
</script>

<section class="container">
<h1 class="title" style="margin-bottom: 1rem;">News at Educa Us</h1>
  {#await loadPosts()}
    <p>Loading...</p>
  {:then posts}
    {#each posts as post}
    <div class="articles">

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
      on:click={() => {
        goto(`articles/${post.slug}`);
      }}
        class="article"
        bind:this={article}
        >
        <header>
          <div class="img">
            <img src={post.image} alt="" />
          </div>
          <span class="article-category">{post.category}</span>
          <span class="article-title">{post.title.rendered}</span>
          <p>{@html post.excerpt.rendered}</p>
          <a href={`/articles/${post.slug}`}>Read More</a>
        </header>
        
      </div>
    </div>
    {/each}
  {/await}
</section>

<style lang="scss">
  h1 {
    color: white !important;
  }
  a {
    position: relative;
    bottom: 5;
  }
  .articles {
    color: white;
    // height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 2rem;
    margin: 0 auto;
    gap: 1rem;
  }
  .article {
    position: relative;
    cursor: pointer;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--primary-color-lighter);
    p {
      color: white !important;
      transition: all 200ms ease-in;
      font-weight: 500;
    }
    p:hover {
      color: var(--primary-color);
    }
    .img {
      width: 400px;
      height: 250px;

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
      color: hsl(240, 45%, 55%) !important;
      font-weight: 800;
    }
    .article-category {
      color: white;
      font-size: 0.8rem;
      font-style: italic;
      text-transform: uppercase;
    }
  }
</style>
