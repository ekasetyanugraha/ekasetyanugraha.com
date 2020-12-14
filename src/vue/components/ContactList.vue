<template>
  <div>
    <ContactListItem
      v-for="contact in contacts"
      :key="contact.name"
      :contact="contact"
      :messages="messages"
      @click.native="onClickContact(contact)"
    />
  </div>
</template>

<script>
import { getMyContacts, CONTACT_CODE_VUE } from '../../helpers/contacts';
import ContactListItem from './ContactListItem';

export default {
  components: {
    ContactListItem,
  },
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    contacts: getMyContacts(CONTACT_CODE_VUE),
  }),
  methods: {
    onClickContact(contact) {
      this.$emit('click', contact);
    },
  },
}
</script>
