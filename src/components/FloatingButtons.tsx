import { useState } from 'react'
import { Calendar, MessageCircle, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export default function FloatingButtons() {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const location = useLocation()

  // Hide on RFQ/Admin pages as requested
  const isRfqPage = location.pathname.includes('/rfq') || 
                   location.pathname.includes('/hub/') || 
                   location.pathname.includes('/view-quote/') ||
                   location.pathname.includes('/ctrl-x9k7m')

  if (isRfqPage) return null

  const whatsappNumber = '85269704411'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`
  const calendlyUrl = 'https://calendly.com/30-min-free-packaging-consultancy'

  // Open Calendly in new tab (more reliable than iframe)
  const openCalendly = () => {
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer')
    setIsExpanded(false)
  }

  return (
    <>
      {/* Floating Buttons Group - Always Visible on Right, Stacked under AI Chat */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* WhatsApp Button */}
        <div className="flex items-center gap-3 pointer-events-auto group">
          {/* Label of Real Person - visible on desktop, transitions cleanly */}
          <span className="opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 md:opacity-100 md:translate-x-0 transition-all duration-300 bg-white text-neutral-800 text-[11px] font-bold px-2.5 py-1.5 rounded-full shadow-md border border-neutral-200 whitespace-nowrap flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
            WhatsApp (Real Person)
          </span>
          <button
            onClick={() => setIsWhatsAppOpen(true)}
            aria-label="Chat with a Real Person on WhatsApp"
            className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 relative"
          >
            <MessageCircle className="h-5 w-5" />
            {/* Pulsing indicator for mobile */}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse md:hidden" />
          </button>
        </div>

        {/* Book Meeting Button */}
        <div className="flex items-center gap-3 pointer-events-auto group">
          {/* Label of Real Person - visible on desktop, transitions cleanly */}
          <span className="opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 md:opacity-100 md:translate-x-0 transition-all duration-300 bg-white text-neutral-800 text-[11px] font-bold px-2.5 py-1.5 rounded-full shadow-md border border-neutral-200 whitespace-nowrap flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-ping" />
            Book Meeting (Real Person)
          </span>
          <button
            onClick={openCalendly}
            aria-label="Book a Free Meeting with a Real Person"
            className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 relative"
          >
            <Calendar className="h-5 w-5" />
            {/* Pulsing indicator for mobile */}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary-400 rounded-full border-2 border-white animate-pulse md:hidden" />
          </button>
        </div>
      </div>

      {/* WhatsApp Lightbox Modal */}
      {isWhatsAppOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsWhatsAppOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsWhatsAppOpen(false)}
              aria-label="Close WhatsApp dialog"
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5 text-neutral-600" aria-hidden="true" />
            </button>

            {/* Header */}
            <div className="bg-green-500 text-white px-6 py-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </h3>
              <p className="text-green-100 text-sm mt-1">
                Chat with our team directly
              </p>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                Start a Conversation
              </h4>
              <p className="text-neutral-600 mb-6">
                Click the button below to open WhatsApp and chat with us at <strong>+852 6970 4411</strong>
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open WhatsApp to chat with Achieve Pack"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors min-h-[48px]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Open WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
