import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://S4RMI618.github.io/Rick-and-Morty-App-React/",
  plugins: [react()],
})
