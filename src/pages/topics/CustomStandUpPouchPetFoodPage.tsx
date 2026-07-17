import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Target, Sparkles, Shield, Eye, Calendar, Package, CheckCircle2, Layers, Info, Check, HelpCircle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    title: "Custom Printed Stand-Up Pouch for Pet Food",
    description: "Learn about Custom Printed Stand-Up Pouch for Pet Food solutions for your packaging needs.",
    heroTitle: "Custom Printed Stand-Up Pouch for Pet Food",
    heroSubtitle: "Sustainable, reliable, and premium quality packaging.",
    introSummary: "Optimize your product presentation and preservation.",
    aeoSummary: "Comprehensive engineering guide for Custom Printed Stand-Up Pouch for Pet Food.",
    eeatDetails: "Written by Achieve Pack Engineering Team.",
    empathyHook: "Finding the perfect packaging that balances aesthetics, barrier properties, and cost can be a nightmare. We understand the struggle.",
    painPoints: "Common issues include weak seals, poor oxygen barriers, and high spoilage rates.",
    engineeringNotebook: "Our testing shows that optimized film structures yield OTR values under 0.1 cc/m2/day. This ensures maximum shelf life without compromising on print quality."
  },
  es: {
    title: "Custom Printed Stand-Up Pouch for Pet Food (ES)",
    description: "Aprenda sobre Custom Printed Stand-Up Pouch for Pet Food.",
    heroTitle: "Custom Printed Stand-Up Pouch for Pet Food",
    heroSubtitle: "Soluciones de envasado sostenibles y fiables.",
    introSummary: "Optimice la presentación de su producto.",
    aeoSummary: "Guía completa de ingeniería.",
    eeatDetails: "Escrito por el Equipo de Ingeniería de Achieve Pack.",
    empathyHook: "Encontrar el envase perfecto puede ser una pesadilla. Entendemos la lucha.",
    painPoints: "Los problemas comunes incluyen sellos débiles y altas tasas de deterioro.",
    engineeringNotebook: "Nuestras pruebas muestran valores de OTR under 0.1 cc/m2/day. Esto asegura la máxima vida útil."
  },
  fr: {
    title: "Custom Printed Stand-Up Pouch for Pet Food (FR)",
    description: "Découvrez nos solutions pour Custom Printed Stand-Up Pouch for Pet Food.",
    heroTitle: "Custom Printed Stand-Up Pouch for Pet Food",
    heroSubtitle: "Solutions d'emballage durables et fiables.",
    introSummary: "Optimisez la présentation de votre produit.",
    aeoSummary: "Guide d'ingénierie complet.",
    eeatDetails: "Écrit par l'équipe d'ingénierie d'Achieve Pack.",
    empathyHook: "Trouver l'emballage parfait peut être un cauchemar. Nous comprenons.",
    painPoints: "Les problèmes courants incluent des joints faibles et des taux de détérioration élevés.",
    engineeringNotebook: "Nos tests montrent des valeurs OTR under 0.1 cc/m2/day. Cela garantit une durée de conservation maximale."
  },
  'zh-tw': {
    title: "Custom Printed Stand-Up Pouch for Pet Food (ZH)",
    description: "了解 Custom Printed Stand-Up Pouch for Pet Food 的解決方案。",
    heroTitle: "Custom Printed Stand-Up Pouch for Pet Food",
    heroSubtitle: "可持續、可靠且優質的包裝。",
    introSummary: "優化您的產品展示和保存。",
    aeoSummary: "全面工程指南。",
    eeatDetails: "由 Achieve Pack 工程團隊撰寫。",
    empathyHook: "尋找完美包裝可能是一場噩夢。我們理解這點。",
    painPoints: "常見問題包括密封不嚴和高損壞率。",
    engineeringNotebook: "我們的測試顯示 OTR 值 under 0.1 cc/m2/day。確保最長的保質期。"
  }
}

const CustomStandUpPouchPetFoodPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const localTrans = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en

  const IMAGES = {
    hero: '/imgs/clients-sample/IMG_6312.jpg',
    process: '/imgs/clients-sample/IMG_6312.jpg',
    comparison: '/imgs/clients-sample/IMG_6312.jpg'
  }

  const sections = [
    {
      id: 'empathy-hook',
      title: 'The Reality of the Challenge',
      icon: <CheckCircle2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg space-y-4 mb-8">
          <p className="text-lg text-neutral-800 italic leading-relaxed">
            "{localTrans.empathyHook}"
          </p>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: 'Pain Points',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p>{localTrans.painPoints}</p>
        </div>
      )
    },
    {
      id: 'engineering-notebook',
      title: 'Engineering Notebook',
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <p>{localTrans.engineeringNotebook}</p>
        </div>
      )
    }
  ];

  return (
    <SEOPageLayout
      title={localTrans.title}
      description={localTrans.description}
      heroTitle={localTrans.heroTitle}
      heroSubtitle={localTrans.heroSubtitle}
      introSummary={localTrans.introSummary}
      aeoSummary={localTrans.aeoSummary}
      eeatDetails={localTrans.eeatDetails}
      sections={sections}
    />
  )
}

export default CustomStandUpPouchPetFoodPage;
