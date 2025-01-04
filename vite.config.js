import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/scrape': {
        target: 'http://scraper.weseegpt.com',
        changeOrigin: true,
      }
    }
  }
})