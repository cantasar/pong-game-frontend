import { router, navigateTo } from './router';

// Handle custom navigate events
window.addEventListener('navigate', (e: any) => {
  navigateTo(e.detail);
});
