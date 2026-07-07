import { useState, useCallback, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ExternalLink, Star, Quote, X, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS, type Testimonial } from '../data/testimonialsData'

// Helper function to get translated testimonial text
function getTestimonialText(t: (key: string) => string, id: string, field: 'quote' | 'shortQuote', fallback: string): string {
  const key = `testimonials.customers.${id}.${field}`
  const translated = t(key)
  // If translation key is returned (not found), use fallback
  return translated === key ? fallback : translated
}

export default function TestimonialsWall() {
  const { t } = useTranslation()
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null)
  const [hoveredTestimonial, setHoveredTestimonial] = useState<Testimonial | null>(null)
  const [videoTestimonial, setVideoTestimonial] = useState<Testimonial | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Randomize sequence of testimonials on component mount
  const [shuffledTestimonials, setShuffledTestimonials] = useState<Testimonial[]>(() => {
    const arr = [...TESTIMONIALS]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  })

  const isPausedRef = useRef(false)

  // Auto-scroll logic with pause on hover
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const intervalId = setInterval(() => {
      if (isPausedRef.current || activeTestimonial || videoTestimonial) return

      const cardWidth = 364 // card width (340) + gap (24)
      const maxScrollLeft = container.scrollWidth - container.clientWidth

      if (container.scrollLeft >= maxScrollLeft - 15) {
        // Wrap around to beginning smoothly
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        })
      } else {
        container.scrollBy({
          left: cardWidth,
          behavior: 'smooth'
        })
      }
    }, 4000) // Scroll every 4 seconds

    return () => clearInterval(intervalId)
  }, [activeTestimonial, videoTestimonial])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340 // card width (300/340) + gap (24)
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  // Get current pouch image - use hovered testimonial's pouch or default
  const currentPouchImage = hoveredTestimonial?.pouchImage || '/imgs/testimonials/start.webp'

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

  const handleVideoClick = useCallback((e: React.MouseEvent, testimonial: Testimonial) => {
    e.stopPropagation()
    setVideoTestimonial(testimonial)
  }, [])

  // Helper function to map light tailwind bgColors to neon accents
  const getNeonStyles = (bgColor: string) => {
    const colorMap: Record<string, { border: string; hoverBorder: string; glow: string; text: string; bgGlow: string }> = {
      'bg-emerald-100': {
        border: 'border-emerald-500/10',
        hoverBorder: 'hover:border-emerald-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(16,185,129,0.12)]',
        text: 'text-emerald-400',
        bgGlow: 'from-emerald-500/5 to-transparent'
      },
      'bg-violet-100': {
        border: 'border-violet-500/10',
        hoverBorder: 'hover:border-violet-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(139,92,246,0.12)]',
        text: 'text-violet-400',
        bgGlow: 'from-violet-500/5 to-transparent'
      },
      'bg-amber-100': {
        border: 'border-amber-500/10',
        hoverBorder: 'hover:border-amber-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(245,158,11,0.12)]',
        text: 'text-amber-400',
        bgGlow: 'from-amber-500/5 to-transparent'
      },
      'bg-blue-100': {
        border: 'border-blue-500/10',
        hoverBorder: 'hover:border-blue-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(59,130,246,0.12)]',
        text: 'text-blue-400',
        bgGlow: 'from-blue-500/5 to-transparent'
      },
      'bg-red-100': {
        border: 'border-red-500/10',
        hoverBorder: 'hover:border-red-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(239,68,68,0.12)]',
        text: 'text-red-400',
        bgGlow: 'from-red-500/5 to-transparent'
      },
      'bg-sky-100': {
        border: 'border-sky-500/10',
        hoverBorder: 'hover:border-sky-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(14,165,233,0.12)]',
        text: 'text-sky-400',
        bgGlow: 'from-sky-500/5 to-transparent'
      },
      'bg-teal-100': {
        border: 'border-teal-500/10',
        hoverBorder: 'hover:border-teal-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(20,184,166,0.12)]',
        text: 'text-teal-400',
        bgGlow: 'from-teal-500/5 to-transparent'
      },
      'bg-purple-100': {
        border: 'border-purple-500/10',
        hoverBorder: 'hover:border-purple-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(168,85,247,0.12)]',
        text: 'text-purple-400',
        bgGlow: 'from-purple-500/5 to-transparent'
      },
      'bg-green-100': {
        border: 'border-green-500/10',
        hoverBorder: 'hover:border-green-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(34,197,94,0.12)]',
        text: 'text-green-400',
        bgGlow: 'from-green-500/5 to-transparent'
      },
      'bg-orange-100': {
        border: 'border-orange-500/10',
        hoverBorder: 'hover:border-orange-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(249,115,22,0.12)]',
        text: 'text-orange-400',
        bgGlow: 'from-orange-500/5 to-transparent'
      },
      'bg-indigo-100': {
        border: 'border-indigo-500/10',
        hoverBorder: 'hover:border-indigo-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(99,102,241,0.12)]',
        text: 'text-indigo-400',
        bgGlow: 'from-indigo-500/5 to-transparent'
      },
      'bg-pink-100': {
        border: 'border-pink-500/10',
        hoverBorder: 'hover:border-pink-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(236,72,153,0.12)]',
        text: 'text-pink-400',
        bgGlow: 'from-pink-500/5 to-transparent'
      },
      'bg-lime-100': {
        border: 'border-lime-500/10',
        hoverBorder: 'hover:border-lime-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(132,204,22,0.12)]',
        text: 'text-lime-400',
        bgGlow: 'from-lime-500/5 to-transparent'
      },
      'bg-cyan-100': {
        border: 'border-cyan-500/10',
        hoverBorder: 'hover:border-cyan-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(6,182,212,0.12)]',
        text: 'text-cyan-400',
        bgGlow: 'from-cyan-500/5 to-transparent'
      },
      'bg-fuchsia-100': {
        border: 'border-fuchsia-500/10',
        hoverBorder: 'hover:border-fuchsia-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(217,70,239,0.12)]',
        text: 'text-fuchsia-400',
        bgGlow: 'from-fuchsia-500/5 to-transparent'
      },
      'bg-rose-100': {
        border: 'border-rose-500/10',
        hoverBorder: 'hover:border-rose-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(244,63,94,0.12)]',
        text: 'text-rose-400',
        bgGlow: 'from-rose-500/5 to-transparent'
      },
      'bg-yellow-100': {
        border: 'border-yellow-500/10',
        hoverBorder: 'hover:border-yellow-400/50',
        glow: 'hover:shadow-[0_15px_30px_rgba(234,179,8,0.12)]',
        text: 'text-yellow-400',
        bgGlow: 'from-yellow-500/5 to-transparent'
      }
    }
    return colorMap[bgColor] || {
      border: 'border-white/10',
      hoverBorder: 'hover:border-white/35',
      glow: 'hover:shadow-[0_15px_30px_rgba(255,255,255,0.08)]',
      text: 'text-[#D4FF00]',
      bgGlow: 'from-white/5 to-transparent'
    }
  }

  // Dynamic backglow color selector for the Featured Pouch Showcase
  const getGlowColor = (bgColor: string | undefined) => {
    if (!bgColor) return 'rgba(212, 255, 0, 0.15)'
    const colors: Record<string, string> = {
      'bg-emerald-100': 'rgba(16, 185, 129, 0.25)',
      'bg-violet-100': 'rgba(139, 92, 246, 0.25)',
      'bg-amber-100': 'rgba(245, 158, 11, 0.25)',
      'bg-blue-100': 'rgba(59, 130, 246, 0.25)',
      'bg-red-100': 'rgba(239, 68, 68, 0.25)',
      'bg-sky-100': 'rgba(14, 165, 233, 0.25)',
      'bg-teal-100': 'rgba(20, 184, 166, 0.25)',
      'bg-purple-100': 'rgba(168, 85, 247, 0.25)',
      'bg-green-100': 'rgba(34, 197, 94, 0.25)',
      'bg-orange-100': 'rgba(249, 115, 22, 0.25)',
      'bg-indigo-100': 'rgba(99, 102, 241, 0.25)',
      'bg-pink-100': 'rgba(236, 72, 153, 0.25)',
      'bg-lime-100': 'rgba(132, 204, 22, 0.25)',
      'bg-cyan-100': 'rgba(6, 182, 212, 0.25)',
      'bg-fuchsia-100': 'rgba(217, 70, 239, 0.25)',
      'bg-rose-100': 'rgba(244, 63, 94, 0.25)',
      'bg-yellow-100': 'rgba(234, 179, 8, 0.25)'
    }
    return colors[bgColor] || 'rgba(212, 255, 0, 0.25)'
  }

  // Render testimonial card with optional video button
  const renderTestimonialCard = (testimonial: Testimonial) => {
    const neon = getNeonStyles(testimonial.bgColor)
    return (
      <div
        key={testimonial.id}
        className={`bg-white/[0.02] backdrop-blur-md border ${neon.border} ${neon.hoverBorder} ${neon.glow} rounded-2xl p-5 shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer relative group/card overflow-hidden`}
        onClick={() => handleClick(testimonial)}
        onMouseEnter={() => handleMouseEnter(testimonial)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glow effect back layer */}
        <div className={`absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br ${neon.bgGlow} rounded-full blur-2xl opacity-40 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none`} />

        {/* Video Play Button - Blinking indicator */}
        {testimonial.videoId && (
          <button
            onClick={(e) => handleVideoClick(e, testimonial)}
            className="absolute top-3 right-3 z-10 w-9 h-9 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-115 group"
            title="Watch video testimonial"
          >
            <Play className="h-3.5 w-3.5 text-white ml-0.5" fill="white" />
            {/* Blinking ring animation */}
            <span className="absolute inset-0 rounded-full border border-red-400 animate-ping opacity-75" />
          </button>
        )}

        {/* Author header */}
        <div className="flex items-center gap-3 mb-4 relative z-10">
          {/* Avatar with company logo */}
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shadow-md">
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
              <span className="font-semibold text-white truncate group-hover/card:text-white/90 transition-colors">{testimonial.name}</span>
              {testimonial.videoId && (
                <span className="text-[9px] bg-red-500/20 text-red-400 border border-red-500/30 px-1.5 py-0.5 rounded-full font-medium">Video</span>
              )}
              {testimonial.url && (
                <a
                  href={testimonial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
            {(testimonial.role || testimonial.company) && (
              <p className="text-xs text-neutral-400 truncate">
                {testimonial.role && `${testimonial.role}${testimonial.company ? ' @ ' : ''}`}
                {testimonial.company}
              </p>
            )}
          </div>
        </div>

        {/* Quote */}
        <p className="text-neutral-300 text-sm leading-relaxed mb-3 relative z-10 font-normal">
          {getTestimonialText(t, testimonial.id, 'quote', testimonial.quote)}
        </p>

        {/* Rating stars */}
        <div className="flex items-center gap-1 relative z-10">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4.5 w-4.5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#0B0F19] via-[#121829] to-[#0B0F19] text-white relative overflow-hidden">
      {/* Decorative blurred back glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4FF00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center shadow-inner">
              <Quote className="h-5 w-5 text-[#D4FF00]" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-[#D4FF00] via-[#00FFFF] to-[#FF00FF] bg-clip-text text-transparent">
            {t('testimonials.wallOfLove.title')}
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-medium">
            {t('testimonials.wallOfLove.description')}
          </p>
        </div>

        {/* Layout split: Left static/sticky showcase, Right horizontal scrolling reviews */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Featured Pouch Showcase (Left) */}
          <div className="w-full lg:w-[360px] xl:w-[400px] flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/[0.02] to-white/[0.07] backdrop-blur-lg border border-white/10 flex flex-col items-center justify-center p-8 relative min-h-[380px] group/showcase">
            {/* Dynamic glowing ambient background behind the pouch */}
            <div 
              className="absolute w-72 h-72 rounded-full blur-3xl opacity-60 transition-all duration-700 pointer-events-none"
              style={{ 
                background: `radial-gradient(circle, ${getGlowColor(hoveredTestimonial?.bgColor)} 0%, transparent 70%)`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />

            {/* Title / Company badge on top */}
            <div className="absolute top-4 left-6 z-10">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Featured Showcase</span>
              {hoveredTestimonial && (
                <h4 className="text-sm font-semibold text-white/90 truncate max-w-[200px] mt-0.5">
                  {hoveredTestimonial.company || hoveredTestimonial.name}
                </h4>
              )}
            </div>

            {/* Pouch Image Container with floating animation */}
            <div className="relative w-full h-full max-h-[260px] flex items-center justify-center animate-float">
              <img
                key={currentPouchImage}
                src={currentPouchImage}
                alt="Eco-Friendly Packaging Pouch"
                className="max-w-full max-h-[230px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.65)] transition-all duration-500 animate-testimonial-fade-in"
              />
            </div>

            {hoveredTestimonial ? (
              <div className="absolute bottom-16 text-center px-6 animate-testimonial-fade-in">
                <p className="text-xs text-neutral-400 italic">
                  "{getTestimonialText(t, hoveredTestimonial.id, 'shortQuote', hoveredTestimonial.shortQuote)}"
                </p>
              </div>
            ) : (
              <div className="absolute bottom-16 text-center px-6">
                <p className="text-xs text-neutral-400 italic">
                  Hover over any review card to inspect the custom pouch package.
                </p>
              </div>
            )}

            {/* Navigation Scroll Buttons at the bottom of the Showcase block */}
            <div className="absolute bottom-4 right-4 z-10 flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-8.5 h-8.5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                title="Scroll Left"
              >
                <ChevronLeft className="h-4.5 w-4.5" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-8.5 h-8.5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                title="Scroll Right"
              >
                <ChevronRight className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          {/* Horizontal scroll container for Cards (Right) */}
          <div className="flex-1 w-full overflow-hidden relative self-center">
            {/* Fade overlay on the right to indicate more content */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#121829] to-transparent z-20 pointer-events-none hidden lg:block" />
            {/* Fade overlay on the left */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#121829] to-transparent z-20 pointer-events-none hidden lg:block" />

            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20"
              onMouseEnter={() => { isPausedRef.current = true }}
              onMouseLeave={() => { isPausedRef.current = false }}
            >
              {shuffledTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-[300px] md:w-[340px] flex-shrink-0 snap-start">
                  {renderTestimonialCard(testimonial)}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Testimonial Popup Modal with 600px Pouch */}
      {activeTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-testimonial-fade-in"
          onClick={() => setActiveTestimonial(null)}
        >
          <div
            className="relative max-w-5xl w-full rounded-3xl shadow-2xl bg-[#121829]/95 backdrop-blur-xl border border-white/10 overflow-hidden animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row">
              {/* Large Pouch Image - Left Side */}
              <div className="hidden md:flex w-[460px] bg-white/[0.02] items-center justify-center p-8 flex-shrink-0 border-r border-white/10 relative">
                <div 
                  className="absolute w-64 h-64 rounded-full blur-3xl opacity-35 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${getGlowColor(activeTestimonial.bgColor)} 0%, transparent 70%)` }}
                />
                <img
                  src={activeTestimonial.pouchImage}
                  alt="Packaging Pouch"
                  className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.55)] relative z-10 hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Testimonial Content - Right Side */}
              <div className="flex-1 p-8 relative flex flex-col justify-center">
                {/* Close button */}
                <button
                  onClick={() => setActiveTestimonial(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Video button if available */}
                {activeTestimonial.videoId && (
                  <button
                    onClick={() => {
                      setActiveTestimonial(null)
                      setVideoTestimonial(activeTestimonial)
                    }}
                    className="absolute top-4 right-16 w-10 h-10 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg hover:scale-105"
                    title="Watch video"
                  >
                    <Play className="h-4.5 w-4.5 text-white ml-0.5" fill="white" />
                  </button>
                )}

                {/* Quote icon */}
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                  <Quote className="h-6 w-6 text-[#D4FF00]" />
                </div>

                {/* Testimonial content */}
                <blockquote className="text-white text-xl leading-relaxed mb-6 font-medium">
                  "{getTestimonialText(t, activeTestimonial.id, 'quote', activeTestimonial.quote)}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/15 shadow-md">
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

                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-white text-lg">{activeTestimonial.name}</div>
                    {(activeTestimonial.role || activeTestimonial.company) && (
                      <div className="text-sm text-neutral-400">
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
                      className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-neutral-300 hover:text-white shadow-sm"
                    >
                      <ExternalLink className="h-4.5 w-4.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Testimonial Lightbox */}
      {videoTestimonial && videoTestimonial.videoId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setVideoTestimonial(null)}
          />

          {/* Modal Content - Vertical Video Container (Shorts Format) */}
          <div className="relative w-full max-w-sm h-[80vh] max-h-[700px] animate-scale-up">
            {/* Close Button */}
            <button
              onClick={() => setVideoTestimonial(null)}
              className="absolute -top-14 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full flex items-center justify-center transition-colors text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* YouTube Embed - Shorts Format */}
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10">
              <iframe
                src={`https://www.youtube.com/embed/${videoTestimonial.videoId}?autoplay=1&rel=0&loop=1&playlist=${videoTestimonial.videoId}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${videoTestimonial.name} Video Testimonial`}
              />
            </div>

            {/* Video Title */}
            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <h3 className="text-white font-semibold text-lg">{videoTestimonial.name}</h3>
              <p className="text-neutral-400 text-sm">
                {videoTestimonial.role && `${videoTestimonial.role}${videoTestimonial.company ? ', ' : ''}`}
                {videoTestimonial.company}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Animations & Transitions */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(0.8deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        @keyframes testimonialFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-testimonial-fade-in {
          animation: testimonialFadeIn 0.3s ease-out forwards;
        }
        .animate-scale-up {
          animation: scaleUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        /* Custom scrollbar styling for the horizontal scroll container */
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  )
}
