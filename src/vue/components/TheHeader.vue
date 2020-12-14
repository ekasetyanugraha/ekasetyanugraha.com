<template>
  <header class="card-image has-background-primary has-text-white p-5 is-size-4">
    <figure class="image is-32x32 is-pulled-right">
      <img :src="activeContact.img || CONTACT_IMAGE_SRC_VUE" class="is-rounded has-background-white">
    </figure>
    <span
      v-if="activeContact.code"
      class="icon is-clickable"
      @click="onClickBack"
    >
      <i class="fas fa-chevron-left" />
    </span>
    <span>{{ activeContact.name || CONTACT_NAME_VUE }}</span>
  </header>
</template>

<script>
import { CONTACT_NAME_VUE, CONTACT_IMAGE_SRC_VUE } from '../../helpers/contacts';

export default {
  props: {
    activeContact: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    CONTACT_NAME_VUE: () => CONTACT_NAME_VUE,
    CONTACT_IMAGE_SRC_VUE: () => CONTACT_IMAGE_SRC_VUE,
  },
  methods: {
    onClickBack() {
      this.$emit('back');
    },
  },
}
</script>
