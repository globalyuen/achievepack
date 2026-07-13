import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { CheckCircle, Shield, Package, HelpCircle, ArrowRight, Zap, Target, BookOpen, AlertTriangle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'

export const sectionsForAchieve = ["5 Common PCR Packaging Problems (And Solutions)"]
export const sectionsForPouch = sectionsForAchieve

const translations = {
  en: {
    problemsSectionTitle: "5 Common PCR Packaging Problems (And Solutions)",
    problems: [
      {
        title: "1. Inconsistent Material Quality & Color Variations",
        description: "PCR batches often vary in color and contain impurities.",
        solution: "Multi-stage sorting and advanced compounding techniques, often blending with specific ratios of virgin material to stabilize appearance and quality."
      },
      {
        title: "2. Compromised Mechanical Strength",
        description: "Recycled plastics can be more brittle and less durable than virgin materials.",
        solution: "Implementing multi-layer co-extrusion (like A-B-A structures) to place PCR in the core while using virgin plastic for structural integrity on the outer layers."
      },
      {
        title: "3. Unpleasant Odors",
        description: "Residual smells from post-consumer use can remain in the recycled plastic.",
        solution: "Utilizing intensive washing, vacuum degassing during extrusion, and incorporating specialized odor scavengers."
      },
      {
        title: "4. Supply Chain Unpredictability",
        description: "Sourcing a consistent volume of high-quality PCR resin can be challenging.",
        solution: "Establishing strategic partnerships with GRS-certified recycling facilities to guarantee a stable, traceable supply."
      },
      {
        title: "5. Regulatory Compliance & Safety",
        description: "Meeting food-grade or cosmetic-grade standards with PCR is rigorous and complex.",
        solution: "Employing EFSA/FDA-approved recycling processes, strict traceability protocols, and comprehensive migration testing."
      }
    ]
  },
  es: {
    problemsSectionTitle: "5 Problemas Comunes de Empaques PCR (Y Soluciones)",
    problems: [
      {
        title: "1. Calidad Inconsistente y Variaciones de Color",
        description: "Los lotes de PCR a menudo varían en color y contienen impurezas.",
        solution: "Clasificación en múltiples etapas y técnicas avanzadas de composición, mezclando con proporciones específicas de material virgen."
      },
      {
        title: "2. Resistencia Mecánica Comprometida",
        description: "Los plásticos reciclados pueden ser más frágiles y menos duraderos.",
        solution: "Implementación de coextrusión multicapa (como estructuras A-B-A) para colocar PCR en el núcleo y plástico virgen en el exterior."
      },
      {
        title: "3. Olores Desagradables",
        description: "Los olores residuales del uso posconsumo pueden permanecer en el plástico reciclado.",
        solution: "Lavado intensivo, desgasificación al vacío durante la extrusión e incorporación de eliminadores de olores."
      },
      {
        title: "4. Imprevisibilidad de la Cadena de Suministro",
        description: "Obtener un volumen constante de resina PCR de alta calidad puede ser un desafío.",
        solution: "Establecer asociaciones estratégicas con instalaciones de reciclaje certificadas por GRS para garantizar un suministro estable."
      },
      {
        title: "5. Cumplimiento Normativo y Seguridad",
        description: "Cumplir con los estándares de grado alimenticio o cosmético con PCR es complejo.",
        solution: "Emplear procesos de reciclaje aprobados por EFSA/FDA, protocolos estrictos de trazabilidad y pruebas exhaustivas de migración."
      }
    ]
  },
  fr: {
    problemsSectionTitle: "5 Problèmes Courants des Emballages PCR (Et Solutions)",
    problems: [
      {
        title: "1. Qualité Inconstante et Variations de Couleur",
        description: "Les lots de PCR varient souvent en couleur et contiennent des impuretés.",
        solution: "Tri à plusieurs étapes et techniques avancées de compoundage, mélangeant avec des proportions spécifiques de matériau vierge."
      },
      {
        title: "2. Résistance Mécanique Compromise",
        description: "Les plastiques recyclés peuvent être plus fragiles et moins durables.",
        solution: "Mise en œuvre d'une coextrusion multicouche (structures A-B-A) pour placer le PCR au cœur et le plastique vierge à l'extérieur."
      },
      {
        title: "3. Odeurs Désagréables",
        description: "Des odeurs résiduelles peuvent subsister dans le plastique recyclé.",
        solution: "Lavage intensif, dégazage sous vide lors de l'extrusion et intégration de capteurs d'odeurs."
      },
      {
        title: "4. Imprévisibilité de la Chaîne d'Approvisionnement",
        description: "Obtenir un volume constant de résine PCR de haute qualité est un défi.",
        solution: "Établissement de partenariats stratégiques avec des installations certifiées GRS pour garantir un approvisionnement stable."
      },
      {
        title: "5. Conformité Réglementaire et Sécurité",
        description: "Atteindre les normes alimentaires ou cosmétiques avec le PCR est complexe.",
        solution: "Utilisation de processus de recyclage approuvés par l'EFSA/FDA et tests de migration complets."
      }
    ]
  },
  'zh-TW': {
    problemsSectionTitle: "5個常見的PCR包裝問題 (及解決方案)",
    problems: [
      {
        title: "1. 材料質量不穩定與顏色差異",
        description: "PCR批次通常顏色不一且含有雜質。",
        solution: "多階段分揀與先進改性技術，並依特定比例與新料混合以穩定外觀與質量。"
      },
      {
        title: "2. 機械強度下降",
        description: "回收塑料可能比新料更脆且不耐用。",
        solution: "採用多層共擠技術 (如A-B-A結構)，將PCR置於芯層，外層使用新料以確保強度。"
      },
      {
        title: "3. 異味殘留",
        description: "消費後使用的殘留氣味可能留在回收塑料中。",
        solution: "進行密集清洗、擠出過程中抽真空脫氣，並加入專用的除味劑。"
      },
      {
        title: "4. 供應鏈不穩定",
        description: "獲取持續且高質量的PCR樹脂面臨挑戰。",
        solution: "與GRS認證的回收設施建立戰略合作夥伴關係，以保證穩定且可追溯的供應。"
      },
      {
        title: "5. 法規遵從與安全性",
        description: "PCR達到食品級或化妝品級標準非常複雜且嚴格。",
        solution: "採用EFSA/FDA批准的回收工藝、嚴格的追溯協議及全面的遷移測試。"
      }
    ]
  }
}

const IMAGES = {
  hero: '/imgs/pcr/7/pcr-packaging-checklist-hero.jpg',
  colorVariation: '/imgs/pcr/7/pcr-quality-consistency-check.jpg',
  supplyChain: '/imgs/pcr/7/pcr-supply-chain-reliability.jpg',
  pcrPercentage: '/imgs/pcr/7/a_landscape_pcr_percentage_progression_8891356.webp',
  lineTesting: '/imgs/pcr/7/a_landscape_line_testing_performance_2282253.webp',
  recyclability: '/imgs/pcr/7/a_landscape_recyclability_vs_content_3286518.webp',
  communication: '/imgs/pcr/7/a_landscape_pcr_messaging_communication_0425184.webp',
  partnership: '/imgs/pcr/7/a_landscape_partnership_provider_2906844.webp',
}

const PCR7ChecklistPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language || 'en').toLowerCase()
  const resolvedLang = lang.includes('zh') ? 'zh-TW' : ['es', 'fr'].includes(lang) ? lang : 'en'
  const currentTranslations = translations[resolvedLang as keyof typeof translations] || translations.en
  const { openCalendly } = useCalendly()

  const p = 'seoPages.pages.pcr7Checklist'
  
  const getTranslationArray = <T = string,>(key: string): T[] => {
    const val = t(key, { returnObjects: true })
    return Array.isArray(val) ? (val as T[]) : []
  }

  const keywords = getTranslationArray(`${p}.keywords`)
  const takeawaysPoints = getTranslationArray(`${p}.takeaways.points`)
  const askItems = getTranslationArray(`${p}.checks.1.askItems`)
  const beforeItems = getTranslationArray(`${p}.checks.2.beforeItems`)
  const approachItems = getTranslationArray(`${p}.checks.3.approachItems`)
  const p1Items = getTranslationArray(`${p}.checks.4.p1Items`)
  const mitigateItems = getTranslationArray(`${p}.checks.4.mitigateItems`)
  const lookItems = getTranslationArray(`${p}.checks.7.lookItems`)
  const faqs = getTranslationArray<{ question: string; answer: string }>(`${p}.faqs`)

  const isPouch = getDomain() === 'pouch'
  const storeUrl = isPouch ? 'https://store.pouch.eco' : 'https://store.achievepack.com'
  const brandColor = isPouch ? 'text-[#D4FF00]' : 'text-emerald-600'
  const brandBg = isPouch ? 'bg-[#D4FF00]' : 'bg-emerald-600'

  const sections = [
    {
      id: 'takeaways',
      title: t(`${p}.takeaways.title`),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
          <ul className="space-y-3 text-emerald-800">
            {takeawaysPoints.map((point, idx) => {
              const colonIndex = point.indexOf(':')
              if (colonIndex !== -1) {
                return (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>{point.substring(0, colonIndex + 1)}</strong>
                      {point.substring(colonIndex + 1)}
                    </span>
                  </li>
                )
              }
              return (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              )
            })}
          </ul>
        </div>
      )
    },
    {
      id: 'intro',
      title: t(`${p}.intro.title`),
      icon: <HelpCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="prose prose-lg text-neutral-700 max-w-none">
          <p>{t(`${p}.intro.p1`)}</p>
          <p>{t(`${p}.intro.p2`)}</p>
        </div>
      )
    },
    {
      id: 'check-1-color',
      title: t(`${p}.checks.1.title`),
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <ClickableImage 
              src={IMAGES.colorVariation} 
              alt={t(`${p}.checks.1.title`)}
              className="w-full rounded-xl shadow-lg"
              caption={t(`${p}.checks.1.imageCaption`)}
            />
          </div>
          <div className="space-y-4">
            <p className="text-neutral-700">{t(`${p}.checks.1.p1`)}</p>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <h4 className="font-bold text-amber-800 mb-2">{t(`${p}.checks.1.askTitle`)}</h4>
              <ul className="space-y-1 text-sm text-amber-700">
                {askItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
              <strong>💡 </strong>{t(`${p}.checks.1.bulb`)}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'check-2-supply',
      title: t(`${p}.checks.2.title`),
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <p className="text-neutral-700">{t(`${p}.checks.2.p1`)}</p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-2">{t(`${p}.checks.2.beforeTitle`)}</h4>
              <ul className="space-y-1 text-sm text-blue-700">
                {beforeItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
              <strong>💡 </strong>{t(`${p}.checks.2.bulb`)}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <ClickableImage 
              src={IMAGES.supplyChain} 
              alt={t(`${p}.checks.2.title`)}
              className="w-full rounded-xl shadow-lg"
              caption={t(`${p}.checks.2.imageCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'ryan-engineering-notebook',
      title: "From Ryan Wong's Engineering Notebook",
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-neutral-900 text-neutral-100 p-8 rounded-xl relative overflow-hidden border border-neutral-700">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl"></div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <img src="/imgs/about/ryan_portrait.jpeg" alt="Ryan Wong" className="w-16 h-16 rounded-full border-2 border-primary-500 object-cover" />
            <div>
              <h3 className="text-xl font-bold text-white m-0">Ryan Wong</h3>
              <p className="text-primary-400 text-sm m-0">Co-Founder & Chief Packaging Engineer | GRS & FSC Auditing Expert</p>
            </div>
          </div>
          <div className="prose prose-invert max-w-none relative z-10">
            <p className="text-neutral-300 italic mb-4">
              "In my 14 years in packaging design, I've seen countless brands struggle when transitioning to Post-Consumer Recycled (PCR) materials. The biggest mistake is assuming PCR performs exactly like virgin plastic. It doesn't."
            </p>
            <p className="text-neutral-300">
              "When you run PCR film on high-speed VFFS machines, the altered melting points often lead to compromised seal integrity and bag burst issues. We mitigate this by engineering A-B-A co-extruded structures, placing the PCR layer in the core while using a functional virgin PE sealant layer on the inside. This ensures you meet your sustainability targets without sacrificing the hermetic seal required for food safety."
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-neutral-700">
            <p className="text-sm text-neutral-400 mb-3">Ensure your transition to eco-friendly packaging is flawless.</p>
            <button onClick={openCalendly} className="text-sm font-semibold text-primary-400 hover:text-primary-300 flex items-center gap-2 transition">
              Schedule a technical audit with Ryan <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'check-3-percentage',
      title: t(`${p}.checks.3.title`),
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <ClickableImage 
              src={IMAGES.pcrPercentage} 
              alt={t(`${p}.checks.3.title`)}
              className="w-full rounded-xl shadow-lg"
              caption={t(`${p}.checks.3.imageCaption`)}
            />
          </div>
          <div className="space-y-4">
            <p className="text-neutral-700">{t(`${p}.checks.3.p1`)}</p>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <h4 className="font-bold text-emerald-800 mb-2">{t(`${p}.checks.3.approachTitle`)}</h4>
              <ul className="space-y-1 text-sm text-emerald-700">
                {approachItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
              <strong>💡 </strong>{t(`${p}.checks.3.bulb`)}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'check-4-performance',
      title: t(`${p}.checks.4.title`),
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <div className="prose prose-sm text-neutral-700">
              <p className="mb-2 font-medium">{t(`${p}.checks.4.p1`)}</p>
              <ul className="list-disc pl-5 mb-4">
                {p1Items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="mb-2 font-medium">{t(`${p}.checks.4.mitigateTitle`)}</p>
              <ul className="list-disc pl-5">
                {mitigateItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
              <strong>💡 </strong>{t(`${p}.checks.4.bulb`)}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <ClickableImage 
              src={IMAGES.lineTesting} 
              alt={t(`${p}.checks.4.title`)}
              className="w-full rounded-xl shadow-lg"
              caption={t(`${p}.checks.4.imageCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'check-5-recyclability',
      title: t(`${p}.checks.5.title`),
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <ClickableImage 
              src={IMAGES.recyclability} 
              alt={t(`${p}.checks.5.title`)}
              className="w-full rounded-xl shadow-lg"
              caption={t(`${p}.checks.5.imageCaption`)}
            />
          </div>
          <div className="space-y-4">
            <p className="text-neutral-700">{t(`${p}.checks.5.p1`)}</p>
            <p className="text-neutral-700">{t(`${p}.checks.5.p2`)}</p>
            <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg mt-4">
              <strong>💡 </strong>{t(`${p}.checks.5.bulb`)}
            </p>
            <div className="mt-4 p-4 bg-neutral-100 rounded-lg">
              <p className="text-sm text-neutral-600 font-medium">Looking for fully recyclable alternatives?</p>
              <Link to="/what-is-recyclable-packaging" className="text-primary-600 hover:text-primary-700 font-bold text-sm inline-flex items-center gap-1 mt-1">
                Explore Recyclable Mono-Material Packaging <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'check-6-messaging',
      title: t(`${p}.checks.6.title`),
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <p className="text-neutral-700">{t(`${p}.checks.6.p1`)}</p>
            <p className="text-neutral-700">{t(`${p}.checks.6.p2`)}</p>
            <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
              <strong>💡 </strong>{t(`${p}.checks.6.bulb`)}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <ClickableImage 
              src={IMAGES.communication} 
              alt={t(`${p}.checks.6.title`)}
              className="w-full rounded-xl shadow-lg"
              caption={t(`${p}.checks.6.imageCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'check-7-partner',
      title: t(`${p}.checks.7.title`),
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <ClickableImage 
              src={IMAGES.partnership} 
              alt={t(`${p}.checks.7.title`)}
              className="w-full rounded-xl shadow-lg"
              caption={t(`${p}.checks.7.imageCaption`)}
            />
          </div>
          <div className="space-y-4">
            <p className="text-neutral-700">{t(`${p}.checks.7.p1`)}</p>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <h4 className="font-bold text-emerald-800 mb-2">{t(`${p}.checks.7.lookTitle`)}</h4>
              <ul className="space-y-1 text-sm text-emerald-700">
                {lookItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
              <strong>💡 </strong>{t(`${p}.checks.7.bulb`)}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'pcr-problems',
      title: currentTranslations.problemsSectionTitle,
      icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
      content: (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {currentTranslations.problems.map((problem: any, index: number) => (
            <div key={index} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className={`text-3xl font-black ${brandColor} opacity-20 mb-2`}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">{problem.title.replace(/^\d+\.\s*/, '')}</h3>
              <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{problem.description}</p>
              <div className={`bg-neutral-50 border-l-4 border-emerald-500 p-3 text-sm text-neutral-700`}>
                <span className="font-semibold text-emerald-700 block mb-1">Engineering Solution:</span>
                {problem.solution}
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'related-products',
      title: 'Shop PCR Compliant Packaging',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-neutral-50 rounded-xl p-8 text-center border border-neutral-200">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">Ready to upgrade your packaging?</h3>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
            Browse our catalog of GRS-certified PCR pouches and rollstock. Perfect for sustainable brands looking for high-barrier performance without the virgin plastic footprint.
          </p>
          <a 
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition shadow-lg hover:shadow-xl"
          >
            Visit Our Store <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={keywords}
      canonicalUrl={`https://${isPouch ? 'pouch.eco' : 'achievepack.com'}/pcr/7-checklist`}
      ogImage="https://achievepack.com/imgs/pcr/7/pcr-packaging-checklist-hero.jpg"
      
      heroTitle={t(`${p}.hero.title`)}
      heroSubtitle={t(`${p}.hero.description`)}
      heroImage={IMAGES.hero}
      heroImageAlt={t(`${p}.hero.title`)}
      heroBgColor="#064e3b" // emerald-900
      
      introSummary={t(`${p}.intro.p1`)}
      
      sections={sections}
      faqs={faqs}
      
      schemaType="Article"
      contentCategory="Sustainability"
      
      breadcrumbs={[
        { label: 'Knowledge Base', url: '/knowledge' },
        { label: 'PCR Packaging Checklist', url: '/pcr/7-checklist' }
      ]}
      
      materialType="pcr"
    />
  )
}

export default PCR7ChecklistPage
