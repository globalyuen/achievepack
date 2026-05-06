import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export const NeoButton = ({ children, onClick, variant = 'primary', className = '', href, to, target, title }: { children: ReactNode, onClick?: () => void, variant?: 'primary' | 'secondary' | 'dark', className?: string, href?: string, to?: string, target?: string, title?: string }) => {
  const navigate = useNavigate()
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1 text-center"
  const variants = {
    primary: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    dark: "bg-black text-[#D4FF00] hover:shadow-[8px_8px_0px_0px_#D4FF00] hover:-translate-y-1 hover:-translate-x-1 border-[#D4FF00]"
  }
  
  const handleClick = (e: React.MouseEvent) => {
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
        href={href} 
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={target === '_blank' || href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseStyle} ${variants[variant]} ${className} inline-block`}
        title={title}
      >
        {children}
      </a>
    )
  }
  
  return (
    <button 
      type="button"
      onClick={handleClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      title={title}
    >
      {children}
    </button>
  )
}

export const NeoCard = ({ children, className = '', color = 'bg-white', title }: { children: ReactNode, className?: string, color?: string, title?: string }) => (
  <motion.div 
    className={`relative border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${color} ${className}`}
    whileHover={{ y: -4, x: -4, boxShadow: "14px 14px 0px 0px rgba(0,0,0,1)" }}
    title={title}
  >
    {children}
  </motion.div>
)

export const NeoBadge = ({ children, color = 'lime', className = '' }: { children: ReactNode, color?: 'lime' | 'cyan' | 'magenta' | 'amber' | string, className?: string }) => {
  const colors: Record<string, string> = {
    lime: 'bg-[#D4FF00] text-black',
    cyan: 'bg-[#00FFFF] text-black',
    magenta: 'bg-[#FF00FF] text-white',
    amber: 'bg-amber-400 text-black'
  }
  
  const colorClass = colors[color] || color
  
  return (
    <span className={`inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black ${colorClass} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${className}`}>
      {children}
    </span>
  )
}
