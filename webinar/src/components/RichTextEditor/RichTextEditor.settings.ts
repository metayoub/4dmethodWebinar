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
    label: 'Data Source',
    type: ESetting.DS_AUTO_SUGGEST,
  },
  {
    key: 'serverSideRef',
    label: 'Server Side',
    type: ESetting.TEXT_FIELD,
    validateOnEnter: true,
  },
];

const editorSettings: TSetting[] = [
  {
    key: 'placeholder',
    label: 'Placeholder',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'Enter text...',
  },
  {
    key: 'readOnly',
    label: 'Read only',
    type: ESetting.CHECKBOX,
    defaultValue: false,
  },
  {
    key: 'minHeight',
    label: 'Min height (px)',
    type: ESetting.NUMBER_FIELD,
    defaultValue: 160,
  },
];

const commonSettings: TSetting[] = [...dataSettings, ...editorSettings];

const Settings: TSetting[] = [
  {
    key: 'data',
    label: 'Data',
    type: ESetting.GROUP,
    components: dataSettings,
  },
  {
    key: 'editor',
    label: 'Editor',
    type: ESetting.GROUP,
    components: editorSettings,
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
