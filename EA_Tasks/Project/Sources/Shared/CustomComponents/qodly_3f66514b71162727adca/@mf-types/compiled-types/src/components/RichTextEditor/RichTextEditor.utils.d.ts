/** Normalize empty / browser filler markup to a plain empty string. */
export declare function normalizeHtml(html: string | null | undefined): string;
export declare function isHtmlEmpty(html: string | null | undefined): boolean;
/** Best-effort cleanup of noisy contenteditable output while keeping semantic HTML. */
export declare function cleanHtml(html: string): string;
