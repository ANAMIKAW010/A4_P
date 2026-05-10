// ASSET DATA
const assets = [{
  id:1, title:'Backwaters of Alleppey', format:'Photo', res:'4K', license:'Editorial Free',
  thumb:'https://images.unsplash.com/photo-1766404891752-5730ac2fc611?w=500&auto=format&fit=crop&q=60',
  context:"Gliding through Kerala's Backwaters",
  relatedPhotos:['https://images.pexels.com/photos/32701368/pexels-photo-32701368.jpeg?auto=compress&cs=tinysrgb&w=400','https://images.pexels.com/photos/33361683/pexels-photo-33361683.jpeg?auto=compress&cs=tinysrgb&w=400','https://images.pexels.com/photos/29828196/pexels-photo-29828196.jpeg?auto=compress&cs=tinysrgb&w=400','https://images.pexels.com/photos/10933045/pexels-photo-10933045.jpeg?auto=compress&cs=tinysrgb&w=400','https://images.pexels.com/photos/35080149/pexels-photo-35080149.jpeg?auto=compress&cs=tinysrgb&w=400','https://images.pexels.com/photos/12066477/pexels-photo-12066477.jpeg?auto=compress&cs=tinysrgb&w=400'],
  relatedAudios:[{name:'Soothing Riverflow', src:'dragon-studio-soothing-river-flow-372456.mp3'}],
  relatedVideos:[{name:'Backwaters of Allepey', src:'https://www.pexels.com/download/video/29988893/'}]
}];

// CLICK MINI-THUMB → SWAP INTO LARGE PREVIEW
function selectPhoto(img) {
  img.closest('.details-drawer').querySelector('.drawer-preview-img').src = img.src;
  img.closest('.asset-mini-gallery').querySelectorAll('.mini-thumb').forEach(t => t.classList.remove('selected'));
  img.classList.add('selected');
}

// RENDER ALL CARDS INTO #vault-grid
function buildCards(list) {
  document.getElementById('vault-grid').innerHTML = list.map(a => `
    <article class="essential-card"><div class="card-main-row">
      <div class="card-image"><img class="zoom-img" src="${a.thumb}" alt="${a.title}"></div>
      <div class="card-content">
        <p class="badge">${a.format} · ${a.res} · ${a.license}</p>
        <h3 class="step-title">${a.title}</h3><p>${a.context}</p>
        <button class="primary-btn" onclick="toggleDrawer(this)">Explore Asset ▾</button>
      </div>
    </div>
    <div class="details-drawer"><div class="drawer-inner">
      <div><img class="drawer-preview-img" src="${a.thumb}" alt="${a.title}"></div>
      <div>
        <h4>Related Photos</h4>
        <div class="asset-mini-gallery">${a.relatedPhotos.map(p=>`<img class="mini-thumb" src="${p}" loading="lazy" onclick="selectPhoto(this)">`).join('')}</div>
        <h4 style="margin-top:20px;">Related Audio</h4>
        ${a.relatedAudios.map(r=>`<div class="audio-track"><span>${r.name}</span><audio controls src="${r.src}"></audio></div>`).join('')}
        <h4 style="margin-top:20px;">Related Video</h4>
        ${a.relatedVideos.map(v=>`<video controls style="width:100%;border-radius:8px;margin-top:8px;" src="${v.src}"><source src="${v.src}" type="video/mp4">${v.name}</video>`).join('')}
      </div>
    </div></div></article>`).join('');
}

// TOGGLE DROPDOWN DRAWER ON EXPLORE CLICK
function toggleDrawer(btn) {
  const drawer = btn.closest('.essential-card').querySelector('.details-drawer');
  const isOpen = drawer.classList.toggle('active');
  btn.textContent = isOpen ? 'Close ▴' : 'Explore Asset ▾';
}

// LIVE SEARCH FILTER
document.getElementById('vault-search').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  buildCards(assets.filter(a => a.title.toLowerCase().includes(q) || a.context.toLowerCase().includes(q)));
});
// THEME TOGGLE
const themeBtn = Object.assign(document.createElement('button'), {className:'theme-toggle', textContent:'Dark Mode'});
document.body.appendChild(themeBtn); themeBtn.addEventListener('click', () => {
 document.body.classList.toggle('dark'); themeBtn.textContent = document.body.classList.contains('dark') ? ' Light Mode' : ' Dark Mode'; });
// INITIALISE PAGE
buildCards(assets);