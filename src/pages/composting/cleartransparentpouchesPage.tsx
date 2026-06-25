import React from 'react'
import { useTranslation } from 'react-i18next'
import { Leaf, Beaker, Zap, Layers, BookOpen, MessageCircle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'

const CleartransparentpouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.clearTransparentPouches'

  const getTranslationArray = <T = string,>(key: string): T[] => {
    const val = t(key, { returnObjects: true })
    return Array.isArray(val) ? (val as T[]) : []
  }

  const sections = [
    {
      id: 'mockup',
      title: 'Packaging Pouch Showcase',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600">Click the product mockup below to enlarge:</p>
          <div className="flex justify-center">
            <ClickableImage 
              src="/imgs/illustrated/a_compostable_v3_9254998.webp" 
              alt={t(`${p}.title`)} 
              className="max-w-full md:max-w-xl rounded-lg shadow-lg border border-neutral-200 cursor-pointer hover:shadow-xl transition"
              caption={t(`${p}.title`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'detail1',
      title: t(`${p}.sections.detail1.title`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p>{t(`${p}.sections.detail1.desc`)}</p>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.sections.specifications.title`),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p>{t(`${p}.sections.specifications.desc`)}</p>
        </div>
      )
    },
    {
      id: 'qa',
      title: t(`${p}.sections.qa.title`),
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p className="italic bg-neutral-50 border-l-4 border-primary-500 p-4 rounded-r-lg font-mono text-sm text-neutral-800">
            {t(`${p}.sections.qa.desc`)}
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    { question: t(`${p}.faqs.q1`), answer: t(`${p}.faqs.a1`) },
    { question: t(`${p}.faqs.q2`), answer: t(`${p}.faqs.a2`) },
    { question: t(`${p}.faqs.q3`), answer: t(`${p}.faqs.a3`) }
  ]

  const tables = [
    {
      title: t(`${p}.table.title`),
      data: {
        headers: getTranslationArray(`${p}.table.headers`),
        rows: getTranslationArray<string[]>(`${p}.table.rows`)
      }
    }
  ]

  const relatedLinks = [
    { title: "Compostable Packaging", url: "/materials/compostable", description: "Certified EN 13432 compostable bags for organic brands" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "100% PE bags recyclable in standard streams" },
    { title: "Snack & Food Packaging", url: "/industry/snacks-food", description: "High barrier packaging solutions for retail foods" }
  ]

  return (
    <SEOPageLayout
      heroBgColor="#1e3a8a"
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={[
        'custom packaging',
        'flexible packaging pouches',
        'sustainable bags',
        'eco-friendly packaging',
        'low MOQ printing'
      ]}
      canonicalUrl="https://achievepack.com/clear-transparent-pouches"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/illustrated/a_compostable_v3_9254998.webp"
      heroImageAlt={t(`${p}.title`)}
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.ctaTitle`)}
      ctaDescription={t(`${p}.ctaDescription`)}
      ctaButtonText={t(`${p}.ctaButtonText`)}
    />
  )
}

export default CleartransparentpouchesPage
