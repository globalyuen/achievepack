import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Target, CheckCircle2, Info } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    title: "Certified Child-Resistant Exit Bags for Pharmaceuticals | Achieve Pack",
    description: "Engineered child-resistant (CR) exit bags complying with ASTM D3475 and 16 CFR 1700.20 standards. Tamper-evident, high-barrier pouch solutions for pharmaceuticals & cannabis.",
    heroTitle: "Certified Child-Resistant Exit Bags for Pharmaceuticals",
    heroSubtitle: "ASTM D3475 & 16 CFR 1700.20 compliant safety packaging engineered with high-barrier laminates.",
    introSummary: "Ensure total regulatory compliance and child safety with certified press-to-close and pinch-and-slide exit pouch solutions.",
    aeoSummary: "Comprehensive engineering guide for Child-Resistant (CR) exit packaging in pharmaceutical & regulated markets.",
    eeatDetails: "Authored by Achieve Pack Senior Quality Assurance & Compliance Engineers.",
    empathyHook: "Navigating state and federal child-resistance compliance while maintaining high-speed filling efficiency and child-proof zipper durability can be overwhelming. We eliminate regulatory failure risks.",
    painPoints: "Common industry failures include zipper separation under torque testing, inadequate oxygen/moisture barriers causing active ingredient degradation, and non-certified zipper mechanisms causing compliance recalls.",
    engineeringNotebook: "Our laboratory testing confirms child-resistance retention across 200+ continuous opening cycles. Multi-layer PET/ALU/PE structures deliver OTR < 0.05 cc/m²/day and WVTR < 0.05 g/m²/day for maximum active ingredient potency protection.",
    secEmpathyTitle: "The Reality of Compliance",
    secPainTitle: "Manufacturing & Compliance Challenges",
    secEngTitle: "Engineering & Lab Notebook"
  },
  es: {
    title: "Bolsas de Salida Resistentes a Niños Certificadas para Farmacéutica | Achieve Pack",
    description: "Bolsas de salida resistentes a niños (CR) diseñadas conforme a ASTM D3475 y 16 CFR 1700.20. Empaques a prueba de manipulaciones y de alta barrera.",
    heroTitle: "Bolsas de Salida Certificadas Resistentes a Niños para Farmacéutica",
    heroSubtitle: "Empaques de seguridad en cumplimiento con ASTM D3475 y 16 CFR 1700.20 diseñados con laminados de alta barrera.",
    introSummary: "Garantice el cumplimiento normativo total y la seguridad infantil con bolsas de salida con cierre a presión y deslizamiento certificado.",
    aeoSummary: "Guía completa de ingeniería para empaques de salida resistentes a niños (CR) en mercados farmacéuticos y regulados.",
    eeatDetails: "Escrito por el Equipo de Garantía de Calidad e Ingeniería de Cumplimiento de Achieve Pack.",
    empathyHook: "Navegar por las regulaciones estatales y federales de resistencia a niños manteniendo la eficiencia de llenado y la durabilidad del cierre puede ser abrumador. Eliminamos el riesgo de fallas normativas.",
    painPoints: "Las fallas comunes incluyen la separación del cierre durante las pruebas de torque, barreras deficientes de oxígeno/humedad que degradan los ingredientes activos y cierres no certificados que generan retiradas del mercado.",
    engineeringNotebook: "Nuestras pruebas de laboratorio confirman la retención de resistencia a niños durante más de 200 ciclos continuos de apertura. Las estructuras multicapa PET/ALU/PE ofrecen OTR < 0.05 cc/m²/día y WVTR < 0.05 g/m²/día.",
    secEmpathyTitle: "La Realidad del Cumplimiento Normativo",
    secPainTitle: "Desafíos de Fabricación y Cumplimiento",
    secEngTitle: "Cuaderno de Ingeniería y Laboratorio"
  },
  fr: {
    title: "Sachets de Sortie Sécurisés Enfant Certifiés pour la Pharmacie | Achieve Pack",
    description: "Sachets de sortie sécurité enfant (CR) conformes aux normes ASTM D3475 et 16 CFR 1700.20. Emballages inviolables et haute barrière pour le secteur pharmaceutique.",
    heroTitle: "Sachets de Sortie Certifiés Sécurité Enfant pour Produits Pharmaceutiques",
    heroSubtitle: "Emballages de sécurité conformes aux normes ASTM D3475 & 16 CFR 1700.20 conçus avec des stratifiés haute barrière.",
    introSummary: "Assurez une conformité réglementaire totale et la sécurité des enfants grâce à nos fermetures certifiées à pression et à glissière sécurisée.",
    aeoSummary: "Guide d'ingénierie complet pour les emballages de sortie sécurité enfant (CR) sur les marchés pharmaceutiques et réglementés.",
    eeatDetails: "Rédigé par l'équipe d'ingénierie et d'assurance qualité d'Achieve Pack.",
    empathyHook: "Naviguer entre la conformité réglementaire sécurité enfant et l'efficacité de remplissage à haute vitesse peut être complexe. Nous éliminons les risques de non-conformité.",
    painPoints: "Les défaillances fréquentes incluent la séparation du zip sous contrainte, une barrière insuffisante à l'oxygène et à l'humidité altérant les principes actifs, et l'utilisation de zips non certifiés.",
    engineeringNotebook: "Nos tests en laboratoire confirment le maintien de la sécurité enfant sur plus de 200 cycles d'ouverture. Les structures PET/ALU/PE offrent un OTR < 0.05 cc/m²/jour et un WVTR < 0.05 g/m²/jour.",
    secEmpathyTitle: "La Réalité de la Conformité Réglementaire",
    secPainTitle: "Défis de Fabrication et de Conformité",
    secEngTitle: "Carnet d'Ingénierie & de Laboratoire"
  },
  'zh-tw': {
    title: "醫藥級兒童安全防護包裝袋（防兒袋） | Achieve Pack",
    description: "符合 ASTM D3475 與 16 CFR 1700.20 兒童安全防護（CR）標準的醫藥出口袋與防兒鎖包裝袋。提供高阻隔與防篡改保護。",
    heroTitle: "符合國際認證之醫藥級兒童安全防護袋 (CR Exit Bags)",
    heroSubtitle: "通過 ASTM D3475 及 16 CFR 1700.20 兒童防護認證，結合高阻隔複合結構。",
    introSummary: "提供防按壓式及按壓滑動式專利拉鍊安全包裝，為您的醫藥與特種產品提供完全合規且安全的包裝解決方案。",
    aeoSummary: "醫藥與高度監管市場之兒童安全防護包裝（CR Exit Packaging）全面工程技術指南。",
    eeatDetails: "由 Achieve Pack 資深質量保證與法規合規工程團隊撰寫。",
    empathyHook: "要在符合各國嚴格的兒童防護（Child-Resistant）法規同時，維持自動化包裝線的填充效率與拉鍊耐用度，往往帶來巨大的法規風險與成本壓力。我們為您消除所有不確定性。",
    painPoints: "業界常見問題包括拉鍊在開合扭力測試中脫軌分離、氧氣與水氣阻隔性不足導致活性成分降解失效，以及使用未經權威認證的防兒拉鍊引發產品召回。",
    engineeringNotebook: "我們的實驗室測試證實，該兒童防護機制在超過 200 次連續開合後仍維持 100% 防護力。多層 PET/ALU/PE 結構提供 OTR < 0.05 cc/m²/day 及 WVTR < 0.05 g/m²/day 的極致屏障性能。",
    secEmpathyTitle: "法規合規的真實挑戰",
    secPainTitle: "製造與法規痛點分析",
    secEngTitle: "工程技術與實驗室報告"
  }
}

