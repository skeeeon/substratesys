<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
    <!-- Product Image -->
    <div class="aspect-w-16 relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
      <div class="absolute inset-0 flex items-center justify-center">
        <!-- Server icon using AppIcon -->
        <AppIcon name="server" size="2xl" class="text-gray-400" />
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
          <AppIcon name="check" variant="solid" class="text-green-500 mr-2 flex-shrink-0" size="sm" />
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
import AppIcon from '~/components/common/AppIcon.vue'

/**
 * Product Card Component
 * 
 * Displays product information in a card format with
 * image, features, pricing, and action buttons.
 * Now uses centralized icon system for better consistency.
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
