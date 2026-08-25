import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { type FC, useCallback, useEffect, useRef, useState } from 'react';

import config, { type IProgressGaugeProps } from './ProgressGauge.config';
import { clampValue } from './ProgressGauge.utils';
import ProgressGaugeView from './ProgressGaugeView';

const ProgressGaugeRender: FC<IProgressGaugeProps> = (props) => {
  const merged = { ...config.defaultProps, ...props };
  const { connect, emit } = useRenderer({ autoBindEvents: false });
  const {
    sources: { datasource: ds },
  } = useSources();

  const [value, setValue] = useState(0);
  const valueRef = useRef(0);
  const writingRef = useRef(false);
  const persistingRef = useRef(false);
  const needsPersistRef = useRef(false);

  const applyValue = useCallback((next: number) => {
    const clamped = clampValue(next);
    if (clamped === valueRef.current) return;
    valueRef.current = clamped;
    setValue(clamped);
  }, []);

  useEffect(() => {
    if (!ds) {
      applyValue(0);
      return;
    }

    let cancelled = false;

    const listener = async () => {
      if (writingRef.current) return;
      const raw = await ds.getValue<number>();
      if (cancelled) return;
      applyValue(raw);
    };

    void listener();
    ds.addListener('changed', listener);
    return () => {
      cancelled = true;
      ds.removeListener('changed', listener);
    };
  }, [ds, applyValue]);

  /** Write datasource first, then emit — so Qodly/4D handlers see the new value. */
  const persistLatest = useCallback(async () => {
    if (persistingRef.current) {
      needsPersistRef.current = true;
      return;
    }

    persistingRef.current = true;
    try {
      do {
        needsPersistRef.current = false;
        const v = valueRef.current;

        if (ds) {
          writingRef.current = true;
          try {
            await ds.setValue(null, v);
          } finally {
            writingRef.current = false;
          }
        }

        emit('onValueChange', { value: v });
      } while (needsPersistRef.current);
    } finally {
      persistingRef.current = false;
    }
  }, [ds, emit]);

  const handleValueChange = useCallback(
    (next: number) => {
      const clamped = clampValue(next);
      if (clamped === valueRef.current) return;

      valueRef.current = clamped;
      setValue(clamped);
      void persistLatest();
    },
    [persistLatest],
  );

  return (
    <div ref={connect} className={cn(props.className, props.classNames)} style={props.style}>
      <ProgressGaugeView
        value={value}
        strokeWidth={merged.strokeWidth ?? 14}
        readOnly={merged.readOnly ?? false}
        interactive
        onValueChange={handleValueChange}
      />
    </div>
  );
};

export default ProgressGaugeRender;
