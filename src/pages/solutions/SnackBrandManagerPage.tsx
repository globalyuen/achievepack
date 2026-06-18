import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Cookie, Leaf, Package, BarChart3, CheckCircle, Calendar, MessageCircle, Award, Target, Shield, FileCheck, Layers, Factory, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const SnackBrandManagerPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const p = 'seoPages.pages.snackBrandManager'

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.sections.heroProblem.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-lg border border-lime-200">
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
      id: 'multi-product',
      title: t(`${p}.sections.multiProduct.title`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.multiProduct.intro`) }} />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <Cookie className="h-8 w-8 text-amber-600 mb-3" />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.multiProduct.col1Title`)}</h4>
              <p className="text-xs text-neutral-600 mt-2">{t(`${p}.sections.multiProduct.col1Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <Package className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.multiProduct.col2Title`)}</h4>
              <p className="text-xs text-neutral-600 mt-2">{t(`${p}.sections.multiProduct.col2Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.multiProduct.col3Title`)}</h4>
              <p className="text-xs text-neutral-600 mt-2">{t(`${p}.sections.multiProduct.col3Desc`)}</p>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.multiProduct.examplesTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp" 
                alt="Sustainable snack packaging solutions" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.multiProduct.caption1`)}
              />
              <ClickableImage 
                src="/imgs/seo-photos/usa/snack/a_snacks_brand_sustainability_guide_7868632.webp" 
                alt="Snack brand sustainability packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.multiProduct.caption2`)}
              />
              <ClickableImage 
                src="/imgs/seo-photos/usa/snack/a_snacks_pouch_format_comparison_8281669.webp" 
                alt="Snack pouch format options" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.multiProduct.caption3`)}
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp" 
                alt="Stand-up snack pouch" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.multiProduct.caption4`)}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability-claims',
      title: t(`${p}.sections.sustainabilityClaims.title`),
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.sustainabilityClaims.intro`) }} />
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">{t(`${p}.sections.sustainabilityClaims.marketingTitle`)}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-green-700 mb-2">{t(`${p}.sections.sustainabilityClaims.certsTitle`)}</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• {t(`${p}.sections.sustainabilityClaims.certsList.0`)}</li>
                  <li>• {t(`${p}.sections.sustainabilityClaims.certsList.1`)}</li>
                  <li>• {t(`${p}.sections.sustainabilityClaims.certsList.2`)}</li>
                  <li>• {t(`${p}.sections.sustainabilityClaims.certsList.3`)}</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700 mb-2">{t(`${p}.sections.sustainabilityClaims.msgTitle`)}</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• {t(`${p}.sections.sustainabilityClaims.msgList.0`)}</li>
                  <li>• {t(`${p}.sections.sustainabilityClaims.msgList.1`)}</li>
                  <li>• {t(`${p}.sections.sustainabilityClaims.msgList.2`)}</li>
                  <li>• {t(`${p}.sections.sustainabilityClaims.msgList.3`)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cost-performance',
      title: t(`${p}.sections.costPerformance.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.costPerformance.intro`) }} />
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mt-4">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="p-3 text-left">{t(`${p}.sections.costPerformance.headers.0`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.costPerformance.headers.1`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.costPerformance.headers.2`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.costPerformance.headers.3`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t(`${p}.sections.costPerformance.row1.0`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.costPerformance.row1.1`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.costPerformance.row1.2`)}</td>
                  <td className="p-3">{t(`${p}.sections.costPerformance.row1.3`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.costPerformance.row2.0`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.costPerformance.row2.1`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.costPerformance.row2.2`)}</td>
                  <td className="p-3">{t(`${p}.sections.costPerformance.row2.3`)}</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t(`${p}.sections.costPerformance.row3.0`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.costPerformance.row3.1`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.costPerformance.row3.2`)}</td>
                  <td className="p-3">{t(`${p}.sections.costPerformance.row3.3`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'retail-ready',
      title: t(`${p}.sections.retailReady.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.retailReady.intro`) }} />
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.retailReady.col1Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• {t(`${p}.sections.retailReady.col1List.0`)}</li>
                <li>• {t(`${p}.sections.retailReady.col1List.1`)}</li>
                <li>• {t(`${p}.sections.retailReady.col1List.2`)}</li>
                <li>• {t(`${p}.sections.retailReady.col1List.3`)}</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.retailReady.col2Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• {t(`${p}.sections.retailReady.col2List.0`)}</li>
                <li>• {t(`${p}.sections.retailReady.col2List.1`)}</li>
                <li>• {t(`${p}.sections.retailReady.col2List.2`)}</li>
                <li>• {t(`${p}.sections.retailReady.col2List.3`)}</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.retailReady.col3Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• {t(`${p}.sections.retailReady.col3List.0`)}</li>
                <li>• {t(`${p}.sections.retailReady.col3List.1`)}</li>
                <li>• {t(`${p}.sections.retailReady.col3List.2`)}</li>
                <li>• {t(`${p}.sections.retailReady.col3List.3`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'supplier-partnership',
      title: t(`${p}.sections.supplierPartnership.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.supplierPartnership.intro`) }} />
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.supplierPartnership.benefitsTitle`)}</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{t(`${p}.sections.supplierPartnership.benefits.0`)}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{t(`${p}.sections.supplierPartnership.benefits.1`)}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{t(`${p}.sections.supplierPartnership.benefits.2`)}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{t(`${p}.sections.supplierPartnership.benefits.3`)}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{t(`${p}.sections.supplierPartnership.benefits.4`)}</span>
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
        <div className="bg-gradient-to-r from-green-600 to-lime-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t(`${p}.sections.cta.title`)}</h3>
          <p className="text-lg mb-6 opacity-90">
            {t(`${p}.sections.cta.description`)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.button`)}
            </button>
            <Link
              to="/materials"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Leaf className="h-5 w-5" />
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
            <div className="bg-gradient-to-br from-lime-50 to-green-50 p-5 rounded-xl border border-lime-200">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="h-5 w-5 text-lime-600" />
                <h4 className="font-semibold text-lime-800">{t(`${p}.sections.industryScenarios.organicTitle`)}</h4>
              </div>
              <p className="text-sm text-lime-700">{t(`${p}.sections.industryScenarios.organicDesc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Cookie className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">{t(`${p}.sections.industryScenarios.betterTitle`)}</h4>
              </div>
              <p className="text-sm text-amber-700">{t(`${p}.sections.industryScenarios.betterDesc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{t(`${p}.sections.industryScenarios.multiTitle`)}</h4>
              </div>
              <p className="text-sm text-blue-700">{t(`${p}.sections.industryScenarios.multiDesc`)}</p>
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
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">{t(`${p}.sections.industryScenarios.successTag1`)}</span>
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
              <div className="text-3xl font-bold text-green-600 mb-1">{t(`${p}.sections.marketData.stat2`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.marketData.stat2Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">{t(`${p}.sections.marketData.stat3`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.marketData.stat3Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{t(`${p}.sections.marketData.stat4`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.marketData.stat4Label`)}</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-lime-50 to-green-50 p-5 rounded-xl border border-lime-200">
            <h4 className="font-semibold text-lime-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              {t(`${p}.sections.marketData.trendsTitle`)}
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-lime-700 mb-2">{t(`${p}.sections.marketData.prefTitle`)}</h5>
                <ul className="text-lime-600 space-y-1">
                  <li>• {t(`${p}.sections.marketData.prefList.0`)}</li>
                  <li>• {t(`${p}.sections.marketData.prefList.1`)}</li>
                  <li>• {t(`${p}.sections.marketData.prefList.2`)}</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-lime-700 mb-2">{t(`${p}.sections.marketData.reqTitle`)}</h5>
                <ul className="text-lime-600 space-y-1">
                  <li>• {t(`${p}.sections.marketData.reqList.0`)}</li>
                  <li>• {t(`${p}.sections.marketData.reqList.1`)}</li>
                  <li>• {t(`${p}.sections.marketData.reqList.2`)}</li>
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
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row1.1`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row1.2`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row1.3`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row1.4`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row1.5`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50 hover:bg-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row2.0`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row2.1`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row2.2`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row2.3`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row2.4`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row2.5`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row3.0`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row3.1`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row3.2`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row3.3`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row3.4`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row3.5`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row4.0`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row4.1`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row4.2`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row4.3`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row4.4`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row4.5`)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-lime-50 p-5 rounded-xl border border-lime-200">
            <h4 className="font-semibold text-lime-800 mb-2 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.sections.materialComparison.guideTitle`)}
            </h4>
            <p className="text-sm text-lime-700" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.materialComparison.guideDesc`) }} />
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
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://achievepack.com/solutions/snack-brand-manager" />
        <meta name="keywords" content="snack brand packaging, organic snack pouches, sustainable snack packaging, compostable chip bags, granola packaging, nut packaging" />
      </Helmet>

      <SEOPageLayout heroBgColor="#451a03"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['snack brand packaging', 'organic snack pouches', 'sustainable snack packaging', 'compostable chip bags']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp"
      />
    </>
  )
}

export default SnackBrandManagerPage
