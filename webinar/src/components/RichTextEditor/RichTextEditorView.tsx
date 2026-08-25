import cn from 'classnames';
import {
  type CSSProperties,
  type FC,
  type MouseEvent,
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

import styles from './RichTextEditor.module.css';
import { cleanHtml, isHtmlEmpty } from './RichTextEditor.utils';

export interface RichTextEditorViewProps {
  value: string;
  placeholder?: string;
  readOnly?: boolean;
  minHeight?: number;
  interactive?: boolean;
  className?: string;
  style?: CSSProperties;
  onContentChange?: (html: string) => void;
  onFocus?: () => void;
  onBlur?: (html: string) => void;
}

type Align = 'left' | 'center' | 'right' | 'justify';

function runCommand(command: string, value?: string) {
  // document.execCommand remains the portable API for contenteditable toolbars
  document.execCommand(command, false, value);
}

const RichTextEditorView: FC<RichTextEditorViewProps> = ({
  value,
  placeholder = 'Enter text...',
  readOnly = false,
  minHeight = 160,
  interactive = true,
  className,
  style,
  onContentChange,
  onFocus,
  onBlur,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const lastAppliedRef = useRef<string>('');
  const focusedRef = useRef(false);
  const [empty, setEmpty] = useState(() => isHtmlEmpty(value));
  const [active, setActive] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const syncActiveFormats = useCallback(() => {
    if (!interactive || readOnly) return;
    setActive({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
    });
  }, [interactive, readOnly]);

  const applyExternalValue = useCallback((html: string, force = false) => {
    const el = editorRef.current;
    if (!el) return;
    if (!force && focusedRef.current) return;
    const next = html || '';
    if (next === lastAppliedRef.current || el.innerHTML === next) {
      lastAppliedRef.current = next;
      setEmpty(isHtmlEmpty(next));
      return;
    }
    el.innerHTML = next;
    lastAppliedRef.current = next;
    setEmpty(isHtmlEmpty(next));
  }, []);

  useEffect(() => {
    applyExternalValue(value || '');
  }, [value, applyExternalValue]);

  const emitChange = useCallback(() => {
    const el = editorRef.current;
    if (!el || !interactive || readOnly) return;
    const html = cleanHtml(el.innerHTML);
    lastAppliedRef.current = html;
    setEmpty(isHtmlEmpty(html));
    if (!html && el.innerHTML !== '') {
      el.innerHTML = '';
    }
    onContentChange?.(html);
  }, [interactive, onContentChange, readOnly]);

  const handleInput = useCallback(() => {
    const el = editorRef.current;
    if (!el) return;
    setEmpty(isHtmlEmpty(el.innerHTML));
    emitChange();
    syncActiveFormats();
  }, [emitChange, syncActiveFormats]);

  const preserveFocus = (event: MouseEvent) => {
    event.preventDefault();
  };

  const withEditorFocus = (fn: () => void) => {
    if (!interactive || readOnly) return;
    editorRef.current?.focus();
    fn();
    emitChange();
    syncActiveFormats();
  };

  const setHeading = (tag: string) => {
    withEditorFocus(() => {
      if (tag === 'p') {
        runCommand('formatBlock', 'p');
      } else {
        runCommand('formatBlock', tag);
      }
    });
  };

  const setAlign = (align: Align) => {
    const map: Record<Align, string> = {
      left: 'justifyLeft',
      center: 'justifyCenter',
      right: 'justifyRight',
      justify: 'justifyFull',
    };
    withEditorFocus(() => runCommand(map[align]));
  };

  const insertLink = () => {
    withEditorFocus(() => {
      const existing = document.queryCommandValue('createLink');
      const url = window.prompt('Link URL', existing || 'https://');
      if (url == null) return;
      const trimmed = url.trim();
      if (!trimmed) {
        runCommand('unlink');
        return;
      }
      runCommand('createLink', trimmed);
    });
  };

  const editable = interactive && !readOnly;

  return (
    <div
      className={cn(styles.root, readOnly && styles.rootReadOnly, className)}
      style={{ ...style, minHeight }}
    >
      {editable && (
        <div className={styles.toolbar} role="toolbar" aria-label="Formatting">
          <div className={styles.group}>
            <button
              type="button"
              className={cn(styles.btn, active.bold && styles.btnActive)}
              title="Bold"
              aria-label="Bold"
              onMouseDown={preserveFocus}
              onClick={() => withEditorFocus(() => runCommand('bold'))}
            >
              <MdFormatBold size={16} />
            </button>
            <button
              type="button"
              className={cn(styles.btn, active.italic && styles.btnActive)}
              title="Italic"
              aria-label="Italic"
              onMouseDown={preserveFocus}
              onClick={() => withEditorFocus(() => runCommand('italic'))}
            >
              <MdFormatItalic size={16} />
            </button>
            <button
              type="button"
              className={cn(styles.btn, active.underline && styles.btnActive)}
              title="Underline"
              aria-label="Underline"
              onMouseDown={preserveFocus}
              onClick={() => withEditorFocus(() => runCommand('underline'))}
            >
              <MdFormatUnderlined size={16} />
            </button>
          </div>

          <span className={styles.divider} />

          <div className={styles.group}>
            <select
              className={styles.select}
              aria-label="Heading"
              defaultValue=""
              onMouseDown={preserveFocus}
              onChange={(e) => {
                const v = e.target.value;
                if (v) setHeading(v);
                e.target.value = '';
              }}
            >
              <option value="" disabled>
                Heading
              </option>
              <option value="p">Paragraph</option>
              <option value="h1">Heading 1</option>
              <option value="h2">Heading 2</option>
              <option value="h3">Heading 3</option>
            </select>
          </div>

          <span className={styles.divider} />

          <div className={styles.group}>
            <button
              type="button"
              className={styles.btn}
              title="Bulleted list"
              aria-label="Bulleted list"
              onMouseDown={preserveFocus}
              onClick={() => withEditorFocus(() => runCommand('insertUnorderedList'))}
            >
              <MdFormatListBulleted size={16} />
            </button>
            <button
              type="button"
              className={styles.btn}
              title="Numbered list"
              aria-label="Numbered list"
              onMouseDown={preserveFocus}
              onClick={() => withEditorFocus(() => runCommand('insertOrderedList'))}
            >
              <MdFormatListNumbered size={16} />
            </button>
          </div>

          <span className={styles.divider} />

          <div className={styles.group}>
            <button
              type="button"
              className={styles.btn}
              title="Insert link"
              aria-label="Insert link"
              onMouseDown={preserveFocus}
              onClick={insertLink}
            >
              <MdLink size={16} />
            </button>
            <button
              type="button"
              className={styles.btn}
              title="Remove link"
              aria-label="Remove link"
              onMouseDown={preserveFocus}
              onClick={() => withEditorFocus(() => runCommand('unlink'))}
            >
              <MdLinkOff size={16} />
            </button>
          </div>

          <span className={styles.divider} />

          <div className={styles.group}>
            <button
              type="button"
              className={styles.btn}
              title="Align left"
              aria-label="Align left"
              onMouseDown={preserveFocus}
              onClick={() => setAlign('left')}
            >
              <MdFormatAlignLeft size={16} />
            </button>
            <button
              type="button"
              className={styles.btn}
              title="Align center"
              aria-label="Align center"
              onMouseDown={preserveFocus}
              onClick={() => setAlign('center')}
            >
              <MdFormatAlignCenter size={16} />
            </button>
            <button
              type="button"
              className={styles.btn}
              title="Align right"
              aria-label="Align right"
              onMouseDown={preserveFocus}
              onClick={() => setAlign('right')}
            >
              <MdFormatAlignRight size={16} />
            </button>
            <button
              type="button"
              className={styles.btn}
              title="Justify"
              aria-label="Justify"
              onMouseDown={preserveFocus}
              onClick={() => setAlign('justify')}
            >
              <MdFormatAlignJustify size={16} />
            </button>
          </div>
        </div>
      )}

      <div className={styles.surface} style={{ minHeight: editable ? minHeight - 42 : minHeight }}>
        {/* contenteditable is the editing surface; no native textbox element supports rich HTML */}
        {/* biome-ignore lint/a11y/noStaticElementInteractions: contenteditable rich-text surface */}
        {/* biome-ignore lint/a11y/useAriaPropsSupportedByRole: contenteditable rich-text surface */}
        <div
          ref={editorRef}
          className={cn(
            styles.editor,
            empty && styles.editorEmpty,
            readOnly && styles.editorReadOnly,
          )}
          style={{ minHeight: editable ? Math.max(80, minHeight - 42) : minHeight }}
          contentEditable={editable}
          suppressContentEditableWarning
          aria-readonly={readOnly || undefined}
          data-placeholder={placeholder}
          onInput={handleInput}
          onFocus={() => {
            focusedRef.current = true;
            syncActiveFormats();
            onFocus?.();
          }}
          onBlur={() => {
            focusedRef.current = false;
            const html = cleanHtml(editorRef.current?.innerHTML || '');
            lastAppliedRef.current = html;
            // Align DOM with cleaned HTML after edit session
            if (editorRef.current && editorRef.current.innerHTML !== html) {
              editorRef.current.innerHTML = html;
            }
            onBlur?.(html);
          }}
          onKeyUp={syncActiveFormats}
          onMouseUp={syncActiveFormats}
        />
      </div>
    </div>
  );
};

export default RichTextEditorView;
