import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://rwv.dev',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  prefetch: {
    defaultStrategy: 'viewport'
  },
  integrations: [icon(), sitemap()]
})
