import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, 
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
    },
    cssCodeSplit: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'i18n-vendor': ['i18next', 'react-i18next'],
          'icons-vendor': ['react-icons'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  server: {
    port: 3000,
  },
})
