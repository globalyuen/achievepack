import { useState, useCallback, useTransition } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { Star, Quote, ExternalLink, Play, X, ArrowLeft, ArrowRight, MessageCircle, Award, CheckCircle, Mail, Phone } from 'lucide-react'
import { TESTIMONIALS, type Testimonial } from '../data/testimonialsData'

// Helper function to get translated testimonial text
function getTestimonialText(t: (key: string) => string, id: string, field: 'quote' | 'shortQuote', fallback: string): string {
  const key = `testimonials.customers.${id}.${field}`
  const translated = t(key)
  return translated === key ? fallback : translated
}

export default function ReviewsPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [isPending, startTransition] = useTransition()
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null)
  const [videoTestimonial, setVideoTestimonial] = useState<Testimonial | null>(null)

  // Calculate stats
  const totalReviews = TESTIMONIALS.length
  const averageRating = 5.0 // All testimonials are 5 stars

  // Optimized navigation handler
  const handleNavigation = useCallback((to: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    startTransition(() => {
      navigate(to)
    })
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Helmet>
        <title>Customer Reviews | Eco Pouch Packaging</title>
        <meta name="description" content="Read verified customer reviews and testimonials. See why businesses trust Eco Pouch for sustainable, high-quality custom packaging solutions." />
        <link rel="canonical" href="https://pouch.eco/reviews" />
      </Helmet>

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" onClick={handleNavigation('/')} className="flex items-center gap-2">
            <img 
              src="/ap-logo.svg" 
              alt="Achieve Pack" 
              className="h-9 w-auto"
              loading="eager"
              decoding="async"
              width="120"
              height="36"
            />
          </a>
          <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-neutral-500 hover:text-primary-600 transition">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-neutral-600 mb-6">
            <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-neutral-900 font-medium">Reviews</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-primary-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Customer Reviews
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Real feedback from businesses who trust Eco Pouch for their sustainable packaging needs.
            </p>

            {/* Rating Summary */}
            <div className="inline-flex items-center gap-6 bg-white rounded-2xl px-8 py-6 shadow-lg border border-neutral-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-neutral-900">{averageRating.toFixed(1)}</div>
                <div className="flex items-center justify-center gap-0.5 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-neutral-500">Average Rating</div>
              </div>
              <div className="w-px h-16 bg-neutral-200" />
              <div className="text-center">
                <div className="text-4xl font-bold text-neutral-900">{totalReviews}</div>
                <div className="text-sm text-neutral-500 mt-1">Verified Reviews</div>
              </div>
              <div className="w-px h-16 bg-neutral-200" />
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-neutral-500 mt-1">Recommended</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 text-neutral-600">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Verified Customers</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-600">
              <Award className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-medium">5+ Years in Business</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-600">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">5-Star Average</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`${testimonial.bgColor} rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer relative group`}
                onClick={() => setActiveTestimonial(testimonial)}
              >
                {/* Video Play Button */}
                {testimonial.videoId && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setVideoTestimonial(testimonial)
                    }}
                    className="absolute top-4 right-4 z-10 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-all hover:scale-110"
                    title="Watch video testimonial"
                  >
                    <Play className="h-5 w-5 text-white ml-0.5" fill="white" />
                    <span className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping opacity-75" />
                  </button>
                )}

                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary-500/30 mb-4" />

                {/* Quote Text */}
                <p className="text-neutral-800 text-base leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all">
                  "{getTestimonialText(t, testimonial.id, 'quote', testimonial.quote)}"
                </p>

                {/* Author Section */}
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-white shadow-md">
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
                      <span className="font-semibold text-neutral-900">{testimonial.name}</span>
                      {testimonial.url && (
                        <a
                          href={testimonial.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-500 hover:text-primary-600"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    {(testimonial.role || testimonial.company) && (
                      <p className="text-sm text-neutral-600">
                        {testimonial.role && `${testimonial.role}${testimonial.company ? ' @ ' : ''}`}
                        {testimonial.company}
                      </p>
                    )}
                    {/* Rating */}
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pouch Preview on Hover */}
                {testimonial.pouchImage && (
                  <div className="absolute bottom-4 right-4 w-16 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={testimonial.pouchImage}
                      alt="Product"
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Get a free quote for custom sustainable packaging that your customers will love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/store"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all"
            >
              Browse Products
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-800 transition-all"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-8">
            Trusted by Leading Brands Worldwide
          </p>
          <div className="flex justify-center">
            <img
              src="/imgs/testimonials-client-logos.webp"
              alt="Our Client Logos"
              className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo & Description */}
            <div>
              <img src="/ap-logo-white.webp" alt="Achieve Pack" className="h-8 w-auto mb-4" />
              <p className="text-neutral-400 text-sm">
                Sustainable packaging solutions for forward-thinking brands.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/store" className="text-neutral-400 hover:text-white transition">Shop</Link></li>
                <li><Link to="/company/about" className="text-neutral-400 hover:text-white transition">About Us</Link></li>
                <li><Link to="/contact" className="text-neutral-400 hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-neutral-400">
                  <Mail className="h-4 w-4" /> hello@pouch.eco
                </li>
                <li className="flex items-center gap-2 text-neutral-400">
                  <Phone className="h-4 w-4" /> +852 5611 7281
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-500">
            © {new Date().getFullYear()} Achieve Pack. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Testimonial Detail Modal */}
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
              {/* Large Pouch Image */}
              <div className="hidden md:flex w-[400px] bg-white/30 items-center justify-center p-6 flex-shrink-0">
                <img
                  src={activeTestimonial.pouchImage}
                  alt="Packaging Pouch"
                  className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-8">
                {/* Close button */}
                <button
                  onClick={() => setActiveTestimonial(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="h-5 w-5 text-neutral-700" />
                </button>

                {/* Video button */}
                {activeTestimonial.videoId && (
                  <button
                    onClick={() => {
                      setActiveTestimonial(null)
                      setVideoTestimonial(activeTestimonial)
                    }}
                    className="absolute top-4 right-16 w-10 h-10 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors"
                    title="Watch video"
                  >
                    <Play className="h-5 w-5 text-white ml-0.5" fill="white" />
                  </button>
                )}

                <Quote className="h-10 w-10 text-primary-500 mb-6" />

                <p className="text-neutral-800 text-xl leading-relaxed mb-8">
                  "{getTestimonialText(t, activeTestimonial.id, 'quote', activeTestimonial.quote)}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white shadow-md">
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

                  <div className="flex-1">
                    <div className="text-lg font-semibold text-neutral-900">{activeTestimonial.name}</div>
                    {(activeTestimonial.role || activeTestimonial.company) && (
                      <div className="text-neutral-600">
                        {activeTestimonial.role && `${activeTestimonial.role}${activeTestimonial.company ? ', ' : ''}`}
                        {activeTestimonial.company}
                      </div>
                    )}
                  </div>

                  {activeTestimonial.url && (
                    <a
                      href={activeTestimonial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-sm"
                    >
                      <ExternalLink className="h-5 w-5 text-neutral-600" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {videoTestimonial && videoTestimonial.videoId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setVideoTestimonial(null)}
          />
          <div className="relative w-full max-w-sm h-[80vh] max-h-[700px]">
            <button
              onClick={() => setVideoTestimonial(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-neutral-200 hover:bg-neutral-300 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5 text-neutral-700" />
            </button>
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videoTestimonial.videoId}?autoplay=1&rel=0&loop=1&playlist=${videoTestimonial.videoId}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${videoTestimonial.name} Video Testimonial`}
              />
            </div>
            <div className="absolute -bottom-14 left-0 right-0 text-center">
              <h3 className="text-white font-semibold">{videoTestimonial.name}</h3>
              <p className="text-neutral-400 text-sm">
                {videoTestimonial.role && `${videoTestimonial.role}${videoTestimonial.company ? ', ' : ''}`}
                {videoTestimonial.company}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
