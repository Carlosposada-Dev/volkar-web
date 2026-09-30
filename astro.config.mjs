// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Sitio estático servido por Cloudflare Pages (integración Git, sin adaptador).
export default defineConfig({
  site: 'https://volkar.pages.dev', // [DOMINIO] pendiente; el fallback de Pages sirve mientras tanto
  output: 'static',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'auto' },
  vite: { plugins: [tailwindcss()] },
});
