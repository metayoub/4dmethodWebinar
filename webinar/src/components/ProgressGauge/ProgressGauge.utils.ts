export const MIN_VALUE = 0;
export const MAX_VALUE = 100;

export const COLOR_RED = '#e53935';
export const COLOR_ORANGE = '#fb8c00';
export const COLOR_GREEN = '#43a047';
export const TRACK_COLOR = '#e8e6ed';

export function clampValue(raw: unknown): number {
  const n = typeof raw === 'number' ? raw : Number(raw);
  if (!Number.isFinite(n)) return MIN_VALUE;
  return Math.min(MAX_VALUE, Math.max(MIN_VALUE, Math.round(n)));
}

export function colorForValue(value: number): string {
  if (value < 30) return COLOR_RED;
  if (value < 70) return COLOR_ORANGE;
  return COLOR_GREEN;
}

/** Angle in degrees from pointer relative to circle center (0 = east, CCW). */
export function angleFromPointer(clientX: number, clientY: number, rect: DOMRect): number {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  return (Math.atan2(clientY - cy, clientX - cx) * 180) / Math.PI;
}

/**
 * Map pointer angle to 0–100, starting at top and sweeping clockwise.
 * atan2: -90° = top, 0° = right, 90° = bottom, ±180° = left.
 */
export function valueFromAngle(angleDeg: number): number {
  let fromTop = angleDeg + 90;
  if (fromTop < 0) fromTop += 360;
  return clampValue((fromTop / 360) * 100);
}
