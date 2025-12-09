import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ExternalLink, Star, Quote, X } from 'lucide-react'
import { TESTIMONIALS, type Testimonial } from '../data/testimonialsData'

export default function TestimonialsWall() {
  const { t } = useTranslation()
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null)
  const [hoveredTestimonial, setHoveredTestimonial] = useState<Testimonial | null>(null)

  // Get current pouch image - use hovered testimonial's pouch or default
  const currentPouchImage = hoveredTestimonial?.pouchImage || '/imgs/testimonials/pouch-hover/morlife.webp'

  // Memoized event handlers to prevent blocking
  const handleClick = useCallback((testimonial: Testimonial) => {
    setActiveTestimonial(testimonial)
  }, [])

  const handleMouseEnter = useCallback((testimonial: Testimonial) => {
    setHoveredTestimonial(testimonial)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredTestimonial(null)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <Quote className="h-6 w-6 text-primary-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {t('testimonials.wallOfLove.title')}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t('testimonials.wallOfLove.description')}
          </p>
        </div>

        {/* Grid of Testimonials with Featured Pouch */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {TESTIMONIALS.slice(0, 4).map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${testimonial.bgColor} rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              onClick={() => handleClick(testimonial)}
              onMouseEnter={() => handleMouseEnter(testimonial)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Author header */}
              <div className="flex items-center gap-3 mb-4">
                {/* Avatar with company logo */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img
                      src={testimonial.ownerImage}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=22c55e&color=fff&size=128`
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-neutral-900 truncate">{testimonial.name}</span>
                    {testimonial.url && (
                      <a
                        href={testimonial.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                  {(testimonial.role || testimonial.company) && (
                    <p className="text-xs text-neutral-600 truncate">
                      {testimonial.role && `${testimonial.role}${testimonial.company ? ' @ ' : ''}`}
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>

              {/* Quote */}
              <p className="text-neutral-800 text-sm leading-relaxed mb-3">
                {testimonial.quote}
              </p>

              {/* Rating stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          ))}

          {/* Featured Pouch - Occupies 4 card spaces (2x2 on large screens) */}
          <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary-50 to-white flex items-center justify-center p-8">
            <img
              src={currentPouchImage}
              alt="Eco-Friendly Packaging Pouch"
              className="w-full h-full object-contain drop-shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-500"
            />
          </div>

          {TESTIMONIALS.slice(4).map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${testimonial.bgColor} rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              onClick={() => handleClick(testimonial)}
              onMouseEnter={() => handleMouseEnter(testimonial)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Author header */}
              <div className="flex items-center gap-3 mb-4">
                {/* Avatar with company logo */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img
                      src={testimonial.ownerImage}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=22c55e&color=fff&size=128`
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-neutral-900 truncate">{testimonial.name}</span>
                    {testimonial.url && (
                      <a
                        href={testimonial.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                  {(testimonial.role || testimonial.company) && (
                    <p className="text-xs text-neutral-600 truncate">
                      {testimonial.role && `${testimonial.role}${testimonial.company ? ' @ ' : ''}`}
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>

              {/* Quote */}
              <p className="text-neutral-800 text-sm leading-relaxed mb-3">
                {testimonial.quote}
              </p>

              {/* Rating stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6">
            {t('testimonials.wallOfLove.trustedBy')}
          </p>
          <div className="flex justify-center">
            <img
              src="/imgs/testimonials-client-logos.webp"
              alt="Our Client Logos"
              className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>

      {/* Testimonial Popup Modal with 600px Pouch */}
      {activeTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setActiveTestimonial(null)}
        >
          <div
            className={`relative max-w-5xl w-full rounded-2xl shadow-2xl ${activeTestimonial.bgColor} overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row">
              {/* Large Pouch Image - Left Side (600px width) */}
              <div className="hidden md:flex w-[600px] bg-white/30 items-center justify-center p-6 flex-shrink-0">
                <img
                  src={activeTestimonial.pouchImage}
                  alt="Packaging Pouch"
                  className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Testimonial Content - Right Side */}
              <div className="flex-1 p-6">
                {/* Close button */}
                <button
                  onClick={() => setActiveTestimonial(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="h-4 w-4 text-neutral-700" />
                </button>

                {/* Quote icon */}
                <Quote className="h-8 w-8 text-primary-500 mb-4" />

                {/* Testimonial content */}
                <p className="text-neutral-800 text-lg leading-relaxed mb-6">
                  "{activeTestimonial.quote}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <img
                        src={activeTestimonial.ownerImage}
                        alt={activeTestimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(activeTestimonial.name)}&background=22c55e&color=fff&size=128`
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="font-semibold text-neutral-900">{activeTestimonial.name}</div>
                    {(activeTestimonial.role || activeTestimonial.company) && (
                      <div className="text-sm text-neutral-600">
                        {activeTestimonial.role && `${activeTestimonial.role}${activeTestimonial.company ? ', ' : ''}`}
                        {activeTestimonial.company}
                      </div>
                    )}
                  </div>

                  {/* Website link */}
                  {activeTestimonial.url && (
                    <a
                      href={activeTestimonial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-sm"
                    >
                      <ExternalLink className="h-4 w-4 text-neutral-600" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
