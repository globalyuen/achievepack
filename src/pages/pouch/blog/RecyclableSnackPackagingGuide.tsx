import { Recycle, Cookie, Award, Trash2, Building2, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'

interface BlogArticleSection {
  id: string
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

export default function RecyclableSnackPackagingGuide() {
  const { t } = useTranslation()

  const sections: BlogArticleSection[] = [
    {
      id: 'the-problem',
      title: t('recyclableSnackPackagingGuide.sections.the-problem.title'),
      icon: <Trash2 className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <div className="bg-[#FF0000] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white">
             <h3 className="font-black text-2xl uppercase mb-4">{t('recyclableSnackPackagingGuide.sections.the-problem.sellingTrashTitle')}</h3>
             <p className="font-bold text-lg mb-4">
                {t('recyclableSnackPackagingGuide.sections.the-problem.sellingTrashDesc')}
             </p>
             <div className="bg-black text-[#D4FF00] p-4 text-center font-['JetBrains_Mono']">
                <span className="text-4xl font-black block">0%</span>
                {t('recyclableSnackPackagingGuide.sections.the-problem.recyclabilityStat')}
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'mono-material-solution',
      title: t('recyclableSnackPackagingGuide.sections.mono-material-solution.title'),
      icon: <Recycle className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
           <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-black text-xl uppercase mb-6">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.enterMonoTitle')}</h3>
              <p className="mb-4 text-lg font-bold">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.enterMonoDesc')}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-white border-2 border-black p-4">
                    <h4 className="font-black text-lg uppercase mb-2">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.monoPeTitle')}</h4>
                    <p className="text-sm font-['JetBrains_Mono']">
                       <strong>{t('recyclableSnackPackagingGuide.sections.mono-material-solution.recyclingLabel')}</strong> <Link to="/materials" className="underline hover:text-blue-600">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.storeDropoff')}</Link><br/>
                       <strong>{t('recyclableSnackPackagingGuide.sections.mono-material-solution.barrierLabel')}</strong> {t('recyclableSnackPackagingGuide.sections.mono-material-solution.monoPeBarrier')}<br/>
                       <strong>{t('recyclableSnackPackagingGuide.sections.mono-material-solution.feelLabel')}</strong> {t('recyclableSnackPackagingGuide.sections.mono-material-solution.monoPeFeel')}
                    </p>
                 </div>
                 <div className="bg-white border-2 border-black p-4">
                    <h4 className="font-black text-lg uppercase mb-2">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.monoPpTitle')}</h4>
                    <p className="text-sm font-['JetBrains_Mono']">
                       <strong>{t('recyclableSnackPackagingGuide.sections.mono-material-solution.recyclingLabel')}</strong> {t('recyclableSnackPackagingGuide.sections.mono-material-solution.curbside')}<br/>
                       <strong>{t('recyclableSnackPackagingGuide.sections.mono-material-solution.barrierLabel')}</strong> {t('recyclableSnackPackagingGuide.sections.mono-pp.barrier')}<br/>
                       <strong>{t('recyclableSnackPackagingGuide.sections.mono-material-solution.feelLabel')}</strong> {t('recyclableSnackPackagingGuide.sections.mono-pp.feel')}
                    </p>
                 </div>
              </div>
           </div>

           <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-2xl uppercase mb-4 bg-[#D4FF00] inline-block px-2">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableTitle')}</h4>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-4 border-black bg-[#F0F0F0]">
                    <th className="p-3 font-['JetBrains_Mono'] font-bold border-r-2 border-black text-sm">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableHeaderField')}</th>
                    <th className="p-3 font-['JetBrains_Mono'] font-bold border-r-2 border-black text-sm">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableHeaderProcurement')}</th>
                    <th className="p-3 font-['JetBrains_Mono'] font-bold text-sm">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableHeaderAdvantage')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow1Field')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow1Procurement')}</td>
                    <td className="p-3 text-sm">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow1Advantage')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow2Field')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow2Procurement')}</td>
                    <td className="p-3 text-sm">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow2Advantage')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow3Field')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow3Procurement')}</td>
                    <td className="p-3 text-sm">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow3Advantage')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow4Field')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow4Procurement')}</td>
                    <td className="p-3 text-sm">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow4Advantage')}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow5Field')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow5Procurement')}</td>
                    <td className="p-3 text-sm">{t('recyclableSnackPackagingGuide.sections.mono-material-solution.tableRow5Advantage')}</td>
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
              {t('recyclableSnackPackagingGuide.sections.mono-material-solution.shopBtn')}
            </a>
            <a 
              href="https://achievepack.com/topics/recyclable-snack-packaging"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#00FFFF] text-black px-8 py-4 border-4 border-black font-['JetBrains_Mono'] font-bold uppercase hover:bg-black hover:text-[#00FFFF] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Building2 className="w-5 h-5" />
              {t('recyclableSnackPackagingGuide.sections.mono-material-solution.bulkBtn')}
            </a>
          </div>
        </div>
      )
    },
    {
       id: 'snack-performance',
       title: t('recyclableSnackPackagingGuide.sections.snack-performance.title'),
       icon: <Cookie className="w-6 h-6" />,
       content: (
          <div className="bg-white border-4 border-black p-6">
             <h3 className="font-black text-xl uppercase mb-4">{t('recyclableSnackPackagingGuide.sections.snack-performance.perfCheckTitle')}</h3>
             <div className="grid md:grid-cols-2 gap-4">
                {[
                   { item: t('recyclableSnackPackagingGuide.sections.snack-performance.potatoChips'), feat: t('recyclableSnackPackagingGuide.sections.snack-performance.nitroFlush'), life: t('recyclableSnackPackagingGuide.sections.snack-performance.life12') },
                   { item: t('recyclableSnackPackagingGuide.sections.snack-performance.nutsSeeds'), feat: t('recyclableSnackPackagingGuide.sections.snack-performance.oilOxygen'), life: t('recyclableSnackPackagingGuide.sections.snack-performance.life24') },
                   { item: t('recyclableSnackPackagingGuide.sections.snack-performance.beefJerky'), feat: t('recyclableSnackPackagingGuide.sections.snack-performance.highMoisture'), life: t('recyclableSnackPackagingGuide.sections.snack-performance.life18') },
                   { item: t('recyclableSnackPackagingGuide.sections.snack-performance.driedFruit'), feat: t('recyclableSnackPackagingGuide.sections.snack-performance.uvProtection'), life: t('recyclableSnackPackagingGuide.sections.snack-performance.life18') }
                ].map((row, i) => (
                   <div key={i} className="bg-[#F0F0F0] p-3 border-2 border-black flex justify-between items-center">
                      <div>
                         <strong className="block uppercase">{row.item}</strong>
                         <span className="text-xs font-['JetBrains_Mono']">{row.feat}</span>
                      </div>
                      <span className="bg-black text-white px-2 py-1 text-xs font-bold">{row.life}</span>
                   </div>
                ))}
             </div>
          </div>
       )
    },
    {
      id: 'compliance',
      title: t('recyclableSnackPackagingGuide.sections.compliance.title'),
      icon: <Award className="w-6 h-6" />,
      content: (
         <div className="bg-[#D4FF00] border-4 border-black p-6">
            <h3 className="font-black text-xl uppercase mb-4">{t('recyclableSnackPackagingGuide.sections.compliance.goldenTicket')}</h3>
            <p className="mb-4">
               {t('recyclableSnackPackagingGuide.sections.compliance.labelDescPart1')}
               <Link to="/blog/usa-labeling-guide" className="font-bold border-b-2 border-black hover:bg-white">{t('recyclableSnackPackagingGuide.sections.compliance.linkLabel')}</Link>
               {t('recyclableSnackPackagingGuide.sections.compliance.labelDescPart2')}
            </p>
            <div className="bg-white border-2 border-black p-4 flex items-center justify-center h-32">
               <span className="font-black text-2xl uppercase text-gray-400">{t('recyclableSnackPackagingGuide.sections.compliance.labelPlaceholder')}</span>
            </div>
            <p className="mt-4 text-sm font-['JetBrains_Mono']">
               <strong>{t('recyclableSnackPackagingGuide.sections.compliance.weProvide')}</strong> {t('recyclableSnackPackagingGuide.sections.compliance.barrierSpecs')}{' '}
               <a href="https://how2recycle.info/" target="_blank" rel="noopener noreferrer" className="underline">How2Recycle</a>{' '}
               {t('recyclableSnackPackagingGuide.sections.compliance.applicationText')}
            </p>
         </div>
      )
    },
    {
      id: 'b2b-store-links',
      title: t('recyclableSnackPackagingGuide.sections.b2b-store-links.title'),
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('recyclableSnackPackagingGuide.sections.b2b-store-links.p1Part1')}
            <a href="https://achievepack.com/store/product/sample-assorted-eco" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('recyclableSnackPackagingGuide.sections.b2b-store-links.sampleKit')}</a>
            {t('recyclableSnackPackagingGuide.sections.b2b-store-links.p1Part2')}
            <a href="https://achievepack.com/store/product/media__1780570697340.jpg" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('recyclableSnackPackagingGuide.sections.b2b-store-links.rollstockFilm')}</a>
            {t('recyclableSnackPackagingGuide.sections.b2b-store-links.p1Part3')}
            <a href="https://achievepack.com/store/product/transparent-colorful-cellophane-candy-wrapping-paper" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('recyclableSnackPackagingGuide.sections.b2b-store-links.candyWrapper')}</a>
            {t('recyclableSnackPackagingGuide.sections.b2b-store-links.p1Part4')}
          </p>
        </div>
      )
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('recyclableSnackPackagingGuide.meta.title')}
      metaDescription={t('recyclableSnackPackagingGuide.meta.description')}
      canonicalUrl="https://pouch.eco/blog/recyclable-snack-packaging-guide"
      keywords={['recyclable snack bags', 'mono-pe pouch', 'recyclable chip packaging', 'store drop-off recycling', 'sustainable snack packaging']}
      publishedDate="2026-02-10T16:00:00Z"
      modifiedDate="2026-02-10T16:00:00Z"
      author="Ryan Wong"
      categoryTag={t('recyclableSnackPackagingGuide.meta.categoryTag')}
      categoryColor="#3b82f6"
      heroTitle={
        <>
          {t('recyclableSnackPackagingGuide.hero.titleLine1')}<br />
          <span className="text-[#00FFFF]">{t('recyclableSnackPackagingGuide.hero.titleLine2')}</span>
        </>
      }
      heroSubtitle={t('recyclableSnackPackagingGuide.hero.subtitle')}
      heroImage="/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp"
      heroImageAlt={t('recyclableSnackPackagingGuide.hero.imageAlt')}
      sections={sections}
      
      faqSections={[
        {
          q: t('recyclableSnackPackagingGuide.faq.q1.q'),
          a: t('recyclableSnackPackagingGuide.faq.q1.a')
        },
        {
          q: t('recyclableSnackPackagingGuide.faq.q2.q'),
          a: t('recyclableSnackPackagingGuide.faq.q2.a')
        },
        {
          q: t('recyclableSnackPackagingGuide.faq.q3.q'),
          a: t('recyclableSnackPackagingGuide.faq.q3.a')
        },
        {
          q: t('recyclableSnackPackagingGuide.faq.q4.q'),
          a: t('recyclableSnackPackagingGuide.faq.q4.a')
        },
        {
          q: t('recyclableSnackPackagingGuide.faq.q5.q'),
          a: t('recyclableSnackPackagingGuide.faq.q5.a')
        },
        {
          q: t('recyclableSnackPackagingGuide.faq.q6.q'),
          a: t('recyclableSnackPackagingGuide.faq.q6.a')
        }
      ]}
      
      calendlyUrl="https://calendly.com/ryan-achievepack/30min"
      achievePackLink="https://achievepack.com/topics/recyclable-snack-packaging"
      achievePackText={t('recyclableSnackPackagingGuide.footer.achievePackText')}
      
      showTableOfContents={true}
      relatedArticles={[
        {
          title: t('recyclableSnackPackagingGuide.related.art1'),
          url: '/blog/eco-friendly-food-packaging-guide',
          image: '/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp'
        },
        {
          title: t('recyclableSnackPackagingGuide.related.art2'),
          url: '/blog/dtc-sustainable-packaging-guide',
          image: '/imgs/seo-photos/a_ecommerce_lightweight_pouch_achieve_pack_8535238.webp'
        },
        {
          title: t('recyclableSnackPackagingGuide.related.art3'),
          url: '/blog/usa-snacks-packaging-guide',
          image: '/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp'
        }
      ]}
    />
  )
}

