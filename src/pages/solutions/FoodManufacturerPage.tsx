import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FileCheck, Globe, Shield, AlertTriangle, CheckCircle, Calendar, MessageCircle, Award, Target, Scale, BookOpen, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const FoodManufacturerPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const p = 'seoPages.pages.foodManufacturer'

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.sections.heroProblem.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
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
      id: 'compliance',
      title: t(`${p}.sections.compliance.title`),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.compliance.intro`) }} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🇺🇸</span>
              <h4 className="font-semibold text-neutral-800 mt-2">{t(`${p}.sections.compliance.us`)}</h4>
              <ul className="text-xs text-neutral-600 mt-2 text-left">
                <li>• {t(`${p}.sections.compliance.usPoints.0`)}</li>
                <li>• {t(`${p}.sections.compliance.usPoints.1`)}</li>
                <li>• {t(`${p}.sections.compliance.usPoints.2`)}</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🇪🇺</span>
              <h4 className="font-semibold text-neutral-800 mt-2">{t(`${p}.sections.compliance.eu`)}</h4>
              <ul className="text-xs text-neutral-600 mt-2 text-left">
                <li>• {t(`${p}.sections.compliance.euPoints.0`)}</li>
                <li>• {t(`${p}.sections.compliance.euPoints.1`)}</li>
                <li>• {t(`${p}.sections.compliance.euPoints.2`)}</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🇬🇧</span>
              <h4 className="font-semibold text-neutral-800 mt-2">{t(`${p}.sections.compliance.uk`)}</h4>
              <ul className="text-xs text-neutral-600 mt-2 text-left">
                <li>• {t(`${p}.sections.compliance.ukPoints.0`)}</li>
                <li>• {t(`${p}.sections.compliance.ukPoints.1`)}</li>
                <li>• {t(`${p}.sections.compliance.ukPoints.2`)}</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🇦🇺</span>
              <h4 className="font-semibold text-neutral-800 mt-2">{t(`${p}.sections.compliance.anz`)}</h4>
              <ul className="text-xs text-neutral-600 mt-2 text-left">
                <li>• {t(`${p}.sections.compliance.anzPoints.0`)}</li>
                <li>• {t(`${p}.sections.compliance.anzPoints.1`)}</li>
                <li>• {t(`${p}.sections.compliance.anzPoints.2`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'food-safety',
      title: t(`${p}.sections.foodSafety.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.foodSafety.intro`) }} />
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <Award className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.foodSafety.brc`)}</h4>
              <p className="text-sm text-green-700 mt-2">{t(`${p}.sections.foodSafety.brcDesc`)}</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <Award className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.sections.foodSafety.fssc`)}</h4>
              <p className="text-sm text-blue-700 mt-2">{t(`${p}.sections.foodSafety.fsscDesc`)}</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <Award className="h-8 w-8 text-purple-600 mb-3" />
              <h4 className="font-semibold text-purple-800">{t(`${p}.sections.foodSafety.iso`)}</h4>
              <p className="text-sm text-blue-700 mt-2">{t(`${p}.sections.foodSafety.isoDesc`)}</p>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/barrier/3-foil.webp" 
                alt="High barrier food packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.foodSafety.caption1`)}
              />
              <ClickableImage 
                src="/imgs/store/barrier/3-clear.webp" 
                alt="Medium barrier food packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.foodSafety.caption2`)}
              />
              <ClickableImage 
                src="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp" 
                alt="Coffee packaging FDA compliant" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.foodSafety.caption3`)}
              />
              <ClickableImage 
                src="/imgs/seo-photos/usa/snack/a_healthy_protein_bars_achieve_pack_8282018.webp" 
                alt="Snack packaging food safe" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.foodSafety.caption4`)}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'documentation',
      title: t(`${p}.sections.documentation.title`),
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.documentation.intro`) }} />
          
          <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.documentation.docsTitle`)}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.documentation.docsCol1.0`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.documentation.docsCol1.1`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.documentation.docsCol1.2`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.documentation.docsCol1.3`)}</span>
                </li>
              </ul>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.documentation.docsCol2.0`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.documentation.docsCol2.1`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.documentation.docsCol2.2`)}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{t(`${p}.sections.documentation.docsCol2.3`)}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'future-proof',
      title: t(`${p}.sections.futureProof.title`),
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.futureProof.intro`) }} />
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.futureProof.trackingTitle`)}</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• {t(`${p}.sections.futureProof.tracking.0`)}</li>
              <li>• {t(`${p}.sections.futureProof.tracking.1`)}</li>
              <li>• {t(`${p}.sections.futureProof.tracking.2`)}</li>
              <li>• {t(`${p}.sections.futureProof.tracking.3`)}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl text-white text-center">
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
              to="/materials"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Scale className="h-5 w-5" />
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{t(`${p}.sections.industryScenarios.exportTitle`)}</h4>
              </div>
              <p className="text-sm text-blue-700">{t(`${p}.sections.industryScenarios.exportDesc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.industryScenarios.privateTitle`)}</h4>
              </div>
              <p className="text-sm text-green-700">{t(`${p}.sections.industryScenarios.privateDesc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">{t(`${p}.sections.industryScenarios.organicTitle`)}</h4>
              </div>
              <p className="text-sm text-amber-700">{t(`${p}.sections.industryScenarios.organicDesc`)}</p>
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
              <div className="text-3xl font-bold text-blue-600 mb-1">{t(`${p}.sections.marketData.stat3`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.marketData.stat3Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">{t(`${p}.sections.marketData.stat4`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.marketData.stat4Label`)}</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-5 rounded-xl border border-primary-200">
            <h4 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              {t(`${p}.sections.marketData.trendsTitle`)}
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-primary-700 mb-2">{t(`${p}.sections.marketData.trendsCol1Title`)}</h5>
                <ul className="text-primary-600 space-y-1">
                  <li>• {t(`${p}.sections.marketData.trendsCol1.0`)}</li>
                  <li>• {t(`${p}.sections.marketData.trendsCol1.1`)}</li>
                  <li>• {t(`${p}.sections.marketData.trendsCol1.2`)}</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-primary-700 mb-2">{t(`${p}.sections.marketData.trendsCol2Title`)}</h5>
                <ul className="text-primary-600 space-y-1">
                  <li>• {t(`${p}.sections.marketData.trendsCol2.0`)}</li>
                  <li>• {t(`${p}.sections.marketData.trendsCol2.1`)}</li>
                  <li>• {t(`${p}.sections.marketData.trendsCol2.2`)}</li>
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
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row1.2`)}</span></td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row1.3`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row1.4`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row1.5`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50 hover:bg-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row2.0`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row2.1`)}</span></td>
                  <td className="p-3"><span className="text-neutral-400">{t(`${p}.sections.materialComparison.row2.2`)}</span></td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row2.3`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row2.4`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row2.5`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row3.0`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row3.1`)}</span></td>
                  <td className="p-3"><span className="text-neutral-400">{t(`${p}.sections.materialComparison.row3.2`)}</span></td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row3.3`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row3.4`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row3.5`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row4.0`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row4.1`)}</span></td>
                  <td className="p-3"><span className="text-neutral-400">{t(`${p}.sections.materialComparison.row4.2`)}</span></td>
                  <td className="p-3"><span className="text-yellow-600">{t(`${p}.sections.materialComparison.row4.3`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row4.4`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row4.5`)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.sections.materialComparison.guideTitle`)}
            </h4>
            <p className="text-sm text-blue-700" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.materialComparison.guideDesc`) }} />
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
        <link rel="canonical" href="https://achievepack.com/solutions/food-manufacturer" />
        <meta name="keywords" content="food packaging regulations, FDA compliant packaging, EFSA food contact, BRC certified packaging, food manufacturing packaging, regulatory compliant packaging" />
      </Helmet>

      <SEOPageLayout heroBgColor="#1f2937"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['food packaging regulations', 'FDA compliant packaging', 'EFSA food contact', 'BRC certified packaging']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/store/barrier/3-foil.webp"
      />
    </>
  )
}

export default FoodManufacturerPage
