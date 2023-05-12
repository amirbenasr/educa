import { dev } from "$app/environment";

export const BASE_URL = dev
  ? "https://wordpress.educaus.net"
  : "https://wordpress.educaus.net";

export const POSTS_API_URL = "/wp-json/wp/v2/posts";
