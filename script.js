/**
 * 1. Dropdown & Navigation Logic
 * Handles closing menus when clicking outside and toggling active states.
 */
document.addEventListener('click', (e) => {
    const dropdowns = document.querySelectorAll('.language-selector, .dropdown-container');
    
    dropdowns.forEach(selector => {
        // Close dropdown if user clicks anywhere outside of it
        if (!selector.contains(e.target)) {
            selector.classList.remove('active');
        } else {
            // Optional: Uncomment the line below to allow clicking the label to toggle the menu
            // selector.classList.toggle('active');
        }
    });
});

/**
 * 2. Letter-by-Letter Animation
 * Splits text into spans and applies staggered animation delays.
 */
function animateText(element, delayStart = 0, speed = 0.1) {
    if (!element) return;
    
    const text = element.textContent;
    element.textContent = ''; // Clear existing text
    
    [...text].forEach((char, i) => {
        const span = document.createElement('span');
        // Handle spaces properly for CSS layout
        span.textContent = char === ' ' ? '\u00A0' : char; 
        span.style.animationDelay = `${delayStart + i * speed}s`;
        element.appendChild(span);
    });
}

/**
 * 3. Slideshow Logic
 * Rotates images every 6 seconds.
 */
const slides = document.querySelectorAll('.slides img');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Start slideshow if images exist
if (slides.length > 0) {
    showSlide(currentSlide); // Show first slide immediately
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 6000);
}

/**
 * 4. Initialization
 * Triggers text animations once the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const tagline = document.querySelector('.tagline');
    
    // Title starts immediately (0s delay)
    animateText(title, 0, 0.1);
    
    // Tagline starts after title finishes (approx 3s delay)
    animateText(tagline, 3, 0.05);
});