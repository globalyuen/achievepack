import React from 'react'
import { Package, CheckCircle, Shield, Thermometer, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const VacuumPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.vacuumPouches'
  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.overview.text`)}
          </p>
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.benefitsTitle`)}</h4>
            <ul className="space-y-1 text-sm">
              {(t(`${p}.sections.overview.benefits`, { returnObjects: true }) as string[]).map((benefit, idx) => (
                <li key={idx}>✓ {benefit}</li>
              ))}
            </ul>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">{t(`${p}.sections.applications.meat.title`)}</h4>
              <ul className="text-sm space-y-1 text-red-700">
                {(t(`${p}.sections.applications.meat.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.applications.seafood.title`)}</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                {(t(`${p}.sections.applications.seafood.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">{t(`${p}.sections.applications.cheese.title`)}</h4>
              <ul className="text-sm space-y-1 text-yellow-700">
                {(t(`${p}.sections.applications.cheese.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.applications.meals.title`)}</h4>
              <ul className="text-sm space-y-1 text-green-700">
                {(t(`${p}.sections.applications.meals.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.applications.coffee.title`)}</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                {(t(`${p}.sections.applications.coffee.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.applications.nonfood.title`)}</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                {(t(`${p}.sections.applications.nonfood.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'types',
      title: t(`${p}.sections.types.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.types.chamber.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.types.chamber.desc`)}</p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.types.external.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.types.external.desc`)}</p>
            </div>
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.types.retort.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.types.retort.desc`)}</p>
            </div>
            <div className="border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">{t(`${p}.sections.types.sousvide.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.types.sousvide.desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.sections.specifications.title`),
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              {(t(`${p}.sections.specifications.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                <li key={idx}>✓ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: t('seoPages.common.industryApplicationsTitle', { defaultValue: 'Industry Applications' }),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-red-50 to-rose-50 p-5 rounded-xl border border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.meat.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.meat.desc`)}</p>
              <div className="text-xs text-red-700 bg-red-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.meat.badge`)}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.seafood.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.seafood.desc`)}</p>
              <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.seafood.badge`)}</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.industryScenarios.dairy.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.industryScenarios.dairy.desc`)}</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">{t(`${p}.sections.industryScenarios.dairy.badge`)}</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.industryScenarios.storyTitle`)}</h4>
            <p className="text-sm text-neutral-600">{t(`${p}.sections.industryScenarios.storyText`)}</p>
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
            {(t(`${p}.sections.marketData.metrics`, { returnObjects: true }) as any[]).map((metric, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
                <div className="text-3xl font-bold">{metric.val}</div>
                <div className="text-sm opacity-90">{metric.label}</div>
                <div className="text-xs opacity-75 mt-1">{metric.desc}</div>
              </div>
            ))}
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
                  <th className="border border-neutral-200 px-4 py-2 text-left">Material Type</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">Barrier</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">Heat Resistant</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">Eco-Friendly</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">Recommended Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">PA/PE Nylon</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">Hard to recycle</td>
                  <td className="border border-neutral-200 px-4 py-2">Fresh meat, Seafood</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">PA/PE Cookable</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">Hard to recycle</td>
                  <td className="border border-neutral-200 px-4 py-2">Sous Vide Cooking</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">Sterilization Retort Bags</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">Hard to recycle</td>
                  <td className="border border-neutral-200 px-4 py-2">Ready-to-Eat Food</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">Mono PE Recyclable</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">♥️ Recyclable</td>
                  <td className="border border-neutral-200 px-4 py-2">Eco-friendly product</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  const faqs = (t(`${p}.faqs`, { returnObjects: true }) as any[]) || []
  const tables = ((t(`${p}.tables`, { returnObjects: true }) as any[]) || []).map((t) => ({
    title: t.title,
    data: {
      headers: t.headers,
      rows: t.rows
    }
  }))

  const relatedLinks = [
    { title: "Frozen Food Packaging", url: "/industry/frozen-food", description: "Solutions for frozen products" },
    { title: "Pet Food Packaging", url: "/industry/pet-food", description: "Fresh pet food solutions" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Sustainable vacuum options" }
  ]

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title="Vacuum Pouches | Vacuum Seal Bags | Sous Vide Bags"
      description="High-barrier vacuum pouches for meat, seafood, cheese, and coffee. Chamber and external types. Sous vide compatible, retort available. MOQ 500 units."
      keywords={[
        'vacuum pouch',
        'vacuum seal bag',
        'sous vide bag',
        'vacuum packaging',
        'food saver bags',
        'chamber vacuum pouch',
        'meat vacuum bag',
        'coffee vacuum pack'
      ]}
      canonicalUrl="https://achievepack.com/packaging/vacuum-pouches"
      heroTitle={t('seoPages.pages.vacuumPouches.heroTitle')}
      heroSubtitle={t('seoPages.pages.vacuumPouches.heroSubtitle')}
      heroImage="/imgs/pouch-shape/a_three_side_seal_pouch_isolated_0879222.webp"
      heroImageAlt="Vacuum seal packaging pouches"
      introSummary={t('seoPages.pages.vacuumPouches.introSummary')}
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

export default VacuumPouchesPage
