<template>
  <div>
    <!-- Contact Hero -->
    <PageHero
      title="Contact Substrate Systems"
      subtitle="Get in touch with our team to discuss your server requirements"
      variant="primary"
      size="lg"
    />

    <!-- Contact Section -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Ready to discuss your server requirements? Our team of experts is here to help you find the perfect solution.
            </p>
            
            <div class="space-y-6">
              <!-- Phone -->
              <div class="flex items-center">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Phone</h3>
                  <a 
                    :href="`tel:${company.contact.phone}`"
                    class="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {{ company.contact.phone }}
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-center">
                <div class="w-12 h-12 bg-substrate-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <svg class="h-6 w-6 text-substrate-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Email</h3>
                  <a 
                    :href="`mailto:${company.contact.email}`"
                    class="text-gray-600 hover:text-substrate-accent transition-colors"
                  >
                    {{ company.contact.email }}
                  </a>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start">
                <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <svg class="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <div class="text-gray-600">
                    <div>{{ company.contact.address.street }}</div>
                    <div>
                      {{ company.contact.address.city }}, 
                      {{ company.contact.address.state }} 
                      {{ company.contact.address.zip }}
                    </div>
                    <div>{{ company.contact.address.country }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-gray-50 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="first-name" class="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    id="first-name"
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="John"
                  >
                </div>
                <div>
                  <label for="last-name" class="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    id="last-name"
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Doe"
                  >
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="john@company.com"
                >
              </div>

              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Your Company"
                >
              </div>

              <div>
                <label for="interest" class="block text-sm font-medium text-gray-700 mb-2">
                  Product Interest
                </label>
                <select
                  id="interest"
                  v-model="form.interest"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Select a product</option>
                  <option value="mini">Mini Servers</option>
                  <option value="standard">Standard Servers</option>
                  <option value="premium">Premium Servers</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-700 transition-colors focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { company } from '~/data/company'
import PageHero from '~/components/common/PageHero.vue'

/**
 * Contact Page
 * 
 * Contact information and form for potential customers
 * to reach out about server solutions.
 */

// Form state
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  interest: '',
  message: ''
})

// Form submission handler
const handleSubmit = () => {
  // In a real application, you would send this data to your backend
  console.log('Form submitted:', form.value)
  alert('Thank you for your message! We will get back to you soon.')
  
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  }
}

// SEO Meta
useSeoMeta({
  title: 'Contact Substrate Systems - Get Your Server Quote',
  description: 'Contact Substrate Systems for custom server solutions. Our team of experts is ready to help with your enterprise hardware requirements.',
  keywords: 'contact substrate systems, server quote, custom servers, enterprise hardware support',
  ogTitle: 'Contact Substrate Systems - Get Your Server Quote',
  ogDescription: 'Get in touch with our server experts for custom enterprise hardware solutions.',
  ogImage: '/images/contact-og-image.jpg'
})
</script>
