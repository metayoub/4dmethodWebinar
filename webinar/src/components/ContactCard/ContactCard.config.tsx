import {
  EComponentKind,
  Settings,
  splitDatasourceID,
  type T4DComponentConfig,
  type T4DComponentDatasourceDeclaration,
} from '@ws-ui/webform-editor';
import { MdOutlineContactPage } from 'react-icons/md';

import ContactCardSettings, { BasicSettings } from './ContactCard.settings';
import type { ContactAttrKeys } from './ContactCard.types';
import { DEFAULT_ATTRS } from './ContactCard.types';

export default {
  craft: {
    displayName: 'Contact Card',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(ContactCardSettings, BasicSettings),
    },
    sanityCheck: {
      keys: [{ name: 'datasource', require: true, isDatasource: true }],
    },
    requiredFields: { keys: ['datasource'], all: false },
  },
  info: {
    displayName: 'Contact Card',
    exposed: true,
    icon: MdOutlineContactPage,
    events: [],
    datasources: {
      accept: ['entity', 'object'],
      declarations: (props: IContactCardProps) => {
        const datasource = props.datasource?.trim() ?? '';
        const declarations: T4DComponentDatasourceDeclaration[] = [{ path: datasource }];
        const { id: ds, namespace } = splitDatasourceID(datasource) || {};
        if (!ds) return declarations;

        const withNs = (path: string) => (namespace ? `${namespace}:${path}` : path);
        const attrs = [
          props.nameAttr,
          props.companyAttr,
          props.jobTitleAttr,
          props.emailAttr,
          props.phoneAttr,
          props.addressAttr,
          props.photoAttr,
        ]
          .map((attr) => attr?.trim())
          .filter((attr): attr is string => !!attr);

        // Always declare defaults so Studio fetches fields even before settings are customized
        const unique = new Set([...Object.values(DEFAULT_ATTRS), ...attrs]);

        unique.forEach((attr) => {
          declarations.push({ path: withNs(`${ds}.${attr}`) });
        });

        return declarations;
      },
    },
  },
  defaultProps: {
    ...DEFAULT_ATTRS,
    accentColor: '#0F766E',
    surfaceColor: '#FFFFFF',
    textColor: '#1C1917',
    mutedColor: '#78716C',
    cornerRadius: 20,
    style: {
      width: '100%',
      minHeight: '220px',
    },
  },
} as T4DComponentConfig<IContactCardProps>;

export interface IContactCardProps extends webforms.ComponentProps, Partial<ContactAttrKeys> {
  accentColor?: string;
  surfaceColor?: string;
  textColor?: string;
  mutedColor?: string;
  cornerRadius?: number;
}
