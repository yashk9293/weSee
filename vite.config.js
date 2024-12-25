import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/scrape': {
        target: 'http://34.56.151.232:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/scrape/, '/scrape')
      }
    }
  },
  plugins: [react()],
})
