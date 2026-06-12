import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Link } from 'react-router-dom'
import { Package, Leaf, Shield, DollarSign, CheckCircle, TrendingUp, Award, Clock, Droplets, Wind, Lock } from 'lucide-react'
import { NeoCard } from '../../../components/pouch/PouchUI'
import { useSeoBlogOverride } from '../../../hooks/useSeoBlogOverride'
import DynamicBlogArticleRender from '../../../components/pouch/DynamicBlogArticleRender'
import { useTranslation } from 'react-i18next'

interface BlogArticleSection {
  id: string
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

export default function CompostableStandUpPouchesGuide() {
  const { t } = useTranslation()
  const override = useSeoBlogOverride('compostable-stand-up-pouches-guide')
  if (override) {
    return <DynamicBlogArticleRender post={override} />
  }

  const sections: BlogArticleSection[] = [
    {
      id: 'why-stand-up',
      title: t('compostableStandUpPouchesGuide.sections.whyStandUp.title'),
      icon: <TrendingUp className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('compostableStandUpPouchesGuide.sections.whyStandUp.p1')}
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-2xl uppercase mb-4">{t('compostableStandUpPouchesGuide.sections.whyStandUp.incentTitle')}</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('compostableStandUpPouchesGuide.sections.whyStandUp.l1Title')}</strong>{t('compostableStandUpPouchesGuide.sections.whyStandUp.l1Text')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('compostableStandUpPouchesGuide.sections.whyStandUp.l2Title')}</strong>{t('compostableStandUpPouchesGuide.sections.whyStandUp.l2Text')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('compostableStandUpPouchesGuide.sections.whyStandUp.l3Title')}</strong>{t('compostableStandUpPouchesGuide.sections.whyStandUp.l3Text')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('compostableStandUpPouchesGuide.sections.whyStandUp.l4Title')}</strong>{t('compostableStandUpPouchesGuide.sections.whyStandUp.l4Text')}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-2xl uppercase mb-3 text-green-900">
              {t('compostableStandUpPouchesGuide.sections.whyStandUp.advTitle')}
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold mb-2 text-green-800 uppercase">{t('compostableStandUpPouchesGuide.sections.whyStandUp.brandTitle')}</h5>
                <ul className="space-y-2 text-sm font-medium">
                  <li>{t('compostableStandUpPouchesGuide.sections.whyStandUp.brandL1')}</li>
                  <li>{t('compostableStandUpPouchesGuide.sections.whyStandUp.brandL2')}</li>
                  <li>{t('compostableStandUpPouchesGuide.sections.whyStandUp.brandL3')}</li>
                  <li>{t('compostableStandUpPouchesGuide.sections.whyStandUp.brandL4')}</li>
                  <li>{t('compostableStandUpPouchesGuide.sections.whyStandUp.brandL5')}</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-green-800 uppercase">{t('compostableStandUpPouchesGuide.sections.whyStandUp.consTitle')}</h5>
                <ul className="space-y-2 text-sm font-medium">
                  <li>{t('compostableStandUpPouchesGuide.sections.whyStandUp.consL1')}</li>
                  <li>{t('compostableStandUpPouchesGuide.sections.whyStandUp.consL2')}</li>
                  <li>{t('compostableStandUpPouchesGuide.sections.whyStandUp.consL3')}</li>
                  <li>{t('compostableStandUpPouchesGuide.sections.whyStandUp.consL4')}</li>
                  <li>{t('compostableStandUpPouchesGuide.sections.whyStandUp.consL5')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-science',
      title: t('compostableStandUpPouchesGuide.sections.materialScience.title'),
      icon: <Leaf className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('compostableStandUpPouchesGuide.sections.materialScience.p1')}
          </p>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 text-neutral-900 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                {t('compostableStandUpPouchesGuide.sections.materialScience.s1Title')}
              </h4>
              <p className="text-sm text-neutral-700 mb-3">
                {t('compostableStandUpPouchesGuide.sections.materialScience.s1Text')}
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-xs font-mono bg-neutral-50 p-4 border-2 border-black">
                <div>{t('compostableStandUpPouchesGuide.sections.materialScience.s1B1')}</div>
                <div>{t('compostableStandUpPouchesGuide.sections.materialScience.s1B2')}</div>
                <div>{t('compostableStandUpPouchesGuide.sections.materialScience.s1B3')}</div>
                <div>{t('compostableStandUpPouchesGuide.sections.materialScience.s1B4')}</div>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 text-neutral-900 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                {t('compostableStandUpPouchesGuide.sections.materialScience.s2Title')}
              </h4>
              <p className="text-sm text-neutral-700 mb-3">
                {t('compostableStandUpPouchesGuide.sections.materialScience.s2Text')}
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-xs font-mono bg-neutral-50 p-4 border-2 border-black">
                <div>{t('compostableStandUpPouchesGuide.sections.materialScience.s2B1')}</div>
                <div>{t('compostableStandUpPouchesGuide.sections.materialScience.s2B2')}</div>
                <div>{t('compostableStandUpPouchesGuide.sections.materialScience.s2B3')}</div>
                <div>{t('compostableStandUpPouchesGuide.sections.materialScience.s2B4')}</div>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 text-neutral-900 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                {t('compostableStandUpPouchesGuide.sections.materialScience.s3Title')}
              </h4>
              <p className="text-sm text-neutral-700 mb-3">
                {t('compostableStandUpPouchesGuide.sections.materialScience.s3Text')}
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-xs font-mono bg-neutral-50 p-4 border-2 border-black">
                <div>{t('compostableStandUpPouchesGuide.sections.materialScience.s3B1')}</div>
                <div>{t('compostableStandUpPouchesGuide.sections.materialScience.s3B2')}</div>
                <div>{t('compostableStandUpPouchesGuide.sections.materialScience.s3B3')}</div>
                <div>{t('compostableStandUpPouchesGuide.sections.materialScience.s3B4')}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t('compostableStandUpPouchesGuide.sections.specifications.title'),
      icon: <Package className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('compostableStandUpPouchesGuide.sections.specifications.p1')}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-black text-[#D4FF00]">
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">{t('compostableStandUpPouchesGuide.sections.specifications.th1')}</th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">{t('compostableStandUpPouchesGuide.sections.specifications.th2')}</th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">{t('compostableStandUpPouchesGuide.sections.specifications.th3')}</th>
                </tr>
              </thead>
              <tbody className="font-mono text-xs">
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('compostableStandUpPouchesGuide.sections.specifications.tr1Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800">
                    {t('compostableStandUpPouchesGuide.sections.specifications.tr1Col2')}
                  </td>
                  <td className="border-2 border-black p-3">{t('compostableStandUpPouchesGuide.sections.specifications.tr1Col3')}</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('compostableStandUpPouchesGuide.sections.specifications.tr2Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800">
                    {t('compostableStandUpPouchesGuide.sections.specifications.tr2Col2')}
                  </td>
                  <td className="border-2 border-black p-3">{t('compostableStandUpPouchesGuide.sections.specifications.tr2Col3')}</td>
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('compostableStandUpPouchesGuide.sections.specifications.tr3Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800">
                    {t('compostableStandUpPouchesGuide.sections.specifications.tr3Col2')}
                  </td>
                  <td className="border-2 border-black p-3">{t('compostableStandUpPouchesGuide.sections.specifications.tr3Col3')}</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('compostableStandUpPouchesGuide.sections.specifications.tr4Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800">
                    {t('compostableStandUpPouchesGuide.sections.specifications.tr4Col2')}
                  </td>
                  <td className="border-2 border-black p-3">{t('compostableStandUpPouchesGuide.sections.specifications.tr4Col3')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'field-report',
      title: t('compostableStandUpPouchesGuide.sections.fieldReport.title'),
      icon: <CheckCircle className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('compostableStandUpPouchesGuide.sections.fieldReport.p1')}
          </p>
          <div className="bg-[#F9F9F9] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h4 className="font-black text-xl uppercase mb-4 font-['JetBrains_Mono']">{t('compostableStandUpPouchesGuide.sections.fieldReport.cardTitle')}</h4>
            <div className="space-y-4">
              <div className="bg-white border-2 border-black p-4 font-mono text-sm leading-relaxed">
                <span className="font-bold text-green-700">{t('compostableStandUpPouchesGuide.sections.fieldReport.author')}</span>
                <p className="mt-2 text-neutral-700">
                  {t('compostableStandUpPouchesGuide.sections.fieldReport.quote')}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 font-mono text-center">
                <div className="bg-white border-2 border-black p-4">
                  <div className="text-3xl font-black text-green-600 mb-1">{t('compostableStandUpPouchesGuide.sections.fieldReport.col1Title')}</div>
                  <div className="text-xs font-bold uppercase text-neutral-500">{t('compostableStandUpPouchesGuide.sections.fieldReport.col1Text')}</div>
                </div>
                <div className="bg-white border-2 border-black p-4">
                  <div className="text-3xl font-black text-blue-600 mb-1">{t('compostableStandUpPouchesGuide.sections.fieldReport.col2Title')}</div>
                  <div className="text-xs font-bold uppercase text-neutral-500">{t('compostableStandUpPouchesGuide.sections.fieldReport.col2Text')}</div>
                </div>
                <div className="bg-white border-2 border-black p-4">
                  <div className="text-3xl font-black text-amber-600 mb-1">{t('compostableStandUpPouchesGuide.sections.fieldReport.col3Title')}</div>
                  <div className="text-xs font-bold uppercase text-neutral-500">{t('compostableStandUpPouchesGuide.sections.fieldReport.col3Text')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'transparent-pricing',
      title: t('compostableStandUpPouchesGuide.sections.pricing.title'),
      icon: <DollarSign className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('compostableStandUpPouchesGuide.sections.pricing.p1')}
          </p>

          <div className="bg-[#00FFFF] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h4 className="font-black text-2xl uppercase mb-6 font-['JetBrains_Mono']">{t('compostableStandUpPouchesGuide.sections.pricing.cardTitle')}</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full border-4 border-black bg-white text-left text-xs font-mono">
                <thead>
                  <tr className="bg-black text-[#00FFFF]">
                    <th className="py-3 px-4 text-left font-['JetBrains_Mono'] border-r-2 border-[#00FFFF]">{t('compostableStandUpPouchesGuide.sections.pricing.th1')}</th>
                    <th className="py-3 px-4 border-r-2 border-[#00FFFF] text-center">{t('compostableStandUpPouchesGuide.sections.pricing.th2')}</th>
                    <th className="py-3 px-4 border-r-2 border-[#00FFFF] text-center">{t('compostableStandUpPouchesGuide.sections.pricing.th3')}</th>
                    <th className="py-3 px-4 text-center">{t('compostableStandUpPouchesGuide.sections.pricing.th4')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-4 border-black">
                    <td className="py-3 px-4 font-bold border-r-2 border-black">{t('compostableStandUpPouchesGuide.sections.pricing.tr1Col1')}</td>
                    <td className="py-3 px-4 border-r-2 border-black text-center">{t('compostableStandUpPouchesGuide.sections.pricing.tr1Col2')}</td>
                    <td className="py-3 px-4 border-r-2 border-black text-center">{t('compostableStandUpPouchesGuide.sections.pricing.tr1Col3')}</td>
                    <td className="py-3 px-4 text-center">{t('compostableStandUpPouchesGuide.sections.pricing.tr1Col4')}</td>
                  </tr>
                  <tr className="border-t-2 border-black bg-[#F0F0F0]">
                    <td className="py-3 px-4 font-bold border-r-2 border-black">{t('compostableStandUpPouchesGuide.sections.pricing.tr2Col1')}</td>
                    <td className="py-3 px-4 border-r-2 border-black text-center">{t('compostableStandUpPouchesGuide.sections.pricing.tr2Col2')}</td>
                    <td className="py-3 px-4 border-r-2 border-black text-center">{t('compostableStandUpPouchesGuide.sections.pricing.tr2Col3')}</td>
                    <td className="py-3 px-4 text-center">{t('compostableStandUpPouchesGuide.sections.pricing.tr2Col4')}</td>
                  </tr>
                  <tr className="border-t-2 border-black">
                    <td className="py-3 px-4 font-bold border-r-2 border-black">{t('compostableStandUpPouchesGuide.sections.pricing.tr3Col1')}</td>
                    <td className="py-3 px-4 border-r-2 border-black text-center">{t('compostableStandUpPouchesGuide.sections.pricing.tr3Col2')}</td>
                    <td className="py-3 px-4 border-r-2 border-black text-center">{t('compostableStandUpPouchesGuide.sections.pricing.tr3Col3')}</td>
                    <td className="py-3 px-4 text-center">{t('compostableStandUpPouchesGuide.sections.pricing.tr3Col4')}</td>
                  </tr>
                  <tr className="border-t-2 border-black bg-[#D4FF00]">
                    <td className="py-3 px-4 font-black border-r-2 border-black">{t('compostableStandUpPouchesGuide.sections.pricing.tr4Col1')}</td>
                    <td className="py-3 px-4 border-r-2 border-black font-bold text-center">{t('compostableStandUpPouchesGuide.sections.pricing.tr4Col2')}</td>
                    <td className="py-3 px-4 border-r-2 border-black font-bold text-center">{t('compostableStandUpPouchesGuide.sections.pricing.tr4Col3')}</td>
                    <td className="py-3 px-4 font-bold text-center">{t('compostableStandUpPouchesGuide.sections.pricing.tr4Col4')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs font-mono">
              {t('compostableStandUpPouchesGuide.sections.pricing.note')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'b2b-store-links',
      title: t('compostableStandUpPouchesGuide.sections.storeLinks.title'),
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('compostableStandUpPouchesGuide.sections.storeLinks.textPart1')}<a href="https://achievepack.com/store/product/sample-assorted-eco" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('compostableStandUpPouchesGuide.sections.storeLinks.link1')}</a>{t('compostableStandUpPouchesGuide.sections.storeLinks.textPart2')}<a href="https://achievepack.com/store/product/media__1780570697340.jpg" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('compostableStandUpPouchesGuide.sections.storeLinks.link2')}</a>{t('compostableStandUpPouchesGuide.sections.storeLinks.textPart3')}<a href="https://achievepack.com/store/product/transparent-colorful-cellophane-candy-wrapping-paper" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('compostableStandUpPouchesGuide.sections.storeLinks.link3')}</a>{t('compostableStandUpPouchesGuide.sections.storeLinks.textPart4')}
          </p>
        </div>
      )
    }
  ]

  const relatedArticles = [
    {
      title: t('compostableStandUpPouchesGuide.relatedArticles.r1Title'),
      url: '/blog/usa-compostable-packaging-guide',
      image: '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp'
    },
    {
      title: t('compostableStandUpPouchesGuide.relatedArticles.r2Title'),
      url: '/blog/coffee-packaging-guide',
      image: '/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp'
    },
    {
      title: t('compostableStandUpPouchesGuide.relatedArticles.r3Title'),
      url: '/blog/usa-coffee-packaging',
      image: '/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp'
    }
  ]

  const faqSections = [
    {
      q: t('compostableStandUpPouchesGuide.faq.q1'),
      a: t('compostableStandUpPouchesGuide.faq.a1')
    },
    {
      q: t('compostableStandUpPouchesGuide.faq.q2'),
      a: t('compostableStandUpPouchesGuide.faq.a2')
    },
    {
      q: t('compostableStandUpPouchesGuide.faq.q3'),
      a: t('compostableStandUpPouchesGuide.faq.a3')
    },
    {
      q: t('compostableStandUpPouchesGuide.faq.q4'),
      a: t('compostableStandUpPouchesGuide.faq.a4')
    },
    {
      q: t('compostableStandUpPouchesGuide.faq.q5'),
      a: t('compostableStandUpPouchesGuide.faq.a5')
    },
    {
      q: t('compostableStandUpPouchesGuide.faq.q6'),
      a: t('compostableStandUpPouchesGuide.faq.a6')
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('compostableStandUpPouchesGuide.meta.title')}
      metaDescription={t('compostableStandUpPouchesGuide.meta.description')}
      canonicalUrl="https://pouch.eco/blog/compostable-stand-up-pouches-guide"
      keywords={t('compostableStandUpPouchesGuide.meta.keywords', { returnObjects: true }) as string[]}
      publishedDate="2026-01-30"
      modifiedDate="2026-05-31"
      author="Ryan Wong"
      heroTitle={
        <>
          {t('compostableStandUpPouchesGuide.hero.titlePart1')}<br />
          <span className="text-[#10b981]">{t('compostableStandUpPouchesGuide.hero.titlePart2')}</span>
        </>
      }
      heroSubtitle={t('compostableStandUpPouchesGuide.hero.subtitle')}
      heroImage="/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp"
      heroImageAlt={t('compostableStandUpPouchesGuide.hero.imageAlt')}
      categoryTag="PACKAGING_GUIDE"
      categoryColor="#10b981"
      readTime="18 min read"
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('compostableStandUpPouchesGuide.ctaTitle')}
      ctaDescription={t('compostableStandUpPouchesGuide.ctaDescription')}
      calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
      achievePackLink="https://achievepack.com/products/compostable-stand-up-pouches"
      achievePackText={t('compostableStandUpPouchesGuide.achievePackText')}
      showTableOfContents={true}
      relatedArticles={relatedArticles}
    />
  )
}
