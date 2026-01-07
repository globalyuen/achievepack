import { useState, useEffect, useRef } from 'react'
import { motion, useSpring, PanInfo } from 'motion/react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselItem {
  image: string
  link: string
  label: string
}

interface CoverflowCarouselProps {
  items: CarouselItem[]
  autoScrollInterval?: number // in milliseconds, default 1000 (1 second per card)
}

const DRAG_BUFFER = 50
const SPRING_OPTIONS = { stiffness: 300, damping: 30 }

export default function CoverflowCarousel({ items, autoScrollInterval = 2000 }: CoverflowCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2))
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle drag with infinite loop
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    const { offset } = info
    if (offset.x > DRAG_BUFFER) {
      // Drag right - go to previous (with wrap)
      setActiveIndex(prev => prev <= 0 ? items.length - 1 : prev - 1)
    } else if (offset.x < -DRAG_BUFFER) {
      // Drag left - go to next (with wrap)
      setActiveIndex(prev => prev >= items.length - 1 ? 0 : prev + 1)
    }
  }

  const handleDragStart = () => {
    setIsDragging(true)
  }

  // Infinite loop navigation
  const handlePrev = () => {
    setActiveIndex(prev => prev <= 0 ? items.length - 1 : prev - 1)
  }

  const handleNext = () => {
    setActiveIndex(prev => prev >= items.length - 1 ? 0 : prev + 1)
  }

  // Auto-scroll: one card per second, infinite loop
  useEffect(() => {
    if (isHovered || isDragging) return
    
    const interval = setInterval(() => {
      setActiveIndex(prev => prev >= items.length - 1 ? 0 : prev + 1)
    }, autoScrollInterval)
    
    return () => clearInterval(interval)
  }, [isHovered, isDragging, items.length, autoScrollInterval])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Arrows - always enabled for infinite loop */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all hover:scale-110"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-neutral-700" />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all hover:scale-110"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-neutral-700" />
      </button>

      {/* Coverflow Container */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className="flex items-center justify-center cursor-grab active:cursor-grabbing h-[400px] md:h-[500px]"
        style={{ perspective: '1200px' }}
      >
        <div className="relative flex items-center justify-center w-full">
          {items.map((item, index) => {
            const offset = index - activeIndex
            const absOffset = Math.abs(offset)
            
            // Only render cards within visible range
            if (absOffset > 4) return null
            
            return (
              <CoverflowCard
                key={index}
                item={item}
                offset={offset}
                isActive={index === activeIndex}
              />
            )
          })}
        </div>
      </motion.div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-1.5 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'bg-primary-600 w-6' 
                : 'bg-neutral-300 hover:bg-neutral-400 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

interface CoverflowCardProps {
  item: CarouselItem
  offset: number
  isActive: boolean
}

function CoverflowCard({ item, offset, isActive }: CoverflowCardProps) {
  const absOffset = Math.abs(offset)
  
  // Calculate transforms
  const rotateYValue = offset * -35
  const scaleValue = isActive ? 1 : Math.max(0.6, 0.85 - absOffset * 0.08)
  const translateXValue = offset * 140
  const translateZValue = isActive ? 50 : -150 - absOffset * 80
  const opacityValue = isActive ? 1 : Math.max(0.4, 1 - absOffset * 0.2)
  const zIndex = 10 - absOffset

  // Use springs for smooth animations
  const rotateY = useSpring(rotateYValue, SPRING_OPTIONS)
  const scale = useSpring(scaleValue, SPRING_OPTIONS)
  const translateX = useSpring(translateXValue, SPRING_OPTIONS)
  const translateZ = useSpring(translateZValue, SPRING_OPTIONS)
  const opacity = useSpring(opacityValue, SPRING_OPTIONS)

  useEffect(() => {
    rotateY.set(rotateYValue)
    scale.set(scaleValue)
    translateX.set(translateXValue)
    translateZ.set(translateZValue)
    opacity.set(opacityValue)
  }, [offset, isActive, absOffset])

  return (
    <motion.div
      className="absolute"
      style={{
        rotateY,
        scale,
        x: translateX,
        z: translateZ,
        opacity,
        zIndex,
        transformStyle: 'preserve-3d',
      }}
    >
      <Link 
        to={item.link} 
        className="block group"
        onClick={(e) => !isActive && e.preventDefault()}
      >
        <div 
          className={`
            w-[160px] md:w-[220px] bg-white rounded-2xl overflow-hidden
            shadow-2xl hover:shadow-3xl transition-shadow duration-300
            ${isActive ? 'ring-4 ring-primary-500/50 ring-offset-2' : ''}
          `}
          style={{ aspectRatio: '9/16' }}
        >
          <img
            src={item.image}
            alt={item.label}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <motion.p 
          className={`
            text-sm md:text-base font-semibold mt-4 text-center transition-colors
            ${isActive ? 'text-primary-600' : 'text-neutral-400'}
          `}
          style={{ opacity }}
        >
          {item.label}
        </motion.p>
      </Link>
    </motion.div>
  )
}
