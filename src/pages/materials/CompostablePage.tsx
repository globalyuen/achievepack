import React from 'react'
import { Leaf, Shield, Award, CheckCircle, Globe, Recycle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const CompostablePage: React.FC = () => {
  const { t } = useTranslation()
  
  // Translation key prefix
  const p = 'seoPages.pages.compostable'
  
  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong>
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.keyFacts`)}</h4>
            <ul className="space-y-1 text-sm">
              <li>• {t(`${p}.sections.overview.fact1`)}</li>
              <li>• {t(`${p}.sections.overview.fact2`)}</li>
              <li>• {t(`${p}.sections.overview.fact3`)}</li>
              <li>• {t(`${p}.sections.overview.fact4`)}</li>
              <li>• {t(`${p}.sections.overview.fact5`)}</li>
            </ul>
          </div>
          
          <p className="mt-4">
            {t(`${p}.sections.overview.marketInfo`)}
          </p>
        </div>
      )
    },
    {
      id: 'materials',
      title: t(`${p}.sections.materials.title`),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.materials.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-primary-200 rounded-lg p-4 bg-primary-50/50">
              <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.materials.kraftPla.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.kraftPla.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-primary-700">
                <li>• {t(`${p}.sections.materials.kraftPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature3`)}</li>
              </ul>
            </div>
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.materials.whiteKraftPla.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.whiteKraftPla.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-amber-700">
                <li>• {t(`${p}.sections.materials.whiteKraftPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.whiteKraftPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.whiteKraftPla.feature3`)}</li>
              </ul>
            </div>
            <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <h4 className="font-semibold text-emerald-800 mb-2">{t(`${p}.sections.materials.natureFlex.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.natureFlex.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-emerald-700">
                <li>• {t(`${p}.sections.materials.natureFlex.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.natureFlex.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.natureFlex.feature3`)}</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.materials.pbatPla.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.pbatPla.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-blue-700">
                <li>• {t(`${p}.sections.materials.pbatPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature3`)}</li>
              </ul>
            </div>
          </div>
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
                <span className="text-2xl font-bold text-primary-600">{t(`${p}.sections.certifications.eu.label`)}</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.eu.title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.eu.desc`)}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">{t(`${p}.sections.certifications.us.label`)}</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.us.title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.us.desc`)}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <span className="text-2xl font-bold text-emerald-600">{t(`${p}.sections.certifications.au.label`)}</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.au.title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.au.desc`)}</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            {t(`${p}.sections.certifications.note`)}
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
          <p>{t(`${p}.sections.applications.intro`)}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm text-primary-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'disposal',
      title: t(`${p}.sections.disposal.title`),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.disposal.intro`)}</p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.disposal.commercialVsHome`)}</h4>
            <p className="text-sm text-amber-700">
              {t(`${p}.sections.disposal.commercialVsHomeDesc`)}
            </p>
          </div>
          
          <div className="mt-4">
            <h4 className="font-semibold mb-2">{t(`${p}.sections.disposal.instructionsTitle`)}</h4>
            <ol className="list-decimal pl-6 space-y-2 text-sm">
              <li>{t(`${p}.sections.disposal.instruction1`)}</li>
              <li>{t(`${p}.sections.disposal.instruction2`)}</li>
              <li>{t(`${p}.sections.disposal.instruction3`)}</li>
              <li>{t(`${p}.sections.disposal.instruction4`)}</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'limitations',
      title: t(`${p}.sections.limitations.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.limitations.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.limitations.bestFor`)}</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>✓ {t(`${p}.sections.limitations.bestFor1`)}</li>
                <li>✓ {t(`${p}.sections.limitations.bestFor2`)}</li>
                <li>✓ {t(`${p}.sections.limitations.bestFor3`)}</li>
                <li>✓ {t(`${p}.sections.limitations.bestFor4`)}</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">{t(`${p}.sections.limitations.considerAlternatives`)}</h4>
              <ul className="text-sm space-y-1 text-red-700">
                <li>• {t(`${p}.sections.limitations.alt1`)}</li>
                <li>• {t(`${p}.sections.limitations.alt2`)}</li>
                <li>• {t(`${p}.sections.limitations.alt3`)}</li>
                <li>• {t(`${p}.sections.limitations.alt4`)}</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            {t(`${p}.sections.limitations.note`)}
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.faq.q1`),
      answer: t(`${p}.faq.a1`)
    },
    {
      question: t(`${p}.faq.q2`),
      answer: t(`${p}.faq.a2`)
    },
    {
      question: t(`${p}.faq.q3`),
      answer: t(`${p}.faq.a3`)
    },
    {
      question: t(`${p}.faq.q4`),
      answer: t(`${p}.faq.a4`)
    },
    {
      question: t(`${p}.faq.q5`),
      answer: t(`${p}.faq.a5`)
    }
  ]

  const tableHeaders = t(`${p}.table.headers`, { returnObjects: true }) as string[]
  const tables = [
    {
      title: t(`${p}.table.title`),
      data: {
        headers: tableHeaders,
        rows: [
          t(`${p}.table.row1`, { returnObjects: true }) as string[],
          t(`${p}.table.row2`, { returnObjects: true }) as string[],
          t(`${p}.table.row3`, { returnObjects: true }) as string[],
          t(`${p}.table.row4`, { returnObjects: true }) as string[],
          t(`${p}.table.row5`, { returnObjects: true }) as string[]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: t(`${p}.relatedLinks.link1.title`),
      url: "/materials/recyclable",
      description: t(`${p}.relatedLinks.link1.description`)
    },
    {
      title: t(`${p}.relatedLinks.link2.title`),
      url: "/industry/coffee-tea",
      description: t(`${p}.relatedLinks.link2.description`)
    },
    {
      title: t(`${p}.relatedLinks.link3.title`),
      url: "/packaging/stand-up-pouches",
      description: t(`${p}.relatedLinks.link3.description`)
    }
  ]

  return (
    <SEOPageLayout
      title={t('seoPages.pages.compostable.title')}
      description={t('seoPages.pages.compostable.description')}
      keywords={[
        'compostable packaging',
        'compostable pouches',
        'PLA packaging',
        'kraft paper pouch',
        'EN 13432 certified',
        'ASTM D6400',
        'biodegradable packaging',
        'sustainable packaging',
        'eco-friendly pouches',
        'plant-based packaging',
        'zero waste packaging'
      ]}
      canonicalUrl="https://achievepack.com/materials/compostable"
      heroTitle={t('seoPages.pages.compostable.heroTitle')}
      heroSubtitle={t('seoPages.pages.compostable.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      heroImageAlt="Certified compostable kraft paper pouches with EN 13432 certification"
      introSummary={t('seoPages.pages.compostable.introSummary')}
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

export default CompostablePage
