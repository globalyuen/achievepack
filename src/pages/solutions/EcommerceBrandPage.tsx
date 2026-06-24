import React from 'react'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { Link } from 'react-router-dom'
import { ShoppingCart, Package, Truck, Camera, CheckCircle, Shield, Target, Calendar, MessageCircle, Zap, Box, Scale, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const EcommerceBrandPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const p = 'seoPages.pages.ecommerceBrand'

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.sections.heroProblem.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
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
      id: 'solution',
      title: t(`${p}.sections.solution.title`),
      icon: <Truck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.solution.intro`) }} />
          
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <Scale className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700">{t(`${p}.sections.solution.moqTitle`)}</div>
              <div className="text-xs text-green-600">{t(`${p}.sections.solution.moqDesc`)}</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Box className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-700">{t(`${p}.sections.solution.flexTitle`)}</div>
              <div className="text-xs text-blue-600">{t(`${p}.sections.solution.flexDesc`)}</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-700">{t(`${p}.sections.solution.plateTitle`)}</div>
              <div className="text-xs text-purple-600">{t(`${p}.sections.solution.plateDesc`)}</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
              <Camera className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-amber-700">{t(`${p}.sections.solution.shareTitle`)}</div>
              <div className="text-xs text-amber-600">{t(`${p}.sections.solution.shareDesc`)}</div>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.solution.examplesTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/seo-photos/a_ecommerce_lightweight_pouch_achieve_pack_8535238.webp" 
                alt="Lightweight e-commerce pouch for shipping" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.solution.caption1`)}
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp" 
                alt="Stand-up pouch for DTC supplements" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.solution.caption2`)}
              />
              <ClickableImage 
                src="/imgs/store/surface/soft-touch.webp" 
                alt="Soft touch premium finish for unboxing" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.solution.caption3`)}
              />
              <ClickableImage 
                src="/imgs/store/closure/slider-zipper.webp" 
                alt="Slider zipper for easy reseal" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.solution.caption4`)}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'unboxing',
      title: t(`${p}.sections.unboxing.title`),
      icon: <Camera className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.unboxing.intro`) }} />
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.unboxing.finishesTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• {t(`${p}.sections.unboxing.finishes.0`)}</li>
                <li>• {t(`${p}.sections.unboxing.finishes.1`)}</li>
                <li>• {t(`${p}.sections.unboxing.finishes.2`)}</li>
                <li>• {t(`${p}.sections.unboxing.finishes.3`)}</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.unboxing.designTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• {t(`${p}.sections.unboxing.design.0`)}</li>
                <li>• {t(`${p}.sections.unboxing.design.1`)}</li>
                <li>• {t(`${p}.sections.unboxing.design.2`)}</li>
                <li>• {t(`${p}.sections.unboxing.design.3`)}</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.unboxing.featuresTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• {t(`${p}.sections.unboxing.features.0`)}</li>
                <li>• {t(`${p}.sections.unboxing.features.1`)}</li>
                <li>• {t(`${p}.sections.unboxing.features.2`)}</li>
                <li>• {t(`${p}.sections.unboxing.features.3`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'durability',
      title: t(`${p}.sections.durability.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.durability.intro`) }} />
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-3">{t(`${p}.sections.durability.barrierTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-medium text-blue-700">{t(`${p}.sections.durability.highBarrierTitle`)}</h5>
                <p className="text-sm text-blue-600">{t(`${p}.sections.durability.highBarrierDesc`)}</p>
              </div>
              <div>
                <h5 className="font-medium text-blue-700">{t(`${p}.sections.durability.medBarrierTitle`)}</h5>
                <p className="text-sm text-blue-600">{t(`${p}.sections.durability.medBarrierDesc`)}</p>
              </div>
              <div>
                <h5 className="font-medium text-blue-700">{t(`${p}.sections.durability.stdBarrierTitle`)}</h5>
                <p className="text-sm text-blue-600">{t(`${p}.sections.durability.stdBarrierDesc`)}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{t(`${p}.sections.durability.features.0`)}</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{t(`${p}.sections.durability.features.1`)}</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{t(`${p}.sections.durability.features.2`)}</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{t(`${p}.sections.durability.features.3`)}</span>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: t(`${p}.sections.sustainability.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.sustainability.intro`) }} />
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/materials/compostable" className="block bg-green-50 p-4 rounded-lg border border-green-200 hover:shadow-md transition">
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.sustainability.compostableTitle`)}</h4>
              <p className="text-sm text-green-700 mt-1">{t(`${p}.sections.sustainability.compostableDesc`)}</p>
            </Link>
            <Link to="/materials/recyclable-mono-pe" className="block bg-blue-50 p-4 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800">{t(`${p}.sections.sustainability.recyclableTitle`)}</h4>
              <p className="text-sm text-blue-700 mt-1">{t(`${p}.sections.sustainability.recyclableDesc`)}</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'social-proof',
      title: t(`${p}.sections.socialProof.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-white p-5 rounded-lg border border-neutral-200">
            <p className="text-sm italic text-neutral-600 mb-4">
              "{t(`${p}.sections.socialProof.quote`)}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">MR</span>
              </div>
              <div>
                <p className="font-semibold text-neutral-800">{t(`${p}.sections.socialProof.author`)}</p>
                <p className="text-xs text-neutral-500">{t(`${p}.sections.socialProof.role`)}</p>
              </div>
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
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t(`${p}.sections.cta.title`)}</h3>
          <p className="text-lg mb-6 opacity-90">
            {t(`${p}.sections.cta.description`)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.button`)}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <ShoppingCart className="h-5 w-5" />
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
        <div className="space-y-6">
          <p className="text-neutral-700">{t(`${p}.sections.industryScenarios.intro`)}</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{t(`${p}.sections.industryScenarios.foodTitle`)}</h4>
              </div>
              <p className="text-sm text-blue-700 mb-3">{t(`${p}.sections.industryScenarios.foodDesc`)}</p>
              <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.foodShare`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.industryScenarios.marketTitle`)}</h4>
              </div>
              <p className="text-sm text-green-700 mb-3">{t(`${p}.sections.industryScenarios.marketDesc`)}</p>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.marketShare`)}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">{t(`${p}.sections.industryScenarios.batchTitle`)}</h4>
              </div>
              <p className="text-sm text-purple-700 mb-3">{t(`${p}.sections.industryScenarios.batchDesc`)}</p>
              <div className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.batchShare`)}</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h5 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.industryScenarios.successTitle`)}</h5>
            <p className="text-sm text-neutral-600">{t(`${p}.sections.industryScenarios.successDesc`)}</p>
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
          <p className="text-neutral-700">{t(`${p}.sections.marketData.intro`)}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">{t(`${p}.sections.marketData.stat1`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.marketData.stat1Label`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.marketData.stat1Trend`)}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{t(`${p}.sections.marketData.stat2`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.marketData.stat2Label`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.marketData.stat2Trend`)}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{t(`${p}.sections.marketData.stat3`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.marketData.stat3Label`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.marketData.stat3Trend`)}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">{t(`${p}.sections.marketData.stat4`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.marketData.stat4Label`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.marketData.stat4Trend`)}</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.marketData.insightsTitle`)}</h5>
            <p className="text-sm text-blue-700">{t(`${p}.sections.marketData.insightsDesc`)}</p>
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
          <p className="text-neutral-700">{t(`${p}.sections.materialComparison.intro`)}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border font-semibold">{t(`${p}.sections.materialComparison.headers.0`)}</th>
                  <th className="text-left p-3 border font-semibold">{t(`${p}.sections.materialComparison.headers.1`)}</th>
                  <th className="text-left p-3 border font-semibold">{t(`${p}.sections.materialComparison.headers.2`)}</th>
                  <th className="text-left p-3 border font-semibold">{t(`${p}.sections.materialComparison.headers.3`)}</th>
                  <th className="text-left p-3 border font-semibold">{t(`${p}.sections.materialComparison.headers.4`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-green-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">{t(`${p}.sections.materialComparison.row1.0`)}</span></td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row1.1`)}</td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row1.2`)}</td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row1.3`)}</td>
                  <td className="p-3 border text-green-600 font-medium">{t(`${p}.sections.materialComparison.row1.4`)}</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">{t(`${p}.sections.materialComparison.row2.0`)}</span></td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row2.1`)}</td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row2.2`)}</td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row2.3`)}</td>
                  <td className="p-3 border text-blue-600 font-medium">{t(`${p}.sections.materialComparison.row2.4`)}</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">{t(`${p}.sections.materialComparison.row3.0`)}</span></td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row3.1`)}</td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row3.2`)}</td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row3.3`)}</td>
                  <td className="p-3 border text-amber-600 font-medium">{t(`${p}.sections.materialComparison.row3.4`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs font-medium">{t(`${p}.sections.materialComparison.row4.0`)}</span></td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row4.1`)}</td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row4.2`)}</td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row4.3`)}</td>
                  <td className="p-3 border text-neutral-600 font-medium">{t(`${p}.sections.materialComparison.row4.4`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h5 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.materialComparison.guideTitle`)}</h5>
            <p className="text-sm text-amber-700">{t(`${p}.sections.materialComparison.guideDesc`)}</p>
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
        keywords={['ecommerce packaging', 'DTC brand pouches', 'shipping cost reduction', 'unboxing experience', 'lightweight packaging', 'online brand packaging']}
        schemaType="Product"
        ogImage="/imgs/seo-photos/a_ecommerce_lightweight_pouch_achieve_pack_8535238.webp"
      />

      <SEOPageLayout heroBgColor="#14532d"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['ecommerce packaging', 'DTC brand pouches', 'shipping cost reduction', 'unboxing experience', 'lightweight packaging']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_ecommerce_lightweight_pouch_achieve_pack_8535238.webp"
      />
    </>
  )
}

export default EcommerceBrandPage
