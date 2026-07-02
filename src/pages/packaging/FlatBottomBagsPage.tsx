import React from 'react'
import { Package, Leaf, CheckCircle, Award, BoxSelect, Target, Shield, Calendar, Phone, Download, Mail, MessageCircle, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const translations: Record<string, Record<string, any>> = {
  en: {
    title: "5 Common Flat Bottom Bags Problems (And Solutions)",
    problems: [
      {
        title: "Bag tipping over during filling",
        desc: "Instability before filling causes line disruptions.",
        solution: "Reinforced bottom sealing and rigid gusset structures."
      },
      {
        title: "Valve failure in coffee packaging",
        desc: "Degassing valve leaks oxygen, ruining coffee.",
        solution: "High-precision one-way WIPF valves with ultrasonic welding."
      },
      {
        title: "Zipper detachment",
        desc: "Closure separating from the bag when pulled.",
        solution: "Upgraded heat seal strength and wider zipper flanges."
      },
      {
        title: "Punctures from sharp products",
        desc: "Nuts or pet food piercing the film.",
        solution: "Multi-layer laminated films with high-puncture resistance (e.g., Nylon/BOPA)."
      },
      {
        title: "Loss of freshness or aroma",
        desc: "Oxygen or moisture ingress.",
        solution: "High-barrier EVOH or Aluminum foil inner layers."
      }
    ]
  },
  es: {
    title: "5 Problemas Comunes de las Bolsas de Fondo Plano (Y Soluciones)",
    problems: [
      {
        title: "La bolsa se vuelca durante el llenado",
        desc: "La inestabilidad antes del llenado causa interrupciones en la línea.",
        solution: "Sellado inferior reforzado y estructuras de fuelle rígidas."
      },
      {
        title: "Falla de la válvula en empaques de café",
        desc: "La válvula desgasificadora filtra oxígeno, arruinando el café.",
        solution: "Válvulas desgasificadoras unidireccionales de alta precisión con soldadura ultrasónica."
      },
      {
        title: "Desprendimiento del cierre",
        desc: "El cierre se separa de la bolsa al tirar de él.",
        solution: "Mayor fuerza de sellado térmico y pestañas de cierre más anchas."
      },
      {
        title: "Perforaciones por productos puntiagudos",
        desc: "Nueces o comida para mascotas perforando la película.",
        solution: "Películas laminadas multicapa con alta resistencia a las perforaciones (ej. Nylon/BOPA)."
      },
      {
        title: "Pérdida de frescura o aroma",
        desc: "Ingreso de oxígeno o humedad.",
        solution: "Capas internas de alta barrera de EVOH o papel de aluminio."
      }
    ]
  },
  fr: {
    title: "5 Problèmes Courants des Sachets à Fond Plat (Et Solutions)",
    problems: [
      {
        title: "Le sachet bascule pendant le remplissage",
        desc: "L'instabilité avant le remplissage perturbe la ligne de production.",
        solution: "Scellage inférieur renforcé et structures à soufflet rigides."
      },
      {
        title: "Défaillance de la valve pour le café",
        desc: "La valve de dégazage laisse fuir l'oxygène, gâchant le café.",
        solution: "Valves de dégazage unidirectionnelles de haute précision avec soudure par ultrasons."
      },
      {
        title: "Détachement de la fermeture zippée",
        desc: "La fermeture se sépare du sachet lorsqu'on tire.",
        solution: "Résistance du thermoscellage améliorée et rebords de zip plus larges."
      },
      {
        title: "Perforations par des produits pointus",
        desc: "Noix ou aliments pour animaux perçant le film.",
        solution: "Films laminés multicouches à haute résistance à la perforation (ex. Nylon/BOPA)."
      },
      {
        title: "Perte de fraîcheur ou d'arôme",
        desc: "Pénétration d'oxygène ou d'humidité.",
        solution: "Couches internes à haute barrière en EVOH ou en aluminium."
      }
    ]
  },
  "zh-TW": {
    title: "平底袋的 5 個常見問題（與解決方案）",
    problems: [
      {
        title: "充填時袋子傾倒",
        desc: "充填前的不穩定會導致生產線中斷。",
        solution: "加固的底部封口和堅固的側邊結構。"
      },
      {
        title: "咖啡包裝中的排氣閥失效",
        desc: "排氣閥洩漏氧氣，破壞咖啡品質。",
        solution: "採用超聲波焊接的高精度單向排氣閥。"
      },
      {
        title: "夾鏈脫落",
        desc: "拉扯時夾鏈與袋子分離。",
        solution: "升級熱封強度並加寬夾鏈邊緣。"
      },
      {
        title: "被尖銳產品刺破",
        desc: "堅果或寵物食品刺穿薄膜。",
        solution: "具有高抗穿刺性的多層複合薄膜（例如尼龍/BOPA）。"
      },
      {
        title: "失去新鮮度或香氣",
        desc: "氧氣或濕氣進入。",
        solution: "高阻隔的 EVOH 或鋁箔內層。"
      }
    ]
  }
};

const FlatBottomBagsPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = React.useState<{ src: string; index: number } | null>(null)
  const p = 'seoPages.pages.flatBottomBags'

  // Safe array fallbacks to prevent runtime crashes
  const overviewBenefitsVal = t(`${p}.sections.overview.benefits`, { returnObjects: true });
  const overviewBenefits = Array.isArray(overviewBenefitsVal) ? overviewBenefitsVal : [
    "5-panel construction for maximum branding surface",
    "Stable, box-like shelf presence",
    "Higher capacity than standard pouches",
    "Premium appearance for specialty products",
    "Available in compostable and recyclable materials"
  ];

  const designItemsVal = t(`${p}.sections.construction.design.items`, { returnObjects: true });
  const designItems = Array.isArray(designItemsVal) ? designItemsVal : [
    "Front panel – Main branding area",
    "Back panel – Ingredients, instructions",
    "2 Side gussets – Additional branding space",
    "Bottom panel – Stable base, can include print"
  ];

  const closuresItemsVal = t(`${p}.sections.construction.closures.items`, { returnObjects: true });
  const closuresItems = Array.isArray(closuresItemsVal) ? closuresItemsVal : [
    "Resealable zipper (press-to-close or slider)",
    "Tin tie closure",
    "Degassing valve (for coffee)",
    "Tear notch for easy opening"
  ];

  const applicationsItemsVal = t(`${p}.sections.applications.items`, { returnObjects: true });
  const applicationsItems = Array.isArray(applicationsItemsVal) ? applicationsItemsVal : [
    "Specialty coffee",
    "Premium tea",
    "Pet food & treats",
    "Protein powder",
    "Granola & muesli",
    "Dried fruits",
    "Premium nuts",
    "Rice & grains",
    "Organic snacks",
    "Artisan products",
    "Superfoods",
    "Gift packaging"
  ];

  const materialsGalleryVal = t(`${p}.sections.materials.gallery`, { returnObjects: true });
  const materialsGallery = Array.isArray(materialsGalleryVal) ? materialsGalleryVal : [
    "Flat Bottom Gusset", "Aluminum Barrier", "Kraft Paper Finish", "Tin-Tie Closure"
  ];

  const marketMetricsVal = t(`${p}.sections.marketData.metrics`, { returnObjects: true });
  const marketMetrics = Array.isArray(marketMetricsVal) ? marketMetricsVal : [
    { val: "$12.4B", label: "global flat bottom bag market", desc: "2024 value estimation" },
    { val: "5.2%", label: "CAGR growth rate", desc: "expected from 2024 to 2030" },
    { val: "Coffee", label: "largest segment", desc: "represents 40% of wholesale volume" },
    { val: "82%", label: "FSC certified", desc: "shows demand for eco paper" }
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

  const currentLang = i18n.language || 'en';
  const localT = translations[currentLang] || translations['en'];

  const painPointsSection = {
    id: 'pain-points',
    title: localT.title,
    icon: <Shield className="h-5 w-5 text-primary-600" />,
    content: (
      <div className="space-y-6 text-neutral-700">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            {localT.problems.map((p: any, idx: number) => (
              <div key={idx} className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-900 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-red-600" />
                  {p.title}
                </h4>
                <p className="text-sm text-red-700 mt-1">{p.desc}</p>
                <div className="mt-2 bg-green-50 p-2 rounded border border-green-200">
                  <p className="text-sm text-green-800 font-medium flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    {p.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="sticky top-6">
            <ClickableImage 
              src="/imgs/knowledge/flat-bottom-bags-pain-points.jpg"
              alt={localT.title}
              className="w-full rounded-xl shadow-lg border border-neutral-200"
            />
          </div>
        </div>
      </div>
    )
  };

  const sections = [
    painPointsSection,
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.scenarioTrigger.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.sections.scenarioTrigger.text`)}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-amber-800">{t(`${p}.sections.scenarioTrigger.coffee.title`)}</p>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.scenarioTrigger.coffee.desc`)}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-amber-800">{t(`${p}.sections.scenarioTrigger.pet.title`)}</p>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.scenarioTrigger.pet.desc`)}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-amber-800">{t(`${p}.sections.scenarioTrigger.artisan.title`)}</p>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.scenarioTrigger.artisan.desc`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <BoxSelect className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.overview.text`)}
          </p>
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.benefitsTitle`)}</h4>
            <ul className="space-y-1 text-sm">
              {overviewBenefits.map((benefit: string, idx: number) => (
                <li key={idx}>✓ {benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'construction',
      title: t(`${p}.sections.construction.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.construction.text`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t(`${p}.sections.construction.design.title`)}</h4>
              <ul className="text-sm space-y-1">
                {designItems.map((item: string, idx: number) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t(`${p}.sections.construction.closures.title`)}</h4>
              <ul className="text-sm space-y-1">
                {closuresItems.map((item: string, idx: number) => (
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
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.applications.text`)}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            {applicationsItems.map((item: string, idx: number) => (
              <div key={idx} className="bg-primary-50 text-primary-800 px-3 py-2 rounded-lg text-sm text-center font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t(`${p}.sections.materials.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.materials.compostable.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.compostable.desc`)}</p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.materials.recyclable.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.recyclable.desc`)}</p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.materials.barrier.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.barrier.desc`)}</p>
            </div>
          </div>
          
          {/* Material Options Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.materials.galleryTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/pouch shape/flat-bottom.webp" 
                alt="Flat bottom bag structure showing box-like base" 
                className="w-full h-28 object-cover rounded-lg"
                caption={materialsGallery[0] || ""}
              />
              <ClickableImage 
                src="/imgs/store/barrier/4-alu.webp" 
                alt="High barrier aluminum flat bottom bag" 
                className="w-full h-28 object-cover rounded-lg"
                caption={materialsGallery[1] || ""}
              />
              <ClickableImage 
                src="/imgs/store/eco-material/compostable.webp"
                alt="Kraft paper flat bottom bag eco-friendly" 
                className="w-full h-28 object-cover rounded-lg"
                caption={materialsGallery[2] || ""}
              />
              <ClickableImage 
                src="/imgs/store/closure/tin-tie.webp" 
                alt="Tin tie closure for coffee flat bottom bags" 
                className="w-full h-28 object-cover rounded-lg"
                caption={materialsGallery[3] || ""}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: t('seoPages.common.aiSearchSupplierTitle', { defaultValue: 'Finding the Right Flat Bottom Bag Supplier' }),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Best flat bottom bag supplier for specialty coffee?"</li>
              <li>• "Flat bottom vs stand-up pouch: which is better for coffee?"</li>
              <li>• "Custom box bottom bags with degassing valve low MOQ?"</li>
              <li>• "Compostable flat bottom coffee bags with 5-panel printing?"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: t('seoPages.common.isProductRightTitle', { defaultValue: 'Is a Flat Bottom Bag Right for You?' }),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-2">✅ Best Fit For...</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Premium products with retail presence</li>
                <li>• Brands needing maximum shelf impact</li>
                <li>• Coffee with degassing requirements</li>
                <li>• Heavy products needing stable base</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">⚠️ Also Works For...</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Gift packaging and seasonal products</li>
                <li>• Products transitioning from rigid packaging</li>
                <li>• Brands willing to invest in premium appearance</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">❌ Not Recommended If...</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Cost is the primary concern (15-25% premium)</li>
                <li>• Product doesn't benefit from shelf presence</li>
                <li>• <Link to="/packaging/stand-up-pouches" className="underline">Consider stand-up pouches for budget-friendly option →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: t('seoPages.common.readyToLaunchTitle', { defaultValue: 'Ready to Launch with Flat Bottom Bags?' }),
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-amber-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">Ready to Move Fast?</h4>
              <p className="text-sm opacity-90 mb-4">Book a call to discuss your exact specs</p>
              <button onClick={openCalendly} className="inline-block bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold hover:bg-amber-50 transition cursor-pointer">
                Book a Call
              </button>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Want to Test First?</h4>
              <p className="text-sm text-neutral-600 mb-4">Order flat bottom bag samples</p>
              <Link to="/store" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                Get Samples
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Still Exploring?</h4>
              <p className="text-sm text-neutral-600 mb-4">Compare with stand-up pouches</p>
              <Link to="/packaging/stand-up-pouches" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-amber-300 transition">
                Compare Options
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: t('seoPages.common.industryApplicationsTitle', { defaultValue: 'Industry Applications' }),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.coffee.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.coffee.desc`)}</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.coffee.badge`)}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.pet.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.pet.desc`)}</p>
              <div className="text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.pet.badge`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.superfood.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.superfood.desc`)}</p>
              <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.superfood.badge`)}</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">🏆 {t(`${p}.sections.industryScenarios.storyTitle`)}</h4>
            <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.storyText`)}</p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="bg-white px-3 py-1 rounded-full border">✓ {t(`${p}.sections.industryScenarios.storyAuthor`)}</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: t(`${p}.sections.marketData.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4">
            {marketMetrics.map((metric: any, idx: number) => (
              <div key={idx} className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
                <div className="text-3xl font-bold">{metric.val}</div>
                <div className="text-sm opacity-90">{metric.label}</div>
                <div className="text-xs opacity-75 mt-1">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: t(`${p}.sections.materialComparison.title`),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-center p-3 font-semibold text-green-700">Kraft Compostable</th>
                  <th className="text-center p-3 font-semibold text-blue-700">Paper-Based</th>
                  <th className="text-center p-3 font-semibold text-purple-700">High-Barrier</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Best For</td>
                  <td className="text-center p-3">✅ Premium coffee</td>
                  <td className="text-center p-3">✅ Dry goods, rice</td>
                  <td className="text-center p-3">✅ Max freshness</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Barrier Level</td>
                  <td className="text-center p-3">Medium-High</td>
                  <td className="text-center p-3">Medium</td>
                  <td className="text-center p-3">Very High</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Shelf Life</td>
                  <td className="text-center p-3">6-12 months</td>
                  <td className="text-center p-3">6-9 months</td>
                  <td className="text-center p-3">18-24 months</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Premium Look</td>
                  <td className="text-center p-3">⭐⭐⭐⭐⭐</td>
                  <td className="text-center p-3">⭐⭐⭐⭐</td>
                  <td className="text-center p-3">⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">End-of-Life</td>
                  <td className="text-center p-3">🌱 Compostable</td>
                  <td className="text-center p-3">♻️ Recyclable</td>
                  <td className="text-center p-3">🗑️ Landfill</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Price Point</td>
                  <td className="text-center p-3">💰💰💰</td>
                  <td className="text-center p-3">💰💰</td>
                  <td className="text-center p-3">💰💰💰</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  // variables faqs and tables are declared at the top now!

  const relatedLinks = [
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "More economical alternative" },
    { title: "Coffee & Tea Packaging", url: "/industry/coffee-tea", description: "Specialty coffee solutions" },
    { title: "Compostable Materials", url: "/materials/compostable", description: "Eco-friendly options" }
  ]

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title="Flat Bottom Bags | Box Bottom Pouches | Block Bottom Packaging"
      description="Custom flat bottom bags (box bottom pouches) for coffee, pet food, and premium products. 5-panel printing, stable base. Compostable & recyclable options. MOQ 500."
      keywords={[
        'flat bottom bag',
        'box bottom pouch',
        'block bottom bag',
        'coffee bag flat bottom',
        'premium pouch packaging',
        'flat bottom coffee bag',
        'box pouch',
        '5 panel pouch'
      ]}
      canonicalUrl="https://achievepack.com/packaging/flat-bottom-bags"
      heroTitle={t('seoPages.pages.flatBottomBags.heroTitle')}
      heroSubtitle={t('seoPages.pages.flatBottomBags.heroSubtitle')}
      heroImage="/imgs/pouch-shape/a_flat_bottom_pouch_isolated_7901973.webp"
      heroImageAlt="Flat bottom bag box pouch packaging"
      hero3DModelUrl="/3d/3d-pouch/coffee-pouch.glb"
      introSummary={t('seoPages.pages.flatBottomBags.introSummary')}
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

export default FlatBottomBagsPage
