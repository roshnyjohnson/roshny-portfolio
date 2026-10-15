import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' lets the build work on Vercel, Netlify AND GitHub Pages sub-paths
export default defineConfig({ plugins: [react()], base: './' })
