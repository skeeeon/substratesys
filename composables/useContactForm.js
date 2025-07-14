/**
 * Contact Form Composable
 * 
 * Handles contact form state, validation, and submission
 * with proper error handling and user feedback.
 */

import { ref, computed } from 'vue'

export const useContactForm = () => {
  // Form state
  const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  })

  // UI state
  const isSubmitting = ref(false)
  const submitSuccess = ref(false)
  const submitError = ref('')
  const fieldErrors = ref({})

  // Computed properties
  const isFormValid = computed(() => {
    const { firstName, lastName, email, message } = form.value
    return firstName.trim() && 
           lastName.trim() && 
           email.trim() && 
           message.trim() && 
           isValidEmail(email)
  })

  const hasFieldErrors = computed(() => {
    return Object.keys(fieldErrors.value).length > 0
  })

  /**
   * Client-side email validation
   */
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  /**
   * Validate individual field
   */
  const validateField = (fieldName, value) => {
    const errors = { ...fieldErrors.value }
    
    switch (fieldName) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) {
          errors[fieldName] = `${fieldName === 'firstName' ? 'First' : 'Last'} name is required`
        } else if (value.length > 50) {
          errors[fieldName] = `${fieldName === 'firstName' ? 'First' : 'Last'} name must be less than 50 characters`
        } else {
          delete errors[fieldName]
        }
        break
        
      case 'email':
        if (!value.trim()) {
          errors[fieldName] = 'Email address is required'
        } else if (!isValidEmail(value)) {
          errors[fieldName] = 'Please enter a valid email address'
        } else {
          delete errors[fieldName]
        }
        break
        
      case 'message':
        if (!value.trim()) {
          errors[fieldName] = 'Message is required'
        } else if (value.length > 2000) {
          errors[fieldName] = 'Message must be less than 2000 characters'
        } else {
          delete errors[fieldName]
        }
        break
        
      case 'company':
        if (value.length > 100) {
          errors[fieldName] = 'Company name must be less than 100 characters'
        } else {
          delete errors[fieldName]
        }
        break
        
      default:
        delete errors[fieldName]
    }
    
    fieldErrors.value = errors
  }

  /**
   * Validate entire form
   */
  const validateForm = () => {
    const formData = form.value
    fieldErrors.value = {}
    
    // Validate all required fields
    Object.keys(formData).forEach(fieldName => {
      validateField(fieldName, formData[fieldName])
    })
    
    return !hasFieldErrors.value
  }

  /**
   * Submit form to API
   */
  const submitForm = async () => {
    // Reset previous states
    submitError.value = ''
    submitSuccess.value = false
    
    // Validate form
    if (!validateForm()) {
      submitError.value = 'Please fix the errors above'
      return false
    }
    
    try {
      isSubmitting.value = true
      
      const { data } = await $fetch('/api/contact', {
        method: 'POST',
        body: form.value
      })
      
      submitSuccess.value = true
      resetForm()
      
      return true
      
    } catch (error) {
      console.error('Form submission error:', error)
      
      // Handle different error types
      if (error.statusCode === 400 && error.data?.errors) {
        // Server validation errors
        submitError.value = error.data.errors.join(', ')
      } else if (error.statusCode === 429) {
        // Rate limiting
        submitError.value = 'Too many requests. Please try again in a few minutes.'
      } else if (error.statusMessage) {
        // Other server errors
        submitError.value = error.statusMessage
      } else {
        // Network or unknown errors
        submitError.value = 'Unable to send message. Please check your connection and try again.'
      }
      
      return false
      
    } finally {
      isSubmitting.value = false
    }
  }

  /**
   * Reset form to initial state
   */
  const resetForm = () => {
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      interest: '',
      message: ''
    }
    fieldErrors.value = {}
    submitError.value = ''
    submitSuccess.value = false
  }

  /**
   * Clear all error states
   */
  const clearErrors = () => {
    fieldErrors.value = {}
    submitError.value = ''
  }

  /**
   * Set form data (useful for pre-filling)
   */
  const setFormData = (data) => {
    form.value = { ...form.value, ...data }
  }

  /**
   * Get field error message
   */
  const getFieldError = (fieldName) => {
    return fieldErrors.value[fieldName] || ''
  }

  /**
   * Check if field has error
   */
  const hasFieldError = (fieldName) => {
    return !!fieldErrors.value[fieldName]
  }

  return {
    // State
    form,
    isSubmitting,
    submitSuccess,
    submitError,
    fieldErrors,
    
    // Computed
    isFormValid,
    hasFieldErrors,
    
    // Methods
    validateField,
    validateForm,
    submitForm,
    resetForm,
    clearErrors,
    setFormData,
    getFieldError,
    hasFieldError
  }
}
