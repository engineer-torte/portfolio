import tailwindcss from '@tailwindcss/vite';
import { Static } from 'vue';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/ui'],
  devtools: { enabled: true },
  app: {
    baseURL: '/portfolio/',
  },
  css: ['~/assets/css/main.css'],
  ui: {
    colors: {
      primary: 'emerald',
      secondary: 'indigo',
    },
    icons: ['logos', 'simple-icons'],
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'static',
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  target: 'static',
});
