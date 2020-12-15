<template>
  <div class="card">
    <TheHeader
      :active-contact="activeContact"
      @back="onClickBack"
    />

    <section
      class="card-content p-0"
      style="min-height: 500px; overflow: hidden;"
    >
      <transition
        name="slide-fade-horizontal"
        mode="out-in"
      >
        <ContactList
          v-if="!activeContact.code"
          :messages="messages"
          @click="onClickContact"
        />

        <ConversationWrapper
          v-else
          :to="activeContact.code"
          :messages="messages"
        />
      </transition>
    </section>

    <footer
      v-if="activeContact.code"
      class="card-footer p-3"
    >
      <FormMessage :to="activeContact.code" />
    </footer>
  </div>
</template>

<script>
import storeMessages from '../store/messages';
import TheHeader from './components/TheHeader';
import ContactList from './components/ContactList';
const ConversationWrapper = () => import(/* webpackChunkName: "component-vue-ConversationWrapper" */ './components/ConversationWrapper');
const FormMessage = () => import(/* webpackChunkName: "component-vue-FormMessage" */ './components/FormMessage');

export default {
  components: {
    TheHeader,
    ContactList,
    ConversationWrapper,
    FormMessage,
  },
  data: () => ({
    activeContact: {},
    messages: [],
  }),
  created() {
    storeMessages.subscribe(this.onChangeMessages);
  },
  methods: {
    onClickContact(contact) {
      this.activeContact = contact;
    },
    onClickBack() {
      this.activeContact = {};
    },
    onChangeMessages() {
      this.messages = storeMessages.getState();
    },
  },
}
</script>
