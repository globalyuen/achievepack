import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Lightbulb, Beaker, Rocket, Zap, Clock, CheckCircle, Calendar, 
  MessageCircle, Package, Target, Sparkles, Repeat, Factory, 
  BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const ProductDeveloperPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.productDeveloper'
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.sections.hero-problem.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
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
      id: 'rapid-prototyping',
      title: t(`${p}.sections.rapid-prototyping.title`),
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.rapid-prototyping.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-2">{t(`${p}.sections.rapid-prototyping.stat1Val`)}</div>
              <div className="text-sm text-purple-600 font-medium">{t(`${p}.sections.rapid-prototyping.stat1Label`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.rapid-prototyping.stat1Desc`)}</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">{t(`${p}.sections.rapid-prototyping.stat2Val`)}</div>
              <div className="text-sm text-blue-600 font-medium">{t(`${p}.sections.rapid-prototyping.stat2Label`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.rapid-prototyping.stat2Desc`)}</p>
            </div>
            <div className="bg-pink-50 p-5 rounded-lg border border-pink-200 text-center">
              <div className="text-3xl font-bold text-pink-700 mb-2">{t(`${p}.sections.rapid-prototyping.stat3Val`)}</div>
              <div className="text-sm text-pink-600 font-medium">{t(`${p}.sections.rapid-prototyping.stat3Label`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.rapid-prototyping.stat3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cutting-edge',
      title: t(`${p}.sections.cutting-edge.title`),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.cutting-edge.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.cutting-edge.card1Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                {(t(`${p}.sections.cutting-edge.card1Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-purple-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.cutting-edge.card2Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                {(t(`${p}.sections.cutting-edge.card2Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-amber-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/surface/metalic.webp" 
                alt="Metallic finish innovative packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.cutting-edge.img1Caption`)}
              />
              <ClickableImage 
                src="/imgs/store/surface/stamp-foil.webp" 
                alt="Stamp foil premium finish" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.cutting-edge.img2Caption`)}
              />
              <ClickableImage 
                src="/imgs/store/closure/slider-zipper.webp" 
                alt="Slider zipper innovation" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.cutting-edge.img3Caption`)}
              />
              <ClickableImage 
                src="/imgs/4-infograhic/compost.webp" 
                alt="Compostable innovation" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.cutting-edge.img4Caption`)}
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
          <p>
            {t(`${p}.sections.iteration.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-5 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3">{t(`${p}.sections.iteration.cardTitle`)}</h4>
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
              {t(`${p}.sections.iteration.footerText`)}
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
          <p>
            {t(`${p}.sections.collaboration.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.collaboration.col1Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                {(t(`${p}.sections.collaboration.col1Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.collaboration.col2Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                {(t(`${p}.sections.collaboration.col2Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
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
            {t(`${p}.sections.cta.desc`)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.btn1`)}
            </button>
            <Link
              to="/materials"
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
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">
            {t(`${p}.sections.industry-scenarios.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Beaker className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">{t(`${p}.sections.industry-scenarios.card1Title`)}</h4>
              </div>
              <p className="text-sm text-purple-700">{t(`${p}.sections.industry-scenarios.card1Desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{t(`${p}.sections.industry-scenarios.card2Title`)}</h4>
              </div>
              <p className="text-sm text-blue-700">{t(`${p}.sections.industry-scenarios.card2Desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">{t(`${p}.sections.industry-scenarios.card3Title`)}</h4>
              </div>
              <p className="text-sm text-amber-700">{t(`${p}.sections.industry-scenarios.card3Desc`)}</p>
            </div>
          </div>

          <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-600" />
              {t(`${p}.sections.industry-scenarios.storyTitle`)}
            </h4>
            <p className="text-sm text-neutral-600 mb-3">
              {t(`${p}.sections.industry-scenarios.storyDesc`)}
            </p>
            <div className="flex gap-4 text-xs">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">{t(`${p}.sections.industry-scenarios.badge1`)}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{t(`${p}.sections.industry-scenarios.badge2`)}</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: t(`${p}.sections.market-data.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">
            {t(`${p}.sections.market-data.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">{t(`${p}.sections.market-data.stat1Val`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.market-data.stat1Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">{t(`${p}.sections.market-data.stat2Val`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.market-data.stat2Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{t(`${p}.sections.market-data.stat3Val`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.market-data.stat3Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{t(`${p}.sections.market-data.stat4Val`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.market-data.stat4Label`)}</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              {t(`${p}.sections.market-data.trendTitle`)}
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-purple-700 mb-2">{t(`${p}.sections.market-data.col1Title`)}</h5>
                <ul className="text-purple-600 space-y-1">
                  {(t(`${p}.sections.market-data.col1Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-700 mb-2">{t(`${p}.sections.market-data.col2Title`)}</h5>
                <ul className="text-purple-600 space-y-1">
                  {(t(`${p}.sections.market-data.col2Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: t(`${p}.sections.material-comparison.title`),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">
            {t(`${p}.sections.material-comparison.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  {(t(`${p}.sections.material-comparison.headers`, { returnObjects: true }) as string[]).map((h, idx) => (
                    <th key={idx} className={`p-3 text-left ${idx === 0 ? 'rounded-tl-lg' : idx === 5 ? 'rounded-tr-lg' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(t(`${p}.sections.material-comparison.rows`, { returnObjects: true }) as string[][]).map((row, rowIdx) => (
                  <tr key={rowIdx} className={`border-b border-neutral-200 hover:bg-neutral-50 ${rowIdx % 2 === 1 ? 'bg-neutral-50 hover:bg-neutral-100' : ''}`}>
                    <td className="p-3 font-medium">{row[0]}</td>
                    <td className="p-3">
                      <span className="text-purple-600">{row[1]}</span>
                    </td>
                    <td className="p-3">
                      <span className="text-green-600">{row[2]}</span>
                    </td>
                    <td className="p-3">
                      <span className={row[3].includes('✓') ? 'text-green-600' : 'text-yellow-600'}>{row[3]}</span>
                    </td>
                    <td className="p-3">{row[4]}</td>
                    <td className="p-3">{row[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.sections.material-comparison.adviceTitle`)}
            </h4>
            <p className="text-sm text-purple-700">
              {t(`${p}.sections.material-comparison.adviceDesc`, {
                interpolation: { escapeValue: false }
              })}
            </p>
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
        <link rel="canonical" href="https://achievepack.com/solutions/product-developer" />
        <meta name="keywords" content="innovation packaging, rapid prototyping, product development packaging, low MOQ testing, flexible packaging design, cutting-edge materials" />
      </Helmet>

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
