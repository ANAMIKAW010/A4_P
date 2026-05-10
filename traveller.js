// Animate hero text letter by letter
function animateText(el,d=0,s=0.05){
  if(!el)return;
  el.innerHTML=[...el.textContent.trim()].map((c,i)=>`<span style="display:inline-block;opacity:0;transform:translateY(30px);animation:popUpLetter 0.6s forwards ${d+i*s}s">${c===' '?'&nbsp;':c}</span>`).join('');
}

document.addEventListener('DOMContentLoaded',()=>{

  // Hero text animations
  animateText(document.querySelector('.title'),0.5,0.08);
  animateText(document.querySelector('.tagline'),1.8,0.04);

  // Scroll reveal for cards
  const obs=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
    if(isIntersecting){target.style.opacity='1';target.style.transform='translateY(0)';obs.unobserve(target);}
  }),{threshold:0.15});

  document.querySelectorAll('.essential-card').forEach(c=>{
    c.style.cssText+='opacity:0;transform:translateY(50px);transition:all 0.8s cubic-bezier(0.25,1,0.5,1)';
    obs.observe(c);
  });

});

// Dropdown: close on outside click, toggle on inside click
document.addEventListener('click',e=>
  document.querySelectorAll('.language-selector,.dropdown-container').forEach(el=>
    el.classList[el.contains(e.target)?'toggle':'remove']('active')
  )
);
// THEME TOGGLE
const themeBtn = Object.assign(document.createElement('button'), {className:'theme-toggle', textContent:'Dark Mode'});
document.body.appendChild(themeBtn); themeBtn.addEventListener('click', () => { document.body.classList.toggle('dark'); themeBtn.textContent = document.body.classList.contains('dark') ? ' Light Mode' : 'Dark Mode'; });