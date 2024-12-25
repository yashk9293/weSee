import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/scrape': {
        target: 'http://34.56.151.232:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/scrape/, '/scrape')
      }
    }
  },
  // Add this to ensure proper build
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})