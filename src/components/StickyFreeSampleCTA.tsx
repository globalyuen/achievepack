import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Gift, X, ArrowRight } from 'lucide-react'

/**
 * StickyFreeSampleCTA - A non-intrusive sticky bottom bar encouraging 
 * visitors to request free samples. Appears after scrolling 40% of the page.
 * Dismissible and remembers dismissal for the session.
 */
const StickyFreeSampleCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if already dismissed this session
    if (sessionStorage.getItem('stickyCtaDismissed') === 'true') {
      setIsDismissed(true)
      return
    }

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      setIsVisible(scrollPercent > 40)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDismiss = () => {
    setIsDismissed(true)
    sessionStorage.setItem('stickyCtaDismissed', 'true')
  }

  if (isDismissed || !isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-emerald-600 text-white shadow-2xl border-t border-primary-400/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="hidden sm:flex items-center justify-center w-10 h-10 bg-white/15 rounded-full flex-shrink-0">
              <Gift className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm sm:text-base truncate">
                🎁 Get Free Packaging Samples
              </p>
              <p className="text-xs sm:text-sm text-white/80 hidden sm:block">
                Try before you buy — compostable, recyclable & bio-PE options shipped free
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              to="/free-service"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-primary-700 font-semibold text-sm rounded-lg hover:bg-primary-50 transition-colors shadow-sm"
            >
              Request Samples
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={handleDismiss}
              className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickyFreeSampleCTA
