/**
 * The datasource contract is a plain HTML string, so every value that crosses the
 * boundary (in from the datasource, out from contenteditable) goes through an
 * allow-list sanitizer instead of being trusted.
 */

const ALLOWED_TAGS = new Set([
  'P',
  'BR',
  'H1',
  'H2',
  'H3',
  'STRONG',
  'EM',
  'U',
  'S',
  'UL',
  'OL',
  'LI',
  'A',
  'BLOCKQUOTE',
]);

/** Presentational tags produced by execCommand, mapped to their semantic equivalent. */
const TAG_ALIASES: Record<string, string> = {
  B: 'STRONG',
  I: 'EM',
  STRIKE: 'S',
  DEL: 'S',
  H4: 'H3',
  H5: 'H3',
  H6: 'H3',
  DIV: 'P',
};

/** Removed with their subtree; unwrapping them would leak their content as text. */
const DROPPED_TAGS = new Set([
  'SCRIPT',
  'STYLE',
  'IFRAME',
  'FRAME',
  'FRAMESET',
  'OBJECT',
  'EMBED',
  'APPLET',
  'LINK',
  'META',
  'BASE',
  'FORM',
  'INPUT',
  'BUTTON',
  'SELECT',
  'TEXTAREA',
  'NOSCRIPT',
  'TEMPLATE',
]);

const BLOCK_TAGS = new Set(['P', 'H1', 'H2', 'H3', 'LI', 'UL', 'OL', 'BLOCKQUOTE']);

const ALIGNMENTS = new Set(['left', 'center', 'right', 'justify']);

const SAFE_URL = /^(?:https?:\/\/|mailto:|tel:|#|\/|\.{1,2}\/)/i;

export function sanitizeUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return '';
  if (SAFE_URL.test(trimmed)) return trimmed;
  // Bare hosts such as "qodly.com" are the common paste case; anything with a
  // scheme we did not allow (javascript:, data:, ...) is rejected.
  if (/^[\w-]+(\.[\w-]+)+([/?#].*)?$/.test(trimmed)) return `https://${trimmed}`;
  return '';
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function readAlignment(el: Element): string {
  const inline = (el as HTMLElement).style?.textAlign?.trim().toLowerCase();
  if (inline && ALIGNMENTS.has(inline)) return inline;
  const attr = el.getAttribute('align')?.trim().toLowerCase();
  return attr && ALIGNMENTS.has(attr) ? attr : '';
}

function stripAttributes(el: Element) {
  const align = BLOCK_TAGS.has(el.tagName) ? readAlignment(el) : '';
  const href = el.tagName === 'A' ? sanitizeUrl(el.getAttribute('href') || '') : '';

  for (const attr of Array.from(el.attributes)) {
    el.removeAttribute(attr.name);
  }

  if (align) (el as HTMLElement).style.textAlign = align;
  if (el.tagName === 'A') {
    if (!href) {
      unwrap(el);
      return;
    }
    el.setAttribute('href', href);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  }
}

function unwrap(el: Element) {
  const parent = el.parentNode;
  if (!parent) return;
  while (el.firstChild) parent.insertBefore(el.firstChild, el);
  parent.removeChild(el);
}

function rename(el: Element, tagName: string): Element {
  const replacement = el.ownerDocument.createElement(tagName);
  const align = readAlignment(el);
  const href = el.tagName === 'A' ? el.getAttribute('href') : null;
  while (el.firstChild) replacement.appendChild(el.firstChild);
  if (align) replacement.style.textAlign = align;
  if (href) replacement.setAttribute('href', href);
  el.parentNode?.replaceChild(replacement, el);
  return replacement;
}

function sanitizeChildren(parent: Node) {
  for (const node of Array.from(parent.childNodes)) {
    if (node.nodeType === Node.TEXT_NODE) continue;
    if (node.nodeType !== Node.ELEMENT_NODE) {
      parent.removeChild(node);
      continue;
    }

    let el = node as Element;
    if (DROPPED_TAGS.has(el.tagName)) {
      parent.removeChild(el);
      continue;
    }

    sanitizeChildren(el);

    const target = TAG_ALIASES[el.tagName] ?? el.tagName;
    if (!ALLOWED_TAGS.has(target)) {
      unwrap(el);
      continue;
    }
    if (target !== el.tagName) el = rename(el, target);
    stripAttributes(el);
  }
}

/** Drops formatting wrappers left behind with no visible content. */
function pruneEmptyNodes(root: Element) {
  for (const el of Array.from(root.querySelectorAll('strong, em, u, s, a'))) {
    if (!el.textContent?.trim() && !el.querySelector('br')) el.remove();
  }
}

function textOf(node: Node): string {
  return (node.textContent || '').replace(/\u00a0/g, ' ').trim();
}

/**
 * `<p><br></p>` and other browser filler markup read as empty to the user, so they
 * collapse to '' rather than being written to the datasource as noise.
 */
export function isHtmlEmpty(html: string | null | undefined): boolean {
  if (!html?.trim()) return true;
  const probe = document.createElement('div');
  probe.innerHTML = html;
  return !textOf(probe);
}

export function sanitizeHtml(html: string | null | undefined): string {
  if (!html?.trim()) return '';

  const root = document.createElement('div');
  root.innerHTML = html;
  sanitizeChildren(root);
  pruneEmptyNodes(root);

  if (!textOf(root)) return '';
  return root.innerHTML.trim();
}
