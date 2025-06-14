<template>
  <div v-if="product">
    <!-- Product Hero -->
    <PageHero
      :title="product.hero.title"
      :subtitle="product.hero.subtitle"
      :features="product.hero.features"
      :price="product.startingPrice"
      variant="dark"
      size="lg"
      :image-url="product.image"
    >
      <template #actions>
        <NuxtLink
          to="/contact"
          class="bg-substrate-accent text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Request Quote
        </NuxtLink>
        <a
          :href="`mailto:info@substratesystems.com?subject=Question about ${product.name}`"
          class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Ask Questions
        </a>
      </template>
    </PageHero>

    <!-- Product Overview -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            About {{ product.name }}
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            {{ product.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Specifications -->
    <section class="section-padding bg-gray-50">
      <div class="max-w-7xl mx-auto container-padding">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
          Technical Specifications
        </h2>
        
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div
              v-for="(value, key) in product.specifications"
              :key="key"
              class="flex justify-between items-start py-3 border-b border-gray-200 last:border-b-0"
            >
              <span class="font-medium text-gray-900 capitalize flex-shrink-0 mr-4">
                {{ formatSpecKey(key) }}:
              </span>
              <span class="text-gray-600 text-right">{{ value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases & Benefits -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <!-- Use Cases -->
          <div>
            <div class="flex items-center mb-8">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                Perfect For
              </h2>
            </div>
            
            <div class="space-y-4">
              <div
                v-for="useCase in product.useCases"
                :key="useCase"
                class="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg class="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 font-medium">{{ useCase }}</span>
              </div>
            </div>
          </div>
          
          <!-- Benefits -->
          <div>
            <div class="flex items-center mb-8">
              <div class="w-12 h-12 bg-substrate-accent/10 rounded-lg flex items-center justify-center mr-4">
                <svg class="h-6 w-6 text-substrate-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                Key Benefits
              </h2>
            </div>
            
            <div class="space-y-4">
              <div
                v-for="benefit in product.benefits"
                :key="benefit"
                class="flex items-start p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <svg class="h-6 w-6 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <span class="text-gray-700 font-medium">{{ benefit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Accessories & Add-ons -->
    <section class="section-padding bg-gray-50">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Accessories & Add-ons
          </h2>
          <p class="text-lg text-gray-600">
            Enhance your {{ product.name.toLowerCase() }} with these optional accessories
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="accessory in product.accessories"
            :key="accessory"
            class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
          >
            <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </div>
            <h3 class="font-medium text-gray-900 mb-2">{{ accessory }}</h3>
            <p class="text-sm text-gray-600">Available on request</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Products -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Other Server Solutions
          </h2>
          <p class="text-lg text-gray-600">
            Explore our complete range of purpose-built servers
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductCard
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            :product="relatedProduct"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600 text-white">
      <div class="max-w-4xl mx-auto container-padding text-center">
        <h2 class="text-3xl font-bold mb-6">
          Ready to Deploy {{ product.name }}?
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Get a custom quote tailored to your specific requirements and deployment needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Request Quote
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors"
          >
            Learn More About Us
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import { products } from '~/data/products'
import ProductCard from '~/components/product/ProductCard.vue'
import PageHero from '~/components/common/PageHero.vue'

/**
 * Product Page Template
 * 
 * Dynamic product page that displays detailed information
 * for each server type. Includes specifications, use cases,
 * benefits, and related products.
 */

const route = useRoute()
const slug = route.params.slug

// Find the product by slug
const product = Object.values(products).find(p => p.slug === slug)

// 404 if product not found
if (!product) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found'
  })
}

// Computed properties
const relatedProducts = computed(() => {
  return Object.values(products).filter(p => p.id !== product.id)
})

// Methods
const formatSpecKey = (key) => {
  return key.replace(/_/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
}

// SEO Meta
useSeoMeta({
  title: `${product.name} - ${product.tagline} | Substrate Systems`,
  description: product.description,
  keywords: `${product.name.toLowerCase()}, ${product.tagline.toLowerCase()}, purpose-built servers, enterprise hardware`,
  ogTitle: `${product.name} - ${product.tagline}`,
  ogDescription: product.description,
  ogImage: product.image
})

// Structured data for product
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
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
          price: product.startingPrice.replace('$', '').replace(',', ''),
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        }
      })
    }
  ]
})
</script>
