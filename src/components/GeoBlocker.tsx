import React, { useState, useEffect, ReactNode } from 'react'
import { Mail, Phone, MessageCircle } from 'lucide-react'

interface GeoBlockerProps {
  children: ReactNode
}

const GeoBlocker: React.FC<GeoBlockerProps> = ({ children }) => {
  const [isBlocked, setIsBlocked] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    const checkLocation = async () => {
      try {
        // Use free IP geolocation API
        const response = await fetch('https://ipapi.co/json/', {
          signal: AbortSignal.timeout(5000) // 5 second timeout
        })
        
        if (response.ok) {
          const data = await response.json()
          // Check if country is China (CN)
          if (data.country_code === 'CN' || data.country === 'China') {
            setIsBlocked(true)
          }
        }
      } catch (error) {
        // If API fails, allow access (fail-open for better UX)
        console.log('Geo check failed, allowing access')
      } finally {
        setIsChecking(false)
      }
    }

    checkLocation()
  }, [])

  // Show loading state while checking
  if (isChecking) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Show blocked page for China visitors
  if (isBlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="/achieve-pack-logo.png" 
              alt="Achieve Pack" 
              className="h-16 mx-auto"
            />
          </div>

          {/* Status Icon */}
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg 
              className="w-10 h-10 text-amber-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-neutral-900 mb-3">
            Temporarily Unavailable
          </h1>
          <p className="text-lg text-neutral-500 mb-2">
            暂时无法访问
          </p>

          {/* Message */}
          <p className="text-neutral-600 mb-8 leading-relaxed">
            We apologize, but our website is currently not available in your region. 
            Please contact us directly for any inquiries.
          </p>
          <p className="text-neutral-500 text-sm mb-8">
            很抱歉，我们的网站目前在您所在的地区暂时无法访问。如有任何查询，请直接与我们联系。
          </p>

          {/* Contact Options */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-4">
              Contact Us / 联系我们
            </h3>
            
            {/* Email */}
            <a 
              href="mailto:ryan@achievepack.com"
              className="flex items-center justify-center gap-3 w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>ryan@achievepack.com</span>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/85269704411"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp: +852 6970 4411</span>
            </a>

            {/* Phone */}
            <a 
              href="tel:+85269704411"
              className="flex items-center justify-center gap-3 w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 py-3 px-6 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+852 6970 4411</span>
            </a>
          </div>

          {/* Footer */}
          <p className="text-xs text-neutral-400 mt-8">
            © {new Date().getFullYear()} Achieve Pack. All rights reserved.
          </p>
        </div>
      </div>
    )
  }

  // Allow access for non-blocked regions
  return <>{children}</>
}

export default GeoBlocker
