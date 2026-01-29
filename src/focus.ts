import { executeAttribute } from "./events.js";

export class FocusManager {
  private currentFocusedElement: HTMLElement | null = null;

  public focus(element: HTMLElement): void {
    if (this.currentFocusedElement === element) {
      return;
    }

    if (this.currentFocusedElement) {
      this.blur(this.currentFocusedElement);
    }

    element.classList.add("tv-focused");
    executeAttribute(element, "tv-focused");
    element.focus();

    this.currentFocusedElement = element;
  }

  public blur(element: HTMLElement): void {
    element.classList.remove("tv-focused");
    if (document.activeElement === element) {
      element.blur();
    }
  }

  public getCurrentFocus(): HTMLElement | null {
    return this.currentFocusedElement;
  }
}
