import { BASE_URL, POSTS_API_URL } from "../../../lib/consts";
export const GET = async ({ url, locals }) => {
  const slug = url.searchParams.get("slug");
  const language = locals.language;
  console.log(language);
  const res = await fetch(`${BASE_URL}${POSTS_API_URL}?slug=${slug}&_embed`);
  const posts = await res.json();
  const post = posts[0];
  post.category = post._embedded["wp:term"][0][0].name;

  if (post?.image)
    post.image = post?._embedded["wp:featuredmedia"][0].source_url;
  return new Response(JSON.stringify(post));
};
