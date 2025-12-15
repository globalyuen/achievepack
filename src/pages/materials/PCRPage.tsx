import React from 'react'
import { Recycle, CheckCircle, Shield, Award, Factory } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const PCRPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.pcr'
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
          <div className="bg-emerald-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-emerald-800 mb-2">{t(`${p}.sections.overview.keyBenefits`)}</h4>
            <ul className="space-y-1 text-sm text-emerald-700">
              {(t(`${p}.sections.overview.benefits`, { returnObjects: true }) as string[]).map((b, i) => <li key={i}>✓ {b}</li>)}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'content-levels',
      title: t(`${p}.sections.contentLevels.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.contentLevels.intro`)}</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="border border-emerald-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">30%</div>
              <h4 className="font-semibold text-emerald-800 mb-1">{t(`${p}.sections.contentLevels.level30.title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.contentLevels.level30.desc`)}</p>
            </div>
            <div className="border border-emerald-300 rounded-lg p-4 text-center bg-emerald-50">
              <div className="text-3xl font-bold text-emerald-600 mb-2">50%</div>
              <h4 className="font-semibold text-emerald-800 mb-1">{t(`${p}.sections.contentLevels.level50.title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.contentLevels.level50.desc`)}</p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
              <h4 className="font-semibold text-emerald-800 mb-1">{t(`${p}.sections.contentLevels.level100.title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.contentLevels.level100.desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'food-safety',
      title: t(`${p}.sections.foodSafety.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.foodSafety.intro`)}</p>
          
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              {(t(`${p}.sections.foodSafety.items`, { returnObjects: true }) as string[]).map((item, i) => <li key={i}>✓ {item}</li>)}
            </ul>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            {t(`${p}.sections.foodSafety.note`)}
          </p>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.certifications.grs.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.certifications.grs.desc`)}</p>
            </div>
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.certifications.scs.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.certifications.scs.desc`)}</p>
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
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-emerald-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-emerald-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) },
    { question: t(`${p}.faq.q5`), answer: t(`${p}.faq.a5`) }
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
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/recyclable-mono-pe", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/bio-pe", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link3.description`) }
  ]

  return (
    <SEOPageLayout
      title="PCR Packaging | Post-Consumer Recycled Pouches | Circular Economy"
      description="PCR (Post-Consumer Recycled) flexible packaging with 30-50% recycled content. GRS certified, FDA approved. Reduce virgin plastic use. MOQ 500 units."
      keywords={[
        'PCR packaging',
        'post-consumer recycled',
        'recycled content pouch',
        'GRS certified',
        'circular economy packaging',
        'recycled plastic packaging',
        'sustainable packaging',
        'recycled pouches'
      ]}
      canonicalUrl="https://achievepack.com/materials/pcr"
      heroTitle={t('seoPages.pages.pcr.heroTitle')}
      heroSubtitle={t('seoPages.pages.pcr.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_achievepack_pcr_office_8175988.webp"
      heroImageAlt="PCR post-consumer recycled packaging"
      introSummary={t('seoPages.pages.pcr.introSummary')}
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

export default PCRPage
