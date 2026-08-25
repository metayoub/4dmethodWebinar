import type { CategoryColors, ColumnDef, Task } from './KanbanBoard.types';
export type KanbanBoardViewProps = {
    tasks: Task[];
    columns?: ColumnDef[] | string;
    accentColor: string;
    surfaceColor: string;
    textColor: string;
    mutedColor: string;
    cornerRadius: number;
    locale?: string;
    categoryColors?: CategoryColors;
    showCategoryChips?: boolean;
    showDueDates?: boolean;
    interactive?: boolean;
    onCardMove?: (taskID: string, newStatus: string) => void;
};
declare const KanbanBoardView: import("react").MemoExoticComponent<({ tasks, columns, accentColor, surfaceColor, textColor, mutedColor, cornerRadius, locale, categoryColors, showCategoryChips, showDueDates, interactive, onCardMove, }: KanbanBoardViewProps) => import("react").JSX.Element>;
export default KanbanBoardView;
