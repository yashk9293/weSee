import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/scrape': {
        target: 'http://34.56.151.232:3000',
        changeOrigin: true,
      }
    }
  }
})