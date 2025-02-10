import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '~': '/src',
    },
  },
  build: {
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks: {
          react: ['react'],
          'react-dom': ['react-dom'],
          'react-icons': ['react-icons'],
        },
      },
    },
  },
});
