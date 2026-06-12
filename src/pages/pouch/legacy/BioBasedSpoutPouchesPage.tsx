import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Leaf, Droplets, Settings, Shield } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function BioBasedSpoutPouchesPage() {
  const { t } = useTranslation()

  const sections = [
    {
      id: 'sugarcane-pe',
      title: t('bioBasedSpoutPouchesPage.s1.title'),
      icon: <Leaf className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('bioBasedSpoutPouchesPage.s1.p1')}
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-black text-2xl uppercase mb-4">{t('bioBasedSpoutPouchesPage.s1.highlightTitle')}</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('bioBasedSpoutPouchesPage.s1.perfTitle')}</strong> {t('bioBasedSpoutPouchesPage.s1.perfDesc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('bioBasedSpoutPouchesPage.s1.recyTitle')}</strong> {t('bioBasedSpoutPouchesPage.s1.recyDesc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('bioBasedSpoutPouchesPage.s1.eprTitle')}</strong> {t('bioBasedSpoutPouchesPage.s1.eprDesc')}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'compostable-laminations',
      title: t('bioBasedSpoutPouchesPage.s2.title'),
      icon: <Droplets className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('bioBasedSpoutPouchesPage.s2.p1')}
          </p>
          
          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-xl uppercase mb-3 text-neutral-900">{t('bioBasedSpoutPouchesPage.s2.specTitle')}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-xs font-mono bg-neutral-50 p-4 border-2 border-black">
              <div><strong>{t('bioBasedSpoutPouchesPage.s2.coreLaminate')}</strong> {t('bioBasedSpoutPouchesPage.s2.coreLaminateVal')}</div>
              <div><strong>{t('bioBasedSpoutPouchesPage.s2.waterRes')}</strong> {t('bioBasedSpoutPouchesPage.s2.waterResVal')}</div>
              <div><strong>{t('bioBasedSpoutPouchesPage.s2.otr')}</strong> {t('bioBasedSpoutPouchesPage.s2.otrVal')}</div>
              <div><strong>{t('bioBasedSpoutPouchesPage.s2.wvtr')}</strong> {t('bioBasedSpoutPouchesPage.s2.wvtrVal')}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spout-fitments',
      title: t('bioBasedSpoutPouchesPage.s3.title'),
      icon: <Settings className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('bioBasedSpoutPouchesPage.s3.p1')}
          </p>
          
          <div className="overflow-x-auto border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full border-collapse bg-white font-['JetBrains_Mono'] text-left text-black text-xs md:text-sm">
              <thead>
                <tr className="bg-black text-[#D4FF00] font-black uppercase">
                  <th className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.thDiam')}</th>
                  <th className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.thConfig')}</th>
                  <th className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.thApp')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-4 font-bold">{t('bioBasedSpoutPouchesPage.s3.table.r1.d')}</td>
                  <td className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.r1.c')}</td>
                  <td className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.r1.a')}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 font-bold">{t('bioBasedSpoutPouchesPage.s3.table.r2.d')}</td>
                  <td className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.r2.c')}</td>
                  <td className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.r2.a')}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">{t('bioBasedSpoutPouchesPage.s3.table.r3.d')}</td>
                  <td className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.r3.c')}</td>
                  <td className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.r3.a')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'carbon-metrics',
      title: t('bioBasedSpoutPouchesPage.s4.title'),
      icon: <Shield className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('bioBasedSpoutPouchesPage.s4.p1')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 font-mono text-center text-black">
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-green-600 mb-1">{t('bioBasedSpoutPouchesPage.s4.metrics.m1')}</div>
              <div className="text-xs font-bold uppercase text-neutral-500">{t('bioBasedSpoutPouchesPage.s4.metrics.m1Label')}</div>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-blue-600 mb-1">{t('bioBasedSpoutPouchesPage.s4.metrics.m2')}</div>
              <div className="text-xs font-bold uppercase text-neutral-500">{t('bioBasedSpoutPouchesPage.s4.metrics.m2Label')}</div>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-purple-600 mb-1">{t('bioBasedSpoutPouchesPage.s4.metrics.m3')}</div>
              <div className="text-xs font-bold uppercase text-neutral-500">{t('bioBasedSpoutPouchesPage.s4.metrics.m3Label')}</div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqSections = t('bioBasedSpoutPouchesPage.faq', { returnObjects: true }) as { q: string, a: string }[] || []

  return (
    <BlogArticleTemplate
      title={t('bioBasedSpoutPouchesPage.title')}
      metaDescription={t('bioBasedSpoutPouchesPage.metaDesc')}
      canonicalUrl="https://pouch.eco/eco-friendly-packaging-revolution-introducing-bio-based-spout-pouches-for-liquid"
      heroTitle={
        <>
          {t('bioBasedSpoutPouchesPage.hero.title')}<br />
          <span className="text-[#10b981]">{t('bioBasedSpoutPouchesPage.hero.titleColored')}</span>
        </>
      }
      heroSubtitle={t('bioBasedSpoutPouchesPage.hero.subtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="SUSTAINABLE_MATERIALS"
      categoryColor="#10b981"
      readTime={t('bioBasedSpoutPouchesPage.hero.readTime')}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('bioBasedSpoutPouchesPage.cta.title')}
      ctaDescription={t('bioBasedSpoutPouchesPage.cta.desc')}
      achievePackLink="https://achievepack.com/packaging/spout-pouches"
      achievePackText={t('bioBasedSpoutPouchesPage.cta.achieveText')}
    />
  )
}
