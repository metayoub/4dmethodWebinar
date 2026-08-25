import {
  EComponentKind,
  Settings,
  splitDatasourceID,
  type T4DComponentConfig,
} from '@ws-ui/webform-editor';
import { MdReceiptLong } from 'react-icons/md';

import InvoiceLineGridSettings, { BasicSettings } from './InvoiceLineGrid.settings';
import type {
  ApplyTotalsPayload,
  CategoryColors,
  Density,
  RemoveLinePayload,
  ReorderLinesPayload,
  SaveLinePayload,
  SetPaidPayload,
} from './InvoiceLineGrid.types';
import { INVOICE_ATTRS, LINE_ATTRS } from './InvoiceLineGrid.utils';

const DEFAULT_LINES_RELATION = 'Lines_Fm_Invoices';

const DEFAULT_CATEGORY_COLORS = [
  { category: 'Plume', color: '#6E56CF' },
  { category: 'Roller', color: '#12B886' },
  { category: 'Multifonction', color: '#F59F00' },
];

export default {
  craft: {
    displayName: 'Invoice Line Grid',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(InvoiceLineGridSettings, BasicSettings),
    },
    sanityCheck: {
      keys: [{ name: 'datasource', require: true, isDatasource: true }],
    },
    requiredFields: { keys: ['datasource'], all: false },
  },
  info: {
    displayName: 'Invoice Line Grid',
    exposed: true,
    icon: MdReceiptLong,
    events: [
      { label: 'On Save Line', value: 'saveLine' },
      { label: 'On Add Line', value: 'addLine' },
      { label: 'On Remove Line', value: 'removeLine' },
      { label: 'On Reorder Lines', value: 'reorderLines' },
      { label: 'On Apply Totals', value: 'applyTotals' },
      { label: 'On Paid Change', value: 'setPaid' },
    ],
    datasources: {
      accept: ['entitysel', 'entity'],
      declarations: (props: IInvoiceLineGridProps) => {
        const datasource = props.datasource?.trim() ?? '';
        const linesRelation = props.linesRelation?.trim() || DEFAULT_LINES_RELATION;
        const { id: ds, namespace } = splitDatasourceID(datasource) || {};
        const withNs = (path: string) => (namespace ? `${namespace}:${path}` : path);

        if (!ds) return [{ path: datasource }];

        const alreadyRelated = ds === linesRelation || ds.endsWith(`.${linesRelation}`);
        const lineRoot = alreadyRelated ? ds : `${ds}.${linesRelation}`;
        const declarations: { path: string; iterable?: boolean }[] = alreadyRelated
          ? [{ path: datasource, iterable: true }]
          : [{ path: datasource }, { path: withNs(lineRoot), iterable: true }];

        LINE_ATTRS.forEach((attr) => {
          declarations.push({ path: withNs(`${lineRoot}.[].${attr}`) });
        });

        if (!alreadyRelated) {
          INVOICE_ATTRS.forEach((attr) => {
            declarations.push({ path: withNs(`${ds}.${attr}`) });
          });
        }

        return declarations;
      },
    },
  },
  defaultProps: {
    linesRelation: DEFAULT_LINES_RELATION,
    currency: '',
    locale: 'fr-FR',
    accentColor: '#6E56CF',
    surfaceColor: '#FFFFFF',
    textColor: '#23202E',
    mutedColor: '#6F6B7D',
    cornerRadius: 16,
    density: 'comfortable' as Density,
    categoryColors: DEFAULT_CATEGORY_COLORS,
    showSummary: true,
    showChart: true,
    showQuantityRing: true,
    showCategoryChips: true,
    style: {
      width: '100%',
      minHeight: '420px',
    },
  },
} as T4DComponentConfig<IInvoiceLineGridProps>;

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
