export function getFocusableElements(): HTMLElement[] {
  return Array.from(
    document.querySelectorAll<HTMLElement>(
      '[tv-focus="true"]'
    )
  );
}
