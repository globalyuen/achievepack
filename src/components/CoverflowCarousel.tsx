import { useState, useEffect, useRef } from 'react'
import { motion, useSpring, PanInfo, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface CarouselItem {
  image: string
  link: string
  label: string
}

interface CoverflowCarouselProps {
  items: CarouselItem[]
  autoScrollInterval?: number // in milliseconds, default 2000 (2 seconds per card)
  enableLightbox?: boolean // enable click to open lightbox
}

const DRAG_BUFFER = 50
const SPRING_OPTIONS = { stiffness: 300, damping: 30 }

export default function CoverflowCarousel({ items, autoScrollInterval = 2000, enableLightbox = true }: CoverflowCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2))
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
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

  // Lightbox functions
  const openLightbox = (index: number) => {
    if (enableLightbox) {
      setLightboxIndex(index)
      setLightboxOpen(true)
    }
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const lightboxPrev = () => {
    setLightboxIndex(prev => prev <= 0 ? items.length - 1 : prev - 1)
  }

  const lightboxNext = () => {
    setLightboxIndex(prev => prev >= items.length - 1 ? 0 : prev + 1)
  }

  // Auto-scroll: one card per interval, infinite loop (paused when lightbox open)
  useEffect(() => {
    if (isHovered || isDragging || lightboxOpen) return
    
    const interval = setInterval(() => {
      setActiveIndex(prev => prev >= items.length - 1 ? 0 : prev + 1)
    }, autoScrollInterval)
    
    return () => clearInterval(interval)
  }, [isHovered, isDragging, lightboxOpen, items.length, autoScrollInterval])

  // Keyboard navigation (including Escape for lightbox)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox()
        if (e.key === 'ArrowLeft') lightboxPrev()
        if (e.key === 'ArrowRight') lightboxNext()
      } else {
        if (e.key === 'ArrowLeft') handlePrev()
        if (e.key === 'ArrowRight') handleNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

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
                index={index}
                onOpenLightbox={openLightbox}
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8 text-white" />
            </button>

            {/* Main lightbox image */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[lightboxIndex].image}
                alt={items[lightboxIndex].label}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white text-lg font-semibold">{items[lightboxIndex].label}</p>
                <p className="text-white/60 text-sm mt-1">{lightboxIndex + 1} / {items.length}</p>
                <Link
                  to={items[lightboxIndex].link}
                  className="inline-block mt-3 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
                  onClick={closeLightbox}
                >
                  View Product →
                </Link>
              </div>
            </motion.div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 rounded-lg">
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(index); }}
                  className={`w-12 h-12 rounded overflow-hidden transition-all ${
                    index === lightboxIndex ? 'ring-2 ring-primary-500 scale-110' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface CoverflowCardProps {
  item: CarouselItem
  offset: number
  isActive: boolean
  index: number
  onOpenLightbox: (index: number) => void
}

function CoverflowCard({ item, offset, isActive, index, onOpenLightbox }: CoverflowCardProps) {
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
      <div 
        className="block group cursor-pointer"
        onClick={() => isActive && onOpenLightbox(index)}
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
      </div>
    </motion.div>
  )
}
