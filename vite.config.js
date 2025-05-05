/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001,
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('node_modules')) {
  //           return 'vendor'
  //         }
  //       },
  //     },
  //   },
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
