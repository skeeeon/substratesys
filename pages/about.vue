<template>
  <div>
    <!-- About Hero -->
    <PageHero
      title="About Substrate Systems"
      subtitle="Pioneering purpose-built server solutions since 2018"
      variant="gradient"
      size="lg"
    >
      <template #actions>
        <NuxtLink
          to="/contact"
          class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Get In Touch
        </NuxtLink>
      </template>
    </PageHero>

    <!-- Mission & Story -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="max-w-4xl mx-auto">
          <!-- Mission -->
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p class="text-xl text-gray-600 leading-relaxed">
              {{ company.about.mission }}
            </p>
          </div>

          <!-- Story -->
          <div class="bg-gray-50 rounded-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p class="text-lg text-gray-700 leading-relaxed">
              {{ company.about.story }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Stats -->
    <section class="section-padding bg-primary-600 text-white">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">
            By the Numbers
          </h2>
          <p class="text-xl opacity-90">
            Our track record speaks for itself
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="stat in company.about.stats"
            :key="stat.label"
            class="text-center"
          >
            <div class="text-4xl md:text-5xl font-bold mb-2 text-substrate-accent">
              {{ stat.value }}
            </div>
            <div class="text-lg opacity-90">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p class="text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="value in company.about.values"
            :key="value.title"
            class="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <component :is="getValueIcon(value.icon)" class="h-6 w-6 text-primary-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900">{{ value.title }}</h3>
            </div>
            <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team -->
    <section class="section-padding bg-gray-50">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p class="text-xl text-gray-600">
            Meet the experts driving our innovation
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="leader in company.about.team.leadership"
            :key="leader.name"
            class="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <!-- Leader Avatar Placeholder -->
            <div class="w-24 h-24 bg-gradient-to-br from-primary-500 to-substrate-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <component :is="UserIcon" class="text-white" />
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-1">{{ leader.name }}</h3>
            <p class="text-primary-600 font-medium mb-4">{{ leader.title }}</p>
            <p class="text-gray-600 text-sm leading-relaxed">{{ leader.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Compliance
          </h2>
          <p class="text-xl text-gray-600">
            Maintaining the highest standards of quality and security
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div
            v-for="certification in company.about.certifications"
            :key="certification"
            class="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <ShieldCheckIcon class="h-6 w-6 text-green-600" />
            </div>
            <span class="text-gray-900 font-medium">{{ certification }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="section-padding bg-substrate-accent text-white">
      <div class="max-w-4xl mx-auto container-padding text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Work Together?
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Let's discuss how our purpose-built servers can power your next project.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="bg-white text-substrate-accent px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Our Team
          </NuxtLink>
          <NuxtLink
            to="/#products"
            class="border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white hover:text-substrate-accent transition-colors"
          >
            View Our Products
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, h } from 'vue'

import { company } from '~/data/company'
import PageHero from '~/components/common/PageHero.vue'

/**
 * About Page
 * 
 * Company information page showcasing mission, values,
 * team, certifications, and company story.
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

const UserIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'h-12 w-12'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  })
])

// Icon mapping for values
const getValueIcon = (iconName) => {
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
  title: 'About Substrate Systems - Purpose-Built Server Experts',
  description: 'Learn about Substrate Systems, founded in 2018 to deliver purpose-built server solutions. Meet our team, mission, and values driving innovation in enterprise hardware.',
  keywords: 'about substrate systems, server manufacturer, enterprise hardware company, Austin technology',
  ogTitle: 'About Substrate Systems - Purpose-Built Server Experts',
  ogDescription: 'Founded in 2018, Substrate Systems delivers purpose-built server solutions with uncompromising performance and reliability.',
  ogImage: '/images/about-og-image.jpg'
})

// Structured data for organization details
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: company.name,
        description: company.about.mission,
        foundingDate: company.about.founded,
        numberOfEmployees: company.about.employees,
        address: {
          '@type': 'PostalAddress',
          streetAddress: company.contact.address.street,
          addressLocality: company.contact.address.city,
          addressRegion: company.contact.address.state,
          postalCode: company.contact.address.zip,
          addressCountry: company.contact.address.country
        },
        sameAs: Object.values(company.socialMedia)
      })
    }
  ]
})
</script>
