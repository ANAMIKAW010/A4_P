// 1. Text Animation
function animateText(el, delay = 0, speed = 0.05) {
    if (!el) return;
    const text = el.textContent; el.textContent = '';
    [...text].forEach((c, i) => {
        const s = document.createElement('span');
        s.textContent = c === ' ' ? '\u00A0' : c;
        s.style.animationDelay = `${delay + i * speed}s`;
        el.appendChild(s);
    });
}

// 2. Dropdown close on outside click
document.addEventListener('click', e => {
    document.querySelectorAll('.language-selector, .dropdown-container').forEach(el =>
        el.classList[el.contains(e.target) ? 'toggle' : 'remove']('active')
    );
});

document.addEventListener('DOMContentLoaded', () => {
    animateText(document.querySelector('.title'), 0.5, 0.1);
    animateText(document.querySelector('.tagline'), 1.8, 0.05);

    // Prevent # links from navigating
    document.querySelectorAll('.dropdown-menu a').forEach(a => {
        a.addEventListener('click', e => { if (a.getAttribute('href') === '#') e.preventDefault(); });
    });

    // Active page highlight
    const page = window.location.pathname.split('/').pop() || 'Home.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
        if (a.getAttribute('href') === page) {
            a.classList.add('active-page');
            a.closest('.dropdown-container')?.querySelector('.dropdown-trigger').classList.add('active-page');
        }
    });

    // FAQ accordion
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            document.querySelectorAll('.faq-item').forEach(o => { if (o !== item) o.classList.remove('active'); });
            item.classList.toggle('active');
        });
    });

    // Theme toggle
    const themeBtn = Object.assign(document.createElement('button'), { className: 'theme-toggle', textContent: 'Dark Mode' });
    document.body.appendChild(themeBtn);
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeBtn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
    });

    // Contact form submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('.primary-btn');
            const orig = btn.innerText;
            btn.innerText = 'Message Sent!'; btn.style.backgroundColor = '#28a745';
            setTimeout(() => { form.reset(); btn.innerText = orig; btn.style.backgroundColor = ''; }, 3000);
        });
    }

    // Fetch API — live weather widget
    const widget = document.createElement('div');
    widget.style.cssText = 'background:#f0f8ff;border:1px solid #bee3f8;border-radius:8px;padding:15px 20px;margin-bottom:20px;font-size:0.9rem;color:#2c5282;';
    widget.innerHTML = '<strong>🌤 Delhi Weather:</strong> Loading...';
    const container = document.querySelector('.support-container');
    if (container) container.prepend(widget);
    fetch('https://wttr.in/Delhi?format=j1')
        .then(r => r.json())
        .then(d => { const c = d.current_condition[0]; widget.innerHTML = `<strong>🌤 Delhi Weather:</strong> ${c.temp_C}°C — ${c.weatherDesc[0].value}.`; })
        .catch(() => { widget.innerHTML = '<strong>🌤 Travel Tip:</strong> Best time to visit India is October – March.'; });
});
