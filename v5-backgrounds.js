/* Non-destructive scenery selector. Does NOT modify game state, pets, logo or course logic. */
(() => {
  'use strict';
  const app = document.getElementById('app');
  if (!app) return;
  let pending = false;
  function refresh() {
    pending = false;
    const hash = (location.hash || '#lessons').replace(/^#\/?/, '').split('/')[0];
    let scene = hash === 'lessons' ? 'city' : hash === 'playground' ? 'studio' : hash;
    if (hash === 'lesson' || hash === 'challenge' || hash === 'boss') scene = 'lesson';
    if (hash === 'pet') scene = 'pet';
    if (hash === 'arcade') scene = 'arcade';
    document.body.dataset.scene = scene;
    // Keep city numbers + buttons, pet-room hotspots, and lesson editors interactive.
    // Any illustrations are decorative CSS backgrounds, never overlays over buttons.
  }
  function schedule() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(refresh);
  }
  addEventListener('hashchange', schedule);
  new MutationObserver(schedule).observe(app, {childList:true});
  schedule();
})();
