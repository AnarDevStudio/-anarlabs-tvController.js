/**
 * Handles execution of JavaScript code defined in HTML attributes.
 */
/**
 * Executes the code specified in the given attribute of the element.
 * @param element The HTML element containing the attribute.
 * @param attributeName The name of the attribute containing the code (e.g., "tv-enter").
 */
export function executeAttribute(element, attributeName) {
    const code = element.getAttribute(attributeName);
    if (code) {
        try {
            // Create a function from the code string and execute it.
            // We bind 'this' to the element so 'this' inside the code refers to the element.
            const func = new Function(code);
            func.call(element);
        }
        catch (error) {
            console.error(`Error executing ${attributeName} for element:`, element, error);
        }
    }
}
//# sourceMappingURL=events.js.map