import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import sourceIdentifierPlugin from 'vite-plugin-source-identifier'
import { imagetools } from 'vite-imagetools'
import compress from 'vite-plugin-compress'
const isProd = process.env.BUILD_MODE === 'prod'

export default defineConfig({
  plugins: [
    react(),
    sourceIdentifierPlugin({
      enabled: !isProd,
      attributePrefix: 'data-matrix',
      includeProps: true,
    }),
    imagetools(),
    compress(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Enable long‑term caching for static assets in preview/dev
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
    // Proxy removed: to use /api locally, use `vercel dev` instead of `npm run dev`
  },
  // Optimize lucide-react tree-shaking
  optimizeDeps: {
    include: ['lucide-react'],
    exclude: ['@vercel/analytics', '@vercel/speed-insights'],
  },
  build: {
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'vendor-react';
            if (id.includes('react-router')) return 'vendor-react';
            if (id.includes('lucide-react')) return 'vendor-ui';
            if (id.includes('react-helmet')) return 'vendor-helmet';
            if (id.includes('i18next')) return 'vendor-i18n';
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('react-ga4')) return 'vendor-analytics';
          }
        }
      }
    }
  },
})

