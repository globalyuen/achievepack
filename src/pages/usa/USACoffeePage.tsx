import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Coffee, Leaf, Shield, CheckCircle, Clock, TrendingUp, MessageCircle, Award, Target, Calendar, Phone, Download, Mail, AlertTriangle, BookOpen } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const localTranslations = {
  en: {
    title: "5 Common Coffee Packaging Problems (And Solutions)",
    intro: "Packaging coffee properly is critical for maintaining its quality, flavor, and shelf-life. Here are 5 common pain points and how our engineering solves them.",
    prob1: "Loss of Flavor & Aroma (CO2 Buildup)",
    sol1: "Solution: One-way degassing valves to release CO2 while keeping oxygen out, ensuring freshness.",
    prob2: "Exposure to Light, Moisture & Oxygen",
    sol2: "Solution: Multi-layer high-barrier films (like AL or metallized PET) that provide extreme protection against UV and humidity.",
    prob3: "Poor Resealability After Opening",
    sol3: "Solution: Premium press-to-close zippers or pocket zippers for reliable, airtight resealing.",
    prob4: "Punctures or Leaks During Shipping",
    sol4: "Solution: High tensile strength laminates and reinforced wide side-seals to survive transit.",
    prob5: "Sustainability & Eco-Friendly Demands",
    sol5: "Solution: Innovative Recyclable Mono-PE or Industrially Compostable packaging structures.",
    ryanTitle: "Ryan Wong's Engineering Notebook",
    ryanEntry: "Entry: Overcoming Degassing Valve Failures in High-Altitude Transport",
    ryanP1: "\"When we first started shipping freshly roasted beans across the Rockies, clients reported their bags were either bursting or arriving flat and stale. Standard valves were failing under pressure differentials.\"",
    ryanP2: "\"I engineered a custom nylon-filtered one-way valve with a tighter silicone oil seal, calibrated precisely to 0.05 bar release pressure. We tested it in a vacuum chamber simulating 10,000 ft elevation. Result? Zero bursts, perfect aroma retention, and a shelf-life extension of 4 weeks.\"",
    ryanAuthor: "- Ryan Wong, Lead Packaging Engineer"
  },
  es: {
    title: "5 Problemas Comunes del Empaque de Café (y Soluciones)",
    intro: "El empaque adecuado del café es fundamental para mantener su calidad, sabor y vida útil. Aquí hay 5 puntos críticos comunes y cómo nuestra ingeniería los resuelve.",
    prob1: "Pérdida de Sabor y Aroma (Acumulación de CO2)",
    sol1: "Solución: Válvulas desgasificadoras unidireccionales para liberar CO2 manteniendo el oxígeno afuera.",
    prob2: "Exposición a la Luz, Humedad y Oxígeno",
    sol2: "Solución: Películas multicapa de alta barrera (como AL o PET metalizado) para máxima protección.",
    prob3: "Mala Capacidad de Resellado Tras Abrir",
    sol3: "Solución: Cierres de presión de alta calidad o cierres tipo bolsillo para un resellado hermético confiable.",
    prob4: "Perforaciones o Fugas Durante el Envío",
    sol4: "Solución: Laminados de alta resistencia a la tracción y sellos laterales reforzados para sobrevivir al transporte.",
    prob5: "Demandas de Sostenibilidad y Ecología",
    sol5: "Solución: Innovadoras estructuras de empaque de Mono-PE reciclable o compostable industrialmente.",
    ryanTitle: "Cuaderno de Ingeniería de Ryan Wong",
    ryanEntry: "Entrada: Superando Fallas de Válvulas de Desgasificación en Transporte a Gran Altitud",
    ryanP1: "\"Cuando comenzamos a enviar granos recién tostados a través de las Montañas Rocosas, los clientes informaron que sus bolsas estallaban o llegaban desinfladas y rancias. Las válvulas estándar fallaban bajo diferencias de presión.\"",
    ryanP2: "\"Ingenié una válvula unidireccional personalizada con filtro de nailon y un sello de aceite de silicona más ajustado, calibrada con precisión a una presión de liberación de 0.05 bar. La probamos en una cámara de vacío simulando 10,000 pies de elevación. ¿Resultado? Cero estallidos, perfecta retención de aroma y una extensión de vida útil de 4 semanas.\"",
    ryanAuthor: "- Ryan Wong, Ingeniero Principal de Empaques"
  },
  fr: {
    title: "5 Problèmes Courants d'Emballage de Café (et Solutions)",
    intro: "L'emballage correct du café est essentiel pour maintenir sa qualité, sa saveur et sa durée de conservation. Voici 5 points faibles courants et comment notre ingénierie les résout.",
    prob1: "Perte de Saveur et d'Arôme (Accumulation de CO2)",
    sol1: "Solution : Valves de dégazage unidirectionnelles pour libérer le CO2 tout en bloquant l'oxygène.",
    prob2: "Exposition à la Lumière, l'Humidité et l'Oxygène",
    sol2: "Solution : Films multicouches à haute barrière (comme AL ou PET métallisé) pour une protection maximale.",
    prob3: "Mauvaise Refermabilité Après Ouverture",
    sol3: "Solution : Zips à pression de qualité supérieure ou zips de poche pour une fermeture hermétique fiable.",
    prob4: "Perforations ou Fuites Pendant l'Expédition",
    sol4: "Solution : Stratifiés à haute résistance à la traction et joints latéraux renforcés pour résister au transport.",
    prob5: "Exigences de Durabilité et d'Écologie",
    sol5: "Solution : Structures d'emballage innovantes en Mono-PE recyclable ou compostables industriellement.",
    ryanTitle: "Carnet d'Ingénierie de Ryan Wong",
    ryanEntry: "Entrée : Surmonter les Défaillances des Valves de Dégazage lors du Transport en Haute Altitude",
    ryanP1: "\"Lorsque nous avons commencé à expédier des grains fraîchement torréfiés à travers les Rocheuses, les clients ont signalé que leurs sacs éclataient ou arrivaient plats et éventés. Les valves standard échouaient sous les différences de pression.\"",
    ryanP2: "\"J'ai conçu une valve unidirectionnelle personnalisée avec un filtre en nylon et un joint d'huile de silicone plus serré, calibrée précisément à une pression de libération de 0,05 bar. Nous l'avons testée dans une chambre à vide simulant une altitude de 10 000 pieds. Résultat ? Zéro éclatement, une rétention d'arôme parfaite et une prolongation de la durée de conservation de 4 semaines.\"",
    ryanAuthor: "- Ryan Wong, Ingénieur Principal en Emballage"
  },
  'zh-TW': {
    title: "5個常見的咖啡包裝問題（及解決方案）",
    intro: "正確包裝咖啡對於保持其品質、風味和保質期至關重要。以下是5個常見痛點以及我們的工程如何解決它們。",
    prob1: "風味與香氣流失 (CO2 積聚)",
    sol1: "解決方案：單向排氣閥可在排出 CO2 的同時阻擋氧氣進入，確保新鮮度。",
    prob2: "暴露於光線、濕氣與氧氣",
    sol2: "解決方案：多層高阻隔薄膜（如鋁箔或鍍鋁 PET）提供最大程度的保護。",
    prob3: "開封後密封性差",
    sol3: "解決方案：優質壓合夾鏈或口袋夾鏈，提供可靠的氣密重新密封。",
    prob4: "運輸過程中的刺穿或洩漏",
    sol4: "解決方案：高抗拉強度複合材料和加固的寬邊封口，可承受運輸過程的考驗。",
    prob5: "可持續性與環保需求",
    sol5: "解決方案：創新的可回收單一材質 PE 或工業可堆肥包裝結構。",
    ryanTitle: "Ryan Wong 的工程筆記",
    ryanEntry: "條目：克服高海拔運輸中的排氣閥失效問題",
    ryanP1: "\"當我們第一次開始穿越洛磯山脈運輸新鮮烘焙的咖啡豆時，客戶報告說他們的袋子要麼破裂，要麼變得扁平且不新鮮。標準排氣閥在壓力差下容易失效。\"",
    ryanP2: "\"我設計了一種定製的尼龍過濾單向排氣閥，帶有更緊密的矽油密封，精確校準至 0.05 巴的釋放壓力。我們在模擬 10,000 英尺海拔的真空室中對其進行了測試。結果？零破裂，完美的香氣保留，並且保質期延長了 4 週。\"",
    ryanAuthor: "- Ryan Wong, 首席包裝工程師"
  }
}
const USACoffeePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.usaCoffee'
  
  const lang = i18n.language || 'en';
  const localTrans = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en;

  const { openCalendly } = useCalendly()
  const sections = [
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.scenarioTrigger.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-green-50 p-6 rounded-lg border border-amber-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            {t(`${p}.sections.scenarioTrigger.introText`)}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.card1Title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.card1Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.card2Title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.card2Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.card3Title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.card3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: localTrans.title,
      icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{localTrans.intro}</p>
          <div className="space-y-3 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-100">
              <h4 className="font-bold text-red-700 flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> 1. {localTrans.prob1}</h4>
              <p className="text-sm mt-1 text-green-700 font-medium">{localTrans.sol1}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-100">
              <h4 className="font-bold text-red-700 flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> 2. {localTrans.prob2}</h4>
              <p className="text-sm mt-1 text-green-700 font-medium">{localTrans.sol2}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-100">
              <h4 className="font-bold text-red-700 flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> 3. {localTrans.prob3}</h4>
              <p className="text-sm mt-1 text-green-700 font-medium">{localTrans.sol3}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-100">
              <h4 className="font-bold text-red-700 flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> 4. {localTrans.prob4}</h4>
              <p className="text-sm mt-1 text-green-700 font-medium">{localTrans.sol4}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-100">
              <h4 className="font-bold text-red-700 flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> 5. {localTrans.prob5}</h4>
              <p className="text-sm mt-1 text-green-700 font-medium">{localTrans.sol5}</p>
            </div>
          </div>
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/knowledge/usa-coffee-packaging-pain-points.jpg" 
              alt="Coffee Packaging Engineering Solutions" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      )
    },
    {
      id: 'ryan-wong-notebook',
      title: localTrans.ryanTitle,
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-primary-600 font-mono text-sm text-neutral-800">
          <p className="font-bold mb-2">{localTrans.ryanEntry}</p>
          <p className="mb-2">{localTrans.ryanP1}</p>
          <p className="mb-2">{localTrans.ryanP2}</p>
          <p className="italic text-neutral-600 mt-4">{localTrans.ryanAuthor}</p>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.descStrong`)}</strong> {t(`${p}.sections.overview.descText`)}
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.overview.whyTitle`)}</h4>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>• <strong>{t(`${p}.sections.overview.why1Strong`)}</strong>{t(`${p}.sections.overview.why1Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why2Strong`)}</strong>{t(`${p}.sections.overview.why2Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why3Strong`)}</strong>{t(`${p}.sections.overview.why3Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why4Strong`)}</strong>{t(`${p}.sections.overview.why4Text`)}</li>
            </ul>
          </div>
          
          <p className="mt-4">
            <Link to="/" className="text-primary-600 hover:underline">Achieve Pack</Link> {t(`${p}.sections.overview.intro`).startsWith('Achieve Pack') ? t(`${p}.sections.overview.intro`).slice('Achieve Pack'.length) : t(`${p}.sections.overview.intro`)}
          </p>
          
          {/* Inline Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp" 
              alt={t(`${p}.sections.overview.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.overview.imgCaption`)}
            />
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
          <p>{t(`${p}.sections.materials.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.materials.card1Title`)}</h4>
              <ul className="text-sm space-y-1">
                <li>{t(`${p}.sections.materials.card1Item1`)}</li>
                <li>{t(`${p}.sections.materials.card1Item2`)}</li>
                <li>{t(`${p}.sections.materials.card1Item3`)}</li>
                <li>{t(`${p}.sections.materials.card1Item4`)}</li>
                <li>{t(`${p}.sections.materials.card1Item5`)}</li>
              </ul>
              <Link to="/materials/industrial-compostable" className="text-xs text-primary-600 hover:underline font-semibold mt-2 inline-block">Learn more →</Link>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">{t(`${p}.sections.materials.card2Title`)}</h4>
              <ul className="text-sm space-y-1">
                <li>{t(`${p}.sections.materials.card2Item1`)}</li>
                <li>{t(`${p}.sections.materials.card2Item2`)}</li>
                <li>{t(`${p}.sections.materials.card2Item3`)}</li>
                <li>{t(`${p}.sections.materials.card2Item4`)}</li>
                <li>{t(`${p}.sections.materials.card2Item5`)}</li>
              </ul>
              <Link to="/materials/home-compostable" className="text-xs text-emerald-600 hover:underline font-semibold mt-2 inline-block">Learn more →</Link>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <strong>{t(`${p}.sections.materials.altStrong`)}</strong>{t(`${p}.sections.materials.altText`)}<Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">{t(`${p}.sections.materials.altLink`)}</Link>{t(`${p}.sections.materials.altTextEnd`)}
          </p>
          
          {/* Technical Specs Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/coffee/a_coffee_pouch_technical_specs_5693348.webp" 
              alt={t(`${p}.sections.materials.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.materials.imgCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t(`${p}.sections.features.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.features.intro`)}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.features.items`, { returnObjects: true }) as string[]).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>{t(`${p}.sections.features.popularStrong`)}</strong> <Link to="/packaging/stand-up-pouches" className="text-blue-600 hover:underline">{t(`${p}.sections.features.popularLink`)}</Link>{t(`${p}.sections.features.popularText`)}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'case-study',
      title: t(`${p}.sections.caseStudy.title`),
      icon: <TrendingUp className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-primary-500">
            <blockquote className="italic text-neutral-600 mb-4">
              {t(`${p}.sections.caseStudy.quote`)}
            </blockquote>
            <p className="font-semibold text-neutral-800">{t(`${p}.sections.caseStudy.author`)}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700">{t(`${p}.sections.caseStudy.stat1Value`)}</div>
              <div className="text-sm text-green-600">{t(`${p}.sections.caseStudy.stat1Label`)}</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-700">{t(`${p}.sections.caseStudy.stat2Value`)}</div>
              <div className="text-sm text-blue-600">{t(`${p}.sections.caseStudy.stat2Label`)}</div>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <div className="text-2xl font-bold text-amber-700">{t(`${p}.sections.caseStudy.stat3Value`)}</div>
              <div className="text-sm text-amber-600">{t(`${p}.sections.caseStudy.stat3Label`)}</div>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/case-studies/coffee-roastery" className="text-primary-600 hover:underline font-semibold">{t(`${p}.sections.caseStudy.caseStudyLink`)}</Link>
          </p>
          
          {/* Sustainability Guide Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/coffee/a_coffee_sustainability_roaster_guide_0801372.webp" 
              alt={t(`${p}.sections.caseStudy.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.caseStudy.imgCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'compliance',
      title: t(`${p}.sections.compliance.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.compliance.intro`)}</p>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-lg">
              <Award className="h-6 w-6 text-blue-600" />
              <div>
                <span className="font-semibold">{t(`${p}.sections.compliance.cert1Strong`)}</span>
                <span className="text-sm text-neutral-500 ml-2">{t(`${p}.sections.compliance.cert1Text`)}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-lg">
              <Award className="h-6 w-6 text-green-600" />
              <div>
                <span className="font-semibold">{t(`${p}.sections.compliance.cert2Strong`)}</span>
                <span className="text-sm text-neutral-500 ml-2">{t(`${p}.sections.compliance.cert2Text`)}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-lg">
              <Award className="h-6 w-6 text-amber-600" />
              <div>
                <span className="font-semibold">{t(`${p}.sections.compliance.cert3Strong`)}</span>
                <span className="text-sm text-neutral-500 ml-2">{t(`${p}.sections.compliance.cert3Text`)}</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/usa/labeling-guide" className="text-primary-600 hover:underline">{t(`${p}.sections.compliance.complianceLink`)}</Link>{t(`${p}.sections.compliance.complianceText`)}
          </p>
        </div>
      )
    },
    {
      id: 'ordering',
      title: t(`${p}.sections.ordering.title`),
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.ordering.intro`)}</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{t(`${p}.sections.ordering.card1Value`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.ordering.card1Text`)}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{t(`${p}.sections.ordering.card2Value`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.ordering.card2Text`)}</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{t(`${p}.sections.ordering.card3Value`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.ordering.card3Text`)}</div>
            </div>
          </div>
          
          <div className="mt-6">
            <Link to="/store" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition">
              {t(`${p}.sections.ordering.ctaLinkText`)}
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: t(`${p}.sections.riskHedging.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
            <h4 className="font-bold text-green-800 mb-2">{t(`${p}.sections.riskHedging.card1Title`)}</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>{t(`${p}.sections.riskHedging.card1Item1`)}</li>
              <li>{t(`${p}.sections.riskHedging.card1Item2`)}</li>
              <li>{t(`${p}.sections.riskHedging.card1Item3`)}</li>
              <li>{t(`${p}.sections.riskHedging.card1Item4`)}</li>
              <li>{t(`${p}.sections.riskHedging.card1Item5`)}</li>
            </ul>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
            <h4 className="font-bold text-amber-800 mb-2">{t(`${p}.sections.riskHedging.card2Title`)}</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>{t(`${p}.sections.riskHedging.card2Item1`)}</li>
              <li>{t(`${p}.sections.riskHedging.card2Item2`)}</li>
              <li>{t(`${p}.sections.riskHedging.card2Item3`)}</li>
              <li>{t(`${p}.sections.riskHedging.card2Item4`)}</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
            <h4 className="font-bold text-red-800 mb-2">{t(`${p}.sections.riskHedging.card3Title`)}</h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>
                {t(`${p}.sections.riskHedging.card3Item1`)}
                <Link to="/materials/recyclable-mono-pe" className="underline">{t(`${p}.sections.riskHedging.card3Link`)}</Link>
                {t(`${p}.sections.riskHedging.card3Item1End`)}
              </li>
              <li>{t(`${p}.sections.riskHedging.card3Item2`)}</li>
              <li>{t(`${p}.sections.riskHedging.card3Item3`)}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: t(`${p}.sections.decisionCta.title`),
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-primary-600 text-white p-6 rounded-lg text-center">
            <Phone className="h-8 w-8 mx-auto mb-2" />
            <h4 className="font-bold text-lg">{t(`${p}.sections.decisionCta.card1Title`)}</h4>
            <p className="text-sm opacity-90 mt-1">{t(`${p}.sections.decisionCta.card1Desc`)}</p>
            <button onClick={openCalendly} className="inline-block mt-3 px-4 py-2 bg-white text-primary-600 rounded-lg font-semibold hover:bg-neutral-100 transition cursor-pointer">{t(`${p}.sections.decisionCta.card1Button`)}</button>
          </div>
          <div className="bg-neutral-100 p-6 rounded-lg text-center">
            <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
            <h4 className="font-bold text-lg text-neutral-900">{t(`${p}.sections.decisionCta.card2Title`)}</h4>
            <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.decisionCta.card2Desc`)}</p>
            <Link to="/store" className="inline-block mt-3 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition">{t(`${p}.sections.decisionCta.card2Button`)}</Link>
          </div>
          <div className="bg-white border border-neutral-200 p-6 rounded-lg text-center">
            <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
            <h4 className="font-bold text-lg text-neutral-900">{t(`${p}.sections.decisionCta.card3Title`)}</h4>
            <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.decisionCta.card3Desc`)}</p>
            <Link to="/case-studies/coffee-roastery" className="inline-block mt-3 px-4 py-2 border border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition">{t(`${p}.sections.decisionCta.card3Button`)}</Link>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: t(`${p}.sections.aiSearch.title`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.aiSearch.intro`)}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>{t(`${p}.sections.aiSearch.factor1Strong`)}</strong>{t(`${p}.sections.aiSearch.factor1Text`)}</li>
            <li><strong>{t(`${p}.sections.aiSearch.factor2Strong`)}</strong>{t(`${p}.sections.aiSearch.factor2Text`)}</li>
            <li><strong>{t(`${p}.sections.aiSearch.factor3Strong`)}</strong>{t(`${p}.sections.aiSearch.factor3Text`)}</li>
            <li><strong>{t(`${p}.sections.aiSearch.factor4Strong`)}</strong> – <Link to="/store" className="text-primary-600 hover:underline">{t(`${p}.sections.aiSearch.factor4Link`)}</Link></li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.aiSearch.aiTitle`)}</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>{t(`${p}.sections.aiSearch.aiItem1`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem2`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem3`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem4`)}</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = t(`${p}.faqs`, { returnObjects: true }) as { question: string; answer: string }[]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.0.title`), url: "/store", description: t(`${p}.relatedLinks.0.description`) },
    { title: t(`${p}.relatedLinks.1.title`), url: "/usa/compostable-packaging", description: t(`${p}.relatedLinks.1.description`) },
    { title: t(`${p}.relatedLinks.2.title`), url: "/industry/coffee-tea", description: t(`${p}.relatedLinks.2.description`) },
    { title: t(`${p}.relatedLinks.3.title`), url: "/case-studies/coffee-roastery", description: t(`${p}.relatedLinks.3.description`) },
    { title: t(`${p}.relatedLinks.4.title`), url: "/packaging/stand-up-pouches", description: t(`${p}.relatedLinks.4.description`) }
  ]

  return (
    <SEOPageLayout heroBgColor="#451a03"
      title={t(`${p}.seo.title`)}
      description={t(`${p}.seo.description`)}
      keywords={t(`${p}.seo.keywords`, { returnObjects: true }) as string[]}
      canonicalUrl="https://achievepack.com/usa/coffee-packaging"
      heroTitle={t(`${p}.seo.heroTitle`)}
      heroSubtitle={t(`${p}.seo.heroSubtitle`)}
      heroImage="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp"
      heroImageAlt={t(`${p}.seo.heroImageAlt`)}
      introSummary={t(`${p}.seo.introSummary`)}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.seo.ctaTitle`)}
      ctaDescription={t(`${p}.seo.ctaDescription`)}
      ctaButtonText={t(`${p}.seo.ctaButtonText`)}
    />
  )
}

export default USACoffeePage
