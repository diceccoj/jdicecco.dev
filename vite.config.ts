import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const outDir = resolve(__dirname, 'dist');
const pages = resolve(__dirname, "src", "pages");
// https://vitejs.dev/config/
export default defineConfig({
  base: "/jdicecco.dev",
  plugins: [react()],
  build : {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        tier_it: resolve(pages, "tier_it", "index.html"),
        tetris: resolve(pages, "tetris", "index.html"),
        autoclave_arm: resolve(pages, "autoclave_arm", "index.html"),
        billing_system: resolve(pages, "billing_system", "index.html"),
        cpu_fetcher: resolve(pages, "cpu_fetcher", "index.html"),
        initial: resolve(pages, "initial", "index.html"),
        mindmender_ai: resolve(pages, "mindmender_ai", "index.html"),
        first_website: resolve(pages, "first_website", "index.html"),
        diabetes_game: resolve(pages, "diabetes_game", "index.html"),
        pbi: resolve(pages, "pbi", "index.html"),
      },
    },
  },
})
