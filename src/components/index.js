import './career-card.js';
import './career-selector.js';

window.addEventListener('DOMContentLoaded', () => {
  const selector = document.querySelector('career-selector');
  const card = document.querySelector('career-card');

  selector.addEventListener('career-selected', e => {
    card.career = e.detail;
  });
});
