import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel build configuration
export default defineConfig({
  plugins: [react()],
})