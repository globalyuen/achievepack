import React from 'react'
import { Package, Leaf, CheckCircle, Award, BoxSelect, Target, Shield, Calendar, Phone, Download, Mail, MessageCircle, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const FlatBottomBagsPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.flatBottomBags'
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              If you are a <strong>specialty coffee roaster</strong>, <strong>premium pet food brand</strong>, or <strong>artisan food producer</strong> looking for packaging that stands out on retail shelves with maximum branding real estate—flat bottom bags deliver premium presence.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-amber-800">Coffee Roasters</p>
                <p className="text-sm text-neutral-600">5-panel branding + degassing valve</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-amber-800">Pet Food Brands</p>
                <p className="text-sm text-neutral-600">Stable base for heavy products</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-amber-800">Premium Products</p>
                <p className="text-sm text-neutral-600">Box-like appearance for gift-worthy packaging</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'What is a Flat Bottom Bag?',
      icon: <BoxSelect className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>A flat bottom bag (also called box bottom pouch or block bottom bag) features a rectangular base that allows it to stand upright with maximum stability.</strong> This premium format offers superior shelf presence and capacity compared to standard stand-up pouches.
          </p>
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Key Benefits:</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ 5-panel construction for maximum branding surface</li>
              <li>✓ Stable, box-like shelf presence</li>
              <li>✓ Higher capacity than standard pouches</li>
              <li>✓ Premium appearance for specialty products</li>
              <li>✓ Available in compostable and recyclable materials</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'construction',
      title: 'Bag Construction',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Flat bottom bags are constructed with multiple panels that fold to create a rectangular base:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">5-Panel Design</h4>
              <ul className="text-sm space-y-1">
                <li>• Front panel – Main branding area</li>
                <li>• Back panel – Ingredients, instructions</li>
                <li>• 2 Side gussets – Additional branding space</li>
                <li>• Bottom panel – Stable base, can include print</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Closure Options</h4>
              <ul className="text-sm space-y-1">
                <li>• Resealable zipper (press-to-close or slider)</li>
                <li>• Tin tie closure</li>
                <li>• Degassing valve (for coffee)</li>
                <li>• Tear notch for easy opening</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Common Applications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Flat bottom bags are ideal for premium products that benefit from enhanced shelf presence:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            {['Specialty coffee', 'Premium tea', 'Pet food & treats', 'Protein powder', 'Granola & muesli', 'Dried fruits', 'Premium nuts', 'Rice & grains', 'Organic snacks', 'Artisan products', 'Superfoods', 'Gift packaging'].map((item, idx) => (
              <div key={idx} className="bg-primary-50 text-primary-800 px-3 py-2 rounded-lg text-sm text-center font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Material Options',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Compostable</h4>
              <p className="text-sm">Kraft paper + PLA. EN 13432 certified for industrial composting.</p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Recyclable</h4>
              <p className="text-sm">Mono-PE or paper-based structures for curbside recycling.</p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">High Barrier</h4>
              <p className="text-sm">Metallized or aluminum for maximum freshness protection.</p>
            </div>
          </div>
          
          {/* Material Options Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">Flat Bottom Bag Material Samples</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/pouch shape/flat-bottom.webp" 
                alt="Flat bottom bag structure showing box-like base" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Flat Bottom Structure"
              />
              <ClickableImage 
                src="/imgs/store/barrier/4-alu.webp" 
                alt="High barrier aluminum flat bottom bag" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Aluminum Barrier"
              />
              <ClickableImage 
                src="/imgs/store/eco-material/compostable.webp"
                alt="Kraft paper flat bottom bag eco-friendly" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Kraft Paper"
              />
              <ClickableImage 
                src="/imgs/store/closure/tin-tie.webp" 
                alt="Tin tie closure for coffee flat bottom bags" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Tin Tie Closure"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding Flat Bottom Bag Suppliers',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Best flat bottom bag supplier for specialty coffee?"</li>
              <li>• "Flat bottom vs stand-up pouch: which is better for coffee?"</li>
              <li>• "Custom box bottom bags with degassing valve low MOQ?"</li>
              <li>• "Compostable flat bottom coffee bags with 5-panel printing?"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: 'Is a Flat Bottom Bag Right for You?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-2">✅ Best Fit For...</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Premium products with retail presence</li>
                <li>• Brands needing maximum shelf impact</li>
                <li>• Coffee with degassing requirements</li>
                <li>• Heavy products needing stable base</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">⚠️ Also Works For...</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Gift packaging and seasonal products</li>
                <li>• Products transitioning from rigid packaging</li>
                <li>• Brands willing to invest in premium appearance</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">❌ Not Recommended If...</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Cost is the primary concern (15-25% premium)</li>
                <li>• Product doesn't benefit from shelf presence</li>
                <li>• <Link to="/packaging/stand-up-pouches" className="underline">Consider stand-up pouches for budget-friendly option →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Upgrade to Flat Bottom Bags?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-amber-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">Ready to Move Fast?</h4>
              <p className="text-sm opacity-90 mb-4">Book a call to discuss your exact specs</p>
              <button onClick={openCalendly} className="inline-block bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold hover:bg-amber-50 transition cursor-pointer">
                Book a Call
              </button>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Want to Test First?</h4>
              <p className="text-sm text-neutral-600 mb-4">Order flat bottom bag samples</p>
              <Link to="/store" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                Get Samples
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Still Exploring?</h4>
              <p className="text-sm text-neutral-600 mb-4">Compare with stand-up pouches</p>
              <Link to="/packaging/stand-up-pouches" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-amber-300 transition">
                Compare Options
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: 'Industry Applications',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">Specialty Coffee Roasters</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Premium flat bottom bags with 5-panel branding and degassing valves.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Single-origin coffees</li>
                <li>• Artisan roasters</li>
                <li>• Gift box packaging</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-neutral-900">Premium Pet Food Brands</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Heavy-duty flat bottom bags with stable base for larger kibble bags.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Premium dog food</li>
                <li>• Natural cat food</li>
                <li>• Grain-free formulas</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">Superfood & Protein Brands</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">High-barrier flat bottom bags for powder supplements with maximum shelf presence.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Protein powders</li>
                <li>• Superfood blends</li>
                <li>• Collagen peptides</li>
              </ul>
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">🏆 Customer Success: Mountain Peak Coffee Co.</h4>
            <p className="text-sm text-neutral-600 mb-3">Upgraded from stand-up pouches to flat bottom bags, increasing retail sell-through by 40% and premium price positioning with 5-panel branding.</p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="bg-white px-3 py-1 rounded-full border">✓ 40% Sales Increase</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ Premium Positioning</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ 5-Panel Branding</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: 'Market Data & Intelligence',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">$12B</div>
              <div className="text-sm opacity-90">Coffee Packaging 2027</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">25%</div>
              <div className="text-sm opacity-90">Premium Price Lift</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm opacity-90">Printable Panels</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">20%</div>
              <div className="text-sm opacity-90">More Volume vs SUP</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">Flat Bottom vs Stand-Up Pouch Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-2 font-medium">Feature</th>
                    <th className="text-center py-2 font-medium">Flat Bottom</th>
                    <th className="text-center py-2 font-medium">Stand-Up Pouch</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Printable Panels</td>
                    <td className="text-center py-2">5 panels</td>
                    <td className="text-center py-2">2-3 panels</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Shelf Stability</td>
                    <td className="text-center py-2">⭐⭐⭐⭐⭐</td>
                    <td className="text-center py-2">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Volume for Footprint</td>
                    <td className="text-center py-2">+15-20%</td>
                    <td className="text-center py-2">Baseline</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Price Premium</td>
                    <td className="text-center py-2">+15-25%</td>
                    <td className="text-center py-2">Baseline</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">🌍 Environmental Impact</h4>
            <p className="text-sm text-green-700">Flat bottom bags use 60% less material than rigid containers while providing premium presentation. Compostable options available for eco-conscious brands.</p>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: 'Material Comparison',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-center p-3 font-semibold text-green-700">Kraft Compostable</th>
                  <th className="text-center p-3 font-semibold text-blue-700">Paper-Based</th>
                  <th className="text-center p-3 font-semibold text-purple-700">High-Barrier</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Best For</td>
                  <td className="text-center p-3">✅ Premium coffee</td>
                  <td className="text-center p-3">✅ Dry goods, rice</td>
                  <td className="text-center p-3">✅ Max freshness</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Barrier Level</td>
                  <td className="text-center p-3">Medium-High</td>
                  <td className="text-center p-3">Medium</td>
                  <td className="text-center p-3">Very High</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Shelf Life</td>
                  <td className="text-center p-3">6-12 months</td>
                  <td className="text-center p-3">6-9 months</td>
                  <td className="text-center p-3">18-24 months</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Premium Look</td>
                  <td className="text-center p-3">⭐⭐⭐⭐⭐</td>
                  <td className="text-center p-3">⭐⭐⭐⭐</td>
                  <td className="text-center p-3">⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">End-of-Life</td>
                  <td className="text-center p-3">🌱 Compostable</td>
                  <td className="text-center p-3">♻️ Recyclable</td>
                  <td className="text-center p-3">🗑️ Landfill</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Price Point</td>
                  <td className="text-center p-3">💰💰💰</td>
                  <td className="text-center p-3">💰💰</td>
                  <td className="text-center p-3">💰💰💰</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">💡 Decision Guide for Flat Bottom Bags</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-amber-900">Choose Kraft Compostable if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Premium coffee brand</li>
                  <li>• Eco-conscious market</li>
                  <li>• Natural look desired</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose Paper-Based if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Dry goods, grains</li>
                  <li>• Cost optimization</li>
                  <li>• Recyclable preference</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose High-Barrier if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Maximum shelf life</li>
                  <li>• Sensitive products</li>
                  <li>• Long distribution chains</li>
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
      question: "What is the difference between flat bottom and stand-up pouches?",
      answer: "Flat bottom bags have a rectangular base with 5 printable panels, offering more stability and capacity. Stand-up pouches have an oval gusset with 2-3 panels. Flat bottom bags provide approximately 15-20% more volume for the same footprint."
    },
    {
      question: "Are flat bottom bags more expensive?",
      answer: "Yes, flat bottom bags typically cost 15-25% more than stand-up pouches due to more complex construction. However, they offer premium shelf presence and additional branding real estate that often justifies the investment for specialty products."
    },
    {
      question: "What sizes are available for flat bottom bags?",
      answer: "We offer flat bottom bags from 100g capacity up to 5kg. Common sizes include 250g, 500g, 1kg, and 2kg. Custom sizes are available for orders over 5,000 units."
    },
    {
      question: "Can flat bottom bags have a degassing valve?",
      answer: "Yes, we offer one-way degassing valves for coffee and other products that release CO2. The valve can be placed on any panel but is typically on the back for aesthetic reasons."
    }
  ]

  const tables = [
    {
      title: "Flat Bottom Bag Size Guide",
      data: {
        headers: ["Capacity", "Dimensions (W×H×G)", "Recommended For"],
        rows: [
          ["250g", "120 × 200 × 80mm", "Premium tea, specialty coffee"],
          ["500g", "140 × 240 × 90mm", "Coffee beans, granola"],
          ["1kg", "160 × 280 × 100mm", "Pet food, protein powder"],
          ["2kg", "200 × 350 × 120mm", "Bulk pet food, rice"],
          ["5kg", "280 × 450 × 150mm", "Large format pet food"]
        ]
      }
    }
  ]

  const relatedLinks = [
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "More economical alternative" },
    { title: "Coffee & Tea Packaging", url: "/industry/coffee-tea", description: "Specialty coffee solutions" },
    { title: "Compostable Materials", url: "/materials/compostable", description: "Eco-friendly options" }
  ]

  return (
    <SEOPageLayout
      title="Flat Bottom Bags | Box Bottom Pouches | Block Bottom Packaging"
      description="Custom flat bottom bags (box bottom pouches) for coffee, pet food, and premium products. 5-panel printing, stable base. Compostable & recyclable options. MOQ 500."
      keywords={[
        'flat bottom bag',
        'box bottom pouch',
        'block bottom bag',
        'coffee bag flat bottom',
        'premium pouch packaging',
        'flat bottom coffee bag',
        'box pouch',
        '5 panel pouch'
      ]}
      canonicalUrl="https://achievepack.com/packaging/flat-bottom-bags"
      heroTitle={t('seoPages.pages.flatBottomBags.heroTitle')}
      heroSubtitle={t('seoPages.pages.flatBottomBags.heroSubtitle')}
      heroImage="/imgs/pouch-shape/a_flat_bottom_pouch_isolated_7901973.webp"
      heroImageAlt="Flat bottom bag box pouch packaging"
      introSummary={t('seoPages.pages.flatBottomBags.introSummary')}
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

export default FlatBottomBagsPage
