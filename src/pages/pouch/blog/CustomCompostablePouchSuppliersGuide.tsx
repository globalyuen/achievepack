import { Factory, Shield, Globe, Award, MessageCircle, ArrowRight, AlertTriangle, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { useTranslation } from 'react-i18next'

interface BlogArticleSection {
  id: string
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

import { useSeoBlogOverride } from '../../../hooks/useSeoBlogOverride'
import DynamicBlogArticleRender from '../../../components/pouch/DynamicBlogArticleRender'

export default function CustomCompostablePouchSuppliersGuide() {
  const { t } = useTranslation()
  const override = useSeoBlogOverride('custom-compostable-pouch-suppliers-guide')
  if (override) {
    return <DynamicBlogArticleRender post={override} />
  }

  const sections: BlogArticleSection[] = [
    {
      id: 'vetting-suppliers',
      title: t('customCompostablePouchSuppliersGuide.sections.vettingSuppliers.title'),
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <p className="text-lg leading-relaxed">
            {t('customCompostablePouchSuppliersGuide.sections.vettingSuppliers.intro')}
          </p>
          <div className="bg-[#FF0000] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white">
             <h3 className="font-black text-2xl uppercase mb-4">
               {t('customCompostablePouchSuppliersGuide.sections.vettingSuppliers.redFlags')}
             </h3>
             <p className="font-bold text-lg mb-4">
                {t('customCompostablePouchSuppliersGuide.sections.vettingSuppliers.warning')}
             </p>
             <div className="bg-black text-[#D4FF00] p-4 font-['JetBrains_Mono']">
                <ul className="space-y-2">
                   <li dangerouslySetInnerHTML={{ __html: t('customCompostablePouchSuppliersGuide.sections.vettingSuppliers.list1') }} />
                   <li dangerouslySetInnerHTML={{ __html: t('customCompostablePouchSuppliersGuide.sections.vettingSuppliers.list2') }} />
                   <li dangerouslySetInnerHTML={{ __html: t('customCompostablePouchSuppliersGuide.sections.vettingSuppliers.list3') }} />
                </ul>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'the-achieve-pack-difference',
      title: t('customCompostablePouchSuppliersGuide.sections.pouchEcoStandard.title'),
      icon: <Award className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
           <p className="text-lg leading-relaxed">
             {t('customCompostablePouchSuppliersGuide.sections.pouchEcoStandard.intro')}
           </p>
           <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-black text-xl uppercase mb-6">
                {t('customCompostablePouchSuppliersGuide.sections.pouchEcoStandard.header')}
              </h3>
              <p className="mb-4 text-lg font-bold">
                We don't just sell bags. We sell <Link to="/blog/usa-labeling-guide" className="underline hover:bg-white px-1">{t('customCompostablePouchSuppliersGuide.sections.pouchEcoStandard.complianceLinkText')}</Link> and speed.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-white border-2 border-black p-4">
                    <h4 className="font-black text-lg uppercase mb-2">
                      {t('customCompostablePouchSuppliersGuide.sections.pouchEcoStandard.capTitle')}
                    </h4>
                    <p 
                      className="text-sm font-['JetBrains_Mono']"
                      dangerouslySetInnerHTML={{ __html: t('customCompostablePouchSuppliersGuide.sections.pouchEcoStandard.capText') }}
                    />
                 </div>
                 <div className="bg-white border-2 border-black p-4">
                    <h4 className="font-black text-lg uppercase mb-2">
                      {t('customCompostablePouchSuppliersGuide.sections.pouchEcoStandard.compTitle')}
                    </h4>
                    <p className="text-sm font-['JetBrains_Mono']">
                       <strong>ASTM D6400:</strong> <Link to="/blog/bpi-certified-guide" className="underline">Certified</Link><br/>
                       <strong>EN 13432:</strong> <Link to="/blog/industrial-compostable-guide" className="underline">Certified</Link><br/>
                       <strong>TÜV Home:</strong> <Link to="/blog/home-compostable-guide" className="underline">Certified</Link>
                    </p>
                 </div>
              </div>
           </div>

           <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] my-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#00FFFF] border-2 border-black p-3">
                  <Factory className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-xl uppercase mb-2">
                    {t('customCompostablePouchSuppliersGuide.sections.pouchEcoStandard.enterpriseTitle')}
                  </h4>
                  <p className="text-sm mb-4">
                    {t('customCompostablePouchSuppliersGuide.sections.pouchEcoStandard.enterpriseText')}
                  </p>
                  <a
                    href="https://achievepack.com/topics/custom-compostable-pouch-suppliers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-[#00FFFF] px-4 py-2 border-2 border-black font-['JetBrains_Mono'] font-bold text-xs uppercase hover:bg-[#00FFFF] hover:text-black transition-colors"
                  >
                    {t('customCompostablePouchSuppliersGuide.sections.pouchEcoStandard.enterpriseBtn')}
                  </a>
                </div>
              </div>
           </div>
        </div>
      )
    },
    {
       id: 'technical-specifications',
       title: t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.title'),
       icon: <Shield className="w-6 h-6" />,
       content: (
         <div className="space-y-6">
           <p className="text-lg leading-relaxed">
             {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.intro')}
           </p>
           <div className="overflow-x-auto">
             <table className="w-full border-4 border-black bg-white text-sm">
               <thead>
                 <tr className="bg-black text-[#D4FF00]">
                   <th className="border-2 border-black p-3 text-left font-['JetBrains_Mono'] uppercase">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.th1')}
                   </th>
                   <th className="border-2 border-black p-3 text-left font-['JetBrains_Mono'] uppercase">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.th2')}
                   </th>
                   <th className="border-2 border-black p-3 text-left font-['JetBrains_Mono'] uppercase">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.th3')}
                   </th>
                 </tr>
               </thead>
               <tbody className="font-mono">
                 <tr className="border-2 border-black">
                   <td className="border-2 border-black p-3 font-bold">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.r1c1')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.r1c2')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.r1c3')}
                   </td>
                 </tr>
                 <tr className="border-2 border-black bg-gray-50">
                   <td className="border-2 border-black p-3 font-bold">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.r2c1')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.r2c2')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.r2c3')}
                   </td>
                 </tr>
                 <tr className="border-2 border-black">
                   <td className="border-2 border-black p-3 font-bold">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.r3c1')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.r3c2')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.r3c3')}
                   </td>
                 </tr>
                 <tr className="border-2 border-black bg-gray-50">
                   <td className="border-2 border-black p-3 font-bold">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.r4c1')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.r4c2')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('customCompostablePouchSuppliersGuide.sections.technicalSpecifications.r4c3')}
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       )
    },
    {
       id: 'global-reach',
       title: t('customCompostablePouchSuppliersGuide.sections.globalReach.title'),
       icon: <Globe className="w-6 h-6" />,
       content: (
          <div className="space-y-6">
             <div className="bg-white border-4 border-black p-6">
                <h3 className="font-black text-xl uppercase mb-4">
                  {t('customCompostablePouchSuppliersGuide.sections.globalReach.header')}
                </h3>
                <p className="mb-4">
                  {t('customCompostablePouchSuppliersGuide.sections.globalReach.intro')}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-['JetBrains_Mono'] text-center text-black">
                   <div className="bg-[#F0F0F0] p-3 border-2 border-black">🇺🇸 USA</div>
                   <div className="bg-[#F0F0F0] p-3 border-2 border-black">🇬🇧 UK</div>
                   <div className="bg-[#F0F0F0] p-3 border-2 border-black">🇪🇺 EU</div>
                   <div className="bg-[#F0F0F0] p-3 border-2 border-black">🇦🇺 AU</div>
                </div>
             </div>
          </div>
       )
    },
    {
      id: 'factory-direct',
      title: t('customCompostablePouchSuppliersGuide.sections.factoryDirect.title'),
      icon: <Factory className="w-6 h-6" />,
      content: (
         <div className="bg-[#D4FF00] border-4 border-black p-6 text-black">
            <h3 className="font-black text-xl uppercase mb-4">
              {t('customCompostablePouchSuppliersGuide.sections.factoryDirect.header')}
            </h3>
            <p className="mb-4">
              {t('customCompostablePouchSuppliersGuide.sections.factoryDirect.intro')}
            </p>
            <div className="bg-white border-2 border-black p-4">
               <strong className="block text-lg uppercase mb-2">
                 {t('customCompostablePouchSuppliersGuide.sections.factoryDirect.sub')}
               </strong>
               <ul className="text-sm font-['JetBrains_Mono'] list-disc list-inside space-y-1">
                  <li>{t('customCompostablePouchSuppliersGuide.sections.factoryDirect.list1')}</li>
                  <li>{t('customCompostablePouchSuppliersGuide.sections.factoryDirect.list2')}</li>
                  <li>{t('customCompostablePouchSuppliersGuide.sections.factoryDirect.list3')}</li>
                  <li>{t('customCompostablePouchSuppliersGuide.sections.factoryDirect.list4')}</li>
               </ul>
            </div>
         </div>
      )
    },
    {
      id: 'b2b-store-links',
      title: t('customCompostablePouchSuppliersGuide.sections.b2bStoreLinks.title'),
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6">
          <p 
            className="text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('customCompostablePouchSuppliersGuide.sections.b2bStoreLinks.intro') }}
          />
        </div>
      )
    }
  ]

  const faqSections = [
    {
      q: t('customCompostablePouchSuppliersGuide.faq.q1'),
      a: t('customCompostablePouchSuppliersGuide.faq.a1')
    },
    {
      q: t('customCompostablePouchSuppliersGuide.faq.q2'),
      a: t('customCompostablePouchSuppliersGuide.faq.a2')
    },
    {
      q: t('customCompostablePouchSuppliersGuide.faq.q3'),
      a: t('customCompostablePouchSuppliersGuide.faq.a3')
    },
    {
      q: t('customCompostablePouchSuppliersGuide.faq.q4'),
      a: t('customCompostablePouchSuppliersGuide.faq.a4')
    },
    {
      q: t('customCompostablePouchSuppliersGuide.faq.q5'),
      a: t('customCompostablePouchSuppliersGuide.faq.a5')
    },
    {
      q: t('customCompostablePouchSuppliersGuide.faq.q6'),
      a: t('customCompostablePouchSuppliersGuide.faq.a6')
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('customCompostablePouchSuppliersGuide.title')}
      metaDescription={t('customCompostablePouchSuppliersGuide.metaDescription')}
      canonicalUrl="https://pouch.eco/blog/custom-compostable-pouch-suppliers-guide"
      keywords={t('customCompostablePouchSuppliersGuide.keywords').split(',').map((k: string) => k.trim())}
      publishedDate="2026-02-11T11:00:00Z"
      modifiedDate="2026-02-11T11:00:00Z"
      categoryTag="Sourcing Guide"
      categoryColor="#f59e0b"
      heroTitle={
        <>
          Supplier Vetting Guide:<br />
          <span className="text-[#00FFFF]">Don't Get Scammed.</span>
        </>
      }
      heroSubtitle={t('customCompostablePouchSuppliersGuide.heroSubtitle')}
      heroImage="/imgs/company/bpi/bpipouch.webp"
      heroImageAlt={t('customCompostablePouchSuppliersGuide.heroImageAlt')}
      sections={sections}
      faqSections={faqSections}
      calendlyUrl="https://calendly.com/ryan-achievepack/30min"
      achievePackLink="https://achievepack.com/topics/custom-compostable-pouch-suppliers"
      showTableOfContents={true}
      relatedArticles={[
        {
          title: t('customCompostablePouchSuppliersGuide.related.t1'),
          url: '/blog/low-moq-packaging-guide',
          image: '/imgs/product-hero-pouch.webp'
        },
        {
          title: t('customCompostablePouchSuppliersGuide.related.t2'),
          url: '/blog/dtc-sustainable-packaging-guide',
          image: '/imgs/product-pcr-biobased.webp'
        },
        {
           title: t('customCompostablePouchSuppliersGuide.related.t3'),
           url: '/blog/bpi-certified-guide',
           image: '/imgs/company/bpi/a_bpi_certification_verification_badge_3065504.webp'
        }
      ]}
    />
  )
}
