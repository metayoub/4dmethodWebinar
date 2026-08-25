import type { CategoryColors, ColumnDef, Task } from './KanbanBoard.types';

export const TASK_ATTRS = [
  'ID',
  'id',
  'Title',
  'title',
  'Description',
  'description',
  'Status',
  'status',
  'Category',
  'category',
  'CategoryColor',
  'categoryColor',
  'Color',
  'color',
  'DueDate',
  'dueDate',
  'Due_Date',
] as const;

export const DEFAULT_COLUMNS: ColumnDef[] = [
  { status: 'Not Started' },
  { status: 'In Progress' },
  { status: 'Completed' },
];

export const FALLBACK_CATEGORY_COLOR = '#8B8698';

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'Setup wireless access point',
    status: 'In Progress',
    category: 'Work',
    categoryColor: 'red',
    dueDate: '2019-06-13T23:00:00.000Z',
  },
  {
    id: '2',
    title: 'Early Christmas shopping',
    status: 'Not Started',
    category: 'Family',
    categoryColor: 'blue',
    dueDate: '2019-12-24T23:00:00.000Z',
  },
  {
    id: '3',
    title: 'Team building exercise',
    status: 'Completed',
    category: 'Work',
    categoryColor: 'red',
    dueDate: '2019-06-05T00:00:00.000Z',
  },
  {
    id: '4',
    title: 'Summer vacation planning',
    status: 'In Progress',
    category: 'Travel',
    categoryColor: 'green',
    dueDate: '2019-08-14T23:00:00.000Z',
  },
  {
    id: '5',
    title: 'Change brakes in car',
    status: 'Not Started',
    category: 'Personal',
    categoryColor: 'aqua',
    dueDate: '2019-09-15T23:00:00.000Z',
  },
];

const pick = (record: Record<string, unknown>, keys: string[]): unknown => {
  for (const key of keys) {
    if (record[key] != null && record[key] !== '') return record[key];
  }
  return undefined;
};

export const toOptionalString = (value: unknown): string | undefined => {
  if (value == null) return undefined;
  const s = String(value).trim();
  return s === '' ? undefined : s;
};

export const extractRecords = (raw: unknown): Record<string, unknown>[] => {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw.filter((item) => item && typeof item === 'object') as Record<string, unknown>[];
  }
  if (typeof raw !== 'object') return [];
  const obj = raw as Record<string, unknown>;
  if (Array.isArray(obj.__ENTITIES)) return obj.__ENTITIES as Record<string, unknown>[];
  if (Array.isArray(obj.entities)) return obj.entities as Record<string, unknown>[];
  return [];
};

const parseWithPlainFallback = (raw: unknown): Record<string, unknown>[] => {
  const direct = extractRecords(raw);
  if (direct.length > 0) return direct;
  if (!raw || typeof raw !== 'object') return [];
  try {
    return extractRecords(JSON.parse(JSON.stringify(raw)));
  } catch {
    return [];
  }
};

export type TaskAttrMap = {
  idAttr?: string;
  titleAttr?: string;
  statusAttr?: string;
  categoryAttr?: string;
  categoryColorAttr?: string;
  dueDateAttr?: string;
};

const attrKeys = (custom: string | undefined, fallbacks: string[]): string[] => {
  const trimmed = custom?.trim();
  return trimmed ? [trimmed, ...fallbacks.filter((k) => k !== trimmed)] : fallbacks;
};

function hasEntitySelection(ds: datasources.DataSource): boolean {
  return (ds as datasources.DataSource & { entitysel?: unknown }).entitysel != null;
}

async function readRaw(ds: datasources.DataSource, property?: string): Promise<unknown> {
  try {
    return property ? await ds.getValue(property) : await ds.getValue();
  } catch {
    return undefined;
  }
}

export async function loadTasks(
  ds: datasources.DataSource,
  attrs: TaskAttrMap = {},
): Promise<Task[]> {
  const fromRoot = parseTasks(await readRaw(ds), attrs);
  if (fromRoot.length > 0) return fromRoot;

  const dsAny = ds as datasources.DataSource & {
    type?: string;
    filterAttributesText?: string;
    length?: number;
    getCollection?: (
      start: number,
      count: number,
      attributes?: string,
    ) => Promise<unknown>;
    getEntity?: (index: number) => Promise<unknown>;
  };

  if (typeof dsAny.getCollection === 'function') {
    try {
      const collection = await dsAny.getCollection(0, 500, dsAny.filterAttributesText || '');
      const parsed = parseTasks(collection, attrs);
      if (parsed.length > 0) return parsed;
    } catch {
      // selection not ready yet
    }

    if (dsAny.type === 'entitysel' || hasEntitySelection(ds)) {
      try {
        const collection = await dsAny.getCollection(0, 500, dsAny.filterAttributesText || '*');
        const parsed = parseTasks(collection, attrs);
        if (parsed.length > 0) return parsed;
      } catch {
        // selection not ready yet
      }
    }
  }

  const length = typeof dsAny.length === 'number' ? dsAny.length : 0;
  if (length > 0 && typeof dsAny.getEntity === 'function') {
    const rows: Record<string, unknown>[] = [];
    for (let i = 0; i < Math.min(length, 500); i += 1) {
      try {
        const entity = await dsAny.getEntity(i);
        if (!entity) continue;
        if (entity && typeof entity === 'object' && 'getValue' in entity) {
          const value = await (entity as datasources.DataSource).getValue();
          if (value && typeof value === 'object') rows.push(value as Record<string, unknown>);
        } else if (entity && typeof entity === 'object') {
          rows.push(entity as Record<string, unknown>);
        }
      } catch {
        // skip unavailable entity
      }
    }
    const parsed = parseTasks(rows, attrs);
    if (parsed.length > 0) return parsed;
  }

  return [];
}

