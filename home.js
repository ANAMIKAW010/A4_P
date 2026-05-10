// Dropdown: close on outside click, toggle on trigger click
document.addEventListener('click', e => {
  document.querySelectorAll('.language-selector, .dropdown-container').forEach(el =>
    el.classList[el.contains(e.target) && e.target.closest('.dropdown-trigger, .nav-icon-btn') ? 'toggle' : 'remove']('active')
  );
});

// Letter-by-letter hero text animation
function animateText(el, delay = 0, step = 0.05) {
  if (!el) return;
  el.innerHTML = [...el.textContent].map((c, i) =>
    `<span style="animation-delay:${delay + i * step}s">${c === ' ' ? '&nbsp;' : c}</span>`
  ).join('');
}

// Slideshow: swap active image every 6 seconds
const slideImgs = document.querySelectorAll('.slides img');
let cur = 0;
if (slideImgs.length) {
  setInterval(() => {
    slideImgs[cur].classList.remove('active');
    cur = (cur + 1) % slideImgs.length;
    slideImgs[cur].classList.add('active');
  }, 6000);
}

// Theme toggle — mirrors scriptm.js pattern
const themeBtn = Object.assign(document.createElement('button'), {
  className: 'theme-toggle', textContent: 'Dark Mode'
});
document.body.appendChild(themeBtn);
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

// Init: animate hero text on load
document.addEventListener('DOMContentLoaded', () => {
  animateText(document.querySelector('.title'),   0,    0.08);
  animateText(document.querySelector('.tagline'), 1.5,  0.05);
});