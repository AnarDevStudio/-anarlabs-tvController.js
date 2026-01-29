/**
 * DOM utility functions for TV navigation.
 */
/**
 * Gets all focusable elements in the DOM.
 * Only elements with tv-focus="true" are considered focusable.
 */
export function getFocusableElements() {
    // Convert NodeList to Array to return HTMLElement[]
    return Array.from(document.querySelectorAll('[tv-focus="true"]'));
}
/**
 * Checks if an element is focusable.
 */
export function isFocusable(element) {
    return element instanceof HTMLElement && element.getAttribute("tv-focus") === "true";
}
//# sourceMappingURL=utils.js.map