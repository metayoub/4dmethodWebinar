import { EComponentKind, Settings, type T4DComponentConfig } from '@ws-ui/webform-editor';
import { MdOutlineEditNote } from 'react-icons/md';

import RichText_2Settings, { BasicSettings } from './RichText_2.settings';

export default {
  craft: {
    displayName: 'Rich Text 2',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(RichText_2Settings, BasicSettings),
    },
    sanityCheck: {
      keys: [{ name: 'datasource', require: true, isDatasource: true }],
    },
    requiredFields: { keys: ['datasource'], all: false },
  },
  info: {
    displayName: 'Rich Text 2',
    exposed: true,
    icon: MdOutlineEditNote,
    events: [
      { label: 'On Change', value: 'onChange' },
      { label: 'On Focus', value: 'onFocus' },
      { label: 'On Blur', value: 'onBlur' },
    ],
    datasources: {
      accept: ['string'],
    },
  },
  defaultProps: {
    placeholder: 'Enter text...',
    readOnly: false,
    minHeight: 180,
    style: {
      width: '100%',
      minHeight: '180px',
    },
  },
} as T4DComponentConfig<IRichText_2Props>;

export interface IRichText_2Props extends webforms.ComponentProps {
  /** Text shown while the bound datasource holds an empty string. */
  placeholder?: string;
  readOnly?: boolean;
  minHeight?: number;
  onChange?: (payload: { value: string }) => void;
  onFocus?: (payload: Record<string, never>) => void;
  onBlur?: (payload: { value: string }) => void;
}
