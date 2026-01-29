import { getFocusableElements } from "./utils.js";
import { executeAttribute } from "./events.js";
import { FocusManager } from "./focus.js";
export class TvControllerInstance {
    constructor() {
        this.isInitialized = false;
        this.focusManager = new FocusManager();
    }
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
        if (currentIndex === -1 && elements.length > 0) {
            currentIndex = 0;
            this.focusManager.focus(elements[0]);
        }
        switch (event.key) {
            case "ArrowRight":
            case "ArrowDown":
                this.navigate(elements, currentIndex, 1);
                event.preventDefault();
                break;
            case "ArrowLeft":
            case "ArrowUp":
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
                    event.preventDefault();
                }
                break;
        }
    }
    navigate(elements, currentIndex, direction) {
        let nextIndex = currentIndex + direction;
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