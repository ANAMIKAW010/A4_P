// 1. DROPDOWN LOGIC FROM TRAVELLER
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

// 2. LETTER ANIMATION FROM TRAVELLER
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

// 3. SCROLL REVEAL FROM TRAVELLER
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

// 4. VAULT DATA
const assets = [
    {
        id: 1,
        title: "Ganga Aarti Flames",
        format: "video",
        region: "north",
        state: "Uttar Pradesh",
        thumb: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&q=80",
        preview: "https://videos.pexels.com/video-files/855029/855029-hd_1920_1080_25fps.mp4",
        tags: ["4K", "Drone", "Night", "Varanasi"],
        context: "Varanasi · Ganga Aarti ritual. Capture the sacred flames reflecting on the Ganges during evening prayer.",
        tradition_link: "festivals.html#ganga-aarti",
        tradition_name: "Ganga Aarti",
        license: "free",
        license_text: "Free for editorial use. Credit: BharatVault / Arjun Mehta",
        specs: {res: "4K", duration: "0:47", size: "312MB"},
        downloads: { "1080p": "#", "4K": "#" }
    },
    {
        id: 2,
        title: "Kathakali Green Room",
        format: "photo",
        region: "south",
        state: "Kerala",
        thumb: "https://images.unsplash.com/photo-1602216056096-3df4c2b6f27b?w=500&q=80",
        preview: "https://images.unsplash.com/photo-1602216056096-3df4c2b6f27b?w=1200&q=80",
        tags: ["Culture", "Makeup", "Kerala"],
        context: "Kerala · Kathakali preparation. Artists apply traditional green makeup before performance.",
        tradition_link: "festivals.html#kathakali",
        tradition_name: "Kathakali",
        license: "commercial",
        license_text: "Commercial OK. Credit: BharatVault / Priya Nair",
        specs: {res: "8K", size: "12MB"},
        downloads: { "1080p": "#", "4K": "#", "8K": "#" }
    },
    {
        id: 3,
        title: "Holi Colors in Mathura",
        format: "photo",
        region: "north",
        state: "Uttar Pradesh",
        thumb: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=500&q=80",
        preview: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=1200&q=80",
        tags: ["Holi", "Festival", "Colors"],
        context: "Mathura · Holi celebrations. The birthplace of Krishna erupts in colored powder during spring.",
        tradition_link: "festivals.html#holi",
        tradition_name: "Holi",
        license: "free",
        license_text: "Free for editorial use. Credit: BharatVault",
        specs: {res: "4K", size: "8MB"},
        downloads: { "1080p": "#", "4K": "#" }
    },
    {
        id: 4,
        title: "Mysore Palace Illuminated",
        format: "photo",
        region: "south",
        state: "Karnataka",
        thumb: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&q=80",
        preview: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80",
        tags: ["Architecture", "Night", "Heritage"],
        context: "Karnataka · Mysore Palace. Illuminated with 97,000 bulbs during Dasara festival.",
        tradition_link: "canvas.html?state=ka",
        tradition_name: "Dasara",
        license: "commercial",
        license_text: "Commercial OK. Credit: BharatVault",
        specs: {res: "4K", size: "9MB"},
        downloads: { "1080p": "#", "4K": "#" }
    },
    {
        id: 5,
        title: "Tibetan Prayer Flags",
        format: "video",
        region: "north",
        state: "Himachal Pradesh",
        thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
        preview: "https://videos.pexels.com/video-files/1409899/1409899-hd_1920_1080_25fps.mp4",
        tags: ["4K", "Mountains", "Timelapse"],
        context: "Himachal · Buddhist traditions. Prayer flags carry mantras across Himalayan winds.",
        tradition_link: "festivals.html#losar",
        tradition_name: "Losar",
        license: "free",
        license_text: "Free for editorial use. Credit: BharatVault",
        specs: {res: "4K", duration: "0:32", size: "180MB"},
        downloads: { "1080p": "#", "4K": "#" }
    },
    {
        id: 6,
        title: "Rajasthani Folk Music",
        format: "audio",
        region: "west",
        state: "Rajasthan",
        thumb: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&q=80",
        preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        tags: ["Music", "Folk", "Instrumental"],
        context: "Rajasthan · Manganiyar tradition. Desert musicians preserve centuries-old ballads.",
        tradition_link: "festivals.html#manganiyar",
        tradition_name: "Manganiyar Music",
        license: "commercial",
        license_text: "Commercial OK. Credit: BharatVault",
        specs: {res: "320kbps", duration: "3:21", size: "8MB"},
        downloads: { "MP3": "#" }
    }
];

// 5. RENDER LOGIC USING ESSENTIAL-CARD STRUCTURE
const grid = document.getElementById('vault-grid');
const searchInput = document.getElementById('vault-search');
const formatFilter = document.getElementById('format');
const regionFilter = document.getElementById('region');
const licenseFilter = document.getElementById('license');
const fourKFilter = document.getElementById('4k-only');
const noFluffToggle = document.getElementById('no-fluff-toggle');
const resultsCount = document.getElementById('results-count');

let currentAssets = [...assets];

