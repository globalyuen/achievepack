import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Package, TrendingUp, Shield, DollarSign } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function LowMOQStandUpPouchPage() {
  const { t } = useTranslation()

  const sections = [
    {
      id: 'digital-printing',
      title: t('lowMOQStandUpPouchPage.s1.title'),
      icon: <Package className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('lowMOQStandUpPouchPage.s1.p1')}
          </p>
          
          <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-2xl uppercase mb-4 text-black">{t('lowMOQStandUpPouchPage.s1.advTitle')}</h3>
            <ul className="space-y-3 text-lg font-medium text-black">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('lowMOQStandUpPouchPage.s1.adv1Title')}</strong> {t('lowMOQStandUpPouchPage.s1.adv1Desc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('lowMOQStandUpPouchPage.s1.adv2Title')}</strong> {t('lowMOQStandUpPouchPage.s1.adv2Desc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('lowMOQStandUpPouchPage.s1.adv3Title')}</strong> {t('lowMOQStandUpPouchPage.s1.adv3Desc')}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'pouch-anatomy',
      title: t('lowMOQStandUpPouchPage.s2.title'),
      icon: <Shield className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('lowMOQStandUpPouchPage.s2.p1')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 text-neutral-900">{t('lowMOQStandUpPouchPage.s2.featTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('lowMOQStandUpPouchPage.s2.f1')}</li>
                <li>✓ {t('lowMOQStandUpPouchPage.s2.f2')}</li>
                <li>✓ {t('lowMOQStandUpPouchPage.s2.f3')}</li>
                <li>✓ {t('lowMOQStandUpPouchPage.s2.f4')}</li>
              </ul>
            </div>
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 text-neutral-900">{t('lowMOQStandUpPouchPage.s2.compTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('lowMOQStandUpPouchPage.s2.c1')}</li>
                <li>✓ {t('lowMOQStandUpPouchPage.s2.c2')}</li>
                <li>✓ {t('lowMOQStandUpPouchPage.s2.c3')}</li>
                <li>✓ {t('lowMOQStandUpPouchPage.s2.c4')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'economics',
      title: t('lowMOQStandUpPouchPage.s3.title'),
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('lowMOQStandUpPouchPage.s3.p1')}
          </p>
          <div className="bg-neutral-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h4 className="font-black text-lg uppercase mb-4 font-['JetBrains_Mono']">{t('lowMOQStandUpPouchPage.s3.roadmapTitle')}</h4>
            <div className="grid md:grid-cols-3 gap-4 font-mono text-center">
              <div className="bg-white border-2 border-black p-4">
                <div className="text-3xl font-black text-purple-600 mb-1">{t('lowMOQStandUpPouchPage.s3.m1')}</div>
                <div className="text-xs font-bold uppercase text-neutral-500">{t('lowMOQStandUpPouchPage.s3.m1Label')}</div>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <div className="text-3xl font-black text-green-600 mb-1">{t('lowMOQStandUpPouchPage.s3.m2')}</div>
                <div className="text-xs font-bold uppercase text-neutral-500">{t('lowMOQStandUpPouchPage.s3.m2Label')}</div>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <div className="text-3xl font-black text-blue-600 mb-1">{t('lowMOQStandUpPouchPage.s3.m3')}</div>
                <div className="text-xs font-bold uppercase text-neutral-500">{t('lowMOQStandUpPouchPage.s3.m3Label')}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pricing',
      title: t('lowMOQStandUpPouchPage.s4.title'),
      icon: <DollarSign className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('lowMOQStandUpPouchPage.s4.p1')}
          </p>
          
          <div className="overflow-x-auto border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full border-collapse bg-white font-['JetBrains_Mono'] text-left text-black text-xs md:text-sm">
              <thead>
                <tr className="bg-black text-[#D4FF00] font-black uppercase">
                  <th className="p-4">{t('lowMOQStandUpPouchPage.s4.table.thCap')}</th>
                  <th className="p-4">{t('lowMOQStandUpPouchPage.s4.table.thDigital')}</th>
                  <th className="p-4">{t('lowMOQStandUpPouchPage.s4.table.thRun')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-4 font-bold">{t('lowMOQStandUpPouchPage.s4.table.r1.v')}</td>
                  <td className="p-4">{t('lowMOQStandUpPouchPage.s4.table.r1.d')}</td>
                  <td className="p-4">{t('lowMOQStandUpPouchPage.s4.table.r1.r')}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 font-bold">{t('lowMOQStandUpPouchPage.s4.table.r2.v')}</td>
                  <td className="p-4">{t('lowMOQStandUpPouchPage.s4.table.r2.d')}</td>
                  <td className="p-4">{t('lowMOQStandUpPouchPage.s4.table.r2.r')}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">{t('lowMOQStandUpPouchPage.s4.table.r3.v')}</td>
                  <td className="p-4">{t('lowMOQStandUpPouchPage.s4.table.r3.d')}</td>
                  <td className="p-4">{t('lowMOQStandUpPouchPage.s4.table.r3.r')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  const faqSections = t('lowMOQStandUpPouchPage.faq', { returnObjects: true }) as { q: string, a: string }[] || []

  return (
    <BlogArticleTemplate
      title={t('lowMOQStandUpPouchPage.title')}
      metaDescription={t('lowMOQStandUpPouchPage.metaDesc')}
      canonicalUrl="https://pouch.eco/digital-print-conventional-zipper-stand-up-pouch-bag-with-moq-start-from-100pcs"
      heroTitle={
        <>
          {t('lowMOQStandUpPouchPage.hero.title')}<br />
          <span className="text-[#00FFFF]">{t('lowMOQStandUpPouchPage.hero.titleColored')}</span>
        </>
      }
      heroSubtitle={t('lowMOQStandUpPouchPage.hero.subtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="STARTUP_PACKAGING"
      categoryColor="#00FFFF"
      readTime={t('lowMOQStandUpPouchPage.hero.readTime')}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('lowMOQStandUpPouchPage.cta.title')}
      ctaDescription={t('lowMOQStandUpPouchPage.cta.desc')}
      achievePackLink="https://achievepack.com/products/low-moq-packaging"
      achievePackText={t('lowMOQStandUpPouchPage.cta.achieveText')}
    />
  )
}
