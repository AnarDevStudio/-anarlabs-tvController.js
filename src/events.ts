
/**
 * Executes the code specified in the given attribute of the element.
 * @param element The HTML element containing the attribute.
 * @param attributeName The name of the attribute containing the code (e.g., "tv-enter").
 */
export function executeAttribute(element: HTMLElement, attributeName: string): void {
  const code = element.getAttribute(attributeName);
  if (code) {
    try {
      const func = new Function(code);
      func.call(element);
    } catch (error) {
      console.error(`Error executing ${attributeName} for element:`, element, error);
    }
  }
}
