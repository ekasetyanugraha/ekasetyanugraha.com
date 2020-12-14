export const CONTACT_NAME_VUE = 'Vue';
export const CONTACT_NAME_REACT = 'React';
export const CONTACT_NAME_SVELTE = 'Svelte';

export const CONTACT_CODE_VUE = 'vue';
export const CONTACT_CODE_REACT = 'react';
export const CONTACT_CODE_SVELTE = 'svelte';

export const CONTACT_ICON_CLASS_VUE = 'fab fa-vuejs';
export const CONTACT_ICON_CLASS_REACT = 'fab fa-react';
export const CONTACT_ICON_CLASS_SVELTE = 'fab fa-stripe-s';

export const CONTACT_IMAGE_SRC_VUE = 'https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png';
export const CONTACT_IMAGE_SRC_REACT = 'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png';
export const CONTACT_IMAGE_SRC_SVELTE = 'https://seeklogo.com/images/S/svelte-logo-E3497608CB-seeklogo.com.png';

export const contacts = [
  {
    name: CONTACT_NAME_VUE,
    code: CONTACT_CODE_VUE,
    img: CONTACT_IMAGE_SRC_VUE,
    iconClass: CONTACT_ICON_CLASS_VUE,
  },
  {
    name: CONTACT_NAME_REACT,
    code: CONTACT_CODE_REACT,
    img: CONTACT_IMAGE_SRC_REACT,
    iconClass: CONTACT_ICON_CLASS_REACT,
  },
  {
    name: CONTACT_NAME_SVELTE,
    code: CONTACT_CODE_SVELTE,
    img: CONTACT_IMAGE_SRC_SVELTE,
    iconClass: CONTACT_ICON_CLASS_SVELTE,
  },
];

export const getMyContacts = selfCode => contacts.filter(contact => contact.code !== selfCode);
