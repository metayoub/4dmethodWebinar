import { type CSSProperties, type FC } from 'react';
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
declare const RichTextEditorView: FC<RichTextEditorViewProps>;
export default RichTextEditorView;
