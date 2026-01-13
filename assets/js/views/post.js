import { getPostById } from '../services/postsService.js';

export default async function Post() {
  const params = new URLSearchParams(window.location.search);
  const post = await getPostById(params.get('id'));

  if (!post) return `<p>Post not found</p>`;

  return `
    <article>
      <h1>${post.title}</h1>
      <small>${post.date}</small>
      <p>${post.content}</p>
    </article>
  `;
}
