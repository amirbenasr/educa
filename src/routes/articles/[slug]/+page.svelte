<script>
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { BASE_URL, POSTS_API_URL } from "$lib/consts.js";

  import { format } from "date-fns";
  import { onMount } from "svelte";
  let post;
  const loadPost = async () => {
    const slug = $page.params.slug;
    const res = await fetch(`${BASE_URL}${POSTS_API_URL}?slug=${slug}&_embed`);
    const posts = await res.json();
    console.log(posts);
    post = posts[0];
    post.category = post._embedded["wp:term"][0][0].name;

    if (post?.image)
      post.image = post?._embedded["wp:featuredmedia"][0].source_url;
    return post;
  };
</script>

<section class="article container">
  {#await loadPost()}
    <p>Loading post...</p>
  {:then post}
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
  {/await}
</section>

<style>
  .article {
    max-width: 80%;
    margin: 0 auto;
    color: black;
  }
</style>
