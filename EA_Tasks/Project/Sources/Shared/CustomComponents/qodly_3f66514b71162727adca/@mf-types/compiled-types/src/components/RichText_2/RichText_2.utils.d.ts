/**
 * The datasource contract is a plain HTML string, so every value that crosses the
 * boundary (in from the datasource, out from contenteditable) goes through an
 * allow-list sanitizer instead of being trusted.
 */
export declare function sanitizeUrl(url: string): string;
export declare function escapeHtml(text: string): string;
/**
 * `<p><br></p>` and other browser filler markup read as empty to the user, so they
 * collapse to '' rather than being written to the datasource as noise.
 */
export declare function isHtmlEmpty(html: string | null | undefined): boolean;
export declare function sanitizeHtml(html: string | null | undefined): string;
