import { Leaf, Shield, FileText, CheckCircle, Package, Building2, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import ClickableImage from '../../../components/ClickableImage'

interface BlogArticleSection {
  id: string
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

export default function USACompostableGuide() {
  const { t } = useTranslation()

  const sections: BlogArticleSection[] = [
    {
      id: 'market-insights',
      title: t('usaCompostableGuide.sections.market-insights.title'),
      icon: <Award className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <p className="text-xl font-bold">
            {t('usaCompostableGuide.sections.market-insights.p1')}
          </p>
          <ClickableImage src="/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp" alt="USA Compostable Packaging Compliance Showcase" className="w-full h-64 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
          
          <div className="bg-[#D4FF00] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-2xl uppercase mb-4">{t('usaCompostableGuide.sections.market-insights.listTitle')}</h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span>{t('usaCompostableGuide.sections.market-insights.item1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span>{t('usaCompostableGuide.sections.market-insights.item2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span>{t('usaCompostableGuide.sections.market-insights.item3')}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'astm-vs-biodegradable',
      title: t('usaCompostableGuide.sections.astm-vs-biodegradable.title'),
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p>
            {t('usaCompostableGuide.sections.astm-vs-biodegradable.p1')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6">
              <h4 className="font-black text-xl uppercase mb-3 text-red-600">{t('usaCompostableGuide.sections.astm-vs-biodegradable.trapTitle')}</h4>
              <p className="text-sm">
                {t('usaCompostableGuide.sections.astm-vs-biodegradable.trapDesc')}
              </p>
            </div>
            <div className="bg-white border-4 border-black p-6 bg-green-50">
              <h4 className="font-black text-xl uppercase mb-3 text-green-600">{t('usaCompostableGuide.sections.astm-vs-biodegradable.standardTitle')}</h4>
              <p className="text-sm">
                {t('usaCompostableGuide.sections.astm-vs-biodegradable.standardDesc')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'state-laws',
      title: t('usaCompostableGuide.sections.state-laws.title'),
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div className="space-y-6 bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-black text-2xl uppercase mb-4">{t('usaCompostableGuide.sections.state-laws.subtitle')}</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 border-2 border-black p-4">
              <h4 className="font-bold text-lg mb-2">{t('usaCompostableGuide.sections.state-laws.caTitle')}</h4>
              <p className="text-sm font-['JetBrains_Mono']">
                {t('usaCompostableGuide.sections.state-laws.caDesc')}
              </p>
            </div>
            <div className="bg-gray-50 border-2 border-black p-4">
              <h4 className="font-bold text-lg mb-2">{t('usaCompostableGuide.sections.state-laws.waTitle')}</h4>
              <p className="text-sm font-['JetBrains_Mono']">
                {t('usaCompostableGuide.sections.state-laws.waDesc')}
              </p>
            </div>
            <div className="bg-gray-50 border-2 border-black p-4">
              <h4 className="font-bold text-lg mb-2">{t('usaCompostableGuide.sections.state-laws.coTitle')}</h4>
              <p className="text-sm font-['JetBrains_Mono']">
                {t('usaCompostableGuide.sections.state-laws.coDesc')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials-specs',
      title: t('usaCompostableGuide.sections.materials-specs.title'),
      icon: <Package className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <ClickableImage src="/imgs/topics/compostable_coffee_bags.png" alt="Compostable Coffee Bags Materials" className="w-full h-64 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
          
          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-2xl uppercase mb-4 bg-[#D4FF00] inline-block px-2">{t('usaCompostableGuide.sections.materials-specs.tableTitle')}</h4>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-4 border-black bg-[#F0F0F0]">
                    <th className="p-3 font-['JetBrains_Mono'] font-bold border-r-2 border-black text-sm">{t('usaCompostableGuide.sections.materials-specs.tableHeaderField')}</th>
                    <th className="p-3 font-['JetBrains_Mono'] font-bold border-r-2 border-black text-sm">{t('usaCompostableGuide.sections.materials-specs.tableHeaderProcurement')}</th>
                    <th className="p-3 font-['JetBrains_Mono'] font-bold text-sm">{t('usaCompostableGuide.sections.materials-specs.tableHeaderAdvantage')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaCompostableGuide.sections.materials-specs.tableRow1Field')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaCompostableGuide.sections.materials-specs.tableRow1Procurement')}</td>
                    <td className="p-3 text-sm">{t('usaCompostableGuide.sections.materials-specs.tableRow1Advantage')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaCompostableGuide.sections.materials-specs.tableRow2Field')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaCompostableGuide.sections.materials-specs.tableRow2Procurement')}</td>
                    <td className="p-3 text-sm">{t('usaCompostableGuide.sections.materials-specs.tableRow2Advantage')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaCompostableGuide.sections.materials-specs.tableRow3Field')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaCompostableGuide.sections.materials-specs.tableRow3Procurement')}</td>
                    <td className="p-3 text-sm">{t('usaCompostableGuide.sections.materials-specs.tableRow3Advantage')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaCompostableGuide.sections.materials-specs.tableRow4Field')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaCompostableGuide.sections.materials-specs.tableRow4Procurement')}</td>
                    <td className="p-3 text-sm">{t('usaCompostableGuide.sections.materials-specs.tableRow4Advantage')}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('usaCompostableGuide.sections.materials-specs.tableRow5Field')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('usaCompostableGuide.sections.materials-specs.tableRow5Procurement')}</td>
                    <td className="p-3 text-sm">{t('usaCompostableGuide.sections.materials-specs.tableRow5Advantage')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a 
              href="https://pouch.eco/products"
              className="inline-flex items-center justify-center gap-3 bg-black text-[#D4FF00] px-8 py-4 border-4 border-black font-['JetBrains_Mono'] font-bold uppercase hover:bg-[#D4FF00] hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Leaf className="w-5 h-5" />
              {t('usaCompostableGuide.sections.materials-specs.shopBtn')}
            </a>
            <a 
              href="https://achievepack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#00FFFF] text-black px-8 py-4 border-4 border-black font-['JetBrains_Mono'] font-bold uppercase hover:bg-black hover:text-[#00FFFF] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Building2 className="w-5 h-5" />
              {t('usaCompostableGuide.sections.materials-specs.bulkBtn')}
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'b2b-store-links',
      title: t('usaCompostableGuide.sections.b2b-store-links.title'),
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('usaCompostableGuide.sections.b2b-store-links.p1Part1')}
            <a href="https://achievepack.com/store/product/sample-assorted-eco" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('usaCompostableGuide.sections.b2b-store-links.sampleKit')}</a>
            {t('usaCompostableGuide.sections.b2b-store-links.p1Part2')}
            <a href="https://achievepack.com/store/product/media__1780570697340.jpg" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('usaCompostableGuide.sections.b2b-store-links.rollstockFilm')}</a>
            {t('usaCompostableGuide.sections.b2b-store-links.p1Part3')}
            <a href="https://achievepack.com/store/product/transparent-colorful-cellophane-candy-wrapping-paper" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('usaCompostableGuide.sections.b2b-store-links.candyWrapper')}</a>
            {t('usaCompostableGuide.sections.b2b-store-links.p1Part4')}
          </p>
        </div>
      )
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('usaCompostableGuide.meta.title')}
      metaDescription={t('usaCompostableGuide.meta.description')}
      canonicalUrl="https://pouch.eco/blog/usa-compostable-guide"
      keywords={['compostable packaging USA', 'ASTM D6400', 'BPI certified', 'low MOQ compostable bags', 'California packaging laws']}
      publishedDate="2026-01-30T10:00:00Z"
      modifiedDate="2026-05-28T10:00:00Z"
      author="Ryan Wong"
      categoryTag={t('usaCompostableGuide.meta.categoryTag')}
      categoryColor="#10b981"
      heroTitle={
        <>
          {t('usaCompostableGuide.hero.titleLine1')}<br />
          <span className="bg-black text-white px-2">{t('usaCompostableGuide.hero.titleLine2')}</span>
        </>
      }
      heroSubtitle={t('usaCompostableGuide.hero.subtitle')}
      heroImage="/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp"
      heroImageAlt={t('usaCompostableGuide.hero.imageAlt')}
      sections={sections}
      
      faqSections={[
        {
          q: t('usaCompostableGuide.faq.q1.q'),
          a: t('usaCompostableGuide.faq.q1.a')
        },
        {
          q: t('usaCompostableGuide.faq.q2.q'),
          a: t('usaCompostableGuide.faq.q2.a')
        },
        {
          q: t('usaCompostableGuide.faq.q3.q'),
          a: t('usaCompostableGuide.faq.q3.a')
        },
        {
          q: t('usaCompostableGuide.faq.q4.q'),
          a: t('usaCompostableGuide.faq.q4.a')
        },
        {
          q: t('usaCompostableGuide.faq.q5.q'),
          a: t('usaCompostableGuide.faq.q5.a')
        },
        {
          q: t('usaCompostableGuide.faq.q6.q'),
          a: t('usaCompostableGuide.faq.q6.a')
        }
      ]}
      
      calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
      achievePackLink="https://achievepack.com"
      achievePackText={t('usaCompostableGuide.footer.achievePackText')}
      
      showTableOfContents={true}
      relatedArticles={[
        {
          title: t('usaCompostableGuide.related.art1'),
          url: '/blog/usa-snacks-packaging-guide',
          image: '/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp'
        },
        {
          title: t('usaCompostableGuide.related.art2'),
          url: '/blog/industrial-compostable-guide',
          image: '/imgs/seo-photos/a_achievepack_bpi_certified_5482390.webp'
        },
        {
          title: t('usaCompostableGuide.related.art3'),
          url: '/blog/home-compostable-guide',
          image: '/imgs/seo-photos/a_achievepack_home_compostable_balcony_9883994.webp'
        }
      ]}
    />
  )
}
