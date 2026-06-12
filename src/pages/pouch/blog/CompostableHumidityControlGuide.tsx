import React from 'react'
import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Droplets, AlertTriangle, Shield, CheckCircle, Lightbulb } from 'lucide-react'
import { NeoCard } from '../../../components/pouch/PouchUI'
import { useSeoBlogOverride } from '../../../hooks/useSeoBlogOverride'
import DynamicBlogArticleRender from '../../../components/pouch/DynamicBlogArticleRender'
import { useTranslation } from 'react-i18next'

export default function CompostableHumidityControlGuide() {
  const { t } = useTranslation()
  const override = useSeoBlogOverride('compostable-humidity-control-guide')
  if (override) {
    return <DynamicBlogArticleRender post={override} />
  }

  const sections = [
    {
      id: 'why-crack',
      title: t('compostableHumidityControlGuide.sections.why-crack.title'),
      icon: <AlertTriangle className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('compostableHumidityControlGuide.sections.why-crack.p1')}
          </p>
          
          <div className="bg-[#FF4D4D] border-4 border-black p-6 text-white text-lg font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {t('compostableHumidityControlGuide.sections.why-crack.warning')}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-[#F0F0F0] border-4 border-black p-6">
              <h3 className="text-xl font-bold mb-3 font-['JetBrains_Mono']">{t('compostableHumidityControlGuide.sections.why-crack.riskTitle')}</h3>
              <ul className="space-y-3 text-sm">
                <li>• {t('compostableHumidityControlGuide.sections.why-crack.riskList.0')}</li>
                <li>• {t('compostableHumidityControlGuide.sections.why-crack.riskList.1')}</li>
              </ul>
            </div>
            <div className="bg-[#D4FF00] border-4 border-black p-6">
              <h3 className="text-xl font-bold mb-3 font-['JetBrains_Mono']">{t('compostableHumidityControlGuide.sections.why-crack.thresholdTitle')}</h3>
              <ul className="space-y-3 text-sm font-medium">
                <li>✓ {t('compostableHumidityControlGuide.sections.why-crack.thresholdList.0')}</li>
                <li>✓ {t('compostableHumidityControlGuide.sections.why-crack.thresholdList.1')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'solutions',
      title: t('compostableHumidityControlGuide.sections.solutions.title'),
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('compostableHumidityControlGuide.sections.solutions.p1')}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-4 border-black p-6 flex flex-col shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-lg uppercase mb-2">{t('compostableHumidityControlGuide.sections.solutions.card1.title')}</h4>
              <p className="text-xs text-neutral-600 mb-4 font-mono">
                {t('compostableHumidityControlGuide.sections.solutions.card1.desc')}
              </p>
              <ul className="space-y-2 mt-auto mb-4 bg-[#F0F0F0] p-4 text-xs font-mono">
                <li>• {t('compostableHumidityControlGuide.sections.solutions.card1.list.0')}</li>
                <li>• {t('compostableHumidityControlGuide.sections.solutions.card1.list.1')}</li>
                <li>• {t('compostableHumidityControlGuide.sections.solutions.card1.list.2')}</li>
              </ul>
            </div>

            <div className="bg-[#D4FF00] border-4 border-black p-6 flex flex-col relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute top-0 right-0 bg-black text-[#D4FF00] px-3 py-1 text-xs font-bold uppercase transform translate-x-1 -translate-y-1/2">
                {t('compostableHumidityControlGuide.sections.solutions.card2.badge')}
              </div>
              <h4 className="font-black text-lg uppercase mb-2">{t('compostableHumidityControlGuide.sections.solutions.card2.title')}</h4>
              <p className="text-xs text-neutral-800 mb-4 font-mono">
                {t('compostableHumidityControlGuide.sections.solutions.card2.desc')}
              </p>
              <ul className="space-y-2 mt-auto mb-4 bg-white p-4 text-xs font-mono border-2 border-black">
                <li>• {t('compostableHumidityControlGuide.sections.solutions.card2.list.0')}</li>
                <li>• {t('compostableHumidityControlGuide.sections.solutions.card2.list.1')}</li>
                <li>• {t('compostableHumidityControlGuide.sections.solutions.card2.list.2')}</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 flex flex-col shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-lg uppercase mb-2">{t('compostableHumidityControlGuide.sections.solutions.card3.title')}</h4>
              <p className="text-xs text-neutral-600 mb-4 font-mono">
                {t('compostableHumidityControlGuide.sections.solutions.card3.desc')}
              </p>
              <ul className="space-y-2 mt-auto mb-4 bg-[#F0F0F0] p-4 text-xs font-mono">
                <li>• {t('compostableHumidityControlGuide.sections.solutions.card3.list.0')}</li>
                <li>• {t('compostableHumidityControlGuide.sections.solutions.card3.list.1')}</li>
                <li>• {t('compostableHumidityControlGuide.sections.solutions.card3.list.2')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'technical-specifications',
      title: t('compostableHumidityControlGuide.sections.technical-specifications.title'),
      icon: <CheckCircle className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('compostableHumidityControlGuide.sections.technical-specifications.p1')}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-black text-[#D4FF00]">
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">{t('compostableHumidityControlGuide.sections.technical-specifications.table.headers.0')}</th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">{t('compostableHumidityControlGuide.sections.technical-specifications.table.headers.1')}</th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">{t('compostableHumidityControlGuide.sections.technical-specifications.table.headers.2')}</th>
                </tr>
              </thead>
              <tbody className="font-mono text-xs">
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('compostableHumidityControlGuide.sections.technical-specifications.table.rows.0.0')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800" dangerouslySetInnerHTML={{ __html: t('compostableHumidityControlGuide.sections.technical-specifications.table.rows.0.1') }} />
                  <td className="border-2 border-black p-3">{t('compostableHumidityControlGuide.sections.technical-specifications.table.rows.0.2')}</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('compostableHumidityControlGuide.sections.technical-specifications.table.rows.1.0')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800" dangerouslySetInnerHTML={{ __html: t('compostableHumidityControlGuide.sections.technical-specifications.table.rows.1.1') }} />
                  <td className="border-2 border-black p-3">{t('compostableHumidityControlGuide.sections.technical-specifications.table.rows.1.2')}</td>
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('compostableHumidityControlGuide.sections.technical-specifications.table.rows.2.0')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800" dangerouslySetInnerHTML={{ __html: t('compostableHumidityControlGuide.sections.technical-specifications.table.rows.2.1') }} />
                  <td className="border-2 border-black p-3">{t('compostableHumidityControlGuide.sections.technical-specifications.table.rows.2.2')}</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('compostableHumidityControlGuide.sections.technical-specifications.table.rows.3.0')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800" dangerouslySetInnerHTML={{ __html: t('compostableHumidityControlGuide.sections.technical-specifications.table.rows.3.1') }} />
                  <td className="border-2 border-black p-3">{t('compostableHumidityControlGuide.sections.technical-specifications.table.rows.3.2')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'case-study',
      title: t('compostableHumidityControlGuide.sections.case-study.title'),
      icon: <Droplets className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('compostableHumidityControlGuide.sections.case-study.p1')}
          </p>

          <NeoCard className="bg-[#F9F9F9] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-black text-2xl uppercase mb-4 font-['JetBrains_Mono']">{t('compostableHumidityControlGuide.sections.case-study.report.title')}</h3>
            
            <div className="space-y-4">
              <div className="bg-white border-2 border-black p-4 font-mono text-sm leading-relaxed">
                <span className="font-bold text-green-700">{t('compostableHumidityControlGuide.sections.case-study.report.author')}</span>
                <p className="mt-2 text-neutral-700">
                  {t('compostableHumidityControlGuide.sections.case-study.report.desc')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 font-mono text-center text-sm">
                <div className="bg-red-50 border-2 border-red-500 p-4">
                  <div className="font-bold text-red-700 uppercase">{t('compostableHumidityControlGuide.sections.case-study.report.control.title')}</div>
                  <ul className="text-xs text-neutral-700 mt-2 space-y-1">
                    <li>• {t('compostableHumidityControlGuide.sections.case-study.report.control.list.0')}</li>
                    <li>• {t('compostableHumidityControlGuide.sections.case-study.report.control.list.1')}</li>
                    <li>• {t('compostableHumidityControlGuide.sections.case-study.report.control.list.2')}</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-2 border-green-500 p-4">
                  <div className="font-bold text-green-700 uppercase">{t('compostableHumidityControlGuide.sections.case-study.report.managed.title')}</div>
                  <ul className="text-xs text-neutral-700 mt-2 space-y-1">
                    <li>• {t('compostableHumidityControlGuide.sections.case-study.report.managed.list.0')}</li>
                    <li>• {t('compostableHumidityControlGuide.sections.case-study.report.managed.list.1')}</li>
                    <li>• {t('compostableHumidityControlGuide.sections.case-study.report.managed.list.2')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </NeoCard>
        </div>
      )
    },
    {
      id: 'b2b-store-links',
      title: t('compostableHumidityControlGuide.sections.b2b-store-links.title'),
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('compostableHumidityControlGuide.sections.b2b-store-links.desc') }} />
        </div>
      )
    }
  ]

  const relatedArticles = [
    {
      title: t('compostableHumidityControlGuide.relatedArticles.0.title'),
      url: '/blog/bpi-certified-guide',
      image: '/imgs/company/bpi/bpipouch.webp'
    },
    {
      title: t('compostableHumidityControlGuide.relatedArticles.1.title'),
      url: '/blog/usa-coffee-packaging',
      image: '/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp'
    }
  ]

  const faqSections = [
    {
      q: t('compostableHumidityControlGuide.faq.0.q'),
      a: t('compostableHumidityControlGuide.faq.0.a')
    },
    {
      q: t('compostableHumidityControlGuide.faq.1.q'),
      a: t('compostableHumidityControlGuide.faq.1.a')
    },
    {
      q: t('compostableHumidityControlGuide.faq.2.q'),
      a: t('compostableHumidityControlGuide.faq.2.a')
    },
    {
      q: t('compostableHumidityControlGuide.faq.3.q'),
      a: t('compostableHumidityControlGuide.faq.3.a')
    },
    {
      q: t('compostableHumidityControlGuide.faq.4.q'),
      a: t('compostableHumidityControlGuide.faq.4.a')
    },
    {
      q: t('compostableHumidityControlGuide.faq.5.q'),
      a: t('compostableHumidityControlGuide.faq.5.a')
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('compostableHumidityControlGuide.meta.title')}
      metaDescription={t('compostableHumidityControlGuide.meta.description')}
      canonicalUrl="https://pouch.eco/blog/compostable-humidity-control-guide"
      keywords={[
        'compostable packaging cracking',
        'cellulose bag brittleness',
        'compostable packaging humidity control',
        'prevent compostable bags breaking',
        'sustainable packaging shipping'
      ]}
      publishedDate="2026-03-01"
      modifiedDate="2026-05-31"
      author="Ryan Wong"
      
      heroTitle={
        <>
          {t('compostableHumidityControlGuide.hero.title').split('\n')[0]}<br />
          <span className="text-[#D4FF00]">{t('compostableHumidityControlGuide.hero.title').split('\n')[1]}</span>
        </>
      }
      heroSubtitle={t('compostableHumidityControlGuide.hero.subtitle')}
      heroImage="/imgs/samples/humidity-control-sample.png"
      heroImageAlt={t('compostableHumidityControlGuide.hero.imageAlt')}
      categoryTag="TIPS"
      categoryColor="#00FFFF"
      readTime="10 min read"
      
      sections={sections}
      faqSections={faqSections}
      
      ctaTitle={t('compostableHumidityControlGuide.cta.title')}
      ctaDescription={t('compostableHumidityControlGuide.cta.description')}
      calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
      achievePackLink="https://achievepack.com/topics/compostable-humidity-control"
      achievePackText={t('compostableHumidityControlGuide.cta.achievePackText')}
      
      showTableOfContents={true}
      relatedArticles={relatedArticles}
    />
  )
}
