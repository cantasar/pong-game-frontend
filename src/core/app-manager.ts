import { BaseComponent } from '../components/base.component';

/**
 * Application manager that handles component lifecycle
 */
export class AppManager {
  private currentComponents: BaseComponent[] = [];

  /**
   * Register a component for lifecycle management
   */
  registerComponent(component: BaseComponent): void {
    this.currentComponents.push(component);
  }

  /**
   * Clean up all registered components
   */
  cleanupComponents(): void {
    this.currentComponents.forEach(component => {
      try {
        component.destroy();
      } catch (error) {
        console.error('Error destroying component:', error);
      }
    });
    this.currentComponents = [];
  }

  /**
   * Initialize a component and register it
   */
  initComponent(component: BaseComponent): void {
    component.init();
    this.registerComponent(component);
  }
}

// Global app manager instance
export const appManager = new AppManager();
