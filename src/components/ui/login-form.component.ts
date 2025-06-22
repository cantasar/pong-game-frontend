import { navigateToHome } from '../../router';
import { login } from '../../services';
import { BaseComponent } from '../base.component';

export class LoginFormComponent extends BaseComponent {
  private loginForm: HTMLFormElement | null = null;
  private errorMessage: HTMLDivElement | null = null;

  init() {
    this.loginForm = document.getElementById('loginForm') as HTMLFormElement;
    this.errorMessage = document.getElementById('errorMessage') as HTMLDivElement;
    
    this.setupEventListeners();
    this.isInitialized = true;
  }

  private setupEventListeners() {
    if (this.loginForm) {
      this.loginForm.addEventListener('submit', async (e) => {
        await this.handleLogin(e);
      });
    }
  }

  private async handleLogin(e: Event) {
    e.preventDefault();
    
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement;

    if (!username.trim() || !password.trim()) {
      this.showError('Please enter username and password');
      return;
    }

    // Disable button and show loading state
    loginBtn.disabled = true;
    loginBtn.textContent = 'Logging in...';
    this.hideError();

    try {
      const response = await login(username, password);

      if (!response.success) {
        throw new Error(response.message || 'Login failed');
      }

      // Store JWT token in localStorage
      if (response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify({ username }));
        
        // Navigate to home with proper history management
        await navigateToHome();
      } else {
        throw new Error('Token could not be retrieved');
      }
    } catch (error) {
      this.showError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      // Re-enable button
      loginBtn.disabled = false;
      loginBtn.textContent = 'Login';
    }
  }

  private showError(message: string) {
    if (this.errorMessage) {
      this.errorMessage.textContent = message;
      this.errorMessage.classList.remove('hidden');
    }
  }

  private hideError() {
    if (this.errorMessage) {
      this.errorMessage.classList.add('hidden');
    }
  }

  destroy() {
    // Clean up event listeners if needed
    this.loginForm = null;
    this.errorMessage = null;
  }
}
