document.addEventListener('DOMContentLoaded', () => {
    
    const counters = document.querySelectorAll('.counter');

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target'); // Get the final number
        let currentCount = 0; // Keep track of the math invisibly
        
        // Divide by 60 frames so all counters finish at the exact same time
        const increment = target / 60; 

        const updateCount = () => {
            currentCount += increment;

            if (currentCount < target) {
                // Safely push the formatted number to the screen without reading it back
                counter.innerText = Math.ceil(currentCount).toLocaleString();
                // requestAnimationFrame is much smoother than setTimeout
                requestAnimationFrame(updateCount); 
            } else {
                // Ensure it ends perfectly on the target number
                counter.innerText = target.toLocaleString(); 
            }
        };
        
        updateCount();
    };

    // Intersection Observer to start animation ONLY when you scroll down to it
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Triggers when 20% of the counter is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                // Stop observing once animated so it doesn't repeat backwards
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Attach observer to all counters
    counters.forEach(counter => {
        observer.observe(counter);
    });

});

// === DARK MODE THEME TOGGLE ===
(function() {
  const themeBtn = Object.assign(document.createElement('button'), {
    className: 'theme-toggle',
    textContent: 'Dark Mode'
  });
  document.body.appendChild(themeBtn);
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
  });
})();
