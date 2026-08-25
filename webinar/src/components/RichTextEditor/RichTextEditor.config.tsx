import { EComponentKind, Settings, type T4DComponentConfig } from '@ws-ui/webform-editor';
import { MdOutlineTextSnippet } from 'react-icons/md';

import RichTextEditorSettings, { BasicSettings } from './RichTextEditor.settings';

export default {
  craft: {
    displayName: 'Rich Text Editor',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(RichTextEditorSettings, BasicSettings),
    },
    sanityCheck: {
      keys: [{ name: 'datasource', require: true, isDatasource: true }],
    },
    requiredFields: { keys: ['datasource'], all: false },
  },
  info: {
    displayName: 'Rich Text Editor',
    exposed: true,
    icon: MdOutlineTextSnippet,
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
    minHeight: 160,
    style: {
      width: '100%',
      minHeight: '160px',
    },
  },
} as T4DComponentConfig<IRichTextEditorProps>;

export interface IRichTextEditorProps extends webforms.ComponentProps {
  placeholder?: string;
  readOnly?: boolean;
  minHeight?: number;
  onChange?: (payload: { value: string }) => void;
  onFocus?: (payload: Record<string, never>) => void;
  onBlur?: (payload: { value: string }) => void;
}
