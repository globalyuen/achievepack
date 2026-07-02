import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Recycle, CheckCircle, Calendar, Shield, Package, X, ChevronDown, HelpCircle, ArrowRight, Zap, Factory, Eye, Sparkles, Layers, ShieldCheck, AlertTriangle } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'

const localTranslations: Record<string, any> = {
  en: {
    problemsTitle: "5 Common PCR Problems (And Solutions)",
    problems: [
      {
        title: "1. Impurities and Gel Particles (Black Spots)",
        desc: "PCR materials often contain trace contaminants that appear as black spots or gels in the film.",
        solution: "Solution: We use advanced optical sorting and multi-stage melt filtration to ensure high clarity and purity."
      },
      {
        title: "2. Inconsistent Color and Appearance",
        desc: "Variations in recycled feedstocks can lead to unpredictable tints (often yellowish or grayish) in the final product.",
        solution: "Solution: Employing multi-layer co-extrusion technology, we place the PCR layer in the core, surrounded by virgin layers for a consistent, premium finish."
      },
      {
        title: "3. Reduced Mechanical and Barrier Strength",
        desc: "The recycling process can degrade polymer chains, reducing tensile strength and barrier performance.",
        solution: "Solution: We blend PCR with high-performance virgin resins and apply specialized barrier coatings (like EVOH or AlOx) to meet strict shelf-life requirements."
      },
      {
        title: "4. Residual Odors",
        desc: "Post-consumer plastics can retain odors from their previous uses, which is unacceptable for food or cosmetic packaging.",
        solution: "Solution: Our suppliers utilize intensive washing and vacuum degassing during pelletization to eliminate volatile organic compounds (VOCs)."
      },
      {
        title: "5. Unreliable Heat Sealing",
        desc: "Using PCR in the sealing layer can cause inconsistent seal strength, leading to leaks.",
        solution: "Solution: We guarantee the innermost sealing layer remains 100% virgin LLDPE, ensuring reliable, hermetic seals on every pouch."
      }
    ]
  },
  es: {
    problemsTitle: "5 Problemas Comunes de PCR (Y Soluciones)",
    problems: [
      {
        title: "1. Impurezas y Partículas de Gel (Puntos Negros)",
        desc: "Los materiales PCR a menudo contienen contaminantes traza que aparecen como puntos negros o geles en la película.",
        solution: "Solución: Utilizamos clasificación óptica avanzada y filtración de fusión de múltiples etapas para garantizar alta claridad y pureza."
      },
      {
        title: "2. Color y Apariencia Inconsistentes",
        desc: "Las variaciones en las materias primas recicladas pueden provocar tintes impredecibles (a menudo amarillentos o grisáceos) en el producto final.",
        solution: "Solución: Empleando tecnología de coextrusión de múltiples capas, colocamos la capa de PCR en el núcleo, rodeada de capas vírgenes para un acabado consistente y premium."
      },
      {
        title: "3. Resistencia Mecánica y de Barrera Reducidas",
        desc: "El proceso de reciclaje puede degradar las cadenas de polímeros, reduciendo la resistencia a la tracción y el rendimiento de la barrera.",
        solution: "Solución: Mezclamos PCR con resinas vírgenes de alto rendimiento y aplicamos recubrimientos de barrera especializados para cumplir con estrictos requisitos de vida útil."
      },
      {
        title: "4. Olores Residuales",
        desc: "Los plásticos posconsumo pueden retener olores de sus usos anteriores, lo cual es inaceptable para envases de alimentos o cosméticos.",
        solution: "Solución: Nuestros proveedores utilizan lavado intensivo y desgasificación al vacío durante la granulación para eliminar los compuestos orgánicos volátiles (COV)."
      },
      {
        title: "5. Sellado Térmico Poco Confiable",
        desc: "El uso de PCR en la capa de sellado puede causar una resistencia de sellado inconsistente, lo que provoca fugas.",
        solution: "Solución: Garantizamos que la capa de sellado más interna siga siendo 100% LLDPE virgen, asegurando sellos herméticos y confiables en cada bolsa."
      }
    ]
  },
  fr: {
    problemsTitle: "5 Problèmes Courants de PCR (Et Solutions)",
    problems: [
      {
        title: "1. Impuretés et Particules de Gel (Points Noirs)",
        desc: "Les matériaux PCR contiennent souvent des traces de contaminants qui apparaissent sous forme de points noirs ou de gels dans le film.",
        solution: "Solution : Nous utilisons un tri optique avancé et une filtration à l'état fondu en plusieurs étapes pour garantir une clarté et une pureté élevées."
      },
      {
        title: "2. Couleur et Apparence Incohérentes",
        desc: "Les variations des matières premières recyclées peuvent entraîner des teintes imprévisibles (souvent jaunâtres ou grisâtres) dans le produit final.",
        solution: "Solution : En utilisant la technologie de coextrusion multicouche, nous plaçons la couche PCR au cœur, entourée de couches vierges pour une finition cohérente et haut de gamme."
      },
      {
        title: "3. Résistance Mécanique et Barrière Réduites",
        desc: "Le processus de recyclage peut dégrader les chaînes polymères, réduisant ainsi la résistance à la traction et les performances de la barrière.",
        solution: "Solution : Nous mélangeons la PCR avec des résines vierges haute performance et appliquons des revêtements barrières spécialisés pour répondre aux exigences strictes de durée de conservation."
      },
      {
        title: "4. Odeurs Résiduelles",
        desc: "Les plastiques post-consommation peuvent conserver les odeurs de leurs utilisations précédentes, ce qui est inacceptable pour les emballages alimentaires ou cosmétiques.",
        solution: "Solution : Nos fournisseurs utilisent un lavage intensif et un dégazage sous vide pendant la granulation pour éliminer les composés organiques volatils (COV)."
      },
      {
        title: "5. Thermoscellage Peu Fiable",
        desc: "L'utilisation de PCR dans la couche de scellage peut entraîner une résistance de scellage incohérente, entraînant des fuites.",
        solution: "Solution : Nous garantissons que la couche de scellage la plus interne reste à 100 % en LLDPE vierge, garantissant des scellages fiables et hermétiques sur chaque sachet."
      }
    ]
  },
  'zh-TW': {
    problemsTitle: "5 個常見的 PCR 問題（與解決方案）",
    problems: [
      {
        title: "1. 雜質與晶點（黑點）",
        desc: "PCR 材料通常含有微量污染物，會在薄膜中呈現黑點或晶點。",
        solution: "解決方案：我們採用先進的光學分選與多級熔體過濾，確保高清晰度與純度。"
      },
      {
        title: "2. 顏色與外觀不均勻",
        desc: "回收原料的變化可能導致最終產品出現不可預測的色調（通常偏黃或偏灰）。",
        solution: "解決方案：採用多層共擠技術，我們將 PCR 層置於核心，外圍以原生料包覆，呈現一致的優質外觀。"
      },
      {
        title: "3. 機械與阻隔強度降低",
        desc: "回收過程會降解聚合物鏈，降低拉伸強度與阻隔性能。",
        solution: "解決方案：我們將 PCR 與高性能原生樹脂混合，並塗佈特殊的阻隔塗層，以符合嚴格的保質期要求。"
      },
      {
        title: "4. 殘留異味",
        desc: "消費後塑膠可能會殘留先前使用的異味，這對於食品或化妝品包裝是不可接受的。",
        solution: "解決方案：我們的供應商在造粒過程中進行強力清洗與真空脫氣，消除揮發性有機化合物 (VOC)。"
      },
      {
        title: "5. 熱封不可靠",
        desc: "在封合層使用 PCR 會導致封合強度不均，進而造成洩漏。",
        solution: "解決方案：我們保證最內層的封合層 100% 採用原生 LLDPE，確保每個包裝袋都有可靠、密封的封口。"
      }
    ]
  }
}

