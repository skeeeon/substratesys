/**
 * Page Meta Composable
 * 
 * Simplifies SEO meta tag setup across pages with consistent
 * defaults and structured data helpers.
 */

export const usePageMeta = (options = {}) => {
  const {
    title,
    description,
    keywords = '',
    ogImage = '/images/og-image.jpg',
    twitterCard = 'summary_large_image',
    structuredData = null,
    ...customMeta
  } = options

  // Set SEO meta tags
  useSeoMeta({
    title: title ? `${title} | Substrate Systems` : 'Substrate Systems - Purpose-Built Server Solutions',
    description: description || 'High-performance, purpose-built servers for enterprise, edge computing, and specialized applications.',
    keywords: keywords || 'purpose-built servers, enterprise servers, edge computing, custom hardware',
    ogTitle: title || 'Substrate Systems - Purpose-Built Server Solutions',
    ogDescription: description || 'High-performance, purpose-built servers for enterprise and edge computing applications.',
    ogImage,
    twitterCard,
    ...customMeta
  })

  // Add structured data if provided
  if (structuredData) {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(structuredData)
        }
      ]
    })
  }
}

// Helper for product structured data
export const useProductMeta = (product) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Substrate Systems'
    },
    offers: {
      '@type': 'Offer',
      price: product.startingPrice.replace(/[$,]/g, ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  }

  usePageMeta({
    title: `${product.name} - ${product.tagline}`,
    description: product.description,
    keywords: `${product.name.toLowerCase()}, ${product.tagline.toLowerCase()}, purpose-built servers, enterprise hardware`,
    ogImage: product.image,
    structuredData
  })
}

// Helper for organization structured data
export const useOrganizationMeta = (company) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    description: company.about.mission,
    foundingDate: company.about.founded,
    numberOfEmployees: company.about.employees,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.contact.address.street,
      addressLocality: company.contact.address.city,
      addressRegion: company.contact.address.state,
      postalCode: company.contact.address.zip,
      addressCountry: company.contact.address.country
    },
    sameAs: Object.values(company.socialMedia)
  }

  usePageMeta({
    title: 'About Substrate Systems - Purpose-Built Server Experts',
    description: 'Learn about Substrate Systems, founded in 2018 to deliver purpose-built server solutions. Meet our team, mission, and values driving innovation in enterprise hardware.',
    keywords: 'about substrate systems, server manufacturer, enterprise hardware company, Austin technology',
    ogImage: '/images/about-og-image.jpg',
    structuredData
  })
}
