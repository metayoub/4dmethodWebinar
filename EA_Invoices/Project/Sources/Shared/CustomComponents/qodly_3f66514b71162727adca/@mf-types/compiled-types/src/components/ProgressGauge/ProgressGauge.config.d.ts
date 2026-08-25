import { type T4DComponentConfig } from '@ws-ui/webform-editor';
declare const _default: T4DComponentConfig<IProgressGaugeProps>;
export default _default;
export interface IProgressGaugeProps extends webforms.ComponentProps {
    /** Bound via datasource (e.g. Task.Percent); kept for typing clarity. */
    value?: number;
    readOnly?: boolean;
    strokeWidth?: number;
    onValueChange?: (payload: {
        value: number;
    }) => void;
}
