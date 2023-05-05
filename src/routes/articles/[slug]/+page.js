/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  const loadPost = async () => {
    const response = await fetch(`/api/post?slug=${params.slug}`);
    const post = await response.json();
    return post;
  };

  return { post: loadPost(), slug: params.slug };
}
