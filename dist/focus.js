import { executeAttribute } from "./events.js";
/**
 * Manages the focus state of elements.
 */
// Helper to handle class manipulation and event firing
export class FocusManager {
    constructor() {
        this.currentFocusedElement = null;
    }
    /**
     * Sets focus to the given element.
     * Handles class changes and executes 'tv-focused' attribute.
     */
    focus(element) {
        if (this.currentFocusedElement === element) {
            return;
        }
        // Blur previous element
        if (this.currentFocusedElement) {
            this.blur(this.currentFocusedElement);
        }
        // specific requirement: "it must receive a CSS class named 'tv-focused'"
        element.classList.add("tv-focused");
        // specific requirement: "the JavaScript code inside tv-focused must be executed."
        executeAttribute(element, "tv-focused");
        // Also call native focus so screen readers/browser internals work
        element.focus();
        this.currentFocusedElement = element;
    }
    /**
     * Removes focus from the given element.
     */
    blur(element) {
        element.classList.remove("tv-focused");
        // blur native element if it matches
        if (document.activeElement === element) {
            element.blur();
        }
    }
    getCurrentFocus() {
        return this.currentFocusedElement;
    }
}
//# sourceMappingURL=focus.js.map