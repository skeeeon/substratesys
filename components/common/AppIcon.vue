<template>
  <component 
    :is="iconComponent" 
    :class="sizeClass"
    v-bind="$attrs"
  />
</template>

<script setup>
import { computed, h } from 'vue'
import {
  // Navigation & UI
  Bars3Icon,
  XMarkIcon,
  
  // Contact & Social
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  
  // Features & Benefits
  BoltIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  UsersIcon,
  UserIcon,
  
  // Products & Technical
  ServerIcon,
  CpuChipIcon,
  CubeIcon,
  CheckIcon,
  PlusIcon,
  
  // Actions
  ChevronDownIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/outline'

import {
  // Filled versions for specific use cases
  CheckIcon as CheckIconSolid,
  ShieldCheckIcon as ShieldCheckIconSolid
} from '@heroicons/vue/24/solid'

/**
 * AppIcon Component
 * 
 * Centralized icon component using Heroicons with consistent sizing
 * and easy name-based selection. Supports both outline and solid variants.
 */

const props = defineProps({
  name: {
    type: String,
    required: true,
    validator: (value) => [
      // Navigation & UI
      'bars-3', 'x-mark', 'chevron-down', 'arrow-right',
      
      // Contact & Social  
      'phone', 'envelope', 'map-pin', 'linkedin', 'twitter', 'youtube',
      
      // Features & Benefits
      'bolt', 'shield-check', 'light-bulb', 'users', 'user',
      
      // Products & Technical
      'server', 'cpu-chip', 'cube', 'check', 'plus',
      
      // Social Media (custom)
      'linkedin', 'twitter', 'youtube'
    ].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(value)
  },
  variant: {
    type: String,
    default: 'outline',
    validator: (value) => ['outline', 'solid'].includes(value)
  }
})

// Icon mapping
const iconMap = {
  // Navigation & UI
  'bars-3': Bars3Icon,
  'x-mark': XMarkIcon,
  'chevron-down': ChevronDownIcon,
  'arrow-right': ArrowRightIcon,
  
  // Contact & Social
  'phone': PhoneIcon,
  'envelope': EnvelopeIcon,
  'map-pin': MapPinIcon,
  
  // Features & Benefits  
  'bolt': BoltIcon,
  'shield-check': props.variant === 'solid' ? ShieldCheckIconSolid : ShieldCheckIcon,
  'light-bulb': LightBulbIcon,
  'users': UsersIcon,
  'user': UserIcon,
  
  // Products & Technical
  'server': ServerIcon,
  'cpu-chip': CpuChipIcon,
  'cube': CubeIcon,
  'check': props.variant === 'solid' ? CheckIconSolid : CheckIcon,
  'plus': PlusIcon,
  
  // Custom social media icons (render functions for non-heroicon icons)
  'linkedin': () => h('svg', {
    fill: 'currentColor',
    viewBox: '0 0 24 24',
    class: 'h-full w-full'
  }, [
    h('path', {
      d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    })
  ]),
  
  'twitter': () => h('svg', {
    fill: 'currentColor', 
    viewBox: '0 0 24 24',
    class: 'h-full w-full'
  }, [
    h('path', {
      d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
    })
  ]),
  
  'youtube': () => h('svg', {
    fill: 'currentColor',
    viewBox: '0 0 24 24', 
    class: 'h-full w-full'
  }, [
    h('path', {
      d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
    })
  ])
}

// Computed properties
const iconComponent = computed(() => {
  const icon = iconMap[props.name]
  if (!icon) {
    console.warn(`Icon "${props.name}" not found`)
    return CubeIcon // fallback
  }
  return icon
})

const sizeClass = computed(() => {
  const sizes = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4', 
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8',
    '2xl': 'h-10 w-10'
  }
  return sizes[props.size]
})
</script>
