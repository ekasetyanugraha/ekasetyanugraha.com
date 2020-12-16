<script>
import { afterUpdate } from 'svelte';
import { fly } from 'svelte/transition';
import { CONTACT_CODE_SVELTE } from '../../helpers/contacts';
import { getContactConversations } from '../../helpers/messages';
import { scrollElementToBottom } from '../../helpers/element';
import MessageBubble from './MessageBubble';

export let to = '';
export let messages = [];

let messageContainer;

afterUpdate(() => {
  scrollElementToBottom(messageContainer);
});

$: conversations = getContactConversations(messages, CONTACT_CODE_SVELTE, to);
</script>

<div
  bind:this={messageContainer}
  class:is-flex={!conversations.length}
  class:is-align-items-center={!conversations.length}
  class="p-4"
  style="height: 500px; overflow-y: auto;"
>
  {#if !conversations.length}
    <div class="has-text-centered">
      <img src="/images/empty-chat-red.png" alt="Empty Chat" />
      <p class="has-text-danger">Start chatting with <span class="is-capitalized">{ to }</span></p>
    </div>
  {:else}
    {#each conversations as conversation}
      <div in:fly={{ duration: 200, y: 10 }}>
        <MessageBubble
          isFromSelf={conversation.from === CONTACT_CODE_SVELTE}
          title={conversation.from}
          message={conversation.content}
          time={conversation.time}
        />
      </div>
    {/each}
  {/if}
</div>
