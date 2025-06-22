import { loginTemplate } from '../templates';
import { LoginFormComponent } from '../components';
import { appManager } from '../core/app-manager';

export function loginView(): Promise<string> {
  return Promise.resolve(loginTemplate);
}

export function setupLoginHandlers() {
  // remove already initialized components if any
  appManager.cleanupComponents();
  
  // load the login form components
  const loginForm = new LoginFormComponent();
  appManager.initComponent(loginForm);
}