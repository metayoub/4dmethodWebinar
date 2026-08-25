import { type T4DComponentConfig } from '@ws-ui/webform-editor';
import type { ApplyTotalsPayload, CategoryColors, Density, RemoveLinePayload, ReorderLinesPayload, SaveLinePayload, SetPaidPayload } from './InvoiceLineGrid.types';
declare const _default: T4DComponentConfig<IInvoiceLineGridProps>;
export default _default;
export interface IInvoiceLineGridProps extends webforms.ComponentProps {
    linesRelation?: string;
    currency?: string;
    locale?: string;
    accentColor?: string;
    surfaceColor?: string;
    textColor?: string;
    mutedColor?: string;
    cornerRadius?: number;
    density?: Density;
    categoryColors?: CategoryColors;
    showSummary?: boolean;
    showChart?: boolean;
    showQuantityRing?: boolean;
    showCategoryChips?: boolean;
    saveLine?: (payload: SaveLinePayload) => void;
    addLine?: (payload: Record<string, never>) => void;
    removeLine?: (payload: RemoveLinePayload) => void;
    reorderLines?: (payload: ReorderLinesPayload) => void;
    applyTotals?: (payload: ApplyTotalsPayload) => void;
    setPaid?: (payload: SetPaidPayload) => void;
}
