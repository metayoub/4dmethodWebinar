import cn from 'classnames';
import { type CSSProperties, type DragEvent, memo, useMemo, useState } from 'react';
import { MdEvent } from 'react-icons/md';

import styles from './KanbanBoard.module.css';
import type { CategoryColors, ColumnDef, Task } from './KanbanBoard.types';
import {
  formatDueDate,
  groupTasksByStatus,
  isDueSoonOrOverdue,
  normalizeColumns,
  resolveCategoryColor,
  toCategoryColorMap,
} from './KanbanBoard.utils';

const DRAG_MIME = 'application/x-qodly-kanban-task';

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

const KanbanBoardView = memo(
  ({
    tasks,
    columns,
    accentColor,
    surfaceColor,
    textColor,
    mutedColor,
    cornerRadius,
    locale = 'en-US',
    categoryColors,
    showCategoryChips = true,
    showDueDates = true,
    interactive = false,
    onCardMove,
  }: KanbanBoardViewProps) => {
    const [dragId, setDragId] = useState<string | null>(null);
    const [dropStatus, setDropStatus] = useState<string | null>(null);

    const colorMap = useMemo(() => toCategoryColorMap(categoryColors), [categoryColors]);
    const columnDefs = useMemo(() => normalizeColumns(columns), [columns]);
    const { columns: boardColumns, grouped } = useMemo(
      () => groupTasksByStatus(tasks, columnDefs),
      [tasks, columnDefs],
    );

    const cssVars = {
      '--kb-accent': accentColor,
      '--kb-surface': surfaceColor,
      '--kb-text': textColor,
      '--kb-muted': mutedColor,
      '--kb-radius': `${cornerRadius}px`,
    } as CSSProperties;

    const handleDragStart = (event: DragEvent<HTMLElement>, taskId: string) => {
      if (!interactive) return;
      event.dataTransfer.setData(DRAG_MIME, taskId);
      event.dataTransfer.effectAllowed = 'move';
      setDragId(taskId);
    };

    const handleDragOverColumn = (event: DragEvent<HTMLElement>, status: string) => {
      if (!interactive || !dragId) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      if (dropStatus !== status) setDropStatus(status);
    };

    const handleDropOnColumn = (event: DragEvent<HTMLElement>, status: string) => {
      if (!interactive || !onCardMove) return;
      event.preventDefault();
      const taskID = event.dataTransfer.getData(DRAG_MIME) || dragId;
      setDragId(null);
      setDropStatus(null);
      if (!taskID) return;
      const task = tasks.find((t) => t.id === taskID);
      if (!task || task.status === status) return;
      onCardMove(taskID, status);
    };

    const handleDragEnd = () => {
      setDragId(null);
      setDropStatus(null);
    };

    if (tasks.length === 0 && boardColumns.length === 0) {
      return (
        <div className={styles.board} style={cssVars}>
          <div className={styles.emptyBoard}>No tasks</div>
        </div>
      );
    }

    return (
      <div className={styles.board} style={cssVars} role="list">
        {boardColumns.map((column) => {
          const columnTasks = grouped[column.status] ?? [];
          return (
            <section
              key={column.status}
              className={cn(styles.column, dropStatus === column.status && styles.columnDropTarget)}
              aria-label={column.status}
              onDragOver={(event) => handleDragOverColumn(event, column.status)}
              onDrop={(event) => handleDropOnColumn(event, column.status)}
              onDragLeave={() => {
                if (dropStatus === column.status) setDropStatus(null);
              }}
            >
              <header className={styles.columnHeader}>
                <h3 className={styles.columnTitle}>{column.status}</h3>
                <span className={styles.columnCount}>{columnTasks.length}</span>
              </header>
              <div className={styles.columnBody}>
                {columnTasks.length === 0 ? (
                  <div className={styles.emptyColumn}>
                    {interactive ? 'Drop a card here' : 'No cards'}
                  </div>
                ) : (
                  columnTasks.map((task) => {
                    const color = resolveCategoryColor(task, colorMap);
                    const dueTone = task.dueDate ? isDueSoonOrOverdue(task.dueDate) : 'ok';
                    return (
                      <article
                        key={task.id}
                        className={cn(
                          styles.card,
                          interactive ? styles.cardInteractive : styles.cardStatic,
                          dragId === task.id && styles.cardDragging,
                        )}
                        draggable={interactive}
                        onDragStart={(event) => handleDragStart(event, task.id)}
                        onDragEnd={handleDragEnd}
                        role="listitem"
                      >
                        <h4 className={styles.cardTitle}>{task.title}</h4>
                        {(showCategoryChips && task.category) ||
                        (showDueDates && task.dueDate) ? (
                          <div className={styles.cardMeta}>
                            {showCategoryChips && task.category ? (
                              <span className={styles.chip} title={task.category}>
                                <span
                                  className={styles.chipDot}
                                  style={{ background: color }}
                                />
                                <span className={styles.chipLabel}>{task.category}</span>
                              </span>
                            ) : null}
                            {showDueDates && task.dueDate ? (
                              <span
                                className={cn(
                                  styles.due,
                                  dueTone === 'soon' && styles.dueSoon,
                                  dueTone === 'overdue' && styles.dueOverdue,
                                )}
                                title={task.dueDate}
                              >
                                <MdEvent size={12} />
                                {formatDueDate(task.dueDate, locale)}
                              </span>
                            ) : null}
                          </div>
                        ) : null}
                      </article>
                    );
                  })
                )}
              </div>
            </section>
          );
        })}
      </div>
    );
  },
);

KanbanBoardView.displayName = 'KanbanBoardView';

export default KanbanBoardView;
