<template>
  <div class="card">
    <TheHeader />

    <div v-if="activeContact.code">
      <button
        class="button is-fullwidth level-left"
        @click="onClickBack"
      >
        <span class="icon is-small">
          <i class="fas fa-chevron-left" />
        </span>
        <span>Back</span>
      </button>
    </div>

    <section
      ref="messageContainer"
      class="card-content p-0"
      style="min-height: 500px; max-height: 500px; overflow-y: auto;"
    >
      <div v-if="activeContact.code" class="p-4">
        <transition-group name="slide-fade">
          <MessageBubble
            v-for="message in getContactConversations(activeContact)"
            :key="message.time"
            :is-from-self="message.from === CONTACT_CODE_VUE"
            :title="message.from"
            :message="message.message"
            :time="message.time"
          />
        </transition-group>
      </div>

      <div v-else>
        <ContactListItem
          v-for="contact in contacts"
          :key="contact.name"
          :icon-class="contact.iconClass"
          :name="contact.name"
          :last-message="getContactConversationsLastMessage(contact).message || ''"
          :last-message-time="getContactConversationsLastMessage(contact).time || null"
          :last-message-from-self="getContactConversationsLastMessage(contact).from === CONTACT_CODE_VUE"
          @click.native="onClickContact(contact)"
        />
      </div>
    </section>

    <footer v-if="!!activeContact.code" class="card-footer p-3">
      <FormMessage :to="activeContact.code" />
    </footer>
  </div>
</template>

<script>
import { toShortTime } from '../helpers/date';
import { getMyContacts, CONTACT_CODE_VUE } from '../helpers/contacts';
import { scrollElementToBottom } from '../helpers/element';
import { getContactConversations, getContactConversationsLastMessage } from '../helpers/messages';
import TheHeader from './components/TheHeader';
import ContactListItem from './components/ContactListItem';
import MessageBubble from './components/MessageBubble';
import FormMessage from './components/FormMessage';
import storeMessages from '../store/messages';

export default {
  components: {
    TheHeader,
    ContactListItem,
    MessageBubble,
    FormMessage,
  },
  data: () => ({
    activeContact: {},
    messages: [],
    contacts: getMyContacts(CONTACT_CODE_VUE),
  }),
  computed: {
    CONTACT_CODE_VUE: () => CONTACT_CODE_VUE,
  },
  watch: {
    activeContact() {
      this.scrollToBottom();
    },
    messages() {
      this.scrollToBottom();
    },
  },
  created() {
    storeMessages.subscribe(this.onChangeMessages);
  },
  methods: {
    getContactConversations(contact) {
      return getContactConversations(this.messages, CONTACT_CODE_VUE, contact.code);
    },
    getContactConversationsLastMessage(contact) {
      return getContactConversationsLastMessage(this.messages, CONTACT_CODE_VUE, contact.code);
    },
    onClickContact(contact) {
      this.activeContact = contact;
    },
    onClickBack() {
      this.activeContact = {};
    },
    onChangeMessages() {
      this.messages = storeMessages.getState();
    },
    scrollToBottom() {
      this.$nextTick(() => {
        scrollElementToBottom(this.$refs.messageContainer);
      });
    },
  },
}
</script>
