<script>
  import { goto } from "$app/navigation";
  import { BASE_URL, POSTS_API_URL } from "$lib/consts";
  import { format } from "date-fns";
  import { onMount } from "svelte";
  var result = format(new Date("2023-07-04T21:51:57"), "MM/dd/yyyy");
  let article;
  let posts = [];

  function formatDate(date) {
    var result = format(new Date(date), "MMM. dd, yyyy");
    return result;
  }
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
    <ul class="articles">
      {#each posts as post}
        <li>
          <article class="news_article">
            <header>
              <span class="article-category">{post.category}</span>
              <div class="text-wrapper">
                <span class="article-title">{post.title.rendered}</span>
              </div>
              <span class="date"
                >{formatDate(post.date)} | by {post.yoast_head_json
                  .author}</span
              >

              <a href="/articles/{post.slug}">Read More</a>
            </header>
            <div class="img">
              <img src={post.image} alt="" />
            </div>
          </article>
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- <div
          on:click={() => {
            goto(`articles/${post.slug}`);
          }}
          class="article"
          bind:this={article}
        > -->
        <!-- <header>
          </header> -->
      {/each}
    </ul>
  {/await}
</section>

<style lang="scss">
  @media (width < 780px) {
    img {
      width: 200px !important;
    }
    .article-title {
      font-size: 14px !important;
    }
    .date {
      font-size: 14px !important;
    }
    .text-wrapper {
      width: calc(100% - 100px) !important;
    }
  }
  @media (width < 550px) {
    article {
      flex-direction: column !important;
      align-items: start !important;
      justify-content: start !important;
    }
    a {
      font-size: 10px;
      margin-bottom: 0.5rem;
    }
  }
  h1 {
    color: white !important;
  }
  .text-wrapper {
    width: calc(100% - 250px);
  }

  ul.articles {
    color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    gap: 5rem;
  }
  li {
    text-decoration: none;
    list-style: none;
  }
  article {
    width: 100%;
    position: relative;
    cursor: pointer;
    color: black;
    display: flex;
    // border-right: 1px solid white;
    align-items: stretch;
    justify-content: start;
    padding: 1rem;
    // padding-bottom: 1rem;
    border-bottom: 1px solid #dfdfdf;
    header {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: start;
    }
    .content {
      // max-width: 15rem;
      max-height: 5rem;
      overflow: hidden;
      margin-bottom: 1rem;
      p {
        color: white !important;
        transition: all 200ms ease-in;
        font-weight: 500;
      }
    }
    p:hover {
      color: var(--primary-color);
    }
    .img {
      width: 250px;

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
      margin-top: auto;
      flex-grow: 0;
    }

    span {
      display: block;
    }
    .date {
      padding-top: 0.5rem;
      color: white;
      font-weight: 300;
    }
    .article-title {
      font-size: 1.2rem;
      height: auto;
      color: hsl(240, 63%, 87%) !important;
      font-weight: 900;
    }
    .article-category {
      color: white;
      font-size: 0.75rem;
      text-transform: uppercase;
    }
  }
</style>
