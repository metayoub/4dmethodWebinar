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

  const persist = useCallback(
    async (html: string, emitChange: boolean) => {
      const cleaned = cleanHtml(html);
      const changed = cleaned !== valueRef.current;
      valueRef.current = cleaned;
      if (changed) setValue(cleaned);

      if (ds && changed) {
        writingRef.current = true;
        try {
          await ds.setValue(null, cleaned);
        } finally {
          queueMicrotask(() => {
            writingRef.current = false;
          });
        }
      }

      if (emitChange && changed) {
        emit('onChange', { value: cleaned });
      }
    },
    [ds, emit],
  );

  const handleContentChange = useCallback(
    (html: string) => {
      valueRef.current = html;
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
