import { BASE_URL, POSTS_API_URL } from "../../lib/consts";
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const response = await fetch("/api/articles");
  const posts = await response.json();

  return {
    posts,
  };
}
