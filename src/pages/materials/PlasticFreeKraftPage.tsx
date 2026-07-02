import React from 'react'
import { Leaf, Shield, Award, CheckCircle, Globe, Recycle, MessageCircle, BookOpen, Building2, Target, Calendar, Phone, Download, Mail, Image, TrendingUp, BarChart3, ArrowLeftRight, Factory, ShoppingBag, Coffee, Sparkles, AlertTriangle, Zap, Wrench } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation, Trans } from 'react-i18next'

export const translations: Record<string, any> = {
  en: {
    title: "5 Common Plastic-Free Kraft Problems (And Solutions)",
    points: [
      {
        q: "Poor Moisture & Oxygen Barrier",
        a: "Biodegradable coatings like PLA have higher MVTR/OTR than conventional PE, reducing product shelf life. Solution: Incorporate high-barrier cellulose films (e.g., NatureFlex) or metallized bio-laminates within the paper structure."
      },
      {
        q: "Weak Seal Strength & Burn-Through",
        a: "Bio-based sealing layers have a narrow temperature window compared to PE, leading to seal failure or melting. Solution: Optimize thermal sealing profiles using precision-controlled heating jaws and blend PLA with bio-copolyesters to widen the sealing range."
      },
      {
        q: "Interlayer Delamination",
        a: "Compostable adhesives can fail to maintain a strong bond between raw kraft paper and the bio-lining. Solution: Use advanced biodegradable polyurethane-based curing adhesives and apply corona treatment to the bio-film before lamination."
      },
      {
        q: "Brittleness & Gusset Cracking",
        a: "Pure bio-plastics are brittle, making the pouch prone to pinholes or cracking along folded gusset edges during transit. Solution: Blend PLA with tough, flexible compostable polymers like PBAT to enhance tear strength and impact resistance."
      },
      {
        q: "Seam Bursting & Low Tensile Strength",
        a: "Heavy products can cause side or bottom seams of paper pouches to rupture during drop tests. Solution: Employ heavy-duty, long-fiber unbleached kraft paper and design wider, reinforced sealing zones with radiused corners."
      }
    ]
  },
  es: {
    title: "5 Problemas Comunes del Kraft Libre de Plástico (y Soluciones)",
    points: [
      {
        q: "Barrera Deficiente contra la Humedad y el Oxígeno",
        a: "Los recubrimientos biodegradables como el PLA tienen una mayor tasa de transmisión de vapor de agua y oxígeno que el PE convencional, reduciendo la vida útil. Solución: Incorporar películas de celulosa de alta barrera (como NatureFlex) o biolaminados metalizados."
      },
      {
        q: "Baja Resistencia del Sellado y Quemado",
        a: "Las capas de sellado biológicas tienen una ventana de temperatura estrecha en comparación con el PE, causando fallas de sellado o derretimiento. Solución: Optimizar los perfiles de sellado térmico con mordazas de calentamiento controladas y mezclar PLA con biocopoliésteres."
      },
      {
        q: "Delaminación entre Capas",
        a: "Los adhesivos compostables pueden fallar al mantener una unión fuerte entre el papel kraft y el revestimiento biológico. Solución: Utilizar adhesivos de curado a base de poliuretano biodegradable avanzado y aplicar tratamiento corona a la biopelícula."
      },
      {
        q: "Fragilidad y Agrietamiento de Fuelles",
        a: "Los bioplásticos puros son frágiles, lo que hace que la bolsa sea propensa a picaduras o grietas en los bordes de los fuelles doblados durante el tránsito. Solución: Mezclar PLA con polímeros compostables flexibles como PBAT para mejorar la resistencia al desgarro."
      },
      {
        q: "Ruptura de Costuras y Baja Resistencia a la Tracción",
        a: "Los productos pesados pueden hacer que las costuras laterales o inferiores de las bolsas de papel se rompan durante las pruebas de caída. Solución: Emplear papel kraft no blanqueado de fibra larga de alta resistencia y diseñar zonas de sellado reforzadas y más anchas."
      }
    ]
  },
  fr: {
    title: "5 Problèmes Communs du Kraft Sans Plastique (et Solutions)",
    points: [
      {
        q: "Faible Barrière à l'Humidité et à l'Oxygène",
        a: "Les revêtements biodégradables comme le PLA ont un taux de transmission de vapeur d'eau et d'oxygène plus élevé que le PE, réduisant la durée de conservation. Solution : Intégrer des films de cellulose haute barrière (comme NatureFlex) ou des biolaminés métallisés."
      },
      {
        q: "Faible Résistance de Scellage et Brûlure",
        a: "Les couches de scellage biosourcées ont une plage de température de soudage étroite par rapport au PE, provoquant des défauts de scellage. Solution : Optimiser les profils de thermoscellage avec des mâchoires chauffantes régulées et mélanger le PLA avec des bio-copolyesters."
      },
      {
        q: "Délamination Inter-couches",
        a: "Les adhésifs compostables peuvent ne pas maintenir une liaison solide entre le papier kraft brut et la doublure biosourcée. Solution : Utiliser des adhésifs de durcissement biodégradables à base de polyuréthane et appliquer un traitement corona au bio-film."
      },
      {
        q: "Fragilité et Fissuration des Soufflets",
        a: "Les bio-plastiques purs sont cassants, ce qui rend le sachet sujet aux micro-trous ou aux fissures le long des plis des soufflets pendant le transport. Solution : Mélanger le PLA avec des polymères compostables flexibles comme le PBAT pour augmenter la résistance à la déchirure."
      },
      {
        q: "Éclatement des Coutures et Faible Résistance à la Traction",
        a: "Les produits lourds peuvent provoquer la rupture des joints latéraux ou inférieurs des sachets en papier lors des tests de chute. Solution : Utiliser du papier kraft écru à fibres longues à haute résistance et concevoir des zones de scellage plus larges et renforcées."
      }
    ]
  },
  'zh-TW': {
    title: "5個常見的無塑牛皮紙包裝問題（及解決方案）",
    points: [
      {
        q: "水氣與氧氣阻隔性差",
        a: "PLA等生物降解塗層的水氧透過率（MVTR/OTR）高於傳統PE，會縮短保質期。解決方案：在紙張結構中加入高阻隔纖維素薄膜（如 NatureFlex）或鍍鋁生物層壓材料。"
      },
      {
        q: "封口強度弱與燙穿",
        a: "與傳統PE相比，生物基熱封層的熱封溫度區間極窄，易導致封口不牢或紙張燙穿。解決方案：使用精密溫控熱封刀優化熱封參數，並將PLA與生物共聚酯共混以寬化熱封窗口。"
      },
      {
        q: "層間脫層（剝離）",
        a: "環保降解膠水難以在粗糙的牛皮紙與生物內膜之間維持持久黏合力。解決方案：使用高性能生物降解聚氨酯固化黏合劑，並在複合前對生物薄膜進行電暈處理。"
      },
      {
        q: "材質易碎與折角破裂",
        a: "純生物塑料韌性較差，在運輸過程中袋子折角與風琴邊易發生針孔或開裂。解決方案：在PLA中混入高韌性、高彈性的降解聚合物（如 PBAT），以提升抗撕裂強度與耐衝擊性。"
      },
      {
        q: "接縫爆裂與抗拉強度低",
        a: "包裝重物時，紙袋的底封或側封在跌落測試中容易破裂。解決方案：採用重載長纖維未漂白牛皮紙以增強抗張強度，並設計更寬、帶圓角的加固封口區。"
      }
    ]
  }
};

