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

export const EMPTY_CONTACT: ContactFields = {
  name: '',
  company: '',
  jobTitle: '',
  email: '',
  phone: '',
  address: '',
  photo: '',
};

export const DEFAULT_ATTRS: ContactAttrKeys = {
  nameAttr: 'name',
  companyAttr: 'company',
  jobTitleAttr: 'jobTitle',
  emailAttr: 'email',
  phoneAttr: 'phone',
  addressAttr: 'address',
  photoAttr: 'photo',
};
