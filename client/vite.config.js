import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    'react-router-dom': 'react-router-dom@^6.14.1'
  }
})

