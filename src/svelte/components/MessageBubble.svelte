<script>
import { toShortTime } from '../../helpers/date';

export let isFromSelf = false;
export let title = '';
export let message = '';
export let time = null;
</script>

<div
  class:level-right={isFromSelf}
>
  <div
    class:has-background-danger={isFromSelf}
    class="box is-inline-block p-2 mb-2"
    style="min-width: 100px; max-width: 300px;"
  >
    {#if !isFromSelf}
      <div class="has-text-danger has-text-weight-bold is-capitalized">
        { title }
      </div>
    {/if}
    <div
      class:has-text-white={isFromSelf}
      style="word-break: break-word;"
    >
      { message }
    </div>
    <div
      class:has-text-grey-light={!isFromSelf}
      class:has-text-white-ter={isFromSelf}
      class="is-size-7"
    >
      { toShortTime(time) }
    </div>
  </div>
</div>
