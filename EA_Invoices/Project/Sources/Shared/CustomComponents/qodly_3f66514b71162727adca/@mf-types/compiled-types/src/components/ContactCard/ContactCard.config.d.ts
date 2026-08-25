import { type T4DComponentConfig } from '@ws-ui/webform-editor';
import type { ContactAttrKeys } from './ContactCard.types';
declare const _default: T4DComponentConfig<IContactCardProps>;
export default _default;
export interface IContactCardProps extends webforms.ComponentProps, Partial<ContactAttrKeys> {
    accentColor?: string;
    surfaceColor?: string;
    textColor?: string;
    mutedColor?: string;
    cornerRadius?: number;
}
