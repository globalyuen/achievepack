import React from 'react'
import { Package, CheckCircle, Layers, Shield, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, AlertTriangle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const localTranslations: Record<string, any> = {
  en: {
    painPointsTitle: "5 Common Side Gusset Bags Problems (And Solutions)",
    painPoints: [
      { title: "Puncture & Tearing", desc: "Multi-layer lamination (Nylon/PET) prevents transit damage." },
      { title: "Seal Integrity", desc: "Reinforced quad sealing ensures freshness and prevents leaks." },
      { title: "Resealability", desc: "Integrated tin ties or adhesive strips for easy re-closure." },
      { title: "Degassing Failures", desc: "Premium one-way valves for optimal coffee off-gassing." },
      { title: "Shelf Stability", desc: "Precision bottom folding ensures the bag stands perfectly upright." }
    ]
  },
  es: {
    painPointsTitle: "5 Problemas Comunes de Bolsas con Fuelle Lateral (Y Soluciones)",
    painPoints: [
      { title: "Perforaciones y Desgarros", desc: "Laminación multicapa (Nylon/PET) que previene daños en tránsito." },
      { title: "Integridad del Sellado", desc: "Sellado cuádruple reforzado para frescura y sin fugas." },
      { title: "Capacidad de Resellado", desc: "Cierres de estaño o tiras adhesivas integradas para cerrar fácilmente." },
      { title: "Fallos de Desgasificación", desc: "Válvulas unidireccionales premium para el café." },
      { title: "Estabilidad en Estante", desc: "Plegado inferior de precisión para que la bolsa se mantenga vertical." }
    ]
  },
  fr: {
    painPointsTitle: "5 Problèmes Courants des Sachets à Soufflets Latéraux (Et Solutions)",
    painPoints: [
      { title: "Perforation et Déchirure", desc: "Stratification multicouche (Nylon/PET) prévenant les dommages." },
      { title: "Intégrité de l'Étanchéité", desc: "Scellage quadruple renforcé garantissant la fraîcheur." },
      { title: "Refermabilité", desc: "Attaches en étain ou bandes adhésives intégrées pour une fermeture facile." },
      { title: "Défaillances de Dégazage", desc: "Vannes unidirectionnelles premium pour le café." },
      { title: "Stabilité en Rayon", desc: "Pliage de fond de précision assurant une tenue parfaite." }
    ]
  },
  'zh-TW': {
    painPointsTitle: "5 種常見的側邊折角袋問題 (與解決方案)",
    painPoints: [
      { title: "穿刺與撕裂", desc: "多層複合材質 (Nylon/PET) 防止運輸過程受損。" },
      { title: "密封完整性", desc: "加強型四邊封口，確保新鮮不漏氣。" },
      { title: "可重複密封性", desc: "內建鐵絲束帶或自黏條，方便重新封口。" },
      { title: "排氣閥失效", desc: "頂級單向排氣閥，完美釋放咖啡氣體。" },
      { title: "貨架穩定性", desc: "精密的底部折疊技術，確保袋子完美直立。" }
    ]
  }
};

const SideGussetBagsPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en';
  const tLocal = localTranslations[lang] || localTranslations['en'];
  const p = 'seoPages.pages.sideGussetBags'
  // Safe array fallbacks to prevent runtime crashes
  const applicationsItemsVal = t(`${p}.sections.applications.items`, { returnObjects: true });
  const applicationsItems = Array.isArray(applicationsItemsVal) ? applicationsItemsVal : [
    "Specialty Coffee Beans",
    "Loose Leaf Tea",
    "Organic Pet Food & Treats",
    "Artisan Protein Powders & Nutrition",
    "Gourmet Cookies & Bakery Items",
    "Bulk Ingredients & Powders"
  ];

  const faqsVal = t(`${p}.faqs`, { returnObjects: true });
  const faqs = Array.isArray(faqsVal) ? faqsVal.map((item: any) => ({
    question: item.question,
    answer: item.answer
  })) : [];

  const tablesVal = t(`${p}.tables`, { returnObjects: true });
  const tables = Array.isArray(tablesVal) ? tablesVal.map((item: any) => ({
    title: item.title,
    data: {
      headers: item.headers,
      rows: item.rows
    }
  })) : [];

  const relatedLinksVal = t(`${p}.relatedLinks`, { returnObjects: true });
  const relatedLinks = Array.isArray(relatedLinksVal) ? relatedLinksVal : [
    { title: "Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Premium box pouch alternative" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Classic shelf-standing pouches" },
    { title: "Coffee & Tea Solutions", url: "/industry/coffee-tea", description: "Packaging with degassing valves" }
  ];

  const metaKeywordsVal = t(`${p}.metaKeywords`, { returnObjects: true });
  const metaKeywords = Array.isArray(metaKeywordsVal) ? metaKeywordsVal : [
    "side gusset bags", "quad seal bags", "coffee packaging", "expandable side gusset", "achieve pack side gusset"
  ];

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong> {t(`${p}.sections.overview.desc`)}
          </p>
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.characteristicsTitle`)}</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ {t(`${p}.sections.overview.char1`)}</li>
              <li>✓ {t(`${p}.sections.overview.char2`)}</li>
              <li>✓ {t(`${p}.sections.overview.char3`)}</li>
              <li>✓ {t(`${p}.sections.overview.char4`)}</li>
              <li>✓ {t(`${p}.sections.overview.char5`)}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'construction',
      title: t(`${p}.sections.construction.title`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t(`${p}.sections.construction.panelTitle`)}</h4>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.construction.panel1`)}</li>
                <li>• {t(`${p}.sections.construction.panel2`)}</li>
                <li>• {t(`${p}.sections.construction.panel3`)}</li>
                <li>• {t(`${p}.sections.construction.panel4`)}</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t(`${p}.sections.construction.closureTitle`)}</h4>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.construction.closure1`)}</li>
                <li>• {t(`${p}.sections.construction.closure2`)}</li>
                <li>• {t(`${p}.sections.construction.closure3`)}</li>
                <li>• {t(`${p}.sections.construction.closure4`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.sections.applications.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            {applicationsItems.map((item, idx) => (
              <div key={idx} className="bg-primary-50 text-primary-800 px-3 py-2 rounded-lg text-sm text-center font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t(`${p}.sections.features.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.features.feature1Title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.features.feature1Desc`)}</p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.features.feature2Title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.features.feature2Desc`)}</p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.features.feature3Title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.features.feature3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: t(`${p}.sections.industryScenarios.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.segment1Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.segment1Desc`)}</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.segment1Share`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.segment2Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.segment2Desc`)}</p>
              <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.segment2Share`)}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.segment3Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.segment3Desc`)}</p>
              <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.segment3Share`)}</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.industryScenarios.successTitle`)}</h4>
            <p className="text-sm text-neutral-600">{t(`${p}.sections.industryScenarios.successStory`)}</p>
            <p className="text-xs text-neutral-500 mt-2">{t(`${p}.sections.industryScenarios.successAuthor`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: t(`${p}.sections.marketData.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.stat1Val`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.stat1Label`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.stat1Sub`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.stat2Val`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.stat2Label`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.stat2Sub`)}</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.stat3Val`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.stat3Label`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.stat3Sub`)}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.stat4Val`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.stat4Label`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.stat4Sub`)}</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.marketData.trendsTitle`)}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span><strong>{t(`${p}.sections.marketData.trend1Bold`)}</strong> {t(`${p}.sections.marketData.trend1Text`)}</span>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span><strong>{t(`${p}.sections.marketData.trend2Bold`)}</strong> {t(`${p}.sections.marketData.trend2Text`)}</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: t(`${p}.sections.materialComparison.title`),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-200 px-4 py-2 text-left">{t(`${p}.sections.materialComparison.headers.type`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.headers.barrier`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.headers.cost`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.headers.eco`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">{t(`${p}.sections.materialComparison.headers.use`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row1.type`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row1.eco`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row1.use`)}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row2.type`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row2.eco`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row2.use`)}</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row3.type`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row3.eco`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row3.use`)}</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row4.type`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row4.eco`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row4.use`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.materialComparison.guideTitle`)}</h4>
            <p className="text-sm text-primary-700">{t(`${p}.sections.materialComparison.guideText`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: tLocal.painPointsTitle,
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              {tLocal.painPoints.map((point: any, idx: number) => (
                <div key={idx} className="flex gap-3 bg-neutral-50 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{point.title}</h4>
                    <p className="text-sm text-neutral-600">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <img 
                src="/imgs/knowledge/side-gusset-bags-pain-points.jpg" 
                alt="Side Gusset Bags Problems and Solutions" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title={t(`${p}.metaTitle`)}
      description={t(`${p}.metaDescription`)}
      keywords={metaKeywords}
      canonicalUrl="https://achievepack.com/packaging/side-gusset-bags"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/pouch-shape/a_side_gusset_pouch_isolated_2545871.webp"
      heroImageAlt={t(`${p}.heroImageAlt`)}
      hero3DModelUrl="/3d/3d-pouch/gusset-pouch.glb"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
    />
  )
}

export default SideGussetBagsPage
