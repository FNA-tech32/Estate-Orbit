import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel / root-domain deploy: absolute asset paths so deep routes
 // (e.g. /properties/2) still load /assets/*.js correctly.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
