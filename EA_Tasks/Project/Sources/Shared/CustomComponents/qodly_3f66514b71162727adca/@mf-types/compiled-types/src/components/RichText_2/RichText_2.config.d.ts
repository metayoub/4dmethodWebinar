import { type T4DComponentConfig } from '@ws-ui/webform-editor';
declare const _default: T4DComponentConfig<IRichText_2Props>;
export default _default;
export interface IRichText_2Props extends webforms.ComponentProps {
    /** Text shown while the bound datasource holds an empty string. */
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
