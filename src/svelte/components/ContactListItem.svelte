<script>
import { createEventDispatcher } from 'svelte';
import { CONTACT_CODE_SVELTE } from '../../helpers/contacts';
import { toShortTime } from '../../helpers/date';
import { getContactConversationsLastMessage } from '../../helpers/messages';

export let contact = {};
export let messages = [];

const dispatch = createEventDispatcher();

$: lastConversation = getContactConversationsLastMessage(messages, CONTACT_CODE_SVELTE, contact.code);
$: lastMessage = lastConversation.content || '';
$: lastMessageTime = lastConversation.time;
$: lastMessageFromSelf = lastConversation.from === CONTACT_CODE_SVELTE;
</script>

<div
  class="p-4 is-clickable"
  style="border-bottom: 1px solid hsl(0, 0%, 86%);"
  on:click={() => dispatch('click')}
>
  <div class="media">
    <div class="media-left">
      <figure class="image is-32x32">
        <img src={contact.img} alt={contact.name} class="is-rounded">
      </figure>
    </div>
    <div class="media-content">
      <div>
        { contact.name }
        {#if lastMessageTime}
          <span class="is-pulled-right has-text-grey-light is-size-7">
            { toShortTime(lastMessageTime) }
          </span>
        {/if}
      </div>
      <div class="has-text-grey-light is-text-ellipsis">
        {#if lastMessageFromSelf}
          <span>You: </span>
        {/if}
        { lastMessage }
      </div>
    </div>
  </div>
</div>
