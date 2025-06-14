/**
 * Structured Data Composable
 * 
 * Utility composable for adding JSON-LD structured data to pages
 * using Nuxt's useHead composable.
 */

export const useStructuredData = (data) => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: typeof data === 'string' ? data : JSON.stringify(data)
      }
    ]
  })
}

// Predefined structured data helpers
export const useOrganizationData = (organization) => {
  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    ...organization
  })
}

export const useProductData = (product) => {
  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'Product',
    ...product
  })
}

export const useWebPageData = (webpage) => {
  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    ...webpage
  })
}
