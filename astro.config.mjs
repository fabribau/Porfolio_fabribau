import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://fabribau.tech',
  output: 'static',
  adapter: cloudflare({
    imageService: 'compile',
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  prefetch: {
    defaultStrategy: 'hover',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
