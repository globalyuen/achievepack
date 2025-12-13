import { useState, useRef } from 'react'
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Short {
  id: string
  title: string
  thumbnail: string
  videoId: string
}

const SHORTS: Short[] = [
  {
    id: '1',
    title: 'How We Make Eco Pouches',
    thumbnail: '/imgs/shorts/short-1.webp',
    videoId: 'YOUR_VIDEO_ID_1'
  },
  {
    id: '2',
    title: 'Compostable vs Recyclable',
    thumbnail: '/imgs/shorts/short-2.webp',
    videoId: 'YOUR_VIDEO_ID_2'
  },
  {
    id: '3',
    title: 'Custom Printing Process',
    thumbnail: '/imgs/shorts/short-3.webp',
    videoId: 'YOUR_VIDEO_ID_3'
  },
  {
    id: '4',
    title: 'Unboxing Our Samples',
    thumbnail: '/imgs/shorts/short-4.webp',
    videoId: 'YOUR_VIDEO_ID_4'
  },
  {
    id: '5',
    title: 'Behind The Scenes',
    thumbnail: '/imgs/shorts/short-5.webp',
    videoId: 'YOUR_VIDEO_ID_5'
  },
]

export default function YouTubeShorts() {
  const [activeVideo, setActiveVideo] = useState<Short | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 280
      const newPosition = direction === 'left' 
        ? containerRef.current.scrollLeft - scrollAmount 
        : containerRef.current.scrollLeft + scrollAmount
      containerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #166534 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Play className="h-4 w-4 fill-current" />
            YouTube Shorts
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Quick Insights in 60 Seconds
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Watch our bite-sized videos to learn about sustainable packaging, our process, and customer stories.
          </p>
        </div>

        {/* Shorts Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-green-100 hover:bg-green-200 rounded-full flex items-center justify-center transition-all text-green-800"
          >
            <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-green-100 hover:bg-green-200 rounded-full flex items-center justify-center transition-all text-green-800"
          >
            <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>

          {/* Shorts Container */}
          <div 
            ref={containerRef}
            className="flex gap-4 lg:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SHORTS.map((short) => (
              <div
                key={short.id}
                onClick={() => setActiveVideo(short)}
                className="flex-shrink-0 w-[200px] lg:w-[240px] group cursor-pointer snap-start"
              >
                {/* Video Card - 9:16 Aspect Ratio */}
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-700 shadow-xl">
                  {/* Thumbnail */}
                  <img
                    src={short.thumbnail}
                    alt={short.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'https://placehold.co/540x960/1f2937/9ca3af?text=Video'
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600">
                      <Play className="h-6 w-6 lg:h-7 lg:w-7 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* YouTube Shorts Badge */}
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    SHORTS
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm line-clamp-2">
                      {short.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@AchievePack/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:bg-red-600 transition-all hover:scale-105"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            View All on YouTube
          </a>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          />
          
          {/* Modal Content - Vertical Video Container */}
          <div className="relative w-full max-w-sm h-[80vh] max-h-[700px]">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-neutral-200 hover:bg-neutral-300 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5 text-neutral-700" />
            </button>

            {/* YouTube Embed - Shorts Format */}
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={activeVideo.title}
              />
            </div>

            {/* Video Title */}
            <div className="absolute -bottom-12 left-0 right-0 text-center">
              <h3 className="text-green-800 font-semibold">{activeVideo.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
