function animateText(element, delayStart = 0, speed = 0.05) {
  if (!element) return;
  const text = element.textContent.trim();
  element.textContent = '';
  
  [...text].forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    span.style.transform = "translateY(30px)";
    span.style.animation = `popUpLetter 0.6s forwards ${delayStart + (i * speed)}s`;
    element.appendChild(span);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Hero Animations
  animateText(document.querySelector('.title'), 0.5, 0.08);
  animateText(document.querySelector('.tagline'), 1.8, 0.04);

  // 2. Scroll Reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.essential-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
    observer.observe(card);
  });
});

// 3. Dropdown Logic
document.addEventListener('click', (e) => {
    const dropdowns = document.querySelectorAll('.language-selector, .dropdown-container');
    dropdowns.forEach(selector => {
        if (!selector.contains(e.target)) {
            selector.classList.remove('active');
        } else {
            selector.classList.toggle('active');
        }
    });
});
