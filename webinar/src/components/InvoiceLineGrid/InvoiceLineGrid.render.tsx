import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { type FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import config, { type IInvoiceLineGridProps } from './InvoiceLineGrid.config';
import type { EditableLineField, InvoiceLine } from './InvoiceLineGrid.types';
import {
  buildApplyTotalsPayload,
  buildSaveLinePayload,
  isPersistedLineId,
  loadInvoiceLines,
  loadInvoicePaid,
} from './InvoiceLineGrid.utils';
import InvoiceLineGridView from './InvoiceLineGridView';

const DEFAULT_LINES_RELATION = 'Lines_Fm_Invoices';

const InvoiceLineGridRender: FC<IInvoiceLineGridProps> = (props) => {
  const merged = { ...config.defaultProps, ...props };
  const linesRelation = merged.linesRelation || DEFAULT_LINES_RELATION;

  const { connect, emit } = useRenderer({ autoBindEvents: false });
  const {
    sources: { datasource: ds },
  } = useSources({ acceptIteratorSel: true });

  const [lines, setLines] = useState<InvoiceLine[]>([]);
  const [paid, setPaid] = useState(false);
  const linesRef = useRef<InvoiceLine[]>([]);
  const paidRef = useRef(false);
  const lastTotalsRef = useRef('');
  const syncingRef = useRef(false);

  const viewProps = useMemo(
    () => ({
      currency: merged.currency ?? '',
      locale: merged.locale ?? 'fr-FR',
      accentColor: merged.accentColor ?? '#6E56CF',
      surfaceColor: merged.surfaceColor ?? '#FFFFFF',
      textColor: merged.textColor ?? '#23202E',
      mutedColor: merged.mutedColor ?? '#6F6B7D',
      cornerRadius: merged.cornerRadius ?? 16,
      density: merged.density ?? 'comfortable',
      categoryColors: merged.categoryColors,
      showSummary: merged.showSummary ?? true,
      showChart: merged.showChart ?? true,
      showQuantityRing: merged.showQuantityRing ?? true,
      showCategoryChips: merged.showCategoryChips ?? true,
    }),
    [
      merged.currency,
      merged.locale,
      merged.accentColor,
      merged.surfaceColor,
      merged.textColor,
      merged.mutedColor,
      merged.cornerRadius,
      merged.density,
      merged.categoryColors,
      merged.showSummary,
      merged.showChart,
      merged.showQuantityRing,
      merged.showCategoryChips,
    ],
  );

  const emitApplyTotals = useCallback(
    (nextLines: InvoiceLine[]) => {
      const payload = buildApplyTotalsPayload(nextLines);
      const key = `${payload.Subtotal_BT}|${payload.Tax}|${payload.Total}`;
      if (key === lastTotalsRef.current) return;
      lastTotalsRef.current = key;
      emit('applyTotals', payload);
    },
    [emit],
  );

  const updateLines = useCallback(
    (next: InvoiceLine[], emitTotals = false) => {
      linesRef.current = next;
      setLines(next);
      if (emitTotals) emitApplyTotals(next);
    },
    [emitApplyTotals],
  );

  useEffect(() => {
    if (!ds) {
      linesRef.current = [];
      setLines([]);
      return;
    }

    let cancelled = false;

    const refresh = async () => {
      if (syncingRef.current) return;
      syncingRef.current = true;
      try {
        const [nextLines, nextPaid] = await Promise.all([
          loadInvoiceLines(ds, linesRelation),
          loadInvoicePaid(ds, linesRelation),
        ]);
        if (cancelled) return;
        linesRef.current = nextLines;
        setLines(nextLines);
        if (nextPaid != null) {
          paidRef.current = nextPaid;
          setPaid(nextPaid);
        }
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
  }, [ds, linesRelation]);

  const handleLineFieldChange = useCallback(
    (id: string, field: EditableLineField, value: number) => {
      const next = linesRef.current.map((line) =>
        line.id === id ? { ...line, [field]: value } : line,
      );
      updateLines(next, true);

      const updated = next.find((line) => line.id === id);
      if (updated && isPersistedLineId(id)) {
        emit('saveLine', buildSaveLinePayload(updated));
      }
    },
    [emit, updateLines],
  );

  const handleAddLine = useCallback(() => {
    emit('addLine', {});
  }, [emit]);

  const handleRemoveLine = useCallback(
    (id: string) => {
      if (isPersistedLineId(id)) {
        emit('removeLine', { ID: Number(id) });
        return;
      }
      const next = linesRef.current.filter((line) => line.id !== id);
      updateLines(next, true);
    },
    [emit, updateLines],
  );

  const handleReorder = useCallback(
    (orderedIds: string[]) => {
      const map = new Map(linesRef.current.map((line) => [line.id, line]));
      const next = orderedIds
        .map((id) => map.get(id))
        .filter((line): line is InvoiceLine => line != null);
      updateLines(next, false);
      const numericIds = orderedIds.filter(isPersistedLineId).map((id) => Number(id));
      if (numericIds.length > 0) {
        emit('reorderLines', { orderedIds: numericIds });
      }
    },
    [emit, updateLines],
  );

  const handlePaidChange = useCallback(
    (value: boolean) => {
      paidRef.current = value;
      setPaid(value);
      emit('setPaid', { value });
    },
    [emit],
  );

  return (
    <div ref={connect} className={cn(props.className, props.classNames)} style={props.style}>
      <InvoiceLineGridView
        {...viewProps}
        lines={lines}
        interactive
        paid={paid}
        onPaidChange={handlePaidChange}
        onLineFieldChange={handleLineFieldChange}
        onAddLine={handleAddLine}
        onRemoveLine={handleRemoveLine}
        onReorder={handleReorder}
      />
    </div>
  );
};

export default InvoiceLineGridRender;
