import React from 'react'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { Link } from 'react-router-dom'
import { Lightbulb, Beaker, Rocket, Zap, Clock, CheckCircle, Calendar, MessageCircle, Package, Target, Sparkles, Repeat, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const ProductDeveloperPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const p = 'seoPages.pages.productDeveloper'

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.sections.heroProblem.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
            <p className="text-lg font-medium text-neutral-900 mb-4" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.heroProblem.intro`) }} />
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">{t(`${p}.sections.heroProblem.challengesTitle`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• {t(`${p}.sections.heroProblem.challenges.0`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.challenges.1`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.challenges.2`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.challenges.3`)}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.heroProblem.needTitle`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• {t(`${p}.sections.heroProblem.need.0`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.need.1`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.need.2`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.need.3`)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'rapid-prototyping',
      title: t(`${p}.sections.rapidPrototyping.title`),
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.rapidPrototyping.intro`) }} />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-2">{t(`${p}.sections.rapidPrototyping.moqTitle`)}</div>
              <div className="text-sm text-purple-600 font-medium">{t(`${p}.sections.rapidPrototyping.moqDesc`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.rapidPrototyping.moqDescDetail`)}</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">{t(`${p}.sections.rapidPrototyping.flexTitle`)}</div>
              <div className="text-sm text-blue-600 font-medium">{t(`${p}.sections.rapidPrototyping.flexDesc`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.rapidPrototyping.flexDescDetail`)}</p>
            </div>
            <div className="bg-pink-50 p-5 rounded-lg border border-pink-200 text-center">
              <div className="text-3xl font-bold text-pink-700 mb-2">{t(`${p}.sections.rapidPrototyping.plateTitle`)}</div>
              <div className="text-sm text-pink-600 font-medium">{t(`${p}.sections.rapidPrototyping.plateDesc`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.rapidPrototyping.plateDescDetail`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cutting-edge',
      title: t(`${p}.sections.cuttingEdge.title`),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.cuttingEdge.intro`) }} />
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.cuttingEdge.materialsTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span>{t(`${p}.sections.cuttingEdge.materials.0`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span>{t(`${p}.sections.cuttingEdge.materials.1`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span>{t(`${p}.sections.cuttingEdge.materials.2`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span>{t(`${p}.sections.cuttingEdge.materials.3`)}</span>
                </li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.cuttingEdge.featuresTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-amber-600" />
                  <span>{t(`${p}.sections.cuttingEdge.features.0`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-amber-600" />
                  <span>{t(`${p}.sections.cuttingEdge.features.1`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-amber-600" />
                  <span>{t(`${p}.sections.cuttingEdge.features.2`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-amber-600" />
                  <span>{t(`${p}.sections.cuttingEdge.features.3`)}</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.cuttingEdge.examplesTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/surface/metalic.webp" 
                alt="Metallic finish innovative packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.cuttingEdge.caption1`)}
              />
              <ClickableImage 
                src="/imgs/store/surface/stamp-foil.webp" 
                alt="Stamp foil premium finish" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.cuttingEdge.caption2`)}
              />
              <ClickableImage 
                src="/imgs/store/closure/slider-zipper.webp" 
                alt="Slider zipper innovation" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.cuttingEdge.caption3`)}
              />
              <ClickableImage 
                src="/imgs/4-infograhic/compost.webp" 
                alt="Compostable innovation" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.cuttingEdge.caption4`)}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'iteration',
      title: t(`${p}.sections.iteration.title`),
      icon: <Repeat className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.iteration.intro`) }} />
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-5 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3">{t(`${p}.sections.iteration.verControlTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-700">{t(`${p}.sections.iteration.v1Title`)}</div>
                <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.iteration.v1Desc`)}</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-700">{t(`${p}.sections.iteration.v2Title`)}</div>
                <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.iteration.v2Desc`)}</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-700">{t(`${p}.sections.iteration.v3Title`)}</div>
                <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.iteration.v3Desc`)}</p>
              </div>
            </div>
            <p className="text-sm text-purple-700 mt-4 text-center">
              {t(`${p}.sections.iteration.priceNote`)}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'collaboration',
      title: t(`${p}.sections.collaboration.title`),
      icon: <Lightbulb className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.collaboration.intro`) }} />
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.collaboration.bringTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• {t(`${p}.sections.collaboration.bring.0`)}</li>
                <li>• {t(`${p}.sections.collaboration.bring.1`)}</li>
                <li>• {t(`${p}.sections.collaboration.bring.2`)}</li>
                <li>• {t(`${p}.sections.collaboration.bring.3`)}</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.collaboration.workTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• {t(`${p}.sections.collaboration.work.0`)}</li>
                <li>• {t(`${p}.sections.collaboration.work.1`)}</li>
                <li>• {t(`${p}.sections.collaboration.work.2`)}</li>
                <li>• {t(`${p}.sections.collaboration.work.3`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t(`${p}.sections.cta.title`)}</h3>
          <p className="text-lg mb-6 opacity-90">
            {t(`${p}.sections.cta.description`)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.button`)}
            </button>
            <Link
              to="/materials"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Package className="h-5 w-5" />
              {t(`${p}.sections.cta.browse`)}
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: t(`${p}.sections.industryScenarios.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.industryScenarios.intro`) }} />
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Beaker className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">{t(`${p}.sections.industryScenarios.rdTitle`)}</h4>
              </div>
              <p className="text-sm text-purple-700">{t(`${p}.sections.industryScenarios.rdDesc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{t(`${p}.sections.industryScenarios.labsTitle`)}</h4>
              </div>
              <p className="text-sm text-blue-700">{t(`${p}.sections.industryScenarios.labsDesc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">{t(`${p}.sections.industryScenarios.corpTitle`)}</h4>
              </div>
              <p className="text-sm text-amber-700">{t(`${p}.sections.industryScenarios.corpDesc`)}</p>
            </div>
          </div>

          <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-600" />
              {t(`${p}.sections.industryScenarios.successTitle`)}
            </h4>
            <p className="text-sm text-neutral-600 mb-3">
              {t(`${p}.sections.industryScenarios.successDesc`)}
            </p>
            <div className="flex gap-4 text-xs">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">{t(`${p}.sections.industryScenarios.successTag1`)}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{t(`${p}.sections.industryScenarios.successTag2`)}</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: t(`${p}.sections.marketData.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.marketData.intro`) }} />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">{t(`${p}.sections.marketData.stat1`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.marketData.stat1Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">{t(`${p}.sections.marketData.stat2`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.marketData.stat2Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{t(`${p}.sections.marketData.stat3`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.marketData.stat3Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{t(`${p}.sections.marketData.stat4`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.marketData.stat4Label`)}</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              {t(`${p}.sections.marketData.trendsTitle`)}
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-purple-700 mb-2">{t(`${p}.sections.marketData.techTitle`)}</h5>
                <ul className="text-purple-600 space-y-1">
                  <li>• {t(`${p}.sections.marketData.techList.0`)}</li>
                  <li>• {t(`${p}.sections.marketData.techList.1`)}</li>
                  <li>• {t(`${p}.sections.marketData.techList.2`)}</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-700 mb-2">{t(`${p}.sections.marketData.matTitle`)}</h5>
                <ul className="text-purple-600 space-y-1">
                  <li>• {t(`${p}.sections.marketData.matList.0`)}</li>
                  <li>• {t(`${p}.sections.marketData.matList.1`)}</li>
                  <li>• {t(`${p}.sections.marketData.matList.2`)}</li>
                </ul>
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
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.materialComparison.intro`) }} />
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left rounded-tl-lg">{t(`${p}.sections.materialComparison.headers.0`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materialComparison.headers.1`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materialComparison.headers.2`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materialComparison.headers.3`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materialComparison.headers.4`)}</th>
                  <th className="p-3 text-left rounded-tr-lg">{t(`${p}.sections.materialComparison.headers.5`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row1.0`)}</td>
                  <td className="p-3"><span className="text-purple-600">{t(`${p}.sections.materialComparison.row1.1`)}</span></td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row1.2`)}</span></td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row1.3`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row1.4`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row1.5`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50 hover:bg-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row2.0`)}</td>
                  <td className="p-3"><span className="text-purple-600">{t(`${p}.sections.materialComparison.row2.1`)}</span></td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row2.2`)}</span></td>
                  <td className="p-3"><span className="text-yellow-600">{t(`${p}.sections.materialComparison.row2.3`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row2.4`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row2.5`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row3.0`)}</td>
                  <td className="p-3"><span className="text-purple-600">{t(`${p}.sections.materialComparison.row3.1`)}</span></td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row3.2`)}</span></td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row3.3`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row3.4`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row3.5`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row4.0`)}</td>
                  <td className="p-3"><span className="text-purple-600">{t(`${p}.sections.materialComparison.row4.1`)}</span></td>
                  <td className="p-3"><span className="text-amber-600">{t(`${p}.sections.materialComparison.row4.2`)}</span></td>
                  <td className="p-3"><span className="text-yellow-600">{t(`${p}.sections.materialComparison.row4.3`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row4.4`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row4.5`)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.sections.materialComparison.guideTitle`)}
            </h4>
            <p className="text-sm text-purple-700" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.materialComparison.guideDesc`) }} />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.faq.q1`),
      answer: t(`${p}.faq.a1`)
    },
    {
      question: t(`${p}.faq.q2`),
      answer: t(`${p}.faq.a2`)
    },
    {
      question: t(`${p}.faq.q3`),
      answer: t(`${p}.faq.a3`)
    },
    {
      question: t(`${p}.faq.q4`),
      answer: t(`${p}.faq.a4`)
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['innovation packaging', 'rapid prototyping', 'product development packaging', 'low MOQ testing', 'flexible packaging design', 'cutting-edge materials']}
        schemaType="Product"
      />

      <SEOPageLayout heroBgColor="#1f2937"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['innovation packaging', 'rapid prototyping', 'product development packaging', 'low MOQ testing']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_digital_printing_customization_2717640.webp"
        heroImageAlt="Digital printing customization for product innovation"
      />
    </>
  )
}

export default ProductDeveloperPage
