<script>
import { createEventDispatcher } from 'svelte';
import { getMyContacts, CONTACT_CODE_SVELTE } from '../../helpers/contacts';
import ContactListItem from './ContactListItem';

export let messages = [];

const dispatch = createEventDispatcher();

const contacts = getMyContacts(CONTACT_CODE_SVELTE);
</script>

{#each contacts as contact}
  <ContactListItem
    {contact}
    {messages}
    on:click={() => dispatch('click', contact)}
  />
{/each}
