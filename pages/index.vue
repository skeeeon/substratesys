<template>
  <div>
    <!-- Hero Section -->
    <PageHero
      title="Purpose-Built Server Solutions"
      subtitle="High-performance servers engineered for your specific needs. From edge computing to enterprise applications."
      variant="primary"
      size="lg"
      :title-highlight="true"
      :show-pattern="true"
      image-url="/images/hero-server.jpg"
    >
      <template #actions>
        <NuxtLink
          to="#products"
          class="bg-substrate-accent text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Explore Products
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Get Custom Quote
        </NuxtLink>
      </template>
    </PageHero>

    <!-- Products Section -->
    <section id="products" class="section-padding bg-gray-50">
      <div class="max-w-7xl mx-auto container-padding">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Server Solutions for Every Need
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From compact edge computing to high-performance enterprise servers, 
            we have the perfect solution for your infrastructure requirements.
          </p>
        </div>
        
        <!-- Product Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in Object.values(products)"
            :key="product.id"
            :product="product"
            class="animate-fade-up"
          />
        </div>
      </div>
    </section>

    <!-- Trust Indicators -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p class="text-xl text-gray-600">
            Powering critical infrastructure across industries
          </p>
        </div>
        
        <!-- Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="stat in trustStats"
            :key="stat.label"
            class="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
              {{ stat.value }}
            </div>
            <div class="text-gray-600 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section-padding bg-gray-50">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Substrate Systems?
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              We don't just sell servers – we engineer purpose-built solutions 
              that deliver exactly what your business needs.
            </p>
            
            <!-- Feature List -->
            <div class="space-y-6">
              <div
                v-for="feature in keyFeatures"
                :key="feature.title"
                class="flex items-start"
              >
                <div class="flex-shrink-0 mr-4">
                  <div class="w-10 h-10 bg-substrate-accent rounded-lg flex items-center justify-center">
                    <component :is="getFeatureIcon(feature.icon)" class="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    {{ feature.title }}
                  </h3>
                  <p class="text-gray-600">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Visual -->
          <div class="relative">
            <div class="bg-gradient-to-br from-primary-500 to-substrate-accent rounded-lg p-8 text-white text-center">
              <svg class="h-32 w-32 mx-auto mb-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
              </svg>
              <h3 class="text-2xl font-bold mb-2">Custom Engineering</h3>
              <p class="opacity-90">
                Every server is designed with your specific requirements in mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600 text-white">
      <div class="max-w-4xl mx-auto container-padding text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Your Perfect Server Solution?
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Our engineering team is ready to design a custom server solution 
          that meets your exact specifications and performance requirements.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors"
          >
            Learn About Us
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { h, onMounted } from 'vue'

import { products } from '~/data/products'
import ProductCard from '~/components/product/ProductCard.vue'
import PageHero from '~/components/common/PageHero.vue'

/**
 * Home Page (Landing Page)
 * 
 * Main landing page showcasing Substrate Systems' server solutions.
 * Features hero section, product showcase, trust indicators, and CTA.
 */

// Icon components as render functions
const BoltIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'h-6 w-6'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M13 10V3L4 14h7v7l9-11h-7z'
  })
])

const ShieldCheckIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'h-6 w-6'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  })
])

const LightBulbIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'h-6 w-6'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  })
])

const UsersIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'h-6 w-6'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
  })
])

// Get icon component by name
const getFeatureIcon = (iconName) => {
  const iconMap = {
    'zap': BoltIcon,
    'shield-check': ShieldCheckIcon,
    'lightbulb': LightBulbIcon,
    'users': UsersIcon
  }
  return iconMap[iconName] || BoltIcon
}

// SEO Meta
useSeoMeta({
  title: 'Substrate Systems - Purpose-Built Server Solutions',
  description: 'High-performance, purpose-built servers for enterprise, edge computing, and specialized applications. Mini, Standard, and Premium server solutions.',
  keywords: 'purpose-built servers, enterprise servers, edge computing, mini servers, rack servers, custom hardware',
  ogTitle: 'Substrate Systems - Purpose-Built Server Solutions',
  ogDescription: 'High-performance, purpose-built servers for enterprise and edge computing applications.',
  ogImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image'
})

// Page data
const trustStats = [
  { value: '500+', label: 'Servers Deployed' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '24/7', label: 'Technical Support' }
]

const keyFeatures = [
  {
    title: 'Performance First',
    description: 'Every server is engineered for maximum performance and efficiency.',
    icon: 'zap'
  },
  {
    title: 'Proven Reliability',
    description: 'Built to run 24/7 with minimal downtime and maximum uptime.',
    icon: 'shield-check'
  },
  {
    title: 'Continuous Innovation',
    description: 'Constantly evolving to meet emerging technology demands.',
    icon: 'lightbulb'
  },
  {
    title: 'Expert Support',
    description: 'World-class technical support and customer service.',
    icon: 'users'
  }
]

// Add scroll animation when elements come into view
onMounted(() => {
  // Simple intersection observer for animations
  const elements = document.querySelectorAll('.animate-fade-up')
  
  if (elements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })
    
    elements.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
      observer.observe(el)
    })
  }
})
</script>
