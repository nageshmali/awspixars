import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 👈 required to make Vite accessible over network
    port: 5173       // optional; ensure it matches your security group
  }
})
