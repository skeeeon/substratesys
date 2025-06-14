<template>
  <div class="flex items-center">
    <!-- Logo Icon -->
    <div class="w-8 h-8 mr-3 relative">
      <svg
        viewBox="0 0 32 32"
        class="w-full h-full text-substrate-accent fill-current"
        aria-hidden="true"
      >
        <!-- Substrate layers representing server hardware -->
        <rect x="2" y="6" width="28" height="4" rx="1" />
        <rect x="2" y="12" width="28" height="4" rx="1" />
        <rect x="2" y="18" width="28" height="4" rx="1" />
        <rect x="2" y="24" width="28" height="4" rx="1" />
        <!-- Connection points -->
        <circle cx="6" cy="8" r="1" class="fill-white" />
        <circle cx="26" cy="8" r="1" class="fill-white" />
        <circle cx="6" cy="14" r="1" class="fill-white" />
        <circle cx="26" cy="14" r="1" class="fill-white" />
        <circle cx="6" cy="20" r="1" class="fill-white" />
        <circle cx="26" cy="20" r="1" class="fill-white" />
        <circle cx="6" cy="26" r="1" class="fill-white" />
        <circle cx="26" cy="26" r="1" class="fill-white" />
      </svg>
    </div>
    
    <!-- Company Name -->
    <div class="flex flex-col">
      <span 
        class="text-xl font-bold text-gray-900"
        :class="{ 'text-white': variant === 'light' }"
      >
        Substrate
      </span>
      <span 
        class="text-sm font-medium text-gray-600 -mt-1"
        :class="{ 'text-gray-300': variant === 'light' }"
      >
        Systems
      </span>
    </div>
  </div>
</template>

<script setup>
/**
 * Substrate Systems Logo Component
 * 
 * A scalable logo component that represents the company's focus on
 * server hardware through layered substrate visualization.
 */

defineProps({
  variant: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  }
})
</script>
