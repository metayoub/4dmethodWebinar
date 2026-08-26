import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { type FC, useCallback, useEffect, useRef, useState } from 'react';

import config, { type IRichTextEditorProps } from './RichTextEditor.config';
import { cleanHtml, normalizeHtml } from './RichTextEditor.utils';
import RichTextEditorView from './RichTextEditorView';

const CHANGE_DEBOUNCE_MS = 300;

const RichTextEditorRender: FC<IRichTextEditorProps> = (props) => {
  const merged = { ...config.defaultProps, ...props };
  const { connect, emit } = useRenderer({ autoBindEvents: false });
  const {
    sources: { datasource: ds },
  } = useSources();

  const [value, setValue] = useState('');
  const valueRef = useRef('');
  const writingRef = useRef(false);
  const persistingRef = useRef(false);
  const pendingRef = useRef<{ html: string; emitChange: boolean } | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applyValue = useCallback((next: string) => {
    const html = normalizeHtml(next);
    if (html === valueRef.current) return;
    valueRef.current = html;
    setValue(html);
  }, []);

  useEffect(() => {
    if (!ds) {
      applyValue('');
      return;
    }

    let cancelled = false;

    const listener = async () => {
      if (writingRef.current) return;
      const raw = await ds.getValue<string>();
      if (cancelled) return;
      applyValue(typeof raw === 'string' ? raw : '');
    };

    void listener();
    ds.addListener('changed', listener);
    return () => {
      cancelled = true;
      ds.removeListener('changed', listener);
    };
  }, [ds, applyValue]);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  /** Write datasource first, then emit — so Qodly/4D handlers see the new value. */
  const persist = useCallback(
    async (html: string, emitChange: boolean) => {
      const prevPending = pendingRef.current;
      pendingRef.current = {
        html,
        emitChange: Boolean(prevPending?.emitChange || emitChange),
      };

      if (persistingRef.current) return;
      persistingRef.current = true;

      try {
        while (pendingRef.current) {
          const { html: nextHtml, emitChange: shouldEmit } = pendingRef.current;
          pendingRef.current = null;

          const cleaned = cleanHtml(nextHtml);
          if (cleaned === valueRef.current) continue;

          valueRef.current = cleaned;
          setValue(cleaned);

          if (ds) {
            writingRef.current = true;
            try {
              await ds.setValue(null, cleaned);
            } finally {
              writingRef.current = false;
            }
          }

          if (shouldEmit) {
            emit('onChange', { value: cleaned });
          }
        }
      } finally {
        persistingRef.current = false;
        if (pendingRef.current) {
          const leftover = pendingRef.current;
          pendingRef.current = null;
          void persist(leftover.html, leftover.emitChange);
        }
      }
    },
    [ds, emit],
  );

  const handleContentChange = useCallback(
    (html: string) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        void persist(html, true);
      }, CHANGE_DEBOUNCE_MS);
    },
    [persist],
  );

  const handleFocus = useCallback(() => {
    emit('onFocus', {});
  }, [emit]);

  const handleBlur = useCallback(
    (html: string) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
      void persist(html, true).then(() => {
        emit('onBlur', { value: cleanHtml(html) });
      });
    },
    [emit, persist],
  );

  return (
    <div ref={connect} className={cn(props.className, props.classNames)} style={props.style}>
      <RichTextEditorView
        value={value}
        placeholder={merged.placeholder ?? 'Enter text...'}
        readOnly={merged.readOnly ?? false}
        minHeight={merged.minHeight ?? 160}
        interactive
        onContentChange={handleContentChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default RichTextEditorRender;
