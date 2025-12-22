import React, { useState, useEffect, useMemo } from 'react'
import { Image, X, ChevronLeft, ChevronRight } from 'lucide-react'

const INFOGRAPHIC_IMAGES = [
  { src: '/imgs/4-infograhic/compost.webp', alt: 'Compostable Materials Infographic', title: 'Compostable' },
  { src: '/imgs/4-infograhic/recyclable.webp', alt: 'Recyclable Materials Infographic', title: 'Recyclable' },
  { src: '/imgs/4-infograhic/PCR.webp', alt: 'PCR Materials Infographic', title: 'PCR' },
  { src: '/imgs/4-infograhic/Bio-PE.webp', alt: 'Bio-PE Materials Infographic', title: 'Bio-PE' },
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

  // Generate random positions for floating icons - memoized to be stable
  const floatingIcons = useMemo<FloatingIcon[]>(() => {
    return [
      { id: 0, x: 12, y: 50, size: 72, delay: 0, infographicIndex: 0 },
      { id: 1, x: 35, y: 50, size: 68, delay: 0.3, infographicIndex: 1 },
      { id: 2, x: 65, y: 50, size: 70, delay: 0.6, infographicIndex: 2 },
      { id: 3, x: 88, y: 50, size: 72, delay: 0.9, infographicIndex: 3 },
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
      {/* Floating Icons Container */}
      <div className={`relative h-32 bg-gradient-to-r from-emerald-50 via-white to-teal-50 overflow-visible ${className}`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-base text-emerald-700 font-semibold">
            🌿 Click any icon to explore eco materials
          </p>
        </div>

        {/* Floating Icons */}
        {floatingIcons.map((icon) => (
          <button
            key={icon.id}
            onClick={() => handleIconClick(icon.infographicIndex)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-full group"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              animation: `float ${3 + icon.delay}s ease-in-out infinite`,
              animationDelay: `${icon.delay}s`,
            }}
            title={`View ${INFOGRAPHIC_IMAGES[icon.infographicIndex].title} Infographic`}
          >
            <div 
              className="bg-white rounded-full shadow-lg border-2 border-emerald-400 flex items-center justify-center group-hover:border-emerald-600 group-hover:shadow-xl transition-all"
              style={{ width: icon.size, height: icon.size }}
            >
              <Image className="text-emerald-600 group-hover:text-emerald-700" style={{ width: icon.size * 0.5, height: icon.size * 0.5 }} />
            </div>
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-emerald-700 font-medium opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              {INFOGRAPHIC_IMAGES[icon.infographicIndex].title}
            </span>
          </button>
        ))}

        {/* CSS for float animation */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-8px); }
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
