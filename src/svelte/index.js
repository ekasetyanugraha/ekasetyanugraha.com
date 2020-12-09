import App from './App.svelte';

const EL_MOUNT = '#app-svelte';

new App({
  target: document.querySelector(EL_MOUNT),
});
