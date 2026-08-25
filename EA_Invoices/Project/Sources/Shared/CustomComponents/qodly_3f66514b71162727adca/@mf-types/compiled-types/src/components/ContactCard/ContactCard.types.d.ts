export interface ContactFields {
    name: string;
    company: string;
    jobTitle: string;
    email: string;
    phone: string;
    address: string;
    photo: string;
}
export interface ContactAttrKeys {
    nameAttr: string;
    companyAttr: string;
    jobTitleAttr: string;
    emailAttr: string;
    phoneAttr: string;
    addressAttr: string;
    photoAttr: string;
}
export declare const EMPTY_CONTACT: ContactFields;
export declare const DEFAULT_ATTRS: ContactAttrKeys;
