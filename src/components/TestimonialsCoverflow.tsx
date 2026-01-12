import { useState, useEffect, useRef } from 'react'
import { motion, useSpring, PanInfo, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, X, Play, Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { TESTIMONIALS, type Testimonial } from '../data/testimonialsData'

const DRAG_BUFFER = 50
const SPRING_OPTIONS = { stiffness: 300, damping: 30 }

function getTestimonialText(t: (key: string) => string, id: string, field: 'quote' | 'shortQuote', fallback: string): string {
  const key = `testimonials.customers.${id}.${field}`
  const translated = t(key)
  return translated === key ? fallback : translated
}

interface TestimonialsCoverflowProps {
  autoScrollInterval?: number
}

export default function TestimonialsCoverflow({ autoScrollInterval = 4000 }: TestimonialsCoverflowProps) {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [videoModal, setVideoModal] = useState<string | null>(null)
  const [detailModal, setDetailModal] = useState<Testimonial | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    const { offset } = info
    if (offset.x > DRAG_BUFFER) {
      setActiveIndex(prev => prev <= 0 ? TESTIMONIALS.length - 1 : prev - 1)
    } else if (offset.x < -DRAG_BUFFER) {
      setActiveIndex(prev => prev >= TESTIMONIALS.length - 1 ? 0 : prev + 1)
    }
  }

  const handleDragStart = () => setIsDragging(true)
  const handlePrev = () => setActiveIndex(prev => prev <= 0 ? TESTIMONIALS.length - 1 : prev - 1)
  const handleNext = () => setActiveIndex(prev => prev >= TESTIMONIALS.length - 1 ? 0 : prev + 1)

  useEffect(() => {
    if (isHovered || isDragging || videoModal || detailModal) return
    const interval = setInterval(() => {
      setActiveIndex(prev => prev >= TESTIMONIALS.length - 1 ? 0 : prev + 1)
    }, autoScrollInterval)
    return () => clearInterval(interval)
  }, [isHovered, isDragging, videoModal, detailModal, autoScrollInterval])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (videoModal || detailModal) {
        if (e.key === 'Escape') {
          setVideoModal(null)
          setDetailModal(null)
        }
      } else {
        if (e.key === 'ArrowLeft') handlePrev()
        if (e.key === 'ArrowRight') handleNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [videoModal, detailModal])

  const currentTestimonial = TESTIMONIALS[activeIndex]

  return (
    <section className="py-16 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Title & Featured Image */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
              Trusted by Leading Brands
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-lg mx-auto lg:mx-0">
              See how businesses like yours have transformed their packaging with Achieve Pack solutions.
            </p>
            
            {/* Featured Pouch Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary-50 to-white p-6 max-w-md mx-auto lg:mx-0">
              <img
                src={currentTestimonial?.pouchImage || '/imgs/testimonials/start.webp'}
                alt="Featured Packaging"
                className="w-full h-auto object-contain transition-all duration-500"
              />
              {currentTestimonial?.brandLogo && (
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-xl p-2 shadow-lg">
                  <img
                    src={currentTestimonial.brandLogo}
                    alt={currentTestimonial.company}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Coverflow Carousel */}
          <div 
            ref={containerRef}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 text-neutral-700" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 text-neutral-700" />
            </button>

            {/* Coverflow Container */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className="flex items-center justify-center cursor-grab active:cursor-grabbing h-[420px] md:h-[480px]"
              style={{ perspective: '1200px' }}
            >
              <div className="relative flex items-center justify-center w-full">
                {TESTIMONIALS.map((testimonial, index) => {
                  const offset = index - activeIndex
                  const absOffset = Math.abs(offset)
                  if (absOffset > 3) return null
                  
                  return (
                    <TestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                      offset={offset}
                      isActive={index === activeIndex}
                      onOpenVideo={() => testimonial.videoId && setVideoModal(testimonial.videoId)}
                      onOpenDetail={() => setDetailModal(testimonial)}
                      t={t}
                    />
                  )
                })}
              </div>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-1.5 mt-4">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-primary-600 w-6' 
                      : 'bg-neutral-300 hover:bg-neutral-400 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setVideoModal(null)}
          >
            <button
              onClick={() => setVideoModal(null)}
              className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <div 
              className="w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoModal}?autoplay=1`}
                title="Video Testimonial"
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail Modal */}
      <AnimatePresence>
        {detailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setDetailModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative max-w-4xl w-full rounded-2xl shadow-2xl ${detailModal.bgColor} overflow-hidden`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="hidden md:flex w-[400px] bg-white/30 items-center justify-center p-6 flex-shrink-0">
                  <img
                    src={detailModal.pouchImage}
                    alt="Packaging Pouch"
                    className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="flex-1 p-6">
                  <button
                    onClick={() => setDetailModal(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <X className="h-4 w-4 text-neutral-700" />
                  </button>
                  <Quote className="h-8 w-8 text-primary-500 mb-4" />
                  <p className="text-neutral-800 text-lg leading-relaxed mb-6">
                    "{getTestimonialText(t, detailModal.id, 'quote', detailModal.quote)}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <img
                          src={detailModal.ownerImage}
                          alt={detailModal.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {detailModal.companyLogo && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-neutral-200 overflow-hidden shadow-sm">
                          <img src={detailModal.companyLogo} alt="" className="w-full h-full object-contain p-0.5" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-900">{detailModal.name}</div>
                      {(detailModal.role || detailModal.company) && (
                        <div className="text-sm text-neutral-600">
                          {detailModal.role && `${detailModal.role}${detailModal.company ? ', ' : ''}`}
                          {detailModal.company}
                        </div>
                      )}
                    </div>
                    {detailModal.videoId && (
                      <button
                        onClick={() => { setDetailModal(null); setVideoModal(detailModal.videoId!); }}
                        className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg"
                      >
                        <Play className="h-5 w-5 text-white ml-0.5" fill="white" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: Testimonial
  offset: number
  isActive: boolean
  onOpenVideo: () => void
  onOpenDetail: () => void
  t: (key: string) => string
}

function TestimonialCard({ testimonial, offset, isActive, onOpenVideo, onOpenDetail, t }: TestimonialCardProps) {
  const absOffset = Math.abs(offset)
  
  const rotateYValue = offset * -25
  const scaleValue = isActive ? 1 : Math.max(0.7, 0.9 - absOffset * 0.1)
  const translateXValue = offset * 120
  const translateZValue = isActive ? 30 : -100 - absOffset * 50
  const opacityValue = isActive ? 1 : Math.max(0.5, 1 - absOffset * 0.25)
  const zIndex = 10 - absOffset

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
        className={`
          w-[200px] md:w-[240px] ${testimonial.bgColor} rounded-2xl p-4 
          shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer
          ${isActive ? 'ring-4 ring-primary-500/30 ring-offset-2' : ''}
        `}
        onClick={onOpenDetail}
      >
        {/* Header with Avatar & Logo */}
        <div className="flex items-start justify-between mb-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img
              src={testimonial.ownerImage}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          {testimonial.brandLogo && (
            <div className="w-10 h-10 bg-white rounded-lg p-1 shadow-sm">
              <img
                src={testimonial.brandLogo}
                alt={testimonial.company}
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>

        {/* Name & Company */}
        <h4 className="font-semibold text-neutral-900 text-sm">{testimonial.name}</h4>
        {testimonial.company && (
          <p className="text-xs text-neutral-500 mb-2">{testimonial.company}</p>
        )}

        {/* Short Quote */}
        <p className="text-xs text-neutral-700 line-clamp-3 mb-3">
          "{getTestimonialText(t, testimonial.id, 'shortQuote', testimonial.shortQuote)}"
        </p>

        {/* YouTube Button */}
        {testimonial.videoId && (
          <button
            onClick={(e) => { e.stopPropagation(); onOpenVideo(); }}
            className="flex items-center gap-2 text-xs text-red-600 hover:text-red-700 font-medium"
          >
            <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
              <Play className="h-3 w-3 text-white ml-0.5" fill="white" />
            </div>
            Watch Video
          </button>
        )}
      </div>
    </motion.div>
  )
}
