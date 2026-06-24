import React from 'react'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { Link } from 'react-router-dom'
import { Coffee, Wind, Shield, Clock, CheckCircle, Calendar, MessageCircle, Award, Target, Package, Sparkles, Store, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const CoffeeRoasterPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const p = 'seoPages.pages.coffeeRoaster'

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.sections.heroProblem.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.sections.heroProblem.intro`)}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">{t(`${p}.sections.heroProblem.concernsTitle`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• {t(`${p}.sections.heroProblem.concerns.0`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.concerns.1`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.concerns.2`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.concerns.3`)}</li>
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
      id: 'degassing',
      title: t(`${p}.sections.degassing.title`),
      icon: <Wind className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.degassing.intro`)}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 text-center">
              <Wind className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <h4 className="font-semibold text-amber-800">{t(`${p}.sections.degassing.valveTitle`)}</h4>
              <p className="text-xs text-amber-700 mt-2">{t(`${p}.sections.degassing.valveDesc`)}</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200 text-center">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.degassing.barrierTitle`)}</h4>
              <p className="text-xs text-green-700 mt-2">{t(`${p}.sections.degassing.barrierDesc`)}</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 text-center">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.sections.degassing.sameDayTitle`)}</h4>
              <p className="text-xs text-blue-700 mt-2">{t(`${p}.sections.degassing.sameDayDesc`)}</p>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.degassing.optionsTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp" 
                alt="Specialty coffee packaging with valve" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.degassing.pouch`)}
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_flat_bottom_pouch_isolated_7901973.webp" 
                alt="Flat bottom coffee bag" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.degassing.flat`)}
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_side_gusset_pouch_isolated_2545871.webp" 
                alt="Side gusset coffee bag" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.degassing.gusset`)}
              />
              <ClickableImage 
                src="/imgs/store/closure/tin-tie.webp" 
                alt="Tin tie closure for coffee" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.degassing.tin`)}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainable',
      title: t(`${p}.sections.sustainable.title`),
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.sustainable.intro`)}
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Link to="/materials/compostable" className="block bg-green-50 p-5 rounded-lg border border-green-200 hover:shadow-md transition">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.sustainable.compostableTitle`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.sustainable.compostableDesc`)}</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">{t(`${p}.sections.sustainable.learnMore`)}</span>
            </Link>
            <Link to="/materials/recyclable-mono-pe" className="block bg-blue-50 p-5 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.sustainable.recyclableTitle`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.sections.sustainable.recyclableDesc`)}</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">{t(`${p}.sections.sustainable.learnMore`)}</span>
            </Link>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.sustainable.valveTitle`)}</h4>
            <p className="text-sm text-amber-700">{t(`${p}.sections.sustainable.valveDesc`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'retail-presence',
      title: t(`${p}.sections.retail.title`),
      icon: <Store className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.retail.intro`)}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.retail.stylesTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• {t(`${p}.sections.retail.styles.0`)}</li>
                <li>• {t(`${p}.sections.retail.styles.1`)}</li>
                <li>• {t(`${p}.sections.retail.styles.2`)}</li>
                <li>• {t(`${p}.sections.retail.styles.3`)}</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.retail.finishesTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• {t(`${p}.sections.retail.finishes.0`)}</li>
                <li>• {t(`${p}.sections.retail.finishes.1`)}</li>
                <li>• {t(`${p}.sections.retail.finishes.2`)}</li>
                <li>• {t(`${p}.sections.retail.finishes.3`)}</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.retail.closureTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• {t(`${p}.sections.retail.closure.0`)}</li>
                <li>• {t(`${p}.sections.retail.closure.1`)}</li>
                <li>• {t(`${p}.sections.retail.closure.2`)}</li>
                <li>• {t(`${p}.sections.retail.closure.3`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'consistent-supply',
      title: t(`${p}.sections.supply.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.supply.intro`)}
          </p>
          
          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-neutral-700">{t(`${p}.sections.supply.time`)}</div>
                <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.supply.timeDesc`)}</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-700">{t(`${p}.sections.supply.blanket`)}</div>
                <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.supply.blanketDesc`)}</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-700">{t(`${p}.sections.supply.priority`)}</div>
                <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.supply.priorityDesc`)}</p>
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
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t(`${p}.sections.cta.description`)}</h3>
          <p className="text-lg mb-6 opacity-90">
            {t(`${p}.sections.cta.desc2`)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.button`)}
            </button>
            <Link
              to="/products/coffee-bags-degassing-valve"
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
        <div className="space-y-6">
          <p className="text-neutral-700">{t(`${p}.sections.industryScenarios.intro`)}</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">{t(`${p}.sections.industryScenarios.roasterTitle`)}</h4>
              </div>
              <p className="text-sm text-amber-700 mb-3">{t(`${p}.sections.industryScenarios.roasterDesc`)}</p>
              <div className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.roasterShare`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.industryScenarios.organicTitle`)}</h4>
              </div>
              <p className="text-sm text-green-700 mb-3">{t(`${p}.sections.industryScenarios.organicDesc`)}</p>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.organicShare`)}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Store className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{t(`${p}.sections.industryScenarios.ecommerceTitle`)}</h4>
              </div>
              <p className="text-sm text-blue-700 mb-3">{t(`${p}.sections.industryScenarios.ecommerceDesc`)}</p>
              <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.ecommerceShare`)}</div>
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
              <div className="text-3xl font-bold text-amber-600 mb-1">{t(`${p}.sections.marketData.stat2`)}</div>
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
              <div className="text-3xl font-bold text-blue-600 mb-1">{t(`${p}.sections.marketData.stat4`)}</div>
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
                  <td className="p-3 border text-green-600 font-medium">$$</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">{t(`${p}.sections.materialComparison.row2.0`)}</span></td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row2.1`)}</td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row2.2`)}</td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row2.3`)}</td>
                  <td className="p-3 border text-blue-600 font-medium">$</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">{t(`${p}.sections.materialComparison.row3.0`)}</span></td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row3.1`)}</td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row3.2`)}</td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row3.3`)}</td>
                  <td className="p-3 border text-amber-600 font-medium">$$</td>
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
        keywords={['coffee roaster packaging', 'degassing valve bags', 'sustainable coffee bags', 'compostable coffee packaging', 'specialty coffee packaging', 'coffee bag supplier']}
        schemaType="Product"
        ogImage="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp"
      />

      <SEOPageLayout heroBgColor="#451a03"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['coffee roaster packaging', 'degassing valve bags', 'sustainable coffee bags', 'specialty coffee packaging']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp"
      />
    </>
  )
}

export default CoffeeRoasterPage
