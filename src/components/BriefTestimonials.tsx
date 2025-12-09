import { useState } from 'react'
import { X, Quote, ExternalLink } from 'lucide-react'
import { TESTIMONIALS, type Testimonial } from '../data/testimonialsData'

export default function BriefTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null)

  return (
    <section className="py-8 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-2">
            Trusted by 500+ Brands Worldwide
          </p>
          <h3 className="text-2xl font-bold text-neutral-900">
            See What Our Customers Say
          </h3>
        </div>

        {/* Avatar Row - Clickable */}
        <div className="flex justify-center items-center">
          <div className="flex -space-x-3 overflow-hidden">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveTestimonial(testimonial)}
                className="relative group"
                style={{ zIndex: TESTIMONIALS.length - index }}
              >
                {/* Avatar with border ring */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-3 border-white bg-neutral-100 overflow-hidden shadow-md hover:scale-110 hover:z-50 transition-all duration-200 cursor-pointer ring-2 ring-primary-200 hover:ring-primary-500">
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
                
                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-neutral-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {testimonial.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Click hint */}
        <p className="text-center text-sm text-neutral-500 mt-4">
          Click any avatar to read their story
        </p>
      </div>

      {/* Testimonial Popup Modal */}
      {activeTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setActiveTestimonial(null)}
        >
          <div
            className={`relative max-w-md w-full rounded-2xl p-6 shadow-2xl ${activeTestimonial.bgColor}`}
            onClick={(e) => e.stopPropagation()}
          >
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
                <div className="text-xs text-neutral-500 mt-1">{activeTestimonial.extraInfo}</div>
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
      )}
    </section>
  )
}
