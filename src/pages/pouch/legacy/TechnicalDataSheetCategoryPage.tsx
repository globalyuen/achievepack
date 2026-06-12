import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { FileText, Shield, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function TechnicalDataSheetCategoryPage() {
  const { t } = useTranslation()

  const sections = [
    {
      id: 'tds-directory',
      title: t('technicalDataSheetCategoryPage.s1.title'),
      icon: <FileText className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('technicalDataSheetCategoryPage.s1.p1')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-black">
            <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 flex items-center gap-2">{t('technicalDataSheetCategoryPage.s1.compTitle')}</h4>
              <ul className="space-y-2 text-sm font-semibold">
                <li>• <Link to="/spec/compostable-pouch-geo" className="underline hover:text-green-800">{t('technicalDataSheetCategoryPage.s1.compLink1')}</Link></li>
                <li>• <Link to="/materials/kraft-low-barrier" className="underline hover:text-green-800">{t('technicalDataSheetCategoryPage.s1.compLink2')}</Link></li>
                <li>• <Link to="/materials/plastic-free-kraft" className="underline hover:text-green-800">{t('technicalDataSheetCategoryPage.s1.compLink3')}</Link></li>
              </ul>
            </div>
            
            <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 flex items-center gap-2">{t('technicalDataSheetCategoryPage.s1.recyTitle')}</h4>
              <ul className="space-y-2 text-sm font-semibold">
                <li>• <Link to="/spec/mono-pe-duplex-clear" className="underline hover:text-blue-800">{t('technicalDataSheetCategoryPage.s1.recyLink1')}</Link></li>
                <li>• <Link to="/materials/recyclable-mono-pp" className="underline hover:text-blue-800">{t('technicalDataSheetCategoryPage.s1.recyLink2')}</Link></li>
                <li>• <Link to="/materials/bio-pe" className="underline hover:text-blue-800">{t('technicalDataSheetCategoryPage.s1.recyLink3')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'understanding-tds',
      title: t('technicalDataSheetCategoryPage.s2.title'),
      icon: <Layers className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('technicalDataSheetCategoryPage.s2.p1')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('technicalDataSheetCategoryPage.s2.otrTitle')}</h4>
              <p className="text-sm font-medium mb-3 text-neutral-700">
                {t('technicalDataSheetCategoryPage.s2.otrDesc')}
              </p>
              <div className="font-mono text-xs bg-neutral-50 p-3 border-2 border-black">
                <strong>{t('technicalDataSheetCategoryPage.s2.otrVal')}</strong> &lt; 0.5 cc/m²/24hr
              </div>
            </div>
            
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('technicalDataSheetCategoryPage.s2.wvtrTitle')}</h4>
              <p className="text-sm font-medium mb-3 text-neutral-700">
                {t('technicalDataSheetCategoryPage.s2.wvtrDesc')}
              </p>
              <div className="font-mono text-xs bg-neutral-50 p-3 border-2 border-black">
                <strong>{t('technicalDataSheetCategoryPage.s2.wvtrVal')}</strong> &lt; 0.8 g/m²/24hr
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t('technicalDataSheetCategoryPage.s3.title'),
      icon: <Shield className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('technicalDataSheetCategoryPage.s3.p1')}
          </p>
          
          <div className="overflow-x-auto border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full border-collapse bg-white font-['JetBrains_Mono'] text-left text-black text-xs md:text-sm">
              <thead>
                <tr className="bg-black text-[#D4FF00] font-black uppercase">
                  <th className="p-4">{t('technicalDataSheetCategoryPage.s3.table.thMark')}</th>
                  <th className="p-4">{t('technicalDataSheetCategoryPage.s3.table.thBody')}</th>
                  <th className="p-4">{t('technicalDataSheetCategoryPage.s3.table.thMeaning')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-4 font-bold">{t('technicalDataSheetCategoryPage.s3.table.r1.m')}</td>
                  <td className="p-4">{t('technicalDataSheetCategoryPage.s3.table.r1.b')}</td>
                  <td className="p-4">{t('technicalDataSheetCategoryPage.s3.table.r1.c')}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 font-bold">{t('technicalDataSheetCategoryPage.s3.table.r2.m')}</td>
                  <td className="p-4">{t('technicalDataSheetCategoryPage.s3.table.r2.b')}</td>
                  <td className="p-4">{t('technicalDataSheetCategoryPage.s3.table.r2.c')}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">{t('technicalDataSheetCategoryPage.s3.table.r3.m')}</td>
                  <td className="p-4">{t('technicalDataSheetCategoryPage.s3.table.r3.b')}</td>
                  <td className="p-4">{t('technicalDataSheetCategoryPage.s3.table.r3.c')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  const faqSections = t('technicalDataSheetCategoryPage.faq', { returnObjects: true }) as { q: string, a: string }[] || []

  return (
    <BlogArticleTemplate
      title={t('technicalDataSheetCategoryPage.title')}
      metaDescription={t('technicalDataSheetCategoryPage.metaDesc')}
      canonicalUrl="https://pouch.eco/category/packaging-technical-data-sheet"
      heroTitle={
        <>
          {t('technicalDataSheetCategoryPage.hero.title')}<br />
          <span className="text-[#10b981]">{t('technicalDataSheetCategoryPage.hero.titleColored')}</span>
        </>
      }
      heroSubtitle={t('technicalDataSheetCategoryPage.hero.subtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="TECHNICAL_SPECS"
      categoryColor="#10b981"
      readTime={t('technicalDataSheetCategoryPage.hero.readTime')}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('technicalDataSheetCategoryPage.cta.title')}
      ctaDescription={t('technicalDataSheetCategoryPage.cta.desc')}
      achievePackLink="https://achievepack.com/materials/data-sheet"
      achievePackText={t('technicalDataSheetCategoryPage.cta.achieveText')}
    />
  )
}
