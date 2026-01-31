import { getFocusableElements, getNearestElement } from "./utils.js";
import { executeAttribute } from "./events.js";
import { FocusManager } from "./focus.js";

export class TvControllerInstance {
  private focusManager: FocusManager;
  private isInitialized: boolean = false;

  constructor() {
    this.focusManager = new FocusManager();
  }

  public init(): void {
    if (this.isInitialized) return;

    window.addEventListener("keydown", this.handleKeyDown.bind(this));

    // logical start: focus the first available element
    const elements = getFocusableElements();
    if (elements.length > 0) {
      this.focusManager.focus(elements[0]!);
    }

    this.isInitialized = true;
  }

  private handleKeyDown(event: KeyboardEvent): void {
    const currentFocused = this.focusManager.getCurrentFocus();

    // If nothing is focused, try to focus the first element
    if (!currentFocused) {
      const elements = getFocusableElements();
      if (elements.length > 0) {
        this.focusManager.focus(elements[0]!);
      }
      return;
    }

    switch (event.key) {
      case "ArrowRight":
        this.navigateSpatial("right");
        event.preventDefault();
        break;
      case "ArrowLeft":
        this.navigateSpatial("left");
        event.preventDefault();
        break;
      case "ArrowUp":
        this.navigateSpatial("up");
        event.preventDefault();
        break;
      case "ArrowDown":
        this.navigateSpatial("down");
        event.preventDefault();
        break;

      case "Enter":
        executeAttribute(currentFocused, "tv-enter");
        event.preventDefault();
        break;

      case "Backspace":
      case "Escape":
        executeAttribute(currentFocused, "tv-back");
        event.preventDefault();
        break;
    }
  }

  private navigateSpatial(direction: "up" | "down" | "left" | "right"): void {
    const currentFocused = this.focusManager.getCurrentFocus();
    if (!currentFocused) return;

    const elements = getFocusableElements();
    const nextElement = getNearestElement(currentFocused, elements, direction);

    if (nextElement) {
      this.focusManager.focus(nextElement);
    }
  }
}
