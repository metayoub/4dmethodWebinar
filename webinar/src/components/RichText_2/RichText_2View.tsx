import cn from 'classnames';
import {
  type CSSProperties,
  type FC,
  type FocusEvent,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatUnderlined,
  MdLink,
  MdLinkOff,
} from 'react-icons/md';

import styles from './RichText_2.module.css';
import { escapeHtml, isHtmlEmpty, sanitizeHtml, sanitizeUrl } from './RichText_2.utils';

export interface RichText_2ViewProps {
  value: string;
  placeholder?: string;
  readOnly?: boolean;
  minHeight?: number;
  /** false in the Studio canvas: the toolbar is shown but commands are inert. */
  interactive?: boolean;
  className?: string;
  style?: CSSProperties;
  onContentChange?: (html: string) => void;
  onFocus?: () => void;
  onBlur?: (html: string) => void;
}

type Align = 'left' | 'center' | 'right' | 'justify';

interface ToolbarState {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  bulletList: boolean;
  numberList: boolean;
  link: boolean;
  align: Align;
  block: string;
}

const IDLE_STATE: ToolbarState = {
  bold: false,
  italic: false,
  underline: false,
  bulletList: false,
  numberList: false,
  link: false,
  align: 'left',
  block: 'p',
};

const BLOCKS = ['p', 'h1', 'h2', 'h3', 'blockquote'];

const ALIGN_COMMANDS: Record<Align, string> = {
  left: 'justifyLeft',
  center: 'justifyCenter',
  right: 'justifyRight',
  justify: 'justifyFull',
};

// document.execCommand is deprecated but remains the only cross-browser way to run
// formatting commands against a contenteditable surface.
function exec(command: string, value?: string) {
  try {
    document.execCommand(command, false, value);
  } catch {
    /* command unsupported in this browser */
  }
}

function queryState(command: string): boolean {
  try {
    return document.queryCommandState(command);
  } catch {
    return false;
  }
}

function currentBlock(): string {
  try {
    const raw = (document.queryCommandValue('formatBlock') || '').toLowerCase();
    if (raw === 'div' || !raw) return 'p';
    return BLOCKS.includes(raw) ? raw : 'p';
  } catch {
    return 'p';
  }
}

function currentAlign(): Align {
  if (queryState('justifyCenter')) return 'center';
  if (queryState('justifyRight')) return 'right';
  if (queryState('justifyFull')) return 'justify';
  return 'left';
}

function closestLink(root: HTMLElement): HTMLAnchorElement | null {
  const node = document.getSelection()?.anchorNode;
  if (!node || !root.contains(node)) return null;
  const el = node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement;
  return el?.closest('a') ?? null;
}

function sameState(a: ToolbarState, b: ToolbarState): boolean {
  return (
    a.bold === b.bold &&
    a.italic === b.italic &&
    a.underline === b.underline &&
    a.bulletList === b.bulletList &&
    a.numberList === b.numberList &&
    a.link === b.link &&
    a.align === b.align &&
    a.block === b.block
  );
}

