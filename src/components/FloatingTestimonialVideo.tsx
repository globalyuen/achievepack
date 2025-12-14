import { useState, useEffect } from 'react'
import { X, Play } from 'lucide-react'
import { TESTIMONIALS, type Testimonial } from '../data/testimonialsData'

export default function FloatingTestimonialVideo() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Use all testimonials
  const allTestimonials = TESTIMONIALS

  // If no testimonials, don't render
  if (allTestimonials.length === 0) return null

  const currentTestimonial = allTestimonials[currentIndex]

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    if (isDismissed || allTestimonials.length <= 1) return

    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % allTestimonials.length)
        setIsAnimating(false)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [isDismissed])

  // Don't render if user dismissed
  if (isDismissed) return null

  return (
    <>
      {/* Floating Testimonial Card */}
      <div className="fixed bottom-6 left-6 z-40 group">
        {/* Close/Dismiss Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsDismissed(true)
          }}
          className="absolute -top-2 -right-2 z-10 w-6 h-6 bg-neutral-700 hover:bg-red-500 rounded-full flex items-center justify-center transition-all shadow-lg opacity-0 group-hover:opacity-100"
          title="Hide testimonials"
        >
          <X className="h-3 w-3 text-white" />
        </button>

        {/* Testimonial Card */}
        <button
          onClick={() => currentTestimonial.videoId && setIsVideoOpen(true)}
          className={`flex items-start gap-3 bg-white rounded-2xl shadow-2xl p-4 max-w-xs md:max-w-sm border border-neutral-100 hover:shadow-xl transition-all duration-300 ${currentTestimonial.videoId ? 'cursor-pointer' : 'cursor-default'} ${
            isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Owner Image as Thumbnail */}
          <div className="relative flex-shrink-0">
            <img
              src={currentTestimonial.ownerImage}
              alt={currentTestimonial.name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover"
            />
            {/* Play overlay - only show if has video */}
            {currentTestimonial.videoId && (
              <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow">
                  <Play className="h-4 w-4 text-primary-600 ml-0.5" fill="currentColor" />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 text-left min-w-0">
            <p className="text-neutral-700 text-sm leading-snug line-clamp-3 mb-2">
              {currentTestimonial.shortQuote}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-neutral-900 font-semibold text-sm">
                    {currentTestimonial.name}
                  </p>
                  {currentTestimonial.videoId && (
                    <span className="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                      <Play className="h-2.5 w-2.5" fill="currentColor" />
                      Video
                    </span>
                  )}
                </div>
                <p className="text-neutral-500 text-xs">
                  {currentTestimonial.role && `${currentTestimonial.role}${currentTestimonial.company ? ' @ ' : ''}`}
                  {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>
        </button>

        {/* Progress Dots */}
        <div className="flex justify-center gap-1.5 mt-2">
          {allTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                setCurrentIndex(index)
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-500 w-4'
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video Lightbox Modal - Only show if current testimonial has video */}
      {isVideoOpen && currentTestimonial.videoId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          />

          {/* Modal Content - Vertical Video Container (Shorts Format) */}
          <div className="relative w-full max-w-sm h-[80vh] max-h-[700px]">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 bg-neutral-200 hover:bg-neutral-300 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5 text-neutral-700" />
            </button>

            {/* YouTube Embed - Shorts Format */}
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${currentTestimonial.videoId}?autoplay=1&rel=0&loop=1&playlist=${currentTestimonial.videoId}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Customer Testimonial Video"
              />
            </div>

            {/* Video Title */}
            <div className="absolute -bottom-14 left-0 right-0 text-center">
              <h3 className="text-white font-semibold">{currentTestimonial.name}</h3>
              <p className="text-neutral-400 text-sm">
                {currentTestimonial.role && `${currentTestimonial.role}${currentTestimonial.company ? ', ' : ''}`}
                {currentTestimonial.company}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
