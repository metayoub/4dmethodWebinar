import { type T4DComponentConfig } from '@ws-ui/webform-editor';
import type { CategoryColors, ColumnDef, OnCardMovePayload } from './KanbanBoard.types';
declare const _default: T4DComponentConfig<IKanbanBoardProps>;
export default _default;
export interface IKanbanBoardProps extends webforms.ComponentProps {
    idAttr?: string;
    titleAttr?: string;
    statusAttr?: string;
    categoryAttr?: string;
    categoryColorAttr?: string;
    dueDateAttr?: string;
    statusColumns?: ColumnDef[];
    locale?: string;
    accentColor?: string;
    surfaceColor?: string;
    textColor?: string;
    mutedColor?: string;
    cornerRadius?: number;
    categoryColors?: CategoryColors;
    showCategoryChips?: boolean;
    showDueDates?: boolean;
    onCardMove?: (payload: OnCardMovePayload) => void;
}
