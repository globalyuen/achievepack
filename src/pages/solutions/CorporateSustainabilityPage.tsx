import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Building2, BarChart3, Award, Target, Leaf, Factory, 
  ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Package,
  CheckCircle, Calendar, MessageCircle, Globe
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CorporateSustainabilityPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.corporateSustainability'
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.sections.hero-problem.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.sections.hero-problem.intro`, {
                interpolation: { escapeValue: false }
              })}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">{t(`${p}.sections.hero-problem.concernsTitle`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  {(t(`${p}.sections.hero-problem.concerns`, { returnObjects: true }) as string[]).map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.hero-problem.needsTitle`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  {(t(`${p}.sections.hero-problem.needs`, { returnObjects: true }) as string[]).map((n, i) => (
                    <li key={i}>• {n}</li>
                  ))}
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
          <p>
            {t(`${p}.sections.certifications.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.certifications.col1Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                {(t(`${p}.sections.certifications.col1Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.certifications.col2Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                {(t(`${p}.sections.certifications.col2Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.certifications.col3Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                {(t(`${p}.sections.certifications.col3Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
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
          <p>
            {t(`${p}.sections.reporting.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200 mt-4">
            <h4 className="font-semibold text-green-800 mb-3">{t(`${p}.sections.reporting.metricsTitle`)}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-green-700 mb-2">{t(`${p}.sections.reporting.metricCol1Title`)}</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  {(t(`${p}.sections.reporting.metricCol1Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700 mb-2">{t(`${p}.sections.reporting.metricCol2Title`)}</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  {(t(`${p}.sections.reporting.metricCol2Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
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
                caption={t(`${p}.sections.reporting.img1Caption`)}
              />
              <ClickableImage 
                src="/imgs/4-infograhic/recyclable.webp" 
                alt="Recyclable certification documentation" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.reporting.img2Caption`)}
              />
              <ClickableImage 
                src="/imgs/4-infograhic/PCR.webp"
                alt="PCR content certification" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.reporting.img3Caption`)}
              />
              <ClickableImage 
                src="/imgs/4-infograhic/Bio-PE.webp"
                alt="Bio-based material certification" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.reporting.img4Caption`)}
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
          <p>
            {t(`${p}.sections.scalable.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.scalable.card1Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.scalable.card1Desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.scalable.card2Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.scalable.card2Desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.scalable.card3Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.scalable.card3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'supply-chain',
      title: t(`${p}.sections.supply-chain.title`),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.supply-chain.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.supply-chain.cardTitle`)}</h4>
            <div className="flex flex-wrap gap-2">
              {(t(`${p}.sections.supply-chain.badges`, { returnObjects: true }) as string[]).map((badge, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{badge}</span>
              ))}
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
            {t(`${p}.sections.cta.desc`)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.btn1`)}
            </button>
            <Link
              to="/materials"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Leaf className="h-5 w-5" />
              {t(`${p}.sections.cta.btn2`)}
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: t(`${p}.sections.industry-scenarios.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">{t(`${p}.sections.industry-scenarios.intro`)}</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.industry-scenarios.card1Title`)}</h4>
              </div>
              <p className="text-sm text-green-700 mb-3">{t(`${p}.sections.industry-scenarios.card1Desc`)}</p>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industry-scenarios.card1Share`)}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{t(`${p}.sections.industry-scenarios.card2Title`)}</h4>
              </div>
              <p className="text-sm text-blue-700 mb-3">{t(`${p}.sections.industry-scenarios.card2Desc`)}</p>
              <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industry-scenarios.card2Share`)}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">{t(`${p}.sections.industry-scenarios.card3Title`)}</h4>
              </div>
              <p className="text-sm text-purple-700 mb-3">{t(`${p}.sections.industry-scenarios.card3Desc`)}</p>
              <div className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industry-scenarios.card3Share`)}</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h5 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.industry-scenarios.storyTitle`)}</h5>
            <p className="text-sm text-neutral-600">{t(`${p}.sections.industry-scenarios.storyDesc`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: t(`${p}.sections.market-data.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">{t(`${p}.sections.market-data.intro`)}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">{t(`${p}.sections.market-data.stat1Val`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.market-data.stat1Label`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.market-data.stat1Trend`)}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{t(`${p}.sections.market-data.stat2Val`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.market-data.stat2Label`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.market-data.stat2Trend`)}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{t(`${p}.sections.market-data.stat3Val`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.market-data.stat3Label`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.market-data.stat3Trend`)}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">{t(`${p}.sections.market-data.stat4Val`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.market-data.stat4Label`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.market-data.stat4Trend`)}</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.market-data.insightTitle`)}</h5>
            <p className="text-sm text-blue-700">{t(`${p}.sections.market-data.insightDesc`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: t(`${p}.sections.material-comparison.title`),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">{t(`${p}.sections.material-comparison.intro`)}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  {(t(`${p}.sections.material-comparison.headers`, { returnObjects: true }) as string[]).map((h, idx) => (
                    <th key={idx} className="text-left p-3 border font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(t(`${p}.sections.material-comparison.rows`, { returnObjects: true }) as string[][]).map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-neutral-50">
                    <td className="p-3 border">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        rowIdx === 0 ? 'bg-green-100 text-green-700' :
                        rowIdx === 1 ? 'bg-blue-100 text-blue-700' :
                        rowIdx === 2 ? 'bg-amber-100 text-amber-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {row[0]}
                      </span>
                    </td>
                    <td className="p-3 border">{row[1]}</td>
                    <td className="p-3 border">{row[2]}</td>
                    <td className="p-3 border">{row[3]}</td>
                    <td className={`p-3 border font-medium ${
                      rowIdx === 0 || rowIdx === 2 ? 'text-green-600' :
                      rowIdx === 1 ? 'text-blue-600' :
                      'text-purple-600'
                    }`}>{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h5 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.material-comparison.guideTitle`)}</h5>
            <p className="text-sm text-amber-700">{t(`${p}.sections.material-comparison.guideDesc`)}</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.faqs.q1`),
      answer: t(`${p}.faqs.a1`)
    },
    {
      question: t(`${p}.faqs.q2`),
      answer: t(`${p}.faqs.a2`)
    },
    {
      question: t(`${p}.faqs.q3`),
      answer: t(`${p}.faqs.a3`)
    },
    {
      question: t(`${p}.faqs.q4`),
      answer: t(`${p}.faqs.a4`)
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
