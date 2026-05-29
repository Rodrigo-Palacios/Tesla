// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://rodrigo-palacios.github.io",
  base: process.env.NODE_ENV === "production" ? "/Tesla" : "/",
  outDir: "./docs",
  vite: {
    plugins: [tailwindcss()]
  }
});
