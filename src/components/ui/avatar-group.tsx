import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

interface AvatarItem {
  src: string
  fallback: string
  name: string
  company?: string
}

const TESTIMONIAL_AVATARS: AvatarItem[] = [
  {
    src: '/imgs/testimonials/owner/michelle.webp',
    fallback: 'MC',
    name: 'Michelle Correa',
    company: 'themclife.com',
  },
  {
    src: '/imgs/testimonials/owner/nicole.webp',
    fallback: 'NS',
    name: 'Nicole Sarduy',
  },
  {
    src: '/imgs/testimonials/owner/jemma.webp',
    fallback: 'JD',
    name: 'Jemma Defore',
    company: 'Mylk Made',
  },
  {
    src: '/imgs/testimonials/owner/ruby.webp',
    fallback: 'RM',
    name: 'Ruby Mayer',
    company: 'EMU Elixir',
  },
  {
    src: '/imgs/testimonials/owner/Richard.webp',
    fallback: 'RT',
    name: 'Richard Tango-Lowy',
    company: 'Dancing Lion',
  },
  {
    src: '/imgs/testimonials/owner/Josie.webp',
    fallback: 'JW',
    name: 'Josie Wong',
    company: 'Morlife',
  },
]

export default function NavAvatarGroup() {
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <Link 
      to="/reviews"
      className="flex items-center gap-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setHoveredIndex(null)
      }}
      ref={containerRef}
    >
      {/* Avatar Stack */}
      <div className="flex -space-x-2">
        {TESTIMONIAL_AVATARS.slice(0, 5).map((avatar, index) => (
          <motion.div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              scale: hoveredIndex === index ? 1.15 : 1,
              zIndex: hoveredIndex === index ? 10 : 5 - index,
              x: isHovered ? index * 4 : 0,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="w-7 h-7 rounded-full border-2 border-white bg-neutral-100 overflow-hidden shadow-sm">
              <img
                src={avatar.src}
                alt={avatar.name}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(avatar.name)}&background=22c55e&color=fff&size=64`
                }}
              />
            </div>
            
            {/* Tooltip */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50"
                >
                  <div className="bg-neutral-900 text-white text-xs px-2.5 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                    <div className="font-medium">{avatar.name}</div>
                    {avatar.company && (
                      <div className="text-neutral-400 text-[10px]">{avatar.company}</div>
                    )}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 rotate-45" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
        
        {/* +N indicator */}
        <motion.div
          className="w-7 h-7 rounded-full border-2 border-white bg-primary-100 flex items-center justify-center text-[10px] font-bold text-primary-600 shadow-sm relative z-0"
          animate={{ x: isHovered ? 20 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          +{Math.max(0, 50 - 5)}
        </motion.div>
      </div>
      
      {/* Rating Badge */}
      <motion.div 
        className="hidden md:flex items-center gap-1 text-xs"
        animate={{ opacity: isHovered ? 1 : 0.8 }}
      >
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <span className="text-neutral-500 font-medium">5.0</span>
      </motion.div>
    </Link>
  )
}
