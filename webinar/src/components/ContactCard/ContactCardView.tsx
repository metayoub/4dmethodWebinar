import cn from 'classnames';
import QRCode from 'qrcode';
import { type CSSProperties, type FC, useCallback, useEffect, useMemo, useState } from 'react';

import styles from './ContactCard.module.css';
import type { ContactFields } from './ContactCard.types';
import { buildVCard, downloadVCard, initialsFromName } from './ContactCard.utils';

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

const ContactCardView: FC<ContactCardViewProps> = ({
  contact,
  accentColor = '#0F766E',
  surfaceColor = '#FFFFFF',
  textColor = '#1C1917',
  mutedColor = '#78716C',
  cornerRadius = 20,
  className,
  interactive = true,
}) => {
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [photoFailed, setPhotoFailed] = useState(false);
  const [loadedPhoto, setLoadedPhoto] = useState(contact.photo);

  if (contact.photo !== loadedPhoto) {
    setLoadedPhoto(contact.photo);
    setPhotoFailed(false);
  }

  const hasIdentity = Boolean(
    contact.name ||
      contact.company ||
      contact.jobTitle ||
      contact.email ||
      contact.phone ||
      contact.address,
  );

  const vcard = useMemo(() => buildVCard(contact), [contact]);

  useEffect(() => {
    let cancelled = false;

    if (!hasIdentity) {
      setQrDataUrl('');
      return;
    }

    void QRCode.toDataURL(vcard, {
      errorCorrectionLevel: 'M',
      margin: 1,
      width: 224,
      color: {
        dark: textColor,
        light: '#FFFFFFFF',
      },
    })
      .then((url) => {
        if (!cancelled) setQrDataUrl(url);
      })
      .catch(() => {
        if (!cancelled) setQrDataUrl('');
      });

    return () => {
      cancelled = true;
    };
  }, [vcard, hasIdentity, textColor]);

  const roleLine = useMemo(() => {
    if (contact.jobTitle && contact.company) return `${contact.jobTitle} · ${contact.company}`;
    return contact.jobTitle || contact.company || '';
  }, [contact.jobTitle, contact.company]);

  const handleDownload = useCallback(() => {
    if (!interactive || !hasIdentity) return;
    downloadVCard(contact);
  }, [contact, hasIdentity, interactive]);

  const cssVars = {
    '--cc-accent': accentColor,
    '--cc-surface': surfaceColor,
    '--cc-text': textColor,
    '--cc-muted': mutedColor,
    '--cc-radius': `${cornerRadius}px`,
  } as CSSProperties;

  if (!hasIdentity) {
    return (
      <div className={cn(styles.root, className)} style={cssVars}>
        <div className={styles.empty}>Bind a contact entity to preview the card.</div>
      </div>
    );
  }

  const showPhoto = Boolean(contact.photo) && !photoFailed;
  const initials = initialsFromName(contact.name || contact.email || 'C');

  return (
    <div className={cn(styles.root, className)} style={cssVars}>
      <article className={styles.card} aria-label={contact.name || 'Contact card'}>
        <div className={styles.main}>
          <div className={styles.identity}>
            {showPhoto ? (
              <img
                className={styles.avatar}
                src={contact.photo}
                alt={contact.name ? `${contact.name} photo` : 'Contact photo'}
                onError={() => setPhotoFailed(true)}
              />
            ) : (
              <div className={cn(styles.avatar, styles.avatarFallback)} aria-hidden="true">
                {initials}
              </div>
            )}
            <div className={styles.who}>
              {contact.name ? <h2 className={styles.name}>{contact.name}</h2> : null}
              {roleLine ? <p className={styles.role}>{roleLine}</p> : null}
            </div>
          </div>

          <ul className={styles.details}>
            {contact.email ? (
              <li className={styles.detail}>
                <span className={styles.detailLabel}>Email</span>
                <p className={styles.detailValue}>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              </li>
            ) : null}
            {contact.phone ? (
              <li className={styles.detail}>
                <span className={styles.detailLabel}>Phone</span>
                <p className={styles.detailValue}>
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
                </p>
              </li>
            ) : null}
            {contact.address ? (
              <li className={styles.detail}>
                <span className={styles.detailLabel}>Address</span>
                <p className={styles.detailValue}>{contact.address}</p>
              </li>
            ) : null}
          </ul>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.downloadBtn}
              onClick={handleDownload}
              disabled={!interactive || !hasIdentity}
            >
              Add to Contacts
            </button>
          </div>
        </div>

        <aside className={styles.qrPanel} aria-label="vCard QR code">
          {qrDataUrl ? (
            <img className={styles.qrImage} src={qrDataUrl} alt="QR code with contact vCard" />
          ) : (
            <div className={styles.qrImage} aria-hidden="true" />
          )}
          <p className={styles.qrCaption}>Scan vCard</p>
        </aside>
      </article>
    </div>
  );
};

export default ContactCardView;
