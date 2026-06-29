import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
      providerImportSource: '@mdx-js/react',
    }),
    react(),
  ],
  base: '/',
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    include: ['react-pdf'],
  },
})