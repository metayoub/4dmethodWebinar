import {
  BASIC_SETTINGS,
  DEFAULT_SETTINGS,
  ESetting,
  load,
  type TSetting,
} from '@ws-ui/webform-editor';

const dataSettings: TSetting[] = [
  {
    key: 'datasource',
    label: 'Tasks',
    type: ESetting.DS_AUTO_SUGGEST,
  },
  {
    key: 'serverSideRef',
    label: 'Server Side',
    type: ESetting.TEXT_FIELD,
    validateOnEnter: true,
  },
  {
    key: 'idAttr',
    label: 'ID attribute',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'ID',
  },
  {
    key: 'titleAttr',
    label: 'Title attribute',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'Title',
  },
  {
    key: 'statusAttr',
    label: 'Status attribute',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'Status',
  },
  {
    key: 'categoryAttr',
    label: 'Category attribute',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'Category',
  },
  {
    key: 'categoryColorAttr',
    label: 'Category color attribute',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'Color',
  },
  {
    key: 'dueDateAttr',
    label: 'Due date attribute',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'DueDate',
  },
];

const columnSettings: TSetting[] = [
  {
    type: ESetting.DATAGRID,
    key: 'statusColumns',
    name: 'Status columns',
    label: 'Columns (by status)',
    data: [{ key: 'status', label: 'Status', type: ESetting.TEXT_FIELD }],
  },
  {
    key: 'locale',
    label: 'Locale',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'en-US',
  },
];

const designSettings: TSetting[] = [
  {
    key: 'accentColor',
    label: 'Accent color',
    type: ESetting.COLOR_PICKER,
    defaultValue: '#6E56CF',
  },
  {
    key: 'surfaceColor',
    label: 'Surface color',
    type: ESetting.COLOR_PICKER,
    defaultValue: '#F7F6F9',
  },
  {
    key: 'textColor',
    label: 'Text color',
    type: ESetting.COLOR_PICKER,
    defaultValue: '#23202E',
  },
  {
    key: 'mutedColor',
    label: 'Muted color',
    type: ESetting.COLOR_PICKER,
    defaultValue: '#6F6B7D',
  },
  {
    key: 'cornerRadius',
    label: 'Corner radius (px)',
    type: ESetting.NUMBER_FIELD,
    defaultValue: 14,
  },
  {
    type: ESetting.DATAGRID,
    key: 'categoryColors',
    name: 'Category colors',
    label: 'Category colors',
    data: [
      { key: 'category', label: 'Category', type: ESetting.TEXT_FIELD },
      { key: 'color', label: 'Color', type: ESetting.COLOR_PICKER },
    ],
  },
];

const displaySettings: TSetting[] = [
  {
    key: 'showCategoryChips',
    label: 'Show category chips',
    type: ESetting.CHECKBOX,
    defaultValue: true,
  },
  {
    key: 'showDueDates',
    label: 'Show due dates',
    type: ESetting.CHECKBOX,
    defaultValue: true,
  },
];

const commonSettings: TSetting[] = [
  ...dataSettings,
  ...columnSettings,
  ...designSettings,
  ...displaySettings,
];

const Settings: TSetting[] = [
  {
    key: 'data',
    label: 'Data',
    type: ESetting.GROUP,
    components: dataSettings,
  },
  {
    key: 'columns',
    label: 'Columns',
    type: ESetting.GROUP,
    components: columnSettings,
  },
  {
    key: 'design',
    label: 'Design',
    type: ESetting.GROUP,
    components: designSettings,
  },
  {
    key: 'display',
    label: 'Display',
    type: ESetting.GROUP,
    components: displaySettings,
  },
  ...load(DEFAULT_SETTINGS).filter(
    'style.overflow',
    'display',
    'style.boxShadow',
    'style.textShadow',
    'style.textAlign',
    'style.textDecorationLine',
    'style.fontStyle',
    'style.textTransform',
  ),
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter(
    'style.overflow',
    'display',
    'style.boxShadow',
    'style.textShadow',
    'style.textAlign',
    'style.textDecorationLine',
    'style.fontStyle',
    'style.textTransform',
  ),
];

export default Settings;