const RichText_2View: FC<RichText_2ViewProps> = ({
  value,
  placeholder = 'Enter text...',
  readOnly = false,
  minHeight = 180,
  interactive = true,
  className,
  style,
  onContentChange,
  onFocus,
  onBlur,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const appliedRef = useRef('');
  const focusedRef = useRef(false);
  const savedRangeRef = useRef<Range | null>(null);

  const [empty, setEmpty] = useState(() => isHtmlEmpty(value));
  const [focused, setFocused] = useState(false);
  const [state, setState] = useState<ToolbarState>(IDLE_STATE);

  const editable = interactive && !readOnly;

  const refreshState = useCallback(() => {
    const el = editorRef.current;
    if (!el || !editable) return;
    const next: ToolbarState = {
      bold: queryState('bold'),
      italic: queryState('italic'),
      underline: queryState('underline'),
      bulletList: queryState('insertUnorderedList'),
      numberList: queryState('insertOrderedList'),
      link: !!closestLink(el),
      align: currentAlign(),
      block: currentBlock(),
    };
    setState((prev) => (sameState(prev, next) ? prev : next));
  }, [editable]);

  /** Push a datasource value into the DOM, but never while the user is typing in it. */
  const applyValue = useCallback((html: string) => {
    const el = editorRef.current;
    if (!el) return;
    if (focusedRef.current) return;
    if (html !== appliedRef.current || el.innerHTML !== html) {
      el.innerHTML = html;
      appliedRef.current = html;
    }
    setEmpty(isHtmlEmpty(html));
  }, []);

  useEffect(() => {
    applyValue(value || '');
  }, [value, applyValue]);

  useEffect(() => {
    if (!editable) return;
    // Prefer <p> and semantic tags over <div> and inline styles in the emitted HTML.
    exec('defaultParagraphSeparator', 'p');
    exec('styleWithCSS', 'false');
  }, [editable]);

  useEffect(() => {
    if (!editable) return;
    const onSelectionChange = () => {
      const el = editorRef.current;
      const selection = document.getSelection();
      if (!el || !selection?.rangeCount) return;
      const range = selection.getRangeAt(0);
      if (!el.contains(range.commonAncestorContainer)) return;
      savedRangeRef.current = range.cloneRange();
      refreshState();
    };
    document.addEventListener('selectionchange', onSelectionChange);
    return () => document.removeEventListener('selectionchange', onSelectionChange);
  }, [editable, refreshState]);

  const emitChange = useCallback(() => {
    const el = editorRef.current;
    if (!el || !editable) return;
    const html = el.innerHTML;
    appliedRef.current = html;
    setEmpty(isHtmlEmpty(html));
    onContentChange?.(html);
  }, [editable, onContentChange]);

  /** Restores the pre-click caret so toolbar controls act on the user's selection. */
  const focusEditor = useCallback(() => {
    const el = editorRef.current;
    if (!el) return;
    if (!el.contains(document.activeElement)) el.focus();
    const range = savedRangeRef.current;
    const selection = document.getSelection();
    if (range && selection && el.contains(range.commonAncestorContainer)) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, []);

  const runCommand = useCallback(
    (run: () => void) => {
      if (!editable) return;
      focusEditor();
      run();
      emitChange();
      refreshState();
    },
    [editable, emitChange, focusEditor, refreshState],
  );

  const handleInput = useCallback(() => {
    emitChange();
    refreshState();
  }, [emitChange, refreshState]);

  /**
   * Focus is tracked on the wrapper rather than the editable surface: reaching for a
   * toolbar control moves DOM focus, but it is still the same editing session.
   */
  const handleFocusIn = useCallback(() => {
    if (!editable || focusedRef.current) return;
    focusedRef.current = true;
    setFocused(true);
    refreshState();
    onFocus?.();
  }, [editable, onFocus, refreshState]);

  const handleFocusOut = useCallback(
    (event: FocusEvent<HTMLDivElement>) => {
      if (!editable || !focusedRef.current) return;
      const next = event.relatedTarget as Node | null;
      if (next && rootRef.current?.contains(next)) return;

      focusedRef.current = false;
      setFocused(false);
      setState(IDLE_STATE);

      const el = editorRef.current;
      if (!el) return;
      const html = sanitizeHtml(el.innerHTML);
      if (el.innerHTML !== html) el.innerHTML = html;
      appliedRef.current = html;
      setEmpty(isHtmlEmpty(html));
      onBlur?.(html);
    },
    [editable, onBlur],
  );

  const toggleLink = useCallback(() => {
    const el = editorRef.current;
    if (!el) return;
    runCommand(() => {
      const existing = closestLink(el);
      const url = window.prompt('Link URL', existing?.getAttribute('href') || 'https://');
      if (url === null) return;
      const href = sanitizeUrl(url);
      if (!href) {
        exec('unlink');
        return;
      }
      const selection = document.getSelection();
      if (selection?.isCollapsed && !existing) {
        exec('insertHTML', `<a href="${escapeHtml(href)}">${escapeHtml(href)}</a>`);
      } else {
        exec('createLink', href);
      }
    });
  }, [runCommand]);

  const keepSelection = (event: MouseEvent) => {
    event.preventDefault();
  };

  const toolbarDisabled = !editable;

  const renderToggle = (label: string, icon: ReactNode, on: boolean, onActivate: () => void) => (
    <button
      type="button"
      className={cn(styles.btn, on && styles.btnActive)}
      title={label}
      aria-label={label}
      aria-pressed={on}
      disabled={toolbarDisabled}
      onMouseDown={keepSelection}
      onClick={onActivate}
    >
      {icon}
    </button>
  );

  return (
    // biome-ignore lint/a11y/useSemanticElements: a fieldset would not describe an editor shell
    <div
      ref={rootRef}
      className={cn(
        styles.root,
        focused && styles.rootFocused,
        readOnly && styles.rootReadOnly,
        className,
      )}
      style={{ ...style, minHeight }}
      role="group"
      aria-label="Rich text editor"
      onFocus={handleFocusIn}
      onBlur={handleFocusOut}
    >
      {!readOnly && (
        <div className={styles.toolbar} role="toolbar" aria-label="Text formatting">
          <div className={styles.group}>
            {renderToggle('Bold', <MdFormatBold size={17} />, state.bold, () =>
              runCommand(() => exec('bold')),
            )}
            {renderToggle('Italic', <MdFormatItalic size={17} />, state.italic, () =>
              runCommand(() => exec('italic')),
            )}
            {renderToggle('Underline', <MdFormatUnderlined size={17} />, state.underline, () =>
              runCommand(() => exec('underline')),
            )}
          </div>

          <span className={styles.divider} />

          <select
            className={styles.select}
            aria-label="Paragraph style"
            disabled={toolbarDisabled}
            value={state.block}
            onChange={(event) => {
              const block = event.target.value;
              runCommand(() => exec('formatBlock', block));
            }}
          >
            <option value="p">Paragraph</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="blockquote">Quote</option>
          </select>

          <span className={styles.divider} />

          <div className={styles.group}>
            {renderToggle(
              'Bulleted list',
              <MdFormatListBulleted size={17} />,
              state.bulletList,
              () => runCommand(() => exec('insertUnorderedList')),
            )}
            {renderToggle(
              'Numbered list',
              <MdFormatListNumbered size={17} />,
              state.numberList,
              () => runCommand(() => exec('insertOrderedList')),
            )}
          </div>

          <span className={styles.divider} />

          <div className={styles.group}>
            {renderToggle('Insert link', <MdLink size={17} />, state.link, toggleLink)}
            {renderToggle('Remove link', <MdLinkOff size={17} />, false, () =>
              runCommand(() => exec('unlink')),
            )}
          </div>

          <span className={styles.divider} />

          <div className={styles.group}>
            {renderToggle(
              'Align left',
              <MdFormatAlignLeft size={17} />,
              state.align === 'left',
              () => runCommand(() => exec(ALIGN_COMMANDS.left)),
            )}
            {renderToggle(
              'Align center',
              <MdFormatAlignCenter size={17} />,
              state.align === 'center',
              () => runCommand(() => exec(ALIGN_COMMANDS.center)),
            )}
            {renderToggle(
              'Align right',
              <MdFormatAlignRight size={17} />,
              state.align === 'right',
              () => runCommand(() => exec(ALIGN_COMMANDS.right)),
            )}
            {renderToggle(
              'Justify',
              <MdFormatAlignJustify size={17} />,
              state.align === 'justify',
              () => runCommand(() => exec(ALIGN_COMMANDS.justify)),
            )}
          </div>
        </div>
      )}

      <div className={styles.surface}>
        {/* biome-ignore lint/a11y/useSemanticElements: no native element edits rich HTML */}
        <div
          ref={editorRef}
          className={cn(
            styles.editor,
            empty && styles.editorEmpty,
            readOnly && styles.editorReadOnly,
          )}
          contentEditable={editable}
          suppressContentEditableWarning
          role="textbox"
          tabIndex={editable ? 0 : -1}
          aria-multiline="true"
          aria-readonly={readOnly || undefined}
          aria-label={placeholder}
          data-placeholder={placeholder}
          onInput={handleInput}
          onKeyUp={refreshState}
          onMouseUp={refreshState}
        />
      </div>
    </div>
  );
};

export default RichText_2View;
