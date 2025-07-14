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
            
            <!-- Success Message -->
            <div 
              v-if="submitSuccess" 
              class="mb-6 p-4 bg-green-50 border border-green-200 rounded-md"
            >
              <div class="flex items-start">
                <AppIcon name="check" variant="solid" class="text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 class="text-green-800 font-medium">Message sent successfully!</h4>
                  <p class="text-green-700 mt-1 text-sm">
                    Thank you for your message. We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            <!-- Error Message -->
            <div 
              v-if="submitError" 
              class="mb-6 p-4 bg-red-50 border border-red-200 rounded-md"
            >
              <div class="flex items-start">
                <svg class="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <div>
                  <h4 class="text-red-800 font-medium">Unable to send message</h4>
                  <p class="text-red-700 mt-1 text-sm">{{ submitError }}</p>
                </div>
              </div>
            </div>
            
            <form @submit.prevent="handleSubmit" class="space-y-1">
              <!-- Name Fields -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  id="first-name"
                  label="First Name"
                  v-model="form.firstName"
                  type="text"
                  placeholder="John"
                  required
                  :error-message="getFieldError('firstName')"
                  @validate="validateField"
                />
                
                <FormField
                  id="last-name"
                  label="Last Name"
                  v-model="form.lastName"
                  type="text"
                  placeholder="Doe"
                  required
                  :error-message="getFieldError('lastName')"
                  @validate="validateField"
                />
              </div>

              <!-- Email -->
              <FormField
                id="email"
                label="Email Address"
                v-model="form.email"
                type="email"
                placeholder="john@company.com"
                required
                :error-message="getFieldError('email')"
                help-text="We'll use this to respond to your inquiry"
                @validate="validateField"
              />

              <!-- Company -->
              <FormField
                id="company"
                label="Company"
                v-model="form.company"
                type="text"
                placeholder="Your Company"
                :error-message="getFieldError('company')"
                help-text="Optional - helps us understand your needs better"
                @validate="validateField"
              />

              <!-- Product Interest -->
              <FormField
                id="interest"
                label="Product Interest"
                v-model="form.interest"
                type="select"
                :options="productOptions"
                select-placeholder="Select a product"
                help-text="What type of server solution are you interested in?"
              />

              <!-- Message -->
              <FormField
                id="message"
                label="Message"
                v-model="form.message"
                type="textarea"
                placeholder="Tell us about your requirements..."
                required
                :rows="4"
                :max-length="2000"
                :show-char-count="true"
                :error-message="getFieldError('message')"
                help-text="Please describe your server requirements, timeline, and any specific questions"
                @validate="validateField"
              />

              <!-- Submit Button -->
              <div class="pt-4">
                <button
                  type="submit"
                  :disabled="isSubmitting || !isFormValid"
                  class="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <span v-if="isSubmitting" class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                  <span v-else>Send Message</span>
                </button>
              </div>
              
              <!-- Form Help Text -->
              <div class="pt-2 text-sm text-gray-600 text-center">
                By submitting this form, you agree to our 
                <NuxtLink to="/privacy" class="text-primary-600 hover:text-primary-700 underline">privacy policy</NuxtLink>.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { company } from '~/data/company'
import PageHero from '~/components/common/PageHero.vue'
import AppIcon from '~/components/common/AppIcon.vue'
import FormField from '~/components/common/FormField.vue'

/**
 * Contact Page
 * 
 * Enhanced contact page with robust form handling, validation,
 * and user feedback. Uses the contact form composable for
 * clean separation of concerns.
 */

// Use the contact form composable
const {
  form,
  isSubmitting,
  submitSuccess,
  submitError,
  isFormValid,
  validateField,
  submitForm,
  getFieldError
} = useContactForm()

// Product options for select field
const productOptions = [
  { value: 'mini', label: 'Mini Servers' },
  { value: 'standard', label: 'Standard Servers' },
  { value: 'premium', label: 'Premium Servers' },
  { value: 'custom', label: 'Custom Solution' }
]

// Form submission handler
const handleSubmit = async () => {
  const success = await submitForm()
  
  if (success) {
    // Scroll to success message for better UX
    nextTick(() => {
      const successElement = document.querySelector('.bg-green-50')
      if (successElement) {
        successElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    })
  } else {
    // Scroll to error message
    nextTick(() => {
      const errorElement = document.querySelector('.bg-red-50')
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    })
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
