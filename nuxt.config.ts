import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
  bridge: {
    typescript: true,
    nitro: false,
  },
  build: {
    transpile: ['cookie-es'],
  },
});
