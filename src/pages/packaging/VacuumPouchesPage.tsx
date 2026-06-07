import React from 'react'
import { Package, CheckCircle, Shield, Thermometer, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const VacuumPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.vacuumPouches'
  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.descStrong`)}</strong> {t(`${p}.sections.overview.descText`)}
          </p>
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.benefitsTitle`)}</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ {t(`${p}.sections.overview.benefit1`)}</li>
              <li>✓ {t(`${p}.sections.overview.benefit2`)}</li>
              <li>✓ {t(`${p}.sections.overview.benefit3`)}</li>
              <li>✓ {t(`${p}.sections.overview.benefit4`)}</li>
              <li>✓ {t(`${p}.sections.overview.benefit5`)}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.sections.applications.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">{t(`${p}.sections.applications.card1Title`)}</h4>
              <ul className="text-sm space-y-1 text-red-700">
                <li>• {t(`${p}.sections.applications.card1Item1`)}</li>
                <li>• {t(`${p}.sections.applications.card1Item2`)}</li>
                <li>• {t(`${p}.sections.applications.card1Item3`)}</li>
                <li>• {t(`${p}.sections.applications.card1Item4`)}</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.applications.card2Title`)}</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                <li>• {t(`${p}.sections.applications.card2Item1`)}</li>
                <li>• {t(`${p}.sections.applications.card2Item2`)}</li>
                <li>• {t(`${p}.sections.applications.card2Item3`)}</li>
                <li>• {t(`${p}.sections.applications.card2Item4`)}</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">{t(`${p}.sections.applications.card3Title`)}</h4>
              <ul className="text-sm space-y-1 text-yellow-700">
                <li>• {t(`${p}.sections.applications.card3Item1`)}</li>
                <li>• {t(`${p}.sections.applications.card3Item2`)}</li>
                <li>• {t(`${p}.sections.applications.card3Item3`)}</li>
                <li>• {t(`${p}.sections.applications.card3Item4`)}</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.applications.card4Title`)}</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• {t(`${p}.sections.applications.card4Item1`)}</li>
                <li>• {t(`${p}.sections.applications.card4Item2`)}</li>
                <li>• {t(`${p}.sections.applications.card4Item3`)}</li>
                <li>• {t(`${p}.sections.applications.card4Item4`)}</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.applications.card5Title`)}</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• {t(`${p}.sections.applications.card5Item1`)}</li>
                <li>• {t(`${p}.sections.applications.card5Item2`)}</li>
                <li>• {t(`${p}.sections.applications.card5Item3`)}</li>
                <li>• {t(`${p}.sections.applications.card5Item4`)}</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.applications.card6Title`)}</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• {t(`${p}.sections.applications.card6Item1`)}</li>
                <li>• {t(`${p}.sections.applications.card6Item2`)}</li>
                <li>• {t(`${p}.sections.applications.card6Item3`)}</li>
                <li>• {t(`${p}.sections.applications.card6Item4`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'types',
      title: t(`${p}.sections.types.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.types.card1Title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.types.card1Desc`)}</p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.types.card2Title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.types.card2Desc`)}</p>
            </div>
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.types.card3Title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.types.card3Desc`)}</p>
            </div>
            <div className="border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">{t(`${p}.sections.types.card4Title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.types.card4Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.sections.specifications.title`),
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>{t(`${p}.sections.specifications.item1Title`)}</strong> {t(`${p}.sections.specifications.item1Desc`)}</li>
              <li>✓ <strong>{t(`${p}.sections.specifications.item2Title`)}</strong> {t(`${p}.sections.specifications.item2Desc`)}</li>
              <li>✓ <strong>{t(`${p}.sections.specifications.item3Title`)}</strong> {t(`${p}.sections.specifications.item3Desc`)}</li>
              <li>✓ <strong>{t(`${p}.sections.specifications.item4Title`)}</strong> {t(`${p}.sections.specifications.item4Desc`)}</li>
              <li>✓ <strong>{t(`${p}.sections.specifications.item5Title`)}</strong> {t(`${p}.sections.specifications.item5Desc`)}</li>
              <li>✓ <strong>{t(`${p}.sections.specifications.item6Title`)}</strong> {t(`${p}.sections.specifications.item6Desc`)}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: t(`${p}.sections.industryScenarios.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-red-50 to-rose-50 p-5 rounded-xl border border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.card1Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.card1Desc`)}</p>
              <div className="text-xs text-red-700 bg-red-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.card1Share`)}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.card2Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.card2Desc`)}</p>
              <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.card2Share`)}</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.card3Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.card3Desc`)}</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.card3Share`)}</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.industryScenarios.storyTitle`)}</h4>
            <p className="text-sm text-neutral-600">{t(`${p}.sections.industryScenarios.storyQuote`)}</p>
            <p className="text-xs text-neutral-500 mt-2">{t(`${p}.sections.industryScenarios.storyAuthor`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: t(`${p}.sections.marketData.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.card1Value`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.card1Desc`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.card1Sub`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.card2Value`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.card2Desc`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.card2Sub`)}</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.card3Value`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.card3Desc`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.card3Sub`)}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.card4Value`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.card4Desc`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.card4Sub`)}</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.marketData.trendTitle`)}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span dangerouslySetInnerHTML={{ __html: t(`${p}.sections.marketData.trend1`) }} />
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span dangerouslySetInnerHTML={{ __html: t(`${p}.sections.marketData.trend2`) }} />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: t(`${p}.sections.materialComparison.title`),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-200 px-4 py-2 text-left">{t(`${p}.sections.materialComparison.th1`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.th2`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.th3`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.th4`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">{t(`${p}.sections.materialComparison.th5`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row1Col1`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row1Col4`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row1Col5`)}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row2Col1`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row2Col4`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row2Col5`)}</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row3Col1`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row3Col4`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row3Col5`)}</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row4Col1`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row4Col4`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row4Col5`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.materialComparison.guideTitle`)}</h4>
            <p className="text-sm text-primary-700">{t(`${p}.sections.materialComparison.guideDesc`)}</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = t(`${p}.faqs`, { returnObjects: true }) as { question: string; answer: string }[]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.0.title`), url: "/industry/frozen-food", description: t(`${p}.relatedLinks.0.description`) },
    { title: t(`${p}.relatedLinks.1.title`), url: "/industry/pet-food", description: t(`${p}.relatedLinks.1.description`) },
    { title: t(`${p}.relatedLinks.2.title`), url: "/materials/recyclable-mono-pe", description: t(`${p}.relatedLinks.2.description`) }
  ]

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title={t(`${p}.seo.title`)}
      description={t(`${p}.seo.description`)}
      keywords={t(`${p}.seo.keywords`, { returnObjects: true }) as string[]}
      canonicalUrl="https://achievepack.com/packaging/vacuum-pouches"
      heroTitle={t(`${p}.seo.heroTitle`)}
      heroSubtitle={t(`${p}.seo.heroSubtitle`)}
      heroImage="/imgs/pouch-shape/a_three_side_seal_pouch_isolated_0879222.webp"
      heroImageAlt={t(`${p}.seo.heroImageAlt`)}
      introSummary={t(`${p}.seo.introSummary`)}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
    />
  )
}

export default VacuumPouchesPage
