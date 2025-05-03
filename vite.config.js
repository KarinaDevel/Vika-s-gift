import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Vika-s-gift/', // Путь к вашему репозиторию на GitHub Pages
  plugins: [react()]
});