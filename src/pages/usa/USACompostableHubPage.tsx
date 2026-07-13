import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Leaf, Shield, Award, CheckCircle, Globe, MapPin, FileCheck, AlertTriangle, MessageCircle, Package, Coffee, Cookie, Target, Calendar, Phone, Download, Mail, BookOpen } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const localTranslations = {
  en: {
    title: "5 Common USA Compostable Packaging Problems (And Solutions)",
    p1Title: "1. Poor Barrier Properties",
    p1Desc: "Compostable films often struggle with oxygen and moisture barriers.",
    p1Sol: "Solution: High-barrier AlOx/SiOx coated films ensure extended freshness.",
    p2Title: "2. Short Shelf Life",
    p2Desc: "Organic products can spoil quickly in standard compostable bags.",
    p2Sol: "Solution: Multi-layer lamination of PBAT and PLA creates a durable, protective environment.",
    p3Title: "3. Structural Weakness (Tearing)",
    p3Desc: "Bags easily rip during transit or on retail shelves.",
    p3Sol: "Solution: Enhanced material engineering prevents tears while maintaining compostability.",
    p4Title: "4. High Material Cost",
    p4Desc: "Transitioning to compostable packaging can increase budgets.",
    p4Sol: "Solution: Supply chain optimization and right-sizing the pouch minimize excess waste and cost.",
    p5Title: "5. Certification Confusion (BPI vs TUV)",
    p5Desc: "Navigating regional compostability standards in the US is complex.",
    p5Sol: "Solution: Using pre-certified materials (BPI, TUV) guarantees compliance and consumer trust.",
    ryanTitle: "Ryan Wong's Engineering Notebook",
    ryanEntry: "Entry: ASTM D6400 vs Home Compostable Barriers",
    ryanP1: "\"Many US brands ask for 'home compostable' packaging but need a 12-month shelf life. The reality? Home compostable films (like NatureFlex) often lack the moisture barrier needed for sensitive foods.\"",
    ryanP2: "\"For a recent organic snack brand, we pivoted from home compostable to an ASTM D6400 certified industrial compostable structure (Kraft/PLA). It met California AB 1201 labeling laws and achieved their 12-month shelf-life requirement. Don't compromise product integrity for an unattainable end-of-life scenario.\"",
    ryanAuthor: "- Ryan Wong, Lead Packaging Engineer"
  },
  es: {
    title: "5 Problemas Comunes de Empaques Compostables en EE.UU. (Y Soluciones)",
    p1Title: "1. Propiedades de Barrera Deficientes",
    p1Desc: "Las películas compostables a menudo tienen problemas con las barreras de oxígeno y humedad.",
    p1Sol: "Solución: Películas recubiertas de AlOx/SiOx de alta barrera garantizan frescura prolongada.",
    p2Title: "2. Vida Útil Corta",
    p2Desc: "Los productos orgánicos pueden echarse a perder rápidamente en bolsas compostables estándar.",
    p2Sol: "Solución: Laminación multicapa de PBAT y PLA crea un entorno duradero y protector.",
    p3Title: "3. Debilidad Estructural (Desgarros)",
    p3Desc: "Las bolsas se rompen fácilmente durante el tránsito o en los estantes minoristas.",
    p3Sol: "Solución: Ingeniería de materiales mejorada previene desgarros manteniendo la compostabilidad.",
    p4Title: "4. Alto Costo de Materiales",
    p4Desc: "La transición a empaques compostables puede aumentar los presupuestos.",
    p4Sol: "Solución: Optimización de la cadena de suministro y el tamaño adecuado reducen el desperdicio y costo.",
    p5Title: "5. Confusión de Certificaciones (BPI vs TUV)",
    p5Desc: "Navegar los estándares regionales de compostabilidad en EE.UU. es complejo.",
    p5Sol: "Solución: Uso de materiales precertificados (BPI, TUV) garantiza cumplimiento y confianza.",
    ryanTitle: "Cuaderno de Ingeniería de Ryan Wong",
    ryanEntry: "Entrada: Barreras ASTM D6400 vs. Compostables en el Hogar",
    ryanP1: "\"Muchas marcas de EE. UU. piden empaques 'compostables en el hogar' pero necesitan una vida útil de 12 meses. ¿La realidad? Las películas compostables en el hogar (como NatureFlex) a menudo carecen de la barrera de humedad necesaria para alimentos sensibles.\"",
    ryanP2: "\"Para una reciente marca de snacks orgánicos, cambiamos de compostable en el hogar a una estructura compostable industrial certificada por ASTM D6400 (Kraft/PLA). Cumplió con las leyes de etiquetado AB 1201 de California y logró su requisito de vida útil de 12 meses. No comprometa la integridad del producto por un escenario de fin de vida inalcanzable.\"",
    ryanAuthor: "- Ryan Wong, Ingeniero Principal de Empaques"
  },
  fr: {
    title: "5 Problèmes Courants d'Emballages Compostables aux États-Unis (Et Solutions)",
    p1Title: "1. Faibles Propriétés Barrières",
    p1Desc: "Les films compostables luttent souvent avec les barrières à l'oxygène et à l'humidité.",
    p1Sol: "Solution : Des films enduits d'AlOx/SiOx à haute barrière garantissent une fraîcheur prolongée.",
    p2Title: "2. Durée de Conservation Courte",
    p2Desc: "Les produits biologiques peuvent se gâter rapidement dans des sacs compostables standards.",
    p2Sol: "Solution : La lamination multicouche de PBAT et PLA crée un environnement durable et protecteur.",
    p3Title: "3. Faiblesse Structurelle (Déchirures)",
    p3Desc: "Les sacs se déchirent facilement pendant le transport ou en rayon.",
    p3Sol: "Solution : L'ingénierie des matériaux améliorée prévient les déchirures tout en maintenant la compostabilité.",
    p4Title: "4. Coût Élevé des Matériaux",
    p4Desc: "Passer aux emballages compostables peut augmenter les budgets.",
    p4Sol: "Solution : L'optimisation de la chaîne d'approvisionnement et le dimensionnement adéquat minimisent les coûts.",
    p5Title: "5. Confusion des Certifications (BPI vs TUV)",
    p5Desc: "Naviguer dans les normes régionales de compostabilité aux États-Unis est complexe.",
    p5Sol: "Solution : L'utilisation de matériaux pré-certifiés (BPI, TUV) garantit la conformité et la confiance.",
    ryanTitle: "Carnet d'Ingénierie de Ryan Wong",
    ryanEntry: "Entrée : Barrières ASTM D6400 vs Compostables à Domicile",
    ryanP1: "\"De nombreuses marques américaines demandent des emballages 'compostables à domicile' mais ont besoin d'une durée de conservation de 12 mois. La réalité ? Les films compostables à domicile (comme NatureFlex) manquent souvent de la barrière contre l'humidité nécessaire pour les aliments sensibles.\"",
    ryanP2: "\"Pour une marque récente de snacks biologiques, nous sommes passés du compostable à domicile à une structure compostable industrielle certifiée ASTM D6400 (Kraft/PLA). Elle répondait aux lois d'étiquetage californiennes AB 1201 et atteignait leur exigence de 12 mois de durée de conservation. Ne compromettez pas l'intégrité du produit pour un scénario de fin de vie inatteignable.\"",
    ryanAuthor: "- Ryan Wong, Ingénieur Principal en Emballage"
  },
  'zh-TW': {
    title: "美國可堆肥包裝的5個常見問題（及解決方案）",
    p1Title: "1. 阻隔性能差",
    p1Desc: "可堆肥薄膜通常難以提供良好的氧氣和水分阻隔。",
    p1Sol: "解決方案：高阻隔AlOx/SiOx塗層薄膜確保延長保鮮期。",
    p2Title: "2. 保質期短",
    p2Desc: "有機產品在標準可堆肥袋中容易快速變質。",
    p2Sol: "解決方案：PBAT和PLA的多層複合技術創造了持久的保護環境。",
    p3Title: "3. 結構脆弱（易撕裂）",
    p3Desc: "袋子在運輸或零售貨架上容易破裂。",
    p3Sol: "解決方案：改進材料工程設計在保持可堆肥性的同時防止撕裂。",
    p4Title: "4. 材料成本高",
    p4Desc: "改用可堆肥包裝可能會增加預算。",
    p4Sol: "解決方案：供應鏈優化和合適尺寸設計可最大程度減少浪費和成本。",
    p5Title: "5. 認證混亂（BPI vs TUV）",
    p5Desc: "在美國各地應對區域可堆肥性標準非常複雜。",
    p5Sol: "解決方案：使用預先認證的材料（BPI、TUV）可確保合規性和消費者信任。",
    ryanTitle: "Ryan Wong 的工程筆記",
    ryanEntry: "記錄：ASTM D6400 與家庭可堆肥阻隔材料",
    ryanP1: "「許多美國品牌要求使用『家庭可堆肥』包裝，但同時需要 12 個月的保質期。現實呢？家庭可堆肥薄膜（如 NatureFlex）往往缺乏敏感食品所需的水分阻隔性。」",
    ryanP2: "「針對最近一個有機零食品牌，我們從家庭可堆肥轉向了經過 ASTM D6400 認證的工業可堆肥結構（牛皮紙/PLA）。這符合加州 AB 1201 標籤法，並達到了他們 12 個月的保質期要求。不要為了無法實現的生命終期場景而犧牲產品完整性。」",
    ryanAuthor: "— Ryan Wong，首席包裝工程師"
  }
}

const USACompostableHubPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.usaCompostableHub'
  const currentLang = i18n.language || 'en'
  const currentLangTranslations = localTranslations[currentLang as keyof typeof localTranslations] || localTranslations.en
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong><Link to="/" className="text-primary-600 hover:underline">{t('common.achievePack', 'Achieve Pack')}</Link> {t(`${p}.sections.overview.descStrong`)}</strong>{t(`${p}.sections.overview.descText`)}<strong>{t(`${p}.sections.overview.descStrongASTM`)}</strong>{t(`${p}.sections.overview.descTextMid`)}<strong>{t(`${p}.sections.overview.descStrongEN`)}</strong>{t(`${p}.sections.overview.descTextEnd`)}
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.whyTitle`)}</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>{t(`${p}.sections.overview.why1Strong`)}</strong>{t(`${p}.sections.overview.why1Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why2Strong`)}</strong>{t(`${p}.sections.overview.why2Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why3Strong`)}</strong>{t(`${p}.sections.overview.why3Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why4Strong`)}</strong>{t(`${p}.sections.overview.why4Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why5Strong`)}</strong>{t(`${p}.sections.overview.why5Text`)}</li>
            </ul>
          </div>
          
          <p className="mt-4">
            {t(`${p}.sections.overview.demandText`)}
          </p>
          
          {/* Inline Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp" 
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
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.materials.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-primary-200 rounded-lg p-4 bg-primary-50/50">
              <h4 className="font-semibold text-primary-800 mb-2">
                <Link to="/materials/industrial-compostable" className="hover:underline">{t(`${p}.sections.materials.card1Title`)}</Link>
              </h4>
              <p className="text-sm mb-2">{t(`${p}.sections.materials.card1Desc`)}</p>
              <ul className="text-xs space-y-1 text-primary-700">
                <li>• {t(`${p}.sections.materials.card1Item1`)}</li>
                <li>• {t(`${p}.sections.materials.card1Item2`)}</li>
                <li>• {t(`${p}.sections.materials.card1Item3`)}</li>
                <li>• {t(`${p}.sections.materials.card1Item4`)}</li>
              </ul>
              <Link to="/materials/industrial-compostable" className="text-xs text-primary-600 hover:underline font-semibold mt-2 inline-block">{t(`${p}.sections.materials.card1Link`)}</Link>
            </div>
            <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <h4 className="font-semibold text-emerald-800 mb-2">
                <Link to="/materials/home-compostable" className="hover:underline">{t(`${p}.sections.materials.card2Title`)}</Link>
              </h4>
              <p className="text-sm mb-2">{t(`${p}.sections.materials.card2Desc`)}</p>
              <ul className="text-xs space-y-1 text-emerald-700">
                <li>• {t(`${p}.sections.materials.card2Item1`)}</li>
                <li>• {t(`${p}.sections.materials.card2Item2`)}</li>
                <li>• {t(`${p}.sections.materials.card2Item3`)}</li>
                <li>• {t(`${p}.sections.materials.card2Item4`)}</li>
              </ul>
              <Link to="/materials/home-compostable" className="text-xs text-emerald-600 hover:underline font-semibold mt-2 inline-block">{t(`${p}.sections.materials.card2Link`)}</Link>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <strong>{t(`${p}.sections.materials.notSureStrong`)}</strong> <Link to="/blog/compostable-stand-up-pouch-guide-food-beverage" className="text-primary-600 hover:underline">{t(`${p}.sections.materials.notSureLink`)}</Link>
          </p>
          
          {/* Sustainability Guide Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/hub/a_sustainability_labeling_guide_7131825.webp" 
              alt={t(`${p}.sections.materials.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.materials.imgCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'ryan-wong-notebook',
      title: currentLangTranslations.ryanTitle,
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-primary-600 font-mono text-sm text-neutral-800">
          <p className="font-bold mb-2">{currentLangTranslations.ryanEntry}</p>
          <p className="mb-2">{currentLangTranslations.ryanP1}</p>
          <p className="mb-2">{currentLangTranslations.ryanP2}</p>
          <p className="italic text-neutral-600 mt-4">{currentLangTranslations.ryanAuthor}</p>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.certifications.intro`)}</p>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <span className="text-lg font-bold text-blue-600">ASTM</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.card1Title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.card1Desc`)}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <span className="text-lg font-bold text-green-600">BPI</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.card2Title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.card2Desc`)}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <span className="text-lg font-bold text-primary-600">EN</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.card3Title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.card3Desc`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'us-reality',
      title: t(`${p}.sections.usReality.title`),
      icon: <MapPin className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.usReality.intro`)}</p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              {t(`${p}.sections.usReality.amberTitle`)}
            </h4>
            <ul className="text-sm text-amber-700 space-y-2">
              <li>{t(`${p}.sections.usReality.amberItem1`)}</li>
              <li>{t(`${p}.sections.usReality.amberItem2`)}</li>
              <li>{t(`${p}.sections.usReality.amberItem3`)}</li>
              <li>{t(`${p}.sections.usReality.amberItem4`)}</li>
            </ul>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.usReality.greenTitle`)}</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>{t(`${p}.sections.usReality.greenItem1`)}</li>
              <li>{t(`${p}.sections.usReality.greenItem2`)}</li>
              <li>{t(`${p}.sections.usReality.greenItem3`)}</li>
              <li>{t(`${p}.sections.usReality.greenItem4`)}</li>
              <li>{t(`${p}.sections.usReality.greenItem5`)}</li>
            </ul>
          </div>
          
          <p className="text-sm mt-4">
            <strong>{t(`${p}.sections.usReality.alternativeStrong`)}</strong>{t(`${p}.sections.usReality.alternativeText`)}<Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">{t(`${p}.sections.usReality.alternativeLink`)}</Link>{t(`${p}.sections.usReality.alternativeTextEnd`)}
          </p>
          
          {/* Compliance Requirements Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/hub/a_label_compliance_requirements_0902238.webp" 
              alt={t(`${p}.sections.usReality.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.usReality.imgCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'state-regulations',
      title: t(`${p}.sections.stateRegulations.title`),
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.stateRegulations.intro`)}</p>
          
          <div className="space-y-3 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800">{t(`${p}.sections.stateRegulations.card1Title`)}</h4>
              <ul className="text-sm text-blue-700 mt-1 space-y-1">
                <li>{t(`${p}.sections.stateRegulations.card1Item1`)}</li>
                <li>{t(`${p}.sections.stateRegulations.card1Item2`)}</li>
                <li>{t(`${p}.sections.stateRegulations.card1Item3`)}</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-semibold text-emerald-800">{t(`${p}.sections.stateRegulations.card2Title`)}</h4>
              <ul className="text-sm text-emerald-700 mt-1 space-y-1">
                <li>{t(`${p}.sections.stateRegulations.card2Item1`)}</li>
                <li>{t(`${p}.sections.stateRegulations.card2Item2`)}</li>
                <li>{t(`${p}.sections.stateRegulations.card2Item3`)}</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-800">{t(`${p}.sections.stateRegulations.card3Title`)}</h4>
              <ul className="text-sm text-purple-700 mt-1 space-y-1">
                <li>{t(`${p}.sections.stateRegulations.card3Item1`)}</li>
                <li>{t(`${p}.sections.stateRegulations.card3Item2`)}</li>
                <li>{t(`${p}.sections.stateRegulations.card3Item3`)}</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-primary-50 rounded-lg">
            <p className="text-sm">
              <strong>{t(`${p}.sections.stateRegulations.needHelpStrong`)}</strong>{t(`${p}.sections.stateRegulations.needHelpText`)}<Link to="/usa/labeling-guide" className="text-primary-600 hover:underline font-semibold">{t(`${p}.sections.stateRegulations.needHelpLink`)}</Link>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'problems-solutions',
      title: currentLangTranslations.title,
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-1 gap-4">
            <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border border-red-100">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900">{currentLangTranslations.p1Title}</h4>
                <p className="text-sm text-red-700 mt-1">{currentLangTranslations.p1Desc}</p>
                <p className="text-sm font-semibold text-green-700 mt-2 flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {currentLangTranslations.p1Sol}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-orange-50 p-4 rounded-lg border border-orange-100">
              <Package className="h-6 w-6 text-orange-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-orange-900">{currentLangTranslations.p2Title}</h4>
                <p className="text-sm text-orange-700 mt-1">{currentLangTranslations.p2Desc}</p>
                <p className="text-sm font-semibold text-green-700 mt-2 flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {currentLangTranslations.p2Sol}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg border border-amber-100">
              <Target className="h-6 w-6 text-amber-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-900">{currentLangTranslations.p3Title}</h4>
                <p className="text-sm text-amber-700 mt-1">{currentLangTranslations.p3Desc}</p>
                <p className="text-sm font-semibold text-green-700 mt-2 flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {currentLangTranslations.p3Sol}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <Globe className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-900">{currentLangTranslations.p4Title}</h4>
                <p className="text-sm text-blue-700 mt-1">{currentLangTranslations.p4Desc}</p>
                <p className="text-sm font-semibold text-green-700 mt-2 flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {currentLangTranslations.p4Sol}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg border border-purple-100">
              <FileCheck className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-purple-900">{currentLangTranslations.p5Title}</h4>
                <p className="text-sm text-purple-700 mt-1">{currentLangTranslations.p5Desc}</p>
                <p className="text-sm font-semibold text-green-700 mt-2 flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {currentLangTranslations.p5Sol}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/knowledge/usa-compostable-packaging-pain-points.jpg" 
              alt={currentLangTranslations.title} 
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      )
    },
    {
      id: 'industries',
      title: t(`${p}.sections.industries.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.industries.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Link to="/usa/coffee-packaging" className="block bg-amber-50 p-4 rounded-lg border border-amber-200 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <Coffee className="h-6 w-6 text-amber-700" />
                <h4 className="font-semibold text-amber-800">{t(`${p}.sections.industries.card1Title`)}</h4>
              </div>
              <p className="text-sm text-amber-700">{t(`${p}.sections.industries.card1Desc`)}</p>
            </Link>
            <Link to="/usa/snacks-packaging" className="block bg-orange-50 p-4 rounded-lg border border-orange-200 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <Cookie className="h-6 w-6 text-orange-700" />
                <h4 className="font-semibold text-orange-800">{t(`${p}.sections.industries.card2Title`)}</h4>
              </div>
              <p className="text-sm text-orange-700">{t(`${p}.sections.industries.card2Desc`)}</p>
            </Link>
            <Link to="/industry/pet-food" className="block bg-blue-50 p-4 rounded-lg border border-blue-200 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <Package className="h-6 w-6 text-blue-700" />
                <h4 className="font-semibold text-blue-800">{t(`${p}.sections.industries.card3Title`)}</h4>
              </div>
              <p className="text-sm text-blue-700">{t(`${p}.sections.industries.card3Desc`)}</p>
            </Link>
            <Link to="/industry/supplements-powders" className="block bg-green-50 p-4 rounded-lg border border-green-200 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <Leaf className="h-6 w-6 text-green-700" />
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.industries.card4Title`)}</h4>
              </div>
              <p className="text-sm text-green-700">{t(`${p}.sections.industries.card4Desc`)}</p>
            </Link>
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
            <li><strong>{t(`${p}.sections.aiSearch.factor4Strong`)}</strong> <Link to="/store" className="text-primary-600 hover:underline">{t(`${p}.sections.aiSearch.factor4Link`)}</Link></li>
            <li><strong>{t(`${p}.sections.aiSearch.factor5Strong`)}</strong>{t(`${p}.sections.aiSearch.factor5Text`)}</li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.aiSearch.aiTitle`)}</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>{t(`${p}.sections.aiSearch.aiItem1`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem2`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem3`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem4`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem5`)}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.scenarioTrigger.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
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
      id: 'risk-hedge',
      title: t(`${p}.sections.riskHedge.title`),
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q1`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a1`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q2`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a2`)}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q3`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a3`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q4`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a4`)}</p>
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
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t(`${p}.sections.decisionCta.heading`)}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.card1Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.card1Desc`)}</p>
              <button onClick={openCalendly} className="w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition cursor-pointer">
                {t(`${p}.sections.decisionCta.card1Button`)}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.card2Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.card2Desc`)}</p>
              <a href="mailto:ryan@achievepack.com?subject=USA Compostable Packaging Quote" className="block w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition">
                {t(`${p}.sections.decisionCta.card2Button`)}
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.card3Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.card3Desc`)}</p>
              <Link to="/contact" className="block w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition">
                {t(`${p}.sections.decisionCta.card3Button`)}
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = t(`${p}.faqs`, { returnObjects: true }) as { question: string; answer: string }[]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.0.title`), url: "/store", description: t(`${p}.relatedLinks.0.description`) },
    { title: t(`${p}.relatedLinks.1.title`), url: "/materials/home-compostable", description: t(`${p}.relatedLinks.1.description`) },
    { title: t(`${p}.relatedLinks.2.title`), url: "/materials/industrial-compostable", description: t(`${p}.relatedLinks.2.description`) },
    { title: t(`${p}.relatedLinks.3.title`), url: "/usa/labeling-guide", description: t(`${p}.relatedLinks.3.description`) },
    { title: t(`${p}.relatedLinks.4.title`), url: "/blog/sustainable-packaging-supplier-analysis", description: t(`${p}.relatedLinks.4.description`) }
  ]

  return (
    <SEOPageLayout heroBgColor="#14532d"
      title={t(`${p}.seo.title`)}
      description={t(`${p}.seo.description`)}
      keywords={t(`${p}.seo.keywords`, { returnObjects: true }) as string[]}
      canonicalUrl="https://achievepack.com/usa/compostable-packaging"
      heroTitle={t(`${p}.seo.heroTitle`)}
      heroSubtitle={t(`${p}.seo.heroSubtitle`)}
      heroImage="/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp"
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

export default USACompostableHubPage
