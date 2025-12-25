import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import sourceIdentifierPlugin from 'vite-plugin-source-identifier'

const isProd = process.env.BUILD_MODE === 'prod'

export default defineConfig({
  plugins: [
    react(), 
    sourceIdentifierPlugin({
      enabled: !isProd,
      attributePrefix: 'data-matrix',
      includeProps: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable minification for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Better chunk naming for caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks: (id) => {
          // Core React dependencies
          if (id.includes('node_modules/react/') || 
              id.includes('node_modules/react-dom/') || 
              id.includes('node_modules/react-router-dom/')) {
            return 'vendor-react'
          }
          // UI Components
          if (id.includes('node_modules/lucide-react/')) {
            return 'vendor-icons'
          }
          // Animation libraries
          if (id.includes('node_modules/framer-motion/') || 
              id.includes('node_modules/motion/') ||
              id.includes('node_modules/gsap/')) {
            return 'vendor-animation'
          }
          // Radix UI components
          if (id.includes('node_modules/@radix-ui/')) {
            return 'vendor-radix'
          }
          // Form handling
          if (id.includes('node_modules/react-hook-form/') || 
              id.includes('node_modules/zod/') ||
              id.includes('node_modules/@hookform/')) {
            return 'vendor-forms'
          }
          // i18n
          if (id.includes('node_modules/i18next') || 
              id.includes('node_modules/react-i18next/')) {
            return 'vendor-i18n'
          }
          // Analytics and error tracking
          if (id.includes('node_modules/@vercel/') || 
              id.includes('node_modules/@sentry/')) {
            return 'vendor-analytics'
          }
          // Supabase
          if (id.includes('node_modules/@supabase/')) {
            return 'vendor-supabase'
          }
          // Helmet for SEO
          if (id.includes('node_modules/react-helmet-async/')) {
            return 'vendor-helmet'
          }
          // Charts
          if (id.includes('node_modules/recharts/')) {
            return 'vendor-charts'
          }
          // Other node_modules
          if (id.includes('node_modules/')) {
            return 'vendor-misc'
          }
        }
      }
    }
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})

