// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ⚠️ Your repo name with slashes
  plugins: [react()],
})