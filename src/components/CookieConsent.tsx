import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, X } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'cookie_consent'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setIsVisible(false)
    // Enable analytics and marketing cookies
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      })
    }
  }

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined')
    setIsVisible(false)
    // Disable non-essential cookies
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Icon and Message */}
            <div className="flex items-start gap-3 flex-1">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <Cookie className="h-5 w-5 text-primary-600" />
              </div>
              <div className="flex-1">
                <p className="text-neutral-700 text-sm md:text-base">
                  We use cookies to improve your experience. View our{' '}
                  <Link 
                    to="/cookie-policy" 
                    className="text-primary-600 hover:text-primary-700 underline font-medium"
                  >
                    Cookie Policy
                  </Link>.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleDecline}
                className="px-5 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2.5 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors shadow-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
