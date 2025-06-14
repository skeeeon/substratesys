<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-md w-full text-center px-4">
      <!-- Error Icon -->
      <div class="mx-auto mb-6">
        <svg class="h-24 w-24 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"/>
        </svg>
      </div>

      <!-- Error Content -->
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        {{ error.statusCode || 'Error' }}
      </h1>
      
      <h2 class="text-xl font-semibold text-gray-700 mb-4">
        {{ getErrorTitle() }}
      </h2>
      
      <p class="text-gray-600 mb-8">
        {{ getErrorMessage() }}
      </p>

      <!-- Actions -->
      <div class="space-y-4">
        <NuxtLink
          to="/"
          class="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
        >
          Go Home
        </NuxtLink>
        
        <div>
          <button
            @click="handleError"
            class="text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <p class="text-sm text-gray-500 mb-2">
          Need help? Contact our support team:
        </p>
        <a 
          href="mailto:info@substratesystems.com"
          class="text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          info@substratesystems.com
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * Global Error Page
 * 
 * Handles all application errors with user-friendly messages
 * and recovery options.
 */

// Get error from Nuxt
const error = useError()

// Methods
const getErrorTitle = () => {
  const statusCode = error.value?.statusCode
  switch (statusCode) {
    case 404:
      return 'Page Not Found'
    case 500:
      return 'Server Error'
    case 403:
      return 'Access Forbidden'
    default:
      return 'Something went wrong'
  }
}

const getErrorMessage = () => {
  const statusCode = error.value?.statusCode
  switch (statusCode) {
    case 404:
      return 'The page you\'re looking for doesn\'t exist or has been moved.'
    case 500:
      return 'We\'re experiencing technical difficulties. Please try again later.'
    case 403:
      return 'You don\'t have permission to access this resource.'
    default:
      return 'An unexpected error occurred. Our team has been notified.'
  }
}

const handleError = () => {
  // Clear the error and try to recover
  clearError({ redirect: '/' })
}

// SEO Meta for error pages
useSeoMeta({
  title: `${error.value?.statusCode || 'Error'} - Substrate Systems`,
  description: 'An error occurred on the Substrate Systems website.',
  robots: 'noindex, nofollow'
})
</script>
