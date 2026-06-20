import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Building2, FileCheck, BarChart3, Shield, Globe, CheckCircle, Calendar, MessageCircle, Award, Target, Users, Leaf, Factory, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Package } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const CorporateSustainabilityPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const p = 'seoPages.pages.corporateSustainability'

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.sections.heroProblem.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
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
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.certifications.intro`) }} />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.certifications.compostabilityTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.certifications.compostability.0`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.certifications.compostability.1`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.certifications.compostability.2`)}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.certifications.foodSafetyTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.certifications.foodSafety.0`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.certifications.foodSafety.1`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.certifications.foodSafety.2`)}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.certifications.recyclabilityTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.certifications.recyclability.0`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.certifications.recyclability.1`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.certifications.recyclability.2`)}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'reporting',
      title: t(`${p}.sections.reporting.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.reporting.intro`) }} />
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200 mt-4">
            <h4 className="font-semibold text-green-800 mb-3">{t(`${p}.sections.reporting.metricsTitle`)}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-green-700 mb-2">{t(`${p}.sections.reporting.envImpactTitle`)}</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• {t(`${p}.sections.reporting.envImpact.0`)}</li>
                  <li>• {t(`${p}.sections.reporting.envImpact.1`)}</li>
                  <li>• {t(`${p}.sections.reporting.envImpact.2`)}</li>
                  <li>• {t(`${p}.sections.reporting.envImpact.3`)}</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700 mb-2">{t(`${p}.sections.reporting.complianceTitle`)}</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• {t(`${p}.sections.reporting.compliance.0`)}</li>
                  <li>• {t(`${p}.sections.reporting.compliance.1`)}</li>
                  <li>• {t(`${p}.sections.reporting.compliance.2`)}</li>
                  <li>• {t(`${p}.sections.reporting.compliance.3`)}</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/4-infograhic/compost.webp" 
                alt="Compostable certification documentation" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.reporting.captions.compostable`)}
              />
              <ClickableImage 
                src="/imgs/4-infograhic/recyclable.webp" 
                alt="Recyclable certification documentation" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.reporting.captions.recyclable`)}
              />
              <ClickableImage 
                src="/imgs/4-infograhic/PCR.webp"
                alt="PCR content certification" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.reporting.captions.pcr`)}
              />
              <ClickableImage 
                src="/imgs/4-infograhic/Bio-PE.webp"
                alt="Bio-based material certification" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.reporting.captions.bioPE`)}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'scalable',
      title: t(`${p}.sections.scalable.title`),
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.scalable.intro`) }} />
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.scalable.col1Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.scalable.col1Desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.scalable.col2Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.scalable.col2Desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.scalable.col3Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.scalable.col3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'supply-chain',
      title: t(`${p}.sections.supplyChain.title`),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.supplyChain.intro`) }} />
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.supplyChain.credentialsTitle`)}</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{t(`${p}.sections.supplyChain.credentials.0`)}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{t(`${p}.sections.supplyChain.credentials.1`)}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{t(`${p}.sections.supplyChain.credentials.2`)}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{t(`${p}.sections.supplyChain.credentials.3`)}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{t(`${p}.sections.supplyChain.credentials.4`)}</span>
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
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 rounded-xl text-white text-center">
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
        <div className="space-y-6">
          <p className="text-neutral-700">{t(`${p}.sections.industryScenarios.intro`)}</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.industryScenarios.foodTitle`)}</h4>
              </div>
              <p className="text-sm text-green-700 mb-3">{t(`${p}.sections.industryScenarios.foodDesc`)}</p>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.foodShare`)}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{t(`${p}.sections.industryScenarios.marketTitle`)}</h4>
              </div>
              <p className="text-sm text-blue-700 mb-3">{t(`${p}.sections.industryScenarios.marketDesc`)}</p>
              <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.marketShare`)}</div>
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
              <div className="text-3xl font-bold text-green-600 mb-1">{t(`${p}.sections.marketData.stat2`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.marketData.stat2Label`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.marketData.stat2Trend`)}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{t(`${p}.sections.marketData.stat3`)}</div>
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
                <tr className="hover:bg-purple-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">{t(`${p}.sections.materialComparison.row4.0`)}</span></td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row4.1`)}</td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row4.2`)}</td>
                  <td className="p-3 border">{t(`${p}.sections.materialComparison.row4.3`)}</td>
                  <td className="p-3 border text-purple-600 font-medium">{t(`${p}.sections.materialComparison.row4.4`)}</td>
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
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://achievepack.com/solutions/corporate-sustainability" />
        <meta name="keywords" content="corporate sustainability packaging, ESG packaging, certified sustainable packaging, environmental reporting, supply chain transparency, corporate packaging solutions" />
      </Helmet>

      <SEOPageLayout heroBgColor="#14532d"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['corporate sustainability packaging', 'ESG packaging', 'certified sustainable packaging', 'environmental reporting']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/4-infograhic/compost.webp"
      />
    </>
  )
}

export default CorporateSustainabilityPage

