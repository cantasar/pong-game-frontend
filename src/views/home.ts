import { homeTemplate } from '../templates';
import { SidebarComponent } from '../components';
import { appManager } from '../core/app-manager';

export function homeView(): Promise<string> {
  return Promise.resolve(homeTemplate);
}

export function setupHomeHandlers() {
  // Clean up previous components
  appManager.cleanupComponents();
  
  // Initialize new components
  const sidebar = new SidebarComponent();
  appManager.initComponent(sidebar);
}