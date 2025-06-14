<template>
  <footer class="bg-gray-900 text-white">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto container-padding section-padding">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <SubstrateLogo variant="light" />
          <p class="mt-4 text-gray-400 text-sm leading-relaxed">
            {{ company.description }}
          </p>
          
          <!-- Social Links -->
          <div class="mt-6 flex space-x-4">
            <a
              v-for="(url, platform) in company.socialMedia"
              :key="platform"
              :href="url"
              :aria-label="`Follow us on ${platform}`"
              class="text-gray-400 hover:text-substrate-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <component :is="getSocialIcon(platform)" class="h-6 w-6" />
            </a>
          </div>
        </div>

        <!-- Products -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Products
          </h3>
          <ul class="space-y-3">
            <li v-for="link in footerNavigation.products" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Company
          </h3>
          <ul class="space-y-3">
            <li v-for="link in footerNavigation.company" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Contact
          </h3>
          <div class="space-y-3 text-sm text-gray-400">
            <div class="flex items-start">
              <svg class="h-5 w-5 mt-0.5 mr-2 flex-shrink-0 text-substrate-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <div>
                <div>{{ company.contact.address.street }}</div>
                <div>
                  {{ company.contact.address.city }}, 
                  {{ company.contact.address.state }} 
                  {{ company.contact.address.zip }}
                </div>
              </div>
            </div>
            
            <div class="flex items-center">
              <svg class="h-5 w-5 mr-2 text-substrate-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <a 
                :href="`tel:${company.contact.phone}`"
                class="hover:text-white transition-colors"
              >
                {{ company.contact.phone }}
              </a>
            </div>
            
            <div class="flex items-center">
              <svg class="h-5 w-5 mr-2 text-substrate-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"/>
              </svg>
              <a 
                :href="`mailto:${company.contact.email}`"
                class="hover:text-white transition-colors"
              >
                {{ company.contact.email }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto container-padding py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-sm text-gray-400">
            © {{ currentYear }} {{ company.name }}. All rights reserved.
          </div>
          
          <div class="flex space-x-6 mt-4 md:mt-0">
            <NuxtLink
              v-for="link in footerNavigation.legal"
              :key="link.name"
              :to="link.href"
              class="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, h } from 'vue'

import { company } from '~/data/company'
import { navigation } from '~/data/navigation'
import SubstrateLogo from '~/components/common/SubstrateLogo.vue'

/**
 * App Footer Component
 * 
 * Comprehensive footer with company information, navigation links,
 * contact details, and social media links. Responsive design with
 * proper semantic structure.
 */

// Computed properties
const currentYear = computed(() => new Date().getFullYear())

const footerNavigation = navigation.footer

// Social media icon components as render functions
const LinkedInIcon = () => h('svg', {
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'h-6 w-6'
}, [
  h('path', {
    d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  })
])

const TwitterIcon = () => h('svg', {
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'h-6 w-6'
}, [
  h('path', {
    d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
  })
])

const YouTubeIcon = () => h('svg', {
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'h-6 w-6'
}, [
  h('path', {
    d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
  })
])

// Social media icon mapping
const getSocialIcon = (platform) => {
  const icons = {
    linkedin: LinkedInIcon,
    twitter: TwitterIcon,
    youtube: YouTubeIcon
  }
  return icons[platform] || LinkedInIcon
}
</script>
