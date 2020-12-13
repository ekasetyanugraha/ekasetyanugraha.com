<template>
  <div class="p-4 is-clickable" style="border-bottom: 1px solid hsl(0, 0%, 86%);">
    <div class="media">
      <div class="media-left">
        <span class="icon">
          <i :class="iconClass" />
        </span>
      </div>
      <div class="media-content">
        <div>
          {{ name }}
          <span
            v-if="lastMessageTime"
            class="is-pulled-right has-text-grey-light is-size-7"
          >
            {{ lastMessageTime | toShortTime }}
          </span>
        </div>
        <div class="has-text-grey-light">
          <span v-if="lastMessageFromSelf">You: </span>{{ lastMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toShortTime } from '../../helpers/date';

export default {
  filters:{
    toShortTime,
  },
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastMessage: {
      type: String,
      default: '',
    },
    lastMessageTime: {
      type: Number,
      default: null,
    },
    lastMessageFromSelf: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
