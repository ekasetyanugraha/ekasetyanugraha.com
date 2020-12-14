<template>
  <div class="p-4 is-clickable" style="border-bottom: 1px solid hsl(0, 0%, 86%);">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="contact.img" class="is-rounded">
        </figure>
      </div>
      <div class="media-content">
        <div>
          {{ contact.name }}
          <span
            v-if="lastMessageTime"
            class="is-pulled-right has-text-grey-light is-size-7"
          >
            {{ lastMessageTime | toShortTime }}
          </span>
        </div>
        <div class="has-text-grey-light is-text-ellipsis">
          <span v-if="lastMessageFromSelf">You: </span>{{ lastMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CONTACT_CODE_VUE } from '../../helpers/contacts';
import { toShortTime } from '../../helpers/date';
import { getContactConversationsLastMessage } from '../../helpers/messages';

export default {
  filters:{
    toShortTime,
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
    messages: {
      type: Array,
      required: true,
    },
  },
  computed: {
    lastConversation() {
      return getContactConversationsLastMessage(this.messages, CONTACT_CODE_VUE, this.contact.code);
    },
    lastMessage() {
      return this.lastConversation.message;
    },
    lastMessageTime() {
      return this.lastConversation.time;
    },
    lastMessageFromSelf() {
      return this.lastConversation.from === CONTACT_CODE_VUE;
    },
  },
}
</script>
