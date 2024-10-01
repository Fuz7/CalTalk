import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mathIcons': '/src/assets/mathIcons', // Create an alias for your images directory
      '@decorations': '/src/assets/decorations', // Create an alias for your fonts directory
      '@assets': '/src/assets'
    },
  },
})