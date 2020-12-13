<template>
  <form class="is-flex-grow-1" @submit.prevent="onSubmit">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          v-model.trim="message"
          placeholder="Put your message here.."
          class="input is-rounded"
          type="text"
          autofocus
        >
      </div>
      <div class="control">
        <button class="button is-primary is-rounded">
          <span class="icon is-small">
            <i class="fas fa-comment"></i>
          </span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { sendMessage } from '../../store/messages';

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    message: '',
  }),
  methods: {
    onSubmit() {
      if (!this.message) return;

      sendMessage({
        from: 'vue',
        to: this.to,
        message: this.message,
      });

      this.message = '';
    },
  },
}
</script>
