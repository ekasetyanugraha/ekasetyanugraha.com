<template>
  <div
    :class="{
      'level-right': isFromSelf,
    }"
  >
    <div
      :class="{
        'has-background-primary': isFromSelf,
      }"
      class="box is-inline-block p-2 mb-2"
      style="min-width: 100px; max-width: 300px;"
    >
      <div
        v-if="!isFromSelf"
        class="has-text-primary has-text-weight-bold is-capitalized"
      >
        {{ title }}
      </div>
      <div
        :class="{
          'has-text-white': isFromSelf,
        }"
      >
        {{ message }}
      </div>
      <div
        :class="{
          'has-text-grey-light': !isFromSelf,
          'has-text-white-ter': isFromSelf,
        }"
        class="is-size-7"
      >
        {{ time | toShortTime }}
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
    isFromSelf: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
  },
}
</script>
