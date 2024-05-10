import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: fileURLToPath(new URL('./src', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      data: fileURLToPath(new URL('./src/data', import.meta.url)),
    },
  },
})