export const parseTasks = (raw: unknown, attrs: TaskAttrMap = {}): Task[] => {
  const records = parseWithPlainFallback(raw);
  const tasks: Task[] = [];

  records.forEach((record, index) => {
    if (!record || typeof record !== 'object') return;

    const id =
      toOptionalString(pick(record, attrKeys(attrs.idAttr, ['ID', 'id', 'Id']))) ?? `tmp-${index}`;
    const title =
      toOptionalString(
        pick(
          record,
          attrKeys(attrs.titleAttr, ['Title', 'title', 'Description', 'description', 'Name', 'name']),
        ),
      ) ?? 'Untitled';
    const status =
      toOptionalString(
        pick(record, attrKeys(attrs.statusAttr, ['Status', 'status', 'State', 'state'])),
      ) ?? 'Not Started';
    const category = toOptionalString(
      pick(record, attrKeys(attrs.categoryAttr, ['Category', 'category', 'Type', 'type'])),
    );
    const categoryColor = toOptionalString(
      pick(
        record,
        attrKeys(attrs.categoryColorAttr, ['Color', 'color', 'CategoryColor', 'categoryColor']),
      ),
    );
    const dueDate = toOptionalString(
      pick(record, attrKeys(attrs.dueDateAttr, ['DueDate', 'dueDate', 'Due_Date', 'due_date', 'Deadline'])),
    );

    tasks.push({ id, title, status, category, categoryColor, dueDate });
  });

  return tasks;
};

export const normalizeColumns = (columns?: ColumnDef[] | string): ColumnDef[] => {
  if (typeof columns === 'string') {
    try {
      const parsed = JSON.parse(columns) as ColumnDef[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed
          .map((col) => ({ status: String(col?.status ?? '').trim() }))
          .filter((col) => col.status);
      }
    } catch {
      const parts = columns
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      if (parts.length > 0) return parts.map((status) => ({ status }));
    }
    return DEFAULT_COLUMNS;
  }
  if (!Array.isArray(columns) || columns.length === 0) return DEFAULT_COLUMNS;
  const normalized = columns
    .map((col) => ({ status: String(col?.status ?? '').trim() }))
    .filter((col) => col.status);
  return normalized.length > 0 ? normalized : DEFAULT_COLUMNS;
};

export const toCategoryColorMap = (
  categoryColors?: CategoryColors,
): Record<string, string> => {
  if (!categoryColors) return {};
  let rows: Array<{ category: string; color: string }> = [];
  if (typeof categoryColors === 'string') {
    try {
      rows = JSON.parse(categoryColors) as Array<{ category: string; color: string }>;
    } catch {
      return {};
    }
  } else {
    rows = categoryColors;
  }
  const map: Record<string, string> = {};
  rows.forEach((row) => {
    const key = String(row?.category ?? '').trim();
    const color = String(row?.color ?? '').trim();
    if (key && color) map[key] = color;
  });
  return map;
};

export const resolveCategoryColor = (
  task: Task,
  colorMap: Record<string, string>,
): string => {
  if (task.categoryColor) return task.categoryColor;
  if (task.category && colorMap[task.category]) return colorMap[task.category];
  return FALLBACK_CATEGORY_COLOR;
};

export const tasksFingerprint = (tasks: Task[]): string =>
  tasks.map((t) => `${t.id}|${t.title}|${t.status}|${t.category ?? ''}|${t.dueDate ?? ''}`).join(';');

export const groupTasksByStatus = (
  tasks: Task[],
  columns: ColumnDef[],
): { columns: ColumnDef[]; grouped: Record<string, Task[]> } => {
  const columnStatuses = columns.map((c) => c.status);
  const known = new Set(columnStatuses);
  const extras: string[] = [];
  const grouped: Record<string, Task[]> = {};

  columnStatuses.forEach((status) => {
    grouped[status] = [];
  });

  tasks.forEach((task) => {
    const status = task.status || 'Not Started';
    if (!known.has(status)) {
      known.add(status);
      extras.push(status);
      grouped[status] = [];
    }
    grouped[status].push(task);
  });

  const allColumns = [...columns, ...extras.map((status) => ({ status }))];
  return { columns: allColumns, grouped };
};

export const formatDueDate = (value: string, locale = 'en-US'): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(locale, { month: 'short', day: 'numeric' });
};

export const isDueSoonOrOverdue = (value: string): 'overdue' | 'soon' | 'ok' => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'ok';
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(date);
  due.setHours(0, 0, 0, 0);
  const diffDays = Math.round((due.getTime() - today.getTime()) / 86_400_000);
  if (diffDays < 0) return 'overdue';
  if (diffDays <= 2) return 'soon';
  return 'ok';
};

export const moveTaskStatus = (tasks: Task[], taskID: string, newStatus: string): Task[] => {
  let changed = false;
  const next = tasks.map((task) => {
    if (task.id !== taskID || task.status === newStatus) return task;
    changed = true;
    return { ...task, status: newStatus };
  });
  return changed ? next : tasks;
};

export const applyPendingMoves = (
  tasks: Task[],
  pending: Map<string, string>,
): Task[] => {
  if (pending.size === 0) return tasks;
  return tasks.map((task) => {
    const pendingStatus = pending.get(task.id);
    if (!pendingStatus) return task;
    if (task.status === pendingStatus) {
      pending.delete(task.id);
      return task;
    }
    return { ...task, status: pendingStatus };
  });
};
