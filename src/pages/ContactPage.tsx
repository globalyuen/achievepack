import React, { useState, useCallback, useTransition, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, Send, ArrowLeft, CheckCircle, Building2, Globe, AlertCircle } from 'lucide-react'
import { useCalendly } from '../contexts/CalendlyContext'

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAACJvySd2iBsvYcJv'

const ContactPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const navigate = useNavigate()
  const [isPending, startTransition] = useTransition()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'quote'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
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

  // Render Turnstile widget
  useEffect(() => {
    const renderWidget = () => {
      if (turnstileRef.current && (window as any).turnstile && !turnstileWidgetId.current) {
        turnstileWidgetId.current = (window as any).turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          'error-callback': () => setError('Verification failed. Please refresh the page.'),
          'expired-callback': () => setTurnstileToken(null),
          theme: 'light',
          size: 'flexible'
        })
      }
    }

    if ((window as any).turnstile) {
      renderWidget()
    } else {
      (window as any).onTurnstileLoad = renderWidget
    }

    return () => {
      if (turnstileWidgetId.current && (window as any).turnstile) {
        try {
          (window as any).turnstile.remove(turnstileWidgetId.current)
        } catch (e) {}
        turnstileWidgetId.current = null
      }
    }
  }, [])

  // Optimized navigation handler for better INP
    const handleNavigation = useCallback((to: string) => (e: React.MouseEvent) => {
      e.preventDefault()
      startTransition(() => {
        navigate(to)
      })
    }, [navigate])
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!turnstileToken) {
      setError('Please wait for verification to complete.')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          turnstileToken
        })
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }
      
      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '', inquiryType: 'quote' })
    } catch (err: any) {
      setError(err.message || 'Failed to send message. Please try again.')
      // Reset Turnstile
      if ((window as any).turnstile && turnstileWidgetId.current) {
        (window as any).turnstile.reset(turnstileWidgetId.current)
        setTurnstileToken(null)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Achieve Pack - Sustainable Packaging Solutions</title>
        <meta name="description" content="Contact Achieve Pack for custom sustainable packaging quotes, samples, and inquiries. Email, WhatsApp, or book a free 30-min consultation call." />
        <link rel="canonical" href="https://achievepack.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" onClick={handleNavigation('/')} className="flex items-center gap-2">
              <img 
                src="/ap-logo.svg" 
                alt="Achieve Pack" 
                className="h-9 w-auto"
                loading="eager"
                decoding="async"
                width="120"
                height="36"
              />
            </a>
            <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-neutral-500 hover:text-primary-600 transition">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Have questions about sustainable packaging? Need a quote? We're here to help. Our team responds within 24 hours.
            </p>
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all cursor-pointer shadow-lg animate-pulse-glow"
              style={{
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.3), 0 0 60px rgba(34, 197, 94, 0.2)',
                animation: 'pulse-glow 2s ease-in-out infinite'
              }}
            >
              <Calendar className="h-5 w-5" />
              Book Free Consultation
            </button>
          </div>
        </section>

        {/* Green glow animation style */}
        <style>{`
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.3), 0 0 60px rgba(34, 197, 94, 0.2);
            }
            50% {
              box-shadow: 0 0 30px rgba(34, 197, 94, 0.7), 0 0 60px rgba(34, 197, 94, 0.5), 0 0 90px rgba(34, 197, 94, 0.3);
            }
          }
        `}</style>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">Contact Methods</h2>
              
              {/* Quick Actions */}
              <div className="space-y-4">
                <button
                  onClick={openCalendly}
                  className="w-full flex items-center gap-4 p-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition cursor-pointer"
                >
                  <Calendar className="h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">Book a Free Call</div>
                    <div className="text-sm text-white/80">30-min packaging consultation</div>
                  </div>
                </button>
                
                <a
                  href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20sustainable%20packaging"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-4 p-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
                >
                  <MessageCircle className="h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-sm text-white/80">+852 6970 4411</div>
                  </div>
                </a>
                
                <a
                  href="mailto:ryan@achievepack.com"
                  className="w-full flex items-center gap-4 p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                >
                  <Mail className="h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">Email Us</div>
                    <div className="text-sm text-white/80">ryan@achievepack.com</div>
                  </div>
                </a>
              </div>

              {/* Contact Info Cards */}
              <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-4">
                <h3 className="font-semibold text-neutral-900">Contact Information</h3>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-neutral-800">Hong Kong Office</div>
                    <div className="text-sm text-neutral-600">Unit 1003, 10/F, Tower A<br />New Mandarin Plaza<br />Tsim Sha Tsui, Hong Kong</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-neutral-800">Factory Location</div>
                    <div className="text-sm text-neutral-600">Shenzhen, China<br />ISO 9001 & BRCGS Certified</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-neutral-800">Business Hours</div>
                    <div className="text-sm text-neutral-600">Monday - Friday: 9:00 AM - 6:00 PM (HKT)<br />Saturday: 10:00 AM - 2:00 PM</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-neutral-800">Time Zone</div>
                    <div className="text-sm text-neutral-600">Hong Kong Time (GMT+8)</div>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-xl border border-primary-200 p-6">
                <h3 className="font-semibold text-primary-800 mb-3">Why Contact Achieve Pack?</h3>
                <ul className="space-y-2 text-sm text-primary-700">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0" /> Free packaging consultation</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0" /> Custom quotes within 24 hours</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0" /> Free samples for qualified inquiries</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0" /> MOQ from 100 pieces</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 flex-shrink-0" /> Worldwide shipping</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-neutral-600 mb-6">Thank you for contacting us. We'll respond within 24 hours.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary-600 hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Error Message */}
                    {error && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm">
                        <AlertCircle className="h-4 w-4 flex-shrink-0" />
                        {error}
                      </div>
                    )}
                    
                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Inquiry Type</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          { value: 'quote', label: 'Quote Request' },
                          { value: 'sample', label: 'Sample Request' },
                          { value: 'support', label: 'Support' },
                          { value: 'other', label: 'Other' }
                        ].map(type => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, inquiryType: type.value })}
                            className={`py-2 px-4 rounded-lg border text-sm font-medium transition ${
                              formData.inquiryType === type.value
                                ? 'bg-primary-600 text-white border-primary-600'
                                : 'bg-white text-neutral-700 border-neutral-300 hover:border-primary-400'
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Company & Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">Company</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="e.g., Quote for 1000 compostable coffee bags"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                        placeholder="Tell us about your packaging needs, quantities, timeline..."
                      />
                    </div>

                    {/* Cloudflare Turnstile Widget */}
                    <div className="flex justify-center">
                      <div ref={turnstileRef} className="cf-turnstile" />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || !turnstileToken}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-xs text-neutral-500 text-center">
                      By sending a message, you agree to our <Link to="/legal/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</Link>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <section className="bg-neutral-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Prefer to Shop Directly?</h2>
            <p className="text-neutral-400 mb-6">Browse our sustainable packaging products and order samples online.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/store" className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition">
                Visit Our Store
              </Link>
              <Link to="/about" className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition">
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage
