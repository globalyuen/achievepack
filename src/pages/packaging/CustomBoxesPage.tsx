import React from 'react'
import { Package, CheckCircle, Shield, Target, Calendar, Phone, Download, Mail, Leaf, Award, TrendingUp, MessageCircle, Factory, BarChart3, ArrowLeftRight, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const CustomBoxesPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.customBoxes'
  
  const sections = [
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.scenarioTrigger.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            {t(`${p}.sections.scenarioTrigger.text`)}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.chocolate.title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.chocolate.desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.coffee.title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.coffee.desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.artisan.title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.artisan.desc`)}</p>
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
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.sections.overview.text`)}
          </p>
          
          {/* Box Type 1: Corrugated Mailer */}
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="/imgs/store/box/corrugated-box/2be65396-ac07-44d0-b54c-2422d3bfe981.webp" 
                  alt="Custom Printed Corrugated Mailer Box" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">{t(`${p}.sections.overview.mailer.title`)}</h4>
                <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.overview.mailer.desc`)}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {(t(`${p}.sections.overview.mailer.sizes`, { returnObjects: true }) as string[]).map((size, idx) => (
                    <div key={idx}>{size}</div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link to="/store/product/box-corrugated-custom" className="inline-flex items-center text-primary-600 font-semibold hover:underline">
                    View Pricing & Order →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Box Type 2: Tuck Box */}
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="/imgs/store/box/tuck-box/8a2918bb-a48c-44a3-875d-6e766e5f305f.webp" 
                  alt="Custom Printed Tuck Box with Gold Foil" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">{t(`${p}.sections.overview.tuck.title`)}</h4>
                <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.overview.tuck.desc`)}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {(t(`${p}.sections.overview.tuck.sizes`, { returnObjects: true }) as string[]).map((size, idx) => (
                    <div key={idx}>{size}</div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link to="/store/product/box-tuck-custom" className="inline-flex items-center text-primary-600 font-semibold hover:underline">
                    View Pricing & Order →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t(`${p}.sections.features.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.features.f1.title`)}</h4>
              <p className="text-sm text-amber-700">{t(`${p}.sections.features.f1.desc`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.features.f2.title`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.sections.features.f2.desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.features.f3.title`)}</h4>
              <p className="text-sm text-neutral-700">{t(`${p}.sections.features.f3.desc`)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.features.f4.title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.features.f4.desc`)}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.features.f5.title`)}</h4>
              <p className="text-sm text-purple-700">{t(`${p}.sections.features.f5.desc`)}</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">{t(`${p}.sections.features.f6.title`)}</h4>
              <p className="text-sm text-red-700">{t(`${p}.sections.features.f6.desc`)}</p>
            </div>
          </div>
          
          {/* Box Types Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.features.galleryTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp" 
                alt="Corrugated mailer box for shipping and e-commerce" 
                className="w-full h-28 object-cover rounded-lg"
                caption={(t(`${p}.sections.features.gallery`, { returnObjects: true }) as string[])[0]}
              />
              <ClickableImage 
                src="/imgs/store/box/tuck-box/8a2918bb-a48c-44a3-875d-6e766e5f305f.webp" 
                alt="Tuck box carton for chocolate and confectionery" 
                className="w-full h-28 object-cover rounded-lg"
                caption={(t(`${p}.sections.features.gallery`, { returnObjects: true }) as string[])[1]}
              />
              <ClickableImage 
                src="/imgs/store/surface/stamp-foil.webp" 
                alt="Gold foil stamping for luxury box packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={(t(`${p}.sections.features.gallery`, { returnObjects: true }) as string[])[2]}
              />
              <ClickableImage 
                src="/imgs/store/surface/emboss.webp" 
                alt="Embossed texture for premium box packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={(t(`${p}.sections.features.gallery`, { returnObjects: true }) as string[])[3]}
              />
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {([
              { key: 'chocolate', emoji: '🍫', bg: 'bg-amber-50', text: 'text-amber-800', textLight: 'text-amber-700' },
              { key: 'tea', emoji: '🍵', bg: 'bg-green-50', text: 'text-green-800', textLight: 'text-green-700' },
              { key: 'coffee', emoji: '☕', bg: 'bg-amber-100', text: 'text-amber-900', textLight: 'text-amber-800' },
              { key: 'cosmetics', emoji: '🧴', bg: 'bg-pink-50', text: 'text-pink-800', textLight: 'text-pink-700' },
              { key: 'gifts', emoji: '🎁', bg: 'bg-purple-50', text: 'text-purple-800', textLight: 'text-purple-700' },
              { key: 'jewelry', emoji: '💎', bg: 'bg-indigo-50', text: 'text-indigo-800', textLight: 'text-indigo-700' },
            ] as const).map(({ key, emoji, bg, text, textLight }) => (
              <div key={key} className={`${bg} p-4 rounded-lg text-center`}>
                <div className="text-3xl mb-2">{emoji}</div>
                <h4 className={`font-semibold ${text}`}>{t(`${p}.sections.applications.${key}.title`)}</h4>
                <p className={`text-xs ${textLight} mt-1`}>{t(`${p}.sections.applications.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.sections.specifications.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
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
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.sections.marketData.storyTitle`)}</h4>
            <p className="text-sm text-neutral-600">{t(`${p}.sections.marketData.storyText`)}</p>
            <p className="text-xs text-neutral-500 mt-2">{t(`${p}.sections.marketData.storyAuthor`)}</p>
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
                  <th className="border border-neutral-200 px-4 py-2 text-left">boxestypetypes</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">structural strength</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">Cost</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">suitableusedScenario</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">Recommended Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">Corrugated Mailer Boxes</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">Shipping Protection</td>
                  <td className="border border-neutral-200 px-4 py-2">coffee、Tea、Subscription boxes</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">Cardboard Folding Boxes</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">retailDisplay</td>
                  <td className="border border-neutral-200 px-4 py-2">Chocolate Bars, Tea Units</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">rigidPaper Boxes + Gold Foil</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">LuxuriousHighpremium</td>
                  <td className="border border-neutral-200 px-4 py-2">Premium Chocolates, Gift Products</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">FSCCertificationMaterials</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">🌱 Eco-friendlyPriority</td>
                  <td className="border border-neutral-200 px-4 py-2">Organicfood、greenBrand</td>
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
    {
      title: "Shop Corrugated Boxes",
      url: "/store/product/box-corrugated-custom",
      description: "Order custom printed mailer boxes - MOQ 200 pieces"
    },
    {
      title: "Shop Tuck Boxes",
      url: "/store/product/box-tuck-custom",
      description: "Premium cartons with gold foil & embossing"
    },
    {
      title: "Stand-Up Pouches",
      url: "/packaging/stand-up-pouches",
      description: "Flexible alternative for food packaging"
    },
    {
      title: "Flat Bottom Bags",
      url: "/packaging/flat-bottom-bags",
      description: "Premium pouches for coffee and tea"
    },
    {
      title: "Compostable Materials",
      url: "/materials/compostable",
      description: "Eco-friendly flexible packaging options"
    }
  ]

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title="Custom Boxes | Rigid Mailer Boxes | Tuck Boxes | Gift Packaging"
      description="Custom printed rigid boxes for chocolate, tea, coffee, and artisan foods. Premium finishes including gold foil, embossing, matte lamination. FSC certified. MOQ 200 pieces. Sea freight included."
      keywords={[
        'custom boxes',
        'rigid boxes',
        'mailer boxes',
        'tuck boxes',
        'gift boxes',
        'chocolate packaging',
        'tea box packaging',
        'coffee box packaging',
        'gold foil boxes',
        'FSC certified boxes',
        'embossed packaging',
        'custom printed boxes'
      ]}
      canonicalUrl="https://achievepack.com/packaging/custom-boxes"
      heroTitle={t('seoPages.pages.customBoxes.heroTitle')}
      heroSubtitle={t('seoPages.pages.customBoxes.heroSubtitle')}
      heroImage="/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp"
      heroImageAlt="Custom printed rigid boxes with gold foil and embossing for premium food packaging"
      introSummary={t('seoPages.pages.customBoxes.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t('seoPages.pages.customBoxes.cta.title')}
      ctaDescription={t('seoPages.pages.customBoxes.cta.description')}
      ctaButtonText={t('seoPages.pages.customBoxes.cta.button')}
      ctaButtonUrl="/store?category=boxes"
    />
  )
}

export default CustomBoxesPage
