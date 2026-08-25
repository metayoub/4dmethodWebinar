import type { CategoryColors, ColumnDef, Task } from './KanbanBoard.types';
export declare const TASK_ATTRS: readonly ["ID", "id", "Title", "title", "Description", "description", "Status", "status", "Category", "category", "CategoryColor", "categoryColor", "Color", "color", "DueDate", "dueDate", "Due_Date"];
export declare const DEFAULT_COLUMNS: ColumnDef[];
export declare const FALLBACK_CATEGORY_COLOR = "#8B8698";
export declare const MOCK_TASKS: Task[];
export declare const toOptionalString: (value: unknown) => string | undefined;
export declare const extractRecords: (raw: unknown) => Record<string, unknown>[];
export type TaskAttrMap = {
    idAttr?: string;
    titleAttr?: string;
    statusAttr?: string;
    categoryAttr?: string;
    categoryColorAttr?: string;
    dueDateAttr?: string;
};
export declare function loadTasks(ds: datasources.DataSource, attrs?: TaskAttrMap): Promise<Task[]>;
export declare const parseTasks: (raw: unknown, attrs?: TaskAttrMap) => Task[];
export declare const normalizeColumns: (columns?: ColumnDef[] | string) => ColumnDef[];
export declare const toCategoryColorMap: (categoryColors?: CategoryColors) => Record<string, string>;
export declare const resolveCategoryColor: (task: Task, colorMap: Record<string, string>) => string;
export declare const tasksFingerprint: (tasks: Task[]) => string;
export declare const groupTasksByStatus: (tasks: Task[], columns: ColumnDef[]) => {
    columns: ColumnDef[];
    grouped: Record<string, Task[]>;
};
export declare const formatDueDate: (value: string, locale?: string) => string;
export declare const isDueSoonOrOverdue: (value: string) => "overdue" | "soon" | "ok";
export declare const moveTaskStatus: (tasks: Task[], taskID: string, newStatus: string) => Task[];
export declare const applyPendingMoves: (tasks: Task[], pending: Map<string, string>) => Task[];