// Image paths - using imgs/pcr/guide folder (v2 for cache busting)
const IMAGES = {
  hero: '/imgs/pcr/guide/hero.webp?v=2',
  materialScience: '/imgs/pcr/guide/a_pcr_material_science_infographic_7982111.webp?v=2',
  closedLoop: '/imgs/pcr/guide/a_pcr_closed_loop_diagram_5799468.webp?v=2',
  barrierPerformance: '/imgs/pcr/guide/a_pcr_barrier_performance_diagram_0887278.webp?v=2',
  appearanceComparison: '/imgs/pcr/guide/a_pcr_appearance_comparison_6887947.webp?v=2',
  designForward: '/imgs/pcr/guide/a_pcr_design_forward_showcase_0687570.webp?v=2',
  safetyCompliance: '/imgs/pcr/guide/a_pcr_safety_compliance_lab_8705893.webp?v=2',
  lineTrial: '/imgs/pcr/guide/a_pcr_line_trial_machinability_5890666.webp?v=2',
  ecoDigitalSolutions: '/imgs/pcr/guide/a_achieve_pack_eco_digital_solutions_2468996.webp?v=2',
  sustainabilityImpact: '/imgs/pcr/guide/a_pcr_sustainability_impact_story_3330780.webp?v=2',
}

