import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, ChevronLeft, ChevronRight, Factory, Printer, Layers, Scissors, Package, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const sectionsForPouch = ["5 Common Factory Tour Problems (And Solutions)"];
export const sectionsForAchieve = ["5 Common Factory Tour Problems (And Solutions)"];

const translations = {
  en: {
    title: "5 Common Factory Tour Problems (And Solutions)",
    problems: [
      { title: "Inconsistent Sealing Strength", desc: "Real-time ultrasonic seal inspection and automated pressure calibration." },
      { title: "Color Variation in Printing", desc: "In-line Pantone matching systems and automated registration control." },
      { title: "Material Delamination", desc: "Advanced curing rooms and plasma surface treatment." },
      { title: "Slow Changeover Times", desc: "Quick-change digital printing and modular converting components." },
      { title: "High Defect Rates", desc: "100% optical inspection systems and AI-driven defect rejection." }
    ]
  },
  es: {
    title: "5 Problemas Comunes en la Fábrica (y Soluciones)",
    problems: [
      { title: "Fuerza de sellado inconsistente", desc: "Inspección ultrasónica de sellado en tiempo real y calibración de presión automatizada." },
      { title: "Variación de color en la impresión", desc: "Sistemas en línea de coincidencia Pantone y control de registro automatizado." },
      { title: "Delaminación del material", desc: "Salas de curado avanzado y tratamiento de superficie por plasma." },
      { title: "Tiempos de cambio lentos", desc: "Impresión digital de cambio rápido y componentes de conversión modulares." },
      { title: "Altas tasas de defectos", desc: "Sistemas de inspección óptica del 100% y rechazo de defectos impulsado por IA." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants en Usine (et Solutions)",
    problems: [
      { title: "Force de scellage incohérente", desc: "Inspection par ultrasons en temps réel du scellage et étalonnage automatisé de la pression." },
      { title: "Variation de couleur à l'impression", desc: "Systèmes en ligne de correspondance Pantone et contrôle d'alignement automatisé." },
      { title: "Délaminage des matériaux", desc: "Chambres de durcissement avancées et traitement de surface au plasma." },
      { title: "Temps de changement lents", desc: "Impression numérique à changement rapide et composants de conversion modulaires." },
      { title: "Taux de défauts élevés", desc: "Systèmes d'inspection optique à 100 % et rejet des défauts par l'IA." }
    ]
  },
  "zh-TW": {
    title: "5 個常見工廠製造問題（與解決方案）",
    problems: [
      { title: "封口強度不均", desc: "即時超音波封口檢測與自動壓力校準。" },
      { title: "印刷色差", desc: "線上 Pantone 配色系統與自動套印控制。" },
      { title: "材料脫層", desc: "先進熟化室與電漿表面處理。" },
      { title: "換線時間長", desc: "快速換線數位印刷與模組化製袋組件。" },
      { title: "高瑕疵率", desc: "100% 光學檢測系統與 AI 驅動瑕疵剔除。" }
    ]
  }
};

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
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchFactoryTour'
  const lang = (i18n.language || 'en') as keyof typeof translations;
  const pageT = translations[lang] || translations.en;
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
        <title>{t(`${p}.seo.title`, "Factory Tour | See How We Make Eco Pouches | Pouch.eco")}</title>
        <meta 
          name="description" 
          content={t(`${p}.seo.description`, "Virtual factory tour: Watch our sustainable pouch manufacturing process from printing to bag making. Quality certified eco-packaging production.")} 
        />
        <link rel="canonical" href="https://pouch.eco/company/factory-tour" />
        <meta property="og:title" content={t(`${p}.seo.ogTitle`, "Factory Tour | Pouch.eco")} />
        <meta property="og:description" content={t(`${p}.seo.ogDescription`, "See inside our eco-friendly packaging factory")} />
        <meta property="og:url" content="https://pouch.eco/company/factory-tour" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-16 px-4 overflow-hidden text-left bg-neutral-900 border-b-4 border-black">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video muted={true}
            autoPlay
            loop
            
            playsInline
            className="w-full h-full object-cover opacity-40"
            key="hero-video-factory"
          >
            <source src="/video/pouch-eco-marketing-videos/brand-reveal.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-black/50" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Breadcrumb Bar */}
          <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-white mb-8">
            <Link to="/" className="hover:bg-[#D4FF00] hover:text-black px-1 py-0.5 border border-white transition">{t(`${p}.hero.breadcrumbHome`, "Home")}</Link>
            <span>/</span>
            <Link to="/company/about" className="hover:bg-[#D4FF00] hover:text-black px-1 py-0.5 border border-white transition">{t(`${p}.hero.breadcrumbAbout`, "About Us")}</Link>
            <span>/</span>
            <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-white">{t(`${p}.hero.breadcrumbTour`, "Factory Tour")}</span>
          </div>

          <div className="text-center max-w-4xl mx-auto mt-8">
            <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
              <span className="font-['JetBrains_Mono'] font-black uppercase text-black">{t(`${p}.hero.badge`, "FACTORY_TOUR_V1.0")}</span>
            </div>

            <h1 className="font-black text-5xl md:text-7xl leading-none mb-6 uppercase text-white">
              {t(`${p}.hero.titleLine1`, "See How We")}<br/>
              <span className="text-[#10b981] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.titleLine2`, "Make Magic")}</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto font-['Space_Grotesk'] leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.hero.desc`, "Virtual tour of our <strong>BRCGS certified facility</strong> where certified sustainable pouches are engineered.") }} />

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: t(`${p}.hero.stats.0.label`, 'Production Lines'), value: t(`${p}.hero.stats.0.value`, '6') },
                { label: t(`${p}.hero.stats.1.label`, 'Daily Capacity'), value: t(`${p}.hero.stats.1.value`, '100K+') },
                { label: t(`${p}.hero.stats.2.label`, 'Quality Tests'), value: t(`${p}.hero.stats.2.value`, '15+') },
                { label: t(`${p}.hero.stats.3.label`, 'Years Experience'), value: t(`${p}.hero.stats.3.value`, '13+') }
              ].map((stat, idx) => (
                <NeoCard
                  key={idx}
                  className="p-6 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="text-3xl font-black text-[#10b981] mb-1">{stat.value}</div>
                  <div className="text-xs font-['JetBrains_Mono'] uppercase font-bold text-neutral-500">{stat.label}</div>
                </NeoCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 px-4 bg-white text-left">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <NeoBadge color="magenta">{t(`${p}.grid.badge`, "PRODUCTION_WORKFLOW")}</NeoBadge>
            <h2 className="font-black text-4xl md:text-5xl uppercase mb-4 mt-6">
              {t(`${p}.grid.titleLine1`, "Precision")} <span className="text-[#10b981]">{t(`${p}.grid.titleLine2`, "Manufacturing")}</span>
            </h2>
            <p className="text-lg text-gray-700 font-['Space_Grotesk']">
              {t(`${p}.grid.desc`, "Hover over or click any process to watch our production line highlights.")}
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
                  <NeoCard className="!p-0 overflow-hidden group h-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all bg-white">
                    <div className="relative aspect-video bg-black">
                      <video muted={true}
                        src={video.videoSrc}
                        className="w-full h-full object-cover"
                        
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause()
                          e.currentTarget.currentTime = 0
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-black bg-[#D4FF00] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-black fill-black ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-white border-t-4 border-black text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-[#10b981]" />
                        <h3 className="font-black uppercase text-sm">{t(`${p}.videos.${idx}.title`, video.title)}</h3>
                      </div>
                      <p className="text-xs text-gray-600 font-['Space_Grotesk'] leading-relaxed">{t(`${p}.videos.${idx}.description`, video.description)}</p>
                    </div>
                  </NeoCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-24 px-4 bg-neutral-100 border-y-4 border-black text-left">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#10b981] text-white border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <span className="font-['JetBrains_Mono'] font-bold uppercase">{t(`${p}.quality.badge`, "QUALITY_ASSURANCE")}</span>
            </div>
            <h2 className="font-black text-4xl md:text-6xl uppercase mb-4">
              {t(`${p}.quality.titleLine1`, "Certified")} <span className="text-[#10b981]">{t(`${p}.quality.titleLine2`, "Standards")}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t(`${p}.quality.sections.0.title`, 'Material Testing'),
                points: [
                  t(`${p}.quality.sections.0.points.0`, 'OTR & WVTR gas barrier permeability testing'),
                  t(`${p}.quality.sections.0.points.1`, 'Hermetic seal strength measurement (ASTM F88)'),
                  t(`${p}.quality.sections.0.points.2`, 'Sub-micron thickness uniformity verification'),
                  t(`${p}.quality.sections.0.points.3`, 'Migration safety analysis for food compatibility')
                ]
              },
              {
                title: t(`${p}.quality.sections.1.title`, 'Quality Control'),
                points: [
                  t(`${p}.quality.sections.1.points.0`, 'In-line high-resolution camera print inspections'),
                  t(`${p}.quality.sections.1.points.1`, 'Pantone color consistency digital checkouts'),
                  t(`${p}.quality.sections.1.points.2`, 'Dimensional blueprints accuracy check'),
                  t(`${p}.quality.sections.1.points.3`, 'Heavy-load physical drops and pressure tests')
                ]
              },
              {
                title: t(`${p}.quality.sections.2.title`, 'Certifications'),
                points: [
                  t(`${p}.quality.sections.2.points.0`, 'BPI ASTM D6400 Composting Certificate'),
                  t(`${p}.quality.sections.2.points.1`, 'TUV OK Compost HOME Environmental Standards'),
                  t(`${p}.quality.sections.2.points.2`, 'Grade A BRCGS Food-Safety Compliances'),
                  t(`${p}.quality.sections.2.points.3`, 'FSC Responsible Wood Pulp Traceability')
                ]
              }
            ].map((section, idx) => (
              <NeoCard key={idx} className="h-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white text-left">
                <h3 className="font-black text-xl uppercase mb-6 flex items-center gap-2 border-b-2 border-black pb-4">
                  <CheckCircle className="w-6 h-6 text-[#10b981]" />
                  {section.title}
                </h3>
                <ul className="space-y-4 font-['JetBrains_Mono'] text-xs text-neutral-600 leading-relaxed">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#10b981] mt-0.5">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 px-4 bg-white border-b-4 border-black text-left">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase mb-4">
              {pageT.title}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <img 
                src="/imgs/knowledge/pouch-factory-tour-pain-points.jpg" 
                alt="Factory Tour Problems and Solutions" 
                className="w-full h-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] object-cover rounded-xl"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              {pageT.problems.map((prob: any, idx: number) => (
                <div key={idx} className="flex gap-4 items-start p-6 border-4 border-black bg-neutral-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="flex-shrink-0 mt-1">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg uppercase mb-2">{prob.title}</h4>
                    <div className="flex items-start gap-2 text-neutral-600 font-['Space_Grotesk']">
                      <Lightbulb className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <p>{prob.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] border-b-4 border-black text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <NeoBadge color="bg-black text-white">{t(`${p}.cta.badge`, "BIO_TOUR_MANDATE")}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            {t(`${p}.cta.title`, "Partner With Us")}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            {t(`${p}.cta.desc`, "Direct-to-factory communication ensuring complete regulatory transparency.")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeoButton href="/sample" variant="dark">
              {t(`${p}.cta.button1`, "Request Free Eco Sample Kit")}
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary" className="!bg-white !text-black border-black border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t(`${p}.cta.button2`, "Consult Packaging Engineer")}
            </NeoButton>
          </div>

          <div className="pt-8 border-t border-black/20 text-xs font-['JetBrains_Mono'] text-black/70 max-w-xl mx-auto leading-relaxed">
            <strong>{t(`${p}.cta.footerTitle`, "Seeking high-volume enterprise contract manufacturing?")}</strong><br/>
            {t(`${p}.cta.footerDesc`, "For high-volume bulk rotogravure print specifications and private label factory contracts, visit our wholesale portal:")}{" "}
            <a 
              href="https://achievepack.com/company/factory-tour" 
              className="underline font-bold hover:text-black transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              achievepack.com/company/factory-tour →
            </a>
          </div>
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
                <video muted={true}
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
              <div className="mt-4 bg-white border-4 border-white p-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] text-left">
                <h3 className="font-black text-xl uppercase mb-2">
                  {t(`${p}.videos.${FACTORY_VIDEOS.findIndex(v => v.id === activeVideo.id)}.title`, activeVideo.title)}
                </h3>
                <p className="text-gray-700 font-['Space_Grotesk']">
                  {t(`${p}.videos.${FACTORY_VIDEOS.findIndex(v => v.id === activeVideo.id)}.description`, activeVideo.description)}
                </p>
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
