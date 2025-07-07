<template>
  <section class="relative overflow-hidden min-h-[500px] lg:min-h-[580px] flex items-center">
    <!-- Background -->
    <div class="absolute inset-0" :class="backgroundClasses"></div>
    
    <!-- Background pattern -->
    <div 
      v-if="showPattern"
      class="absolute inset-0 opacity-10 bg-dot-pattern"
    ></div>

    <!-- Content -->
    <div class="relative w-full">
      <div class="max-w-7xl mx-auto container-padding py-16 md:py-20 lg:py-24">
        <div 
          class="grid gap-12 lg:gap-16 items-center"
          :class="gridClasses"
        >
          
          <!-- Text Content -->
          <div :class="contentClasses">
            <!-- Badge -->
            <div v-if="badge" class="mb-6">
              <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-substrate-accent text-white">
                {{ badge }}
              </span>
            </div>

            <!-- Title -->
            <h1 class="font-bold text-white leading-tight mb-6" :class="titleClasses">
              <span v-if="titleHighlight" v-html="highlightedTitle"></span>
              <span v-else>{{ title }}</span>
            </h1>

            <!-- Subtitle -->
            <p v-if="subtitle" class="text-gray-300 leading-relaxed mb-8" :class="subtitleClasses">
              {{ subtitle }}
            </p>

            <!-- Features -->
            <div v-if="features?.length" class="flex flex-wrap gap-3 mb-8" :class="featuresClasses">
              <span
                v-for="feature in features"
                :key="feature"
                class="bg-substrate-accent px-3 py-1.5 rounded-full text-sm font-medium text-white"
              >
                {{ feature }}
              </span>
            </div>

            <!-- Price -->
            <div v-if="price" class="flex items-center gap-4 mb-8" :class="priceClasses">
              <span class="text-4xl font-bold text-white">{{ price }}</span>
              <span class="text-gray-400 text-lg">{{ priceLabel }}</span>
            </div>

            <!-- Actions -->
            <div v-if="$slots.actions" class="flex flex-col sm:flex-row gap-4" :class="actionsClasses">
              <slot name="actions" />
            </div>
          </div>

          <!-- Image -->
          <div v-if="imageUrl" class="relative order-first lg:order-last">
            <div class="relative z-10">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div class="flex items-center justify-center h-64 w-full">
                  <img 
                    :src="imageUrl" 
                    :alt="title"
                    class="max-w-full max-h-full object-contain drop-shadow-lg"
                    loading="lazy"
                  />
                </div>
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
 * PageHero Component
 * 
 * Simplified hero section with better defaults and composition.
 * Reduced props and improved maintainability.
 * Updated to display actual product images instead of placeholder icons.
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
    validator: (value) => ['md', 'lg', 'xl'].includes(value)
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

// Computed styles with better organization
const backgroundClasses = computed(() => {
  const variants = {
    primary: 'bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900',
    dark: 'bg-gradient-to-r from-gray-900 to-gray-800',
    gradient: 'bg-gradient-to-r from-primary-600 to-substrate-accent'
  }
  return variants[props.variant]
})

const gridClasses = computed(() => 
  props.imageUrl ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
)

const contentClasses = computed(() => 
  props.imageUrl ? '' : 'text-center max-w-4xl mx-auto'
)

const titleClasses = computed(() => {
  const sizes = {
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-6xl',
    xl: 'text-5xl md:text-7xl'
  }
  return sizes[props.size]
})

const subtitleClasses = computed(() => {
  const sizes = {
    md: 'text-lg',
    lg: 'text-xl md:text-2xl',
    xl: 'text-2xl md:text-3xl'
  }
  return sizes[props.size]
})

const featuresClasses = computed(() => 
  props.imageUrl ? '' : 'justify-center'
)

const priceClasses = computed(() => 
  props.imageUrl ? '' : 'justify-center'
)

const actionsClasses = computed(() => 
  props.imageUrl ? '' : 'justify-center'
)

const highlightedTitle = computed(() => 
  props.title.replace(/(Server|Solutions|Systems)/gi, '<span class="text-substrate-accent">$1</span>')
)
</script>

<style scoped>
.bg-dot-pattern {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
