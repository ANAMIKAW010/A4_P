const q = (s) => document.querySelector(s), qa = (s) => document.querySelectorAll(s);

const animateText = (el, delay = 0, speed = 0.05) => {
    if (!el) return; const text = el.textContent; el.textContent = '';
    [...text].forEach((c, i) => {
        const s = document.createElement('span'); s.textContent = c === ' ' ? '\u00A0' : c;
        s.style.animationDelay = `${delay + i * speed}s`; el.appendChild(s);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeBtn = Object.assign(document.createElement('button'), { className: 'theme-toggle', textContent: 'Dark Mode' });
    document.body.appendChild(themeBtn);
    themeBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        themeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    if (localStorage.getItem('theme') === 'dark') { document.body.classList.add('dark'); themeBtn.textContent = 'Light Mode'; }

    // 2. UI & Header Animations
    animateText(q('.title'), 0.5, 0.1); animateText(q('.tagline'), 1.8, 0.05);
    const page = window.location.pathname.split('/').pop() || 'Home.html';
    qa('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active-page');
            link.closest('.dropdown-container')?.querySelector('.dropdown-trigger').classList.add('active-page');
        }
    });

    // 3. Auth Logic
    let isLogin = true;
    const db = JSON.parse(localStorage.getItem('discoverIndiaDB') || '{}');
    const showProfile = (user) => {
        q('#auth-section')?.classList.add('hidden'); q('#profile-section')?.classList.remove('hidden');
        if (q('#display-name')) {
            q('#display-name').innerText = user.name; q('#display-email').innerText = user.email;
            ['dob', 'nationality', 'address'].forEach(k => q(`#display-${k}`) && (q(`#display-${k}`).innerText = user[k] || "Not specified"));
        }
    };

    q('#toggle-auth')?.addEventListener('click', () => {
        isLogin = !isLogin;
        q('#auth-title').innerText = isLogin ? "Sign In" : "Create Account";
        q('#submit-btn').innerText = isLogin ? "Sign In" : "Sign Up";
        q('#signup-fields').classList.toggle('hidden', isLogin);
        q('#toggle-auth').innerText = isLogin ? "Sign Up" : "Sign In";
        qa('#name, #dob').forEach(f => isLogin ? f.removeAttribute('required') : f.setAttribute('required', 'true'));
    });

    q('#auth-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = q('#email').value.toLowerCase(), pass = q('#password').value;
        if (isLogin) {
            if (db[email]?.password === pass) {
                localStorage.setItem('activeUser', email); alert("You have logged in!"); showProfile(db[email]);
            } else alert("Invalid credentials!");
        } else {
            if (db[email]) return alert("User exists!");
            db[email] = { email, password: pass, name: q('#name').value, dob: q('#dob').value, 
                         nationality: q('#nationality').value, address: q('#address').value };
            localStorage.setItem('discoverIndiaDB', JSON.stringify(db));
            localStorage.setItem('activeUser', email); alert("You have signed up!"); showProfile(db[email]);
        }
    });

    q('#logout-btn')?.addEventListener('click', () => { localStorage.removeItem('activeUser'); location.reload(); });
    const activeEmail = localStorage.getItem('activeUser');
    if (activeEmail && db[activeEmail]) showProfile(db[activeEmail]);

    // 4. Real-time regex validation
    const emailRx = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    const passRx = /.{6,}/;
    const showErr = (id, show) => { const el = q(id); if (el) el.style.display = show ? 'inline' : 'none'; };
    q('#email')?.addEventListener('input', () => { showErr('#email-error', !emailRx.test(q('#email').value)); });
    q('#password')?.addEventListener('input', () => { showErr('#password-error', !passRx.test(q('#password').value)); });
});