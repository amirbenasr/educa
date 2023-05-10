import { dev } from "$app/environment";

export const BASE_URL = dev
  ? "http://localhost/wordpress"
  : "https://educaus.net/index.php";
export const POSTS_API_URL = "/wp-json/wp/v2/posts";
