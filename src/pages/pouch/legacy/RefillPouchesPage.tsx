import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Layout, Leaf, Droplets } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function RefillPouchesPage() {
  const { t } = useTranslation()

  const sections = [
    {
      id: 'circular-model',
      title: t('refillPouchesPage.s1.title'),
      icon: <Layout className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('refillPouchesPage.s1.p1')}
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-black text-2xl uppercase mb-4">{t('refillPouchesPage.s1.advTitle')}</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('refillPouchesPage.s1.adv1Title')}</strong> {t('refillPouchesPage.s1.adv1Desc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('refillPouchesPage.s1.adv2Title')}</strong> {t('refillPouchesPage.s1.adv2Desc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('refillPouchesPage.s1.adv3Title')}</strong> {t('refillPouchesPage.s1.adv3Desc')}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t('refillPouchesPage.s2.title'),
      icon: <Leaf className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('refillPouchesPage.s2.p1')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('refillPouchesPage.s2.structTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('refillPouchesPage.s2.s1Item')}</li>
                <li>✓ {t('refillPouchesPage.s2.s2Item')}</li>
                <li>✓ {t('refillPouchesPage.s2.s3Item')}</li>
                <li>✓ {t('refillPouchesPage.s2.s4Item')}</li>
              </ul>
            </div>
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('refillPouchesPage.s2.prodTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('refillPouchesPage.s2.p1Item')}</li>
                <li>✓ {t('refillPouchesPage.s2.p2Item')}</li>
                <li>✓ {t('refillPouchesPage.s2.p3Item')}</li>
                <li>✓ {t('refillPouchesPage.s2.p4Item')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'carbon-freight',
      title: t('refillPouchesPage.s3.title'),
      icon: <Droplets className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('refillPouchesPage.s3.p1')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 font-mono text-center text-black">
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-green-600 mb-1">{t('refillPouchesPage.s3.metrics.m1')}</div>
              <div className="text-xs font-bold uppercase text-neutral-500">{t('refillPouchesPage.s3.metrics.m1Label')}</div>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-blue-600 mb-1">{t('refillPouchesPage.s3.metrics.m2')}</div>
              <div className="text-xs font-bold uppercase text-neutral-500">{t('refillPouchesPage.s3.metrics.m2Label')}</div>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-purple-600 mb-1">{t('refillPouchesPage.s3.metrics.m3')}</div>
              <div className="text-xs font-bold uppercase text-neutral-500">{t('refillPouchesPage.s3.metrics.m3Label')}</div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqSections = t('refillPouchesPage.faq', { returnObjects: true }) as { q: string, a: string }[] || []

  return (
    <BlogArticleTemplate
      title={t('refillPouchesPage.title')}
      metaDescription={t('refillPouchesPage.metaDesc')}
      canonicalUrl="https://pouch.eco/sustainable-packaging-revolution-glass-bottles-paired-with-compostable-refill-pouches-for-an-eco-friendly-lifestyle"
      heroTitle={
        <>
          {t('refillPouchesPage.hero.title')}<br />
          <span className="text-[#10b981]">{t('refillPouchesPage.hero.titleColored')}</span>
        </>
      }
      heroSubtitle={t('refillPouchesPage.hero.subtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="CIRCULAR_REFILL"
      categoryColor="#10b981"
      readTime={t('refillPouchesPage.hero.readTime')}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('refillPouchesPage.cta.title')}
      ctaDescription={t('refillPouchesPage.cta.desc')}
      achievePackLink="https://achievepack.com/materials/compostable"
      achievePackText={t('refillPouchesPage.cta.achieveText')}
    />
  )
}
