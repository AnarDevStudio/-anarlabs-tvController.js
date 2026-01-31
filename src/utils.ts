export function getFocusableElements(): HTMLElement[] {
  return Array.from(document.querySelectorAll('[tv-focus="true"]')) as HTMLElement[];
}

export function isFocusable(element: Element | null): boolean {
  return element instanceof HTMLElement && element.getAttribute("tv-focus") === "true";
}

export function getNearestElement(
  current: HTMLElement,
  candidates: HTMLElement[],
  direction: "up" | "down" | "left" | "right"
): HTMLElement | null {
  const currentRect = current.getBoundingClientRect();
  const currentCenter = {
    x: currentRect.left + currentRect.width / 2,
    y: currentRect.top + currentRect.height / 2,
  };

  let nearest: HTMLElement | null = null;
  let minDistance = Infinity;

  for (const candidate of candidates) {
    if (candidate === current) continue;

    const rect = candidate.getBoundingClientRect();
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    let isMatch = false;
    let dx = center.x - currentCenter.x;
    let dy = center.y - currentCenter.y;

    switch (direction) {
      case "up":
        isMatch = rect.bottom <= currentRect.top + 5; // allow small overlap
        break;
      case "down":
        isMatch = rect.top >= currentRect.bottom - 5;
        break;
      case "left":
        isMatch = rect.right <= currentRect.left + 5;
        break;
      case "right":
        isMatch = rect.left >= currentRect.right - 5;
        break;
    }

    if (isMatch) {
      // Euclidean distance with weighting to prefer alignment
      // If moving horizontally (left/right), weight vertical distance more
      // If moving vertically (up/down), weight horizontal distance more
      let distance;
      if (direction === "left" || direction === "right") {
        distance = Math.pow(dx, 2) + Math.pow(dy * 2, 2);
      } else {
        distance = Math.pow(dx * 2, 2) + Math.pow(dy, 2);
      }

      if (distance < minDistance) {
        minDistance = distance;
        nearest = candidate;
      }
    }
  }

  return nearest;
}
