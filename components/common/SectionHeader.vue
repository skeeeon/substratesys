<template>
  <div class="text-center mb-16">
    <h2 class="font-bold text-gray-900 mb-4" :class="titleClasses">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-gray-600" :class="subtitleClasses">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

/**
 * SectionHeader Component
 * 
 * Reusable section header with consistent styling and sizing options.
 * Reduces code duplication across pages.
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
  size: {
    type: String,
    default: 'lg',
    validator: (value) => ['md', 'lg', 'xl'].includes(value)
  }
})

const titleClasses = computed(() => {
  const sizes = {
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
    xl: 'text-4xl md:text-5xl'
  }
  return sizes[props.size]
})

const subtitleClasses = computed(() => {
  const sizes = {
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  }
  return sizes[props.size]
})
</script>
