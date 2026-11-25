import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// Static site for GitHub Pages: relative paths, so it works under https://<user>.github.io/<repo>/
export default defineConfig({
  base: './',
  plugins: [svelte()],
  build: { outDir: process.env.PAGES_OUT ?? '../docs', emptyOutDir: true, assetsDir: 'app', target: 'es2020' },
})
