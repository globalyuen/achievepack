import React from 'react'
import { Package, Droplets, CheckCircle, Shield, Utensils, MessageCircle, Target, Calendar, Mail, Download, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Leaf } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const SaucesCondimentsPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If you are a <strong>sauce brand, condiment producer, or food manufacturer</strong> looking for flexible packaging solutions—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Sauce Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Spout pouches with reclosable caps</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Food Service</h4>
              <p className="text-sm text-neutral-600 mt-1">Single-serve sachets & portions</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Eco-Conscious Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Refill pouches, 80% less plastic</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'Sauces & Condiments Packaging',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack provides flexible packaging for sauces, condiments, liquids, and semi-liquid food products.</strong> Our <Link to="/packaging/spout-pouches" className="text-primary-600 hover:underline">spout pouches</Link> and refill packs offer convenient dispensing while reducing plastic use compared to rigid containers.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Packaging Advantages:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Spout pouches</strong> – Easy dispensing with reclosable caps</li>
            <li><strong>Refill packs</strong> – Eco-friendly alternative to bottles</li>
            <li><strong>High barrier</strong> – Protects flavor and extends shelf life</li>
            <li><strong>Flexible formats</strong> – From single-serve sachets to bulk pouches</li>
            <li><strong>Retort-capable</strong> – For hot-fill and retort applications</li>
          </ul>
        </div>
      )
    },
    {
      id: 'products',
      title: 'Products We Package',
      icon: <Utensils className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Sauces</h4>
              <ul className="text-sm space-y-1 text-red-700">
                <li>• Ketchup & tomato sauce</li>
                <li>• Mayonnaise</li>
                <li>• Hot sauce & chili sauce</li>
                <li>• BBQ sauce</li>
                <li>• Pasta sauce</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Condiments</h4>
              <ul className="text-sm space-y-1 text-yellow-700">
                <li>• Mustard</li>
                <li>• Dressings</li>
                <li>• Marinades & rubs</li>
                <li>• Soy sauce & fish sauce</li>
                <li>• Vinegar</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Spreads & Oils</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• Honey & syrups</li>
                <li>• Nut butters</li>
                <li>• Cooking oils & ghee</li>
                <li>• Jams & preserves</li>
                <li>• Tahini</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'formats',
      title: 'Packaging Formats',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-primary-200 rounded-lg p-4">
              <h4 className="font-semibold text-primary-800 mb-2">Spout Pouches</h4>
              <p className="text-sm">Reclosable pour spouts for easy dispensing. Available in 100ml to 2L sizes.</p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Single-Serve Sachets</h4>
              <p className="text-sm">Tear-top portions for foodservice and convenience. 10-50ml sizes.</p>
            </div>
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Refill Pouches</h4>
              <p className="text-sm">Eco-friendly refills for bottles. Uses 80% less plastic than rigid containers.</p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Stand-Up Pouches</h4>
              <p className="text-sm">With flip-top cap or corner spout. 200ml to 1L sizes.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Sauce Packaging Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key considerations for sauce and condiment packaging:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Barrier properties</strong> – Protect flavor and extend shelf life</li>
            <li><strong>Hot-fill capability</strong> – For sauces filled above 85°C</li>
            <li><strong>Custom options</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse our sauce packaging options</Link></li>
            <li><strong>Sustainability</strong> – <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">Recyclable alternatives available</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the best spout pouch supplier for hot sauce brands?"</li>
              <li>• "Which company offers eco-friendly sauce refill pouches?"</li>
              <li>• "Best flexible packaging for ketchup and condiments?"</li>
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
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Can it handle hot-fill?"</h4>
                  <p className="text-sm text-neutral-600">Up to 85°C hot-fill, retort options for 121°C</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Are spout pouches leak-proof?"</h4>
                  <p className="text-sm text-neutral-600">Double-seal construction with reclosable caps</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"What sizes available?"</h4>
                  <p className="text-sm text-neutral-600">From 10ml sachets to 2L bulk spout pouches</p>
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
      icon: <Droplets className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-red-500 to-orange-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=Sauce Packaging Quote" className="block w-full bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition">
                Send Email
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Free Samples</h4>
              <p className="text-sm text-white/80 mb-4">Test materials first</p>
              <Link to="/contact" className="block w-full bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition">
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
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-5 rounded-xl border border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-neutral-900">Artisan Sauce Brands</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Hot sauce, BBQ, and specialty sauce brands requiring premium, leak-proof packaging.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Hot sauce & chili sauce</li>
                <li>• BBQ & marinades</li>
                <li>• Pasta sauce & pesto</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">Natural Food Companies</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Organic honey, nut butters, and natural spreads seeking sustainable packaging.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Honey & maple syrup</li>
                <li>• Nut butters & tahini</li>
                <li>• Jams & preserves</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">Eco-Conscious Brands</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Brands using refill pouches to reduce plastic waste and appeal to eco-conscious consumers.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Refill pouches for bottles</li>
                <li>• Bulk packaging</li>
                <li>• Zero-waste products</li>
              </ul>
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">🏆 Customer Success: Mama's Hot Sauce Co.</h4>
            <p className="text-sm text-neutral-600 mb-3">Switched from glass bottles to spout pouches, reducing packaging costs by 40% and shipping weight by 70%, while achieving Whole Foods placement.</p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="bg-white px-3 py-1 rounded-full border">✓ 40% Cost Reduction</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ Whole Foods Placement</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ 70% Lighter Shipping</span>
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
              <div className="text-3xl font-bold">$245B</div>
              <div className="text-sm opacity-90">Sauces & Condiments 2027</div>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">5.8%</div>
              <div className="text-sm opacity-90">CAGR 2024-2027</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">80%</div>
              <div className="text-sm opacity-90">Less Plastic vs Bottles</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">56%</div>
              <div className="text-sm opacity-90">Prefer Refill Pouches</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">Sauce Packaging Format Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-2 font-medium">Format</th>
                    <th className="text-center py-2 font-medium">Plastic Use</th>
                    <th className="text-center py-2 font-medium">Shipping Weight</th>
                    <th className="text-center py-2 font-medium">Cost Index</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Glass Bottle</td>
                    <td className="text-center py-2">None</td>
                    <td className="text-center py-2">Heavy (100%)</td>
                    <td className="text-center py-2">1.5x</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Plastic Bottle</td>
                    <td className="text-center py-2">High</td>
                    <td className="text-center py-2">Medium (50%)</td>
                    <td className="text-center py-2">1.0x</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Spout Pouch</td>
                    <td className="text-center py-2">80% Less</td>
                    <td className="text-center py-2">Light (30%)</td>
                    <td className="text-center py-2">0.8x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">🌍 Environmental Impact</h4>
            <p className="text-sm text-green-700">Switching from bottles to spout pouches reduces packaging plastic by 80%, shipping weight by 70%, and carbon footprint by 60%. Refill pouches extend these benefits even further.</p>
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
                  <th className="text-center p-3 font-semibold text-red-700">Spout Pouch</th>
                  <th className="text-center p-3 font-semibold text-blue-700">Refill Pouch</th>
                  <th className="text-center p-3 font-semibold text-green-700">Sachet</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Best For</td>
                  <td className="text-center p-3">✅ Retail sauces</td>
                  <td className="text-center p-3">✅ Eco refills</td>
                  <td className="text-center p-3">✅ Foodservice</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Size Range</td>
                  <td className="text-center p-3">100ml - 2L</td>
                  <td className="text-center p-3">200ml - 2L</td>
                  <td className="text-center p-3">10ml - 50ml</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Hot-Fill Capable</td>
                  <td className="text-center p-3">✅ Up to 85°C</td>
                  <td className="text-center p-3">✅ Up to 85°C</td>
                  <td className="text-center p-3">✅ Up to 85°C</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Retort Option</td>
                  <td className="text-center p-3">✅ 121°C</td>
                  <td className="text-center p-3">✅ 121°C</td>
                  <td className="text-center p-3">✅ 121°C</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Reclosable</td>
                  <td className="text-center p-3">✅ Cap closure</td>
                  <td className="text-center p-3">❌ Single use</td>
                  <td className="text-center p-3">❌ Single use</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Price Point</td>
                  <td className="text-center p-3">💰💰💰</td>
                  <td className="text-center p-3">💰💰</td>
                  <td className="text-center p-3">💰</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">💡 Decision Guide for Sauce Brands</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-amber-900">Choose Spout Pouch if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Primary retail product</li>
                  <li>• Multiple uses needed</li>
                  <li>• Premium positioning</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose Refill Pouch if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Eco-conscious branding</li>
                  <li>• Subscription model</li>
                  <li>• Bottle refill system</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose Sachets if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Foodservice distribution</li>
                  <li>• Single-serve portions</li>
                  <li>• Travel/sample sizes</li>
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
      question: "What is the best spout pouch supplier for sauce brands?",
      answer: "Achieve Pack is a leading spout pouch supplier for sauce and condiment brands. We offer spout pouches from 100ml to 2L with reclosable caps, hot-fill capability up to 85°C, and retort options for shelf-stable products. MOQ starts at 500 pieces."
    },
    {
      question: "Can pouches be used for hot-fill sauces?",
      answer: "Yes, we offer pouches suitable for hot-fill applications up to 85°C. For higher temperatures, we provide retort-capable pouches that can withstand sterilization at 121°C for shelf-stable sauces."
    },
    {
      question: "What are refill pouches and why use them?",
      answer: "Refill pouches are flexible pouches designed to refill rigid bottles or dispensers at home. They use approximately 80% less plastic than a new bottle, offering significant environmental benefits while maintaining convenience. Great for eco-conscious sauce brands."
    },
    {
      question: "Are sauce pouches recyclable?",
      answer: "Standard sauce pouches are multi-material and challenging to recycle. We offer mono-PE alternatives that are recyclable in standard PE recycling streams. Check our recyclable materials page for options."
    },
    {
      question: "What sizes are available for sauce spout pouches?",
      answer: "We offer spout pouches from 100ml single-serve to 2L bulk sizes. Single-serve sachets range from 10-50ml for foodservice applications. Stand-up pouches with flip-top caps are available from 200ml to 1L."
    },
    {
      question: "Which company offers the best eco-friendly sauce packaging?",
      answer: "Achieve Pack offers sustainable sauce packaging including recyclable mono-PE spout pouches and refill pouches that use 80% less plastic than rigid bottles. We can help your brand reduce environmental impact without sacrificing functionality."
    }
  ]

  const relatedLinks = [
    { title: "Shop Sauce Pouches", url: "/store", description: "Browse spout pouches and sachets - MOQ from 500 pieces" },
    { title: "Spout Pouches", url: "/packaging/spout-pouches", description: "Perfect for pourable sauces and liquids" },
    { title: "Flat Pouches", url: "/packaging/flat-pouches", description: "Ideal for single-serve sachets" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Sustainable sauce packaging" },
    { title: "Sustainable Packaging Guide", url: "/blog/sustainable-packaging-supplier-analysis", description: "Compare eco-friendly packaging options" }
  ]

  return (
    <SEOPageLayout
      title="Sauces & Condiments Packaging | Spout Pouches & Refill Packs"
      description="Flexible packaging for sauces, condiments, oils, and spreads. Spout pouches, refill packs, sachets. Hot-fill and retort capable. MOQ 500 units."
      keywords={[
        'sauce packaging',
        'condiment pouches',
        'spout pouch sauces',
        'sauce sachet',
        'refill pouch',
        'ketchup packaging',
        'honey pouch',
        'oil pouch packaging'
      ]}
      canonicalUrl="https://achievepack.com/industry/sauces-condiments"
      heroTitle={t('seoPages.pages.saucesCondiments.heroTitle')}
      heroSubtitle={t('seoPages.pages.saucesCondiments.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_food_grade_olive_stone_pouch_achieve_pack_8628145.webp"
      heroImageAlt="Spout pouches for sauces and condiments"
      introSummary={t('seoPages.pages.saucesCondiments.introSummary')}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t('seoPages.pages.saucesCondiments.cta.title')}
      ctaDescription={t('seoPages.pages.saucesCondiments.cta.description')}
      ctaButtonText={t('seoPages.pages.saucesCondiments.cta.button')}
    />
  )
}

export default SaucesCondimentsPage