export const sectionsForPouch = [
  { id: 'pain-points', translationKey: 'title' }
];

export const sectionsForAchieve = [
  { id: 'pain-points', translationKey: 'title' }
];

const PlasticFreeKraftPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n?.language || 'en'
  const tPain = translations[currentLang] || translations.en
  const { openCalendly } = useCalendly()
  
  const getTranslationArray = <T = string,>(key: string): T[] => {
    const val = t(key, { returnObjects: true });
    return Array.isArray(val) ? (val as T[]) : [];
  };
  
  const sections = [
    {
      id: 'the-myth',
      title: t('seoPages.pages.plasticFreeKraft.achievePack.sections.theMyth.title'),
      icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-lg">
            <Trans i18nKey="seoPages.pages.plasticFreeKraft.achievePack.sections.theMyth.p1">
              There is a common misconception that choosing a <strong>kraft paper bag</strong> automatically means you are 100% <strong>plastic-free</strong>.
            </Trans>
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <p className="font-bold text-amber-900">{t('seoPages.pages.plasticFreeKraft.achievePack.sections.theMyth.realityTitle')}</p>
            <p className="text-amber-800">
              {t('seoPages.pages.plasticFreeKraft.achievePack.sections.theMyth.realityDesc')}
            </p>
          </div>
          <p>
            <Trans i18nKey="seoPages.pages.plasticFreeKraft.achievePack.sections.theMyth.p2">
              At Achieve Pack, we specialize in bridging this gap with <strong>certified compostable kraft pouches</strong> that replace conventional plastic linings with plant-based PLA, making them genuinely eco-friendly.
            </Trans>
          </p>
        </div>
      )
    },
    {
      id: 'fun-facts',
      title: t('seoPages.pages.plasticFreeKraft.achievePack.sections.funFacts.title'),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {getTranslationArray<{ num: string; title: string; desc: string }>('seoPages.pages.plasticFreeKraft.achievePack.sections.funFacts.facts').slice(0, 4).map((fact, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="bg-primary-100 p-2 rounded-lg text-primary-700 font-bold">{fact.num}</div>
                <div>
                  <h4 className="font-bold text-neutral-900">{fact.title}</h4>
                  <p className="text-sm text-neutral-600 mt-1">{fact.desc}</p>
                </div>
              </div>
            </div>
          ))}
          {getTranslationArray<{ num: string; title: string; desc: string }>('seoPages.pages.plasticFreeKraft.achievePack.sections.funFacts.facts').slice(4, 5).map((fact, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition col-span-2">
              <div className="flex items-start gap-3">
                <div className="bg-primary-100 p-2 rounded-lg text-primary-700 font-bold">{fact.num}</div>
                <div>
                  <h4 className="font-bold text-neutral-900">{fact.title}</h4>
                  <p className="text-sm text-neutral-600 mt-1">{fact.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'comparison',
      title: t('seoPages.pages.plasticFreeKraft.achievePack.sections.comparison.title'),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden mt-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-700">
                    {t('seoPages.pages.plasticFreeKraft.achievePack.sections.comparison.tableHeaders.type')}
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-neutral-700">
                    {t('seoPages.pages.plasticFreeKraft.achievePack.sections.comparison.tableHeaders.material')}
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-neutral-700">
                    {t('seoPages.pages.plasticFreeKraft.achievePack.sections.comparison.tableHeaders.plasticFree')}
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-neutral-700">
                    {t('seoPages.pages.plasticFreeKraft.achievePack.sections.comparison.tableHeaders.score')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-center">
                {getTranslationArray<{ type: string; material: string; plasticFree: string; score: string }>('seoPages.pages.plasticFreeKraft.achievePack.sections.comparison.rows').map((row, idx) => {
                  let pfColor = "text-red-600";
                  const pfLower = (row.plasticFree || "").toLowerCase();
                  if (pfLower.includes("yes") || pfLower.includes("oui") || pfLower.includes("sí") || pfLower.includes("si") || pfLower.includes("是")) {
                    pfColor = "text-green-600";
                  } else if (pfLower.includes("partial") || pfLower.includes("partiel") || pfLower.includes("parcial") || pfLower.includes("部分")) {
                    pfColor = "text-blue-600";
                  }
                  
                  return (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-neutral-50" : ""}>
                      <td className="px-4 py-3 text-left font-medium">{row.type}</td>
                      <td className="px-4 py-3">{row.material}</td>
                      <td className={`px-4 py-3 font-bold ${pfColor}`}>{row.plasticFree}</td>
                      <td className="px-4 py-3">{row.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'geo-optimization',
      title: t('seoPages.pages.plasticFreeKraft.achievePack.sections.geo.title'),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t('seoPages.pages.plasticFreeKraft.achievePack.sections.geo.p1')}</p>
          <div className="grid md:grid-cols-3 gap-4">
            {getTranslationArray<{ title: string; desc: string }>('seoPages.pages.plasticFreeKraft.achievePack.sections.geo.regions').map((region, idx) => (
              <div key={idx} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-1">{region.title}</h4>
                <p className="text-xs text-neutral-600">{region.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-aieo',
      title: t('seoPages.pages.plasticFreeKraft.achievePack.sections.aieo.title'),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
            <Zap className="h-5 w-5" />
            {t('seoPages.pages.plasticFreeKraft.achievePack.sections.aieo.aieoTitle')}
          </h4>
          <p className="text-sm text-blue-700 mb-4">{t('seoPages.pages.plasticFreeKraft.achievePack.sections.aieo.desc')}</p>
          <ul className="grid md:grid-cols-2 gap-2 text-xs text-blue-800">
            {getTranslationArray<string>('seoPages.pages.plasticFreeKraft.achievePack.sections.aieo.list').map((item, idx) => (
              <li key={idx} className="bg-white/50 p-2 rounded">{item}</li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.plasticFreeKraft.achievePack.sections.ctaSection.title'),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <h4 className="text-2xl font-bold mb-2">{t('seoPages.pages.plasticFreeKraft.achievePack.sections.ctaSection.ctaTitle')}</h4>
              <p className="opacity-90 mb-0">{t('seoPages.pages.plasticFreeKraft.achievePack.sections.ctaSection.ctaDesc')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={openCalendly} className="bg-white text-primary-700 px-6 py-3 rounded-xl font-bold hover:bg-primary-50 transition shadow-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {t('seoPages.pages.plasticFreeKraft.achievePack.sections.ctaSection.bookBtn')}
              </button>
              <Link to="/store" className="bg-primary-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-400 transition border border-primary-400 flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                {t('seoPages.pages.plasticFreeKraft.achievePack.sections.ctaSection.storeBtn')}
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: tPain.title,
      icon: <Wrench className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 mt-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img 
                src="/imgs/knowledge/plastic-free-kraft-pain-points.jpg" 
                alt={tPain.title}
                className="w-full h-auto rounded-xl shadow-md object-cover"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              {tPain.points.map((pt: any, idx: number) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">{pt.q}</h4>
                    <p className="text-sm text-neutral-600 mt-1">{pt.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title={t('seoPages.pages.plasticFreeKraft.achievePack.seo.title')}
      description={t('seoPages.pages.plasticFreeKraft.achievePack.seo.description')}
      introSummary={t('seoPages.pages.plasticFreeKraft.achievePack.seo.introSummary')}
      keywords={getTranslationArray<string>('seoPages.pages.plasticFreeKraft.achievePack.seo.keywords')}
      sections={sections}
      heroTitle={t('seoPages.pages.plasticFreeKraft.achievePack.seo.heroTitle')}
      heroSubtitle={t('seoPages.pages.plasticFreeKraft.achievePack.seo.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_achievepack_compostable_garden_9329618.webp"
    />
  )
}

export default PlasticFreeKraftPage