function renderGrid(data) {
    grid.innerHTML = '';
    data.forEach((asset, index) => {
        const card = document.createElement('section');
        card.className = 'asset-card';
        
        card.innerHTML = `
            <div class="card-content">
                <h3 class="step-title">${asset.title}</h3>
                <p>${asset.context}</p>
                <div class="tags">
                    ${asset.tags.map(t => `<span>${t}</span>`).join('')}
                </div>
                <div style="margin-top:20px;">
                    <a href="#" onclick="openModal(${asset.id}); return false;" class="primary-btn">View Details</a>
                </div>
            </div>
            <div class="card-image">
                <img src="${asset.thumb}" loading="lazy" alt="${asset.title}" class="zoom-img">
                ${asset.format === 'video' ? `<span class="badge">${asset.specs.duration || ''}</span>` : ''}
                ${asset.format === 'audio' ? `<span class="badge">🎵</span>` : ''}
                <div class="quick-actions">
                    <button onclick="openModal(${asset.id})">👁</button>
                    <button onclick="saveAsset(${asset.id})">🔖</button>
                </div>
            </div>
        `;
        
        observer.observe(card);
        grid.appendChild(card);
    });
    resultsCount.textContent = `Showing ${data.length} assets`;
}

function filterAssets() {
    const search = searchInput.value.toLowerCase();
    const format = formatFilter.value;
    const region = regionFilter.value;
    const license = licenseFilter.value;
    const only4k = fourKFilter.checked;

    currentAssets = assets.filter(a => {
        const matchSearch = a.title.toLowerCase().includes(search) ||
                           a.tags.some(t => t.toLowerCase().includes(search)) ||
                           a.context.toLowerCase().includes(search);
        const matchFormat = format === 'all' || a.format === format;
        const matchRegion = region === 'all' || a.region === region;
        const matchLicense = license === 'all' || a.license === license;
        const match4k = !only4k || a.tags.includes('4K') || a.tags.includes('8K') || a.specs.res === '4K' || a.specs.res === '8K';

        return matchSearch && matchFormat && matchRegion && matchLicense && match4k;
    });
    renderGrid(currentAssets);
}

function openModal(id) {
    const asset = assets.find(a => a.id === id);
    const preview = document.getElementById('modal-preview');
    const info = document.getElementById('modal-info');

    if (asset.format === 'video') {
        preview.innerHTML = `<video src="${asset.preview}" controls autoplay muted loop></video>`;
    } else if (asset.format === 'audio') {
        preview.innerHTML = `<div style="padding:40px;text-align:center;color:white;">
            <h2 style="margin-bottom:20px">🎵 ${asset.title}</h2>
            <audio src="${asset.preview}" controls style="width:100%"></audio>
        </div>`;
    } else {
        preview.innerHTML = `<img src="${asset.preview}" alt="${asset.title}">`;
    }

    info.innerHTML = `
        <h2>${asset.title}</h2>
        <p style="color:#555;margin:8px 0 16px">${asset.context}</p>

        <div class="license-box">
            <b>License:</b> ${asset.license_text}
        </div>

        <div class="spec-list">
            <p><b>Format:</b> ${asset.format.toUpperCase()}</p>
            <p><b>Resolution:</b> ${asset.specs.res || 'N/A'}</p>
            ${asset.specs.duration ? `<p><b>Duration:</b> ${asset.specs.duration}</p>` : ''}
            <p><b>File Size:</b> ${asset.specs.size || 'N/A'}</p>
            <p><b>Tradition:</b> <a href="${asset.tradition_link}" style="color:#007bff">${asset.tradition_name}</a></p>
        </div>

        <h4>Download</h4>
        <div class="download-group">
            ${Object.keys(asset.downloads).map(key =>
                `<button class="download-btn" onclick="downloadAsset('${key}', ${asset.id})">${key}</button>`
            ).join('')}
        </div>
    `;

    document.getElementById('asset-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('asset-modal').classList.add('hidden');
    document.getElementById('modal-preview').innerHTML = '';
}

function downloadAsset(quality, id) {
    alert(`Downloading ${quality} for asset ${id}. Connect this to your S3/Cloudflare URL.`);
}

function saveAsset(id) {
    alert(`Saved asset ${id} to your collection. Requires login.`);
}

// Event listeners
[searchInput, formatFilter, regionFilter, licenseFilter, fourKFilter].forEach(el => {
    el.addEventListener('input', filterAssets);
    el.addEventListener('change', filterAssets);
});

noFluffToggle.addEventListener('click', () => {
    document.body.classList.toggle('no-fluff');
    noFluffToggle.classList.toggle('active');
    noFluffToggle.textContent = document.body.classList.contains('no-fluff') ? 'Exit No-Fluff' : 'No-Fluff Mode';
});

document.getElementById('asset-modal').addEventListener('click', (e) => {
    if (e.target.id === 'asset-modal') closeModal();
});

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const tagline = document.querySelector('.tagline');
    
    animateText(title, 0.5, 0.08);
    animateText(tagline, 1.8, 0.04);
    
    const filterCard = document.querySelector('.filter-card');
    if (filterCard) observer.observe(filterCard);
    
    renderGrid(assets);
});