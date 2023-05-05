import { BASE_URL, POSTS_API_URL } from "$lib/consts.js";

export const GET = async ({ fetch }) => {
  const response = await fetch(BASE_URL + POSTS_API_URL);
  const posts = await response.json();
  posts.map((post) => {
    console.log(post._embedded);
    if (post._embedded && post._embedded["wp:featuredmedia"]) {
      post.image = post._embedded["wp:featuredmedia"][0].source_url;
    }
    post.category = post._embedded["wp:term"][0][0].name;
  });
  return new Response(JSON.stringify(posts));
};
