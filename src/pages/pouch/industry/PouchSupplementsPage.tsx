import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import DualDomainSEOHead from '../../../components/DualDomainSEOHead'
import { motion } from 'framer-motion'
import { Package, Leaf, CheckCircle, Calendar, ArrowRight, Shield, Beaker, Sparkles, Star, Pill, AlertTriangle, Droplets, Zap, Wind, Maximize } from 'lucide-react'

const translations = {
  en: {
    title: "5 Common Supplement Packaging Problems (And Solutions)",
    problems: [
      { title: "Clumping & Moisture Damage", desc: "High-barrier aluminum or EVOH films that block moisture (MVTR < 1.0) to prevent hardening.", icon: Droplets },
      { title: "Oxidation & Loss of Potency", desc: "Nitrogen flushing and oxygen barriers to protect sensitive active ingredients.", icon: Wind },
      { title: "Messy Dispensing & Scooping", desc: "Wide-mouth openings and press-to-close resealable zippers for easy scoop access.", icon: Maximize },
      { title: "Puncture or Tearing", desc: "Multi-layer laminated structures designed with high puncture resistance for heavy powders.", icon: Shield },
      { title: "Static Cling & Powder Adhesion", desc: "Specialized anti-static inner layers that ensure all powder dispenses smoothly.", icon: Zap }
    ]
  },
  es: {
    title: "5 Problemas Comunes en el Envasado de Suplementos (Y Soluciones)",
    problems: [
      { title: "Aglutinación y Daño por Humedad", desc: "Películas de alta barrera (aluminio o EVOH) que bloquean la humedad para evitar el endurecimiento.", icon: Droplets },
      { title: "Oxidación y Pérdida de Potencia", desc: "Barrido con nitrógeno y barreras de oxígeno para proteger los ingredientes activos.", icon: Wind },
      { title: "Dispensado y Uso de Cuchara Sucios", desc: "Aberturas anchas y cierres herméticos reutilizables para un fácil acceso.", icon: Maximize },
      { title: "Perforación o Desgarro", desc: "Estructuras laminadas multicapa con alta resistencia a la perforación para polvos pesados.", icon: Shield },
      { title: "Adherencia Estática del Polvo", desc: "Capas interiores antiestáticas que garantizan que todo el polvo se dispense sin problemas.", icon: Zap }
    ]
  },
  fr: {
    title: "5 Problèmes Courants d'Emballage de Suppléments (Et Solutions)",
    problems: [
      { title: "Agglutination et Dégâts Dus à l'Humidité", desc: "Films haute barrière (aluminium ou EVOH) qui bloquent l'humidité pour éviter le durcissement.", icon: Droplets },
      { title: "Oxydation et Perte de Puissance", desc: "Rinçage à l'azote et barrières à l'oxygène pour protéger les ingrédients sensibles.", icon: Wind },
      { title: "Distribution et Utilisation de Cuillères Salissantes", desc: "Larges ouvertures et fermetures à glissière refermables pour un accès facile.", icon: Maximize },
      { title: "Perforation ou Déchirure", desc: "Structures stratifiées multicouches conçues avec une haute résistance à la perforation.", icon: Shield },
      { title: "Adhérence Statique de la Poudre", desc: "Couches intérieures antistatiques spécialisées assurant une distribution fluide de la poudre.", icon: Zap }
    ]
  },
  "zh-TW": {
    title: "5 個常見的保健食品包裝問題 (及其解決方案)",
    problems: [
      { title: "結塊與受潮", desc: "採用高阻隔鋁箔或 EVOH 薄膜阻擋水氣，防止粉末變硬。", icon: Droplets },
      { title: "氧化與效力流失", desc: "充氮技術與高阻氧層，完美保護敏感的活性成分。", icon: Wind },
      { title: "取粉困難與容易灑出", desc: "寬口設計與高品質夾鏈條，方便使用量勺取用。", icon: Maximize },
      { title: "穿刺或破裂", desc: "多層複合結構設計，具有高抗穿刺性，可承受沉重的粉末。", icon: Shield },
      { title: "靜電吸附", desc: "專業抗靜電內層，確保粉末不沾黏在袋內。", icon: Zap }
    ]
  }
}

