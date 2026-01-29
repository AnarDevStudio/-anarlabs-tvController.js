export function runEvent(attr, el) {
    if (!el)
        return;
    const code = el.getAttribute(attr);
    if (!code)
        return;
    try {
        new Function(code)();
    }
    catch (err) {
        console.error(attr, err);
    }
}
//# sourceMappingURL=events.js.map