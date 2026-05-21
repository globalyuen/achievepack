import { useState } from 'react'
import { Calendar, X, MessageSquare } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { getDomain, getWhatsAppLink, getCalendlyLink } from '../utils/domain'

export default function FloatingButtons() {
  const location = useLocation()
  const domain = getDomain()

  // Load initial collapsed state from localStorage (persists across page navigations)
  const [isCollapsed, setIsCollapsed] = useState(() => {
    try {
      return localStorage.getItem('achievepack-floating-collapsed') === 'true'
    } catch {
      return false
    }
  })

  // Sync collapsed state to localStorage
  const handleCollapse = (collapsed: boolean) => {
    setIsCollapsed(collapsed)
    try {
      localStorage.setItem('achievepack-floating-collapsed', String(collapsed))
    } catch (e) {
      console.error(e)
    }
  }

  // Hide on RFQ/Admin pages as requested
  const isRfqPage = location.pathname.includes('/rfq') || 
                   location.pathname.includes('/hub/') || 
                   location.pathname.includes('/view-quote/') ||
                   location.pathname.includes('/ctrl-x9k7m')

  if (isRfqPage) return null

  const whatsappUrl = getWhatsAppLink()
  const calendlyUrl = getCalendlyLink()

  // Adaptive Styling
  const isPouchDomain = domain === 'pouch'
  
  // Custom theme classes based on domain
  const meetingClass = isPouchDomain
    ? 'bg-black text-[#D4FF00] border-4 border-[#D4FF00] shadow-[4px_4px_0px_0px_rgba(212,255,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(212,255,0,1)]'
    : 'bg-black text-[#00FFFF] border-4 border-[#00FFFF] shadow-[4px_4px_0px_0px_rgba(0,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,255,255,1)]'

  const whatsappClass = 'bg-[#25D366] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'

  // Small Trigger Button when collapsed
  if (isCollapsed) {
    return (
      <button
        onClick={() => handleCollapse(false)}
        aria-label="Open contact buttons"
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center border-4 border-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transform scale-100 hover:scale-105 active:scale-95 cursor-pointer ${
          isPouchDomain ? 'bg-[#D4FF00] text-black hover:bg-[#c2eb00]' : 'bg-[#00FFFF] text-black hover:bg-[#00e6e6]'
        }`}
      >
        <MessageSquare className="w-5 h-5 animate-pulse" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end font-['Space_Grotesk'] font-black uppercase text-xs animate-in slide-in-from-bottom duration-300">
      {/* Tiny Header Close Button */}
      <button
        onClick={() => handleCollapse(true)}
        aria-label="Hide contact buttons"
        className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center border-2 border-black hover:bg-neutral-800 transition-colors hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      {/* Book Meeting Button */}
      <a 
        href={calendlyUrl}
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Book a Free Consultation"
        className={`${meetingClass} px-4 py-3 rounded-full hover:-translate-y-1 transition-all duration-200 flex items-center gap-2 group cursor-pointer pointer-events-auto min-h-[48px]`}
      >
        <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
        <span className="hidden sm:inline whitespace-nowrap">
          {isPouchDomain ? 'Book Meeting' : 'Book Meeting (Real Person)'}
        </span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`${whatsappClass} px-4 py-3 rounded-full hover:-translate-y-1 transition-all duration-200 flex items-center gap-2 group cursor-pointer pointer-events-auto min-h-[48px]`}
      >
        {/* Actual WhatsApp Brand SVG Icon */}
        <svg 
          className="w-5 h-5 fill-currentColor transition-transform group-hover:scale-110" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hidden sm:inline whitespace-nowrap">
          {isPouchDomain ? 'WhatsApp Us' : 'WhatsApp (Real Person)'}
        </span>
      </a>
    </div>
  )
}
