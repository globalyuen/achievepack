import React from 'react'
import { Recycle, Leaf, Shield, CheckCircle, Factory } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const RecyclableMonoPEPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.recyclableMonoPE'
  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong>
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.overview.keyBenefits`)}</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              {(t(`${p}.sections.overview.benefits`, { returnObjects: true }) as string[]).map((b, i) => <li key={i}>✓ {b}</li>)}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'how-it-works',
      title: t(`${p}.sections.howItWorks.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.howItWorks.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.howItWorks.evoh.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.evoh.desc`)}</p>
            </div>
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.howItWorks.pePe.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.pePe.desc`)}</p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.howItWorks.coatings.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.coatings.desc`)}</p>
            </div>
            <div className="border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.howItWorks.oriented.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.oriented.desc`)}</p>
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
          <p>{t(`${p}.sections.applications.intro`)}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm text-blue-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'recycling',
      title: t(`${p}.sections.recycling.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.recycling.whereTitle`)}</h4>
            <ul className="space-y-2 text-sm">
              {(t(`${p}.sections.recycling.options`, { returnObjects: true }) as string[]).map((opt, i) => <li key={i}>✓ {opt}</li>)}
            </ul>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            {t(`${p}.sections.recycling.note`)}
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ]

  const tables = [
    {
      title: t(`${p}.table.title`),
      data: {
        headers: t(`${p}.table.headers`, { returnObjects: true }) as string[],
        rows: t(`${p}.table.rows`, { returnObjects: true }) as string[][]
      }
    }
  ]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/recyclable-mono-pp", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/bio-pe", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link3.description`) }
  ]

  return (
    <SEOPageLayout
      title="Recyclable Mono-PE Pouches | Single-Material Polyethylene Packaging"
      description="Recyclable mono-PE flexible packaging made from single-material polyethylene. Accepted in PE recycling streams. Sustainable alternative to multi-layer laminates. MOQ 500."
      keywords={[
        'mono-PE pouch',
        'recyclable pouch',
        'single material packaging',
        'PE recyclable',
        'sustainable flexible packaging',
        'mono material pouch',
        'recyclable stand up pouch',
        'polyethylene pouch'
      ]}
      canonicalUrl="https://achievepack.com/materials/recyclable-mono-pe"
      heroTitle={t('seoPages.pages.recyclableMonoPE.heroTitle')}
      heroSubtitle={t('seoPages.pages.recyclableMonoPE.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_achievepack_mono_kitchen_8539724.webp"
      heroImageAlt="Recyclable mono-PE flexible packaging"
      introSummary={t('seoPages.pages.recyclableMonoPE.introSummary')}
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

export default RecyclableMonoPEPage
