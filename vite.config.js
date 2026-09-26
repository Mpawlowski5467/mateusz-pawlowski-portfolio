import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths so the build works when served from a subpath
  // (GitHub Pages: https://mpawlowski5467.github.io/mateusz-pawlowski-portfolio/)
  base: './',
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
  esbuild: {
    keepNames: true,
  },
  build: {
    minify: false,
  }
})
