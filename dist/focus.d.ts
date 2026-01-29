/**
 * Manages the focus state of elements.
 */
export declare class FocusManager {
    private currentFocusedElement;
    /**
     * Sets focus to the given element.
     * Handles class changes and executes 'tv-focused' attribute.
     */
    focus(element: HTMLElement): void;
    /**
     * Removes focus from the given element.
     */
    blur(element: HTMLElement): void;
    getCurrentFocus(): HTMLElement | null;
}
//# sourceMappingURL=focus.d.ts.map