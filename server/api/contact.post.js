/**
 * Contact Form API Endpoint
 * 
 * Handles contact form submissions with validation, spam protection,
 * and email delivery using Resend service.
 */

// Rate limiting store (in-memory for simplicity on free tier)
const rateLimitStore = new Map()

export default defineEventHandler(async (event) => {
  // Only allow POST requests
  if (getMethod(event) !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method not allowed'
    })
  }

  try {
    // Get runtime config
    const config = useRuntimeConfig()
    
    // Check if email service is configured
    if (!config.resendApiKey) {
      console.error('RESEND_API_KEY not found in environment variables')
      throw createError({
        statusCode: 500,
        statusMessage: 'Email service not configured'
      })
    }

    // Parse and validate request body
    const body = await readBody(event)
    console.log('Received form data:', { ...body, message: body.message?.substring(0, 50) + '...' })
    
    const validationResult = validateContactForm(body)
    
    if (!validationResult.isValid) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation failed',
        data: { errors: validationResult.errors }
      })
    }

    // Rate limiting check
    const clientIP = getClientIP(event) || 'unknown'
    if (isRateLimited(clientIP)) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Too many requests. Please try again later.'
      })
    }

    // Basic spam protection
    if (detectSpam(body)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Submission rejected'
      })
    }

    // Send email notification
    await sendContactEmail(body, config)
    
    // Update rate limit
    updateRateLimit(clientIP)

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    }

  } catch (error) {
    // Enhanced error logging
    console.error('Contact form error:', {
      message: error.message,
      statusCode: error.statusCode,
      stack: error.stack
    })
    
    // Return user-friendly error
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'An error occurred while sending your message. Please try again.'
    })
  }
})

/**
 * Validates contact form data
 */
function validateContactForm(data) {
  const errors = []
  
  // Required fields
  const requiredFields = {
    firstName: 'First name',
    lastName: 'Last name', 
    email: 'Email address',
    message: 'Message'
  }
  
  for (const [field, label] of Object.entries(requiredFields)) {
    if (!data[field] || !data[field].trim()) {
      errors.push(`${label} is required`)
    }
  }
  
  // Email validation
  if (data.email && !isValidEmail(data.email)) {
    errors.push('Please enter a valid email address')
  }
  
  // Message length validation
  if (data.message && data.message.length > 2000) {
    errors.push('Message must be less than 2000 characters')
  }
  
  // Name length validation
  if (data.firstName && data.firstName.length > 50) {
    errors.push('First name must be less than 50 characters')
  }
  
  if (data.lastName && data.lastName.length > 50) {
    errors.push('Last name must be less than 50 characters')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Email validation utility
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Basic spam detection
 */
function detectSpam(data) {
  const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations', 'click here']
  const text = `${data.message} ${data.firstName} ${data.lastName} ${data.company || ''}`.toLowerCase()
  
  // Check for spam keywords
  if (spamKeywords.some(keyword => text.includes(keyword))) {
    return true
  }
  
  // Check for excessive links
  const linkCount = (data.message.match(/https?:\/\//g) || []).length
  if (linkCount > 2) {
    return true
  }
  
  // Check for suspicious patterns
  if (data.message.length < 10 && data.message.length > 0) {
    return true
  }
  
  return false
}

/**
 * Rate limiting functions
 */
function isRateLimited(ip) {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5
  
  const userRequests = rateLimitStore.get(ip) || []
  const recentRequests = userRequests.filter(timestamp => now - timestamp < windowMs)
  
  return recentRequests.length >= maxRequests
}

function updateRateLimit(ip) {
  const now = Date.now()
  const userRequests = rateLimitStore.get(ip) || []
  userRequests.push(now)
  
  // Keep only recent requests to prevent memory leak
  const windowMs = 15 * 60 * 1000
  const recentRequests = userRequests.filter(timestamp => now - timestamp < windowMs)
  rateLimitStore.set(ip, recentRequests)
}

/**
 * Send email notification using Resend
 */
async function sendContactEmail(formData, config) {
  const { firstName, lastName, email, company, interest, message } = formData
  
  const productInterest = interest ? getProductName(interest) : 'General inquiry'
  
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">New Contact Form Submission</h2>
      
      <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Product Interest:</strong> ${productInterest}</p>
      </div>
      
      <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h3 style="color: #374151; margin-top: 0;">Message</h3>
        <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-radius: 8px;">
        <p style="margin: 0; font-size: 14px; color: #1e40af;">
          <strong>Next Steps:</strong> Respond to this inquiry within 24 hours for best customer experience.
        </p>
      </div>
    </div>
  `
  
  const emailText = `
    New Contact Form Submission
    
    Name: ${firstName} ${lastName}
    Email: ${email}
    ${company ? `Company: ${company}` : ''}
    Product Interest: ${productInterest}
    
    Message:
    ${message}
  `
  
  try {
    // Dynamic import of Resend to avoid build issues
    const { Resend } = await import('resend')
    const resend = new Resend(config.resendApiKey)
    
    const result = await resend.emails.send({
      from: config.resendFromEmail || 'noreply@substratesys.com',
      to: config.contactEmail || 'info@substratesys.com',
      replyTo: email,
      subject: `New Contact: ${firstName} ${lastName} - ${productInterest}`,
      html: emailHtml,
      text: emailText
    })
    
    console.log('Email sent successfully:', result.id)
    return result
    
  } catch (error) {
    console.error('Failed to send email:', error)
    throw new Error('Failed to send email notification')
  }
}

/**
 * Get friendly product name from slug
 */
function getProductName(slug) {
  const productNames = {
    mini: 'Mini Servers',
    standard: 'Standard Servers', 
    premium: 'Premium Servers',
    custom: 'Custom Solution'
  }
  
  return productNames[slug] || 'General inquiry'
}
