import { EComponentKind, Settings, type T4DComponentConfig } from '@ws-ui/webform-editor';
import { MdOutlineDonutLarge } from 'react-icons/md';

import ProgressGaugeSettings, { BasicSettings } from './ProgressGauge.settings';

export default {
  craft: {
    displayName: 'Progress Gauge',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(ProgressGaugeSettings, BasicSettings),
    },
    sanityCheck: {
      keys: [{ name: 'datasource', require: true, isDatasource: true }],
    },
    requiredFields: { keys: ['datasource'], all: false },
  },
  info: {
    displayName: 'Progress Gauge',
    exposed: true,
    icon: MdOutlineDonutLarge,
    events: [{ label: 'On Value Change', value: 'onValueChange' }],
    datasources: {
      accept: ['number'],
    },
  },
  defaultProps: {
    readOnly: false,
    strokeWidth: 14,
    style: {
      width: '160px',
      height: '160px',
    },
  },
} as T4DComponentConfig<IProgressGaugeProps>;

export interface IProgressGaugeProps extends webforms.ComponentProps {
  /** Bound via datasource (e.g. Task.Percent); kept for typing clarity. */
  value?: number;
  readOnly?: boolean;
  strokeWidth?: number;
  onValueChange?: (payload: { value: number }) => void;
}
