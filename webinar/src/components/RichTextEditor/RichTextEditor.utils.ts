/** Normalize empty / browser filler markup to a plain empty string. */
export function normalizeHtml(html: string | null | undefined): string {
  if (html == null) return '';
  const trimmed = html.trim();
  if (!trimmed) return '';

  const probe = document.createElement('div');
  probe.innerHTML = trimmed;
  const text = (probe.textContent || '').replace(/\u00a0/g, ' ').trim();
  if (!text) return '';

  return trimmed;
}

export function isHtmlEmpty(html: string | null | undefined): boolean {
  return normalizeHtml(html) === '';
}

/** Best-effort cleanup of noisy contenteditable output while keeping semantic HTML. */
export function cleanHtml(html: string): string {
  const normalized = normalizeHtml(html);
  if (!normalized) return '';

  const root = document.createElement('div');
  root.innerHTML = normalized;

  root.querySelectorAll('*').forEach((el) => {
    el.removeAttribute('style');
    el.removeAttribute('class');
    el.removeAttribute('id');
    [...el.attributes].forEach((attr) => {
      if (attr.name.startsWith('data-')) el.removeAttribute(attr.name);
    });
  });

  // Drop empty formatting wrappers
  root.querySelectorAll('span, font, b, i, u, strong, em').forEach((el) => {
    if (!(el.textContent || '').trim() && !el.querySelector('img, br')) {
      el.remove();
    }
  });

  return normalizeHtml(root.innerHTML);
}
