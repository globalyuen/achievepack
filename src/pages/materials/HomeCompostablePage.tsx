import React from 'react'
import { Home, Leaf, CheckCircle, Clock, Award } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const HomeCompostablePage: React.FC = () => {
  const { t } = useTranslation()
  
  const p = 'seoPages.pages.homeCompostable'
  
  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Home className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong>
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">{t(`${p}.sections.overview.whyChoose`)}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t(`${p}.sections.overview.benefit1`)}</li>
            <li>{t(`${p}.sections.overview.benefit2`)}</li>
            <li>{t(`${p}.sections.overview.benefit3`)}</li>
            <li>{t(`${p}.sections.overview.benefit4`)}</li>
            <li>{t(`${p}.sections.overview.benefit5`)}</li>
          </ul>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.certifications.okHome.title`)}</h4>
              <p className="text-sm text-green-700 mb-2">{t(`${p}.sections.certifications.okHome.subtitle`)}</p>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.certifications.okHome.feature1`)}</li>
                <li>• {t(`${p}.sections.certifications.okHome.feature2`)}</li>
                <li>• {t(`${p}.sections.certifications.okHome.feature3`)}</li>
                <li>• {t(`${p}.sections.certifications.okHome.feature4`)}</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.certifications.as5810.title`)}</h4>
              <p className="text-sm text-blue-700 mb-2">{t(`${p}.sections.certifications.as5810.subtitle`)}</p>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.certifications.as5810.feature1`)}</li>
                <li>• {t(`${p}.sections.certifications.as5810.feature2`)}</li>
                <li>• {t(`${p}.sections.certifications.as5810.feature3`)}</li>
                <li>• {t(`${p}.sections.certifications.as5810.feature4`)}</li>
              </ul>
            </div>
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
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{t(`${p}.sections.materials.kraftPla.title`)}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• {t(`${p}.sections.materials.kraftPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature3`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature4`)}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{t(`${p}.sections.materials.pbatPla.title`)}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• {t(`${p}.sections.materials.pbatPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature3`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature4`)}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{t(`${p}.sections.materials.cellulose.title`)}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• {t(`${p}.sections.materials.cellulose.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.cellulose.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.cellulose.feature3`)}</li>
                <li>• {t(`${p}.sections.materials.cellulose.feature4`)}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{t(`${p}.sections.materials.paper.title`)}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• {t(`${p}.sections.materials.paper.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.paper.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.paper.feature3`)}</li>
                <li>• {t(`${p}.sections.materials.paper.feature4`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'timeline',
      title: t(`${p}.sections.timeline.title`),
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.timeline.intro`)}</p>
          
          <div className="bg-gradient-to-r from-green-50 to-primary-50 p-4 rounded-lg mt-4">
            <div className="grid grid-cols-5 gap-2 text-center text-sm">
              <div className="p-2">
                <div className="text-2xl mb-1">📦</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month1`)}</div>
                <div className="text-xs text-neutral-600">{t(`${p}.sections.timeline.month1Desc`)}</div>
              </div>
              <div className="p-2">
                <div className="text-2xl mb-1">💧</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month2`)}</div>
                <div className="text-xs text-neutral-600">{t(`${p}.sections.timeline.month2Desc`)}</div>
              </div>
              <div className="p-2">
                <div className="text-2xl mb-1">🍂</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month3`)}</div>
                <div className="text-xs text-neutral-600">{t(`${p}.sections.timeline.month3Desc`)}</div>
              </div>
              <div className="p-2">
                <div className="text-2xl mb-1">🌱</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month4`)}</div>
                <div className="text-xs text-neutral-600">{t(`${p}.sections.timeline.month4Desc`)}</div>
              </div>
              <div className="p-2">
                <div className="text-2xl mb-1">🌍</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month5`)}</div>
                <div className="text-xs text-neutral-600">{t(`${p}.sections.timeline.month5Desc`)}</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            {t(`${p}.sections.timeline.note`)}
          </p>
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
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{item}</span>
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
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/industrial-compostable", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/industry/coffee-tea", description: t(`${p}.relatedLinks.link3.description`) }
  ]

  return (
    <SEOPageLayout
      title={t(`${p}.title`)}
      description={t(`${p}.introSummary`)}
      keywords={['home compostable packaging', 'backyard compostable', 'OK Compost HOME', 'AS 5810', 'compostable pouches', 'biodegradable packaging']}
      canonicalUrl="https://achievepack.com/materials/home-compostable"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/seo-photos/a_achievepack_home_compostable_balcony_9883994.webp"
      heroImageAlt="Home compostable packaging in garden compost"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.ctaTitle`)}
      ctaDescription={t(`${p}.ctaDescription`)}
    />
  )
}

export default HomeCompostablePage
