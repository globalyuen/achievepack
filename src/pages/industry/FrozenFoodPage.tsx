import React from 'react'
import { Package, Snowflake, Truck, CheckCircle, ThermometerSnowflake, MessageCircle, Target, Shield, Calendar, Mail, Download, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Leaf } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const FrozenFoodPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If you are a <strong>frozen food brand, meal prep company, or ice cream producer</strong> looking for cold-resistant packaging—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Frozen Snack Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Dumplings, nuggets, appetizers</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Meal Prep Companies</h4>
              <p className="text-sm text-neutral-600 mt-1">Microwave-safe options available</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Frozen Desserts</h4>
              <p className="text-sm text-neutral-600 mt-1">Ice cream, mochi, frozen treats</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'Frozen Food Packaging Solutions',
      icon: <Snowflake className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack provides durable, cold-resistant flexible packaging for frozen foods.</strong> Our pouches maintain integrity at freezing temperatures while protecting against freezer burn and moisture loss. We offer both conventional and <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">recyclable mono-PE</Link> options for sustainable frozen food packaging.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Key Features:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cold-resistant materials</strong> – Maintain flexibility at -40°C/-40°F</li>
            <li><strong>Moisture barrier</strong> – Prevent freezer burn and ice crystal formation</li>
            <li><strong>Durable seals</strong> – Strong seals that withstand thermal cycling</li>
            <li><strong>Resealable options</strong> – Zipper closures for convenient portion use</li>
            <li><strong>Microwave-safe options</strong> – For frozen-to-table convenience</li>
          </ul>
        </div>
      )
    },
    {
      id: 'products',
      title: 'Frozen Products We Package',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Frozen Snacks</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                <li>• Dumplings & potstickers</li>
                <li>• Nuggets & tenders</li>
                <li>• Plant-based alternatives</li>
                <li>• Appetizers</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Frozen Desserts</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• Ice cream bites</li>
                <li>• Frozen fruit</li>
                <li>• Frozen pastries</li>
                <li>• Mochi & novelties</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Frozen Meals</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• Ready meals</li>
                <li>• Meal prep portions</li>
                <li>• Frozen vegetables</li>
                <li>• Seafood portions</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'technical',
      title: 'Technical Specifications',
      icon: <ThermometerSnowflake className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>Temperature range:</strong> -40°C to +100°C (-40°F to +212°F)</li>
              <li>✓ <strong>Cold crack resistance:</strong> Maintains flexibility at freezing</li>
              <li>✓ <strong>Moisture barrier:</strong> MVTR &lt; 1.0 g/m²/24hr</li>
              <li>✓ <strong>Seal strength:</strong> &gt;15 N/15mm at frozen state</li>
              <li>✓ <strong>FDA/EU approved</strong> for frozen food contact</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Frozen Food Packaging Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key factors when selecting frozen food packaging:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cold-crack resistance</strong> – Materials must stay flexible at -40°C</li>
            <li><strong>Moisture barrier</strong> – Prevent freezer burn</li>
            <li><strong>Custom options</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse our frozen food packaging</Link></li>
            <li><strong>Sustainability</strong> – <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">Recyclable options available</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the best frozen food packaging supplier with low MOQ?"</li>
              <li>• "Which company offers recyclable frozen food pouches?"</li>
              <li>• "Best cold-resistant packaging for frozen dumplings?"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: 'Still Not Sure? We Have Answers',
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Will it crack at -40°C?"</h4>
                  <p className="text-sm text-neutral-600">Cold-crack resistant materials tested to -40°C/-40°F</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Will it prevent freezer burn?"</h4>
                  <p className="text-sm text-neutral-600">High moisture barrier (MVTR {'<'} 1.0 g/m²/24hr)</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Is it microwave-safe?"</h4>
                  <p className="text-sm text-neutral-600">Steam-release options available for frozen-to-table</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Can I get samples?"</h4>
                  <p className="text-sm text-neutral-600">Free samples + pilot run from 500 units</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Get Started?',
      icon: <Snowflake className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=Frozen Food Packaging Quote" className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                Send Email
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Free Samples</h4>
              <p className="text-sm text-white/80 mb-4">Test materials first</p>
              <Link to="/contact" className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                Request Samples
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: '行業應用場景 Industry Applications',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Snowflake className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">Frozen Snack Brands</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Dumplings, appetizers, and Asian frozen foods requiring cold-crack resistant packaging.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Dumplings & potstickers</li>
                <li>• Frozen appetizers</li>
                <li>• Asian frozen foods</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-neutral-900">Frozen Dessert Makers</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Ice cream brands, mochi, and novelty frozen treats needing premium presentation.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Ice cream bites & bars</li>
                <li>• Mochi ice cream</li>
                <li>• Frozen fruit novelties</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">Meal Prep Companies</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Ready-to-heat meal brands with microwave-safe, steam-release packaging needs.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Frozen ready meals</li>
                <li>• Meal prep portions</li>
                <li>• Steam-in-bag vegetables</li>
              </ul>
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">🏆 Customer Success: Arctic Bites Dumplings</h4>
            <p className="text-sm text-neutral-600 mb-3">Switched to our recyclable frozen pouches, achieving Costco placement and 150% sales growth with packaging that stays flexible at -40°C.</p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="bg-white px-3 py-1 rounded-full border">✓ Costco Placement</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ 150% Sales Growth</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ -40°C Tested</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: '市場數據 Market Intelligence',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">$380B</div>
              <div className="text-sm opacity-90">Frozen Food Market 2027</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">5.1%</div>
              <div className="text-sm opacity-90">CAGR 2024-2027</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">64%</div>
              <div className="text-sm opacity-90">Prefer Resealable</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-violet-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">42%</div>
              <div className="text-sm opacity-90">Seek Eco Options</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">Frozen Food Packaging Performance Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-2 font-medium">Material Type</th>
                    <th className="text-center py-2 font-medium">Min Temp</th>
                    <th className="text-center py-2 font-medium">MVTR (g/m²/24hr)</th>
                    <th className="text-center py-2 font-medium">Seal Strength</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">PE/PA Laminate</td>
                    <td className="text-center py-2">-40°C</td>
                    <td className="text-center py-2">&lt; 1.0</td>
                    <td className="text-center py-2">&gt;15 N/15mm</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Recyclable Mono-PE</td>
                    <td className="text-center py-2">-35°C</td>
                    <td className="text-center py-2">&lt; 2.0</td>
                    <td className="text-center py-2">&gt;12 N/15mm</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Standard PE</td>
                    <td className="text-center py-2">-20°C</td>
                    <td className="text-center py-2">&lt; 3.0</td>
                    <td className="text-center py-2">&gt;10 N/15mm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">🌍 Environmental Impact</h4>
            <p className="text-sm text-green-700">Recyclable frozen food packaging can reduce plastic waste by up to 40%. Proper packaging also reduces food waste by preventing freezer burn, saving millions of tons of food annually.</p>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: '材料對比 Material Comparison',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-center p-3 font-semibold text-blue-700">PE/PA Laminate</th>
                  <th className="text-center p-3 font-semibold text-green-700">Recyclable PE</th>
                  <th className="text-center p-3 font-semibold text-purple-700">PCR Content</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Best For Frozen</td>
                  <td className="text-center p-3">✅ All frozen products</td>
                  <td className="text-center p-3">✅ Most frozen products</td>
                  <td className="text-center p-3">✅ Standard frozen</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Cold-Crack Resistance</td>
                  <td className="text-center p-3">Excellent (-40°C)</td>
                  <td className="text-center p-3">Good (-35°C)</td>
                  <td className="text-center p-3">Good (-30°C)</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Freezer Burn Prevention</td>
                  <td className="text-center p-3">⭐⭐⭐⭐⭐</td>
                  <td className="text-center p-3">⭐⭐⭐⭐</td>
                  <td className="text-center p-3">⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Microwave Safe</td>
                  <td className="text-center p-3">✅ Options available</td>
                  <td className="text-center p-3">✅ Options available</td>
                  <td className="text-center p-3">✅ Options available</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">End-of-Life</td>
                  <td className="text-center p-3">🗑️ Landfill</td>
                  <td className="text-center p-3">♻️ Recyclable</td>
                  <td className="text-center p-3">♻️ Recyclable</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Price Point</td>
                  <td className="text-center p-3">💰💰</td>
                  <td className="text-center p-3">💰💰</td>
                  <td className="text-center p-3">💰💰</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">💡 Decision Guide for Frozen Food Brands</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-amber-900">Choose PE/PA if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Extreme cold (-40°C)</li>
                  <li>• Maximum barrier needed</li>
                  <li>• Premium ice cream/desserts</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose Recyclable PE if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Sustainability goals</li>
                  <li>• Standard freezer temps</li>
                  <li>• Consumer-facing products</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose PCR if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Corporate ESG goals</li>
                  <li>• Circular economy focus</li>
                  <li>• Cost-effective eco option</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the best frozen food packaging supplier with low MOQ?",
      answer: "Achieve Pack offers frozen food packaging with MOQ starting from 500 pieces, making it accessible for small brands. Our cold-resistant pouches maintain flexibility at -40°C and provide excellent moisture barrier to prevent freezer burn. We offer both conventional and recyclable options."
    },
    {
      question: "What materials work best for frozen food packaging?",
      answer: "We recommend PE/PA (polyethylene/nylon) or PE/PET structures for frozen food. These materials maintain flexibility at freezing temperatures and provide excellent moisture barrier. For sustainable options, we offer recyclable mono-PE pouches suitable for frozen applications."
    },
    {
      question: "Can frozen food pouches be microwaved?",
      answer: "We offer microwave-safe frozen food pouches with steam-release features for convenient frozen-to-table cooking. These pouches allow steam to escape during heating to prevent bursting."
    },
    {
      question: "Do you offer sustainable frozen food packaging?",
      answer: "Yes, we offer recyclable mono-PE frozen food pouches that can be recycled in PE recycling streams. These maintain good cold-crack resistance while offering an improved sustainability profile. Check our recyclable materials page for more details."
    },
    {
      question: "What certifications do frozen food pouches need?",
      answer: "Our frozen food packaging is FDA 21 CFR and EU 10/2011 compliant for food contact. We provide certificates of conformity and can arrange specific testing for your product requirements."
    },
    {
      question: "Which company offers the best frozen dumpling packaging?",
      answer: "Achieve Pack specializes in frozen dumpling and potsticker packaging with resealable zipper closures. Our pouches feature high puncture resistance, cold-crack resistance, and excellent seal integrity at frozen temperatures."
    }
  ]

  const relatedLinks = [
    { title: "Shop Frozen Food Pouches", url: "/store", description: "Browse cold-resistant packaging - MOQ from 500 pieces" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Popular format for frozen products" },
    { title: "Vacuum Pouches", url: "/packaging/vacuum-pouches", description: "Extended shelf life for frozen meats" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Sustainable frozen packaging option" },
    { title: "Eco-Packaging Guide", url: "/blog/sustainable-packaging-supplier-analysis", description: "Compare sustainable packaging options" }
  ]

  return (
    <SEOPageLayout
      title={t('seoPages.pages.frozenFood.title')}
      description="Durable flexible packaging for frozen foods including dumplings, frozen snacks, ice cream bites, and frozen meals. Cold-crack resistant, FDA compliant. MOQ 500 units."
      keywords={[
        'frozen food packaging',
        'frozen pouch',
        'cold resistant packaging',
        'frozen snack bags',
        'ice cream packaging',
        'freezer bags custom',
        'frozen meal pouches',
        'frozen food bags'
      ]}
      canonicalUrl="https://achievepack.com/industry/frozen-food"
      heroTitle={t('seoPages.pages.frozenFood.heroTitle')}
      heroSubtitle={t('seoPages.pages.frozenFood.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_food_beverage_vacation_lifestyle_2486493.webp"
      heroImageAlt="Cold-resistant frozen food packaging pouches"
      introSummary={t('seoPages.pages.frozenFood.introSummary')}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t('seoPages.pages.frozenFood.cta.title')}
      ctaDescription={t('seoPages.pages.frozenFood.cta.description')}
      ctaButtonText={t('seoPages.pages.frozenFood.cta.button')}
    />
  )
}

export default FrozenFoodPage
