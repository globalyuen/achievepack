import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Droplets, Shield, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function DrinkLiquidPouchPage() {
  const { t } = useTranslation()

  const sections = [
    {
      id: 'barrier-tech',
      title: t('drinkLiquidPouchPage.s1.title'),
      icon: <Droplets className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('drinkLiquidPouchPage.s1.p1')}
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-2xl uppercase mb-4 text-black">{t('drinkLiquidPouchPage.s1.profileTitle')}</h3>
            <ul className="space-y-3 text-lg font-medium text-black">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('drinkLiquidPouchPage.s1.l1Title')}</strong> {t('drinkLiquidPouchPage.s1.l1Desc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('drinkLiquidPouchPage.s1.l2Title')}</strong> {t('drinkLiquidPouchPage.s1.l2Desc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('drinkLiquidPouchPage.s1.l3Title')}</strong> {t('drinkLiquidPouchPage.s1.l3Desc')}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'seam-engineering',
      title: t('drinkLiquidPouchPage.s2.title'),
      icon: <Shield className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('drinkLiquidPouchPage.s2.p1')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 text-neutral-900">{t('drinkLiquidPouchPage.s2.sealTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('drinkLiquidPouchPage.s2.s1Item')}</li>
                <li>✓ {t('drinkLiquidPouchPage.s2.s2Item')}</li>
                <li>✓ {t('drinkLiquidPouchPage.s2.s3Item')}</li>
                <li>✓ {t('drinkLiquidPouchPage.s2.s4Item')}</li>
              </ul>
            </div>
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 text-neutral-900">{t('drinkLiquidPouchPage.s2.appTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('drinkLiquidPouchPage.s2.a1Item')}</li>
                <li>✓ {t('drinkLiquidPouchPage.s2.a2Item')}</li>
                <li>✓ {t('drinkLiquidPouchPage.s2.a3Item')}</li>
                <li>✓ {t('drinkLiquidPouchPage.s2.a4Item')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'drop-tests',
      title: t('drinkLiquidPouchPage.s3.title'),
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('drinkLiquidPouchPage.s3.p1')}
          </p>
          <div className="bg-neutral-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-lg uppercase mb-4 font-['JetBrains_Mono'] text-black">{t('drinkLiquidPouchPage.s3.logTitle')}</h4>
            <div className="grid md:grid-cols-3 gap-4 font-mono text-center text-black">
              <div className="bg-white border-2 border-black p-4">
                <div className="text-3xl font-black text-green-600 mb-1">{t('drinkLiquidPouchPage.s3.m1')}</div>
                <div className="text-xs font-bold uppercase text-neutral-500">{t('drinkLiquidPouchPage.s3.m1Label')}</div>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <div className="text-3xl font-black text-blue-600 mb-1">{t('drinkLiquidPouchPage.s3.m2')}</div>
                <div className="text-xs font-bold uppercase text-neutral-500">{t('drinkLiquidPouchPage.s3.m2Label')}</div>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <div className="text-3xl font-black text-amber-600 mb-1">{t('drinkLiquidPouchPage.s3.m3')}</div>
                <div className="text-xs font-bold uppercase text-neutral-500">{t('drinkLiquidPouchPage.s3.m3Label')}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pricing-matrix',
      title: t('drinkLiquidPouchPage.s4.title'),
      icon: <Droplets className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('drinkLiquidPouchPage.s4.p1')}
          </p>
          
          <div className="overflow-x-auto border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full border-collapse bg-white font-['JetBrains_Mono'] text-left text-black text-xs md:text-sm">
              <thead>
                <tr className="bg-black text-[#D4FF00] font-black uppercase">
                  <th className="p-4">{t('drinkLiquidPouchPage.s4.table.thQty')}</th>
                  <th className="p-4">{t('drinkLiquidPouchPage.s4.table.thDigital')}</th>
                  <th className="p-4">{t('drinkLiquidPouchPage.s4.table.thGravure')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-4 font-bold">{t('drinkLiquidPouchPage.s4.table.r1.q')}</td>
                  <td className="p-4">{t('drinkLiquidPouchPage.s4.table.r1.d')}</td>
                  <td className="p-4">{t('drinkLiquidPouchPage.s4.table.r1.g')}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 font-bold">{t('drinkLiquidPouchPage.s4.table.r2.q')}</td>
                  <td className="p-4">{t('drinkLiquidPouchPage.s4.table.r2.d')}</td>
                  <td className="p-4">{t('drinkLiquidPouchPage.s4.table.r2.g')}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">{t('drinkLiquidPouchPage.s4.table.r3.q')}</td>
                  <td className="p-4">{t('drinkLiquidPouchPage.s4.table.r3.d')}</td>
                  <td className="p-4">{t('drinkLiquidPouchPage.s4.table.r3.g')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  const faqSections = t('drinkLiquidPouchPage.faq', { returnObjects: true }) as { q: string, a: string }[] || []

  return (
    <BlogArticleTemplate
      title={t('drinkLiquidPouchPage.title')}
      metaDescription={t('drinkLiquidPouchPage.metaDesc')}
      canonicalUrl="https://pouch.eco/100-compostable-3-side-sealed-pouch-for-drink-liquid-alcohol-etc"
      heroTitle={
        <>
          {t('drinkLiquidPouchPage.hero.title')}<br />
          <span className="text-[#10b981]">{t('drinkLiquidPouchPage.hero.titleColored')}</span>
        </>
      }
      heroSubtitle={t('drinkLiquidPouchPage.hero.subtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="LIQUID_PACKAGING"
      categoryColor="#10b981"
      readTime={t('drinkLiquidPouchPage.hero.readTime')}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('drinkLiquidPouchPage.cta.title')}
      ctaDescription={t('drinkLiquidPouchPage.cta.desc')}
      achievePackLink="https://achievepack.com/packaging/flat-pouches"
      achievePackText={t('drinkLiquidPouchPage.cta.achieveText')}
    />
  )
}
