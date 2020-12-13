export const CONTACT_NAME_VUE = 'Vue';
export const CONTACT_NAME_REACT = 'React';
export const CONTACT_NAME_SVELTE = 'Svelte';

export const CONTACT_CODE_VUE = 'vue';
export const CONTACT_CODE_REACT = 'react';
export const CONTACT_CODE_SVELTE = 'svelte';

const CONTACT_ICON_CLASS_VUE = 'fab fa-vuejs';
const CONTACT_ICON_CLASS_REACT = 'fab fa-react';
const CONTACT_ICON_CLASS_SVELTE = 'fab fa-stripe-s';

export const contacts = [
  {
    name: CONTACT_NAME_VUE,
    code: CONTACT_CODE_VUE,
    iconClass: CONTACT_ICON_CLASS_VUE,
  },
  {
    name: CONTACT_NAME_REACT,
    code: CONTACT_CODE_REACT,
    iconClass: CONTACT_ICON_CLASS_REACT,
  },
  {
    name: CONTACT_NAME_SVELTE,
    code: CONTACT_CODE_SVELTE,
    iconClass: CONTACT_ICON_CLASS_SVELTE,
  },
];

export const getMyContacts = selfCode => contacts.filter(contact => contact.code !== selfCode);
