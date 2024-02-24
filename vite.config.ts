import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const outDir = resolve(__dirname, 'dist');
const pages = resolve(__dirname, "src", "pages");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  resolve: {
  },

  build : {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        tier_it: resolve(pages, "tier_it", "index.html"),
      },
    },
  },
})
