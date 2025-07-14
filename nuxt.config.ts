export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Hybrid Configuration - Static pages + Server functions
  nitro: {
    // Route-specific rendering rules
    routeRules: {
      // Static pages (prerendered at build time)
      '/': { prerender: true },
      '/about': { prerender: true },
      '/contact': { prerender: true },
      '/products/**': { prerender: true },
      
      // API routes (server-side only)
      '/api/**': { 
        cors: true,
        headers: {
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    },
    
    // Prerender specific routes for SEO
    prerender: {
      routes: [
        '/',
        '/about', 
        '/contact',
        '/products/mini-servers',
        '/products/standard-servers', 
        '/products/premium-servers'
      ]
    }
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],

  // SEO Configuration
  app: {
    head: {
      title: 'Substrate Systems - Purpose-Built Server Solutions',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Substrate Systems delivers high-performance, purpose-built servers for enterprise, edge computing, and specialized applications. Mini, Standard, and Premium server solutions.' 
        },
        { name: 'keywords', content: 'purpose-built servers, enterprise servers, edge computing, mini servers, rack servers, custom hardware' },
        { name: 'author', content: 'Substrate Systems' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Substrate Systems - Purpose-Built Server Solutions' },
        { property: 'og:description', content: 'High-performance, purpose-built servers for enterprise and edge computing applications.' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Google Fonts
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      'JetBrains Mono': [400, 700]
    }
  },

  // CSS
  css: ['~/assets/css/main.css'],

  // Enable SSR for server functions
  ssr: true,

  // Build configuration
  build: {
    transpile: ['@headlessui/vue']
  },

  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys (only available on server-side)
    resendApiKey: process.env.RESEND_API_KEY,
    contactEmail: process.env.CONTACT_EMAIL,
    resendFromEmail: process.env.RESEND_FROM_EMAIL,
    
    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://substratesys.com'
    }
  }
})
