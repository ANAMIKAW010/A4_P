function animateText(element, delayStart = 0, speed = 0.05) {
    if (!element) return;
    const text = element.textContent;
    element.textContent = '';
    [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${delayStart + i * speed}s`;
        element.appendChild(span);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Run Header Animations
    animateText(document.querySelector('.title'), 0.5, 0.1);
    animateText(document.querySelector('.tagline'), 1.8, 0.05);

    // 2. Language selection prevention
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', (e) => e.preventDefault());
    });

    // 3. Generate Logic
    const form = document.getElementById('itineraryForm');
    const res = document.getElementById('itineraryResult');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            res.innerHTML = "<em>Analyzing your preferences...</em>";
            setTimeout(() => {
                res.innerHTML = "<div style='text-align:center; padding:10px;'>7-Day Golden Triangle: Delhi, Agra & Jaipur</div>";
            }, 1200);
        });
    }

    // 4. Save Logic
    const saveBtn = document.getElementById('saveBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            if (this.innerText === "SAVE TO ACCOUNT") {
                this.innerText = "SAVED!";
                this.style.background = "#007bff";
            } else {
                this.innerText = "SAVE TO ACCOUNT";
                this.style.background = "#007bff";
            }
        });
    }

    // 5. Share Logic
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => alert("Link copied to clipboard!"));
    }

    // 6. Live Budget Slider Update
    const slider = document.getElementById('budgetSlider');
    const output = document.getElementById('budgetValue');

    if (slider && output) {
        slider.oninput = function() {
            output.innerHTML = `$${this.value}`;
        }
    }
});