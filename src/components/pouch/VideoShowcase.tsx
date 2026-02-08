import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  videoSrc: string
  segment: string
}

const VIDEOS: Video[] = [
  {
    id: 'certification',
    title: 'Certified Materials',
    description: 'TUV OK Home and ASTM D6400 certified - breaks down in 180 days.',
    thumbnail: '/video/pouch-eco-marketing-videos/gif/Material-ezgif.com-optimize.gif',
    videoSrc: '/video/pouch-eco-marketing-videos/Material.mp4',
    segment: 'Segment 1 (0-6s)'
  },
  {
    id: 'performance',
    title: 'Performance & Design',
    description: 'High barrier protection with premium stand-up design.',
    thumbnail: '/video/pouch-eco-marketing-videos/gif/Performance-ezgif.com-optimize.gif',
    videoSrc: '/video/pouch-eco-marketing-videos/Performance.mp4',
    segment: 'Segment 2 (6-12s)'
  },
  {
    id: 'environmental',
    title: 'Environmental Impact',
    description: 'Returns to nature as water, CO₂, and nutrient-rich biomass.',
    thumbnail: '/video/pouch-eco-marketing-videos/gif/compost-ezgif.com-optimize.gif',
    videoSrc: '/video/pouch-eco-marketing-videos/Environmental.mp4',
    segment: 'Segment 3 (12-18s)'
  },
  {
    id: 'brand-benefits',
    title: 'Build Your Brand',
    description: 'Build trust with eco-conscious consumers. Regulatory compliant.',
    thumbnail: '/video/pouch-eco-marketing-videos/gif/Brand-ezgif.com-optimize.gif',
    videoSrc: '/video/pouch-eco-marketing-videos/Brand.mp4',
    segment: 'Segment 4 (18-24s)'
  },
  {
    id: 'customization',
    title: 'Low MOQ & Custom',
    description: 'From 500 pieces with fast digital printing.',
    thumbnail: '/video/pouch-eco-marketing-videos/gif/lowmoq-ezgif.com-optimize.gif',
    videoSrc: '/video/pouch-eco-marketing-videos/lowmoq.mp4',
    segment: 'Segment 5 (24-30s)'
  },
  {
    id: 'cta-build',
    title: 'Compostable Future',
    description: 'Choose packaging that aligns with your values.',
    thumbnail: '/video/pouch-eco-marketing-videos/gif/compost-ezgif.com-optimize.gif',
    videoSrc: '/video/pouch-eco-marketing-videos/compost.mp4',
    segment: 'Segment 6 (30-36s)'
  },
  {
    id: 'close',
    title: 'Start Your Journey',
    description: 'Certified | Plant-Based | Fully Compostable',
    thumbnail: '/video/pouch-eco-marketing-videos/gif/cta-ezgif.com-optimize.gif',
    videoSrc: '/video/pouch-eco-marketing-videos/cta2.mp4',
    segment: 'Segment 7 (36-42s)'
  }
]

interface VideoShowcaseProps {
  className?: string
}

export default function VideoShowcase({ className = '' }: VideoShowcaseProps) {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeVideo) {
      const currentIdx = VIDEOS.findIndex(v => v.id === activeVideo.id)
      const nextIdx = (currentIdx + 1) % VIDEOS.length
      setActiveVideo(VIDEOS[nextIdx])
    }
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeVideo) {
      const currentIdx = VIDEOS.findIndex(v => v.id === activeVideo.id)
      const prevIdx = (currentIdx - 1 + VIDEOS.length) % VIDEOS.length
      setActiveVideo(VIDEOS[prevIdx])
    }
  }

  return (
    <>
      <section className={`py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto ${className}`}>
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-black text-[#D4FF00] px-4 py-2 mb-6 font-['JetBrains_Mono'] font-bold transform rotate-1 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            VIDEO_SHOWCASE
          </div>
          <h2 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase mb-6 leading-none">
            See Our <span className="text-[#10b981]">Story</span>
          </h2>
          <p className="font-['JetBrains_Mono'] text-lg md:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
            From problem to solution - watch how our compostable pouches are changing packaging for the better
          </p>
        </div>

        {/* Horizontal Scrolling Video Carousel - Neo-Brutalist Style */}
        <div className="relative overflow-hidden">
          {/* Scrolling Container */}
          <div className="flex gap-6 md:gap-8 animate-scroll-slow hover:pause">
            {/* Duplicate videos for infinite scroll effect */}
            {[...VIDEOS, ...VIDEOS].map((video, index) => (
              <motion.div
                key={`${video.id}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % VIDEOS.length) * 0.05 }}
                onClick={() => setActiveVideo(video)}
                className="group cursor-pointer bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all overflow-hidden flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
              >
                {/* GIF Thumbnail */}
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#D4FF00] border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 text-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                  {/* Segment Badge */}
                  <div className="absolute top-2 left-2 bg-black text-[#D4FF00] px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold border-2 border-black">
                    #{(index % VIDEOS.length) + 1}
                  </div>
                  {/* Time Segment */}
                  <div className="absolute top-2 right-2 bg-[#D4FF00] text-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold border-2 border-black">
                    {video.segment}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 border-t-4 border-black">
                  <h3 className="font-black text-sm md:text-base uppercase mb-2 leading-tight">
                    {video.title}
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-xs text-gray-600 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Gradient Overlays for fade effect */}
          <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}
            className="inline-block bg-[#D4FF00] text-black px-8 py-4 font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
          >
            [START_YOUR_PROJECT]
          </button>
        </div>
      </section>

      {/* Video Modal - Full Screen */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            {/* Modal Container */}
            <div 
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 md:-top-16 md:-right-16 w-12 h-12 bg-[#D4FF00] border-4 border-black flex items-center justify-center hover:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10"
              >
                <X className="w-6 h-6 text-black" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#D4FF00] border-4 border-black flex items-center justify-center hover:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10"
              >
                <ChevronLeft className="w-6 h-6 text-black" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#D4FF00] border-4 border-black flex items-center justify-center hover:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10"
              >
                <ChevronRight className="w-6 h-6 text-black" />
              </button>

              {/* Video Container */}
              <div className="bg-black border-4 border-black shadow-[16px_16px_0px_0px_rgba(212,255,0,1)]">
                <div className="relative aspect-video bg-black">
                  <video
                    key={activeVideo.videoSrc}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    playsInline
                  >
                    <source src={activeVideo.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Video Info */}
                <div className="p-6 bg-white border-t-4 border-black">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-[#D4FF00] px-3 py-1 font-['JetBrains_Mono'] text-xs font-bold border-2 border-black">
                          {activeVideo.segment}
                        </span>
                      </div>
                      <h3 className="font-black text-2xl md:text-3xl uppercase mb-3 leading-tight">
                        {activeVideo.title}
                      </h3>
                      <p className="font-['Space_Grotesk'] text-gray-700 text-base md:text-lg">
                        {activeVideo.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-['JetBrains_Mono'] text-sm font-bold text-gray-500">
                        {VIDEOS.findIndex(v => v.id === activeVideo.id) + 1} / {VIDEOS.length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
