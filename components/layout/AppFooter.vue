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
              <AppIcon name="map-pin" class="mt-0.5 mr-2 flex-shrink-0 text-substrate-accent" />
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
              <AppIcon name="phone" class="mr-2 text-substrate-accent" />
              <a 
                :href="`tel:${company.contact.phone}`"
                class="hover:text-white transition-colors"
              >
                {{ company.contact.phone }}
              </a>
            </div>
            
            <div class="flex items-center">
              <AppIcon name="envelope" class="mr-2 text-substrate-accent" />
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
import { computed } from 'vue'

import { company } from '~/data/company'
import { navigation } from '~/data/navigation'
import SubstrateLogo from '~/components/common/SubstrateLogo.vue'
import AppIcon from '~/components/common/AppIcon.vue'

/**
 * App Footer Component
 * 
 * Comprehensive footer with company information, navigation links,
 * contact details, and social media links. Responsive design with
 * proper semantic structure. Now uses centralized icon system.
 */

// Computed properties
const currentYear = computed(() => new Date().getFullYear())

const footerNavigation = navigation.footer
</script>
