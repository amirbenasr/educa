import preprocessor from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
// import adapter from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocessor(),
  kit: {
    adapter: adapter({
      fallback: "index.html",
    }),
  },
};

export default config;