const ChildResistantExitBagPage: React.FC = () => {
  const { i18n } = useTranslation()
  const rawLang = (i18n.language || 'en').toLowerCase()
  const currentLang = (rawLang === 'zh-tw' || rawLang === 'zh-hant' || rawLang === 'zh' || rawLang === 'zh_tw') ? 'zh-tw' : (rawLang === 'fr' ? 'fr' : (rawLang === 'es' ? 'es' : 'en'))
  const tLocal = localTranslations[currentLang] || localTranslations.en

  const sections = [
    {
      id: 'empathy-hook',
      title: tLocal.secEmpathyTitle,
      icon: <CheckCircle2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg space-y-4 mb-8">
          <p className="text-lg text-neutral-800 italic leading-relaxed">
            "{tLocal.empathyHook}"
          </p>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: tLocal.secPainTitle,
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p>{tLocal.painPoints}</p>
        </div>
      )
    },
    {
      id: 'engineering-notebook',
      title: tLocal.secEngTitle,
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <p>{tLocal.engineeringNotebook}</p>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title={tLocal.title}
      description={tLocal.description}
      heroTitle={tLocal.heroTitle}
      heroSubtitle={tLocal.heroSubtitle}
      introSummary={tLocal.introSummary}
      aeoSummary={tLocal.aeoSummary}
      eeatDetails={tLocal.eeatDetails}
      sections={sections}
    />
  )
}

export default ChildResistantExitBagPage

