import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { type FC, useCallback, useEffect, useRef, useState } from 'react';

import config, { type IRichText_2Props } from './RichText_2.config';
import { sanitizeHtml } from './RichText_2.utils';
import RichText_2View from './RichText_2View';

const CHANGE_DEBOUNCE_MS = 300;

const RichText_2Render: FC<IRichText_2Props> = (props) => {
  const { style, className, classNames = [] } = props;
  const merged = { ...config.defaultProps, ...props };

  const { connect, emit } = useRenderer({ autoBindEvents: false });
  const {
    sources: { datasource: ds },
  } = useSources();

  const [value, setValue] = useState('');
  /** Last value agreed on by the component and the datasource. */
  const valueRef = useRef('');
  /** Set while we write to the datasource so our own 'changed' event is ignored. */
  const writingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => clearTimer, [clearTimer]);

  useEffect(() => {
    if (!ds) return;

    let cancelled = false;

    const listener = async () => {
      if (writingRef.current) return;
      const raw = await ds.getValue<string>();
      if (cancelled) return;
      const html = sanitizeHtml(typeof raw === 'string' ? raw : '');
      if (html === valueRef.current) return;
      valueRef.current = html;
      setValue(html);
    };

    void listener();
    ds.addListener('changed', listener);

    return () => {
      cancelled = true;
      ds.removeListener('changed', listener);
    };
  }, [ds]);

  const persist = useCallback(
    async (html: string) => {
      const cleaned = sanitizeHtml(html);
      if (cleaned === valueRef.current) return false;

      valueRef.current = cleaned;
      setValue(cleaned);

      if (ds) {
        writingRef.current = true;
        try {
          await ds.setValue(null, cleaned);
        } finally {
          // Release only after the datasource has dispatched its own 'changed' event.
          queueMicrotask(() => {
            writingRef.current = false;
          });
        }
      }

      return true;
    },
    [ds],
  );

  const handleContentChange = useCallback(
    (html: string) => {
      clearTimer();
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        void persist(html).then((changed) => {
          if (changed) emit('onChange', { value: valueRef.current });
        });
      }, CHANGE_DEBOUNCE_MS);
    },
    [clearTimer, emit, persist],
  );

  const handleFocus = useCallback(() => {
    emit('onFocus', {});
  }, [emit]);

  const handleBlur = useCallback(
    (html: string) => {
      clearTimer();
      void persist(html).then((changed) => {
        if (changed) emit('onChange', { value: valueRef.current });
        emit('onBlur', { value: valueRef.current });
      });
    },
    [clearTimer, emit, persist],
  );

  return (
    <div ref={connect} className={cn(className, classNames)} style={style}>
      <RichText_2View
        value={value}
        placeholder={merged.placeholder ?? 'Enter text...'}
        readOnly={merged.readOnly ?? false}
        minHeight={merged.minHeight ?? 180}
        onContentChange={handleContentChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default RichText_2Render;
