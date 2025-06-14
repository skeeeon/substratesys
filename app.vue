<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
/**
 * App.vue - Root Application Component
 * 
 * Main application wrapper with global configuration.
 * Simplified to avoid composable context issues.
 */

// Basic SEO defaults (no dynamic route dependencies)
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' }
  ]
})

// Organization structured data (static, no dynamic dependencies)
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Substrate Systems',
        url: 'https://substratesystems.com',
        description: 'Purpose-built server solutions for enterprise and edge computing applications',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Technology Drive',
          addressLocality: 'Austin',
          addressRegion: 'TX',
          postalCode: '78701',
          addressCountry: 'US'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-123-4567',
          contactType: 'customer service',
          email: 'info@substratesystems.com'
        },
        sameAs: [
          'https://linkedin.com/company/substrate-systems',
          'https://twitter.com/substratesys',
          'https://youtube.com/substratesystems'
        ]
      })
    }
  ]
})
</script>
