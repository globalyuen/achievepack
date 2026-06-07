import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Heart, Leaf, Package, Sun, CheckCircle, Calendar, MessageCircle, Award, Target, Store, Sparkles, Palette, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const ArtisanProducerPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.artisanProducer'

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.sections.hero-problem.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-rose-50 to-orange-50 p-6 rounded-lg border border-rose-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.sections.hero-problem.intro1`)}<strong>{t(`${p}.sections.hero-problem.introStrong`)}</strong>{t(`${p}.sections.hero-problem.intro2`)}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">{t(`${p}.sections.hero-problem.challengesTitle`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  {(t(`${p}.sections.hero-problem.challenges`, { returnObjects: true }) as string[]).map((c, i) => (
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
      id: 'small-batch',
      title: t(`${p}.sections.small-batch.title`),
      icon: <Heart className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.small-batch.intro`)} <strong>{t(`${p}.sections.small-batch.introStrong`)}</strong>{t(`${p}.sections.small-batch.introEnd`)}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-rose-50 p-5 rounded-lg border border-rose-200 text-center">
              <div className="text-3xl font-bold text-rose-700 mb-2">{t(`${p}.sections.small-batch.pieceMinVal`)}</div>
              <div className="text-sm text-rose-600 font-medium">{t(`${p}.sections.small-batch.pieceMinTitle`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.small-batch.pieceMinDesc`)}</p>
            </div>
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 text-center">
              <div className="text-3xl font-bold text-amber-700 mb-2">{t(`${p}.sections.small-batch.flexVal`)}</div>
              <div className="text-sm text-amber-600 font-medium">{t(`${p}.sections.small-batch.flexTitle`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.small-batch.flexDesc`)}</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">{t(`${p}.sections.small-batch.plateVal`)}</div>
              <div className="text-sm text-green-600 font-medium">{t(`${p}.sections.small-batch.plateTitle`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.small-batch.plateDesc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'craft-aesthetic',
      title: t(`${p}.sections.craft-aesthetic.title`),
      icon: <Palette className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.craft-aesthetic.intro`)} <strong>{t(`${p}.sections.craft-aesthetic.introStrong`)}</strong> {t(`${p}.sections.craft-aesthetic.introEnd`)}
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.craft-aesthetic.craftTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                {(t(`${p}.sections.craft-aesthetic.craft`, { returnObjects: true }) as string[]).map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.craft-aesthetic.customTitle`)}</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                {(t(`${p}.sections.craft-aesthetic.custom`, { returnObjects: true }) as string[]).map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/seo-photos/a_artisan_chocolate_abu_dhabi_luxury_pouch_4218900.webp"
                alt="Artisan chocolate packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.craft-aesthetic.captionChocolate`)}
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_tea_craft_australia_garden_morning_8955209.webp"
                alt="Artisan tea packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.craft-aesthetic.captionTea`)}
              />
              <ClickableImage 
                src="/imgs/store/barrier/3-paper.webp"
                alt="Kraft paper finish" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.craft-aesthetic.captionPaper`)}
              />
              <ClickableImage 
                src="/imgs/store/closure/normal-zipper.webp"
                alt="Resealable zipper closure" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.craft-aesthetic.captionResealable`)}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'markets',
      title: t(`${p}.sections.markets.title`),
      icon: <Sun className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.markets.intro`)} <strong>{t(`${p}.sections.markets.introStrong`)}</strong>{t(`${p}.sections.markets.introEnd`)}
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">{t(`${p}.sections.markets.featuresTitle`)}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm text-amber-700 space-y-1">
                {(t(`${p}.sections.markets.featuresLeft`, { returnObjects: true }) as string[]).map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <ul className="text-sm text-amber-700 space-y-1">
                {(t(`${p}.sections.markets.featuresRight`, { returnObjects: true }) as string[]).map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainable',
      title: t(`${p}.sections.sustainable.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.sustainable.intro`)} <strong>{t(`${p}.sections.sustainable.introStrong`)}</strong>{t(`${p}.sections.sustainable.introEnd`)}
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/materials/compostable" className="block bg-green-50 p-4 rounded-lg border border-green-200 hover:shadow-md transition">
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.sustainable.compostableTitle`)}</h4>
              <p className="text-sm text-green-700 mt-1">{t(`${p}.sections.sustainable.compostableDesc`)}</p>
            </Link>
            <Link to="/materials/recyclable-mono-pe" className="block bg-blue-50 p-4 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800">{t(`${p}.sections.sustainable.recyclableTitle`)}</h4>
              <p className="text-sm text-blue-700 mt-1">{t(`${p}.sections.sustainable.recyclableDesc`)}</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-rose-600 to-orange-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t(`${p}.sections.cta.heading`)}</h3>
          <p className="text-lg mb-6 opacity-90">
            {t(`${p}.sections.cta.intro`)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.consultation`)}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Store className="h-5 w-5" />
              {t(`${p}.sections.cta.browse`)}
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
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-5 rounded-xl border border-rose-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-rose-600" />
                <h4 className="font-semibold text-rose-800">{t(`${p}.sections.industry-scenarios.card1.title`)}</h4>
              </div>
              <p className="text-sm text-rose-700 mb-3">{t(`${p}.sections.industry-scenarios.card1.desc`)}</p>
              <div className="text-xs text-rose-600 bg-rose-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industry-scenarios.card1.share`)}</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">{t(`${p}.sections.industry-scenarios.card2.title`)}</h4>
              </div>
              <p className="text-sm text-amber-700 mb-3">{t(`${p}.sections.industry-scenarios.card2.desc`)}</p>
              <div className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industry-scenarios.card2.share`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.industry-scenarios.card3.title`)}</h4>
              </div>
              <p className="text-sm text-green-700 mb-3">{t(`${p}.sections.industry-scenarios.card3.desc`)}</p>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industry-scenarios.card3.share`)}</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h5 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.industry-scenarios.story.title`)}</h5>
            <p className="text-sm text-neutral-600">{t(`${p}.sections.industry-scenarios.story.content`)}</p>
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
              <div className="text-3xl font-bold text-primary-600 mb-1">{t(`${p}.sections.market-data.card1.val`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.market-data.card1.title`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.market-data.card1.growth`)}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-rose-600 mb-1">{t(`${p}.sections.market-data.card2.val`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.market-data.card2.title`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.market-data.card2.growth`)}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">{t(`${p}.sections.market-data.card3.val`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.market-data.card3.title`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.market-data.card3.growth`)}</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{t(`${p}.sections.market-data.card4.val`)}</div>
              <div className="text-xs text-neutral-500">{t(`${p}.sections.market-data.card4.title`)}</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>{t(`${p}.sections.market-data.card4.growth`)}</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.market-data.insights.title`)}</h5>
            <p className="text-sm text-blue-700">{t(`${p}.sections.market-data.insights.content`)}</p>
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
                  {(t(`${p}.sections.material-comparison.table.headers`, { returnObjects: true }) as string[]).map((h, i) => (
                    <th key={i} className="text-left p-3 border font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(t(`${p}.sections.material-comparison.table.rows`, { returnObjects: true }) as string[][]).map((row, i) => {
                  const colors = ["green", "blue", "amber"];
                  const color = colors[i % colors.length];
                  const bgClass = `hover:bg-${color}-50`;
                  const tagClass = `px-2 py-1 bg-${color}-100 text-${color}-700 rounded text-xs font-medium`;
                  const costClass = `p-3 border text-${color}-600 font-medium`;
                  
                  return (
                    <tr key={i} className={bgClass}>
                      <td className="p-3 border"><span className={tagClass}>{row[0]}</span></td>
                      <td className="p-3 border">{row[1]}</td>
                      <td className="p-3 border">{row[2]}</td>
                      <td className="p-3 border">{row[3]}</td>
                      <td className="p-3 border text-neutral-600">{row[4]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h5 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.material-comparison.guide.title`)}</h5>
            <p className="text-sm text-amber-700">{t(`${p}.sections.material-comparison.guide.content`)}</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.helmet.title`)}</title>
        <meta name="description" content={t(`${p}.helmet.description`)} />
        <link rel="canonical" href="https://achievepack.com/solutions/artisan-producer" />
        <meta name="keywords" content={t(`${p}.helmet.keywords`)} />
      </Helmet>

      <SEOPageLayout heroBgColor="#1f2937"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={t(`${p}.keywords`, { returnObjects: true }) as string[]}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_artisan_chocolate_abu_dhabi_luxury_pouch_4218900.webp"
      />
    </>
  )
}

export default ArtisanProducerPage
