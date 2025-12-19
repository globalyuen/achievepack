import { createContext, useContext, useState, ReactNode } from 'react'
import { Calendar, X } from 'lucide-react'

interface CalendlyContextType {
  openCalendly: () => void
  closeCalendly: () => void
  isOpen: boolean
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined)

export function useCalendly() {
  const context = useContext(CalendlyContext)
  if (!context) {
    throw new Error('useCalendly must be used within a CalendlyProvider')
  }
  return context
}

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const calendlyUrl = 'https://calendly.com/30-min-free-packaging-consultancy'

  const openCalendly = () => setIsOpen(true)
  const closeCalendly = () => setIsOpen(false)

  return (
    <CalendlyContext.Provider value={{ openCalendly, closeCalendly, isOpen }}>
      {children}
      
      {/* Global Calendly Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeCalendly}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeCalendly}
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
    </CalendlyContext.Provider>
  )
}

// Reusable Book a Call Button component
export function BookCallButton({ 
  className = '',
  variant = 'primary',
  children = 'Book a Call'
}: { 
  className?: string
  variant?: 'primary' | 'white' | 'outline'
  children?: ReactNode
}) {
  const { openCalendly } = useCalendly()
  
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition cursor-pointer'
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    white: 'bg-white text-primary-600 hover:bg-neutral-100',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50'
  }
  
  return (
    <button
      onClick={openCalendly}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
