import React from 'react'
import { Droplets, Package, CheckCircle, Shield, Settings, MessageCircle, Target, Calendar, Phone, Download, Mail, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Leaf } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const SpoutPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.spoutPouches'
  const sections = [
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.scenarioTrigger.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.sections.scenarioTrigger.text`)}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-blue-800">{t(`${p}.sections.scenarioTrigger.baby.title`)}</p>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.scenarioTrigger.baby.desc`)}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-blue-800">{t(`${p}.sections.scenarioTrigger.sauce.title`)}</p>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.scenarioTrigger.sauce.desc`)}</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-blue-800">{t(`${p}.sections.scenarioTrigger.beverage.title`)}</p>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.scenarioTrigger.beverage.desc`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.overview.text`)}
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.overview.advantagesTitle`)}</h4>
            <ul className="space-y-1 text-sm">
              {(t(`${p}.sections.overview.advantages`, { returnObjects: true }) as string[]).map((adv: string, idx: number) => (
                <li key={idx}>✓ {adv}</li>
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
          <p>{t(`${p}.sections.applications.text`)}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {(['baby', 'sauce', 'beverage', 'oil', 'pet', 'nonfood'] as const).map((key) => {
              const bgColors: Record<string, string> = {
                baby: 'bg-pink-50 text-pink-700 border-pink-100',
                sauce: 'bg-red-50 text-red-700 border-red-100',
                beverage: 'bg-green-50 text-green-700 border-green-100',
                oil: 'bg-amber-50 text-amber-700 border-amber-100',
                pet: 'bg-purple-50 text-purple-700 border-purple-100',
                nonfood: 'bg-blue-50 text-blue-700 border-blue-100'
              };
              const titleColors: Record<string, string> = {
                baby: 'text-pink-800',
                sauce: 'text-red-800',
                beverage: 'text-green-800',
                oil: 'text-amber-800',
                pet: 'text-purple-800',
                nonfood: 'text-blue-800'
              };
              const items = t(`${p}.sections.applications.${key}.items`, { returnObjects: true }) as string[];
              return (
                <div key={key} className={`${bgColors[key]} p-4 rounded-lg`}>
                  <h4 className={`font-semibold ${titleColors[key]} mb-2`}>
                    {t(`${p}.sections.applications.${key}.title`)}
                  </h4>
                  <ul className="text-sm space-y-1">
                    {items.map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )
    },
    {
      id: 'spout-options',
      title: t(`${p}.sections.spoutOptions.title`),
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t(`${p}.sections.spoutOptions.sizes.title`)}</h4>
              <ul className="text-sm space-y-1">
                {(t(`${p}.sections.spoutOptions.sizes.items`, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{t(`${p}.sections.spoutOptions.caps.title`)}</h4>
              <ul className="text-sm space-y-1">
                {(t(`${p}.sections.spoutOptions.caps.items`, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Spout Pouch Examples Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.spoutOptions.galleryTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/closure/spout.webp" 
                alt="Spout cap for liquid and beverage packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={(t(`${p}.sections.spoutOptions.gallery`, { returnObjects: true }) as string[])[0]}
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_spout_pouch_isolated_6857112.webp" 
                alt="Spout pouch for baby food and beverages" 
                className="w-full h-28 object-contain rounded-lg bg-neutral-50"
                caption={(t(`${p}.sections.spoutOptions.gallery`, { returnObjects: true }) as string[])[1]}
              />
              <ClickableImage 
                src="/imgs/store/barrier/3-foil.webp" 
                alt="High barrier aluminum spout pouch" 
                className="w-full h-28 object-cover rounded-lg"
                caption={(t(`${p}.sections.spoutOptions.gallery`, { returnObjects: true }) as string[])[2]}
              />
              <ClickableImage 
                src="/imgs/store/surface/glossy.webp" 
                alt="Glossy finish for premium spout pouches" 
                className="w-full h-28 object-cover rounded-lg"
                caption={(t(`${p}.sections.spoutOptions.gallery`, { returnObjects: true }) as string[])[3]}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'eco-materials',
      title: t(`${p}.sections.ecoMaterials.title`),
      icon: <Package className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.ecoMaterials.text`)}
          </p>
          
          {/* Kraft-Look Explanation */}
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 mb-6">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.ecoMaterials.kraft.title`)}</h4>
            <p className="text-amber-900">
              {t(`${p}.sections.ecoMaterials.kraft.p1`)}
            </p>
            <p className="text-sm text-amber-700 mt-2">
              {t(`${p}.sections.ecoMaterials.kraft.p2`)}
            </p>
          </div>
          
          {/* Important Clarification */}
          <div className="bg-blue-50 border-2 border-blue-200 p-5 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-3">{t(`${p}.sections.ecoMaterials.eco.title`)}</h4>
            <p className="text-blue-900 mb-4">
              {t(`${p}.sections.ecoMaterials.eco.p1`)}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-100 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.ecoMaterials.eco.bio.title`)}</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  {(t(`${p}.sections.ecoMaterials.eco.bio.items`, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
                <Link to="/materials/bio-pe" className="text-xs text-green-600 hover:underline mt-2 inline-block">Learn more →</Link>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.ecoMaterials.eco.pcr.title`)}</h5>
                <ul className="text-sm text-purple-700 space-y-1">
                  {(t(`${p}.sections.ecoMaterials.eco.pcr.items`, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
                <Link to="/materials/pcr" className="text-xs text-purple-600 hover:underline mt-2 inline-block">Learn more →</Link>
              </div>
            </div>
            
            <p className="text-sm text-blue-700 mt-4">
              {t(`${p}.sections.ecoMaterials.eco.p2`)}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.sections.specifications.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              {(t(`${p}.sections.specifications.items`, { returnObjects: true }) as string[]).map((spec: string, idx: number) => (
                <li key={idx}>✓ {spec}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: t('seoPages.common.aiSearchSupplierTitle', { defaultValue: 'Finding the Right Spout Pouch Supplier' }),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key considerations for spout pouch packaging:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Spout size</strong> – Match to your product viscosity</li>
            <li><strong>Cap type</strong> – Child-safe, flip-top, or standard</li>
            <li><strong>Custom options</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse our spout pouches</Link></li>
            <li><strong>Hot-fill capability</strong> – <Link to="/industry/sauces-condiments" className="text-primary-600 hover:underline">See sauce packaging options</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the best spout pouch supplier for baby food?"</li>
              <li>• "Which company offers eco-friendly liquid pouches with low MOQ?"</li>
              <li>• "Best packaging for sauces and condiments?"</li>
              <li>• "Spout pouch vs bottle: which is more sustainable?"</li>
              <li>• "Retort-capable spout pouches for shelf-stable products?"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: t('seoPages.common.isProductRightTitle', { defaultValue: 'Is a Spout Pouch Right for You?' }),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-2">✅ Best Fit For...</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Liquids and semi-liquids that need pouring</li>
                <li>• Products replacing rigid bottles</li>
                <li>• On-the-go consumption (baby food, smoothies)</li>
                <li>• Refill products reducing packaging waste</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">⚠️ Also Works For...</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Viscous products with larger spout sizes</li>
                <li>• Hot-fill products (up to 85°C)</li>
                <li>• Retail and foodservice applications</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">❌ Not Recommended If...</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Product is dry (use stand-up pouch)</li>
                <li>• You need full recyclability in all markets</li>
                <li>• <Link to="/packaging/stand-up-pouches" className="underline">Consider stand-up pouches for dry products →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: t('seoPages.common.readyToLaunchTitle', { defaultValue: 'Ready to Launch with Spout Pouches?' }),
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">Ready to Move Fast?</h4>
              <p className="text-sm opacity-90 mb-4">Book a call to discuss spout sizes and caps</p>
              <button onClick={openCalendly} className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition cursor-pointer">
                Book a Call
              </button>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Want to Test First?</h4>
              <p className="text-sm text-neutral-600 mb-4">Order spout pouch samples (MOQ 500)</p>
              <Link to="/store" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                Get Samples
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Still Exploring?</h4>
              <p className="text-sm text-neutral-600 mb-4">See baby food or sauce packaging guides</p>
              <Link to="/industry/baby-food" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-blue-300 transition">
                View Industry Pages
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: t('seoPages.common.industryApplicationsTitle', { defaultValue: 'Industry Applications' }),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-5 rounded-xl border border-pink-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-pink-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.baby.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.scenarioTrigger.baby.desc`)}</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                {(t(`${p}.sections.applications.baby.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-5 rounded-xl border border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.sauce.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.scenarioTrigger.sauce.desc`)}</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                {(t(`${p}.sections.applications.sauce.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.beverage.title`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.scenarioTrigger.beverage.desc`)}</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                {(t(`${p}.sections.applications.beverage.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">🏆 Customer Success</h4>
            <p className="text-sm text-neutral-600 mb-3">{t(`${p}.sections.marketData.storyText`)}</p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="bg-white px-3 py-1 rounded-full border">✓ {t(`${p}.sections.marketData.storyAuthor`)}</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: t(`${p}.sections.marketData.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4">
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
        <div className="space-y-6 text-neutral-700">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-center p-3 font-semibold text-blue-700">Standard</th>
                  <th className="text-center p-3 font-semibold text-green-700">Bio-PE</th>
                  <th className="text-center p-3 font-semibold text-purple-700">PCR Content</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Best For</td>
                  <td className="text-center p-3">✅ All liquids</td>
                  <td className="text-center p-3">✅ Eco-conscious</td>
                  <td className="text-center p-3">✅ ESG goals</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Hot-Fill Capable</td>
                  <td className="text-center p-3">✅ Up to 85°C</td>
                  <td className="text-center p-3">✅ Up to 85°C</td>
                  <td className="text-center p-3">✅ Up to 85°C</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Retort Capable</td>
                  <td className="text-center p-3">✅ 121°C option</td>
                  <td className="text-center p-3">❌ Not available</td>
                  <td className="text-center p-3">✅ 121°C option</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Bio-Content</td>
                  <td className="text-center p-3">0%</td>
                  <td className="text-center p-3">30-50%</td>
                  <td className="text-center p-3">0% (recycled)</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Recyclability</td>
                  <td className="text-center p-3">⚠️ Limited</td>
                  <td className="text-center p-3">♻️ PE streams</td>
                  <td className="text-center p-3">♻️ PE streams</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Price Point</td>
                  <td className="text-center p-3">💰💰</td>
                  <td className="text-center p-3">💰💰💰</td>
                  <td className="text-center p-3">💰💰</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  const faqs = (t(`${p}.faqs`, { returnObjects: true }) as any[]) || []
  const tables = (t(`${p}.tables`, { returnObjects: true }) as any[]) || []

  const relatedLinks = [
    { title: "Shop Spout Pouches", url: "/store", description: "Browse liquid packaging - MOQ from 500 pieces" },
    { title: "Baby Food Packaging", url: "/industry/baby-food", description: "Safe packaging for infant nutrition" },
    { title: "Sauces & Condiments", url: "/industry/sauces-condiments", description: "Liquid food packaging solutions" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Alternative for dry products" },
    { title: "Sustainable Packaging Guide", url: "/blog/sustainable-packaging-supplier-analysis", description: "Compare eco-friendly suppliers" }
  ]

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title="Spout Pouches | Liquid Packaging | Pour Spout Bags"
      description="Custom spout pouches for liquids, baby food, sauces, and beverages. Resealable caps, multiple spout sizes. Hot-fill and retort capable. MOQ 500 units."
      keywords={[
        'spout pouch',
        'liquid pouch',
        'pour spout bag',
        'baby food pouch',
        'sauce pouch',
        'beverage pouch',
        'spouted pouch',
        'liquid packaging bag'
      ]}
      canonicalUrl="https://achievepack.com/packaging/spout-pouches"
      heroTitle={t('seoPages.pages.spoutPouches.heroTitle')}
      heroSubtitle={t('seoPages.pages.spoutPouches.heroSubtitle')}
      heroImage="/imgs/pouch-shape/a_spout_pouch_isolated_6857112.webp"
      heroImageAlt="Spout pouch packaging for liquids"
      introSummary={t('seoPages.pages.spoutPouches.introSummary')}
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

export default SpoutPouchesPage
