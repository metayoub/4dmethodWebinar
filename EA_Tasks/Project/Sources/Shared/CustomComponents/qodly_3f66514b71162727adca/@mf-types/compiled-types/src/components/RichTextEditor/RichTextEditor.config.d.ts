import { type T4DComponentConfig } from '@ws-ui/webform-editor';
declare const _default: T4DComponentConfig<IRichTextEditorProps>;
export default _default;
export interface IRichTextEditorProps extends webforms.ComponentProps {
    placeholder?: string;
    readOnly?: boolean;
    minHeight?: number;
    onChange?: (payload: {
        value: string;
    }) => void;
    onFocus?: (payload: Record<string, never>) => void;
    onBlur?: (payload: {
        value: string;
    }) => void;
}
