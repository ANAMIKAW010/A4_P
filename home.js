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

// Check memory on load for global consistency
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeBtn.textContent = 'Light Mode';
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Init: animate hero text on load
document.addEventListener('DOMContentLoaded', () => {
  animateText(document.querySelector('.title'),   0,    0.08);
  animateText(document.querySelector('.tagline'), 1.5,  0.05);
});

// --- NEW ADDITION: Scroll Reveal Animation for New Sections ---
document.addEventListener('DOMContentLoaded', () => {
  const scrollElements = document.querySelectorAll('.fade-in-up');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
  };

  const displayScrollElement = (element) => {
    element.classList.add('visible');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.15)) {
        displayScrollElement(el);
      }
    });
  }

  // Run once on load, then attach to scroll
  handleScrollAnimation();
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
});
