import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, ChevronLeft, ChevronRight, Factory, Printer, Layers, Scissors, Package, CheckCircle } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../components/pouch/PouchUI'

interface Video {
  id: string
  title: string
  description: string
  videoSrc: string
  icon: React.ElementType
}

const FACTORY_VIDEOS: Video[] = [
  {
    id: 'enter',
    title: 'Welcome to Our Factory',
    description: 'Step inside our state-of-the-art sustainable packaging facility',
    videoSrc: '/video/factory/enter.mp4',
    icon: Factory
  },
  {
    id: 'digital-printing',
    title: 'Digital Printing Technology',
    description: 'High-quality digital printing for short runs with unlimited colors',
    videoSrc: '/video/factory/digital-printing.mp4',
    icon: Printer
  },
  {
    id: 'roto-printing',
    title: 'Rotogravure Printing',
    description: 'Plate printing for large volume production with Pantone matching',
    videoSrc: '/video/factory/roto-printing.mp4',
    icon: Printer
  },
  {
    id: 'laminating',
    title: 'Lamination Process',
    description: 'Multi-layer bonding for optimal barrier properties',
    videoSrc: '/video/factory/laminating.mp4',
    icon: Layers
  },
  {
    id: 'slitting',
    title: 'Precision Slitting',
    description: 'Accurate material cutting for perfect dimensions',
    videoSrc: '/video/factory/slitting.mp4',
    icon: Scissors
  },
  {
    id: 'bag-making',
    title: 'Pouch Manufacturing',
    description: 'Converting films into finished pouches with quality seals',
    videoSrc: '/video/factory/bag making.mp4',
    icon: Package
  }
]

