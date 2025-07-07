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
        <SectionHeader
          title="Server Solutions for Every Need"
          subtitle="From compact edge computing to high-performance enterprise servers, we have the perfect solution for your infrastructure requirements."
        />
        
        <!-- Product Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in Object.values(products)"
            :key="product.id"
            :product="product"
            class="fade-up-element"
          />
        </div>
      </div>
    </section>

    <!-- Trust Indicators -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto container-padding">
        <SectionHeader
          title="Trusted by Industry Leaders"
          subtitle="Powering critical infrastructure across industries"
        />
        
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
                    <AppIcon :name="feature.icon" class="text-white" />
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
              <AppIcon name="cpu-chip" size="2xl" class="mx-auto mb-6 opacity-80" />
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
import { onMounted } from 'vue'

import { products } from '~/data/products'
import ProductCard from '~/components/product/ProductCard.vue'
import PageHero from '~/components/common/PageHero.vue'
import AppIcon from '~/components/common/AppIcon.vue'
import SectionHeader from '~/components/common/SectionHeader.vue'

/**
 * Home Page (Landing Page)
 * 
 * Main landing page showcasing Substrate Systems' server solutions.
 * Features hero section, product showcase, trust indicators, and CTA.
 * Updated to remove hero image and focus on centered content.
 */

// SEO Meta using composable
usePageMeta({
  title: '',  // Use default title
  description: 'High-performance, purpose-built servers for enterprise, edge computing, and specialized applications. Mini, Standard, and Premium server solutions.',
  keywords: 'purpose-built servers, enterprise servers, edge computing, mini servers, rack servers, custom hardware',
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
    icon: 'bolt'
  },
  {
    title: 'Proven Reliability',
    description: 'Built to run 24/7 with minimal downtime and maximum uptime.',
    icon: 'shield-check'
  },
  {
    title: 'Continuous Innovation',
    description: 'Constantly evolving to meet emerging technology demands.',
    icon: 'light-bulb'
  },
  {
    title: 'Expert Support',
    description: 'World-class technical support and customer service.',
    icon: 'users'
  }
]

// Optimized CSS-based animation instead of JavaScript
onMounted(() => {
  // Simple CSS-based intersection observer for fade-up animation
  const style = document.createElement('style')
  style.textContent = `
    .fade-up-element {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .fade-up-element.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `
  document.head.appendChild(style)
  
  // Intersection Observer for animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })
  
  document.querySelectorAll('.fade-up-element').forEach((el) => {
    observer.observe(el)
  })
})
</script>
