import { BASE_URL, POSTS_API_URL } from "$lib/consts";

export const GET = async ({ url }) => {
  console.log("are we here?");
  try {
    const slug = url.searchParams.get("slug");
    const res = await fetch(`${BASE_URL}${POSTS_API_URL}?slug=${slug}`);
    const posts = await res.json();
    const post = posts[0];
    if (post?.image)
      post.image = post?._embedded["wp:featuredmedia"][0].source_url;
    return new Response(JSON.stringify(post));
  } catch (error) {
    console.log(error);
  }
};
