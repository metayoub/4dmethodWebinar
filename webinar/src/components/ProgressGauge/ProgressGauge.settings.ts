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

const gaugeSettings: TSetting[] = [
  {
    key: 'readOnly',
    label: 'Read only',
    type: ESetting.CHECKBOX,
    defaultValue: false,
  },
  {
    key: 'strokeWidth',
    label: 'Stroke width',
    type: ESetting.NUMBER_FIELD,
    defaultValue: 14,
  },
];

const commonSettings: TSetting[] = [...dataSettings, ...gaugeSettings];

const Settings: TSetting[] = [
  {
    key: 'data',
    label: 'Data',
    type: ESetting.GROUP,
    components: dataSettings,
  },
  {
    key: 'gauge',
    label: 'Gauge',
    type: ESetting.GROUP,
    components: gaugeSettings,
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
