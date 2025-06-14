/**
 * Global Setup Plugin (Client-side only)
 * 
 * Handles client-side initialization and global setup
 * without causing SSR composable context issues.
 */

export default defineNuxtPlugin((nuxtApp) => {
  // Only run on client-side
  if (process.client) {
    // Handle smooth scrolling for hash links
    nuxtApp.hook('page:finish', () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }
      }
    })

    // Add any other client-side setup here
    console.log('Substrate Systems website initialized')
  }
})
