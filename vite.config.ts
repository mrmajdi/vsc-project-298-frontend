// @vsc repo:vsc-project-298-frontend file:vite.config.ts task:f1-vite-config-ts module:frontend session:298
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
