import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'

interface VideoItem {
  id: string
  image: string
  titleKey: string
  descKey: string
  url: string
}

const VIDEO_ITEMS: VideoItem[] = [
  {
    id: 'why-achievepack',
    image: '/eco-logo/transparent-bkg/ap-logo.webp',
    titleKey: 'ecoVideo.whyAchievepack.title',
    descKey: 'ecoVideo.whyAchievepack.desc',
    url: 'https://youtube.com/shorts/0uawtlJB0B0',
  },
  {
    id: 'sample-action',
    image: '/eco-logo/transparent-bkg/why-us.webp',
    titleKey: 'ecoVideo.sampleAction.title',
    descKey: 'ecoVideo.sampleAction.desc',
    url: 'https://youtu.be/xKusl5lOEYM',
  },
  {
    id: 'compostable',
    image: '/eco-logo/transparent-bkg/compost.webp',
    titleKey: 'ecoVideo.compostable.title',
    descKey: 'ecoVideo.compostable.desc',
    url: 'https://youtube.com/shorts/ls9W8QF-SQc',
  },
  {
    id: 'recyclable',
    image: '/eco-logo/transparent-bkg/recycle.webp',
    titleKey: 'ecoVideo.recyclable.title',
    descKey: 'ecoVideo.recyclable.desc',
    url: 'https://youtube.com/shorts/l23pEIAbkYQ',
  },
  {
    id: 'biope',
    image: '/eco-logo/transparent-bkg/biope.webp',
    titleKey: 'ecoVideo.biope.title',
    descKey: 'ecoVideo.biope.desc',
    url: 'https://www.youtube.com/shorts/Jj6hyu-3RlU',
  },
]

// Animation variants for scroll-triggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

// Extract YouTube video ID from various URL formats
const getYouTubeEmbedUrl = (url: string): string => {
  let videoId = ''
  
  if (url.includes('shorts/')) {
    videoId = url.split('shorts/')[1].split('?')[0]
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0]
  } else if (url.includes('watch?v=')) {
    videoId = url.split('watch?v=')[1].split('&')[0]
  }
  
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`
}

interface EcoVideoShowcaseProps {
  className?: string
}

export const EcoVideoShowcase: React.FC<EcoVideoShowcaseProps> = ({ className = '' }) => {
  const { t } = useTranslation()
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null)

  return (
    <>
      <div className={`bg-gradient-to-r from-green-50 to-emerald-50 py-10 ${className}`}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.h3 
            className="text-center text-lg font-semibold text-green-800 mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            🎬 {t('ecoVideo.sectionTitle')}
          </motion.h3>
          
          {/* Responsive landscape grid: 1 col mobile, 2 col tablet, 3 col medium, 5 col large */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {VIDEO_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                variants={cardVariants}
                onClick={() => setActiveVideo(item)}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 flex flex-row sm:flex-col items-center gap-4 sm:gap-0"
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Image with Play Button Overlay - landscape on mobile */}
                <div className="relative w-20 h-20 sm:w-full sm:aspect-square flex-shrink-0 sm:mb-3 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={t(item.titleKey)}
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Text Content - left aligned on mobile, center on desktop */}
                <div className="text-left sm:text-center flex-1 sm:flex-none">
                  <div className="font-semibold text-green-800 text-sm">{t(item.titleKey)}</div>
                  <div className="text-xs text-green-600 mt-1">{t(item.descKey)}</div>
                </div>

                {/* YouTube icon indicator - visible on right side for mobile */}
                <div className="sm:hidden flex-shrink-0">
                  <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition z-10"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={getYouTubeEmbedUrl(activeVideo.url)}
              title={t(activeVideo.titleKey)}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}

export default EcoVideoShowcase
