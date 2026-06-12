import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Coffee, Droplets, Wind, Lock, DollarSign, TrendingUp, Building2 } from 'lucide-react'
import { useSeoBlogOverride } from '../../../hooks/useSeoBlogOverride'
import DynamicBlogArticleRender from '../../../components/pouch/DynamicBlogArticleRender'
import { useTranslation } from 'react-i18next'

export default function CoffeePackagingGuide() {
  const { t } = useTranslation()
  const override = useSeoBlogOverride('coffee-packaging-guide')
  if (override) {
    return <DynamicBlogArticleRender post={override} />
  }

  const sections = [
    {
      id: 'why-specialty-packaging',
      title: t('coffeePackagingGuide.sections.whySpecialtyPackaging.title'),
      icon: <Coffee className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold">
            {t('coffeePackagingGuide.sections.whySpecialtyPackaging.intro')}
          </p>

          <div className="bg-[#D4FF00] border-4 border-black p-8">
            <h3 className="font-black text-3xl uppercase mb-6">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.trinityTitle')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Droplets className="w-12 h-12 mb-3" />
                <h4 className="font-black text-xl uppercase mb-2">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.trinity1Title')}</h4>
                <p>{t('coffeePackagingGuide.sections.whySpecialtyPackaging.trinity1Text')}</p>
              </div>
              <div>
                <Wind className="w-12 h-12 mb-3" />
                <h4 className="font-black text-xl uppercase mb-2">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.trinity2Title')}</h4>
                <p>{t('coffeePackagingGuide.sections.whySpecialtyPackaging.trinity2Text')}</p>
              </div>
              <div>
                <Lock className="w-12 h-12 mb-3" />
                <h4 className="font-black text-xl uppercase mb-2">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.trinity3Title')}</h4>
                <p>{t('coffeePackagingGuide.sections.whySpecialtyPackaging.trinity3Text')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6">
            <h4 className="font-black text-2xl uppercase mb-4">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.tableTitle')}</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="text-left py-3 font-['JetBrains_Mono']">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.th1')}</th>
                    <th className="text-center py-3 font-['JetBrains_Mono']">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.th2')}</th>
                    <th className="text-center py-3 font-['JetBrains_Mono']">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.th3')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="py-3">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.r1c1')}</td>
                    <td className="text-center py-3 text-red-600 font-bold">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.r1c2')}</td>
                    <td className="text-center py-3">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.r1c3')}</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="py-3">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.r2c1')}</td>
                    <td className="text-center py-3 text-red-600 font-bold">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.r2c2')}</td>
                    <td className="text-center py-3">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.r2c3')}</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="py-3 font-bold">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.r3c1')}</td>
                    <td className="text-center py-3 text-green-600 font-bold">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.r3c2')}</td>
                    <td className="text-center py-3 font-bold">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.r3c3')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 mt-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-2xl uppercase mb-4 bg-[#D4FF00] inline-block px-2">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specsTitle')}</h4>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-4 border-black bg-[#F0F0F0]">
                    <th className="p-3 font-['JetBrains_Mono'] font-bold border-r-2 border-black text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specTh1')}</th>
                    <th className="p-3 font-['JetBrains_Mono'] font-bold border-r-2 border-black text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specTh2')}</th>
                    <th className="p-3 font-['JetBrains_Mono'] font-bold text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specTh3')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR1C1')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR1C2')}</td>
                    <td className="p-3 text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR1C3')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR2C1')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR2C2')}</td>
                    <td className="p-3 text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR2C3')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR3C1')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR3C2')}</td>
                    <td className="p-3 text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR3C3')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR4C1')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR4C2')}</td>
                    <td className="p-3 text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR4C3')}</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR5C1')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR5C2')}</td>
                    <td className="p-3 text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR5C3')}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border-r-2 border-black font-['JetBrains_Mono'] text-xs">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR6C1')}</td>
                    <td className="p-3 border-r-2 border-black text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR6C2')}</td>
                    <td className="p-3 text-sm">{t('coffeePackagingGuide.sections.whySpecialtyPackaging.specR6C3')}</td>
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
              <Coffee className="w-5 h-5" />
              {t('coffeePackagingGuide.sections.whySpecialtyPackaging.btn1')}
            </a>
            <a 
              href="https://achievepack.com/industry/coffee-tea"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#00FFFF] text-black px-8 py-4 border-4 border-black font-['JetBrains_Mono'] font-bold uppercase hover:bg-black hover:text-[#00FFFF] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Building2 className="w-5 h-5" />
              {t('coffeePackagingGuide.sections.whySpecialtyPackaging.btn2')}
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'compostable-vs-recyclable',
      title: t('coffeePackagingGuide.sections.compostableVsRecyclable.title'),
      icon: <TrendingUp className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p 
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: t('coffeePackagingGuide.sections.compostableVsRecyclable.intro') }}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-4 border-green-600 p-6 text-black">
              <h4 className="font-black text-2xl uppercase mb-4 text-green-900">{t('coffeePackagingGuide.sections.compostableVsRecyclable.leftTitle')}</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <strong>{t('coffeePackagingGuide.sections.compostableVsRecyclable.leftItem1Title')}</strong>
                    <p className="text-sm">{t('coffeePackagingGuide.sections.compostableVsRecyclable.leftItem1Desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <strong>{t('coffeePackagingGuide.sections.compostableVsRecyclable.leftItem2Title')}</strong>
                    <p className="text-sm">{t('coffeePackagingGuide.sections.compostableVsRecyclable.leftItem2Desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <strong>{t('coffeePackagingGuide.sections.compostableVsRecyclable.leftItem3Title')}</strong>
                    <p className="text-sm">{t('coffeePackagingGuide.sections.compostableVsRecyclable.leftItem3Desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💰</span>
                  <div>
                    <strong>{t('coffeePackagingGuide.sections.compostableVsRecyclable.leftItem4Title')}</strong>
                    <p className="text-sm">{t('coffeePackagingGuide.sections.compostableVsRecyclable.leftItem4Desc')}</p>
                  </div>
                </li>
              </ul>
              <div className="bg-white border-2 border-green-600 p-4">
                <p className="text-sm font-bold">{t('coffeePackagingGuide.sections.compostableVsRecyclable.leftBestTitle')}</p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>{t('coffeePackagingGuide.sections.compostableVsRecyclable.leftBest1')}</li>
                  <li>{t('coffeePackagingGuide.sections.compostableVsRecyclable.leftBest2')}</li>
                  <li>{t('coffeePackagingGuide.sections.compostableVsRecyclable.leftBest3')}</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-4 border-blue-600 p-6 text-black">
              <h4 className="font-black text-2xl uppercase mb-4 text-blue-900">{t('coffeePackagingGuide.sections.compostableVsRecyclable.rightTitle')}</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <strong>{t('coffeePackagingGuide.sections.compostableVsRecyclable.rightItem1Title')}</strong>
                    <p className="text-sm">{t('coffeePackagingGuide.sections.compostableVsRecyclable.rightItem1Desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <strong>{t('coffeePackagingGuide.sections.compostableVsRecyclable.rightItem2Title')}</strong>
                    <p className="text-sm">{t('coffeePackagingGuide.sections.compostableVsRecyclable.rightItem2Desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📅</span>
                  <div>
                    <strong>{t('coffeePackagingGuide.sections.compostableVsRecyclable.rightItem3Title')}</strong>
                    <p className="text-sm">{t('coffeePackagingGuide.sections.compostableVsRecyclable.rightItem3Desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💵</span>
                  <div>
                    <strong>{t('coffeePackagingGuide.sections.compostableVsRecyclable.rightItem4Title')}</strong>
                    <p className="text-sm">{t('coffeePackagingGuide.sections.compostableVsRecyclable.rightItem4Desc')}</p>
                  </div>
                </li>
              </ul>
              <div className="bg-white border-2 border-blue-600 p-4">
                <p className="text-sm font-bold">{t('coffeePackagingGuide.sections.compostableVsRecyclable.rightBestTitle')}</p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>{t('coffeePackagingGuide.sections.compostableVsRecyclable.rightBest1')}</li>
                  <li>{t('coffeePackagingGuide.sections.compostableVsRecyclable.rightBest2')}</li>
                  <li>{t('coffeePackagingGuide.sections.compostableVsRecyclable.rightBest3')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-black text-white p-8 border-4 border-black">
            <h4 className="font-black text-2xl uppercase mb-4 text-[#D4FF00]">{t('coffeePackagingGuide.sections.compostableVsRecyclable.notSureTitle')}</h4>
            <p className="mb-4">{t('coffeePackagingGuide.sections.compostableVsRecyclable.notSureText')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#D4FF00] text-black px-6 py-3 font-['JetBrains_Mono'] font-bold border-2 border-[#D4FF00] hover:bg-transparent hover:text-[#D4FF00] transition-colors text-center"
              >
                {t('coffeePackagingGuide.sections.compostableVsRecyclable.btn1')}
              </a>
              <a 
                href="https://achievepack.com/industry/coffee-tea"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-6 py-3 font-['JetBrains_Mono'] font-bold border-2 border-white hover:bg-transparent hover:text-white transition-colors text-center"
              >
                {t('coffeePackagingGuide.sections.compostableVsRecyclable.btn2')}
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'moq-pricing',
      title: t('coffeePackagingGuide.sections.moqPricing.title'),
      icon: <DollarSign className="w-6 h-6" />,
      content: (
        <div className="space-y-6 text-black">
          <p 
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: t('coffeePackagingGuide.sections.moqPricing.intro') }}
          />

          <div className="bg-[#00FFFF] border-4 border-black p-8">
            <h4 className="font-black text-3xl uppercase mb-6">{t('coffeePackagingGuide.sections.moqPricing.tableTitle')}</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-4 border-black">
                    <th className="py-3 font-['JetBrains_Mono'] font-bold">{t('coffeePackagingGuide.sections.moqPricing.th1')}</th>
                    <th className="py-3 font-['JetBrains_Mono'] font-bold">{t('coffeePackagingGuide.sections.moqPricing.th2')}</th>
                    <th className="py-3 font-['JetBrains_Mono'] font-bold">{t('coffeePackagingGuide.sections.moqPricing.th3')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-black">
                    <td className="py-3 font-bold">{t('coffeePackagingGuide.sections.moqPricing.r1c1')}</td>
                    <td className="py-3">$1.40-$2.10</td>
                    <td className="py-3">2-3 weeks</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-3 font-bold">{t('coffeePackagingGuide.sections.moqPricing.r2c1')}</td>
                    <td className="py-3">$1.05-$1.75</td>
                    <td className="py-3">2-3 weeks</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-3 font-bold">{t('coffeePackagingGuide.sections.moqPricing.r3c1')}</td>
                    <td className="py-3">$0.80-$1.40</td>
                    <td className="py-3">3-4 weeks</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold">{t('coffeePackagingGuide.sections.moqPricing.r4c1')}</td>
                    <td className="py-3 text-green-600 font-bold">{t('coffeePackagingGuide.sections.moqPricing.r4c2')}</td>
                    <td className="py-3">3-4 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm">
              {t('coffeePackagingGuide.sections.moqPricing.note')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="font-['JetBrains_Mono'] font-bold text-5xl mb-2">{t('coffeePackagingGuide.sections.moqPricing.g1Num')}</div>
              <h4 className="font-black uppercase">{t('coffeePackagingGuide.sections.moqPricing.g1Title')}</h4>
              <p className="text-sm mt-2">{t('coffeePackagingGuide.sections.moqPricing.g1Text')}</p>
            </div>
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="font-['JetBrains_Mono'] font-bold text-5xl mb-2">{t('coffeePackagingGuide.sections.moqPricing.g2Num')}</div>
              <h4 className="font-black uppercase">{t('coffeePackagingGuide.sections.moqPricing.g2Title')}</h4>
              <p className="text-sm mt-2">{t('coffeePackagingGuide.sections.moqPricing.g2Text')}</p>
            </div>
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="font-['JetBrains_Mono'] font-bold text-5xl mb-2">{t('coffeePackagingGuide.sections.moqPricing.g3Num')}</div>
              <h4 className="font-black uppercase">{t('coffeePackagingGuide.sections.moqPricing.g3Title')}</h4>
              <p className="text-sm mt-2">{t('coffeePackagingGuide.sections.moqPricing.g3Text')}</p>
            </div>
          </div>

          <div className="bg-[#D4FF00] border-4 border-black p-6 text-black">
            <h4 className="font-black text-xl uppercase mb-3">{t('coffeePackagingGuide.sections.moqPricing.includedTitle')}</h4>
            <ul className="space-y-2">
              <li>{t('coffeePackagingGuide.sections.moqPricing.inc1')}</li>
              <li>{t('coffeePackagingGuide.sections.moqPricing.inc2')}</li>
              <li>{t('coffeePackagingGuide.sections.moqPricing.inc3')}</li>
              <li>{t('coffeePackagingGuide.sections.moqPricing.inc4')}</li>
              <li>{t('coffeePackagingGuide.sections.moqPricing.inc5')}</li>
              <li>{t('coffeePackagingGuide.sections.moqPricing.inc6')}</li>
              <li>{t('coffeePackagingGuide.sections.moqPricing.inc7')}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'b2b-store-links',
      title: t('coffeePackagingGuide.sections.b2bStoreLinks.title'),
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6 text-black">
          <p 
            className="text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('coffeePackagingGuide.sections.b2bStoreLinks.intro') }}
          />
        </div>
      )
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('coffeePackagingGuide.title')}
      metaDescription={t('coffeePackagingGuide.metaDescription')}
      canonicalUrl="https://pouch.eco/blog/coffee-packaging-guide"
      keywords={[
        'coffee packaging bags',
        'compostable coffee pouches',
        'recyclable coffee bags',
        'low MOQ coffee packaging',
        'degassing valve pouches',
        'specialty coffee bags',
        'kraft coffee pouches',
        'coffee roaster packaging'
      ]}
      publishedDate="2026-01-30"
      
      heroTitle={
        <span dangerouslySetInnerHTML={{ __html: t('coffeePackagingGuide.heroTitle') }} />
      }
      heroSubtitle={t('coffeePackagingGuide.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp"
      heroImageAlt={t('coffeePackagingGuide.heroImageAlt')}
      categoryTag="COFFEE_INDUSTRY"
      categoryColor="#d97706"
      readTime="8 min read"
      
      sections={sections}
      
      faqSections={[
        {
          q: t('coffeePackagingGuide.faq.q1'),
          a: t('coffeePackagingGuide.faq.a1')
        },
        {
          q: t('coffeePackagingGuide.faq.q2'),
          a: t('coffeePackagingGuide.faq.a2')
        },
        {
          q: t('coffeePackagingGuide.faq.q3'),
          a: t('coffeePackagingGuide.faq.a3')
        },
        {
          q: t('coffeePackagingGuide.faq.q4'),
          a: t('coffeePackagingGuide.faq.a4')
        },
        {
          q: t('coffeePackagingGuide.faq.q5'),
          a: t('coffeePackagingGuide.faq.a5')
        },
        {
          q: t('coffeePackagingGuide.faq.q6'),
          a: t('coffeePackagingGuide.faq.a6')
        }
      ]}
      
      ctaTitle={t('coffeePackagingGuide.ctaTitle')}
      ctaDescription={t('coffeePackagingGuide.ctaDescription')}
      calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
      achievePackLink="https://achievepack.com/industry/coffee-tea"
      achievePackText={t('coffeePackagingGuide.achievePackText')}
      
      showTableOfContents={true}
      relatedArticles={[
        {
          title: t('coffeePackagingGuide.related.t1'),
          url: '/blog/usa-compostable-guide',
          image: '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp'
        },
        {
          title: t('coffeePackagingGuide.related.t2'),
          url: '/blog/coffee-degassing-valve-guide',
          image: '/imgs/seo-photos/industries/coffee/a_coffee_degassing_valve_2850365.webp'
        },
        {
          title: t('coffeePackagingGuide.related.t3'),
          url: '/blog/digital-printing-eco-packaging-guide',
          image: '/imgs/seo-photos/printing/digital/a_digital_printing_press_packaging_4857399.webp'
        }
      ]}
    />
  )
}
