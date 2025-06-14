<template>
  <section class="relative overflow-hidden min-h-[500px] lg:min-h-[580px] flex items-center">
    <!-- Background with gradient -->
    <div 
      class="absolute inset-0"
      :class="backgroundClass"
    ></div>
    
    <!-- Background pattern (optional) -->
    <div 
      v-if="showPattern"
      class="absolute inset-0 opacity-10"
      :style="backgroundPatternStyle"
    ></div>

    <!-- Content -->
    <div class="relative w-full">
      <div class="max-w-7xl mx-auto container-padding py-16 md:py-20 lg:py-24">
        <div 
          class="grid gap-12 lg:gap-16 items-center"
          :class="imageUrl ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'"
        >
          
          <!-- Text Content -->
          <div :class="{ 'text-center max-w-4xl mx-auto': !imageUrl }">
            <!-- Badge (optional) -->
            <div v-if="badge" class="mb-6">
              <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-substrate-accent text-white">
                {{ badge }}
              </span>
            </div>

            <!-- Title -->
            <h1 
              class="font-bold text-white leading-tight mb-6"
              :class="titleSize"
            >
              <span v-if="titleHighlight" v-html="formatTitle(title)"></span>
              <span v-else>{{ title }}</span>
            </h1>

            <!-- Subtitle -->
            <p 
              v-if="subtitle"
              class="text-gray-300 leading-relaxed mb-8"
              :class="subtitleSize"
            >
              {{ subtitle }}
            </p>

            <!-- Features/Tags -->
            <div v-if="features && features.length" class="flex flex-wrap gap-3 mb-8" :class="{ 'justify-center': !imageUrl }">
              <span
                v-for="feature in features"
                :key="feature"
                class="bg-substrate-accent px-3 py-1.5 rounded-full text-sm font-medium text-white"
              >
                {{ feature }}
              </span>
            </div>

            <!-- Price (optional) -->
            <div v-if="price" class="flex items-center gap-4 mb-8" :class="{ 'justify-center': !imageUrl }">
              <span class="text-4xl font-bold text-white">{{ price }}</span>
              <span class="text-gray-400 text-lg">{{ priceLabel || 'starting price' }}</span>
            </div>

            <!-- Actions -->
            <div 
              v-if="$slots.actions"
              class="flex flex-col sm:flex-row gap-4"
              :class="{ 'justify-center': !imageUrl }"
            >
              <slot name="actions" />
            </div>
          </div>

          <!-- Image -->
          <div v-if="imageUrl" class="relative order-first lg:order-last">
            <div class="relative z-10">
              <!-- Placeholder for server image -->
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-10 text-center">
                <svg class="h-32 w-32 text-white mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                </svg>
                <p class="text-white/80 text-base">Product Image</p>
              </div>
            </div>
            
            <!-- Decorative elements -->
            <div class="absolute -top-6 -right-6 w-32 h-32 bg-substrate-accent/20 rounded-full blur-2xl"></div>
            <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

/**
 * Page Hero Component
 * 
 * Flexible hero section for different page types.
 * Supports various layouts, backgrounds, and content types.
 */

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },
  features: {
    type: Array,
    default: () => []
  },
  price: {
    type: String,
    default: ''
  },
  priceLabel: {
    type: String,
    default: 'starting price'
  },
  imageUrl: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'dark', 'gradient'].includes(value)
  },
  size: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  titleHighlight: {
    type: Boolean,
    default: false
  },
  showPattern: {
    type: Boolean,
    default: true
  }
})

// Computed styles
const backgroundClass = computed(() => {
  const variants = {
    primary: 'bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900',
    dark: 'bg-gradient-to-r from-gray-900 to-gray-800',
    gradient: 'bg-gradient-to-r from-primary-600 to-substrate-accent'
  }
  return variants[props.variant]
})

const backgroundPatternStyle = computed(() => {
  const svgPattern = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`
  return {
    backgroundImage: `url("${svgPattern}")`
  }
})

const titleSize = computed(() => {
  const sizes = {
    sm: 'text-3xl md:text-4xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-4xl md:text-6xl',
    xl: 'text-5xl md:text-7xl'
  }
  return sizes[props.size]
})

const subtitleSize = computed(() => {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-xl md:text-2xl',
    xl: 'text-2xl md:text-3xl'
  }
  return sizes[props.size]
})

// Methods
const formatTitle = (title) => {
  // Simple highlighting for specific words
  return title.replace(/(Server|Solutions|Systems)/gi, '<span class="text-substrate-accent">$1</span>')
}
</script>
