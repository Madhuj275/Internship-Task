import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true, // Hot Module Replacement ko ensure karne ke liye
    watch: {
      usePolling: true, // Watcher ko polling mode mein set karna, jab file watching issues ho
    },
  },
});
