<script>
import { fade } from 'svelte/transition';
import storeMessages from '../store/messages';
import TheHeader from './components/TheHeader.svelte';
import ContactList from './components/ContactList.svelte';
import FormMessage from './components/FormMessage.svelte';
import ConversationWrapper from './components/ConversationWrapper.svelte';

let activeContact = {};
let messages = [];

const onChangeMessages = () => {
  messages = storeMessages.getState();
};

const onClickBack = () => {
  activeContact = {};
};

const onClickContact = event => {
  activeContact = event.detail;
};

storeMessages.subscribe(onChangeMessages);
</script>

<div class="card">
  <TheHeader
    {activeContact}
    on:back={onClickBack}
  />

  <section
    class="card-content p-0"
    style="min-height: 500px; overflow: hidden;"
  >
    {#if !activeContact.code}
      <div in:fade={{ duration: 200 }}>
        <ContactList {messages} on:click={onClickContact} />
      </div>
    {:else}
      <div in:fade={{ duration: 200 }}>
        <ConversationWrapper to={activeContact.code} {messages} />
      </div>
    {/if}
  </section>

  {#if activeContact.code}
    <footer class="card-footer p-3">
      <FormMessage to={activeContact.code} />
    </footer>
  {/if}
</div>
