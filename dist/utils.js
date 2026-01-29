export function getFocusableElements() {
    return Array.from(document.querySelectorAll('[tv-focus="true"]'));
}
export function isFocusable(element) {
    return element instanceof HTMLElement && element.getAttribute("tv-focus") === "true";
}
//# sourceMappingURL=utils.js.map