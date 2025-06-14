/**
 * Client-side Error Handler Plugin
 * 
 * Provides graceful error handling for the client-side application
 * and helps with debugging during development.
 */

export default defineNuxtPlugin((nuxtApp) => {
  // Handle Vue errors
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.error('Vue Error:', error)
    console.error('Context:', context)
    
    // In production, you might want to send errors to a logging service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send error to logging service
      // logError(error, context)
    }
  }

  // Handle unhandled promise rejections
  if (process.client) {
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason)
      
      // Prevent the default browser error handling
      event.preventDefault()
      
      // In production, log the error
      if (process.env.NODE_ENV === 'production') {
        // Example: Send error to logging service
        // logError(event.reason, 'unhandledrejection')
      }
    })

    // Handle general JavaScript errors
    window.addEventListener('error', (event) => {
      console.error('JavaScript Error:', event.error)
      
      // In production, log the error
      if (process.env.NODE_ENV === 'production') {
        // Example: Send error to logging service
        // logError(event.error, 'javascript')
      }
    })
  }
})
