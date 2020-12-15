<script>
import { createEventDispatcher } from 'svelte';
import { CONTACT_IMAGE_SRC_SVELTE, CONTACT_NAME_SVELTE } from '../../helpers/contacts';

export let activeContact = {};

const dispatch = createEventDispatcher();
</script>

<header class="card-image has-background-danger has-text-white p-5 is-size-4">
  <figure class="image is-32x32 is-pulled-right">
    <img
      src={activeContact.img || CONTACT_IMAGE_SRC_SVELTE}
      alt={CONTACT_NAME_SVELTE}
      class="is-rounded has-background-white"
    />
  </figure>
  {#if activeContact.code}
    <span
      class="icon is-clickable"
      on:click={() => dispatch('back')}
    >
      <i class="fas fa-chevron-left" />
    </span>
  {/if}
  <span>{ activeContact.name || CONTACT_NAME_SVELTE }</span>
</header>
