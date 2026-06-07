import React from 'react'
import { Package, CheckCircle, Scissors, FileText, Target, Shield, Calendar, Mail, Download, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const FlatPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.flatPouches'
  const sections = [
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.scenarioTrigger.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            <strong>{t(`${p}.sections.scenarioTrigger.intro`)}</strong>
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.col1Title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.col1Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.col2Title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.col2Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.col3Title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.col3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong> {t(`${p}.sections.overview.desc`)}
          </p>
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.characteristicsTitle`)}</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ {t(`${p}.sections.overview.char1`)}</li>
              <li>✓ {t(`${p}.sections.overview.char2`)}</li>
              <li>✓ {t(`${p}.sections.overview.char3`)}</li>
              <li>✓ {t(`${p}.sections.overview.char4`)}</li>
              <li>✓ {t(`${p}.sections.overview.char5`)}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'types',
      title: t(`${p}.sections.types.title`),
      icon: <FileText className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-primary-200 rounded-lg p-4">
              <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.types.col1Title`)}</h4>
              <p className="text-sm mb-2">{t(`${p}.sections.types.col1Intro`)}</p>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.types.col1Item1`)}</li>
                <li>• {t(`${p}.sections.types.col1Item2`)}</li>
                <li>• {t(`${p}.sections.types.col1Item3`)}</li>
                <li>• {t(`${p}.sections.types.col1Item4`)}</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.types.col2Title`)}</h4>
              <p className="text-sm mb-2">{t(`${p}.sections.types.col2Intro`)}</p>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.types.col2Item1`)}</li>
                <li>• {t(`${p}.sections.types.col2Item2`)}</li>
                <li>• {t(`${p}.sections.types.col2Item3`)}</li>
                <li>• {t(`${p}.sections.types.col2Item4`)}</li>
              </ul>
            </div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t(`${p}.sections.features.title`),
      icon: <Scissors className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t(`${p}.sections.features.col1Title`)}</h4>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.features.col1Item1`)}</li>
                <li>• {t(`${p}.sections.features.col1Item2`)}</li>
                <li>• {t(`${p}.sections.features.col1Item3`)}</li>
                <li>• {t(`${p}.sections.features.col1Item4`)}</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t(`${p}.sections.features.col2Title`)}</h4>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.features.col2Item1`)}</li>
                <li>• {t(`${p}.sections.features.col2Item2`)}</li>
                <li>• {t(`${p}.sections.features.col2Item3`)}</li>
                <li>• {t(`${p}.sections.features.col2Item4`)}</li>
              </ul>
            </div>
          </div>
          
          {/* Flat Pouch Examples Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.features.galleryTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/pouch shape/3-side.webp" 
                alt="Three side seal flat pouch sachet" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.galleryCaption1`)}
              />
              <ClickableImage 
                src="/imgs/store/barrier/2-clear.webp" 
                alt="Clear flat pouch for product visibility" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.galleryCaption2`)}
              />
              <ClickableImage 
                src="/imgs/store/barrier/2-paper.webp" 
                alt="Kraft paper flat sachet eco-friendly" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.galleryCaption3`)}
              />
              <ClickableImage 
                src="/imgs/store/eco-material/compostable.webp" 
                alt="Compostable flat pouch sachet" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.galleryCaption4`)}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: t(`${p}.sections.riskHedge.title`),
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q1`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a1`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q2`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a2`)}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q3`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a3`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q4`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a4`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: t(`${p}.sections.decisionCta.title`),
      icon: <Package className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t(`${p}.sections.decisionCta.headline`)}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.col1Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.col1Desc`)}</p>
              <button onClick={openCalendly} className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
                {t(`${p}.sections.decisionCta.col1Btn`)}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.col2Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.col2Desc`)}</p>
              <a href="mailto:ryan@achievepack.com?subject=Flat Pouches Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                {t(`${p}.sections.decisionCta.col2Btn`)}
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.col3Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.col3Desc`)}</p>
              <Link to="/contact" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                {t(`${p}.sections.decisionCta.col3Btn`)}
              </Link>
            </div>
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
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.segment1Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.segment1Desc`)}</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.segment1Share`)}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.segment2Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.segment2Desc`)}</p>
              <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.segment2Share`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.segment3Title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.segment3Desc`)}</p>
              <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.segment3Share`)}</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.industryScenarios.successTitle`)}</h4>
            <p className="text-sm text-neutral-600">{t(`${p}.sections.industryScenarios.successStory`)}</p>
            <p className="text-xs text-neutral-500 mt-2">{t(`${p}.sections.industryScenarios.successAuthor`)}</p>
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
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.stat1Val`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.stat1Label`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.stat1Sub`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.stat2Val`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.stat2Label`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.stat2Sub`)}</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.stat3Val`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.stat3Label`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.stat3Sub`)}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.sections.marketData.stat4Val`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.sections.marketData.stat4Label`)}</div>
              <div className="text-xs opacity-75 mt-1">{t(`${p}.sections.marketData.stat4Sub`)}</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.marketData.trendsTitle`)}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span><strong>{t(`${p}.sections.marketData.trend1Bold`)}</strong> {t(`${p}.sections.marketData.trend1Text`)}</span>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span><strong>{t(`${p}.sections.marketData.trend2Bold`)}</strong> {t(`${p}.sections.marketData.trend2Text`)}</span>
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
                  <th className="border border-neutral-200 px-4 py-2 text-left">{t(`${p}.sections.materialComparison.headers.type`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.headers.barrier`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.headers.cost`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.headers.eco`)}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">{t(`${p}.sections.materialComparison.headers.use`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row1.type`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row1.eco`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row1.use`)}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row2.type`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row2.eco`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row2.use`)}</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row3.type`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row3.eco`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row3.use`)}</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">{t(`${p}.sections.materialComparison.row4.type`)}</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.row4.eco`)}</td>
                  <td className="border border-neutral-200 px-4 py-2">{t(`${p}.sections.materialComparison.row4.use`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.materialComparison.guideTitle`)}</h4>
            <p className="text-sm text-primary-700">{t(`${p}.sections.materialComparison.guideText`)}</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = t(`${p}.faqs`, { returnObjects: true }) as any
  const tables = t(`${p}.tables`, { returnObjects: true }) as any
  const relatedLinks = t(`${p}.relatedLinks`, { returnObjects: true }) as any

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title={t(`${p}.metaTitle`)}
      description={t(`${p}.metaDescription`)}
      keywords={t(`${p}.metaKeywords`, { returnObjects: true }) as string[]}
      canonicalUrl="https://achievepack.com/packaging/flat-pouches"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/pouch-shape/a_three_side_seal_pouch_isolated_0879222.webp"
      heroImageAlt={t(`${p}.heroImageAlt`)}
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
    />
  )
}

export default FlatPouchesPage
