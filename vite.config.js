import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Date of the last commit (YYYY-MM-DD), shown as "Last updated" in the footer
function lastCommitDate() {
  try {
    return execSync('git log -1 --format=%cs', { encoding: 'utf8' }).trim()
  } catch {
    return new Date().toISOString().slice(0, 10)
  }
}

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths so the build works when served from a subpath
  // (GitHub Pages: https://mpawlowski5467.github.io/mateusz-pawlowski-portfolio/)
  base: './',
  plugins: [react()],
  define: {
    'import.meta.env.VITE_LAST_UPDATED': JSON.stringify(lastCommitDate()),
  },
  test: {
    environment: 'jsdom'
  },
  esbuild: {
    keepNames: true,
  },
})
