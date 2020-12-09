<template>
  <div class="card">
    <TheHeader />

    <section class="card-content p-0" style="min-height: 500px;">
      <button
        v-for="contact in contacts"
        :key="contact.name"
        class="button button-chat is-fullwidth py-5"
        @click.prevent="onClickContact(contact)"
      >
        {{ contact.name }} ({{ messages.filter(message => message.from === contact.code && message.to === 'vue').length }})
      </button>
    </section>

    <footer v-if="activeContact" class="card-footer p-3">
      <FormMessage :to="activeContact" />
    </footer>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import FormMessage from './components/FormMessage';
import storeMessages from '../store/messages';

export default {
  components: {
    TheHeader,
    FormMessage,
  },
  data: () => ({
    activeContact: '',
    messages: [],
    contacts: [
      {
        name: 'React',
        code: 'react',
      },
      {
        name: 'Svelte',
        code: 'svelte',
      },
    ],
  }),
  created() {
    storeMessages.subscribe(this.onChangeMessages);
  },
  methods: {
    onClickContact(contact) {
      this.activeContact = contact.code;
    },
    onChangeMessages() {
      this.messages = storeMessages.getState();
    },
  },
}
</script>

<style scoped>
.button-chat {
  border-top: 0;
  border-left: 0;
  border-right: 0;
}
</style>
