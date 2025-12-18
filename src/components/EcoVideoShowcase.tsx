import { useState } from 'react'
import { useTranslation } from 'react-i18next'

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
    image: '/eco-logo/transparent-bkg/ap-logo.png',
    titleKey: 'ecoVideo.whyAchievepack.title',
    descKey: 'ecoVideo.whyAchievepack.desc',
    url: 'https://youtube.com/shorts/0uawtlJB0B0',
  },
  {
    id: 'sample-action',
    image: '/eco-logo/transparent-bkg/why-us.png',
    titleKey: 'ecoVideo.sampleAction.title',
    descKey: 'ecoVideo.sampleAction.desc',
    url: 'https://youtu.be/xKusl5lOEYM',
  },
  {
    id: 'compostable',
    image: '/eco-logo/transparent-bkg/compost.png',
    titleKey: 'ecoVideo.compostable.title',
    descKey: 'ecoVideo.compostable.desc',
    url: 'https://youtube.com/shorts/ls9W8QF-SQc',
  },
  {
    id: 'recyclable',
    image: '/eco-logo/transparent-bkg/recycle.png',
    titleKey: 'ecoVideo.recyclable.title',
    descKey: 'ecoVideo.recyclable.desc',
    url: 'https://youtube.com/shorts/l23pEIAbkYQ',
  },
  {
    id: 'biope',
    image: '/eco-logo/transparent-bkg/biope.png',
    titleKey: 'ecoVideo.biope.title',
    descKey: 'ecoVideo.biope.desc',
    url: 'https://www.youtube.com/shorts/Jj6hyu-3RlU',
  },
]

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
      <div className={`bg-gradient-to-r from-green-50 to-emerald-50 py-8 ${className}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-lg font-semibold text-green-800 mb-6">
            🎬 {t('ecoVideo.sectionTitle')}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {VIDEO_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveVideo(item)}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300"
              >
                {/* Image with Play Button Overlay */}
                <div className="relative aspect-square mb-3 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={t(item.titleKey)}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="text-center">
                  <div className="font-semibold text-green-800 text-sm">{t(item.titleKey)}</div>
                  <div className="text-xs text-green-600 mt-1">{t(item.descKey)}</div>
                </div>
              </button>
            ))}
          </div>
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
