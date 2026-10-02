/* Code Life Pixel Pup 2.5D test: original art, no external libraries */
(()=>{
'use strict';
const mount=document.getElementById('scene'),activity=document.getElementById('activity'),hint=document.getElementById('hint');
if(!mount||!activity)return;
document.getElementById('fallback').hidden=true;
mount.innerHTML='<div class="twofive-room" id="motion-room">'+
'<div class="neon-ceiling"></div><div class="cyber-window"><div class="moon"></div><div class="skyline"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="window-bar"></div></div>'+
'<div class="bed"><i></i></div><div class="wardrobe"><i></i><i></i></div><div class="laptop">‹/›</div>'+
'<div class="floor-grid"></div><div class="rug"></div><div class="pup-shadow" id="pup-shadow"></div>'+
'<div id="moving-pup" class="moving-pup" role="button" tabindex="0" aria-label="Tap Pixel Pup to play"><div id="pet-motion" class="pet-motion"><img alt="Original Code Life Pixel Pup" src="../pixel-pup.png" draggable="false"><svg class="blink-layer" id="blink-layer" viewBox="0 0 288 352" aria-hidden="true"><ellipse cx="131" cy="120" rx="24" ry="33" fill="#1a3766"/><path d="M110 118q20 8 43-2" stroke="#10284b" fill="none" stroke-width="3"/><ellipse cx="224" cy="118" rx="19" ry="31" fill="#edf7ff"/><path d="M205 114q19 10 37 0" stroke="#10284b" fill="none" stroke-width="3"/></svg></div></div>'+
'<div id="pup-bubble" class="pup-bubble" aria-live="polite">Hi coder! Ready to play? 💙</div><div id="pup-particles" class="pup-particles"></div></div>';
const room=document.getElementById('motion-room'),walker=document.getElementById('moving-pup'),
pet=document.getElementById('pet-motion'),bubble=document.getElementById('pup-bubble'),eyes=document.getElementById('blink-layer'),
shade=document.getElementById('pup-shadow'),parts=document.getElementById('pup-particles');
let action='idle',x=0,raf=0,timer=0,tapN=0,lastMove=Date.now();
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const say=msg=>{bubble.textContent=msg;activity.textContent=msg;};
const range=()=>Math.max(20,Math.min(room.clientWidth*.23,105));
const stop=()=>{cancelAnimationFrame(raf);clearTimeout(timer);action='idle';pet.className='pet-motion';eyes.classList.remove('visible');};
function walk(auto=false){
 stop();action='walk';pet.classList.add('is-walking');
 const to=(x>0?-1:1)*range(),start=performance.now(),from=x;
 say(auto?'Exploring my cyber room! 🐾':'Look at me go! 🐾');
 function frame(now){if(action!=='walk')return;const t=Math.min(1,(now-start)/1800),ease=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
 x=from+(to-from)*ease;walker.style.transform='translateX('+x.toFixed(1)+'px)';shade.style.transform='translateX(calc(-50% + '+x.toFixed(1)+'px))';
 if(t<1)raf=requestAnimationFrame(frame);else stop();}
 if(reduced.matches){x=to;walker.style.transform='translateX('+to+'px)';shade.style.transform='translateX(calc(-50% + '+to+'px))';stop();return;}
 raf=requestAnimationFrame(frame);
}
function jump(){stop();action='jump';pet.classList.add('is-jumping');say('Boing! 🚀');timer=setTimeout(stop,1080);}
function blink(){if(action!=='idle')stop();eyes.classList.add('visible');say('Peekaboo! 👀');timer=setTimeout(()=>eyes.classList.remove('visible'),230);}
function celebrate(){stop();action='celebrate';pet.classList.add('is-celebrating');say('YESSS! We did it! 🎉');
 parts.replaceChildren();if(!reduced.matches){const w=room.clientWidth;for(let i=0;i<18;i++){const p=document.createElement('span');p.className='spark';p.textContent=['✦','★','◆'][i%3];p.style.left=(w/2+x+(Math.random()-.5)*30)+'px';p.style.top='68%';p.style.setProperty('--tx',(Math.random()-.5)*230+'px');p.style.setProperty('--ty',(-45-Math.random()*190)+'px');parts.append(p);}}
 timer=setTimeout(()=>{stop();parts.replaceChildren();},1550);
}
function tap(){stop();action='pet';pet.classList.add('is-petted');say(['Heyyy! Ready to code? 💙','You got this, coder! ✨','I love learning with you! 🐾'][tapN++%3]);timer=setTimeout(stop,850);}
[['walk',walk],['jump',jump],['blink',blink],['celebrate',celebrate]].forEach(([name,fn])=>document.getElementById(name)?.addEventListener('click',fn));
walker.addEventListener('click',tap);
walker.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();tap();}});
const notes={controller:'Code Arcade is next after you approve my movement! 🎮',closet:'My Code Life wardrobe is ready for outfits! 👕',desk:'That is my coding desk. 💻',bed:'Zzz... recharge time! 💤'};
document.querySelectorAll('[data-room]').forEach(b=>b.addEventListener('click',()=>{say(notes[b.dataset.room]||'Coming soon!');}));
window.addEventListener('pagehide',()=>{cancelAnimationFrame(raf);clearTimeout(timer);clearInterval(idleCheck);clearInterval(blinkCheck);});
const idleCheck=setInterval(()=>{if(document.hidden||reduced.matches||action!=='idle')return;if(Date.now()-lastMove>12500){lastMove=Date.now();walk(true);}},3200);
const blinkCheck=setInterval(()=>{if(document.hidden||reduced.matches||action!=='idle')return;eyes.classList.add('visible');setTimeout(()=>eyes.classList.remove('visible'),210);},5700);
hint.textContent='Tap Pixel Pup or try the four actions 🐾';
activity.textContent='This test uses our original Pixel Pup. Try Walk first!';
})();