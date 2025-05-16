// c:\Users\hp\OneDrive\Desktop\portfolio\vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcssPlugin from '@tailwindcss/postcss' // @tailwindcss/postcss ko import karein

export default defineConfig({
  plugins: [react()], // React plugin yahan rahega
  css: {
    postcss: {
      plugins: [tailwindcssPlugin()], // @tailwindcss/postcss plugin ko yahan use karein
    },
  },
})
