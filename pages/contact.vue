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
                  <AppIcon name="phone" class="text-primary-600" />
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
                  <AppIcon name="envelope" class="text-substrate-accent" />
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
                  <AppIcon name="map-pin" class="text-gray-600" />
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
import { ref } from 'vue'
import { company } from '~/data/company'
import PageHero from '~/components/common/PageHero.vue'
import AppIcon from '~/components/common/AppIcon.vue'

/**
 * Contact Page
 * 
 * Contact information and form for potential customers
 * to reach out about server solutions. Now uses
 * centralized icon system and meta composables.
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

// SEO Meta using composable
usePageMeta({
  title: 'Contact Substrate Systems - Get Your Server Quote',
  description: 'Contact Substrate Systems for custom server solutions. Our team of experts is ready to help with your enterprise hardware requirements.',
  keywords: 'contact substrate systems, server quote, custom servers, enterprise hardware support',
  ogImage: '/images/contact-og-image.jpg'
})
</script>
