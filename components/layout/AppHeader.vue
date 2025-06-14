<template>
  <header class="bg-white shadow-sm border-b sticky top-0 z-50">
    <div class="max-w-7xl mx-auto container-padding">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <SubstrateLogo />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink
            v-for="item in mainNavigation"
            :key="item.name"
            :to="item.href"
            class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
            :class="{ 'text-primary-600': isActiveRoute(item.href) }"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <NuxtLink
            to="/contact"
            class="btn-primary"
          >
            Get Quote
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-gray-600 hover:text-gray-900 p-2 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                v-if="!mobileMenuOpen" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
              <path 
                v-else 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="mobileMenuOpen" class="md:hidden overflow-hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            <NuxtLink
              v-for="item in mobileNavigation"
              :key="item.name"
              :to="item.href"
              class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors"
              :class="{ 'text-primary-600': isActiveRoute(item.href) }"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="btn-primary block text-center mt-4"
              @click="closeMobileMenu"
            >
              Get Quote
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { navigation } from '~/data/navigation'
import SubstrateLogo from '~/components/common/SubstrateLogo.vue'

/**
 * App Header Component
 * 
 * Main navigation header with responsive mobile menu
 * and smooth transitions. Includes company logo and
 * primary navigation links.
 */

const route = useRoute()
const mobileMenuOpen = ref(false)

// Navigation data
const mainNavigation = [
  { name: 'Products', href: '/#products' },
  { name: 'Mini Servers', href: '/products/mini-servers' },
  { name: 'Standard Servers', href: '/products/standard-servers' },
  { name: 'Premium Servers', href: '/products/premium-servers' },
  { name: 'About', href: '/about' }
]

const mobileNavigation = [
  { name: 'Home', href: '/' },
  ...mainNavigation
]

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const isActiveRoute = (href) => {
  if (href.startsWith('/#')) {
    return route.path === '/' && href.includes(route.hash)
  }
  return route.path === href
}

// Close mobile menu when route changes
watch(() => route.path, () => {
  closeMobileMenu()
})
</script>
