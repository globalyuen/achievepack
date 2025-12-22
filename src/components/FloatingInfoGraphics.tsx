import React, { useState, useEffect, useMemo } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const INFOGRAPHIC_IMAGES = [
  { src: '/imgs/4-infograhic/compost.webp', alt: 'Compostable Materials Infographic', title: 'Compostable', logo: '/eco-logo/transparent-bkg/compost.png' },
  { src: '/imgs/4-infograhic/recyclable.webp', alt: 'Recyclable Materials Infographic', title: 'Recyclable', logo: '/eco-logo/transparent-bkg/recycle.png' },
  { src: '/imgs/4-infograhic/PCR.webp', alt: 'PCR Materials Infographic', title: 'PCR', logo: '/eco-logo/transparent-bkg/pcr.png' },
  { src: '/imgs/4-infograhic/Bio-PE.webp', alt: 'Bio-PE Materials Infographic', title: 'Bio-PE', logo: '/eco-logo/transparent-bkg/biope.png' },
]

interface FloatingIcon {
  id: number
  x: number
  y: number
  size: number
  delay: number
  infographicIndex: number
}

interface FloatingInfoGraphicsProps {
  className?: string
}

export const FloatingInfoGraphics: React.FC<FloatingInfoGraphicsProps> = ({ className = '' }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Generate positions for floating icons - positioned for overlay on banner
  const floatingIcons = useMemo<FloatingIcon[]>(() => {
    return [
      { id: 0, x: 8, y: 50, size: 80, delay: 0, infographicIndex: 0 },
      { id: 1, x: 30, y: 30, size: 75, delay: 0.4, infographicIndex: 1 },
      { id: 2, x: 70, y: 35, size: 78, delay: 0.8, infographicIndex: 2 },
      { id: 3, x: 92, y: 55, size: 80, delay: 1.2, infographicIndex: 3 },
    ]
  }, [])

  const handleIconClick = (infographicIndex: number) => {
    setCurrentIndex(infographicIndex)
    setLightboxOpen(true)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + INFOGRAPHIC_IMAGES.length) % INFOGRAPHIC_IMAGES.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % INFOGRAPHIC_IMAGES.length)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!lightboxOpen) return
    if (e.key === 'Escape') setLightboxOpen(false)
    if (e.key === 'ArrowLeft') handlePrev()
    if (e.key === 'ArrowRight') handleNext()
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightboxOpen])

  return (
    <>
      {/* Floating Icons - Absolute positioned to overlay on parent */}
      <div className={`absolute inset-0 pointer-events-none z-20 ${className}`}>
        {/* Floating Icons */}
        {floatingIcons.map((icon) => (
          <button
            key={icon.id}
            onClick={() => handleIconClick(icon.infographicIndex)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-full group pointer-events-auto"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              animation: `float ${3 + icon.delay}s ease-in-out infinite`,
              animationDelay: `${icon.delay}s`,
            }}
            title={`View ${INFOGRAPHIC_IMAGES[icon.infographicIndex].title} Infographic`}
          >
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-full shadow-xl border-2 border-white/50 flex items-center justify-center group-hover:bg-white group-hover:shadow-2xl transition-all overflow-hidden"
              style={{ width: icon.size, height: icon.size }}
            >
              <img 
                src={INFOGRAPHIC_IMAGES[icon.infographicIndex].logo} 
                alt={INFOGRAPHIC_IMAGES[icon.infographicIndex].title}
                className="w-full h-full object-contain p-1"
              />
            </div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white font-semibold opacity-0 group-hover:opacity-100 transition whitespace-nowrap bg-black/60 px-2 py-1 rounded">
              {INFOGRAPHIC_IMAGES[icon.infographicIndex].title}
            </span>
          </button>
        ))}

        {/* CSS for float animation */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-12px); }
          }
        `}</style>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10"
          >
            <X className="h-10 w-10" />
          </button>

          {/* Navigation - Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition bg-black/30 rounded-full p-2 hover:bg-black/50"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          {/* Image container */}
          <div 
            className="max-w-5xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={INFOGRAPHIC_IMAGES[currentIndex].src}
              alt={INFOGRAPHIC_IMAGES[currentIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
              <p className="text-white text-center text-lg font-semibold">
                {INFOGRAPHIC_IMAGES[currentIndex].title} Materials
              </p>
            </div>
          </div>

          {/* Navigation - Next */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition bg-black/30 rounded-full p-2 hover:bg-black/50"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {INFOGRAPHIC_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-3 h-3 rounded-full transition ${
                  idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingInfoGraphics
