import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// username.github.io repos serve from root — base stays '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
