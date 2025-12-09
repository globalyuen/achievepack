import { useState, useRef, MouseEvent, useEffect } from 'react'
import { X, Quote, ExternalLink } from 'lucide-react'
import { TESTIMONIALS, type Testimonial } from '../data/testimonialsData'

// 3D Tilt Card Component
function TiltCard({ testimonial, onClick }: { testimonial: Testimonial; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 8
    const rotateY = (centerX - x) / 8
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`)
    setGlarePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setTransform('')
    setIsHovered(false)
  }

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative cursor-pointer rounded-2xl p-4 ${testimonial.bgColor} shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden`}
      style={{ transform, transition: transform ? 'none' : 'transform 0.5s ease-out' }}
    >
      {/* Background Pouch Image - Slides from right corner on Hover */}
      {/* Removed - using section-level pouch instead */}

      {/* Glare effect */}
      <div
        className={`absolute inset-0 transition-opacity pointer-events-none ${isHovered ? 'opacity-30' : 'opacity-0'}`}
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-3">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white bg-neutral-100 overflow-hidden shadow-xl">
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
          {/* Company logo badge */}
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white border-2 border-white overflow-hidden shadow-md">
            <img
              src={testimonial.companyLogo}
              alt={testimonial.company}
              className="w-full h-full object-contain p-0.5"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.company || 'Co')}&background=f3f4f6&color=6b7280&size=64`
              }}
            />
          </div>
        </div>
        
        {/* Name */}
        <h4 className="font-semibold text-neutral-900 text-sm md:text-base">{testimonial.name}</h4>
        
        {/* Short quote */}
        <p className="text-xs md:text-sm text-neutral-600 mt-1 line-clamp-2">
          "{testimonial.shortQuote}"
        </p>
      </div>
    </div>
  )
}

export default function BriefTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null)
  const [showPouch, setShowPouch] = useState(false)

  // Trigger pouch animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setShowPouch(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Large Background Pouch - Slides from right, 200% bigger, rotated 45 degrees */}
      <div 
        className={`absolute -bottom-20 -right-20 w-[800px] h-[1000px] lg:w-[1000px] lg:h-[1200px] pointer-events-none transition-all duration-1000 ease-out z-0 ${
          showPouch ? 'opacity-25 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
        style={{ transform: showPouch ? 'rotate(45deg)' : 'rotate(45deg) translateX(100%)' }}
      >
        <img
          src="/imgs/testimonials/pouch-hover/morlife.webp"
          alt="Eco Pouch Packaging"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Trusted by 500+ Brands Worldwide
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
            See What Our Customers Say
          </h3>
          <p className="text-neutral-500">Hover and click to explore their stories</p>
        </div>

        {/* Testimonial Cards Grid - 3D Tilt Effect */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {TESTIMONIALS.map((testimonial) => (
            <TiltCard
              key={testimonial.id}
              testimonial={testimonial}
              onClick={() => setActiveTestimonial(testimonial)}
            />
          ))}
        </div>

        {/* Click hint */}
        <p className="text-center text-sm text-neutral-400 mt-8 flex items-center justify-center gap-2">
          <span className="inline-block w-8 h-px bg-neutral-300"></span>
          Click any card to read their full story
          <span className="inline-block w-8 h-px bg-neutral-300"></span>
        </p>
      </div>

      {/* Testimonial Popup Modal */}
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
              {/* Large Pouch Image - Left Side (10x bigger) */}
              <div className="hidden md:flex w-80 lg:w-96 bg-white/30 items-center justify-center p-6">
                <img
                  src={activeTestimonial.pouchImage}
                  alt="Packaging Pouch"
                  className="w-full h-auto min-h-[400px] max-h-[500px] object-contain drop-shadow-2xl"
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
                  {/* Owner photo with company logo overlay */}
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
                    {/* Company logo badge */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-neutral-200 overflow-hidden shadow-sm">
                      <img
                        src={activeTestimonial.companyLogo}
                        alt={activeTestimonial.company}
                        className="w-full h-full object-contain p-0.5"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(activeTestimonial.company || 'Co')}&background=f3f4f6&color=6b7280&size=64`
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
