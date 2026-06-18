import React from 'react'
import { Package, CheckCircle, Scissors, FileText, Target, Shield, Calendar, Mail, Download, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const FlatPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.flatPouches'

  const sections = [
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.scenarioTrigger.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            {t(`${p}.sections.scenarioTrigger.text`)}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.sampleProducers.title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.sampleProducers.desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.foodService.title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.foodService.desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.teaSpice.title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.teaSpice.desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.text`)}</strong>
          </p>
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.advantagesTitle`)}</h4>
            <ul className="space-y-1 text-sm">
              {((t(`${p}.sections.overview.advantages`, { returnObjects: true }) as string[]) || []).map((adv, idx) => (
                <li key={idx}>✓ {adv}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'types',
      title: t(`${p}.sections.types.title`),
      icon: <FileText className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-primary-200 rounded-lg p-4">
              <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.types.seal3.title`)}</h4>
              <p className="text-sm mb-2">{t(`${p}.sections.types.seal3.desc`)}</p>
              <ul className="text-sm space-y-1">
                {((t(`${p}.sections.types.seal3.items`, { returnObjects: true }) as string[]) || []).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.types.seal4.title`)}</h4>
              <p className="text-sm mb-2">{t(`${p}.sections.types.seal4.desc`)}</p>
              <ul className="text-sm space-y-1">
                {((t(`${p}.sections.types.seal4.items`, { returnObjects: true }) as string[]) || []).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.sections.applications.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {((t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]) || []).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t(`${p}.sections.features.title`),
      icon: <Scissors className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t(`${p}.sections.features.opening.title`)}</h4>
              <ul className="text-sm space-y-1">
                {((t(`${p}.sections.features.opening.items`, { returnObjects: true }) as string[]) || []).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t(`${p}.sections.features.additional.title`)}</h4>
              <ul className="text-sm space-y-1">
                {((t(`${p}.sections.features.additional.items`, { returnObjects: true }) as string[]) || []).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Flat Pouch Examples Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.features.galleryTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/pouch shape/3-side.webp" 
                alt="Three side seal flat pouch sachet" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.gallery.0`)}
              />
              <ClickableImage 
                src="/imgs/store/barrier/2-clear.webp" 
                alt="Clear flat pouch for product visibility" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.gallery.1`)}
              />
              <ClickableImage 
                src="/imgs/store/barrier/2-paper.webp" 
                alt="Kraft paper flat sachet eco-friendly" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.gallery.2`)}
              />
              <ClickableImage 
                src="/imgs/store/eco-material/compostable.webp" 
                alt="Compostable flat pouch sachet" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.features.gallery.3`)}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: t(`${p}.sections.riskHedge.title`),
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"{t(`${p}.sections.riskHedge.items.0.q`)}"</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.items.0.a`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"{t(`${p}.sections.riskHedge.items.1.q`)}"</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.items.1.a`)}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"{t(`${p}.sections.riskHedge.items.2.q`)}"</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.items.2.a`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"{t(`${p}.sections.riskHedge.items.3.q`)}"</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.items.3.a`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: t(`${p}.sections.decisionCta.title`),
      icon: <Package className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t(`${p}.sections.decisionCta.title`)}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.call.title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.call.desc`)}</p>
              <button onClick={openCalendly} className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
                {t(`${p}.sections.decisionCta.call.btn`)}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.email.title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.email.desc`)}</p>
              <a href="mailto:ryan@achievepack.com?subject=Flat Pouches Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                {t(`${p}.sections.decisionCta.email.btn`)}
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.samples.title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.samples.desc`)}</p>
              <Link to="/contact" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                {t(`${p}.sections.decisionCta.samples.btn`)}
              </Link>
            </div>
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
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.food.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.food.desc`)}</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.food.badge`)}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.cosmetics.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.cosmetics.desc`)}</p>
              <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.cosmetics.badge`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.pharma.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.pharma.desc`)}</p>
              <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.pharma.badge`)}</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.industryScenarios.storyTitle`)}</h4>
            <p className="text-sm text-neutral-600">"{t(`${p}.sections.industryScenarios.storyText`)}"</p>
            <p className="text-xs text-neutral-500 mt-2">{t(`${p}.sections.industryScenarios.storyAuthor`)}</p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {((t(`${p}.sections.marketData.metrics`, { returnObjects: true }) as { val: string, label: string, desc: string }[]) || []).map((m, idx) => {
              const colors = [
                'from-primary-500 to-primary-600',
                'from-green-500 to-green-600',
                'from-amber-500 to-amber-600',
                'from-purple-500 to-purple-600'
              ]
              return (
                <div key={idx} className={`bg-gradient-to-br ${colors[idx % colors.length]} text-white p-4 rounded-xl text-center`}>
                  <div className="text-3xl font-bold">{m.val}</div>
                  <div className="text-sm opacity-90">{m.label}</div>
                  <div className="text-xs opacity-75 mt-1">{m.desc}</div>
                </div>
              )
            })}
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.marketData.trendTitle`)}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {((t(`${p}.sections.marketData.trends`, { returnObjects: true }) as string[]) || []).map((trend, idx) => {
                const delimiter = trend.includes('：') ? '：' : ':';
                const parts = trend.split(delimiter);
                const title = parts[0];
                const desc = parts.slice(1).join(delimiter);
                return (
                  <div key={idx} className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                    <span><strong>{title}</strong>{desc ? `${delimiter}${desc}` : ''}</span>
                  </div>
                )
              })}
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
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-200 px-4 py-2 text-left">{t(`${p}.sections.materialComparison.tableHeaders.0`, 'Material Type')}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.tableHeaders.1`, 'Barrier')}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.tableHeaders.2`, 'Cost')}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">{t(`${p}.sections.materialComparison.tableHeaders.3`, 'Eco-Friendly')}</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">{t(`${p}.sections.materialComparison.tableHeaders.4`, 'Recommended Use')}</th>
                </tr>
              </thead>
              <tbody>
                {((t(`${p}.sections.materialComparison.tableRows`, { returnObjects: true }) as string[][]) || [
                  ["PET/PE Clear", "⭐⭐模", "💰", "Recyclable", "Sugar packets, dry foods"],
                  ["Aluminum Foil Laminate", "⭐⭐⭐⭐⭐", "💰💰", "Hard to recycle", "Sauces, pharmaceuticals"],
                  ["Kraft Paper Laminate", "⭐⭐⭐", "💰💰", "Natural look", "Tea bags, spices"],
                  ["PLA Compostable", "⭐⭐", "💰💰💰", "🌱 Compostable", "Organic foods, samples"]
                ]).map((row, rIdx) => {
                  const bgClass = rIdx % 2 === 1 ? 'bg-neutral-50' : '';
                  const isGreen = row[3]?.includes('Compostable') || row[3]?.includes('可降解') || row[3]?.includes('biodégradable') || row[3]?.includes('Biodegradable');
                  return (
                    <tr key={rIdx} className={isGreen ? 'bg-green-50' : bgClass}>
                      <td className="border border-neutral-200 px-4 py-2 font-medium">{row[0]}</td>
                      <td className="border border-neutral-200 px-4 py-2 text-center">{row[1]}</td>
                      <td className="border border-neutral-200 px-4 py-2 text-center">{row[2]}</td>
                      <td className="border border-neutral-200 px-4 py-2 text-center">{row[3]}</td>
                      <td className="border border-neutral-200 px-4 py-2">{row[4]}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.materialComparison.guideTitle`)}</h4>
            <p className="text-sm text-primary-700">{t(`${p}.sections.materialComparison.guideText`)}</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = ((t(`${p}.faqs`, { returnObjects: true }) as { question: string, answer: string }[]) || []).map(item => ({
    question: item.question,
    answer: item.answer
  }))

  const tables = ((t(`${p}.tables`, { returnObjects: true }) as { title: string, headers: string[], rows: string[][] }[]) || []).map(item => ({
    title: item.title,
    data: {
      headers: item.headers,
      rows: item.rows
    }
  }))

  const relatedLinks = [
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Self-standing alternative" },
    { title: "Compostable Materials", url: "/materials/compostable", description: "Eco-friendly sachet options" },
    { title: "Coffee & Tea", url: "/industry/coffee-tea", description: "Tea sachet solutions" }
  ]

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={[
        '3 side seal pouch',
        'flat pouch',
        'sachet packaging',
        'sample pouches',
        'single serve packets',
        'sachet bags',
        'flat bag packaging',
        '4 side seal pouch'
      ]}
      canonicalUrl="https://achievepack.com/packaging/flat-pouches"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/pouch-shape/a_three_side_seal_pouch_isolated_0879222.webp"
      heroImageAlt="3-side seal flat pouch sachet packaging"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
    />
  )
}

export default FlatPouchesPage
