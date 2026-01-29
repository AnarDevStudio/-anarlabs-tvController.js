let current: HTMLElement | null = null;

export function setFocus(el: HTMLElement) {
  if (current) {
    current.classList.remove("tv-focused");
  }

  current = el;
  current.classList.add("tv-focused");
}

export function getCurrent() {
  return current;
}
