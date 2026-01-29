export function runEvent(
  attr: string,
  el: HTMLElement | null
) {
  if (!el) return;

  const code = el.getAttribute(attr);
  if (!code) return;

  try {
    new Function(code)();
  } catch (err) {
    console.error(attr, err);
  }
}
