import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { type FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import config, { type IKanbanBoardProps } from './KanbanBoard.config';
import type { Task } from './KanbanBoard.types';
import {
  applyPendingMoves,
  loadTasks,
  moveTaskStatus,
  tasksFingerprint,
} from './KanbanBoard.utils';
import KanbanBoardView from './KanbanBoardView';

const KanbanBoardRender: FC<IKanbanBoardProps> = (props) => {
  const merged = { ...config.defaultProps, ...props };
  const { connect, emit } = useRenderer({ autoBindEvents: false });
  const {
    sources: { datasource: ds },
  } = useSources({ acceptIteratorSel: true });

  const [tasks, setTasks] = useState<Task[]>([]);
  const tasksRef = useRef<Task[]>([]);
  const fingerprintRef = useRef('');
  const pendingMovesRef = useRef<Map<string, string>>(new Map());
  const syncingRef = useRef(false);

  const attrMap = useMemo(
    () => ({
      idAttr: merged.idAttr,
      titleAttr: merged.titleAttr,
      statusAttr: merged.statusAttr,
      categoryAttr: merged.categoryAttr,
      categoryColorAttr: merged.categoryColorAttr,
      dueDateAttr: merged.dueDateAttr,
    }),
    [
      merged.idAttr,
      merged.titleAttr,
      merged.statusAttr,
      merged.categoryAttr,
      merged.categoryColorAttr,
      merged.dueDateAttr,
    ],
  );

  const viewProps = useMemo(
    () => ({
      columns: merged.statusColumns,
      accentColor: merged.accentColor ?? '#6E56CF',
      surfaceColor: merged.surfaceColor ?? '#F7F6F9',
      textColor: merged.textColor ?? '#23202E',
      mutedColor: merged.mutedColor ?? '#6F6B7D',
      cornerRadius: merged.cornerRadius ?? 14,
      locale: merged.locale ?? 'en-US',
      categoryColors: merged.categoryColors,
      showCategoryChips: merged.showCategoryChips ?? true,
      showDueDates: merged.showDueDates ?? true,
    }),
    [
      merged.statusColumns,
      merged.accentColor,
      merged.surfaceColor,
      merged.textColor,
      merged.mutedColor,
      merged.cornerRadius,
      merged.locale,
      merged.categoryColors,
      merged.showCategoryChips,
      merged.showDueDates,
    ],
  );

  const applyTasks = useCallback((next: Task[]) => {
    const withPending = applyPendingMoves(next, pendingMovesRef.current);
    const fingerprint = tasksFingerprint(withPending);
    if (fingerprint === fingerprintRef.current) return;
    fingerprintRef.current = fingerprint;
    tasksRef.current = withPending;
    setTasks(withPending);
  }, []);

  useEffect(() => {
    if (!ds) {
      applyTasks([]);
      return;
    }

    let cancelled = false;

    const refresh = async () => {
      if (syncingRef.current) return;
      syncingRef.current = true;
      try {
        const next = await loadTasks(ds, attrMap);
        if (cancelled) return;
        applyTasks(next);
      } finally {
        syncingRef.current = false;
      }
    };

    void refresh();
    ds.addListener('changed', refresh);
    return () => {
      cancelled = true;
      ds.removeListener('changed', refresh);
    };
  }, [ds, attrMap, applyTasks]);

  const handleCardMove = useCallback(
    (taskID: string, newStatus: string) => {
      const current = tasksRef.current.find((task) => task.id === taskID);
      if (!current || current.status === newStatus) return;

      pendingMovesRef.current.set(taskID, newStatus);
      const next = moveTaskStatus(tasksRef.current, taskID, newStatus);
      fingerprintRef.current = tasksFingerprint(next);
      tasksRef.current = next;
      setTasks(next);

      emit('onCardMove', { taskID, newStatus });
    },
    [emit],
  );

  return (
    <div ref={connect} className={cn(props.className, props.classNames)} style={props.style}>
      <KanbanBoardView
        {...viewProps}
        tasks={tasks}
        interactive
        onCardMove={handleCardMove}
      />
    </div>
  );
};

export default KanbanBoardRender;
