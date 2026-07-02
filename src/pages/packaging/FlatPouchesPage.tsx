import React from 'react'
import { Package, CheckCircle, Scissors, FileText, Target, Shield, Calendar, Mail, Download, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const FlatPouchesPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { openCalendly } = useCalendly()

  const translations = {
    en: {
      title: "5 Common Flat Pouch Problems (And Solutions)",
      items: [
        { q: "Weak Seals & Leaks", a: "Solution: Reinforced wide seal borders and high-temp laminating for secure edges." },
        { q: "Messy, Uneven Opening", a: "Solution: Precision laser scoring and V-notch for a clean, straight tear." },
        { q: "Moisture Caking in Powders", a: "Solution: High-barrier AL or VMPET layers to block moisture." },
        { q: "Blurry Print on Small Sizes", a: "Solution: High-res rotogravure printing for crisp text." },
        { q: "Slow Packing on Auto-Lines", a: "Solution: Custom slip additives for low friction and fast filling." }
      ]
    },
    es: {
      title: "5 Problemas Comunes en Bolsas Planas (y Soluciones)",
      items: [
        { q: "Sellos Débiles y Fugas", a: "Solución: Bordes de sellado anchos y reforzados con laminación a alta temperatura." },
        { q: "Apertura Desigual y Sucia", a: "Solución: Marcado láser de precisión y muesca en V para un desgarro limpio y recto." },
        { q: "Apelmazamiento por Humedad en Polvos", a: "Solución: Capas de alta barrera de AL o VMPET para bloquear la humedad." },
        { q: "Impresión Borrosa en Tamaños Pequeños", a: "Solución: Impresión de huecograbado de alta resolución para textos nítidos." },
        { q: "Empaque Lento en Líneas Automáticas", a: "Solución: Aditivos de deslizamiento personalizados para baja fricción y llenado rápido." }
      ]
    },
    fr: {
      title: "5 Problèmes Courants des Sachets Plats (et Solutions)",
      items: [
        { q: "Joints Faibles et Fuites", a: "Solution : Bords de scellage larges et renforcés avec laminage à haute température." },
        { q: "Ouverture Inégale et Salissante", a: "Solution : Découpe laser de précision et encoche en V pour une déchirure nette et droite." },
        { q: "Agglomération de Poudre due à l'Humidité", a: "Solution : Couches haute barrière en AL ou VMPET pour bloquer l'humidité." },
        { q: "Impression Floue sur Petits Formats", a: "Solution : Impression en héliogravure haute résolution pour des textes nets." },
        { q: "Emballage Lent sur Lignes Automatiques", a: "Solution : Additifs de glissement personnalisés pour une faible friction et un remplissage rapide." }
      ]
    },
    'zh-TW': {
      title: "平底袋的 5 個常見問題 (與解決方案)",
      items: [
        { q: "封口薄弱與漏液", a: "解決方案：加固寬邊封口與高溫複合技術，確保邊緣牢固。" },
        { q: "撕開不均勻與凌亂", a: "解決方案：精密雷射打線與V型撕口，實現乾淨筆直的撕裂。" },
        { q: "粉末受潮結塊", a: "解決方案：高阻隔純鋁或鍍鋁層，有效阻絕水分與氧氣。" },
        { q: "小尺寸印刷模糊", a: "解決方案：高解析度凹版印刷，確保微小文字與色彩清晰。" },
        { q: "自動包裝線速度慢", a: "解決方案：內層特製滑爽劑，降低摩擦力，實現高速自動充填。" }
      ]
    }
  };
  const currentLang = (i18n.language || 'en') as keyof typeof translations;
  const localT = translations[currentLang] || translations.en;

  const p = 'seoPages.pages.flatPouches'
  // Safe array fallbacks to prevent runtime crashes
  const overviewAdvantagesVal = t(`${p}.sections.overview.advantages`, { returnObjects: true });
  const overviewAdvantages = Array.isArray(overviewAdvantagesVal) ? overviewAdvantagesVal : [
    "Perfect for single-serve samples and hotel amenities",
    "Extremely cost-effective packaging with minimum material waste",
    "Excellent barrier properties for powder and liquid sifting",
    "High-speed packing line compatibility"
  ];

  const seal3ItemsVal = t(`${p}.sections.types.seal3.items`, { returnObjects: true });
  const seal3Items = Array.isArray(seal3ItemsVal) ? seal3ItemsVal : [
    "Classic sachet format sealed on three sides",
    "Allows top or bottom filling depending on machinery",
    "Standard choice for coffee stirrers, yeast, spices",
    "Higher volume capacity than 4-side seal of same width"
  ];

  const seal4ItemsVal = t(`${p}.sections.types.seal4.items`, { returnObjects: true });
  const seal4Items = Array.isArray(seal4ItemsVal) ? seal4ItemsVal : [
    "Sealed on all four edges for flat look",
    "Extremely uniform shape, perfect for display cartons",
    "High structural integrity for liquid gels and creams",
    "Provides airtight perimeter security"
  ];

  const applicationsItemsVal = t(`${p}.sections.applications.items`, { returnObjects: true });
  const applicationsItems = Array.isArray(applicationsItemsVal) ? applicationsItemsVal : [
    "Spices & seasoning packets",
    "Instant coffee & tea sachets",
    "Pharmaceutical powders",
    "Cosmetic cream & gel samples",
    "Hotel soap & shampoo amenities",
    "Nutritional supplement powders"
  ];

  const openingItemsVal = t(`${p}.sections.features.opening.items`, { returnObjects: true });
  const openingItems = Array.isArray(openingItemsVal) ? openingItemsVal : [
    "Laser scoring for straight tear lines",
    "V-shaped or round tear notches for easy access",
    "Reclosable zipper options for larger flat bags"
  ];

  const additionalItemsVal = t(`${p}.sections.features.additional.items`, { returnObjects: true });
  const additionalItems = Array.isArray(additionalItemsVal) ? additionalItemsVal : [
    "Round or Euro hang holes for retail rack display",
    "Rounded corners to prevent finger scrapes",
    "Clear front window to showcase dry ingredients"
  ];

  const marketMetricsVal = t(`${p}.sections.marketData.metrics`, { returnObjects: true });
  const marketMetrics = Array.isArray(marketMetricsVal) ? marketMetricsVal : [
    { val: "$8.2B", label: "global sachet packaging market", desc: "2024 value" },
    { val: "5.5%", label: "CAGR", desc: "2024-2030" },
    { val: "Single-serve", label: "highest demand", desc: "driven by portion control trends" },
    { val: "Paper", label: "fastest growing material", desc: "as plastic alternatives emerge" }
  ];

  const marketTrendsVal = t(`${p}.sections.marketData.trends`, { returnObjects: true });
  const marketTrends = Array.isArray(marketTrendsVal) ? marketTrendsVal : [
    "Portion control: Consumers seeking pre-measured single servings for active lifestyles",
    "Hotel eco-amenities: Global transition to paper-based plastic-free sachets",
    "E-commerce sampling: Direct mail cosmetic sachet samples increasing brand trial",
    "Recyclability: Rise of mono-material PE sachets that enter soft-plastic streams"
  ];

  const materialComparisonTableRowsVal = t(`${p}.sections.materialComparison.tableRows`, { returnObjects: true });
  const materialComparisonTableRows = Array.isArray(materialComparisonTableRowsVal) ? materialComparisonTableRowsVal : [
    ["PET/PE Clear", "⭐⭐", "💰", "Recyclable", "Sugar packets, dry foods"],
    ["Aluminum Foil Laminate", "⭐⭐⭐⭐⭐", "💰💰", "Hard to recycle", "Sauces, pharmaceuticals"],
    ["Kraft Paper Laminate", "⭐⭐⭐", "💰💰", "Natural look", "Tea bags, spices"],
    ["PLA Compostable", "⭐⭐", "💰💰💰", "🌱 Compostable", "Organic foods, samples"]
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

  const sections = [
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.scenarioTrigger.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            {t(`${p}.sections.scenarioTrigger.text`)}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.sampleProducers.title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.sampleProducers.desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.foodService.title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.foodService.desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.teaSpice.title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.teaSpice.desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.text`)}</strong>
          </p>
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.advantagesTitle`)}</h4>
            <ul className="space-y-1 text-sm">
              {overviewAdvantages.map((adv, idx) => (
                <li key={idx}>✓ {adv}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'types',
      title: t(`${p}.sections.types.title`),
      icon: <FileText className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-primary-200 rounded-lg p-4">
              <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.types.seal3.title`)}</h4>
              <p className="text-sm mb-2">{t(`${p}.sections.types.seal3.desc`)}</p>
              <ul className="text-sm space-y-1">
                {seal3Items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.types.seal4.title`)}</h4>
              <p className="text-sm mb-2">{t(`${p}.sections.types.seal4.desc`)}</p>
              <ul className="text-sm space-y-1">
                {seal4Items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {applicationsItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t(`${p}.sections.features.title`),
      icon: <Scissors className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t(`${p}.sections.features.opening.title`)}</h4>
              <ul className="text-sm space-y-1">
                {openingItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t(`${p}.sections.features.additional.title`)}</h4>
              <ul className="text-sm space-y-1">
                {additionalItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Flat Pouch Examples Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.features.galleryTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/pouch shape/3-side.webp" 
                alt="Three side seal flat pouch sachet" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.gallery.0`) || ""}
              />
              <ClickableImage 
                src="/imgs/store/barrier/2-clear.webp" 
                alt="Clear flat pouch for product visibility" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.gallery.1`) || ""}
              />
              <ClickableImage 
                src="/imgs/store/barrier/2-paper.webp" 
                alt="Kraft paper flat sachet eco-friendly" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.gallery.2`) || ""}
              />
              <ClickableImage 
                src="/imgs/store/eco-material/compostable.webp" 
                alt="Compostable flat pouch sachet" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.gallery.3`) || ""}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: t(`${p}.sections.riskHedge.title`),
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"{t(`${p}.sections.riskHedge.items.0.q`)}"</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.items.0.a`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"{t(`${p}.sections.riskHedge.items.1.q`)}"</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.items.1.a`)}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"{t(`${p}.sections.riskHedge.items.2.q`)}"</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.items.2.a`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"{t(`${p}.sections.riskHedge.items.3.q`)}"</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.items.3.a`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: t(`${p}.sections.decisionCta.title`),
      icon: <Package className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t(`${p}.sections.decisionCta.title`)}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.call.title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.call.desc`)}</p>
              <button onClick={openCalendly} className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
                {t(`${p}.sections.decisionCta.call.btn`)}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.email.title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.email.desc`)}</p>
              <a href="mailto:ryan@achievepack.com?subject=Flat Pouches Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                {t(`${p}.sections.decisionCta.email.btn`)}
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.samples.title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.samples.desc`)}</p>
              <Link to="/contact" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                {t(`${p}.sections.decisionCta.samples.btn`)}
              </Link>
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
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.food.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.food.desc`)}</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.food.badge`)}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.cosmetics.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.cosmetics.desc`)}</p>
              <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.cosmetics.badge`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.pharma.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.pharma.desc`)}</p>
              <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.pharma.badge`)}</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.industryScenarios.storyTitle`)}</h4>
            <p className="text-sm text-neutral-600">"{t(`${p}.sections.industryScenarios.storyText`)}"</p>
            <p className="text-xs text-neutral-500 mt-2">{t(`${p}.sections.industryScenarios.storyAuthor`)}</p>
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
            {marketMetrics.map((m, idx) => {
              const colors = [
                'from-primary-500 to-primary-600',
                'from-green-500 to-green-600',
                'from-amber-500 to-amber-600',
                'from-purple-500 to-purple-600'
              ]
              return (
                <div key={idx} className={`bg-gradient-to-br ${colors[idx % colors.length]} text-white p-4 rounded-xl text-center`}>
                  <div className="text-3xl font-bold">{m.val}</div>
                  <div className="text-sm opacity-90">{m.label}</div>
                  <div className="text-xs opacity-75 mt-1">{m.desc}</div>
                </div>
              )
            })}
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.marketData.trendTitle`)}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {marketTrends.map((trend, idx) => {
                const delimiter = trend.includes('：') ? '：' : ':';
                const parts = trend.split(delimiter);
                const title = parts[0];
                const desc = parts.slice(1).join(delimiter);
                return (
                  <div key={idx} className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                    <span><strong>{title}</strong>{desc ? `${delimiter}${desc}` : ''}</span>
                  </div>
                )
              })}
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
                  <th className="border border-neutral-200 px-4 py-2 text-left">{t(`${p}.sections.materialComparison.tableHeaders.0`, 'Material Type')}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.tableHeaders.1`, 'Barrier')}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.tableHeaders.2`, 'Cost')}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.tableHeaders.3`, 'Eco-Friendly')}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">{t(`${p}.sections.materialComparison.tableHeaders.4`, 'Recommended Use')}</th>
                </tr>
              </thead>
              <tbody>
                {materialComparisonTableRows.map((row, rIdx) => {
                  const bgClass = rIdx % 2 === 1 ? 'bg-neutral-50' : '';
                  const isGreen = row[3]?.includes('Compostable') || row[3]?.includes('可降解') || row[3]?.includes('biodégradable') || row[3]?.includes('Biodegradable');
                  return (
                    <tr key={rIdx} className={isGreen ? 'bg-green-50' : bgClass}>
                      <td className="border border-neutral-200 px-4 py-2 font-medium">{row[0]}</td>
                      <td className="border border-neutral-200 px-4 py-2 text-center">{row[1]}</td>
                      <td className="border border-neutral-200 px-4 py-2 text-center">{row[2]}</td>
                      <td className="border border-neutral-200 px-4 py-2 text-center">{row[3]}</td>
                      <td className="border border-neutral-200 px-4 py-2">{row[4]}</td>
                    </tr>
                  )
                })}
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
      id: 'pain-points-solutions',
      title: localT.title,
      icon: <Shield className="h-5 w-5 text-red-600" />,
      content: (
        <div className="bg-red-50 p-6 rounded-lg border border-red-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {localT.items.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900">{item.q}</h4>
                    <p className="text-sm text-neutral-600 mt-1">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <img 
                src="/imgs/knowledge/flat-pouches-pain-points.jpg" 
                alt="Flat Pouch Pain Points and Solutions" 
                className="w-full h-auto rounded-xl shadow-md border border-neutral-200"
              />
            </div>
          </div>
        </div>
      )
    }
  ]

  // variables faqs and tables are declared at the top now!

  const relatedLinks = [
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Self-standing alternative" },
    { title: "Compostable Materials", url: "/materials/compostable", description: "Eco-friendly sachet options" },
    { title: "Coffee & Tea", url: "/industry/coffee-tea", description: "Tea sachet solutions" }
  ]

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={[
        '3 side seal pouch',
        'flat pouch',
        'sachet packaging',
        'sample pouches',
        'single serve packets',
        'sachet bags',
        'flat bag packaging',
        '4 side seal pouch'
      ]}
      canonicalUrl="https://achievepack.com/packaging/flat-pouches"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/pouch-shape/a_three_side_seal_pouch_isolated_0879222.webp"
      heroImageAlt="3-side seal flat pouch sachet packaging"
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

export default FlatPouchesPage
