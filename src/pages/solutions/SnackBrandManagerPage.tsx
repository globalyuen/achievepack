import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Cookie, Leaf, Package, BarChart3, Calendar, 
  MessageCircle, Award, Target, Shield, FileCheck, Layers, Factory, 
  ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles 
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const SnackBrandManagerPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.snackBrandManager'
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.sections.hero-problem.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-lg border border-lime-200">
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
      id: 'multi-product',
      title: t(`${p}.sections.multi-product.title`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.multi-product.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <Cookie className="h-8 w-8 text-amber-600 mb-3" />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.multi-product.card1Title`)}</h4>
              <p className="text-xs text-neutral-600 mt-2">{t(`${p}.sections.multi-product.card1Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <Package className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.multi-product.card2Title`)}</h4>
              <p className="text-xs text-neutral-600 mt-2">{t(`${p}.sections.multi-product.card2Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.multi-product.card3Title`)}</h4>
              <p className="text-xs text-neutral-600 mt-2">{t(`${p}.sections.multi-product.card3Desc`)}</p>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp" 
                alt="Sustainable snack packaging solutions" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.multi-product.img1Caption`)}
              />
              <ClickableImage 
                src="/imgs/seo-photos/usa/snack/a_snacks_brand_sustainability_guide_7868632.webp" 
                alt="Snack brand sustainability packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.multi-product.img2Caption`)}
              />
              <ClickableImage 
                src="/imgs/seo-photos/usa/snack/a_snacks_pouch_format_comparison_8281669.webp" 
                alt="Snack pouch format options" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.multi-product.img3Caption`)}
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp" 
                alt="Stand-up snack pouch" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.multi-product.img4Caption`)}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability-claims',
      title: t(`${p}.sections.sustainability-claims.title`),
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.sustainability-claims.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">{t(`${p}.sections.sustainability-claims.cardTitle`)}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-green-700 mb-2">{t(`${p}.sections.sustainability-claims.col1Title`)}</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  {(t(`${p}.sections.sustainability-claims.col1Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700 mb-2">{t(`${p}.sections.sustainability-claims.col2Title`)}</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  {(t(`${p}.sections.sustainability-claims.col2Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cost-performance',
      title: t(`${p}.sections.cost-performance.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.cost-performance.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mt-4">
              <thead>
                <tr className="bg-green-600 text-white">
                  {(t(`${p}.sections.cost-performance.headers`, { returnObjects: true }) as string[]).map((h, idx) => (
                    <th key={idx} className="p-3 text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(t(`${p}.sections.cost-performance.rows`, { returnObjects: true }) as string[][]).map((row, rowIdx) => (
                  <tr key={rowIdx} className={`border-b border-neutral-200 ${rowIdx % 2 === 1 ? 'bg-neutral-50' : ''}`}>
                    <td className="p-3 font-medium">{row[0]}</td>
                    <td className="p-3">
                      <span className="text-green-600">{row[1]}</span>
                    </td>
                    <td className="p-3">{row[2]}</td>
                    <td className="p-3">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'retail-ready',
      title: t(`${p}.sections.retail-ready.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.retail-ready.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.retail-ready.col1Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                {(t(`${p}.sections.retail-ready.col1Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.retail-ready.col2Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                {(t(`${p}.sections.retail-ready.col2Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.retail-ready.col3Title`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                {(t(`${p}.sections.retail-ready.col3Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'supplier-partnership',
      title: t(`${p}.sections.supplier-partnership.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.supplier-partnership.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.supplier-partnership.cardTitle`)}</h4>
            <div className="flex flex-wrap gap-2">
              {(t(`${p}.sections.supplier-partnership.badges`, { returnObjects: true }) as string[]).map((badge, idx) => (
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
        <div className="bg-gradient-to-r from-green-600 to-lime-600 p-8 rounded-xl text-white text-center">
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
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">
            {t(`${p}.sections.industry-scenarios.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-lime-50 to-green-50 p-5 rounded-xl border border-lime-200">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="h-5 w-5 text-lime-600" />
                <h4 className="font-semibold text-lime-800">{t(`${p}.sections.industry-scenarios.card1Title`)}</h4>
              </div>
              <p className="text-sm text-lime-700">{t(`${p}.sections.industry-scenarios.card1Desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Cookie className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">{t(`${p}.sections.industry-scenarios.card2Title`)}</h4>
              </div>
              <p className="text-sm text-amber-700">{t(`${p}.sections.industry-scenarios.card2Desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{t(`${p}.sections.industry-scenarios.card3Title`)}</h4>
              </div>
              <p className="text-sm text-blue-700">{t(`${p}.sections.industry-scenarios.card3Desc`)}</p>
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
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">{t(`${p}.sections.industry-scenarios.badge1`)}</span>
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
              <div className="text-3xl font-bold text-green-600 mb-1">{t(`${p}.sections.market-data.stat2Val`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.market-data.stat2Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">{t(`${p}.sections.market-data.stat3Val`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.market-data.stat3Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{t(`${p}.sections.market-data.stat4Val`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.market-data.stat4Label`)}</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-lime-50 to-green-50 p-5 rounded-xl border border-lime-200">
            <h4 className="font-semibold text-lime-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              {t(`${p}.sections.market-data.trendTitle`)}
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-lime-700 mb-2">{t(`${p}.sections.market-data.col1Title`)}</h5>
                <ul className="text-lime-600 space-y-1">
                  {(t(`${p}.sections.market-data.col1Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-lime-700 mb-2">{t(`${p}.sections.market-data.col2Title`)}</h5>
                <ul className="text-lime-600 space-y-1">
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
                      <span className="text-green-600">{row[1]}</span>
                    </td>
                    <td className="p-3">{row[2]}</td>
                    <td className="p-3">{row[3]}</td>
                    <td className="p-3">{row[4]}</td>
                    <td className="p-3">{row[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-lime-50 p-5 rounded-xl border border-lime-200">
            <h4 className="font-semibold text-lime-800 mb-2 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.sections.material-comparison.adviceTitle`)}
            </h4>
            <p className="text-sm text-lime-700">
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
        heroImageAlt="Sustainable snack packaging solutions"
      />
    </>
  )
}

export default SnackBrandManagerPage
