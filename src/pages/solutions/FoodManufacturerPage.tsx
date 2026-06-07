import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  FileCheck, Globe, Shield, AlertTriangle, CheckCircle, Calendar, 
  MessageCircle, Award, Target, Scale, BookOpen, Factory, 
  BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const FoodManufacturerPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.foodManufacturer'
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.sections.hero-problem.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
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
      id: 'compliance',
      title: t(`${p}.sections.compliance.title`),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.compliance.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🇺🇸</span>
              <h4 className="font-semibold text-neutral-800 mt-2">{t(`${p}.sections.compliance.usTitle`)}</h4>
              <ul className="text-xs text-neutral-600 mt-2 text-left">
                {(t(`${p}.sections.compliance.usItems`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🇪🇺</span>
              <h4 className="font-semibold text-neutral-800 mt-2">{t(`${p}.sections.compliance.euTitle`)}</h4>
              <ul className="text-xs text-neutral-600 mt-2 text-left">
                {(t(`${p}.sections.compliance.euItems`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🇬🇧</span>
              <h4 className="font-semibold text-neutral-800 mt-2">{t(`${p}.sections.compliance.ukTitle`)}</h4>
              <ul className="text-xs text-neutral-600 mt-2 text-left">
                {(t(`${p}.sections.compliance.ukItems`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🇦🇺</span>
              <h4 className="font-semibold text-neutral-800 mt-2">{t(`${p}.sections.compliance.auTitle`)}</h4>
              <ul className="text-xs text-neutral-600 mt-2 text-left">
                {(t(`${p}.sections.compliance.auItems`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'food-safety',
      title: t(`${p}.sections.food-safety.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.food-safety.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <Award className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.food-safety.card1Title`)}</h4>
              <p className="text-sm text-green-700 mt-2">{t(`${p}.sections.food-safety.card1Desc`)}</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <Award className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.sections.food-safety.card2Title`)}</h4>
              <p className="text-sm text-blue-700 mt-2">{t(`${p}.sections.food-safety.card2Desc`)}</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <Award className="h-8 w-8 text-purple-600 mb-3" />
              <h4 className="font-semibold text-purple-800">{t(`${p}.sections.food-safety.card3Title`)}</h4>
              <p className="text-sm text-purple-700 mt-2">{t(`${p}.sections.food-safety.card3Desc`)}</p>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/barrier/3-foil.webp" 
                alt="High barrier food packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.food-safety.img1Caption`)}
              />
              <ClickableImage 
                src="/imgs/store/barrier/3-clear.webp" 
                alt="Medium barrier food packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.food-safety.img2Caption`)}
              />
              <ClickableImage 
                src="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp" 
                alt="Coffee packaging FDA compliant" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.food-safety.img3Caption`)}
              />
              <ClickableImage 
                src="/imgs/seo-photos/usa/snack/a_healthy_protein_bars_achieve_pack_8282018.webp" 
                alt="Snack packaging food safe" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.food-safety.img4Caption`)}
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
          <p>
            {t(`${p}.sections.documentation.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.documentation.colTitle`)}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm text-neutral-600 space-y-2">
                {(t(`${p}.sections.documentation.itemsCol1`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="text-sm text-neutral-600 space-y-2">
                {(t(`${p}.sections.documentation.itemsCol2`, { returnObjects: true }) as string[]).map((item, idx) => (
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
      id: 'future-proof',
      title: t(`${p}.sections.future-proof.title`),
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.future-proof.intro`, {
              interpolation: { escapeValue: false }
            })}
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.future-proof.cardTitle`)}</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              {(t(`${p}.sections.future-proof.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
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
            {t(`${p}.sections.cta.desc`)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.btn1`)}
            </button>
            <Link
              to="/materials"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Scale className="h-5 w-5" />
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{t(`${p}.sections.industry-scenarios.card1Title`)}</h4>
              </div>
              <p className="text-sm text-blue-700">{t(`${p}.sections.industry-scenarios.card1Desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.industry-scenarios.card2Title`)}</h4>
              </div>
              <p className="text-sm text-green-700">{t(`${p}.sections.industry-scenarios.card2Desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-5 w-5 text-amber-600" />
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
              <div className="text-3xl font-bold text-blue-600 mb-1">{t(`${p}.sections.market-data.stat3Val`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.market-data.stat3Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">{t(`${p}.sections.market-data.stat4Val`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.market-data.stat4Label`)}</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-5 rounded-xl border border-primary-200">
            <h4 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              {t(`${p}.sections.market-data.trendTitle`)}
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-primary-700 mb-2">{t(`${p}.sections.market-data.col1Title`)}</h5>
                <ul className="text-primary-600 space-y-1">
                  {(t(`${p}.sections.market-data.col1Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-primary-700 mb-2">{t(`${p}.sections.market-data.col2Title`)}</h5>
                <ul className="text-primary-600 space-y-1">
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
                      <span className={row[1].includes('✓') ? 'text-green-600' : 'text-neutral-500'}>{row[1]}</span>
                    </td>
                    <td className="p-3">
                      <span className={row[2].includes('✓') ? 'text-green-600' : 'text-neutral-500'}>{row[2]}</span>
                    </td>
                    <td className="p-3">
                      <span className={row[3].includes('✓') ? 'text-green-600' : row[3].includes('~') ? 'text-yellow-600' : 'text-neutral-500'}>{row[3]}</span>
                    </td>
                    <td className="p-3">{row[4]}</td>
                    <td className="p-3">{row[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.sections.material-comparison.adviceTitle`)}
            </h4>
            <p className="text-sm text-blue-700">
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