export default function PouchFactoryTourPage() {
  const { t } = useTranslation()
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)

  const handleNext = () => {
    if (!activeVideo) return
    const currentIndex = FACTORY_VIDEOS.findIndex(v => v.id === activeVideo.id)
    const nextIndex = (currentIndex + 1) % FACTORY_VIDEOS.length
    setActiveVideo(FACTORY_VIDEOS[nextIndex])
  }

  const handlePrev = () => {
    if (!activeVideo) return
    const currentIndex = FACTORY_VIDEOS.findIndex(v => v.id === activeVideo.id)
    const prevIndex = (currentIndex - 1 + FACTORY_VIDEOS.length) % FACTORY_VIDEOS.length
    setActiveVideo(FACTORY_VIDEOS[prevIndex])
  }

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchFactoryTourPage.meta.title')}</title>
        <meta 
          name="description" 
          content={t('pouchFactoryTourPage.meta.description')} 
        />
        <link rel="canonical" href="https://pouch.eco/factory-tour" />
        <meta property="og:title" content={t('pouchFactoryTourPage.meta.ogTitle')} />
        <meta property="og:description" content={t('pouchFactoryTourPage.meta.ogDescription')} />
        <meta property="og:url" content="https://pouch.eco/factory-tour" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-16 px-4 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-factory"
          >
            <source src="/video/pouch-eco-marketing-videos/brand-reveal.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
            <span className="font-['JetBrains_Mono'] font-bold uppercase">{t('pouchFactoryTourPage.hero.badge')}</span>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6 uppercase">
            {t('pouchFactoryTourPage.hero.titleLine1')}<br/>
            <span className="text-[#10b981]">{t('pouchFactoryTourPage.hero.titleLine2')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-['Space_Grotesk']" dangerouslySetInnerHTML={{ __html: t('pouchFactoryTourPage.hero.subtitle') }} />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: t('pouchFactoryTourPage.stats.productionLines'), value: '6' },
              { label: t('pouchFactoryTourPage.stats.dailyCapacity'), value: '100K+' },
              { label: t('pouchFactoryTourPage.stats.qualityTests'), value: '15+' },
              { label: t('pouchFactoryTourPage.stats.yearsExperience'), value: '10+' }
            ].map((stat, idx) => (
              <NeoCard
                key={idx}
                className="p-6"
              >
                <div className="text-3xl font-black text-[#10b981] mb-1">{stat.value}</div>
                <div className="text-sm font-['JetBrains_Mono'] uppercase">{stat.label}</div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black text-4xl md:text-5xl uppercase mb-4">
              {t('pouchFactoryTourPage.videoGrid.title1')}<span className="text-[#10b981]">{t('pouchFactoryTourPage.videoGrid.title2')}</span>
            </h2>
            <p className="text-lg text-gray-700 font-['Space_Grotesk']">
              {t('pouchFactoryTourPage.videoGrid.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {FACTORY_VIDEOS.map((video, idx) => {
              const Icon = video.icon
              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setActiveVideo(video)}
                >
                  <NeoCard className="!p-0 overflow-hidden group h-full">
                    <div className="relative aspect-video bg-black">
                      <video
                        src={video.videoSrc}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause()
                          e.currentTarget.currentTime = 0
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-white bg-[#D4FF00] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-black fill-black ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-[#10b981]" />
                        <h3 className="font-black uppercase text-sm">{t(`pouchFactoryTourPage.videos.${video.id === 'digital-printing' ? 'digitalPrinting' : video.id === 'roto-printing' ? 'rotoPrinting' : video.id === 'bag-making' ? 'bagMaking' : video.id}.title`)}</h3>
                      </div>
                      <p className="text-sm text-gray-600 font-['Space_Grotesk']">{t(`pouchFactoryTourPage.videos.${video.id === 'digital-printing' ? 'digitalPrinting' : video.id === 'roto-printing' ? 'rotoPrinting' : video.id === 'bag-making' ? 'bagMaking' : video.id}.description`)}</p>
                    </div>
                  </NeoCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 px-4 bg-[#F0F0F0] border-y-4 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#10b981] text-white border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <span className="font-['JetBrains_Mono'] font-bold uppercase">{t('pouchFactoryTourPage.quality.badge')}</span>
            </div>
            <h2 className="font-black text-4xl md:text-5xl uppercase mb-4">
              {t('pouchFactoryTourPage.quality.title1')}<span className="text-[#10b981]">{t('pouchFactoryTourPage.quality.title2')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: t('pouchFactoryTourPage.quality.materialTesting.title'),
                points: [t('pouchFactoryTourPage.quality.materialTesting.point1'), t('pouchFactoryTourPage.quality.materialTesting.point2'), t('pouchFactoryTourPage.quality.materialTesting.point3'), t('pouchFactoryTourPage.quality.materialTesting.point4')]
              },
              {
                title: t('pouchFactoryTourPage.quality.qualityControl.title'),
                points: [t('pouchFactoryTourPage.quality.qualityControl.point1'), t('pouchFactoryTourPage.quality.qualityControl.point2'), t('pouchFactoryTourPage.quality.qualityControl.point3'), t('pouchFactoryTourPage.quality.qualityControl.point4')]
              },
              {
                title: t('pouchFactoryTourPage.quality.certifications.title'),
                points: [t('pouchFactoryTourPage.quality.certifications.point1'), t('pouchFactoryTourPage.quality.certifications.point2'), t('pouchFactoryTourPage.quality.certifications.point3'), t('pouchFactoryTourPage.quality.certifications.point4')]
              }
            ].map((section, idx) => (
              <NeoCard key={idx} className="h-full">
                <h3 className="font-black text-xl uppercase mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-[#10b981]" />
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-['Space_Grotesk']">
                      <span className="text-[#10b981] mt-1">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#D4FF00] border-b-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-5xl uppercase mb-6">
            {t('pouchFactoryTourPage.cta.title')}
          </h2>
          <p className="text-xl mb-8 font-['Space_Grotesk']">
            {t('pouchFactoryTourPage.cta.subtitle')}
          </p>
          <NeoButton
            href="https://calendly.com/30-min-free-packaging-consultancy"
            className="text-lg"
          >
            {t('pouchFactoryTourPage.cta.button')}
          </NeoButton>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 border-4 border-white bg-[#D4FF00] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:scale-110 transition-transform z-10"
              >
                <X className="w-6 h-6 text-black" />
              </button>

              {/* Video Container */}
              <div className="border-4 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)]">
                <video
                  key={activeVideo.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full aspect-video bg-black"
                >
                  <source src={activeVideo.videoSrc} type="video/mp4" />
                </video>
              </div>

              {/* Video Info */}
              <div className="mt-4 bg-white border-4 border-white p-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
                <h3 className="font-black text-xl uppercase mb-2">{t(`pouchFactoryTourPage.videos.${activeVideo.id === 'digital-printing' ? 'digitalPrinting' : activeVideo.id === 'roto-printing' ? 'rotoPrinting' : activeVideo.id === 'bag-making' ? 'bagMaking' : activeVideo.id}.title`)}</h3>
                <p className="text-gray-700 font-['Space_Grotesk']">{t(`pouchFactoryTourPage.videos.${activeVideo.id === 'digital-printing' ? 'digitalPrinting' : activeVideo.id === 'roto-printing' ? 'rotoPrinting' : activeVideo.id === 'bag-making' ? 'bagMaking' : activeVideo.id}.description`)}</p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 border-4 border-white bg-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:scale-110 transition-transform"
              >
                <ChevronLeft className="w-8 h-8 text-[#D4FF00]" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 border-4 border-white bg-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:scale-110 transition-transform"
              >
                <ChevronRight className="w-8 h-8 text-[#D4FF00]" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PouchLayout>
  )
}
