import { BASE_URL, POSTS_API_URL } from "$lib/consts.js";

export const GET = async ({ fetch }) => {
  const response = await fetch(BASE_URL + POSTS_API_URL);
  const posts = await response.json();
  return new Response(JSON.stringify(posts));
};
