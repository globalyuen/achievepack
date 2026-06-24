import React from 'react'
import { Package, CheckCircle, Shield, Thermometer, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const VacuumPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.vacuumPouches'

  const rawBenefits = t(`${p}.sections.overview.benefits`, { returnObjects: true })
  const benefits = Array.isArray(rawBenefits) ? rawBenefits : [
    "Extended shelf life (3-5x longer than standard)",
    "Prevents oxidation and freezer burn",
    "Maintains product freshness and quality",
    "Reduces food waste",
    "Sous vide cooking compatible"
  ]

  const rawMeatItems = t(`${p}.sections.applications.meat.items`, { returnObjects: true })
  const meatItems = Array.isArray(rawMeatItems) ? rawMeatItems : [
    "Fresh cuts",
    "Cured meats",
    "Processed meats",
    "Deli products"
  ]

  const rawSeafoodItems = t(`${p}.sections.applications.seafood.items`, { returnObjects: true })
  const seafoodItems = Array.isArray(rawSeafoodItems) ? rawSeafoodItems : [
    "Fresh fish",
    "Smoked salmon",
    "Shellfish",
    "Frozen seafood"
  ]

  const rawCheeseItems = t(`${p}.sections.applications.cheese.items`, { returnObjects: true })
  const cheeseItems = Array.isArray(rawCheeseItems) ? rawCheeseItems : [
    "Block cheese",
    "Sliced cheese",
    "Specialty cheese",
    "Butter"
  ]

  const rawMealsItems = t(`${p}.sections.applications.meals.items`, { returnObjects: true })
  const mealsItems = Array.isArray(rawMealsItems) ? rawMealsItems : [
    "Sous vide meals",
    "Meal kits",
    "Pre-cooked proteins",
    "Marinated items"
  ]

  const rawCoffeeItems = t(`${p}.sections.applications.coffee.items`, { returnObjects: true })
  const coffeeItems = Array.isArray(rawCoffeeItems) ? rawCoffeeItems : [
    "Roasted beans",
    "Ground coffee",
    "Single origins",
    "Specialty blends"
  ]

  const rawNonfoodItems = t(`${p}.sections.applications.nonfood.items`, { returnObjects: true })
  const nonfoodItems = Array.isArray(rawNonfoodItems) ? rawNonfoodItems : [
    "Electronics",
    "Medical devices",
    "Pharmaceuticals",
    "Archival storage"
  ]

  const rawSpecItems = t(`${p}.sections.specifications.items`, { returnObjects: true })
  const specItems = Array.isArray(rawSpecItems) ? rawSpecItems : [
    "Material: PA/PE (Nylon/Polyethylene) multi-layer",
    "Thickness: 70-150 microns",
    "OTR: <1.0 cc/m²/24hr (oxygen transmission)",
    "MVTR: <2.0 g/m²/24hr (moisture transmission)",
    "Seal strength: >25 N/15mm",
    "Puncture resistance: High (for bone-in products)"
  ]

  const rawMetrics = t(`${p}.sections.marketData.metrics`, { returnObjects: true })
  const metrics: any[] = Array.isArray(rawMetrics) ? rawMetrics : [
    { val: "$5.8B", label: "global vacuum packaging", desc: "2024 value" },
    { val: "5.2%", label: "CAGR", desc: "2024-2030" },
    { val: "Meat & seafood", label: "largest sector", desc: "over 50% market share" },
    { val: "70%", label: "PA/PE co-extruded share", desc: "industry standard material" }
  ]

  const rawFaqs = t(`${p}.faqs`, { returnObjects: true })
  const faqs = Array.isArray(rawFaqs) ? rawFaqs : [
    {
      question: "What is the difference between smooth and embossed vacuum pouches?",
      answer: "Smooth vacuum pouches are used in chamber vacuum machines, where air pressure is equalized inside the chamber. Embossed/textured pouches have tiny channels that allow external suction sealers (like FoodSaver) to draw air out of the bag."
    },
    {
      question: "Can vacuum pouches be boiled or heated?",
      answer: "Yes, we manufacture food-grade PA/PE sous vide vacuum pouches designed to withstand boiling and immersion cooking up to 100°C. For autoclave sterilization (retort), we use special PA/PP structures rated up to 121°C."
    },
    {
      question: "What thickness vacuum pouches do I need?",
      answer: "70 to 90 microns is standard for soft foods, cheeses, and boneless meats. For bone-in meats, jerky, or hard items, we recommend 120 to 150 microns to prevent punctures."
    },
    {
      question: "What is your minimum order for custom printed vacuum bags?",
      answer: "Our MOQ for custom printed vacuum bags is 1,000 units. Plain, unprinted vacuum pouches are kept in stock and can be ordered from 500 units."
    }
  ]

  const rawTables = t(`${p}.tables`, { returnObjects: true })
  const tables = (Array.isArray(rawTables) ? rawTables : [
    {
      title: "Vacuum Pouch Size Matrix",
      headers: ["Size", "Dimensions (W x H)", "Thickness", "Common Use"],
      rows: [
        ["Small Pouch", "150 × 200mm", "80 microns", "Single-portion cheese, deli meats"],
        ["Medium Pouch", "200 × 300mm", "80/90 microns", "Steaks, fish fillets, pre-cut cheese"],
        ["Large Pouch", "250 × 350mm", "100 microns", "Whole chicken, large fish portions"],
        ["Bone-in Pouch", "200 × 300mm", "120/150 microns", "Ribs, bone-in pork chops, hard foods"],
        ["Bulk Pouch", "300 × 450mm", "120 microns", "Wholesale food service portions"]
      ]
    }
  ]).map((tb: any) => ({
    title: tb?.title || '',
    data: {
      headers: Array.isArray(tb?.headers) ? tb.headers : [],
      rows: Array.isArray(tb?.rows) ? tb.rows : []
    }
  }))

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
              {benefits.map((benefit, idx) => (
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
                {meatItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.applications.seafood.title`)}</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                {seafoodItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">{t(`${p}.sections.applications.cheese.title`)}</h4>
              <ul className="text-sm space-y-1 text-yellow-700">
                {cheeseItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.applications.meals.title`)}</h4>
              <ul className="text-sm space-y-1 text-green-700">
                {mealsItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.applications.coffee.title`)}</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                {coffeeItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.applications.nonfood.title`)}</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                {nonfoodItems.map((item, idx) => (
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
              {specItems.map((item, idx) => (
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
            {metrics.map((metric, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
                <div className="text-3xl font-bold">{metric?.val || ''}</div>
                <div className="text-sm opacity-90">{metric?.label || ''}</div>
                <div className="text-xs opacity-75 mt-1">{metric?.desc || ''}</div>
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
