import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Package, Shield, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function KSealHeavyContentPage() {
  const { t } = useTranslation()

  const sections = [
    {
      id: 'k-seal-def',
      title: t('kSealHeavyContentPage.s1.title'),
      icon: <Package className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('kSealHeavyContentPage.s1.p1')}
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-black text-2xl uppercase mb-4">{t('kSealHeavyContentPage.s1.diffTitle')}</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('kSealHeavyContentPage.s1.doypack')}</strong> {t('kSealHeavyContentPage.s1.doypackDesc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('kSealHeavyContentPage.s1.kseal')}</strong> {t('kSealHeavyContentPage.s1.ksealDesc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('kSealHeavyContentPage.s1.plow')}</strong> {t('kSealHeavyContentPage.s1.plowDesc')}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'heavy-benefits',
      title: t('kSealHeavyContentPage.s2.title'),
      icon: <Shield className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('kSealHeavyContentPage.s2.p1')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('kSealHeavyContentPage.s2.mechTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('kSealHeavyContentPage.s2.m1')}</li>
                <li>✓ {t('kSealHeavyContentPage.s2.m2')}</li>
                <li>✓ {t('kSealHeavyContentPage.s2.m3')}</li>
                <li>✓ {t('kSealHeavyContentPage.s2.m4')}</li>
              </ul>
            </div>
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('kSealHeavyContentPage.s2.prodTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('kSealHeavyContentPage.s2.p1Item')}</li>
                <li>✓ {t('kSealHeavyContentPage.s2.p2Item')}</li>
                <li>✓ {t('kSealHeavyContentPage.s2.p3Item')}</li>
                <li>✓ {t('kSealHeavyContentPage.s2.p4Item')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specs-tolerances',
      title: t('kSealHeavyContentPage.s3.title'),
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('kSealHeavyContentPage.s3.p1')}
          </p>
          
          <div className="overflow-x-auto border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full border-collapse bg-white font-['JetBrains_Mono'] text-left text-black text-xs md:text-sm">
              <thead>
                <tr className="bg-black text-[#D4FF00] font-black uppercase">
                  <th className="p-4">{t('kSealHeavyContentPage.s3.table.thCapacity')}</th>
                  <th className="p-4">{t('kSealHeavyContentPage.s3.table.thCaliper')}</th>
                  <th className="p-4">{t('kSealHeavyContentPage.s3.table.thGusset')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-4 font-bold">500g (1lb)</td>
                  <td className="p-4">120 - 130 Microns</td>
                  <td className="p-4">{t('kSealHeavyContentPage.s3.table.r1')}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 font-bold">1kg (2.2lb)</td>
                  <td className="p-4">140 - 150 Microns</td>
                  <td className="p-4">{t('kSealHeavyContentPage.s3.table.r2')}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">2.5kg+ (5lb+)</td>
                  <td className="p-4">160+ Microns</td>
                  <td className="p-4">{t('kSealHeavyContentPage.s3.table.r3')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  const faqSections = t('kSealHeavyContentPage.faq', { returnObjects: true }) as { q: string, a: string }[] || []

  return (
    <BlogArticleTemplate
      title={t('kSealHeavyContentPage.title')}
      metaDescription={t('kSealHeavyContentPage.metaDesc')}
      canonicalUrl="https://pouch.eco/the-way-to-use-k-seal-bag-packing-heavy-content"
      heroTitle={
        <>
          {t('kSealHeavyContentPage.hero.title')}<br />
          <span className="text-[#10b981]">{t('kSealHeavyContentPage.hero.titleColored')}</span>
        </>
      }
      heroSubtitle={t('kSealHeavyContentPage.hero.subtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="POUCH_SHAPES"
      categoryColor="#10b981"
      readTime={t('kSealHeavyContentPage.hero.readTime')}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('kSealHeavyContentPage.cta.title')}
      ctaDescription={t('kSealHeavyContentPage.cta.desc')}
      achievePackLink="https://achievepack.com/knowledge/k-seal-stand-up-pouches"
      achievePackText={t('kSealHeavyContentPage.cta.achieveText')}
    />
  )
}
