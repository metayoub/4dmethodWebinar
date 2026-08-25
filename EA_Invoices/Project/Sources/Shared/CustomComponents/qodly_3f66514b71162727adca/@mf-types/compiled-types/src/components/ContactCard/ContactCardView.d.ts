import { type FC } from 'react';
import type { ContactFields } from './ContactCard.types';
export interface ContactCardViewProps {
    contact: ContactFields;
    accentColor?: string;
    surfaceColor?: string;
    textColor?: string;
    mutedColor?: string;
    cornerRadius?: number;
    className?: string;
    /** When false, download is non-interactive (editor canvas). */
    interactive?: boolean;
}
declare const ContactCardView: FC<ContactCardViewProps>;
export default ContactCardView;
