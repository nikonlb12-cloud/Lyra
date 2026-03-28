import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        'core-values': resolve(__dirname, 'core-values.html'),
        'why-us': resolve(__dirname, 'why-us.html'),
        services: resolve(__dirname, 'services.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        contact: resolve(__dirname, 'contact.html'),
        'web-development': resolve(__dirname, 'web-development.html'),
        'lead-management': resolve(__dirname, 'lead-management.html'),
        'reputation-management': resolve(__dirname, 'reputation-management.html'),
        agents: resolve(__dirname, 'agents.html'),
        'ai-ads': resolve(__dirname, 'ai-ads.html'),
        'strategy-meeting': resolve(__dirname, 'strategy-meeting.html'),
      },
    },
  },
})
