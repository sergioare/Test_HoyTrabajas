import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace'
import 'dotenv/config'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      'import.meta.env.API_MOVIES_URL': JSON.stringify(process.env.API_MOVIES_URL),
      'import.meta.env.API_MOVIES_KEY': JSON.stringify(process.env.API_MOVIES_KEY),
    }),
    
  ],
})
