import { useState } from 'react'
import { Calendar, MessageCircle, X } from 'lucide-react'

export default function FloatingButtons() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const whatsappNumber = '85269704411'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`
  const calendlyUrl = 'https://calendly.com/30-min-free-packaging-consultancy'

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Expanded Options */}
        {isExpanded && (
          <div className="flex flex-col gap-3 animate-in slide-in-from-bottom-2 duration-200">
            {/* Book a Meeting Button */}
            <button
              onClick={() => {
                setIsCalendlyOpen(true)
                setIsExpanded(false)
              }}
              className="flex items-center gap-3 bg-primary-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-primary-700 transition-all hover:scale-105"
            >
              <Calendar className="h-5 w-5" />
              <span className="font-medium whitespace-nowrap">Book a Free Meeting</span>
            </button>

            {/* WhatsApp Button */}
            <button
              onClick={() => {
                setIsWhatsAppOpen(true)
                setIsExpanded(false)
              }}
              className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium whitespace-nowrap">WhatsApp Me Now</span>
            </button>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Close contact options' : 'Open contact options'}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
            isExpanded 
              ? 'bg-neutral-700 hover:bg-neutral-800' 
              : 'bg-primary-600 hover:bg-primary-700'
          }`}
        >
          {isExpanded ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <MessageCircle className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Calendly Lightbox Modal */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsCalendlyOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsCalendlyOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5 text-neutral-600" />
            </button>

            {/* Header */}
            <div className="bg-primary-600 text-white px-6 py-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Book a Free 30-Min Packaging Consultancy
              </h3>
              <p className="text-primary-100 text-sm mt-1">
                Schedule a meeting with our packaging experts
              </p>
            </div>

            {/* Calendly Embed */}
            <iframe
              src={calendlyUrl}
              className="w-full h-[calc(100%-80px)]"
              frameBorder="0"
              title="Book a Meeting"
            />
          </div>
        </div>
      )}

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
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5 text-neutral-600" />
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
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Open WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
