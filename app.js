(() => {
'use strict';
const COURSE=window.CODE_LIFE_COURSE||[];
const TRACKS=window.CODE_LIFE_TRACKS||{};
const app=document.getElementById('app');
const coinPill=document.getElementById('coin-pill');
const streakPill=document.getElementById('streak-pill');
const toastEl=document.getElementById('toast');
const KEY='code-life-city-v2';
const PETS={
  pup:{name:'Pixel Pup',file:'pixel-pup.png',vibe:'Loyal, upbeat, always ready to build.'},
  cat:{name:'Byte Cat',file:'byte-cat.png',vibe:'Confident, curious, slightly sassy.'},
  owl:{name:'Nova Owl',file:'nova-owl.png',vibe:'Calm, clever, explains the why.'},
  fox:{name:'Loop Fox',file:'loop-fox.png',vibe:'Smooth, clever, loves patterns.'},
  bunny:{name:'Chip Bunny',file:'chip-bunny.png',vibe:'Fast, energetic, loves challenges.'},
  dino:{name:'Glitch Dino',file:'glitch-dino.png',vibe:'Chaotic good. Loves fixing bugs.'}
};
const SHOP=[
  {id:'glasses',name:'Coder Glasses',icon:'🤓',price:60,type:'accessory'},
  {id:'pin',name:'Star Pin',icon:'⭐',price:40,type:'accessory'},
  {id:'crown',name:'Level Crown',icon:'👑',price:120,type:'accessory'},
  {id:'night',name:'Night City',icon:'🌃',price:80,type:'room'},
  {id:'sunset',name:'Sunset City',icon:'🌇',price:80,type:'room'}
];
const fresh=()=>({pet:'cat',coins:150,streak:0,completed:[],mistakes:[],owned:[],equipped:null,room:'day',drafts:{},play:{html:'<h1>Code Life</h1>\n<p>I made this.</p>\n<button>Click me</button>',css:'body {\n  font-family: sans-serif;\n  padding: 24px;\n}\nh1 { color: royalblue; }',js:'document.querySelector("button").addEventListener("click", () => {\n  document.querySelector("h1").textContent = "It works!";\n});'},playTab:'html'});
let state=load();
function load(){try{return Object.assign(fresh(),JSON.parse(localStorage.getItem(KEY)||'null')||{});}catch{return fresh();}}
function save(){localStorage.setItem(KEY,JSON.stringify(state));chrome();}
function chrome(){coinPill.textContent=`◉ ${state.coins}`;streakPill.textContent=`✦ ${state.streak}`;}
function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function toast(m){toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(toast._t);toast._t=setTimeout(()=>toastEl.classList.remove('show'),1800);}
function pet(){return PETS[state.pet]||PETS.cat;}
function petImg(){return `./assets/pets/${pet().file}`;}
function completed(id){return state.completed.includes(id);}
function courseLessons(track){return COURSE.filter(x=>x.track===track);}
function trackDone(track){const a=courseLessons(track);return a.length&&a.every(x=>completed(x.id));}
function trackUnlocked(track){if(track==='html')return true;if(track==='css')return trackDone('html');if(track==='js')return trackDone('css');return false;}
function lessonUnlocked(l){if(!trackUnlocked(l.track))return false;const a=courseLessons(l.track),i=a.findIndex(x=>x.id===l.id);return i===0||completed(a[i-1].id);}
function nextLesson(){return COURSE.find(x=>lessonUnlocked(x)&&!completed(x.id))||null;}
function totalProgress(){return Math.round((state.completed.length/Math.max(COURSE.length,1))*100);}
function setNav(page){document.querySelectorAll('[data-nav]').forEach(b=>b.classList.toggle('active',b.dataset.nav===page));}
function route(page){location.hash='#'+page;}
function petBubble(text){return `<div class="pet-bubble"><img class="pet-thumb" src="${petImg()}" alt="${esc(pet().name)}"><div><strong>${esc(pet().name)}</strong><p>${text}</p></div></div>`;}
function courseMeta(track){return ({html:['HTML','Build the page','<>'],css:['CSS','Make it look good','✦'],js:['JavaScript','Make it react','⚡']})[track]||[track,'','•'];}
function renderLessons(){
  setNav('lessons'); const n=nextLesson();
  app.innerHTML=`
    <section class="hero card">
      <div class="hero-copy"><div class="eyebrow">Welcome to Code City</div><h1>${n?'Your next checkpoint is ready.':'Starter city complete!'}</h1><p>${n?'Learn one small thing, use it immediately, then prove you remember it.':'You cleared HTML, CSS and JavaScript foundations.'}</p>${n?`<button class="btn white" data-open-lesson="${n.id}">Continue · ${esc(n.title)}</button>`:''}</div>
      <img class="hero-pet" src="${petImg()}" alt="${esc(pet().name)}">
    </section>
    <section class="section quick-grid">
      <div class="card quick-card"><div class="big">${totalProgress()}%</div><small>CITY PROGRESS</small></div>
      <div class="card quick-card highlight"><div class="big">◉ ${state.coins}</div><small>CODE COINS</small></div>
    </section>
    <section class="section">
      <div class="section-head"><h2>Code City path</h2><button class="tiny-link" data-route="progress">Full progress</button></div>
      <div class="card city-card"><div class="city-skyline"></div>${cityPath()}</div>
    </section>
    <section class="section">${petBubble(n?`We're working on <b>${esc(n.title)}</b> next. I’ll explain what each part means before you touch the code.`:'You did it. Now the fun part is building bigger projects.')}</section>
    <section class="section arcade-card card"><div class="eyebrow" style="color:#bcd2ff">Code Arcade</div><h2 style="margin:7px 0">Play. Repeat. Remember.</h2><p>Quick coding games bring old ideas back so they actually stick.</p><button class="btn white" data-arcade>Play a mini game + earn coins</button></section>`;
}
function cityPath(){
  const shown=COURSE.slice(0,12); let lastTrack='';
  return `<div class="path">${shown.map((l,i)=>{const meta=courseMeta(l.track);const done=completed(l.id),ready=lessonUnlocked(l)&&!done;let banner='';if(l.track!==lastTrack){lastTrack=l.track;banner=`<div class="zone-banner">${meta[0]} ${meta[1]}</div>`;}return `${banner}<div class="checkpoint ${done?'done':ready?'ready':'locked'}"><button class="checkpoint-card" data-open-lesson="${l.id}" ${lessonUnlocked(l)?'':'disabled'}><b>Level ${i+1} · ${esc(l.title)}</b><small>${done?'Completed + coins':ready?'Ready to learn':'Locked — finish the previous level'}</small></button><div class="checkpoint-node">${done?'✓':ready?'▶':'🔒'}</div></div>`;}).join('')}</div>`;
}
function renderCourses(){
  setNav('courses');
  app.innerHTML=`<div class="eyebrow">Learning paths</div><h1 class="title">Courses</h1><p class="subtitle">Code Life guides complete beginners in the right order, so you never have to guess where to start.</p><section class="section course-stack">${['html','css','js'].map(track=>{const m=courseMeta(track),a=courseLessons(track),d=a.filter(x=>completed(x.id)).length,u=trackUnlocked(track),pct=Math.round(d/Math.max(a.length,1)*100);return `<button class="card course-card ${u?'':'locked'}" data-course="${track}" ${u?'':'disabled'}><span class="course-icon">${m[2]}</span><span><h3>${m[0]}</h3><p>${m[1]} · ${d}/${a.length} lessons</p><span class="progress-line"><i style="width:${pct}%"></i></span></span><span class="course-state">${u?(pct===100?'DONE':'OPEN'):'🔒'}</span></button>`;}).join('')}</section><section class="section card" style="padding:16px"><div class="eyebrow">Later paths</div><h2 style="font-size:16px;margin:7px 0">Python · SQL · TypeScript · React</h2><p class="subtitle">These stay visible, but a true beginner finishes Web Foundations first so the choices don’t become overwhelming.</p></section>`;
}
function renderCourse(track){
  const a=courseLessons(track),m=courseMeta(track);setNav('courses');
  app.innerHTML=`<button class="tiny-link" data-route="courses">← Courses</button><div class="eyebrow">${m[0]} zone</div><h1 class="title">${m[1]}</h1><p class="subtitle">Finish each checkpoint to unlock the next.</p><section class="section course-stack">${a.map((l,i)=>`<button class="card course-card ${lessonUnlocked(l)?'':'locked'}" data-open-lesson="${l.id}" ${lessonUnlocked(l)?'':'disabled'}><span class="course-icon">${completed(l.id)?'✓':i+1}</span><span><h3>${esc(l.title)}</h3><p>${l.time} min · ${completed(l.id)?'Completed':lessonUnlocked(l)?'Ready':'Locked'}</p></span><span class="course-state">${lessonUnlocked(l)?'›':'🔒'}</span></button>`).join('')}</section>`;
}
function breakdown(l){
  if(l.id==='html-01') return [['<h1>','Starts your main heading.'],['Code Life','The actual words the person sees.'],['</h1>','Closes the heading so the browser knows where it ends.']];
  if(l.id==='html-02') return [['<p>','Starts a normal paragraph.'],['Your text','What the visitor reads.'],['</p>','Ends the paragraph.']];
  if(l.id==='html-03') return [['<button>','Creates a clickable button.'],['Click me','The words shown on the button.'],['</button>','Ends the button. JavaScript can make it do something later.']];
  if(l.track==='html') return [['HTML tag','Tells the browser what kind of content this is.'],['Content / attributes','The words or extra information the tag needs.'],['Closing tag','Ends the element when that tag needs one.']];
  if(l.track==='css') return [['Selector','Chooses what you want to style.'],['Property','The thing you want to change, like color or size.'],['Value','The new setting you give that property.']];
  return [['Instruction','JavaScript reads your instructions from top to bottom.'],['Values','Words, numbers, or saved information your code uses.'],['Result','The page or console changes when the instruction runs.']];
}
function renderLesson(id){
  const l=COURSE.find(x=>x.id===id);if(!l)return route('lessons');setNav('lessons');
  const draft=state.drafts[id]??l.starter??'';
  app.innerHTML=`<div class="lesson-header"><button class="back" data-route="lessons">← Code City</button><div class="eyebrow">${courseMeta(l.track)[0]} · ${l.time} MIN</div><h1 class="title">${esc(l.title)}</h1></div>
  <div class="lesson-shell">
    ${petBubble(`<b>First, the simple version:</b> ${esc(l.concept)} I’ll break it down before you try it.`)}
    <section class="card lesson-card"><h2>What am I looking at?</h2><div class="code-box"><div class="code-toolbar">EXAMPLE</div><pre style="margin:0;padding:14px;color:#dce9ff;overflow:auto;font:12px/1.65 ui-monospace">${esc(l.example)}</pre></div><div class="breakdown">${breakdown(l).map(x=>`<div class="break-row"><span class="break-code">${esc(x[0])}</span><span>${esc(x[1])}</span></div>`).join('')}</div></section>
    <section class="card lesson-card"><h2>Now you try</h2><p>${esc(l.task)}</p><div class="code-box"><div class="code-toolbar"><span>YOUR CODE</span><span>Live preview ↓</span></div><textarea id="lesson-editor" class="editor" spellcheck="false">${esc(draft)}</textarea></div><div class="lesson-actions"><button class="btn soft" data-hint>Hint</button><button class="btn primary" data-check>Check my code</button></div><div id="lesson-feedback" class="feedback info">Type something and watch the preview change. You can experiment — you won’t break anything.</div></section>
    <section class="card preview-card"><div class="preview-head"><span>LIVE PREVIEW</span><span>What your code actually does</span></div><iframe id="lesson-preview" class="preview-frame" title="Live code preview"></iframe></section>
    <section id="quiz-card" class="card lesson-card hidden"></section>
  </div>`;
  const ed=document.getElementById('lesson-editor');ed.addEventListener('input',()=>{state.drafts[id]=ed.value;save();updateLessonPreview(l,ed.value);});updateLessonPreview(l,ed.value);
}
function previewDoc(track,code){
  const bridge=`<script>window.onerror=function(m){document.body.insertAdjacentHTML('beforeend','<pre style="color:#b33">'+m+'</pre>')}<\/script>`;
  if(track==='html')return `<!doctype html><style>body{font-family:Arial;padding:18px;color:#182b52}button{padding:10px 14px;border:0;border-radius:8px;background:#2f67f6;color:white}</style>${code}${bridge}`;
  if(track==='css')return `<!doctype html><body><h1>Code Life</h1><p class="highlight">Watch the style change here.</p><div class="card">I am a card.</div><div class="row"><button>One</button><button>Two</button></div><style>body{font-family:Arial;padding:18px;color:#172b54}.card{padding:8px;background:#f0f4ff;margin-top:10px}.row{margin-top:10px}button{padding:8px}</style><style>${code}</style>${bridge}`;
  return `<!doctype html><body><h1>Code Life</h1><p id="message">JavaScript can change me.</p><button>Click me</button><style>body{font-family:Arial;padding:18px;color:#172b54}button{padding:10px 14px;border:0;border-radius:8px;background:#2f67f6;color:white}</style>${bridge}<script>${code}<\/script>`;
}
function updateLessonPreview(l,code){const f=document.getElementById('lesson-preview');if(f)f.srcdoc=previewDoc(l.track,code);}
function validate(l,code){for(const r of l.rules||[]){try{if(r.kind==='regex'&&!new RegExp(r.value,r.flags||'').test(code))return r.message||'Not quite yet.';}catch{}}return null;}
function showQuiz(l){const box=document.getElementById('quiz-card');box.classList.remove('hidden');box.innerHTML=`<div class="eyebrow">Quick recall</div><h2>Before we move on…</h2><p>${esc(l.quiz.q)}</p><div class="quiz-options">${l.quiz.options.map((o,i)=>`<button class="quiz-option" data-answer="${i}">${esc(o)}</button>`).join('')}</div><div id="quiz-feedback"></div>`;box.scrollIntoView({behavior:'smooth',block:'center'});}
function answerQuiz(btn,l){const i=Number(btn.dataset.answer);document.querySelectorAll('.quiz-option').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');const f=document.getElementById('quiz-feedback');if(i===l.quiz.answer){f.innerHTML=`<div class="feedback good">✓ Correct. ${esc(l.quiz.why)}</div><button class="btn primary full" data-finish="${l.id}">Finish lesson + earn 20 coins</button>`;}else{f.innerHTML=`<div class="feedback bad">Not yet. ${esc(l.quiz.why)} Try another answer — repetition is the point.</div>`;if(!state.mistakes.includes(l.id)){state.mistakes.push(l.id);save();}}}
function finishLesson(id){if(!completed(id)){state.completed.push(id);state.coins+=20;state.streak=Math.max(1,state.streak);state.mistakes=state.mistakes.filter(x=>x!==id);save();}app.innerHTML=`<section class="card reward-pop"><div class="coins">🪙</div><div class="eyebrow">Checkpoint cleared</div><h2>+20 Code Coins</h2><p>${esc(pet().name)} is proud of you. You’ll see this idea again later so it sticks.</p><button class="btn primary" data-route="lessons">Back to Code City</button></section>`;}
function renderPlayground(){setNav('playground');const tab=state.playTab||'html';app.innerHTML=`<div class="eyebrow">Free build mode</div><h1 class="title">Playground</h1><p class="subtitle">Try anything. Change a button, color, text or interaction and see it happen immediately.</p><section class="section">${petBubble('This space has no grades. Break things on purpose, then figure out why. That’s coding too.')}</section><section class="section card lesson-card"><div class="play-tabs">${['html','css','js'].map(x=>`<button data-playtab="${x}" class="${tab===x?'active':''}">${x.toUpperCase()}</button>`).join('')}</div><div class="code-box"><div class="code-toolbar"><span>${tab.toUpperCase()} EDITOR</span><span>LIVE</span></div><textarea id="play-editor" class="editor play-editor" spellcheck="false">${esc(state.play[tab])}</textarea></div></section><section class="section card preview-card"><div class="preview-head"><span>YOUR WEBSITE</span><span>Tap buttons too</span></div><iframe id="play-preview" class="preview-frame play-preview"></iframe></section>`;updatePlay();document.getElementById('play-editor').addEventListener('input',e=>{state.play[tab]=e.target.value;save();updatePlay();});}
function updatePlay(){const f=document.getElementById('play-preview');if(!f)return;f.srcdoc=`<!doctype html><html><head><style>body{font-family:Arial;color:#172b54}${state.play.css}</style></head><body>${state.play.html}<script>${state.play.js}<\/script></body></html>`;}
function renderProgress(){setNav('progress');app.innerHTML=`<div class="eyebrow">Your journey</div><h1 class="title">Progress</h1><p class="subtitle">Not just completion — Code Life keeps track of what needs more practice.</p><section class="section stat-grid"><div class="card stat-card"><b>${state.completed.length}</b><small>LESSONS</small></div><div class="card stat-card"><b>${totalProgress()}%</b><small>MASTERY PATH</small></div><div class="card stat-card"><b>${state.streak}</b><small>STREAK</small></div></section><section class="section"><div class="section-head"><h2>Practice again</h2></div><div class="card">${state.mistakes.length?state.mistakes.map(id=>{const l=COURSE.find(x=>x.id===id);return l?`<button class="course-card" style="width:100%;border:0;background:none" data-open-lesson="${l.id}"><span class="course-icon">↻</span><span><h3>${esc(l.title)}</h3><p>You missed this before. Let’s make it stick.</p></span><span class="course-state">›</span></button>`:''}).join(''):'<div class="empty">Nothing here yet. Concepts you struggle with will automatically come back for review.</div>'}</div></section><section class="section"><div class="section-head"><h2>Achievements</h2></div><div class="badge-row"><div class="card badge"><div class="emoji">🌱</div><b>First Step</b><small>Start coding</small></div><div class="card badge"><div class="emoji">🧠</div><b>Sticky Brain</b><small>Review a mistake</small></div><div class="card badge"><div class="emoji">🏗️</div><b>Builder</b><small>Finish a project</small></div></div></section><section class="section card" style="padding:16px"><div class="eyebrow">Future</div><h2 style="font-size:16px;margin:7px 0">Leaderboard</h2><p class="subtitle">When accounts are added later, friends, weekly XP and leagues can live here.</p></section>`;}
function renderPet(){setNav('pet');const p=pet();app.innerHTML=`<div class="eyebrow">Your coding buddy</div><h1 class="title">My Pet</h1><p class="subtitle">Pick who travels through Code City with you. Everything saves on this device.</p><section class="section pet-stage ${state.room}"><img class="pet-main" src="${petImg()}" alt="${esc(p.name)}">${state.equipped==='glasses'?'<span class="pet-accessory glasses">👓</span>':''}${state.equipped==='pin'?'<span class="pet-accessory pin">⭐</span>':''}${state.equipped==='crown'?'<span class="pet-accessory crown">👑</span>':''}<span class="pet-nameplate">${esc(p.name)} · ${esc(p.vibe)}</span></section><section class="section"><div class="section-head"><h2>Choose your pet</h2></div><div class="pet-picker">${Object.entries(PETS).map(([id,x])=>`<button class="pet-option ${state.pet===id?'selected':''}" data-pet="${id}"><img src="./assets/pets/${x.file}" alt="${esc(x.name)}"><b>${esc(x.name)}</b></button>`).join('')}</div></section><section class="section"><div class="section-head"><h2>Pet shop</h2><span class="coin-pill">◉ ${state.coins}</span></div><div class="shop-grid">${SHOP.map(item=>shopItem(item)).join('')}</div></section>`;}
function shopItem(item){const owned=state.owned.includes(item.id)||state.room===item.id;const equipped=(item.type==='accessory'&&state.equipped===item.id)||(item.type==='room'&&state.room===item.id);return `<div class="card shop-item"><div class="shop-icon">${item.icon}</div><h4>${esc(item.name)}</h4><small>${owned?(equipped?'Equipped':'Owned'):`◉ ${item.price}`}</small><button class="btn ${equipped?'outline':'soft'}" data-shop="${item.id}">${equipped?'Equipped':owned?'Equip':'Buy'}</button></div>`;}
function buyOrEquip(id){const item=SHOP.find(x=>x.id===id);if(!item)return;const owned=state.owned.includes(id)||state.room===id;if(!owned){if(state.coins<item.price)return toast('Not enough Code Coins yet.');state.coins-=item.price;state.owned.push(id);}if(item.type==='room')state.room=id;else state.equipped=(state.equipped===id?null:id);save();renderPet();}
function renderArcade(){setNav('lessons');const q=[{code:'<h1>Hello</h1>',ask:'What does <h1> create?',answers:['A main heading','A picture','A link','A color'],correct:0},{code:'color: blue;',ask:'What will this CSS property change?',answers:['Text color','Page link','HTML tag','Variable'],correct:0},{code:'let pet = "Byte";',ask:'What is pet here?',answers:['A variable','A button','A CSS class','An image'],correct:0}][Math.floor(Math.random()*3)];app.innerHTML=`<button class="tiny-link" data-route="lessons">← Code City</button><div class="eyebrow">Code Arcade</div><h1 class="title">Quick Brain Boost</h1>${petBubble('No pressure. This is just an old idea coming back in a different form — exactly how we make it stick.')}<section class="section card arcade-game"><div class="game-code">${esc(q.code)}</div><h2 style="font-size:16px">${esc(q.ask)}</h2><div class="game-options">${q.answers.map((a,i)=>`<button data-game-answer="${i}" data-correct="${q.correct}">${esc(a)}</button>`).join('')}</div><div id="game-feedback"></div></section>`;}
function gameAnswer(btn){const ok=Number(btn.dataset.gameAnswer)===Number(btn.dataset.correct),f=document.getElementById('game-feedback');if(ok){state.coins+=5;save();f.innerHTML='<div class="feedback good">✓ Nice. +5 Code Coins. Repetition without feeling like homework.</div><button class="btn primary full" data-arcade>Play another</button>';}else{f.innerHTML='<div class="feedback bad">Not that one. Try again — mistakes are how this gets stored.</div>';}}
function handleRoute(){const h=location.hash.replace('#','')||'lessons';if(h.startsWith('lesson/'))return renderLesson(h.split('/')[1]);if(h.startsWith('course/'))return renderCourse(h.split('/')[1]);if(h==='courses')return renderCourses();if(h==='playground')return renderPlayground();if(h==='progress')return renderProgress();if(h==='pet')return renderPet();if(h==='arcade')return renderArcade();renderLessons();}
document.addEventListener('click',e=>{
  const nav=e.target.closest('[data-nav]');if(nav)return route(nav.dataset.nav);
  const r=e.target.closest('[data-route]');if(r)return route(r.dataset.route);
  const l=e.target.closest('[data-open-lesson]');if(l&&!l.disabled)return route('lesson/'+l.dataset.openLesson);
  const c=e.target.closest('[data-course]');if(c&&!c.disabled)return route('course/'+c.dataset.course);
  const a=e.target.closest('[data-arcade]');if(a)return route('arcade');
  const petBtn=e.target.closest('[data-pet]');if(petBtn){state.pet=petBtn.dataset.pet;save();return renderPet();}
  const shop=e.target.closest('[data-shop]');if(shop)return buyOrEquip(shop.dataset.shop);
  const pt=e.target.closest('[data-playtab]');if(pt){state.playTab=pt.dataset.playtab;save();return renderPlayground();}
  const game=e.target.closest('[data-game-answer]');if(game)return gameAnswer(game);
  if(e.target.closest('[data-hint]')){const id=location.hash.split('/')[1],l=COURSE.find(x=>x.id===id);return toast(l?.hint||'Look closely at the example.');}
  if(e.target.closest('[data-check]')){const id=location.hash.split('/')[1],l=COURSE.find(x=>x.id===id),code=document.getElementById('lesson-editor')?.value||'',f=document.getElementById('lesson-feedback'),err=validate(l,code);if(err){f.className='feedback bad';f.textContent=err;return;}f.className='feedback good';f.textContent='✓ Your code works. Now prove you remember the idea without copying it.';return showQuiz(l);}
  const ans=e.target.closest('[data-answer]');if(ans){const id=location.hash.split('/')[1],l=COURSE.find(x=>x.id===id);return answerQuiz(ans,l);}
  const fin=e.target.closest('[data-finish]');if(fin)return finishLesson(fin.dataset.finish);
});
window.addEventListener('hashchange',handleRoute);chrome();handleRoute();
if('serviceWorker' in navigator)navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
})();
