import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Jumia App',
        short_name: 'JUMIA',
        description: 'This is our Jumia Application',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0ea5e9',
        icons: [
          { src: '/microsoft.png', sizes: '192x192', type: 'image/png' },
        //   { src: '/pwa-512x512.avif', sizes: '512x512', type: 'image/avif' },
        //   { src: '/pwa-512x512-maskable.avif', sizes: '512x512', type: 'image/avif', purpose: 'any maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg, avif}'],
        navigateFallback: '/index.html'
      },
      devOptions: {
        enabled: true,
      }
    })
  ]
})
