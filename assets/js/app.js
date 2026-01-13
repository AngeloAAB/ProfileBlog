import { BASE_PATH } from './config.js';
import { router } from './router.js';  // ✅ <--- ADD THIS


document.querySelectorAll('nav a[data-link]').forEach(link => {
  link.href = BASE_PATH + link.getAttribute('href');
});



window.addEventListener('DOMContentLoaded', () => {
  router();
});

window.addEventListener('popstate', router);

// Handle SPA link clicks
document.addEventListener('click', e => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    history.pushState(null, '', e.target.href);
    router();
  }
});
