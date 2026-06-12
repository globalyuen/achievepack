import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Leaf, Shield, FileCheck, CheckCircle, Package, Download, Building2 } from 'lucide-react'

export default function OrganicComplianceSupportGuide() {
  const { t } = useTranslation()

  const sections = [
    {
      id: 'commitment',
      title: t('organicComplianceSupportGuide.sections.commitment.title'),
      icon: <Leaf className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900">
            {t('organicComplianceSupportGuide.sections.commitment.p1')}
          </p>
          <p>
            {t('organicComplianceSupportGuide.sections.commitment.p2Part1')}<strong>{t('organicComplianceSupportGuide.sections.commitment.p2Bold')}</strong>{t('organicComplianceSupportGuide.sections.commitment.p2Part2')}
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-2xl uppercase mb-4">{t('organicComplianceSupportGuide.sections.commitment.boxTitle')}</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span>{t('organicComplianceSupportGuide.sections.commitment.item1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span>{t('organicComplianceSupportGuide.sections.commitment.item2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span>{t('organicComplianceSupportGuide.sections.commitment.item3')}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'non-gmo',
      title: t('organicComplianceSupportGuide.sections.non-gmo.title'),
      icon: <CheckCircle className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p>
            {t('organicComplianceSupportGuide.sections.non-gmo.p1Part1')}<strong>{t('organicComplianceSupportGuide.sections.non-gmo.p1Bold')}</strong>{t('organicComplianceSupportGuide.sections.non-gmo.p1Part2')}
          </p>

          <div className="space-y-4">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3">{t('organicComplianceSupportGuide.sections.non-gmo.card1Title')}</h4>
              <p>
                {t('organicComplianceSupportGuide.sections.non-gmo.card1Desc')}
              </p>
            </div>
            
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3">{t('organicComplianceSupportGuide.sections.non-gmo.card2Title')}</h4>
              <p>
                {t('organicComplianceSupportGuide.sections.non-gmo.card2Desc')}
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3">{t('organicComplianceSupportGuide.sections.non-gmo.card3Title')}</h4>
              <p>
                {t('organicComplianceSupportGuide.sections.non-gmo.card3Desc')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t('organicComplianceSupportGuide.sections.certifications.title'),
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p>
            {t('organicComplianceSupportGuide.sections.certifications.p1')}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-4 border-black bg-white">
              <thead>
                <tr className="bg-black text-white font-['JetBrains_Mono'] font-bold uppercase">
                  <th className="p-4 border-b-4 border-black border-r-4">{t('organicComplianceSupportGuide.sections.certifications.th1')}</th>
                  <th className="p-4 border-b-4 border-black border-r-4">{t('organicComplianceSupportGuide.sections.certifications.th2')}</th>
                  <th className="p-4 border-b-4 border-black">{t('organicComplianceSupportGuide.sections.certifications.th3')}</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="p-4 border-b border-r-4 border-black font-bold whitespace-nowrap">{t('organicComplianceSupportGuide.sections.certifications.row1Col1')}</td>
                  <td className="p-4 border-b border-r-4 border-black">{t('organicComplianceSupportGuide.sections.certifications.row1Col2')}</td>
                  <td className="p-4 border-b border-black">{t('organicComplianceSupportGuide.sections.certifications.row1Col3')}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 border-b border-r-4 border-black font-bold whitespace-nowrap">{t('organicComplianceSupportGuide.sections.certifications.row2Col1')}</td>
                  <td className="p-4 border-b border-r-4 border-black">{t('organicComplianceSupportGuide.sections.certifications.row2Col2')}</td>
                  <td className="p-4 border-b border-black">{t('organicComplianceSupportGuide.sections.certifications.row2Col3')}</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-r-4 border-black font-bold whitespace-nowrap">{t('organicComplianceSupportGuide.sections.certifications.row3Col1')}</td>
                  <td className="p-4 border-b border-r-4 border-black">{t('organicComplianceSupportGuide.sections.certifications.row3Col2')}</td>
                  <td className="p-4 border-b border-black">{t('organicComplianceSupportGuide.sections.certifications.row3Col3')}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 border-r-4 border-black font-bold whitespace-nowrap">{t('organicComplianceSupportGuide.sections.certifications.row4Col1')}</td>
                  <td className="p-4 border-r-4 border-black">{t('organicComplianceSupportGuide.sections.certifications.row4Col2')}</td>
                  <td className="p-4 border-black">{t('organicComplianceSupportGuide.sections.certifications.row4Col3')}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-2xl uppercase mb-4 bg-[#D4FF00] inline-block px-2">{t('organicComplianceSupportGuide.sections.certifications.tableTitle')}</h4>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-4 border-black bg-[#F0F0F0]">
                    <th className="p-3 font-['JetBrains_Mono'] font-bold border-r-2 border-black text-sm">{t('organicComplianceSupportGuide.sections.certifications.tableHeaderField')}</th>
                    <th className="p-3 font-['JetBrains_Mono'] font-bold border-r-2 border-black text-sm">{t('organicComplianceSupportGuide.sections.certifications.tableHeaderProcurement')}</th>
                    <th className="p-3 font-['JetBrains_Mono'] font-bold text-sm">{t('organicComplianceSupportGuide.sections.certifications.tableHeaderAdvantage')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('organicComplianceSupportGuide.sections.certifications.tableRow1Field')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('organicComplianceSupportGuide.sections.certifications.tableRow1Procurement')}</td>
                    <td className="p-3 text-sm">{t('organicComplianceSupportGuide.sections.certifications.tableRow1Advantage')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('organicComplianceSupportGuide.sections.certifications.tableRow2Field')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('organicComplianceSupportGuide.sections.certifications.tableRow2Procurement')}</td>
                    <td className="p-3 text-sm">{t('organicComplianceSupportGuide.sections.certifications.tableRow2Advantage')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('organicComplianceSupportGuide.sections.certifications.tableRow3Field')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('organicComplianceSupportGuide.sections.certifications.tableRow3Procurement')}</td>
                    <td className="p-3 text-sm">{t('organicComplianceSupportGuide.sections.certifications.tableRow3Advantage')}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('organicComplianceSupportGuide.sections.certifications.tableRow4Field')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('organicComplianceSupportGuide.sections.certifications.tableRow4Procurement')}</td>
                    <td className="p-3 text-sm">{t('organicComplianceSupportGuide.sections.certifications.tableRow4Advantage')}</td>
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
              {t('organicComplianceSupportGuide.sections.certifications.shopBtn')}
            </a>
            <a 
              href="https://achievepack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#00FFFF] text-black px-8 py-4 border-4 border-black font-['JetBrains_Mono'] font-bold uppercase hover:bg-black hover:text-[#00FFFF] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Building2 className="w-5 h-5" />
              {t('organicComplianceSupportGuide.sections.certifications.bulkBtn')}
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'downloads',
      title: t('organicComplianceSupportGuide.sections.downloads.title'),
      icon: <Download className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl">
            {t('organicComplianceSupportGuide.sections.downloads.p1')}
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <a 
              href="/docs/Non_GMO_Material_Declaration.pdf" 
              target="_blank"
              download
              className="group bg-white border-4 border-black p-6 flex flex-col items-center text-center hover:bg-[#D4FF00] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 block"
            >
              <FileCheck className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-black uppercase mb-2">{t('organicComplianceSupportGuide.sections.downloads.doc1Title')}</h4>
              <span className="text-sm border-2 border-black px-3 py-1 font-['JetBrains_Mono'] font-bold">{t('organicComplianceSupportGuide.sections.downloads.downloadPdf')}</span>
            </a>
            
            <a 
              href="/certifications" 
              className="group bg-white border-4 border-black p-6 flex flex-col items-center text-center hover:bg-[#D4FF00] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 block"
            >
              <Shield className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-black uppercase mb-2">{t('organicComplianceSupportGuide.sections.downloads.doc2Title')}</h4>
              <span className="text-sm border-2 border-black px-3 py-1 font-['JetBrains_Mono'] font-bold">{t('organicComplianceSupportGuide.sections.downloads.viewCertificates')}</span>
            </a>

            <a 
              href="/certifications" 
              className="group bg-white border-4 border-black p-6 flex flex-col items-center text-center hover:bg-[#D4FF00] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 block"
            >
              <Package className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-black uppercase mb-2">{t('organicComplianceSupportGuide.sections.downloads.doc3Title')}</h4>
              <span className="text-sm border-2 border-black px-3 py-1 font-['JetBrains_Mono'] font-bold">{t('organicComplianceSupportGuide.sections.downloads.viewCertificates')}</span>
            </a>
          </div>

          <div className="bg-black text-white p-8 border-4 border-black text-center mt-8">
            <h4 className="font-black text-3xl uppercase mb-4 text-[#D4FF00]">{t('organicComplianceSupportGuide.sections.downloads.boxTitle')}</h4>
            <p className="text-lg mb-6">{t('organicComplianceSupportGuide.sections.downloads.boxDesc')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/store"
                className="inline-flex items-center justify-center gap-2 bg-[#D4FF00] text-black px-8 py-4 border-4 border-[#D4FF00] font-['JetBrains_Mono'] font-bold uppercase hover:bg-transparent hover:text-[#D4FF00] transition-colors"
              >
                {t('organicComplianceSupportGuide.sections.downloads.btn1')}
              </a>
              <a 
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 border-4 border-white font-['JetBrains_Mono'] font-bold uppercase hover:bg-white hover:text-black transition-colors"
              >
                {t('organicComplianceSupportGuide.sections.downloads.btn2')}
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'b2b-store-links',
      title: t('organicComplianceSupportGuide.sections.b2b-store-links.title'),
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('organicComplianceSupportGuide.sections.b2b-store-links.p1Part1')}
            <a href="https://achievepack.com/store/product/sample-assorted-eco" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('organicComplianceSupportGuide.sections.b2b-store-links.sampleKit')}</a>
            {t('organicComplianceSupportGuide.sections.b2b-store-links.p1Part2')}
            <a href="https://achievepack.com/store/product/media__1780570697340.jpg" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('organicComplianceSupportGuide.sections.b2b-store-links.rollstockFilm')}</a>
            {t('organicComplianceSupportGuide.sections.b2b-store-links.p1Part3')}
            <a href="https://achievepack.com/store/product/transparent-colorful-cellophane-candy-wrapping-paper" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('organicComplianceSupportGuide.sections.b2b-store-links.candyWrapper')}</a>
            {t('organicComplianceSupportGuide.sections.b2b-store-links.p1Part4')}
          </p>
        </div>
      )
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('organicComplianceSupportGuide.meta.title')}
      metaDescription={t('organicComplianceSupportGuide.meta.description')}
      canonicalUrl="https://pouch.eco/blog/organic-compliance-support"
      keywords={[
        'organic packaging compliance',
        'non gmo packaging',
        'USDA organic packaging requirements',
        'compostable packaging for organic food',
        'non gmo sugarcane packaging',
        'organic system plan packaging'
      ]}
      publishedDate="2026-03-12"
      author="Ryan Wong"
      
      heroTitle={
        <>
          {t('organicComplianceSupportGuide.hero.titlePart1')} <span className="text-[#10b981]">{t('organicComplianceSupportGuide.hero.titleAccent')}</span><br />
          {t('organicComplianceSupportGuide.hero.titlePart2')}
        </>
      }
      heroSubtitle={t('organicComplianceSupportGuide.hero.subtitle')}
      heroImage="/imgs/seo-photos/organic/organic_dried_mango_pouch.webp"
      heroImageAlt={t('organicComplianceSupportGuide.hero.imageAlt')}
      categoryTag="COMPLIANCE"
      categoryColor="#10b981"
      readTime="5 min read"
      
      sections={sections}
      
      faqSections={[
        {
          q: t('organicComplianceSupportGuide.faq.q1.q'),
          a: t('organicComplianceSupportGuide.faq.q1.a')
        },
        {
          q: t('organicComplianceSupportGuide.faq.q2.q'),
          a: t('organicComplianceSupportGuide.faq.q2.a')
        },
        {
          q: t('organicComplianceSupportGuide.faq.q3.q'),
          a: t('organicComplianceSupportGuide.faq.q3.a')
        },
        {
          q: t('organicComplianceSupportGuide.faq.q4.q'),
          a: t('organicComplianceSupportGuide.faq.q4.a')
        },
        {
          q: t('organicComplianceSupportGuide.faq.q5.q'),
          a: t('organicComplianceSupportGuide.faq.q5.a')
        },
        {
          q: t('organicComplianceSupportGuide.faq.q6.q'),
          a: t('organicComplianceSupportGuide.faq.q6.a')
        }
      ]}
      
      ctaTitle={t('organicComplianceSupportGuide.footer.ctaTitle')}
      ctaDescription={t('organicComplianceSupportGuide.footer.ctaDescription')}
      calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
      achievePackLink="https://achievepack.com/composting/organic-compliance-support"
      achievePackText={t('organicComplianceSupportGuide.footer.achievePackText')}
      
      showTableOfContents={true}
      relatedArticles={[
        {
          title: t('organicComplianceSupportGuide.related.art1'),
          url: '/blog/usa-compostable-guide',
          image: '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp'
        },
        {
          title: t('organicComplianceSupportGuide.related.art2'),
          url: '/blog/industrial-compostable-guide',
          image: '/imgs/seo-photos/a_achievepack_bpi_certified_5482390.webp'
        }
      ]}
    />
  )
}

