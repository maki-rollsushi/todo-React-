import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/todo-React-/', // MUST match your repo name
  plugins: [react()],
})
