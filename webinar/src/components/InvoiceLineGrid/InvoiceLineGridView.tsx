import cn from 'classnames';
import { type CSSProperties, type DragEvent, memo, useMemo, useState } from 'react';
import { MdAdd, MdDeleteOutline, MdDragIndicator } from 'react-icons/md';

import styles from './InvoiceLineGrid.module.css';
import type {
  CategoryColors,
  Density,
  EditableLineField,
  InvoiceLine,
} from './InvoiceLineGrid.types';
import {
  computeInvoice,
  formatAmount,
  formatNumber,
  formatPercent,
  toCategoryColorMap,
} from './InvoiceLineGrid.utils';

const DRAG_MIME = 'application/x-qodly-invoice-line';

const RING_SIZE = 36;
const RING_STROKE = 3.5;

function QuantityRing({
  quantity,
  accentColor,
  trackColor,
}: {
  quantity: number;
  accentColor: string;
  trackColor: string;
}) {
  const radius = (RING_SIZE - RING_STROKE) / 2;
  const circumference = 2 * Math.PI * radius;
  const cap = Math.max(10, Math.ceil(Math.max(quantity, 1) / 10) * 10);
  const progress = Math.max(0, Math.min(1, quantity / cap));
  const dash = `${circumference * progress} ${circumference}`;

  return (
    <svg
      className={styles.ring}
      width={RING_SIZE}
      height={RING_SIZE}
      viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
      role="img"
      aria-label={`Total quantity ${quantity}`}
    >
      <circle
        cx={RING_SIZE / 2}
        cy={RING_SIZE / 2}
        r={radius}
        fill="none"
        stroke={trackColor}
        strokeWidth={RING_STROKE}
      />
      <circle
        cx={RING_SIZE / 2}
        cy={RING_SIZE / 2}
        r={radius}
        fill="none"
        stroke={accentColor}
        strokeWidth={RING_STROKE}
        strokeLinecap="round"
        strokeDasharray={dash}
        transform={`rotate(-90 ${RING_SIZE / 2} ${RING_SIZE / 2})`}
      />
    </svg>
  );
}

function parseFieldValue(field: EditableLineField, raw: string): number {
  const normalized = raw.replace(/\s/g, '').replace(',', '.');
  const n = Number(normalized);
  if (!Number.isFinite(n)) return 0;
  if (field === 'quantity') return Math.max(0, n);
  if (field === 'unitPrice') return Math.max(0, n);
  if (field === 'discountPct') return Math.max(0, Math.min(100, n));
  return Math.max(0, n);
}

export type InvoiceLineGridViewProps = {
  lines: InvoiceLine[];
  currency: string;
  locale: string;
  accentColor: string;
  surfaceColor: string;
  textColor: string;
  mutedColor: string;
  cornerRadius: number;
  density: Density;
  categoryColors?: CategoryColors | string;
  showSummary: boolean;
  showChart: boolean;
  showQuantityRing: boolean;
  showCategoryChips: boolean;
  interactive?: boolean;
  paid?: boolean;
  onPaidChange?: (value: boolean) => void;
  onLineFieldChange?: (id: string, field: EditableLineField, value: number) => void;
  onAddLine?: () => void;
  onRemoveLine?: (id: string) => void;
  onReorder?: (orderedIds: string[]) => void;
};

