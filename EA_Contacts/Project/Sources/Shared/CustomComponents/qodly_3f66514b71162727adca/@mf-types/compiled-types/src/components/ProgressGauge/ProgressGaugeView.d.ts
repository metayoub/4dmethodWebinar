import { type FC } from 'react';
export interface ProgressGaugeViewProps {
    value: number;
    strokeWidth?: number;
    readOnly?: boolean;
    interactive?: boolean;
    className?: string;
    onValueChange?: (value: number) => void;
}
declare const ProgressGaugeView: FC<ProgressGaugeViewProps>;
export default ProgressGaugeView;
