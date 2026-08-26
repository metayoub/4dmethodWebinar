import { type CSSProperties, type FC } from 'react';
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
declare const RichText_2View: FC<RichText_2ViewProps>;
export default RichText_2View;
