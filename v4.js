/* Code Life V4: guided setup, map & interactive pet room */
(()=>{
'use strict';
const KEY='code-life-state-v3', PETS=[
 ['pixel-pup','Pixel Pup','Energetic & loyal'],['byte-cat','Byte Cat','Cheeky & confident'],
 ['nova-owl','Nova Owl','Patient & wise'],['loop-fox','Loop Fox','Clever & creative'],
 ['chip-bunny','Chip Bunny','Bubbly & speedy'],['glitch-dino','Glitch Dino','Funny & chaotic']
];
let step=0,selectedPet='pixel-pup',roomMode='';
const state=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{};}catch{return {};}};
const put=updates=>localStorage.setItem(KEY,JSON.stringify({...state(),...updates}));
const node=(tag,cls,text)=>{const a=document.createElement(tag);if(cls)a.className=cls;if(text)a.textContent=text;return a;};
const btn=(cls,txt,fn)=>{const b=node('button',cls,txt);b.type='button';b.addEventListener('click',fn);return b;};
const img=(file,cls,alt)=>{const e=node('img',cls);e.src='./'+file;e.alt=alt||'';return e;};
const setup=document.createElement('div');setup.id='v4-setup';setup.setAttribute('role','dialog');setup.setAttribute('aria-modal','true');setup.setAttribute('aria-label','Code Life getting started');
function next(n){step=n;drawSetup();}
function option(label,detail,symbol,active,fn){const b=btn('setup-option'+(active?' selected':''),'',fn);b.append(node('span','setup-symbol',symbol),node('span','setup-option-words'));b.lastChild.append(node('strong','',label),node('small','',detail));b.append(node('b','setup-arrow','›'));return b;}
function drawSetup(){
 if(state().onboardingDone){setup.remove();return;}
 document.getElementById('modal-root').innerHTML='';setup.replaceChildren();
 const panel=node('section','setup-panel');setup.append(panel);document.body.append(setup);
 const brand=node('div','setup-brand');brand.append(node('span','setup-mark','</>'),node('b','','Code Life'));panel.append(brand);
 if(step===0){panel.append(node('div','setup-skyline','✦  ◇  ✧'),node('h1','setup-title','Where codes come to life.'),img('pixel-pup.png','setup-hero-pet','Pixel Pup'),node('p','setup-desc','Learn. Build. Grow.'),btn('setup-primary','Get Started  →',()=>next(1)));return;}
 const prog=node('div','setup-progress','STEP '+step+' OF 3     '+'●'.repeat(step)+'○'.repeat(3-step));panel.append(prog);
 if(step===1){panel.append(node('h1','setup-title','Choose your coding level'),node('p','setup-desc',"We'll guide your journey from the right starting point."));const s=state();
 [['beginner','Beginner',"I'm new to coding",'🌱'],['intermediate','Intermediate','I know some basics','🧊'],['advanced','Advanced','I want to sharpen specific skills','🚀']].forEach(v=>panel.append(option(v[1],v[2],v[3],s.setupLevel===v[0],()=>{put({setupLevel:v[0]});drawSetup();})));
 panel.append(node('p','setup-guide','🐾  No pressure. You can review earlier topics any time.'),btn('setup-primary','Continue  →',()=>{if(state().setupLevel)next(2);}));}
 if(step===2){panel.append(node('h1','setup-title','What describes you best?'),node('p','setup-desc','Help Code Life understand how you are learning.'));const list=node('div','setup-role-grid'),s=state();
 [['student','Student','Learning while in school','🎓'],['self','Self-taught learner','Learning on my own','💻'],['switch','Career switcher','Changing my path','🧭'],['pro','Professional','Brushing up my skills','📈']].forEach(v=>list.append(option(v[1],v[2],v[3],s.setupRole===v[0],()=>{put({setupRole:v[0]});drawSetup();})));
 panel.append(list,node('p','setup-guide','🐾  Your path will fit your experience.'),btn('setup-primary','Continue  →',()=>{if(state().setupRole)next(3);}));}
 if(step===3){panel.append(node('h1','setup-title','Choose your Code Pet'),node('p','setup-desc','Your buddy stays with you and evolves as you learn.'));const list=node('div','setup-pet-grid');
 PETS.forEach(p=>{const b=btn('setup-pet-choice'+(selectedPet===p[0]?' selected':''),'',()=>{selectedPet=p[0];drawSetup();});b.append(img(p[0]+'.png','',p[1]),node('strong','',p[1]),node('small','',p[2]));list.append(b);});
 panel.append(list,node('p','setup-guide','🤖  Your pet will guide you through Code City!'),btn('setup-primary','Start Journey  →',()=>{put({pet:selectedPet,onboardingDone:true});setup.remove();location.hash='#lessons';location.reload();}));}
 if(step>1)panel.append(btn('setup-back','← Back',()=>next(step-1)));
}
function onboard(){if(state().onboardingDone)return;selectedPet=state().pet||'pixel-pup';step=0;drawSetup();}
function decorateCity(){const city=document.querySelector('.city-world');if(!city)return;city.classList.add('v4-city');let i=0;
 city.querySelectorAll('.checkpoint').forEach(ch=>{const b=ch.querySelector('.checkpoint-card');if(!b)return;const label=b.querySelector('b')?.textContent||b.title||'Checkpoint';b.title=label;b.setAttribute('aria-label','Checkpoint '+(++i)+': '+label);b.textContent='';b.append(node('span','stone-number',ch.classList.contains('done')?'✓':String(i)));});
 const gate=city.querySelector('.city-gate');if(gate){const title=gate.querySelector('h1');if(title)title.innerHTML='WELCOME TO<br>CODE CITY';}
 city.querySelectorAll('.zone').forEach(z=>{z.classList.toggle('zone-html',z.id==='zone-html');z.classList.toggle('zone-css',z.id==='zone-css');z.classList.toggle('zone-js',z.id==='zone-js');});
 if(state().setupLevel==='advanced'&&!city.querySelector('.v4-advanced')){const note=node('div','v4-advanced','Experienced coder? Visit Courses to focus on available web topics. More languages are coming.');gate?.after(note);}
}
function decoratePet(){const room=document.querySelector('.pet-room');if(!room||room.querySelector('[data-v4room]'))return;room.classList.add('v4-interactive-room');
 const items=[['city','Code City','🪐'],['evo','Evolution','✧'],['closet','Closet','👕'],['accessory','Accessories','🎧'],['laptop','Playground','💻'],['bed','Let your pet rest','💤'],['controller','Code Arcade','🎮'],['shop','Shop','🎁']];
 items.forEach(([key,meaning,glyph])=>{const b=btn('v4-room-thing v4-'+key,glyph,(ev)=>{ev.stopPropagation();roomAction(key);});b.dataset.v4room=key;b.title=meaning;b.setAttribute('aria-label',meaning);room.append(b);});
 const shop=document.querySelector('.shop-grid')?.closest('.section');if(shop){shop.dataset.v4shop='true';shop.hidden=!roomMode;if(roomMode)shop.querySelectorAll('.shop-item').forEach(e=>{const name=e.querySelector('h4')?.textContent||'';e.hidden=roomMode==='closet'&&!/Hoodie|Jacket/i.test(name)||roomMode==='accessory'&&!/Headphones|Visor|Sign/i.test(name);});}
 const guide=node('p','v4-room-help','Tap objects in the room to explore. Tap your pet to play!');room.after(guide);
}
function roomAction(which){const room=document.querySelector('.pet-room'),shop=document.querySelector('[data-v4shop]');
 if(which==='city'){location.hash='#lessons';return;}
 if(which==='controller'){location.hash='#arcade';return;}
 if(which==='laptop'){location.hash='#playground';return;}
 if(which==='bed'){const speech=room?.querySelector('.pet-speech');if(speech)speech.textContent='Charging up! Zzz…💙';room?.classList.add('v4-napping');return;}
 if(which==='evo'){document.querySelector('.pet-progress')?.scrollIntoView({behavior:'smooth',block:'center'});return;}
 if(shop){roomMode=which;shop.hidden=false;shop.querySelectorAll('.shop-item').forEach(e=>{const name=e.querySelector('h4')?.textContent||'';e.hidden=which==='closet'&&!/Hoodie|Jacket/i.test(name)||which==='accessory'&&!/Headphones|Visor|Sign/i.test(name);});shop.scrollIntoView({behavior:'smooth',block:'center'});}
}
let pending=false;function decorate(){if(pending)return;pending=true;queueMicrotask(()=>{pending=false;const route=location.hash||'#lessons';if(route==='#lessons')decorateCity();if(route==='#pet')decoratePet();});}
const app=document.getElementById('app');if(app)new MutationObserver(decorate).observe(app,{childList:true});
window.addEventListener('hashchange',()=>setTimeout(decorate,15));
document.addEventListener('click',e=>{if(e.target.closest('[data-reset-progress]'))setTimeout(()=>{if(!state().onboardingDone)onboard();},50);},true);
if(!state().onboardingDone)onboard();decorate();
})();