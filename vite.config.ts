import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the built site work both at https://<user>.github.io
// and at https://<user>.github.io/<repo-name>/ without any change.
export default defineConfig({
  base: './',
  plugins: [react()],
})
