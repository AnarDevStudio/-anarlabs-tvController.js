import { getFocusableElements } from "./utils.js";
import { executeAttribute } from "./events.js";
import { FocusManager } from "./focus.js";
/**
 * Main controller for TV navigation.
 */
export class TvControllerInstance {
    constructor() {
        this.isInitialized = false;
        this.focusManager = new FocusManager();
    }
    /**
     * Initializes the TV Controller library.
     * Sets up event listeners and initial focus.
     */
    init() {
        if (this.isInitialized)
            return;
        window.addEventListener("keydown", this.handleKeyDown.bind(this));
        // logical start: focus the first available element
        const elements = getFocusableElements();
        if (elements.length > 0) {
            this.focusManager.focus(elements[0]);
        }
        this.isInitialized = true;
    }
    handleKeyDown(event) {
        const elements = getFocusableElements();
        if (elements.length === 0)
            return;
        const currentFilter = this.focusManager.getCurrentFocus();
        let currentIndex = -1;
        if (currentFilter) {
            currentIndex = elements.indexOf(currentFilter);
        }
        // If we lost track of the element (e.g. dom change), try to find it or reset
        if (currentIndex === -1 && elements.length > 0) {
            currentIndex = 0;
            this.focusManager.focus(elements[0]);
            // If we just reset focus, we might want to consume the event or not.
            // But let's proceed to process navigation from this new start point.
        }
        switch (event.key) {
            case "ArrowRight":
            case "ArrowDown":
                // Next element
                this.navigate(elements, currentIndex, 1);
                event.preventDefault(); // Prevent scrolling
                break;
            case "ArrowLeft":
            case "ArrowUp":
                // Previous element
                this.navigate(elements, currentIndex, -1);
                event.preventDefault();
                break;
            case "Enter":
                if (currentFilter) {
                    executeAttribute(currentFilter, "tv-enter");
                    event.preventDefault();
                }
                break;
            case "Backspace":
            case "Escape":
                if (currentFilter) {
                    executeAttribute(currentFilter, "tv-back");
                    event.preventDefault(); // Prevent browser back
                }
                break;
        }
    }
    navigate(elements, currentIndex, direction) {
        let nextIndex = currentIndex + direction;
        // Loop logic
        if (nextIndex >= elements.length) {
            nextIndex = 0;
        }
        else if (nextIndex < 0) {
            nextIndex = elements.length - 1;
        }
        const nextElement = elements[nextIndex];
        if (nextElement) {
            this.focusManager.focus(nextElement);
        }
    }
}
//# sourceMappingURL=controller.js.map