const InvoiceLineGridView = memo(
  ({
    lines,
    currency,
    locale,
    accentColor,
    surfaceColor,
    textColor,
    mutedColor,
    cornerRadius,
    density,
    categoryColors,
    showSummary,
    showChart,
    showQuantityRing,
    showCategoryChips,
    interactive = false,
    paid = false,
    onPaidChange,
    onLineFieldChange,
    onAddLine,
    onRemoveLine,
    onReorder,
  }: InvoiceLineGridViewProps) => {
    const [dragId, setDragId] = useState<string | null>(null);
    const [dropId, setDropId] = useState<string | null>(null);

    const colorMap = useMemo(() => toCategoryColorMap(categoryColors), [categoryColors]);
    const model = useMemo(
      () => computeInvoice(lines, colorMap, accentColor),
      [lines, colorMap, accentColor],
    );

    const compact = density === 'compact';
    const showAside = showSummary || showChart;
    const money = (value: number) => formatAmount(value, locale, currency);

    const cssVars = {
      '--ilg-accent': accentColor,
      '--ilg-surface': surfaceColor,
      '--ilg-text': textColor,
      '--ilg-muted': mutedColor,
      '--ilg-radius': `${cornerRadius}px`,
      '--ilg-pad': compact ? '16px' : '24px',
      '--ilg-gap': compact ? '16px' : '24px',
      '--ilg-row': compact ? '8px' : '16px',
    } as CSSProperties;

    const handleDragStart = (event: DragEvent<HTMLButtonElement>, lineId: string) => {
      if (!interactive) return;
      event.dataTransfer.setData(DRAG_MIME, lineId);
      event.dataTransfer.effectAllowed = 'move';
      setDragId(lineId);
    };

    const handleDragOver = (event: DragEvent<HTMLTableRowElement>, lineId: string) => {
      if (!interactive || !dragId || dragId === lineId) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      setDropId(lineId);
    };

    const handleDrop = (event: DragEvent<HTMLTableRowElement>, targetId: string) => {
      if (!interactive || !onReorder) return;
      event.preventDefault();
      const sourceId = event.dataTransfer.getData(DRAG_MIME) || dragId;
      if (!sourceId || sourceId === targetId) {
        setDragId(null);
        setDropId(null);
        return;
      }
      const ids = lines.map((line) => line.id);
      const from = ids.indexOf(sourceId);
      const to = ids.indexOf(targetId);
      if (from < 0 || to < 0) return;
      const next = [...ids];
      next.splice(from, 1);
      next.splice(to, 0, sourceId);
      onReorder(next);
      setDragId(null);
      setDropId(null);
    };

    const handleDragEnd = () => {
      setDragId(null);
      setDropId(null);
    };

    const renderEditableCell = (row: (typeof model.rows)[number], field: EditableLineField) => {
      const value = row[field] ?? 0;
      if (!interactive || !onLineFieldChange) {
        if (field === 'discountPct') {
          return row.discountPct ? formatPercent(row.discountPct, locale) : '';
        }
        if (field === 'taxPct') {
          return row.taxPct != null ? formatPercent(row.taxPct, locale) : '';
        }
        if (field === 'quantity') return formatNumber(row.quantity, locale);
        return money(row.unitPrice);
      }
      return (
        <input
          className={styles.input}
          type="text"
          inputMode="decimal"
          defaultValue={String(value)}
          onBlur={(event) => {
            const next = parseFieldValue(field, event.target.value);
            if (next !== value) onLineFieldChange(row.id, field, next);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              (event.target as HTMLInputElement).blur();
            }
          }}
        />
      );
    };

    return (
      <div className={styles.card} style={cssVars}>
        {interactive ? (
          <div className={styles.header}>
            <div className={styles.title}>Invoice lines</div>
            <div className={styles.headerActions}>
              <button
                type="button"
                className={cn(styles.paidToggle, paid && styles.paidToggleActive)}
                onClick={() => onPaidChange?.(!paid)}
              >
                <span className={cn(styles.paidDot, paid && styles.paidDotActive)} />
                {paid ? 'Paid' : 'Unpaid'}
              </button>
              <button
                type="button"
                className={cn(styles.btn, styles.btnAccent)}
                onClick={onAddLine}
              >
                <MdAdd size={16} />
                Add line
              </button>
            </div>
          </div>
        ) : null}

        <div className={cn(styles.layout, !showAside && styles.layoutSolo)}>
          <div className={styles.gridWrap}>
            {model.rows.length === 0 ? (
              <div className={styles.empty}>No line items</div>
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    {interactive ? <th className={styles.drag} aria-label="Reorder" /> : null}
                    <th className={styles.product}>Product</th>
                    <th className={styles.num}>Quantity</th>
                    <th className={styles.num}>Unit Price</th>
                    {model.hasDiscount || interactive ? (
                      <th className={styles.num}>Discount %</th>
                    ) : null}
                    {model.hasTax || interactive ? <th className={styles.num}>Tax %</th> : null}
                    <th className={styles.num}>Line Total</th>
                    {interactive ? <th className={styles.actions} aria-label="Actions" /> : null}
                  </tr>
                </thead>
                <tbody>
                  {model.rows.map((row) => (
                    <tr
                      key={row.id}
                      className={cn(
                        dragId === row.id && styles.dragging,
                        dropId === row.id && styles.dropTarget,
                      )}
                      onDragOver={(event) => handleDragOver(event, row.id)}
                      onDrop={(event) => handleDrop(event, row.id)}
                      onDragLeave={() => setDropId(null)}
                    >
                      {interactive ? (
                        <td className={styles.drag}>
                          <button
                            type="button"
                            className={styles.dragHandle}
                            draggable
                            aria-label="Drag to reorder"
                            onDragStart={(event) => handleDragStart(event, row.id)}
                            onDragEnd={handleDragEnd}
                          >
                            <MdDragIndicator size={16} />
                          </button>
                        </td>
                      ) : null}
                      <td className={styles.product}>
                        <div className={styles.productCell}>
                          {showCategoryChips && row.category ? (
                            <span className={styles.chip} title={row.category}>
                              <span className={styles.chipDot} style={{ background: row.color }} />
                              <span className={styles.chipLabel}>{row.category}</span>
                            </span>
                          ) : null}
                          <div className={styles.productCopy}>
                            <div className={styles.name}>{row.name || 'Untitled'}</div>
                            {row.productRef ? (
                              <div className={styles.ref}>{row.productRef}</div>
                            ) : null}
                          </div>
                        </div>
                      </td>
                      <td className={styles.num}>{renderEditableCell(row, 'quantity')}</td>
                      <td className={styles.num}>{renderEditableCell(row, 'unitPrice')}</td>
                      {model.hasDiscount || interactive ? (
                        <td className={styles.num}>{renderEditableCell(row, 'discountPct')}</td>
                      ) : null}
                      {model.hasTax || interactive ? (
                        <td className={styles.num}>{renderEditableCell(row, 'taxPct')}</td>
                      ) : null}
                      <td className={styles.num}>{money(row.lineNet)}</td>
                      {interactive ? (
                        <td className={styles.actions}>
                          <button
                            type="button"
                            className={styles.btnDanger}
                            aria-label="Remove line"
                            onClick={() => onRemoveLine?.(row.id)}
                          >
                            <MdDeleteOutline size={18} />
                          </button>
                        </td>
                      ) : null}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {showAside ? (
            <aside className={styles.aside}>
              {showSummary ? (
                <div className={styles.summary}>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Subtotal</span>
                    <span className={styles.summaryValue}>{money(model.summary.subtotal)}</span>
                  </div>
                  {model.summary.discount > 0 ? (
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Discount</span>
                      <span className={styles.summaryValue}>
                        {'\u2212'}
                        {money(model.summary.discount)}
                      </span>
                    </div>
                  ) : null}
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Net excluding tax</span>
                    <span className={styles.summaryValue}>{money(model.summary.net)}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Tax total</span>
                    <span className={styles.summaryValue}>{money(model.summary.tax)}</span>
                  </div>
                  <div className={cn(styles.summaryRow, styles.totalRow)}>
                    <span className={styles.totalLabel}>Total due</span>
                    <span className={styles.totalValue}>{money(model.summary.totalDue)}</span>
                  </div>
                  <div className={cn(styles.summaryRow, styles.qtyRow)}>
                    <span className={styles.summaryLabel}>Total quantity</span>
                    <span className={styles.qtyMeta}>
                      {showQuantityRing ? (
                        <QuantityRing
                          quantity={model.summary.totalQuantity}
                          accentColor={accentColor}
                          trackColor="rgba(35, 32, 46, 0.08)"
                        />
                      ) : null}
                      <span className={styles.summaryValue}>
                        {formatNumber(model.summary.totalQuantity, locale)}
                      </span>
                    </span>
                  </div>
                </div>
              ) : null}

              {showChart && model.chart.length > 0 ? (
                <div className={styles.chart}>
                  <div className={styles.chartTitle}>Revenue by product line (net)</div>
                  {model.chart.map((bar) => (
                    <div key={bar.id} className={styles.barRow}>
                      <span className={styles.barLabel} title={bar.label}>
                        {bar.label}
                      </span>
                      <span className={styles.barValue}>{money(bar.net)}</span>
                      <div className={styles.barTrack}>
                        <div
                          className={styles.barFill}
                          style={{ width: `${bar.pct}%`, background: bar.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </aside>
          ) : null}
        </div>
      </div>
    );
  },
);

InvoiceLineGridView.displayName = 'InvoiceLineGridView';

export default InvoiceLineGridView;
