import {
  EComponentKind,
  Settings,
  splitDatasourceID,
  type T4DComponentConfig,
} from '@ws-ui/webform-editor';
import { MdViewColumn } from 'react-icons/md';

import KanbanBoardSettings, { BasicSettings } from './KanbanBoard.settings';
import type { CategoryColors, ColumnDef, OnCardMovePayload } from './KanbanBoard.types';
import { DEFAULT_COLUMNS, TASK_ATTRS } from './KanbanBoard.utils';

const DEFAULT_CATEGORY_COLORS = [
  { category: 'Work', color: 'red' },
  { category: 'Family', color: 'blue' },
  { category: 'Travel', color: 'green' },
  { category: 'Personal', color: 'aqua' },
];

export default {
  craft: {
    displayName: 'Kanban Board',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(KanbanBoardSettings, BasicSettings),
    },
    sanityCheck: {
      keys: [{ name: 'datasource', require: true, isDatasource: true }],
    },
    requiredFields: { keys: ['datasource'], all: false },
  },
  info: {
    displayName: 'Kanban Board',
    exposed: true,
    icon: MdViewColumn,
    events: [{ label: 'On Card Move', value: 'onCardMove' }],
    datasources: {
      accept: ['entitysel', 'array'],
      declarations: (props: any) => {
        const datasource = props.datasource?.trim() ?? '';
        const declarations: { path: string; iterable?: boolean }[] = [
          { path: datasource, iterable: true },
        ];
        const { id: ds, namespace } = splitDatasourceID(datasource) || {};
        if (!ds) return declarations;

        const withNs = (path: string) => (namespace ? `${namespace}:${path}` : path);
        const attrNames = [
          props.idAttr,
          props.titleAttr,
          props.statusAttr,
          props.categoryAttr,
          props.categoryColorAttr,
          props.dueDateAttr,
          ...TASK_ATTRS,
        ]
          .map((attr: string | undefined) => attr?.trim())
          .filter((attr: string | undefined): attr is string => !!attr);

        const seen = new Set<string>();
        attrNames.forEach((attr: string) => {
          if (seen.has(attr)) return;
          seen.add(attr);
          declarations.push({ path: withNs(`${ds}.[].${attr}`) });
        });

        return declarations;
      },
    },
  },
  defaultProps: {
    idAttr: 'ID',
    titleAttr: 'Title',
    statusAttr: 'Status',
    categoryAttr: 'Category',
    categoryColorAttr: 'Color',
    dueDateAttr: 'DueDate',
    statusColumns: DEFAULT_COLUMNS,
    locale: 'en-US',
    accentColor: '#6E56CF',
    surfaceColor: '#F7F6F9',
    textColor: '#23202E',
    mutedColor: '#6F6B7D',
    cornerRadius: 14,
    categoryColors: DEFAULT_CATEGORY_COLORS,
    showCategoryChips: true,
    showDueDates: true,
    style: {
      width: '100%',
      minHeight: '360px',
    },
  },
} as T4DComponentConfig<IKanbanBoardProps>;

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
