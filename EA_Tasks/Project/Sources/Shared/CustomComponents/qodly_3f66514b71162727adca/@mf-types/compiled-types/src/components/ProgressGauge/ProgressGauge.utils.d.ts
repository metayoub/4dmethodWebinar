export declare const MIN_VALUE = 0;
export declare const MAX_VALUE = 100;
export declare const COLOR_RED = "#e53935";
export declare const COLOR_ORANGE = "#fb8c00";
export declare const COLOR_GREEN = "#43a047";
export declare const TRACK_COLOR = "#e8e6ed";
export declare function clampValue(raw: unknown): number;
export declare function colorForValue(value: number): string;
/** Angle in degrees from pointer relative to circle center (0 = east, CCW). */
export declare function angleFromPointer(clientX: number, clientY: number, rect: DOMRect): number;
/**
 * Map pointer angle to 0–100, starting at top and sweeping clockwise.
 * atan2: -90° = top, 0° = right, 90° = bottom, ±180° = left.
 */
export declare function valueFromAngle(angleDeg: number): number;
