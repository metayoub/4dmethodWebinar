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
    label: 'Invoice or lines',
    type: ESetting.DS_AUTO_SUGGEST,
  },
  {
    key: 'linesRelation',
    label: 'Lines relation (when bound to Invoice)',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'Lines_Fm_Invoices',
  },
  {
    key: 'serverSideRef',
    label: 'Server Side',
    type: ESetting.TEXT_FIELD,
    validateOnEnter: true,
  },
];

const formattingSettings: TSetting[] = [
  {
    key: 'currency',
    label: 'Currency',
    type: ESetting.TEXT_FIELD,
    defaultValue: '',
  },
  {
    key: 'locale',
    label: 'Locale',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'fr-FR',
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
    defaultValue: '#FFFFFF',
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
    defaultValue: 16,
  },
  {
    key: 'density',
    label: 'Density',
    type: ESetting.SELECT,
    defaultValue: 'comfortable',
    options: [
      { value: 'comfortable', label: 'Comfortable' },
      { value: 'compact', label: 'Compact' },
    ],
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

const sectionSettings: TSetting[] = [
  {
    key: 'showSummary',
    label: 'Show summary',
    type: ESetting.CHECKBOX,
    defaultValue: true,
  },
  {
    key: 'showChart',
    label: 'Show chart',
    type: ESetting.CHECKBOX,
    defaultValue: true,
  },
  {
    key: 'showQuantityRing',
    label: 'Show quantity ring',
    type: ESetting.CHECKBOX,
    defaultValue: true,
  },
  {
    key: 'showCategoryChips',
    label: 'Show category chips',
    type: ESetting.CHECKBOX,
    defaultValue: true,
  },
];

const commonSettings: TSetting[] = [
  ...dataSettings,
  ...formattingSettings,
  ...designSettings,
  ...sectionSettings,
];

const Settings: TSetting[] = [
  {
    key: 'data',
    label: 'Data',
    type: ESetting.GROUP,
    components: dataSettings,
  },
  {
    key: 'formatting',
    label: 'Formatting',
    type: ESetting.GROUP,
    components: formattingSettings,
  },
  {
    key: 'design',
    label: 'Design',
    type: ESetting.GROUP,
    components: designSettings,
  },
  {
    key: 'sections',
    label: 'Sections',
    type: ESetting.GROUP,
    components: sectionSettings,
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
