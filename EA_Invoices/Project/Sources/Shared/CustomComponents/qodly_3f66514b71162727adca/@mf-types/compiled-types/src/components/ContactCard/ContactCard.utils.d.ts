import type { ContactAttrKeys, ContactFields } from './ContactCard.types';
/** Escape text for vCard 3.0 property values. */
export declare function sanitizeVCardValue(value: string): string;
/** Resolve Qodly picture / URL / deferred URI into a usable image src. */
export declare function resolvePhotoSrc(raw: unknown): string;
export declare function mergeAttrKeys(partial?: Partial<ContactAttrKeys>): ContactAttrKeys;
export declare function extractContact(raw: unknown, attrKeys?: Partial<ContactAttrKeys>): ContactFields;
/** Build a vCard 3.0 string from contact fields (empty properties omitted). */
export declare function buildVCard(contact: ContactFields): string;
export declare function contactFileName(contact: ContactFields): string;
/** Trigger a browser download of a .vcf file and revoke the object URL afterward. */
export declare function downloadVCard(contact: ContactFields): void;
export declare function initialsFromName(name: string): string;
export declare const SAMPLE_CONTACT: ContactFields;
