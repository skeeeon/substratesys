export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // SSG Configuration
  nitro: {
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

  // Ensure proper SSR handling
  ssr: true
})
