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
    label: 'Contact',
    type: ESetting.DS_AUTO_SUGGEST,
  },
  {
    key: 'serverSideRef',
    label: 'Server Side',
    type: ESetting.TEXT_FIELD,
    validateOnEnter: true,
  },
];

const fieldSettings: TSetting[] = [
  {
    key: 'nameAttr',
    label: 'Name attribute',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'name',
  },
  {
    key: 'companyAttr',
    label: 'Company attribute',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'company',
  },
  {
    key: 'jobTitleAttr',
    label: 'Job title attribute',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'jobTitle',
  },
  {
    key: 'emailAttr',
    label: 'Email attribute',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'email',
  },
  {
    key: 'phoneAttr',
    label: 'Phone attribute',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'phone',
  },
  {
    key: 'addressAttr',
    label: 'Address attribute',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'address',
  },
  {
    key: 'photoAttr',
    label: 'Photo attribute',
    type: ESetting.TEXT_FIELD,
    defaultValue: 'photo',
  },
];

const designSettings: TSetting[] = [
  {
    key: 'accentColor',
    label: 'Accent color',
    type: ESetting.COLOR_PICKER,
    defaultValue: '#0F766E',
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
    defaultValue: '#1C1917',
  },
  {
    key: 'mutedColor',
    label: 'Muted color',
    type: ESetting.COLOR_PICKER,
    defaultValue: '#78716C',
  },
  {
    key: 'cornerRadius',
    label: 'Corner radius (px)',
    type: ESetting.NUMBER_FIELD,
    defaultValue: 20,
  },
];

const commonSettings: TSetting[] = [...dataSettings, ...fieldSettings, ...designSettings];

const Settings: TSetting[] = [
  {
    key: 'data',
    label: 'Data',
    type: ESetting.GROUP,
    components: dataSettings,
  },
  {
    key: 'fields',
    label: 'Field mapping',
    type: ESetting.GROUP,
    components: fieldSettings,
  },
  {
    key: 'design',
    label: 'Design',
    type: ESetting.GROUP,
    components: designSettings,
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
