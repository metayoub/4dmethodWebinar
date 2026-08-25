import cn from 'classnames';
import {
  type CSSProperties,
  type FC,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './ProgressGauge.module.css';
import {
  angleFromPointer,
  clampValue,
  colorForValue,
  TRACK_COLOR,
  valueFromAngle,
} from './ProgressGauge.utils';

const VIEW_SIZE = 200;
const CENTER = VIEW_SIZE / 2;
const KEY_STEP = 1;
const KEY_STEP_LARGE = 10;

export interface ProgressGaugeViewProps {
  value: number;
  strokeWidth?: number;
  readOnly?: boolean;
  interactive?: boolean;
  className?: string;
  onValueChange?: (value: number) => void;
}

const ProgressGaugeView: FC<ProgressGaugeViewProps> = ({
  value,
  strokeWidth = 14,
  readOnly = false,
  interactive = true,
  className,
  onValueChange,
}) => {
  const clamped = clampValue(value);
  const color = colorForValue(clamped);
  const radius = (VIEW_SIZE - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);

  const svgRef = useRef<SVGSVGElement>(null);
  const draggingRef = useRef(false);
  const [dragging, setDragging] = useState(false);
  const canDrag = interactive && !readOnly;

  const updateFromPointer = useCallback(
    (clientX: number, clientY: number) => {
      const el = svgRef.current;
      if (!el) return;
      const next = valueFromAngle(angleFromPointer(clientX, clientY, el.getBoundingClientRect()));
      onValueChange?.(next);
    },
    [onValueChange],
  );

  const onPointerDown = useCallback(
    (e: ReactPointerEvent<SVGSVGElement>) => {
      if (!canDrag) return;
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      draggingRef.current = true;
      setDragging(true);
      updateFromPointer(e.clientX, e.clientY);
    },
    [canDrag, updateFromPointer],
  );

  const onPointerMove = useCallback(
    (e: ReactPointerEvent<SVGSVGElement>) => {
      if (!draggingRef.current) return;
      updateFromPointer(e.clientX, e.clientY);
    },
    [updateFromPointer],
  );

  const endDrag = useCallback((e: ReactPointerEvent<SVGSVGElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }, []);

  const onKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLDivElement>) => {
      if (!canDrag) return;
      const step = e.shiftKey ? KEY_STEP_LARGE : KEY_STEP;
      let next: number | null = null;
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowUp':
          next = clampValue(clamped + step);
          break;
        case 'ArrowLeft':
        case 'ArrowDown':
          next = clampValue(clamped - step);
          break;
        case 'Home':
          next = 0;
          break;
        case 'End':
          next = 100;
          break;
        default:
          break;
      }
      if (next === null) return;
      e.preventDefault();
      onValueChange?.(next);
    },
    [canDrag, clamped, onValueChange],
  );

  useEffect(() => {
    return () => {
      draggingRef.current = false;
    };
  }, []);

  return (
    <div
      className={cn(styles.root, canDrag ? styles.interactive : styles.readOnly, className)}
      style={
        {
          '--pg-color': color,
          '--pg-track': TRACK_COLOR,
        } as CSSProperties
      }
      role="slider"
      tabIndex={canDrag ? 0 : -1}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      aria-readonly={readOnly || undefined}
      aria-label="Progress"
      onKeyDown={onKeyDown}
    >
      <svg
        ref={svgRef}
        className={styles.svg}
        viewBox={`0 0 ${VIEW_SIZE} ${VIEW_SIZE}`}
        aria-hidden="true"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <circle
          className={styles.track}
          cx={CENTER}
          cy={CENTER}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className={cn(styles.progress, dragging && styles.progressDragging)}
          cx={CENTER}
          cy={CENTER}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text className={styles.label} x={CENTER} y={CENTER} fontSize={VIEW_SIZE * 0.22}>
          {clamped}%
        </text>
      </svg>
    </div>
  );
};

export default ProgressGaugeView;
