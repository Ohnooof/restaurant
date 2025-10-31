import path from 'path';
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is important for GitHub Pages deployment!
  // Replace 'your-repo-name' with the name of your GitHub repository.
  base: '/restaurant/', 
})