// Clickable Image Component with lightbox
const ClickableImage: React.FC<{
  src: string
  alt: string
  className?: string
  caption?: string
}> = ({ src, alt, className = '', caption }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <figure className="cursor-pointer group" onClick={() => setIsOpen(true)}>
        <img 
          src={src} 
          alt={alt} 
          className={`${className} transition-transform group-hover:scale-[1.02]`}
          loading="lazy"
        />
        {caption && (
          <figcaption className="text-xs text-neutral-500 mt-2 text-center">{caption}</figcaption>
        )}
        <div className="text-xs text-primary-600 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click to enlarge</div>
      </figure>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 z-[10000] text-white hover:text-neutral-300 bg-black/50 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
            aria-label="Close image"
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {caption && (
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black/50 px-4 py-2 rounded-lg max-w-lg">
              {caption}
            </p>
          )}
        </div>
      )}
    </>
  )
}

// Alternating Image-Text Row Component
const ImageTextRow: React.FC<{
  image: string
  imageAlt: string
  imageCaption?: string
  children: React.ReactNode
  imageLeft?: boolean
}> = ({ image, imageAlt, imageCaption, children, imageLeft = true }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center`}>
      {imageLeft ? (
        <>
          <div className="order-2 md:order-1">
            <ClickableImage 
              src={image} 
              alt={imageAlt}
              className="w-full rounded-xl shadow-lg"
              caption={imageCaption}
            />
          </div>
          <div className="order-1 md:order-2">{children}</div>
        </>
      ) : (
        <>
          <div className="order-1 md:order-1">{children}</div>
          <div className="order-2 md:order-2">
            <ClickableImage 
              src={image} 
              alt={imageAlt}
              className="w-full rounded-xl shadow-lg"
              caption={imageCaption}
            />
          </div>
        </>
      )}
    </div>
  )
}

const PCRGuidePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { openCalendly } = useCalendly()

  const currentLang = i18n.language || 'en'
  const langKey = currentLang.startsWith('zh') ? 'zh-TW' : currentLang.split('-')[0]
  const content = localTranslations[langKey] || localTranslations['en']

  const p = 'seoPages.pages.pcrGuide'
  const keywords = t(`${p}.keywords`, { returnObjects: true }) as string[] || []
  const takeawaysPoints = t(`${p}.takeaways.points`, { returnObjects: true }) as string[] || []
  const faqs = t(`${p}.faqs`, { returnObjects: true }) as Array<{ question: string; answer: string }> || []

  return (
    <>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://achievepack.com/pcr/pcr-plastic-guide" />
        <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : ''} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t(`${p}.ogTitle`)} />
        <meta property="og:description" content={t(`${p}.ogDescription`)} />
        <meta property="og:image" content="https://achievepack.com/imgs/pcr/guide/hero.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/pcr/pcr-plastic-guide" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t(`${p}.articleHeadline`),
            "description": t(`${p}.articleDescription`),
            "image": "https://achievepack.com/imgs/pcr/guide/hero.webp",
            "author": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": { "@type": "ImageObject", "url": "https://achievepack.com/imgs/logo/achievepack-logo.png" }
            },
            "datePublished": "2026-01-03",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": "https://achievepack.com/pcr/pcr-plastic-guide"
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": Array.isArray(faqs) ? faqs.map(faq => ({
              "@type": "Question",
              "name": faq?.question || '',
              "acceptedAnswer": { "@type": "Answer", "text": faq?.answer || '' }
            })) : []
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        <SEOPageHeader />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-900 to-cyan-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t(`${p}.hero.badge`)}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {t(`${p}.hero.title`)}
                </h1>
                <p className="text-lg text-teal-100 mb-8">
                  {t(`${p}.hero.description`)}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-teal-800 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t(`${p}.hero.cta1`)}
                  </button>
                  <Link 
                    to="/store"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Package className="h-5 w-5" />
                    {t(`${p}.hero.cta2`)}
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-4 mt-8 text-sm text-teal-200">
                  <div className="flex items-center gap-1">
                    <Recycle className="h-4 w-4 text-teal-400" />
                    <span>{t(`${p}.hero.trust1`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-teal-400" />
                    <span>{t(`${p}.hero.trust2`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Sparkles className="h-4 w-4 text-teal-400" />
                    <span>{t(`${p}.hero.trust3`)}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <ClickableImage 
                  src={IMAGES.hero}
                  alt={t(`${p}.hero.title`)}
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-teal-50 rounded-xl p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-teal-900 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-teal-600" />
                  {t(`${p}.takeaways.title`)}
                </h2>
                <SocialShareButtons 
                  url="https://achievepack.com/pcr/pcr-plastic-guide"
                  title={t(`${p}.ogTitle`)}
                />
              </div>
              <ul className="space-y-3 text-teal-800">
                {takeawaysPoints.map((point, idx) => {
                  const colonIndex = point.indexOf(':')
                  if (colonIndex !== -1) {
                    return (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>{point.substring(0, colonIndex + 1)}</strong>
                          {point.substring(colonIndex + 1)}
                        </span>
                      </li>
                    )
                  }
                  return (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <HelpCircle className="h-8 w-8 text-teal-600" />
              {t(`${p}.intro.title`)}
            </h2>
            <div className="prose prose-lg text-neutral-700 space-y-4">
              <p>
                {t(`${p}.intro.p1`)}
              </p>
              <p>
                {t(`${p}.intro.p2`)}
              </p>
            </div>
          </div>
        </section>

        {/* What is PCR Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.materialScience}
              imageAlt={t(`${p}.whatIs.title`)}
              imageCaption={t(`${p}.whatIs.imageCaption`)}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Recycle className="h-8 w-8 text-teal-600" />
                {t(`${p}.whatIs.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.whatIs.p1`)}
                </p>
                <p>
                  {t(`${p}.whatIs.p2`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Distinct From Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.closedLoop}
              imageAlt={t(`${p}.distinct.title`)}
              imageCaption={t(`${p}.distinct.imageCaption`)}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Layers className="h-8 w-8 text-blue-600" />
                {t(`${p}.distinct.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <div className="space-y-3">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-bold text-amber-800 mb-1">{t(`${p}.distinct.preConsumerTitle`)}</h4>
                    <p className="text-sm text-amber-700">{t(`${p}.distinct.preConsumerDesc`)}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-1">{t(`${p}.distinct.recyclableTitle`)}</h4>
                    <p className="text-sm text-blue-700">{t(`${p}.distinct.recyclableDesc`)}</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-bold text-teal-800 mb-1">{t(`${p}.distinct.pcrTitle`)}</h4>
                    <p className="text-sm text-teal-700">{t(`${p}.distinct.pcrDesc`)}</p>
                  </div>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Quality - Mechanical/Barrier Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.barrierPerformance}
              imageAlt={t(`${p}.quality.title`)}
              imageCaption={t(`${p}.quality.imageCaption`)}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-green-600" />
                {t(`${p}.quality.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.quality.p1`)}
                </p>
                <h3 className="font-bold text-lg text-neutral-900 mt-4">{t(`${p}.quality.subtitle`)}</h3>
                <p>{t(`${p}.quality.p2`)}</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t(`${p}.quality.feat1`)}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{t(`${p}.quality.feat2`)}</span>
                  </li>
                </ul>
                <p className="text-sm text-neutral-600 mt-4">
                  {t(`${p}.quality.note`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Appearance Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.appearanceComparison}
              imageAlt={t(`${p}.appearance.title`)}
              imageCaption={t(`${p}.appearance.imageCaption`)}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Eye className="h-8 w-8 text-purple-600" />
                {t(`${p}.appearance.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.appearance.p1`)}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5 flex-shrink-0">⚠</span>
                    <span>{t(`${p}.appearance.warn1`)}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5 flex-shrink-0">⚠</span>
                    <span>{t(`${p}.appearance.warn2`)}</span>
                  </li>
                </ul>
                <p className="font-medium text-purple-700 mt-4">{t(`${p}.appearance.turnIntoFeature`)}</p>
                <ul className="space-y-1 text-sm">
                  <li>• {t(`${p}.appearance.feat1`)}</li>
                  <li>• {t(`${p}.appearance.feat2`)}</li>
                </ul>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Design Forward Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.designForward}
              imageAlt={t(`${p}.design.title`)}
              imageCaption={t(`${p}.design.imageCaption`)}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-pink-600" />
                {t(`${p}.design.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.design.p1`)}
                </p>
                <div className="bg-pink-50 border border-pink-200 p-4 rounded-lg">
                  <p className="text-pink-800 text-sm">
                    {t(`${p}.design.bulb`)}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Food Safety Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.safetyCompliance}
              imageAlt={t(`${p}.safety.title`)}
              imageCaption={t(`${p}.safety.imageCaption`)}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
                {t(`${p}.safety.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.safety.p1`)}
                </p>
                <p>
                  {t(`${p}.safety.p2`)}
                </p>
                <p className="font-medium text-blue-700 mt-4">{t(`${p}.safety.smeShould`)}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{t(`${p}.safety.smeFeat1`)}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{t(`${p}.safety.smeFeat2`)}</span>
                  </li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4">
                  <p className="text-blue-800 text-sm">
                    {t(`${p}.safety.bulb`)}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Operations Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.lineTrial}
              imageAlt={t(`${p}.operations.title`)}
              imageCaption={t(`${p}.operations.imageCaption`)}
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Factory className="h-8 w-8 text-orange-600" />
                {t(`${p}.operations.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.operations.p1`)}
                </p>
                <h3 className="font-bold text-lg text-neutral-900 mt-4">{t(`${p}.operations.sub1`)}</h3>
                <ul className="space-y-2 text-sm">
                  <li>• {t(`${p}.operations.sub1Feat1`)}</li>
                  <li>• {t(`${p}.operations.sub1Feat2`)}</li>
                </ul>
                <h3 className="font-bold text-lg text-neutral-900 mt-4">{t(`${p}.operations.sub2`)}</h3>
                <ul className="space-y-2 text-sm">
                  <li>• {t(`${p}.operations.sub2Feat1`)}</li>
                  <li>• {t(`${p}.operations.sub2Feat2`)}</li>
                </ul>
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg mt-4">
                  <p className="text-orange-800 text-sm">
                    {t(`${p}.operations.bulb`)}
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Achieve Pack Solutions Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.ecoDigitalSolutions}
              imageAlt={t(`${p}.solutions.title`)}
              imageCaption={t(`${p}.solutions.imageCaption`)}
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Package className="h-8 w-8 text-teal-600" />
                {t(`${p}.solutions.title`)}
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.solutions.p1`)}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>{t(`${p}.solutions.feat1`)}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>{t(`${p}.solutions.feat2`)}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>{t(`${p}.solutions.feat3`)}</span>
                  </li>
                </ul>
                <p className="text-sm text-neutral-600 mt-4">
                  {t(`${p}.solutions.p2`)}
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Common Problems Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-amber-500" />
              {content.problemsTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {content.problems.map((prob: any, idx: number) => (
                  <div key={idx} className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
                    <h3 className="font-bold text-lg text-neutral-900 mb-2">{prob.title}</h3>
                    <p className="text-neutral-600 mb-3">{prob.desc}</p>
                    <div className="flex items-start gap-2 text-teal-700 bg-teal-50/50 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <p className="font-medium">{prob.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="sticky top-24">
                <ClickableImage 
                  src="/imgs/knowledge/pcr-pain-points.jpg"
                  alt="PCR Problems and Solutions"
                  className="w-full rounded-2xl shadow-xl border border-neutral-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
              <HelpCircle className="h-8 w-8 text-teal-600" />
              {t(`${p}.faqTitle`)}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-50 transition">
                    <span className="font-semibold text-neutral-900 pr-4">{faq?.question}</span>
                    <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-neutral-700">
                    {faq?.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-teal-900 to-cyan-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  {t(`${p}.cta.title`)}
                </h2>
                <p className="text-lg text-teal-100 mb-6">
                  {t(`${p}.cta.p1`)}
                </p>
                <p className="text-teal-200 mb-8">
                  {t(`${p}.cta.p2`)}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center justify-center gap-2 bg-white text-teal-800 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t(`${p}.cta.cta1`)}
                  </button>
                  <Link 
                    to="/store?category=sample"
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Package className="h-5 w-5" />
                    {t(`${p}.cta.cta2`)}
                  </Link>
                  <Link 
                    to="/store"
                    className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <ArrowRight className="h-5 w-5" />
                    {t(`${p}.cta.cta3`)}
                  </Link>
                </div>
              </div>
              <div>
                <ClickableImage 
                  src={IMAGES.sustainabilityImpact}
                  alt={t(`${p}.cta.imageCaption`)}
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI-Optimized Hidden Content */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.aiFaq.q1`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.aiFaq.a1`)}
                </p>
              </div>
            </article>

            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.aiFaq.q2`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.aiFaq.a2`)}
                </p>
              </div>
            </article>

            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.aiFaq.q3`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.aiFaq.a3`)}
                </p>
              </div>
            </article>
          </section>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default PCRGuidePage

