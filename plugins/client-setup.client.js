/**
 * Client Setup Plugin
 * 
 * Consolidated client-side initialization including error handling,
 * smooth scrolling, and other global setup without causing SSR issues.
 */

export default defineNuxtPlugin((nuxtApp) => {
  // Only run on client-side
  if (!process.client) return

  // Error Handling Setup
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.error('Vue Error:', error)
    
    // In production, you might want to send errors to a logging service
    if (process.env.NODE_ENV === 'production') {
      // Example: logError(error, context)
    }
  }

  // Global error handlers
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason)
    event.preventDefault()
    
    if (process.env.NODE_ENV === 'production') {
      // Example: logError(event.reason, 'unhandledrejection')
    }
  })

  window.addEventListener('error', (event) => {
    console.error('JavaScript Error:', event.error)
    
    if (process.env.NODE_ENV === 'production') {
      // Example: logError(event.error, 'javascript')
    }
  })

  // Smooth scrolling for hash links
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

  // Initialize CSS-based animations for better performance
  const initializeAnimations = () => {
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
      
      .slide-in-element {
        opacity: 0;
        transform: translateX(-30px);
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
      }
      
      .slide-in-element.visible {
        opacity: 1;
        transform: translateX(0);
      }
    `
    document.head.appendChild(style)

    // Setup intersection observer for animations
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

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-up-element, .slide-in-element')
    animatedElements.forEach((el) => observer.observe(el))
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAnimations)
  } else {
    initializeAnimations()
  }

  console.log('Substrate Systems website initialized')
})
