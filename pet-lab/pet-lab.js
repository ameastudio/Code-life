/* Pixel Pup 3D movement lab: intentionally separate from the production app. */
(async () => {
'use strict';
const output=document.getElementById('activity'),mount=document.getElementById('scene');
const say=t=>{output.textContent=t;};
const fallback=(reason)=>{document.getElementById('fallback').hidden=false;const msg='3D viewer unavailable: '+reason;document.getElementById('fallback').querySelector('p').textContent=msg;say(msg);setupFallbackActions();};
function setupFallbackActions(){
 const image=document.querySelector('#fallback img');
 document.getElementById('walk').addEventListener('click',()=>animateFallback('walking','Walk! 🐾'));
 document.getElementById('jump').addEventListener('click',()=>animateFallback('jumping','Boing! ↟'));
 document.getElementById('celebrate').addEventListener('click',()=>animateFallback('celebrating','Yesss! ✦'));
 document.getElementById('blink').addEventListener('click',()=>animateFallback('blinking','Peekaboo!'));
 document.querySelectorAll('[data-room]').forEach(el=>el.addEventListener('click',()=>say(el.textContent.trim()+' opens after 3D is available.')));
 image.addEventListener('click',()=>animateFallback('celebrating','Hey, coder! 💙'));
}
function animateFallback(name,comment){
 const image=document.querySelector('#fallback img');image.className='';void image.offsetHeight;image.classList.add('fallback-'+name);say(comment+' (2D backup animation)');
}
let THREE;let loadFailure='';
const libs=[
 ['jsDelivr 0.158','https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js'],
 ['unpkg 0.158','https://unpkg.com/three@0.158.0/build/three.module.js'],
 ['esm.sh 0.158','https://esm.sh/three@0.158.0?bundle']
];
for(const [name,url] of libs){
 try{say('Loading 3D engine ('+name+')…');THREE=await import(url);if(THREE?.WebGLRenderer){say('3D library ready. Preparing Pixel Pup…');break;}}
 catch(e){console.warn('3D library source failed:',name,e);loadFailure=name+': '+(e?.message||'network blocked');}
}
if(!THREE?.WebGLRenderer){fallback('library download blocked. Last attempt: '+loadFailure);return;}
const T=THREE;
let renderer;
try{
 renderer=new T.WebGLRenderer({antialias:false,alpha:false,powerPreference:'default',failIfMajorPerformanceCaveat:false});
}catch(e){
 console.error('3D rendering unavailable',e);
 fallback('WebGL could not start on this browser. '+(e?.message||'Enable hardware acceleration and reload.'));
 return;
}
renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.75));
renderer.outputColorSpace=T.SRGBColorSpace;
renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.55;
mount.append(renderer.domElement);
const scene=new T.Scene();
const camera=new T.PerspectiveCamera(43,1,.1,90);
camera.position.set(0,2.35,6.05);camera.lookAt(0,.9,0);
scene.add(new T.HemisphereLight(0xb9efff,0x0b204a,2.2));
const key=new T.DirectionalLight(0xeefaff,3.1);key.position.set(-3,6,4);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-5;key.shadow.camera.right=5;key.shadow.camera.top=5;key.shadow.camera.bottom=-5;scene.add(key);
const blueLamp=new T.PointLight(0x00beff,19,7);blueLamp.position.set(1.7,2,-1.1);scene.add(blueLamp);
const mat=(color,metalness=0,roughness=.66,emissive)=>new T.MeshStandardMaterial({color,metalness,roughness,emissive:emissive||0x000000,emissiveIntensity:emissive?.24:0});
const navy=mat(0x082b77,.18,.39),deep=mat(0x071a41,.1,.45),cyan=mat(0x13cbff,.18,.25,0x004c96),
ice=mat(0xd9f4ff,.02,.72),snow=mat(0xffffff),slate=mat(0x647ba4),black=mat(0x081329),blue=mat(0x1977f6,.2,.38),irisBlue=mat(0x079be9,.15,.21,0x005ca4),pink=mat(0xfc6b98,.05,.65);
const mesh=(geom,m,parent,x=0,y=0,z=0)=>{const o=new T.Mesh(geom,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;};
const ball=(parent,m,x,y,z,a,b,c)=>mesh(new T.SphereGeometry(1,24,16),m,parent,x,y,z).scale.set(a,b,c);
const box=(parent,m,x,y,z,w,h,d)=>mesh(new T.BoxGeometry(w,h,d),m,parent,x,y,z);
const tube=(parent,m,pts,r=.025)=>mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts.map(a=>new T.Vector3(...a))),32,r,8,false),m,parent);
const plane=(parent,m,x,y,z,w,h)=>mesh(new T.PlaneGeometry(w,h),m,parent,x,y,z);
const clickable=[],objects={};
function tag(root,action){root.traverse(o=>{if(o.isMesh){o.userData.action=action;clickable.push(o);}});return root;}
function group(parent,x=0,y=0,z=0){const g=new T.Group();g.position.set(x,y,z);parent.add(g);return g;}
// Cyber bedroom: three-dimensional furniture and walls, not a backdrop screenshot.
const floor=box(scene,mat(0x122e66,.19,.36),0,-.11,-.5,6.9,.19,6.4);
for(let x=-3.1;x<3.2;x+=.48)box(scene,mat(0x174788,.08,.6),x,-.004,-.5,.008,.008,6.2);
for(let z=-3.2;z<2.4;z+=.53)box(scene,mat(0x1b4f9c,.03,.7),0,-.004,z,6.9,.008,.008);
box(scene,mat(0x0b2558,.12,.69),0,1.55,-2.82,7,3.4,.12);
box(scene,mat(0x0c2554,.1,.7),-3.35,1.55,-.4,.10,3.5,5.3);
box(scene,mat(0x0d2658,.1,.7),3.35,1.55,-.4,.10,3.5,5.3);
const windowFrame=box(scene,cyan,-.55,1.99,-2.72,3.35,2.12,.12);
box(scene,mat(0x06143c),-.55,1.99,-2.64,3.2,1.96,.02);
for(let i=0;i<17;i++){
 const x=-2.08+(i*.18),h=.36+(Math.sin(i*3.1)+1)*.29;
 box(scene,mat(i%3===0?0x105fbe:0x15458e,.28,.44),x,.98+h/2,-2.6,.15,h,.07);
 for(let j=0;j<5;j++)if(j*.11<h-.08)box(scene,cyan,x,1.07+j*.11,-2.5,.025,.024,.005);
}
const cityMoon=ball(scene,mat(0x7fe7ff,.03,.06,0x1673ac),.34,2.54,-2.59,.15,.15,.015);
box(scene,cyan,-2.19,1.99,-2.53,.04,2,.07);box(scene,cyan,-.56,.98,-2.53,3.24,.045,.07);
const rug=mesh(new T.CylinderGeometry(1.3,1.3,.014,52),mat(0x1761bc,.08,.8),scene,0,.004,.85);rug.scale.z=.67;
const ring=mesh(new T.TorusGeometry(1.18,.014,8,52),cyan,scene,0,.02,.85);ring.rotation.x=-Math.PI/2;ring.scale.y=.67;
// Bed and pillow on left.
const bed=group(scene,-2.1,0,-.85);box(bed,deep,0,.26,0,1.35,.36,1.25);
box(bed,blue,0,.52,-.06,1.3,.18,1.02);box(bed,ice,0,.62,-.44,.94,.13,.33);
ball(bed,snow,-.4,.72,-.38,.21,.12,.16);
tag(bed,'bed');
// Desk, laptop, and glowing monitor on the right.
const desk=group(scene,2.12,0,-.67);box(desk,mat(0x1b59b3),0,.8,0,1.53,.10,.82);
[-.61,.61].forEach(x=>box(desk,deep,x,.38,0,.09,.76,.65));
const monitor=box(desk,deep,-.09,1.24,-.24,.79,.63,.07);
box(desk,cyan,-.09,1.24,-.17,.68,.52,.02);
box(desk,navy,-.09,1.24,-.14,.60,.44,.02);
const codeMark=makeTextTexture('</>',72,'#8eeeff');
plane(desk,new T.MeshBasicMaterial({map:codeMark,transparent:true}),-.09,1.25,-.126,.44,.23);
tag(desk,'desk');
// Wardrobe with two visible doors and neon edging.
const closet=group(scene,2.34,0,-2.13);
box(closet,mat(0x1255aa,.1,.41),0,.93,0,1.10,1.92,.58);
[-.26,.26].forEach(x=>{box(closet,navy,x,.9,.305,.46,1.68,.03);box(closet,cyan,x+(x<0?.13:-.13),.95,.335,.018,.25,.012);});
tag(closet,'closet');
const controller=group(scene,-1.65,.15,1.22);
ball(controller,deep,0,.04,0,.34,.12,.18);[-.20,.2].forEach(x=>ball(controller,blue,x,-.02,.06,.15,.085,.16));
box(controller,ice,-.13,.15,.17,.13,.035,.015);box(controller,ice,-.13,.15,.17,.035,.13,.015);
for(const x of [.14,.22])ball(controller,cyan,x,.13,.18,.025,.027,.014);
tag(controller,'controller');
const gift=group(scene,1.55,0,1.38);box(gift,blue,0,.23,0,.46,.43,.4);box(gift,ice,0,.24,.207,.045,.43,.012);box(gift,cyan,0,.47,0,.54,.08,.45);tag(gift,'gift');
// Model: handmade stylized geometric likeness of the APPROVED Pixel Pup; not an auto-converted original 3D sculpt.
const pup=group(scene,-.05,0,.79);pup.scale.setScalar(.94);
const torso=ball(pup,navy,0,.57,-.06,.43,.50,.36);
const belly=ball(pup,ice,0,.49,.235,.31,.35,.12);
const hood=ball(pup,navy,0,1.28,-.05,.59,.58,.47);
const hoodEdge=mesh(new T.TorusGeometry(.492,.059,12,48),cyan,pup,0,1.31,.31);
hoodEdge.scale.y=.90;
const head=group(pup,0,1.28,.15);
ball(head,ice,0,.02,.15,.47,.41,.40);
ball(head,slate,0,.255,.035,.39,.21,.37);
ball(head,snow,-.22,-.16,.40,.23,.18,.22);ball(head,snow,.22,-.16,.40,.23,.18,.22);
// Floppy navy ears with checkerboard cyan/blue sections.
function checkerTexture(){
 const can=document.createElement('canvas');can.width=128;can.height=128;const ctx=can.getContext('2d');ctx.fillStyle='#062f7d';ctx.fillRect(0,0,128,128);
 for(let y=0;y<4;y++)for(let x=0;x<4;x++){if((x+y)%2===0){ctx.fillStyle=(x%2===0?'#22d7ff':'#62baff');ctx.fillRect(x*32,y*32,32,32);}}return new T.CanvasTexture(can);
}
const checkMat=new T.MeshStandardMaterial({map:checkerTexture(),roughness:.43,side:T.DoubleSide});
function ear(x,sign){
 const g=group(head,x,.35,-.055);g.rotation.z=-sign*.75;
 const outer=ball(g,navy,sign*.06,.12,.00,.22,.39,.12);
 const inner=ball(g,checkMat,sign*.065,.14,.115,.154,.31,.017);inner.rotation.z=sign*.12;
 return g;
}
const earL=ear(-.4,-1),earR=ear(.4,1);
// Large glossy cyan eyes.
const eyelids=[];
for(const s of [-1,1]){
 const eye=group(head,s*.20,.06,.49);
 ball(eye,snow,0,0,0,.166,.195,.081);
 ball(eye,irisBlue,-s*.015,-.013,.072,.105,.139,.032);
 ball(eye,black,-s*.019,-.007,.101,.057,.090,.019);
 ball(eye,snow,-.037,.071,.113,.036,.043,.011);
 ball(eye,snow,.055,-.048,.114,.014,.019,.005);
 eyelids.push(eye);
 ball(head,snow,s*.30,-.15,.435,.125,.10,.095);
}
ball(head,black,0,-.14,.57,.092,.062,.041);
tube(head,black,[[-.01,-.20,.553],[-.058,-.26,.537],[-.124,-.24,.52]],.012);
tube(head,black,[[.01,-.20,.553],[.07,-.263,.532],[.125,-.24,.52]],.012);
ball(head,pink,0,-.287,.555,.071,.084,.017);
// Tiny highlight tuft, paws, sleeves, hoodie strings and bag.
ball(head,snow,-.052,.365,.16,.10,.09,.11);
const arms=[],legs=[];
for(const s of [-1,1]){
 const arm=group(pup,s*.36,.70,.05);ball(arm,navy,s*.028,-.15,.1,.17,.25,.17);ball(arm,ice,s*.03,-.35,.17,.17,.14,.16);
 box(arm,cyan,s*.03,-.30,.285,.18,.031,.022);
 arms.push(arm);
 const leg=group(pup,s*.3,.27,.01);ball(leg,slate,0,-.04,.16,.21,.22,.24);ball(leg,ice,0,-.16,.32,.23,.15,.22);
 for(let t=-1;t<=1;t++)ball(leg,snow,t*.10,-.205,.48,.067,.055,.057);
 legs.push(leg);
 tube(pup,cyan,[[s*.10,.79,.258],[s*.09,.68,.38],[s*.04,.57,.40]],.017);
}
const bag=ball(pup,deep,-.39,.63,-.19,.19,.30,.26);
box(pup,cyan,-.51,.66,-.03,.05,.32,.06);
const tail=tube(pup,slate,[[-.31,.38,-.35],[-.69,.48,-.52],[-.87,.84,-.55],[-.78,1.08,-.58],[-.56,1.03,-.55]],.13);
const tip=ball(pup,ice,-.55,1.03,-.56,.17,.14,.17);
const badge=ball(pup,cyan,0,.53,.350,.182,.127,.04);
const shirtMark=makeTextTexture('</>',100,'#f7ffff');
plane(pup,new T.MeshBasicMaterial({map:shirtMark,transparent:true}),0,.53,.397,.254,.134);
// Soft ground shadow / cyan ring.
const puddle=mesh(new T.TorusGeometry(.61,.022,8,44),cyan,scene,-.05,.015,.79);puddle.rotation.x=-Math.PI/2;
tag(pup,'pet');
const clock=new T.Clock();let elapsed=0;
let active='idle',until=0,walkDir=1,canRoam=true;
function act(next,sec=1.25){active=next;until=elapsed+sec;if(next==='walk'){walkDir=pup.position.x>.75?-1:1;canRoam=false;}say(({walk:"Look at me go! 🐾",jump:"Boing! 🚀",celebrate:"YOU DID IT! 💙",blink:"Peekaboo!",pet:"Hey coder! Ready to build?",bed:"Charging up! Zzz… 💤",closet:"Closet opened! Code Life outfits coming next.",desk:"Your coding station!",controller:"Arcade unlocked in the full app. 🎮",gift:"Rewards and shop coming soon!"})[next]||next);}
const controls={walk:()=>act('walk',2.3),jump:()=>act('jump',1.15),celebrate:()=>act('celebrate',2),blink:()=>act('blink',.33)};
Object.entries(controls).forEach(([name,run])=>document.getElementById(name).addEventListener('click',run));
document.querySelectorAll('[data-room]').forEach(e=>e.addEventListener('click',()=>roomClick(e.dataset.room)));
function roomClick(t){if(t==='controller')return act('controller',1);if(t==='bed')return act('bed',1);if(t==='closet')return act('closet',1);if(t==='desk')return act('desk',1);act(t,1);}
const ray=new T.Raycaster(),pointer=new T.Vector2();
renderer.domElement.addEventListener('click',e=>{
 const r=renderer.domElement.getBoundingClientRect();pointer.set(((e.clientX-r.left)/r.width)*2-1,-((e.clientY-r.top)/r.height)*2+1);
 ray.setFromCamera(pointer,camera);const hit=ray.intersectObjects(clickable,false)[0];if(!hit)return;
 const thing=hit.object.userData.action; if(thing==='pet')act('celebrate',1.4);else roomClick(thing);
});
function resize(){
 const w=mount.clientWidth,h=mount.clientHeight;if(!w||!h)return;
 renderer.setSize(w,h,false);camera.aspect=w/h;camera.fov=w<380?48:43;camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(mount);resize();
const prefersReduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
let raf=0;
function frame(){
 raf=requestAnimationFrame(frame);if(document.hidden)return;
 const dt=Math.min(clock.getDelta(),.055);elapsed+=dt;
 const busy=elapsed<until,phase=elapsed;
 if(!busy){active='idle';if(canRoam&&!prefersReduced)pup.position.x=Math.sin(phase*.27)*.45;}
 const walking=active==='walk';
 const t=phase*9;
 for(let i=0;i<legs.length;i++){legs[i].rotation.x=walking?Math.sin(t+i*Math.PI)*.55:0;}
 for(let i=0;i<arms.length;i++){arms[i].rotation.x=walking?-Math.sin(t+i*Math.PI)*.48:active==='celebrate'?Math.sin(t+i*.5)*.58:Math.sin(phase*1.5+i)*.035;}
 const j=active==='jump'?Math.max(0,Math.sin((1-(until-phase)/1.15)*Math.PI))*.54:active==='celebrate'?Math.abs(Math.sin(phase*9))*.13:0;
 pup.position.y=j+(!prefersReduced?.012*Math.sin(phase*2):0);
 pup.rotation.y=walking?Math.sin(phase*3)*.17:active==='celebrate'?Math.sin(phase*8)*.16:Math.sin(phase*.42)*.09;
 head.rotation.z=active==='celebrate'?Math.sin(phase*9)*.08:Math.sin(phase*1.3)*.016;
 const regularBlink=Math.sin(phase*.69)>0.995,forced=active==='blink';
 const blinkScale=forced||regularBlink?.09:1;for(const e of eyelids)e.scale.y=blinkScale;
 earL.rotation.z=.68+Math.sin(phase*1.6)*.04;
 earR.rotation.z=-.68+Math.sin(phase*1.7)*.04;
 const glow=(active==='celebrate'?1.55:1)+Math.sin(phase*2)*.10;
 puddle.scale.setScalar(glow);
 renderer.render(scene,camera);
}
frame();
document.addEventListener('visibilitychange',()=>clock.getDelta());
window.addEventListener('pagehide',()=>{cancelAnimationFrame(raf);renderer.dispose();});
function makeTextTexture(text,size,color){
 const c=document.createElement('canvas');c.width=256;c.height=128;
 const ctx=c.getContext('2d');ctx.clearRect(0,0,256,128);ctx.fillStyle=color;ctx.font='900 '+size+'px ui-monospace,monospace';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,128,66,226);
 const tx=new T.CanvasTexture(c);tx.colorSpace=T.SRGBColorSpace;return tx;
}
})().catch(e=>{console.error(e);document.getElementById('fallback').hidden=false;document.getElementById('activity').textContent='3D could not initialize. Original Pixel Pup is shown for comparison.';});