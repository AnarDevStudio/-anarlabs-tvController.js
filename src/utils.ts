export function getFocusableElements(): HTMLElement[] {
  return Array.from(document.querySelectorAll('[tv-focus="true"]')) as HTMLElement[];
}

export function isFocusable(element: Element | null): boolean {
  return element instanceof HTMLElement && element.getAttribute("tv-focus") === "true";
}
