<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'

/**
 * Default Layout Component
 * 
 * Main layout template that wraps all pages with consistent
 * header and footer. Uses flexbox to ensure footer stays
 * at bottom even on short pages.
 */
</script>
