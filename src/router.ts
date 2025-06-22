type Route = {
  path: string;
  view: () => Promise<string>;
  setup?: () => Promise<void>;
  requiresAuth?: boolean;
};

const routes: Route[] = [
  { 
    path: '/', 
    view: () => import('./views/login').then(m => m.loginView()),
    setup: () => import('./views/login').then(m => m.setupLoginHandlers())
  },
  { 
    path: '/home', 
    view: () => import('./views/home').then(m => m.homeView()),
    setup: () => import('./views/home').then(m => m.setupHomeHandlers()),
    requiresAuth: true
  },
];

export async function navigateTo(path: string) {
  history.pushState(null, '', path);
  await router();
}

export async function router() {
  const potentialMatch = routes.find(route => route.path === location.pathname);
  const match = potentialMatch || routes[0];
  
  // If user is on root path and already logged in, show home view
  if (location.pathname === '/' && localStorage.getItem('token')) {
    await showHomeView();
    return;
  }
  
  // Check authentication for protected routes
  if (match.requiresAuth) {
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login if no token - use replaceState to avoid adding to history
      history.replaceState(null, '', '/');
      const loginRoute = routes.find(route => route.path === '/');
      if (loginRoute) {
        const html = await loginRoute.view();
        document.getElementById('app')!.innerHTML = html;
        if (loginRoute.setup) {
          await loginRoute.setup();
        }
      }
      return;
    }
  }
  
  const html = await match.view();
  document.getElementById('app')!.innerHTML = html;
  
  // Call setup function if it exists
  if (match.setup) {
    await match.setup();
  }
}

// Function to show home view without changing URL
export async function showHomeView() {
  const homeRoute = routes.find(route => route.path === '/home');
  if (homeRoute) {
    const html = await homeRoute.view();
    document.getElementById('app')!.innerHTML = html;
    if (homeRoute.setup) {
      await homeRoute.setup();
    }
  }
}

// Function to navigate to home with proper history management
export async function navigateToHome() {
  // Add a new history entry for the home state
  history.pushState({ view: 'home' }, '', '/');
  await showHomeView();
}

// Handle browser back/forward buttons
window.addEventListener('popstate', async (event) => {
  try {
    // If we have a state object, use it to determine the view
    if (event.state && event.state.view === 'home') {
      await showHomeView();
    } else {
      // Otherwise, use the normal router logic
      await router();
    }
  } catch (error) {
    console.error('Error handling popstate:', error);
    // Fallback to router
    await router();
  }
});

// Initialize the app
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await router();
  } catch (error) {
    console.error('Error initializing router:', error);
  }
});
