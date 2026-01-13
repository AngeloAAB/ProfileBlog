import { getPosts } from '../services/postsService.js';
import { BASE_PATH } from '../config.js';

export default async function Blog() {
  const posts = await getPosts();

  return `
    <section>
      <h1>Blog</h1>
      <ul>
        ${posts.map(p => `
          <li>
            <a href="${BASE_PATH}/post?id=${p.id}" data-link>
              ${p.title}
            </a>
          </li>
        `).join('')}
      </ul>
    </section>
  `;
}
