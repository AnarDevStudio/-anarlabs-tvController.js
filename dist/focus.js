let current = null;
export function setFocus(el) {
    if (current) {
        current.classList.remove("tv-focused");
    }
    current = el;
    current.classList.add("tv-focused");
}
export function getCurrent() {
    return current;
}
//# sourceMappingURL=focus.js.map