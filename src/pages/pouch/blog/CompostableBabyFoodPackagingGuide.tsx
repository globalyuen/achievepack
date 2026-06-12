import { Baby, Shield, CheckCircle, Heart, FileCheck, Package, DollarSign, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
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

export default function CompostableBabyFoodPackagingGuide() {
  const { t } = useTranslation()
  const override = useSeoBlogOverride('compostable-baby-food-packaging-guide')
  if (override) {
    return <DynamicBlogArticleRender post={override} />
  }

  const sections: BlogArticleSection[] = [
    {
      id: 'safety-first',
      title: t('compostableBabyFoodPackagingGuide.sections.safetyFirst.title'),
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('compostableBabyFoodPackagingGuide.sections.safetyFirst.p1')}
          </p>

          <div className="bg-[#FF00FF] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white">
             <h3 className="font-black text-3xl uppercase mb-4">{t('compostableBabyFoodPackagingGuide.sections.safetyFirst.cardTitle')}</h3>
             <p className="font-bold text-lg mb-4">
                {t('compostableBabyFoodPackagingGuide.sections.safetyFirst.cardText')}
             </p>
             <div className="bg-white text-black p-6 border-4 border-black font-['JetBrains_Mono']">
                <ul className="space-y-3 font-medium">
                   <li className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 fill-current flex-shrink-0" />
                      <span>{t('compostableBabyFoodPackagingGuide.sections.safetyFirst.l1')}</span>
                   </li>
                   <li className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 fill-current flex-shrink-0" />
                      <span>{t('compostableBabyFoodPackagingGuide.sections.safetyFirst.l2')}</span>
                   </li>
                   <li className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 fill-current flex-shrink-0" />
                      <span>{t('compostableBabyFoodPackagingGuide.sections.safetyFirst.l3')}</span>
                   </li>
                </ul>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'why-compostable',
      title: t('compostableBabyFoodPackagingGuide.sections.whyCompostable.title'),
      icon: <Heart className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
             {t('compostableBabyFoodPackagingGuide.sections.whyCompostable.p1')}
          </p>

          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
             <h3 className="font-black text-2xl uppercase mb-4">{t('compostableBabyFoodPackagingGuide.sections.whyCompostable.cardTitle')}</h3>
             <p className="mb-4 text-base font-bold">{t('compostableBabyFoodPackagingGuide.sections.whyCompostable.cardText')}</p>
             
             <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-white border-2 border-black p-4">
                    <h4 className="font-black text-lg uppercase mb-2">{t('compostableBabyFoodPackagingGuide.sections.whyCompostable.gmoTitle')}</h4>
                    <p className="text-sm font-['JetBrains_Mono'] leading-relaxed">
                       {t('compostableBabyFoodPackagingGuide.sections.whyCompostable.gmoText')}
                    </p>
                 </div>
                 <div className="bg-white border-2 border-black p-4">
                    <h4 className="font-black text-lg uppercase mb-2">{t('compostableBabyFoodPackagingGuide.sections.whyCompostable.caneTitle')}</h4>
                    <p className="text-sm font-['JetBrains_Mono'] leading-relaxed">
                       {t('compostableBabyFoodPackagingGuide.sections.whyCompostable.caneText')}
                    </p>
                 </div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'format-options',
      title: t('compostableBabyFoodPackagingGuide.sections.formatOptions.title'),
      icon: <Baby className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('compostableBabyFoodPackagingGuide.sections.formatOptions.p1')}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
             <div className="bg-[#F0F0F0] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <strong className="block text-xl uppercase mb-2"><Link to="/products" className="hover:underline">{t('compostableBabyFoodPackagingGuide.sections.formatOptions.format1')}</Link></strong>
                <span className="bg-black text-[#D4FF00] px-2 py-1 text-xs font-bold mb-3 inline-block font-mono">{t('compostableBabyFoodPackagingGuide.sections.formatOptions.format1Badge')}</span>
                <p className="text-sm font-['JetBrains_Mono'] leading-relaxed">
                   {t('compostableBabyFoodPackagingGuide.sections.formatOptions.format1Text')}
                </p>
             </div>
             <div className="bg-[#F0F0F0] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <strong className="block text-xl uppercase mb-2"><Link to="/blog/compostable-stand-up-pouches-guide" className="hover:underline">{t('compostableBabyFoodPackagingGuide.sections.formatOptions.format2')}</Link></strong>
                <span className="bg-black text-[#D4FF00] px-2 py-1 text-xs font-bold mb-3 inline-block font-mono">{t('compostableBabyFoodPackagingGuide.sections.formatOptions.format2Badge')}</span>
                <p className="text-sm font-['JetBrains_Mono'] leading-relaxed">
                   {t('compostableBabyFoodPackagingGuide.sections.formatOptions.format2Text')}
                </p>
             </div>
             <div className="bg-[#F0F0F0] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <strong className="block text-xl uppercase mb-2"><Link to="/products" className="hover:underline">{t('compostableBabyFoodPackagingGuide.sections.formatOptions.format3')}</Link></strong>
                <span className="bg-black text-[#D4FF00] px-2 py-1 text-xs font-bold mb-3 inline-block font-mono">{t('compostableBabyFoodPackagingGuide.sections.formatOptions.format3Badge')}</span>
                <p className="text-sm font-['JetBrains_Mono'] leading-relaxed">
                   {t('compostableBabyFoodPackagingGuide.sections.formatOptions.format3Text')}
                </p>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t('compostableBabyFoodPackagingGuide.sections.specifications.title'),
      icon: <Package className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('compostableBabyFoodPackagingGuide.sections.specifications.p1')}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="bg-black text-[#D4FF00]">
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">{t('compostableBabyFoodPackagingGuide.sections.specifications.th1')}</th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">{t('compostableBabyFoodPackagingGuide.sections.specifications.th2')}</th>
                  <th className="border-2 border-black p-4 text-left font-['JetBrains_Mono'] text-xs uppercase">{t('compostableBabyFoodPackagingGuide.sections.specifications.th3')}</th>
                </tr>
              </thead>
              <tbody className="font-mono text-xs">
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('compostableBabyFoodPackagingGuide.sections.specifications.tr1Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800">
                    {t('compostableBabyFoodPackagingGuide.sections.specifications.tr1Col2')}
                  </td>
                  <td className="border-2 border-black p-3">{t('compostableBabyFoodPackagingGuide.sections.specifications.tr1Col3')}</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('compostableBabyFoodPackagingGuide.sections.specifications.tr2Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800">
                    {t('compostableBabyFoodPackagingGuide.sections.specifications.tr2Col2')}
                  </td>
                  <td className="border-2 border-black p-3">{t('compostableBabyFoodPackagingGuide.sections.specifications.tr2Col3')}</td>
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-2 border-black p-3 font-bold">{t('compostableBabyFoodPackagingGuide.sections.specifications.tr3Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800">
                    {t('compostableBabyFoodPackagingGuide.sections.specifications.tr3Col2')}
                  </td>
                  <td className="border-2 border-black p-3">{t('compostableBabyFoodPackagingGuide.sections.specifications.tr3Col3')}</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-3 font-bold">{t('compostableBabyFoodPackagingGuide.sections.specifications.tr4Col1')}</td>
                  <td className="border-2 border-black p-3 text-neutral-800">
                    {t('compostableBabyFoodPackagingGuide.sections.specifications.tr4Col2')}
                  </td>
                  <td className="border-2 border-black p-3">{t('compostableBabyFoodPackagingGuide.sections.specifications.tr4Col3')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'field-report',
      title: t('compostableBabyFoodPackagingGuide.sections.fieldReport.title'),
      icon: <FileCheck className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('compostableBabyFoodPackagingGuide.sections.fieldReport.p1')}
          </p>

          <NeoCard className="bg-[#F9F9F9] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h4 className="font-black text-xl uppercase mb-4 font-['JetBrains_Mono']">{t('compostableBabyFoodPackagingGuide.sections.fieldReport.cardTitle')}</h4>
            
            <div className="space-y-4">
              <div className="bg-white border-2 border-black p-4 font-mono text-sm leading-relaxed">
                <span className="font-bold text-green-700">{t('compostableBabyFoodPackagingGuide.sections.fieldReport.author')}</span>
                <p className="mt-2 text-neutral-700">
                  {t('compostableBabyFoodPackagingGuide.sections.fieldReport.quote')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 font-mono text-center">
                <div className="bg-white border-2 border-black p-4">
                  <div className="text-3xl font-black text-green-600 mb-1">{t('compostableBabyFoodPackagingGuide.sections.fieldReport.tr1Col1')}</div>
                  <div className="text-xs font-bold uppercase text-neutral-500">{t('compostableBabyFoodPackagingGuide.sections.fieldReport.tr1Col2')}</div>
                </div>
                <div className="bg-white border-2 border-black p-4">
                  <div className="text-3xl font-black text-blue-600 mb-1">{t('compostableBabyFoodPackagingGuide.sections.fieldReport.tr2Col1')}</div>
                  <div className="text-xs font-bold uppercase text-neutral-500">{t('compostableBabyFoodPackagingGuide.sections.fieldReport.tr2Col2')}</div>
                </div>
                <div className="bg-white border-2 border-black p-4">
                  <div className="text-3xl font-black text-amber-600 mb-1">{t('compostableBabyFoodPackagingGuide.sections.fieldReport.tr3Col1')}</div>
                  <div className="text-xs font-bold uppercase text-neutral-500">{t('compostableBabyFoodPackagingGuide.sections.fieldReport.tr3Col2')}</div>
                </div>
              </div>
            </div>
          </NeoCard>
        </div>
      )
    },
    {
      id: 'b2b-store-links',
      title: t('compostableBabyFoodPackagingGuide.sections.storeLinks.title'),
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('compostableBabyFoodPackagingGuide.sections.storeLinks.textPart1')}<a href="https://achievepack.com/store/product/sample-assorted-eco" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('compostableBabyFoodPackagingGuide.sections.storeLinks.link1')}</a>{t('compostableBabyFoodPackagingGuide.sections.storeLinks.textPart2')}<a href="https://achievepack.com/store/product/media__1780570697340.jpg" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('compostableBabyFoodPackagingGuide.sections.storeLinks.link2')}</a>{t('compostableBabyFoodPackagingGuide.sections.storeLinks.textPart3')}<a href="https://achievepack.com/store/product/transparent-colorful-cellophane-candy-wrapping-paper" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('compostableBabyFoodPackagingGuide.sections.storeLinks.link3')}</a>{t('compostableBabyFoodPackagingGuide.sections.storeLinks.textPart4')}
          </p>
        </div>
      )
    }
  ]

  const relatedArticles = [
    {
      title: t('compostableBabyFoodPackagingGuide.relatedArticles.r1Title'),
      url: '/blog/eco-friendly-food-packaging-guide',
      image: '/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp'
    },
    {
      title: t('compostableBabyFoodPackagingGuide.relatedArticles.r2Title'),
      url: '/blog/usa-snacks-packaging-guide',
      image: '/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp'
    },
    {
      title: t('compostableBabyFoodPackagingGuide.relatedArticles.r3Title'),
      url: '/blog/bpi-certified-guide',
      image: '/imgs/company/bpi/a_bpi_certification_verification_badge_3065504.webp'
    }
  ]

  const faqSections = [
    {
      q: t('compostableBabyFoodPackagingGuide.faq.q1'),
      a: t('compostableBabyFoodPackagingGuide.faq.a1')
    },
    {
      q: t('compostableBabyFoodPackagingGuide.faq.q2'),
      a: t('compostableBabyFoodPackagingGuide.faq.a2')
    },
    {
      q: t('compostableBabyFoodPackagingGuide.faq.q3'),
      a: t('compostableBabyFoodPackagingGuide.faq.a3')
    },
    {
      q: t('compostableBabyFoodPackagingGuide.faq.q4'),
      a: t('compostableBabyFoodPackagingGuide.faq.a4')
    },
    {
      q: t('compostableBabyFoodPackagingGuide.faq.q5'),
      a: t('compostableBabyFoodPackagingGuide.faq.a5')
    },
    {
      q: t('compostableBabyFoodPackagingGuide.faq.q6'),
      a: t('compostableBabyFoodPackagingGuide.faq.a6')
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('compostableBabyFoodPackagingGuide.meta.title')}
      metaDescription={t('compostableBabyFoodPackagingGuide.meta.description')}
      canonicalUrl="https://pouch.eco/blog/compostable-baby-food-packaging-guide"
      keywords={t('compostableBabyFoodPackagingGuide.meta.keywords', { returnObjects: true }) as string[]}
      publishedDate="2026-02-11T09:00:00Z"
      modifiedDate="2026-05-31"
      author="Ryan Wong"
      heroTitle={
        <>
          {t('compostableBabyFoodPackagingGuide.hero.titlePart1')}<br />
          <span className="text-[#FF00FF]">{t('compostableBabyFoodPackagingGuide.hero.titlePart2')}</span>
        </>
      }
      heroSubtitle={t('compostableBabyFoodPackagingGuide.hero.subtitle')}
      categoryTag="Baby & Kids"
      categoryColor="#ec4899"
      heroImage="/imgs/seo-photos/organic/organic_dried_mango_pouch.webp"
      heroImageAlt={t('compostableBabyFoodPackagingGuide.hero.imageAlt')}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('compostableBabyFoodPackagingGuide.ctaTitle')}
      ctaDescription={t('compostableBabyFoodPackagingGuide.ctaDescription')}
      calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
      achievePackLink="https://achievepack.com/topics/compostable-baby-food-bags"
      achievePackText={t('compostableBabyFoodPackagingGuide.achievePackText')}
      showTableOfContents={true}
      relatedArticles={relatedArticles}
    />
  )
}
