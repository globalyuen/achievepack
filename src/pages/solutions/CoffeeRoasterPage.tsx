import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Coffee, Wind, Shield, Clock, CheckCircle, Calendar, MessageCircle, 
  Award, Target, Package, Sparkles, Store, Factory, BarChart3, 
  ArrowLeftRight, TrendingUp, ShoppingBag 
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CoffeeRoasterPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.coffeeRoaster'
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.sections.hero-problem.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
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
      id: 'degassing',
      title: t(`${p}.sections.degassing.title`),
      icon: <Wind className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.degassing.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 text-center">
              <Wind className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <h4 className="font-semibold text-amber-800">{t(`${p}.sections.degassing.card1Title`)}</h4>
              <p className="text-xs text-amber-700 mt-2">{t(`${p}.sections.degassing.card1Desc`)}</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200 text-center">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.degassing.card2Title`)}</h4>
              <p className="text-xs text-green-700 mt-2">{t(`${p}.sections.degassing.card2Desc`)}</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 text-center">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.sections.degassing.card3Title`)}</h4>
              <p className="text-xs text-blue-700 mt-2">{t(`${p}.sections.degassing.card3Desc`)}</p>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.degassing.galleryTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp" 
                alt="Specialty coffee packaging with valve" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.degassing.img1Caption`)}
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_flat_bottom_pouch_isolated_7901973.webp" 
                alt="Flat bottom coffee bag" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.degassing.img2Caption`)}
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_side_gusset_pouch_isolated_2545871.webp" 
                alt="Side gusset coffee bag" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.degassing.img3Caption`)}
              />
              <ClickableImage 
                src="/imgs/store/closure/tin-tie.webp" 
                alt="Tin tie closure for coffee" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.degassing.img4Caption`)}
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
            {t(`${p}.sections.sustainable.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Link to="/materials/compostable" className="block bg-green-50 p-5 rounded-lg border border-green-200 hover:shadow-md transition">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.sustainable.card1Title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.sustainable.card1Desc`)}</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">{t(`${p}.sections.sustainable.card1Link`)}</span>
            </Link>
            <Link to="/materials/recyclable-mono-pe" className="block bg-blue-50 p-5 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.sustainable.card2Title`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.sections.sustainable.card2Desc`)}</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">{t(`${p}.sections.sustainable.card2Link`)}</span>
            </Link>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.sustainable.noteTitle`)}</h4>
            <p className="text-sm text-amber-700">{t(`${p}.sections.sustainable.noteDesc`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'retail-presence',
      title: t(`${p}.sections.retail-presence.title`),
      icon: <Store className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.retail-presence.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.retail-presence.col1Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                {(t(`${p}.sections.retail-presence.col1Items`, { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.retail-presence.col2Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                {(t(`${p}.sections.retail-presence.col2Items`, { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.retail-presence.col3Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                {(t(`${p}.sections.retail-presence.col3Items`, { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'consistent-supply',
      title: t(`${p}.sections.consistent-supply.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.consistent-supply.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-neutral-700">{t(`${p}.sections.consistent-supply.stat1Val`)}</div>
                <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.consistent-supply.stat1Label`)}</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-700">{t(`${p}.sections.consistent-supply.stat2Val`)}</div>
                <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.consistent-supply.stat2Label`)}</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-700">{t(`${p}.sections.consistent-supply.stat3Val`)}</div>
                <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.consistent-supply.stat3Label`)}</p>
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
          <h3 className="text-2xl font-bold mb-4">{t(`${p}.sections.cta.title`)}</h3>
          <p className="text-lg mb-6 opacity-90">
            {t(`${p}.sections.cta.desc`)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.btn1`)}
            </button>
            <Link
              to="/products/coffee-bags-degassing-valve"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Package className="h-5 w-5" />
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
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">{t(`${p}.sections.industry-scenarios.card1Title`)}</h4>
              </div>
              <p className="text-sm text-amber-700 mb-3">{t(`${p}.sections.industry-scenarios.card1Desc`)}</p>
              <div className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industry-scenarios.card1Share`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.industry-scenarios.card2Title`)}</h4>
              </div>
              <p className="text-sm text-green-700 mb-3">{t(`${p}.sections.industry-scenarios.card2Desc`)}</p>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industry-scenarios.card2Share`)}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Store className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{t(`${p}.sections.industry-scenarios.card3Title`)}</h4>
              </div>
              <p className="text-sm text-blue-700 mb-3">{t(`${p}.sections.industry-scenarios.card3Desc`)}</p>
              <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industry-scenarios.card3Share`)}</div>
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
              <div className="text-3xl font-bold text-amber-600 mb-1">{t(`${p}.sections.market-data.stat2Val`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.market-data.stat2Label`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.market-data.stat2Trend`)}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{t(`${p}.sections.market-data.stat3Val`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.market-data.stat3Label`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.market-data.stat3Trend`)}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{t(`${p}.sections.market-data.stat4Val`)}</div>
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
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {row[0]}
                      </span>
                    </td>
                    <td className="p-3 border">{row[1]}</td>
                    <td className="p-3 border">{row[2]}</td>
                    <td className="p-3 border">{row[3]}</td>
                    <td className={`p-3 border font-medium ${
                      rowIdx === 0 ? 'text-green-600' :
                      rowIdx === 1 ? 'text-blue-600' :
                      'text-amber-600'
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
        <link rel="canonical" href="https://achievepack.com/solutions/coffee-roaster" />
        <meta name="keywords" content="coffee roaster packaging, degassing valve bags, sustainable coffee bags, compostable coffee packaging, specialty coffee packaging, coffee bag supplier" />
      </Helmet>

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
