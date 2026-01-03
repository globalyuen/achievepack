import { createContext, useContext, ReactNode } from 'react'

interface CalendlyContextType {
  openCalendly: () => void
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined)

const CALENDLY_URL = 'https://calendly.com/30-min-free-packaging-consultancy'

export function useCalendly() {
  const context = useContext(CalendlyContext)
  if (!context) {
    throw new Error('useCalendly must be used within a CalendlyProvider')
  }
  return context
}

export function CalendlyProvider({ children }: { children: ReactNode }) {
  // Open Calendly in new tab instead of iframe (more reliable)
  const openCalendly = () => {
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <CalendlyContext.Provider value={{ openCalendly }}>
      {children}
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
