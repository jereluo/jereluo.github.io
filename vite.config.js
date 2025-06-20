import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.match(/react|react-dom|scheduler|react\/jsx-runtime/)) {
              return 'vendor_react'
            }
            if (id.includes('firebase')) {
              return 'vendor_firebase'
            }
            return 'vendor'
          }
        }
      }
    }
  }
})
