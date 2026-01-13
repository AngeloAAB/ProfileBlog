import { BASE_PATH } from '../config.js';

const POSTS_URL = `${BASE_PATH}/data/post.json`;

export async function getPosts() {
  const response = await fetch(POSTS_URL);
  if (!response.ok) {
    throw new Error('Failed to load posts');
  }
  return response.json();
}

export async function getPostById(id) {
  const posts = await getPosts();
  return posts.find(p => p.id === id);
}
