import type { ContactAttrKeys, ContactFields } from './ContactCard.types';
import { DEFAULT_ATTRS, EMPTY_CONTACT } from './ContactCard.types';

/** Escape text for vCard 3.0 property values. */
export function sanitizeVCardValue(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,');
}

function asTrimmedString(value: unknown): string {
  if (value == null) return '';
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value).trim();
  return '';
}

/** Resolve Qodly picture / URL / deferred URI into a usable image src. */
export function resolvePhotoSrc(raw: unknown): string {
  if (raw == null) return '';

  if (typeof raw === 'string') {
    const s = raw.trim();
    if (!s) return '';
    if (
      s.startsWith('data:') ||
      s.startsWith('blob:') ||
      s.startsWith('http://') ||
      s.startsWith('https://') ||
      s.startsWith('/')
    ) {
      return s;
    }
    // Bare base64 payload
    if (/^[A-Za-z0-9+/=\s]+$/.test(s) && s.length > 64) {
      return `data:image/jpeg;base64,${s.replace(/\s/g, '')}`;
    }
    return s;
  }

  if (typeof raw === 'object') {
    const obj = raw as Record<string, unknown>;
    const deferred = obj.__deferred as { uri?: string } | undefined;
    if (deferred?.uri) return deferred.uri;

    if (typeof obj.uri === 'string') return obj.uri;
    if (typeof obj.url === 'string') return obj.url;
    if (typeof obj.src === 'string') return obj.src;
    if (typeof obj.data === 'string') return resolvePhotoSrc(obj.data);
  }

  return '';
}

function readAttr(entity: Record<string, unknown>, attr: string): unknown {
  if (!attr) return undefined;
  if (attr.includes('.')) {
    return attr.split('.').reduce<unknown>((acc, key) => {
      if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[key];
      return undefined;
    }, entity);
  }
  return entity[attr];
}

export function mergeAttrKeys(partial?: Partial<ContactAttrKeys>): ContactAttrKeys {
  return {
    nameAttr: partial?.nameAttr?.trim() || DEFAULT_ATTRS.nameAttr,
    companyAttr: partial?.companyAttr?.trim() || DEFAULT_ATTRS.companyAttr,
    jobTitleAttr: partial?.jobTitleAttr?.trim() || DEFAULT_ATTRS.jobTitleAttr,
    emailAttr: partial?.emailAttr?.trim() || DEFAULT_ATTRS.emailAttr,
    phoneAttr: partial?.phoneAttr?.trim() || DEFAULT_ATTRS.phoneAttr,
    addressAttr: partial?.addressAttr?.trim() || DEFAULT_ATTRS.addressAttr,
    photoAttr: partial?.photoAttr?.trim() || DEFAULT_ATTRS.photoAttr,
  };
}

export function extractContact(raw: unknown, attrKeys?: Partial<ContactAttrKeys>): ContactFields {
  if (!raw || typeof raw !== 'object') return { ...EMPTY_CONTACT };

  const entity = raw as Record<string, unknown>;
  const attrs = mergeAttrKeys(attrKeys);

  return {
    name: asTrimmedString(readAttr(entity, attrs.nameAttr)),
    company: asTrimmedString(readAttr(entity, attrs.companyAttr)),
    jobTitle: asTrimmedString(readAttr(entity, attrs.jobTitleAttr)),
    email: asTrimmedString(readAttr(entity, attrs.emailAttr)),
    phone: asTrimmedString(readAttr(entity, attrs.phoneAttr)),
    address: asTrimmedString(readAttr(entity, attrs.addressAttr)),
    photo: resolvePhotoSrc(readAttr(entity, attrs.photoAttr)),
  };
}

function splitName(fullName: string): { family: string; given: string } {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { family: '', given: '' };
  if (parts.length === 1) return { family: parts[0], given: '' };
  return { family: parts[parts.length - 1], given: parts.slice(0, -1).join(' ') };
}

/** Build a vCard 3.0 string from contact fields (empty properties omitted). */
export function buildVCard(contact: ContactFields): string {
  const lines: string[] = ['BEGIN:VCARD', 'VERSION:3.0'];

  if (contact.name) {
    const { family, given } = splitName(contact.name);
    lines.push(`FN:${sanitizeVCardValue(contact.name)}`);
    lines.push(`N:${sanitizeVCardValue(family)};${sanitizeVCardValue(given)};;;`);
  }

  if (contact.company) lines.push(`ORG:${sanitizeVCardValue(contact.company)}`);
  if (contact.jobTitle) lines.push(`TITLE:${sanitizeVCardValue(contact.jobTitle)}`);
  if (contact.email) lines.push(`EMAIL;TYPE=INTERNET:${sanitizeVCardValue(contact.email)}`);
  if (contact.phone) lines.push(`TEL;TYPE=CELL:${sanitizeVCardValue(contact.phone)}`);
  if (contact.address) {
    lines.push(`ADR;TYPE=WORK:;;${sanitizeVCardValue(contact.address)};;;;`);
  }

  if (contact.photo) {
    if (contact.photo.startsWith('data:')) {
      const match = /^data:([^;]+);base64,(.+)$/i.exec(contact.photo);
      if (match) {
        const mime = match[1].toLowerCase();
        const type = mime.includes('png') ? 'PNG' : mime.includes('gif') ? 'GIF' : 'JPEG';
        lines.push(`PHOTO;ENCODING=b;TYPE=${type}:${match[2].replace(/\s/g, '')}`);
      }
    } else {
      lines.push(`PHOTO;VALUE=URI:${sanitizeVCardValue(contact.photo)}`);
    }
  }

  lines.push('END:VCARD');
  return lines.join('\r\n');
}

export function contactFileName(contact: ContactFields): string {
  const base = (contact.name || contact.email || 'contact')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '_')
    .slice(0, 64);
  return `${base || 'contact'}.vcf`;
}

/** Trigger a browser download of a .vcf file and revoke the object URL afterward. */
export function downloadVCard(contact: ContactFields): void {
  const vcard = buildVCard(contact);
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = contactFileName(contact);
  anchor.rel = 'noopener';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  // Defer revoke so the browser can start the download
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ''}${parts[parts.length - 1][0] ?? ''}`.toUpperCase();
}

export const SAMPLE_CONTACT: ContactFields = {
  name: 'Alex Morgan',
  company: '4D Method',
  jobTitle: 'Product Designer',
  email: 'alex.morgan@example.com',
  phone: '+1 415 555 0199',
  address: '500 Howard St, San Francisco, CA',
  photo: '',
};
