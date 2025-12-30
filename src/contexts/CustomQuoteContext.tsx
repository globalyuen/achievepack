import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react'
import { X, Mail, Phone, MessageCircle, Calendar, Send, CheckCircle, Package, Sparkles, AlertCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'

// Cloudflare Turnstile Site Key (get from Cloudflare Dashboard)
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAACJvySd2iBsvYcJv'

interface CustomQuoteContextType {
  openQuoteLightbox: () => void
  closeQuoteLightbox: () => void
  isOpen: boolean
}

const CustomQuoteContext = createContext<CustomQuoteContextType | undefined>(undefined)

export function useCustomQuote() {
  const context = useContext(CustomQuoteContext)
  if (!context) {
    throw new Error('useCustomQuote must be used within a CustomQuoteProvider')
  }
  return context
}

export function CustomQuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  })
  const [turnstileToken, setTurnstileToken] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const turnstileRef = useRef<HTMLDivElement>(null)
  const turnstileWidgetId = useRef<string | null>(null)

  // Load Turnstile script
  useEffect(() => {
    if (typeof window !== 'undefined' && !(window as any).turnstile) {
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  }, [])

  // Render Turnstile widget when modal opens
  useEffect(() => {
    if (isOpen && turnstileRef.current && (window as any).turnstile) {
      // Clear any existing widget
      if (turnstileWidgetId.current) {
        try {
          (window as any).turnstile.remove(turnstileWidgetId.current)
        } catch (e) {}
      }
      
      // Render new widget
      setTimeout(() => {
        if (turnstileRef.current) {
          turnstileWidgetId.current = (window as any).turnstile.render(turnstileRef.current, {
            sitekey: TURNSTILE_SITE_KEY,
            callback: (token: string) => {
              setTurnstileToken(token)
              setError('')
            },
            'error-callback': () => {
              setError('Verification failed. Please try again.')
            },
            theme: 'light',
            size: 'flexible'
          })
        }
      }, 100)
    }
    
    return () => {
      if (turnstileWidgetId.current && (window as any).turnstile) {
        try {
          (window as any).turnstile.remove(turnstileWidgetId.current)
        } catch (e) {}
        turnstileWidgetId.current = null
      }
    }
  }, [isOpen])

  const openQuoteLightbox = () => {
    setIsOpen(true)
    setIsSubmitted(false)
    setError('')
    setTurnstileToken('')
  }
  
  const closeQuoteLightbox = () => {
    setIsOpen(false)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
      setIsSubmitted(false)
      setError('')
      setTurnstileToken('')
    }, 300)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Verify Turnstile token is present
    if (!turnstileToken) {
      setError('Please complete the verification challenge.')
      return
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // 1. Save to Supabase database
      const { error: dbError } = await supabase.from('quote_inquiries').insert({
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        product: formData.product || null,
        quantity: formData.quantity || null,
        message: formData.message || null,
        source_page: window.location.pathname,
        user_agent: navigator.userAgent
      })
      
      if (dbError) {
        console.error('DB Error:', dbError)
        // Continue even if DB fails - email is more important
      }
      
      // 2. Send email via API route with Turnstile verification
      const emailResponse = await fetch('/api/send-quote-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          product: formData.product,
          quantity: formData.quantity,
          message: formData.message,
          sourcePage: window.location.pathname,
          turnstileToken: turnstileToken
        })
      })
      
      const result = await emailResponse.json()
      
      if (!emailResponse.ok) {
        if (result.error === 'Verification failed') {
          setError('Security verification failed. Please refresh and try again.')
          // Reset Turnstile
          if ((window as any).turnstile && turnstileWidgetId.current) {
            (window as any).turnstile.reset(turnstileWidgetId.current)
          }
          setTurnstileToken('')
          return
        }
        throw new Error(result.error || 'Failed to send email')
      }
      
      setIsSubmitted(true)
    } catch (err) {
      console.error('Submit error:', err)
      setError('Something went wrong. Please try WhatsApp or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'd like to get a quote for custom packaging.\n\n` +
      `Name: ${formData.name || 'Not provided'}\n` +
      `Company: ${formData.company || 'Not provided'}\n` +
      `Product: ${formData.product || 'Not specified'}\n` +
      `Quantity: ${formData.quantity || 'Not specified'}\n\n` +
      `${formData.message || 'Please contact me for more details.'}`
    )
    window.open(`https://wa.me/85269704411?text=${message}`, '_blank')
  }

  return (
    <CustomQuoteContext.Provider value={{ openQuoteLightbox, closeQuoteLightbox, isOpen }}>
      {children}
      
      {/* Global Custom Quote Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeQuoteLightbox}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeQuoteLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5 text-neutral-600" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-5">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Get Your Custom Quote
              </h3>
              <p className="text-primary-100 text-sm mt-1">
                Tell us about your packaging needs • Response within 24 hours
              </p>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {isSubmitted ? (
                // Success State
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 mb-2">Request Sent Successfully!</h4>
                  <p className="text-neutral-600 mb-6">
                    We've received your inquiry and will respond within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </button>
                    <button
                      onClick={closeQuoteLightbox}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg font-medium hover:bg-neutral-200 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                // Form State
                <>
                  {/* Quick Contact Options */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    <a
                      href="https://calendly.com/30-min-free-packaging-consultancy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition text-center group"
                    >
                      <Calendar className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium text-blue-700">Book a Call</span>
                    </a>
                    <button
                      onClick={handleWhatsApp}
                      className="flex flex-col items-center gap-2 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition text-center group"
                    >
                      <MessageCircle className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium text-green-700">WhatsApp</span>
                    </button>
                    <a
                      href="mailto:ryan@achievepack.com"
                      className="flex flex-col items-center gap-2 p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition text-center group"
                    >
                      <Mail className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium text-purple-700">Email Us</span>
                    </a>
                  </div>

                  <div className="relative flex items-center justify-center mb-6">
                    <div className="border-t border-neutral-200 flex-grow"></div>
                    <span className="px-3 text-sm text-neutral-500">or fill out the form</span>
                    <div className="border-t border-neutral-200 flex-grow"></div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  {/* Quote Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="quote-name" className="block text-sm font-medium text-neutral-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="quote-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="quote-email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="quote-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="quote-company" className="block text-sm font-medium text-neutral-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          id="quote-company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="quote-product" className="block text-sm font-medium text-neutral-700 mb-1">
                          Product Type
                        </label>
                        <select
                          id="quote-product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                        >
                          <option value="">Select product...</option>
                          <option value="Stand Up Pouch">Stand Up Pouch</option>
                          <option value="Flat Pouch">Flat Pouch (3 Side Seal)</option>
                          <option value="Flat Bottom Bag">Flat Bottom Bag</option>
                          <option value="Side Gusset Bag">Side Gusset Bag</option>
                          <option value="Spout Pouch">Spout Pouch</option>
                          <option value="Custom Box">Custom Box</option>
                          <option value="Mailer Bag">Mailer Bag</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="quote-quantity" className="block text-sm font-medium text-neutral-700 mb-1">
                        Estimated Quantity
                      </label>
                      <select
                        id="quote-quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                      >
                        <option value="">Select quantity range...</option>
                        <option value="100-500">100 - 500 pcs</option>
                        <option value="500-1000">500 - 1,000 pcs</option>
                        <option value="1000-5000">1,000 - 5,000 pcs</option>
                        <option value="5000-10000">5,000 - 10,000 pcs</option>
                        <option value="10000-50000">10,000 - 50,000 pcs</option>
                        <option value="50000+">50,000+ pcs</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quote-message" className="block text-sm font-medium text-neutral-700 mb-1">
                        Tell us about your needs
                      </label>
                      <textarea
                        id="quote-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition resize-none"
                        placeholder="Describe your packaging requirements, dimensions, material preferences..."
                      />
                    </div>

                    {/* Cloudflare Turnstile Widget */}
                    <div className="flex justify-center my-4">
                      <div ref={turnstileRef} className="cf-turnstile w-full max-w-[300px]" />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !turnstileToken}
                      className="w-full py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Quote Request
                        </>
                      )}
                    </button>
                  </form>

                  {/* Benefits */}
                  <div className="mt-6 pt-4 border-t border-neutral-100">
                    <div className="flex flex-wrap justify-center gap-4 text-xs text-neutral-500">
                      <span className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-green-500" /> Free Quote</span>
                      <span className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-green-500" /> MOQ from 100 pcs</span>
                      <span className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-green-500" /> 24hr Response</span>
                      <span className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-green-500" /> Free Samples</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </CustomQuoteContext.Provider>
  )
}

// Reusable Custom Quote Button component
export function CustomQuoteButton({ 
  className = '',
  variant = 'primary',
  children = 'Get Quote'
}: { 
  className?: string
  variant?: 'primary' | 'white' | 'outline'
  children?: ReactNode
}) {
  const { openQuoteLightbox } = useCustomQuote()
  
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition cursor-pointer'
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    white: 'bg-white text-primary-600 hover:bg-neutral-100',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50'
  }
  
  return (
    <button
      onClick={openQuoteLightbox}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