const sectionsForPouch = ["5 Common Supplement Packaging Problems (And Solutions)"];
const sectionsForAchieve = ["5 Common Supplement Packaging Problems (And Solutions)"];

import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'

export default function PouchSupplementsPage() {
  const { t, i18n } = useTranslation()
  const currentLang = (i18n.language || 'en') as keyof typeof translations
  const locale = translations[currentLang] || translations.en

  // Scroll detection
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout
    const handleScroll = () => {
      document.body.classList.add('is-scrolling')
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling')
      }, 150)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimer)
    }
  }, [])

  const canonicalUrl = 'https://pouch.eco/industry/supplements'
  const title = t('seoPages.pages.pouchSupplements.metaTitle')
  const metaDescription = t('seoPages.pages.pouchSupplements.metaDescription')

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: t('seoPages.pages.pouchSupplements.compostableSupplementPouches'),
    "description": metaDescription,
    "brand": {
      "@type": "Brand",
      "name": "POUCH.ECO"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0.55",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "87"
    }
  }

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchSupplements.canCompostablePouchesProtect'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchSupplements.yesOurHighbarrierCompostable')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchSupplements.areCompostableSupplementBags'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchSupplements.absolutelyAllMaterialsAre')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchSupplements.whatsTheMinimumOrder'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchSupplements.just500PiecesWith')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchSupplements.doYouOfferResealable'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchSupplements.yesChooseFromCompostable')
        }
      }
    ]
  }

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={t('seoPages.pages.pouchSupplements.metaTitle')}
        description={t('seoPages.pages.pouchSupplements.metaDescription')}
        keywords={['compostable supplement pouch', 'sustainable protein powder bag', 'eco supplement packaging', 'low MOQ supplement bag', 'biodegradable vitamin pouch']}
        schemaType="Product"
        ogImage="/imgs/artifacts/compostable_protein_powder_pouch.jpg"
        additionalSchema={schemaData}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video muted={true}
            autoPlay
            loop
            
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-supplements"
          >
            <source src="/video/pouch-eco-marketing-videos/Material.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4FF00] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6"
            >
              <Pill className="w-5 h-5" />
              <span className="font-['JetBrains_Mono'] font-bold uppercase">{t('seoPages.pages.pouchSupplements.supplementPackaging')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              {t('seoPages.pages.pouchSupplements.compostableSupplement')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchSupplements.pouches')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-['JetBrains_Mono'] mb-4 max-w-3xl mx-auto">
              {t('seoPages.pages.pouchSupplements.highbarrierMoistureproofHomeCompostable')}
            </p>
            <p className="text-lg font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              {t('seoPages.pages.pouchSupplements.forProteinSuperfoodsVitamins')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4FF00] text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-6 h-6" />
                {t('seoPages.pages.pouchSupplements.getYourQuote')}
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Package className="w-6 h-6" />
                {t('seoPages.pages.pouchSupplements.seeOptions')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: t('seoPages.pages.pouchSupplements.minimumOrder'), value: '500', unit: 'pieces', icon: Package },
              { label: t('seoPages.pages.pouchSupplements.moistureBarrier'), value: '<1.0', unit: 'MVTR', icon: Shield },
              { label: t('seoPages.pages.pouchSupplements.fdaCompliant'), value: '21CFR', unit: 'certified', icon: Star },
              { label: t('seoPages.pages.pouchSupplements.compostTime'), value: '180', unit: 'days', icon: Leaf }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#10b981]" />
                <div className="text-4xl font-['Space_Grotesk'] font-black text-[#10b981] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-['JetBrains_Mono'] uppercase text-gray-600">
                  {stat.unit}
                </div>
                <div className="text-xs font-['JetBrains_Mono'] uppercase text-gray-500 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-blue-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">{t('seoPages.pages.pouchSupplements.visualshowcase')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t('seoPages.pages.pouchSupplements.supplements')}<br/>{t('seoPages.pages.pouchSupplements.gallery')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/artifacts/compostable_protein_powder_pouch.jpg" 
              alt={t('seoPages.pages.pouchSupplements.alt_compostableProteinPowderPouch')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchSupplements.caption_proteinPouches')}
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt={t('seoPages.pages.pouchSupplements.alt_superfoodStandUpPouch')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchSupplements.caption_superfoodBags')}
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt={t('seoPages.pages.pouchSupplements.alt_bulkSupplementFlatBottom')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchSupplements.caption_bulkNutrition')}
            />
            <ClickableImage 
              src="/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp" 
              alt={t('seoPages.pages.pouchSupplements.alt_supplementPackagingBarrierComparison')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchSupplements.caption_barrierTech')}
            />
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchSupplements.perfectFor')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchSupplements.healthBrands')}</span>
          </h2>

          <div className="bg-gradient-to-br from-[#D4FF00]/20 to-[#10b981]/10 p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-xl font-['Space_Grotesk'] font-semibold mb-6 text-center">
              {t('seoPages.pages.pouchSupplements.whetherYoureLaunchingA')}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: t('seoPages.pages.pouchSupplements.proteinBrands'),
                  desc: t('seoPages.pages.pouchSupplements.highbarrierProtectionForWhey'),
                  icon: Beaker
                },
                {
                  title: t('seoPages.pages.pouchSupplements.superfoodCompanies'),
                  desc: t('seoPages.pages.pouchSupplements.moistureproofForGreensAdaptogens'),
                  icon: Sparkles
                },
                {
                  title: t('seoPages.pages.pouchSupplements.sportsNutrition'),
                  desc: t('seoPages.pages.pouchSupplements.resealableClosuresForPreworkout'),
                  icon: Star
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <item.icon className="w-12 h-12 text-[#10b981] mb-4" />
                  <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-sm text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchSupplements.whySupplementBrands')} <span className="text-[#10b981]">{t('seoPages.pages.pouchSupplements.chooseThese')}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: t('seoPages.pages.pouchSupplements.highbarrierProtection'),
                desc: t('seoPages.pages.pouchSupplements.mvtr10Gm24hrProtects'),
                icon: Shield
              },
              {
                title: t('seoPages.pages.pouchSupplements.preservesPotency'),
                desc: t('seoPages.pages.pouchSupplements.oxygenAndUvBarriers'),
                icon: Star
              },
              {
                title: t('seoPages.pages.pouchSupplements.resealableClosures'),
                desc: t('seoPages.pages.pouchSupplements.compostableZippersOrPresstoclose'),
                icon: Package
              },
              {
                title: t('seoPages.pages.pouchSupplements.fda21CfrCompliant'),
                desc: t('seoPages.pages.pouchSupplements.foodAndSupplementContact'),
                icon: CheckCircle
              },
              {
                title: t('seoPages.pages.pouchSupplements.customSizesAvailable'),
                desc: t('seoPages.pages.pouchSupplements.fromSingleserveSachets10g'),
                icon: Beaker
              },
              {
                title: t('seoPages.pages.pouchSupplements.homeCompostable'),
                desc: t('seoPages.pages.pouchSupplements.tuvCertifiedBreaksDown'),
                icon: Leaf
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-10 h-10 text-[#10b981]" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-600">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products You Can Package */}
      <section className="py-24 bg-gray-50 border-t-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchSupplements.whatCanYou')} <span className="text-[#10b981]">{t('seoPages.pages.pouchSupplements.package')}</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: 'Protein & Sports',
                items: ['Whey Protein', 'Plant Protein', 'BCAA & Aminos', 'Pre-Workout']
              },
              {
                category: 'Superfood Powders',
                items: ['Green Powders', 'Collagen Peptides', 'Adaptogen Blends', 'Mushroom Powders']
              },
              {
                category: 'Functional Powders',
                items: ['Electrolytes', 'Fiber Supplements', 'Digestive Enzymes', 'Immunity Blends']
              }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-4 text-[#10b981]">
                  {cat.category}
                </h3>
                <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t('seoPages.pages.pouchSupplements.theUltimateGuideTo')} <span className="text-[#10b981]">{t('seoPages.pages.pouchSupplements.sustainableSupplementPackaging')}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('seoPages.pages.pouchSupplements.theHealthAndWellness')}
            </p>
            
            <ClickableImage 
              src="/imgs/artifacts/compostable_protein_powder_pouch.jpg" 
              alt={t('seoPages.pages.pouchSupplements.alt_sustainableProteinPowderPackaging')} 
              className="w-full h-96 object-cover border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchSupplements.caption_clickToEnlarge')}
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchSupplements.combatingMoistureTheEnemy')}</h3>
            <p>
              {t('seoPages.pages.pouchSupplements.whenPackagingPowderedSupplements')}
            </p>
            <p>
              {t('seoPages.pages.pouchSupplements.traditionallySupplementBrandsRely')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchSupplements.fdaComplianceAndFood')}</h3>
            <p>
              {t('seoPages.pages.pouchSupplements.packagingSupplementsRequiresStrict')} 
            </p>
            <p>
              {t('seoPages.pages.pouchSupplements.ourCompostableMaterialsIncluding')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchSupplements.flexibleFormatsVsRigid')}</h3>
            <p>
              {t('seoPages.pages.pouchSupplements.theSupplementIndustryHas')}
            </p>
            <p>
              {t('seoPages.pages.pouchSupplements.switchingToFlexibleStandup')}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <ClickableImage 
                src="/imgs/knowledge/pouch-supplements-pain-points.jpg" 
                alt="Supplement packaging problems and solutions" 
                className="w-full h-auto object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
                {locale.title}
              </h2>
              <div className="space-y-6">
                {locale.problems.map((prob, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 bg-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div className="flex-shrink-0">
                      <prob.icon className="w-8 h-8 text-[#10b981]" />
                    </div>
                    <div>
                      <h3 className="font-['Space_Grotesk'] font-bold text-xl uppercase mb-1">{prob.title}</h3>
                      <p className="font-['JetBrains_Mono'] text-sm text-gray-700">{prob.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchSupplements.common')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchSupplements.questions')}</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: t('seoPages.pages.pouchSupplements.canCompostablePouchesProtect'),
                a: t('seoPages.pages.pouchSupplements.yesOurHighbarrierCompostable1')
              },
              {
                q: t('seoPages.pages.pouchSupplements.areCompostableSupplementBags'),
                a: t('seoPages.pages.pouchSupplements.absolutelyAllMaterialsAre1')
              },
              {
                q: t('seoPages.pages.pouchSupplements.whatsTheMinimumOrder'),
                a: t('seoPages.pages.pouchSupplements.just500PiecesWith1')
              },
              {
                q: t('seoPages.pages.pouchSupplements.doYouOfferResealable'),
                a: t('seoPages.pages.pouchSupplements.yesChooseFromCompostable')
              },
              {
                q: t('seoPages.pages.pouchSupplements.whatSizesAreAvailable'),
                a: t('seoPages.pages.pouchSupplements.fromSingleserveSachets1050g')
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-[#10b981] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#10b981]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#D4FF00] border-t-4 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Pill className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6">
              {t('seoPages.pages.pouchSupplements.yourSupplementsDeserveBetter')}
            </h2>
            <p className="text-xl font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              {t('seoPages.pages.pouchSupplements.highbarrierMoistureproofHomeCompostable1')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-[#D4FF00] font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Calendar className="w-6 h-6" />
                {t('seoPages.pages.pouchSupplements.bookYourCallNow')}
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/materials/catalog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Package className="w-6 h-6" />
                {t('seoPages.pages.pouchSupplements.seeMaterialOptions')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Keep Reading */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-3xl md:text-4xl uppercase mb-8">
            <span className="bg-[#D4FF00] px-2">{t('seoPages.pages.pouchSupplements.keepReading')}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/industry/snacks"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/compostable_snack_pouch_window.jpg"
                  alt={t('seoPages.pages.pouchSupplements.alt_compostableSnackPouches')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchSupplements.snackPouches')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchSupplements.greaseresistantKeepsCrunchCompostable')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchSupplements.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/industry/coffee-tea"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/compostable_coffee_stand_up_pouch.jpg"
                  alt={t('seoPages.pages.pouchSupplements.alt_compostableCoffeePouches')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchSupplements.coffeeTeaPouches')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchSupplements.degassingValvesHighbarrierCompostable')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchSupplements.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/blog/home-compostable-guide"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/4-infograhic/compost.webp"
                  alt={t('seoPages.pages.pouchSupplements.alt_homeCompostingGuide')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchSupplements.homeCompostingGuide')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchSupplements.completeGuideToHome')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchSupplements.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
