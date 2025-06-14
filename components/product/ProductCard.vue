<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
    <!-- Product Image -->
    <div class="aspect-w-16 relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
      <div class="absolute inset-0 flex items-center justify-center">
        <!-- Placeholder server icon -->
        <svg class="h-20 w-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
        </svg>
      </div>
      <!-- Overlay with price -->
      <div class="absolute top-4 right-4">
        <span class="bg-substrate-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
          {{ product.startingPrice }}
        </span>
      </div>
    </div>
    
    <!-- Product Content -->
    <div class="p-6">
      <!-- Header -->
      <div class="mb-4">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          {{ product.name }}
        </h3>
        <p class="text-gray-600 text-sm">
          {{ product.tagline }}
        </p>
      </div>
      
      <!-- Features -->
      <div class="space-y-2 mb-6">
        <div
          v-for="feature in product.hero.features"
          :key="feature"
          class="flex items-center text-sm text-gray-600"
        >
          <svg class="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          {{ feature }}
        </div>
      </div>
      
      <!-- Actions -->
      <div class="flex space-x-3">
        <NuxtLink
          :to="`/products/${product.slug}`"
          class="flex-1 bg-primary-600 text-white text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
        >
          Learn More
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="flex-1 border border-primary-600 text-primary-600 text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-primary-50 transition-colors"
        >
          Get Quote
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * Product Card Component
 * 
 * Displays product information in a card format with
 * image, features, pricing, and action buttons.
 * Includes hover effects and responsive design.
 */

defineProps({
  product: {
    type: Object,
    required: true,
    validator: (product) => {
      return product.name && product.slug && product.tagline && 
             product.startingPrice && product.hero?.features
    }
  }
})
</script>
