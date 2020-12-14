<template>
  <div
    ref="messageContainer"
    class="p-4"
    style="height: 500px; overflow-y: auto;"
  >
    <transition-group name="slide-fade">
      <MessageBubble
        v-for="conversation in conversations"
        :key="conversation.time"
        :is-from-self="conversation.from === CONTACT_CODE_VUE"
        :title="conversation.from"
        :message="conversation.message"
        :time="conversation.time"
      />
    </transition-group>
  </div>
</template>

<script>
import { CONTACT_CODE_VUE } from '../../helpers/contacts';
import { getContactConversations } from '../../helpers/messages';
import { scrollElementToBottom } from '../../helpers/element';
import MessageBubble from './MessageBubble';

export default {
  components: {
    MessageBubble,
  },
  props: {
    to: {
      type: String,
      required: true,
    },
    messages: {
      type: Array,
      required: true,
    },
  },
  computed: {
    CONTACT_CODE_VUE: () => CONTACT_CODE_VUE,
    conversations() {
      return getContactConversations(this.messages, CONTACT_CODE_VUE, this.to);
    },
  },
  watch: {
    messages() {
      this.scrollToBottom();
    },
  },
  mounted() {
    this.scrollToBottom();
  },
  methods: {
    onClickBack() {
      this.$emit('back');
    },
    scrollToBottom() {
      this.$nextTick(() => {
        scrollElementToBottom(this.$refs.messageContainer);
      });
    },
  },
}
</script>
