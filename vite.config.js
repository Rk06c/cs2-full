// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cs2-full/', // ⚠️ Your repo name with slashes
  plugins: [react()],
})