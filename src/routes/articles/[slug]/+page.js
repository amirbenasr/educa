/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  const loadPost = async () => {
    console.log(`/api/post/?slug=${params.slug}`);
    const response = await fetch(`/api/post?slug=${params.slug}`);
    const post = await response.json();
    return post;
  };

  return { post: loadPost() };
}
