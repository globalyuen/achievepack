import { Target, ShoppingCart, Truck, TrendingUp, Sparkles, MessageCircle, ArrowRight, Zap, CheckCircle, Package, Factory } from 'lucide-react'
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

export default function DTCSustainablePackagingGuide() {
  const { t } = useTranslation()
  const override = useSeoBlogOverride('dtc-sustainable-packaging-guide')
  if (override) {
    return <DynamicBlogArticleRender post={override} />
  }

  const sections: BlogArticleSection[] = [
    {
      id: 'dtc-challenge',
      title: t('dtcSustainablePackagingGuide.sections.dtcChallenge.title'),
      icon: <Target className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <p className="text-lg leading-relaxed">
            {t('dtcSustainablePackagingGuide.sections.dtcChallenge.intro')}
          </p>
          <div className="bg-[#FF00FF] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-2xl uppercase mb-4 text-white">
              {t('dtcSustainablePackagingGuide.sections.dtcChallenge.truthTitle')}
            </h3>
            <p className="font-bold text-lg mb-4 text-white">
              {t('dtcSustainablePackagingGuide.sections.dtcChallenge.truthText')}
            </p>
            <div className="bg-white border-2 border-black p-4 grid md:grid-cols-2 gap-6 text-black">
               <div>
                  <h4 className="font-black text-lg uppercase mb-2">
                    {t('dtcSustainablePackagingGuide.sections.dtcChallenge.oldWayTitle')}
                  </h4>
                  <ul className="text-sm font-['JetBrains_Mono'] space-y-2 opacity-50">
                     <li>{t('dtcSustainablePackagingGuide.sections.dtcChallenge.oldWay1')}</li>
                     <li>{t('dtcSustainablePackagingGuide.sections.dtcChallenge.oldWay2')}</li>
                     <li>{t('dtcSustainablePackagingGuide.sections.dtcChallenge.oldWay3')}</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-black text-lg uppercase mb-2 text-[#D4FF00] bg-black inline-block px-1">
                    {t('dtcSustainablePackagingGuide.sections.dtcChallenge.pouchEcoWayTitle')}
                  </h4>
                  <ul className="text-sm font-['JetBrains_Mono'] space-y-2 font-bold">
                     <li>✓ <Link to="/materials" className="underline hover:text-[#FF00FF]">{t('dtcSustainablePackagingGuide.sections.dtcChallenge.pouchEcoWay1')}</Link></li>
                     <li>✓ <Link to="/blog/eco-packaging-regulations-guide" className="underline hover:text-[#FF00FF]">{t('dtcSustainablePackagingGuide.sections.dtcChallenge.pouchEcoWay2')}</Link></li>
                     <li>✓ <Link to="/blog/low-moq-packaging-guide" className="underline hover:text-[#FF00FF]">{t('dtcSustainablePackagingGuide.sections.dtcChallenge.pouchEcoWay3')}</Link></li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'custom-solutions',
      title: t('dtcSustainablePackagingGuide.sections.customSolutions.title'),
      icon: <ShoppingCart className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
           <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-black text-xl uppercase mb-6">
                {t('dtcSustainablePackagingGuide.sections.customSolutions.header')}
              </h3>
              <p className="mb-4 text-lg">
                {t('dtcSustainablePackagingGuide.sections.customSolutions.intro')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-neutral-100 border-2 border-black p-4 relative">
                    <Zap className="absolute top-2 right-2 w-6 h-6 text-[#D4FF00] fill-black" />
                    <h4 className="font-black text-lg uppercase">
                      <Link to="/printing/digital" className="hover:underline text-black">
                        {t('dtcSustainablePackagingGuide.sections.customSolutions.digitalPrintingTitle')}
                      </Link>
                    </h4>
                    <p 
                      className="text-xs font-['JetBrains_Mono'] mt-2 text-black"
                      dangerouslySetInnerHTML={{ __html: t('dtcSustainablePackagingGuide.sections.customSolutions.digitalPrintingText') }}
                    />
                 </div>
                 <div className="bg-neutral-100 border-2 border-black p-4 relative">
                    <Package className="absolute top-2 right-2 w-6 h-6 text-[#D4FF00] fill-black" />
                    <h4 className="font-black text-lg uppercase">
                      {t('dtcSustainablePackagingGuide.sections.customSolutions.finishesTitle')}
                    </h4>
                    <p className="text-xs font-['JetBrains_Mono'] mt-2 text-black">
                       <strong><Link to="/options/surface-finish" className="hover:underline text-black">{t('dtcSustainablePackagingGuide.sections.customSolutions.softTouchLinkText')}</Link></strong> For beauty brands<br/>
                       <strong><Link to="/options/surface-finish" className="hover:underline text-black">{t('dtcSustainablePackagingGuide.sections.customSolutions.spotGlossLinkText')}</Link></strong> For premium food<br/>
                       Kraft: For organic vibes
                    </p>
                 </div>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 'ecommerce-durability',
      title: t('dtcSustainablePackagingGuide.sections.ecommerceDurability.title'),
      icon: <Truck className="w-6 h-6" />,
      content: (
         <div className="space-y-6">
            <div className="bg-[#D4FF00] border-4 border-black p-6 text-black">
               <h3 className="font-black text-xl uppercase mb-4">
                 {t('dtcSustainablePackagingGuide.sections.ecommerceDurability.header')}
               </h3>
               <p className="mb-6 font-bold">
                 {t('dtcSustainablePackagingGuide.sections.ecommerceDurability.intro')}
               </p>
               
               <div className="grid md:grid-cols-3 gap-4 font-['JetBrains_Mono'] text-sm">
                  <div className="bg-white border-2 border-black p-3">
                     <strong className="block mb-1 border-b-2 border-black">
                       {t('dtcSustainablePackagingGuide.sections.ecommerceDurability.punctureTitle')}
                     </strong>
                     {t('dtcSustainablePackagingGuide.sections.ecommerceDurability.punctureText')}
                  </div>
                  <div className="bg-white border-2 border-black p-3">
                     <strong className="block mb-1 border-b-2 border-black">
                       {t('dtcSustainablePackagingGuide.sections.ecommerceDurability.sealTitle')}
                     </strong>
                     {t('dtcSustainablePackagingGuide.sections.ecommerceDurability.sealText')}
                  </div>
                  <div className="bg-white border-2 border-black p-3">
                     <strong className="block mb-1 border-b-2 border-black">
                       {t('dtcSustainablePackagingGuide.sections.ecommerceDurability.barrierTitle')}
                     </strong>
                     {t('dtcSustainablePackagingGuide.sections.ecommerceDurability.barrierText')}
                  </div>
               </div>
            </div>
         </div>
      )
    },
    {
       id: 'technical-specifications',
       title: t('dtcSustainablePackagingGuide.sections.technicalSpecifications.title'),
       icon: <Package className="w-6 h-6" />,
       content: (
         <div className="space-y-6">
           <p className="text-lg leading-relaxed">
             {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.intro')}
           </p>
           <div className="overflow-x-auto">
             <table className="w-full border-4 border-black bg-white text-sm">
               <thead>
                 <tr className="bg-black text-[#D4FF00]">
                   <th className="border-2 border-black p-3 text-left font-['JetBrains_Mono'] uppercase">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.th1')}
                   </th>
                   <th className="border-2 border-black p-3 text-left font-['JetBrains_Mono'] uppercase">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.th2')}
                   </th>
                   <th className="border-2 border-black p-3 text-left font-['JetBrains_Mono'] uppercase">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.th3')}
                   </th>
                 </tr>
               </thead>
               <tbody className="font-mono">
                 <tr className="border-2 border-black">
                   <td className="border-2 border-black p-3 font-bold">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.r1c1')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.r1c2')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.r1c3')}
                   </td>
                 </tr>
                 <tr className="border-2 border-black bg-gray-50">
                   <td className="border-2 border-black p-3 font-bold">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.r2c1')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.r2c2')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.r2c3')}
                   </td>
                 </tr>
                 <tr className="border-2 border-black">
                   <td className="border-2 border-black p-3 font-bold">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.r3c1')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.r3c2')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.r3c3')}
                   </td>
                 </tr>
                 <tr className="border-2 border-black bg-gray-50">
                   <td className="border-2 border-black p-3 font-bold">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.r4c1')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.r4c2')}
                   </td>
                   <td className="border-2 border-black p-3">
                     {t('dtcSustainablePackagingGuide.sections.technicalSpecifications.r4c3')}
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       )
    },
    {
       id: 'marketing-compliance',
       title: t('dtcSustainablePackagingGuide.sections.marketingCompliance.title'),
       icon: <TrendingUp className="w-6 h-6" />,
       content: (
          <div className="space-y-6">
             <div className="bg-black text-white p-8 border-4 border-[#FF00FF]">
                <h3 className="font-black text-2xl uppercase mb-6 text-[#FF00FF]">
                  {t('dtcSustainablePackagingGuide.sections.marketingCompliance.header')}
                </h3>
                <p className="mb-6">
                  {t('dtcSustainablePackagingGuide.sections.marketingCompliance.intro')}
                </p>
                
                <div className="bg-white text-black border-4 border-[#FF00FF] p-6 font-['JetBrains_Mono']">
                   <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                         <span className="text-green-600 font-bold text-xl">✓</span>
                         <div>
                            <strong className="block"><Link to="/blog/bpi-certified-guide" className="underline hover:text-[#FF00FF]">{t('dtcSustainablePackagingGuide.sections.marketingCompliance.bpiTitle')}</Link></strong>
                            <span className="text-xs text-gray-600">
                              {t('dtcSustainablePackagingGuide.sections.marketingCompliance.bpiProof')}
                            </span>
                         </div>
                      </li>
                      <li className="flex items-start gap-4">
                         <span className="text-green-600 font-bold text-xl">✓</span>
                         <div>
                            <strong className="block"><Link to="/blog/home-compostable-guide" className="underline hover:text-[#FF00FF]">{t('dtcSustainablePackagingGuide.sections.marketingCompliance.tuvTitle')}</Link></strong>
                            <span className="text-xs text-gray-600">
                              {t('dtcSustainablePackagingGuide.sections.marketingCompliance.tuvProof')}
                            </span>
                         </div>
                      </li>
                      <li className="flex items-start gap-4">
                         <span className="text-green-600 font-bold text-xl">✓</span>
                         <div>
                            <strong className="block"><Link to="/blog/usa-labeling-guide" className="underline hover:text-[#FF00FF]">{t('dtcSustainablePackagingGuide.sections.marketingCompliance.h2rTitle')}</Link></strong>
                            <span className="text-xs text-gray-600">
                              {t('dtcSustainablePackagingGuide.sections.marketingCompliance.h2rProof')}
                            </span>
                         </div>
                      </li>
                   </ul>
                </div>
             </div>

             <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] my-6">
                <div className="flex items-start gap-4 text-black">
                  <div className="bg-[#00FFFF] border-2 border-black p-3">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-xl uppercase mb-2">
                      {t('dtcSustainablePackagingGuide.sections.marketingCompliance.enterpriseTitle')}
                    </h4>
                    <p className="text-sm mb-4">
                      {t('dtcSustainablePackagingGuide.sections.marketingCompliance.enterpriseText')}
                    </p>
                    <a
                      href="https://achievepack.com/topics/dtc-sustainable-packaging"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-[#00FFFF] px-4 py-2 border-2 border-black font-['JetBrains_Mono'] font-bold text-xs uppercase hover:bg-[#00FFFF] hover:text-black transition-colors"
                    >
                      {t('dtcSustainablePackagingGuide.sections.marketingCompliance.enterpriseBtn')}
                    </a>
                  </div>
                </div>
             </div>
          </div>
       )
    },
    {
      id: 'b2b-store-links',
      title: t('dtcSustainablePackagingGuide.sections.b2bStoreLinks.title'),
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6">
          <p 
            className="text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('dtcSustainablePackagingGuide.sections.b2bStoreLinks.intro') }}
          />
        </div>
      )
    }
  ]

  const faqSections = [
    {
      q: t('dtcSustainablePackagingGuide.faq.q1'),
      a: t('dtcSustainablePackagingGuide.faq.a1')
    },
    {
      q: t('dtcSustainablePackagingGuide.faq.q2'),
      a: t('dtcSustainablePackagingGuide.faq.a2')
    },
    {
      q: t('dtcSustainablePackagingGuide.faq.q3'),
      a: t('dtcSustainablePackagingGuide.faq.a3')
    },
    {
      q: t('dtcSustainablePackagingGuide.faq.q4'),
      a: t('dtcSustainablePackagingGuide.faq.a4')
    },
    {
      q: t('dtcSustainablePackagingGuide.faq.q5'),
      a: t('dtcSustainablePackagingGuide.faq.a5')
    },
    {
      q: t('dtcSustainablePackagingGuide.faq.q6'),
      a: t('dtcSustainablePackagingGuide.faq.a6')
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('dtcSustainablePackagingGuide.title')}
      metaDescription={t('dtcSustainablePackagingGuide.metaDescription')}
      canonicalUrl="https://pouch.eco/blog/dtc-sustainable-packaging-guide"
      keywords={t('dtcSustainablePackagingGuide.keywords').split(',').map((k: string) => k.trim())}
      publishedDate="2026-02-10T14:00:00Z"
      modifiedDate="2026-02-10T14:00:00Z"
      categoryTag="Direct to Consumer"
      categoryColor="#ec4899"
      heroTitle={
        <>
          DTC Packaging Guide:<br />
          <span className="text-[#FF00FF]">Scale Fast. Stay Green.</span>
        </>
      }
      heroSubtitle={t('dtcSustainablePackagingGuide.heroSubtitle')}
      heroImage="/imgs/product-pcr-biobased.webp"
      heroImageAlt={t('dtcSustainablePackagingGuide.heroImageAlt')}
      sections={sections}
      faqSections={faqSections}
      calendlyUrl="https://calendly.com/ryan-achievepack/30min"
      achievePackLink="https://achievepack.com/topics/dtc-sustainable-packaging"
      showTableOfContents={true}
      relatedArticles={[
        {
           title: t('dtcSustainablePackagingGuide.related.t1'),
           url: '/blog/eco-friendly-food-packaging-guide',
           image: '/imgs/infographic-compostable.webp'
        },
        {
          title: t('dtcSustainablePackagingGuide.related.t2'),
          url: '/blog/usa-labeling-guide',
          image: '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp'
        },
        {
          title: t('dtcSustainablePackagingGuide.related.t3'),
          url: '/blog/low-moq-packaging-guide',
          image: '/imgs/product-hero-pouch.webp'
        }
      ]}
    />
  )
}

