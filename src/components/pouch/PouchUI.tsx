import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export const NeoButton = ({ children, onClick, variant = 'primary', className = '', href, to, target, title, disabled }: { children: ReactNode, onClick?: () => void, variant?: 'primary' | 'secondary' | 'dark', className?: string, href?: string, to?: string, target?: string, title?: string, disabled?: boolean }) => {
  const navigate = useNavigate()
  const baseStyle = "relative px-6 py-3 font-semibold text-xs rounded-xl transition-all text-center border shadow-sm"
  const activeStyle = !disabled ? "active:scale-95 hover:-translate-y-0.5" : "opacity-50 cursor-not-allowed"
  
  const variants = {
    primary: `bg-neutral-900 text-white border-neutral-900 ${!disabled ? 'hover:bg-neutral-800 hover:shadow-md' : ''}`,
    secondary: `bg-white text-neutral-800 border-neutral-200 ${!disabled ? 'hover:bg-neutral-50 hover:border-neutral-300' : ''}`,
    dark: `bg-emerald-600 text-white border-emerald-600 ${!disabled ? 'hover:bg-emerald-700 hover:shadow-md shadow-emerald-600/20' : ''}`
  }
  
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return
    if (to) {
      e.preventDefault()
      navigate(to)
    } else if (onClick) {
      onClick()
    }
  }

  if (href) {
    return (
      <a 
        href={disabled ? undefined : href} 
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={target === '_blank' || href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseStyle} ${variants[variant]} ${activeStyle} ${className} inline-block`}
        title={title}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {children}
      </a>
    )
  }
  
  return (
    <button 
      type="button"
      onClick={handleClick} 
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${activeStyle} ${className}`}
      title={title}
    >
      {children}
    </button>
  )
}

export const NeoCard = ({ children, className = '', color = 'bg-white', title, onClick }: { children: ReactNode, className?: string, color?: string, title?: string, onClick?: () => void }) => (
  <motion.div 
    className={`relative border border-neutral-200 rounded-2xl p-6 shadow-sm ${color} ${className}`}
    whileHover={{ y: -4, borderColor: "rgba(212, 212, 216, 1)", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
    title={title}
    onClick={onClick}
  >
    {children}
  </motion.div>
)

export const NeoBadge = ({ children, color = 'lime', className = '' }: { children: ReactNode, color?: 'lime' | 'cyan' | 'magenta' | 'amber' | string, className?: string }) => {
  const colors: Record<string, string> = {
    lime: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    cyan: 'bg-blue-50 text-blue-700 border-blue-200',
    magenta: 'bg-purple-50 text-purple-700 border-purple-200',
    amber: 'bg-amber-50 text-amber-700 border-amber-200'
  }
  
  const colorClass = colors[color] || color
  
  return (
    <span className={`inline-block px-2.5 py-1 text-[11px] font-medium rounded-full border ${colorClass} ${className}`}>
      {children}
    </span>
  )
}
