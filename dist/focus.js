import { executeAttribute } from "./events.js";
export class FocusManager {
    constructor() {
        this.currentFocusedElement = null;
    }
    focus(element) {
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
    blur(element) {
        element.classList.remove("tv-focused");
        if (document.activeElement === element) {
            element.blur();
        }
    }
    getCurrentFocus() {
        return this.currentFocusedElement;
    }
}
//# sourceMappingURL=focus.js.map