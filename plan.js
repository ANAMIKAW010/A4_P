// Animate hero text letter by letter
function animateText(el,d=0,s=0.05){
  if(!el)return;
  el.innerHTML=[...el.textContent].map((c,i)=>`<span style="animation-delay:${d+i*s}s">${c===' '?'&nbsp;':c}</span>`).join('');
}

document.addEventListener('DOMContentLoaded',()=>{

  // Hero animations
  animateText(document.querySelector('.title'),0.5,0.1);
  animateText(document.querySelector('.tagline'),1.8,0.05);

  // Prevent language dropdown links from navigating
 // Only prevent navigation for the language selector links
document.querySelectorAll('.language-selector .dropdown-menu a').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});
  // Itinerary form: show loading then result
  const form=document.getElementById('itineraryForm'),res=document.getElementById('itineraryResult');
  form?.addEventListener('submit',e=>{
    e.preventDefault();
    res.innerHTML='<em>Analyzing your preferences...</em>';
    setTimeout(()=>res.innerHTML="<div style='text-align:center;padding:10px'>7-Day Golden Triangle: Delhi, Agra & Jaipur</div>",1200);
  });

  // Save button: toggle saved state
  const saveBtn=document.getElementById('saveBtn');
  saveBtn?.addEventListener('click',function(){
    const saved=this.innerText==='SAVE TO ACCOUNT';
    this.innerText=saved?'SAVED!':'SAVE TO ACCOUNT';
    this.style.background='#007bff';
  });

  // Share button: clipboard alert
  document.getElementById('shareBtn')?.addEventListener('click',()=>alert('Link copied to clipboard!'));

  // Live budget slider → update display
  const slider=document.getElementById('budgetSlider'),output=document.getElementById('budgetValue');
  if(slider&&output) slider.oninput=()=>output.innerHTML=`$${slider.value}`;

  // THEME TOGGLE
  const themeBtn=Object.assign(document.createElement('button'),{className:'theme-toggle',textContent:'Dark Mode'});
  document.body.appendChild(themeBtn);
  themeBtn.addEventListener('click',()=>{
     document.body.classList.toggle('dark'); themeBtn.textContent=document.body.classList.contains('dark')?'Light Mode':'Dark Mode'; });

});