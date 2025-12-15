import React from 'react'
import { Recycle, Leaf, Shield, CheckCircle, Thermometer } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const RecyclableMonoPPPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.recyclableMonoPP'
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
          <div className="bg-purple-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.overview.keyBenefits`)}</h4>
            <ul className="space-y-1 text-sm text-purple-700">
              {(t(`${p}.sections.overview.benefits`, { returnObjects: true }) as string[]).map((b, i) => <li key={i}>✓ {b}</li>)}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'vs-pe',
      title: t(`${p}.sections.vsPe.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.vsPe.choosePP`)}</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                {(t(`${p}.sections.vsPe.ppReasons`, { returnObjects: true }) as string[]).map((r, i) => <li key={i}>• {r}</li>)}
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.vsPe.choosePE`)}</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                {(t(`${p}.sections.vsPe.peReasons`, { returnObjects: true }) as string[]).map((r, i) => <li key={i}>• {r}</li>)}
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
          <p>{t(`${p}.sections.applications.intro`)}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                <span className="text-sm text-purple-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.sections.specifications.title`),
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              {(t(`${p}.sections.specifications.specs`, { returnObjects: true }) as string[]).map((s, i) => <li key={i}>✓ {s}</li>)}
            </ul>
          </div>
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

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/recyclable-mono-pe", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/packaging/stand-up-pouches", description: t(`${p}.relatedLinks.link3.description`) }
  ]

  return (
    <SEOPageLayout
      title={t('seoPages.pages.recyclableMonoPP.title')}
      description="Recyclable mono-PP flexible packaging with high heat resistance and clarity. Hot-fill and microwave safe. Single-material for PP recycling streams. MOQ 500."
      keywords={[
        'mono-PP pouch',
        'recyclable polypropylene',
        'PP recyclable packaging',
        'hot fill pouch',
        'microwave safe pouch',
        'single material PP',
        'recyclable flexible packaging'
      ]}
      canonicalUrl="https://achievepack.com/materials/recyclable-mono-pp"
      heroTitle={t('seoPages.pages.recyclableMonoPP.heroTitle')}
      heroSubtitle={t('seoPages.pages.recyclableMonoPP.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_mono_recyclable_certification_compliance_7572715.webp"
      heroImageAlt="Recyclable mono-PP flexible packaging"
      introSummary={t('seoPages.pages.recyclableMonoPP.introSummary')}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.ctaTitle`)}
      ctaDescription={t(`${p}.ctaDescription`)}
      ctaButtonText={t(`${p}.ctaButtonText`)}
    />
  )
}

export default RecyclableMonoPPPage
