/**
 * Base component class that provides common functionality for all components
 */
export abstract class BaseComponent {
  protected element: HTMLElement | null = null;
  protected isInitialized = false;

  /**
   * Initialize the component
   */
  abstract init(): void;

  /**
   * Clean up the component and remove event listeners
   */
  abstract destroy(): void;

  /**
   * Check if component is initialized
   */
  protected checkInitialized(): boolean {
    if (!this.isInitialized) {
      console.warn(`${this.constructor.name} has not been initialized`);
      return false;
    }
    return true;
  }

  /**
   * Add event listener with automatic cleanup tracking
   */
  protected addEventListener<K extends keyof HTMLElementEventMap>(
    element: HTMLElement | null,
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void {
    if (element) {
      element.addEventListener(type, listener, options);
    }
  }

  /**
   * Remove event listener
   */
  protected removeEventListener<K extends keyof HTMLElementEventMap>(
    element: HTMLElement | null,
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void {
    if (element) {
      element.removeEventListener(type, listener, options);
    }
  }
}
