import Home from './views/home.js';
import About from './views/about.js';
import Blog from './views/blog.js';
import Post from './views/post.js';
import { BASE_PATH } from './config.js';

// Map routes to views
const routes = {
  '/': Home,
  '/about': About,
  '/blog': Blog,
  '/post': Post
};

export async function router() {
  // Get current path
  let rawPath = window.location.pathname;

  // Remove the GitHub repo base path
  let path = rawPath.replace(BASE_PATH, '') || '/';

  // For post pages, normalize /post?...
  if (path.startsWith('/post')) path = '/post';

  // Pick view or fallback to Home
  const view = routes[path] || Home;

  // Render view into <main id="app">
  const html = await view();
  document.getElementById('app').innerHTML = html;

  // Scroll to top on route change
  window.scrollTo(0, 0);
}
