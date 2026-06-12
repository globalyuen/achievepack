import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Settings, Shield, Award, HelpCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function TrappingKeylinePage() {
  const { t } = useTranslation()

  const sections = [
    {
      id: 'print-trapping',
      title: t('trappingKeylinePage.sections.print-trapping.title'),
      icon: <Settings className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('trappingKeylinePage.sections.print-trapping.p1')}
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-black text-2xl uppercase mb-4">{t('trappingKeylinePage.sections.print-trapping.listTitle')}</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('trappingKeylinePage.sections.print-trapping.list.spread.bold')}</strong>{t('trappingKeylinePage.sections.print-trapping.list.spread.text')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('trappingKeylinePage.sections.print-trapping.list.choke.bold')}</strong>{t('trappingKeylinePage.sections.print-trapping.list.choke.text')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('trappingKeylinePage.sections.print-trapping.list.white.bold')}</strong>{t('trappingKeylinePage.sections.print-trapping.list.white.text')}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'keyline-dieline',
      title: t('trappingKeylinePage.sections.keyline-dieline.title'),
      icon: <Shield className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('trappingKeylinePage.sections.keyline-dieline.p1')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('trappingKeylinePage.sections.keyline-dieline.elements.title')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ <strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.cut.bold')}</strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.cut.text')}</li>
                <li>✓ <strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.seal.bold')}</strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.seal.text')}</li>
                <li>✓ <strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.bleed.bold')}</strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.bleed.text')}</li>
                <li>✓ <strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.safe.bold')}</strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.safe.text')}</li>
              </ul>
            </div>
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('trappingKeylinePage.sections.keyline-dieline.pitfalls.title')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✗ {t('trappingKeylinePage.sections.keyline-dieline.pitfalls.list.p1')}</li>
                <li>✗ {t('trappingKeylinePage.sections.keyline-dieline.pitfalls.list.p2')}</li>
                <li>✗ {t('trappingKeylinePage.sections.keyline-dieline.pitfalls.list.p3')}</li>
                <li>✗ {t('trappingKeylinePage.sections.keyline-dieline.pitfalls.list.p4')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'illustrator-setup',
      title: t('trappingKeylinePage.sections.illustrator-setup.title'),
      icon: <Award className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('trappingKeylinePage.sections.illustrator-setup.p1')}
          </p>
          
          <div className="bg-neutral-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black font-mono text-sm space-y-3">
            <div className="border-b border-black pb-2 font-bold uppercase text-neutral-600">{t('trappingKeylinePage.sections.illustrator-setup.codeHeader')}</div>
            <div>{t('trappingKeylinePage.sections.illustrator-setup.rules.r1')}</div>
            <div>{t('trappingKeylinePage.sections.illustrator-setup.rules.r2')}</div>
            <div>{t('trappingKeylinePage.sections.illustrator-setup.rules.r3')}</div>
            <div>{t('trappingKeylinePage.sections.illustrator-setup.rules.r4')}</div>
          </div>
        </div>
      )
    }
  ]

  const faqSections = [
    {
      q: t('trappingKeylinePage.faq.q1.q'),
      a: t('trappingKeylinePage.faq.q1.a')
    },
    {
      q: t('trappingKeylinePage.faq.q2.q'),
      a: t('trappingKeylinePage.faq.q2.a')
    },
    {
      q: t('trappingKeylinePage.faq.q3.q'),
      a: t('trappingKeylinePage.faq.q3.a')
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('trappingKeylinePage.meta.title')}
      metaDescription={t('trappingKeylinePage.meta.description')}
      canonicalUrl="https://pouch.eco/understand-trapping-why-we-need-to-add-a-keyline"
      heroTitle={
        <>
          {t('trappingKeylinePage.hero.titlePart1')}<br />
          <span className="text-[#00FFFF]">{t('trappingKeylinePage.hero.titlePart2')}</span>
        </>
      }
      heroSubtitle={t('trappingKeylinePage.hero.subtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="PREPRESS_DESIGN"
      categoryColor="#00FFFF"
      readTime="7 min read"
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('trappingKeylinePage.cta.title')}
      ctaDescription={t('trappingKeylinePage.cta.description')}
      achievePackLink="https://achievepack.com/dieline-creator"
      achievePackText={t('trappingKeylinePage.cta.achievePackText')}
    />
  )
}
