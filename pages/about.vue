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
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide everything we do"
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="value in company.about.values"
            :key="value.title"
            class="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <AppIcon :name="value.icon" class="text-primary-600" />
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
        
        <!-- Centered Leadership Cards -->
        <div class="flex flex-wrap justify-center gap-8">
          <div
            v-for="leader in company.about.team.leadership"
            :key="leader.name"
            class="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow w-full md:w-80 lg:w-96"
          >
            <!-- Leader Avatar Placeholder -->
            <div class="w-24 h-24 bg-gradient-to-br from-primary-500 to-substrate-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <AppIcon name="user" size="2xl" class="text-white" />
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-1">{{ leader.name }}</h3>
            <p class="text-primary-600 font-medium mb-4">{{ leader.title }}</p>
            <p class="text-gray-600 text-sm leading-relaxed">{{ leader.bio }}</p>
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
import { company } from '~/data/company'
import PageHero from '~/components/common/PageHero.vue'
import AppIcon from '~/components/common/AppIcon.vue'
import SectionHeader from '~/components/common/SectionHeader.vue'

/**
 * About Page
 * 
 * Company information page showcasing mission, values,
 * team, certifications, and company story.
 * Updated to center leadership team cards.
 */

// SEO Meta using composable
useOrganizationMeta(company)
</script>
