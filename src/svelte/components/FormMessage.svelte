<script>
import { CONTACT_CODE_SVELTE } from '../../helpers/contacts';
import { sendMessage } from '../../store/messages';

export let to = {};

let message = '';

const onSubmitForm = () => {
  if (!message) return;

  sendMessage({
    from: CONTACT_CODE_SVELTE,
    to,
    content: message,
  });

  message = '';
};
</script>

<form on:submit|preventDefault={onSubmitForm} class="is-flex-grow-1">
  <div class="field has-addons">
    <div class="control is-expanded">
      <input
        bind:value={message}
        placeholder="Put your message here.."
        class="input is-rounded"
        type="text"
        autofocus
      />
    </div>
    <div class="control">
      <button class="button is-danger is-rounded">
        <span class="icon is-small">
          <i class="fas fa-comment"></i>
        </span>
      </button>
    </div>
  </div>
</form>
