import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Coffee, Package, Award, CheckCircle, Shield, Clock, Leaf, MessageCircle, Target, Calendar, ShoppingCart, ChevronDown } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CoffeeBagsDegassingValvePage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'overview',
      title: 'Coffee Bags with Degassing Valves',
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack's coffee bags with degassing valves</strong> are designed specifically for freshly roasted coffee. Our one-way valves release CO₂ while preventing oxygen ingress, keeping your coffee fresh and flavorful.
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">Why Degassing Valves Matter:</h4>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>• <strong>Freshly roasted beans release CO₂</strong> for 24-72 hours after roasting</li>
              <li>• <strong>One-way valve releases gas</strong> without letting oxygen in</li>
              <li>• <strong>Pack immediately after roasting</strong> – no need to wait</li>
              <li>• <strong>Extend shelf life</strong> up to 12 months with proper barrier</li>
              <li>• <strong>Prevent bag bloating</strong> from built-up CO₂</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/reclose/ads/a_valve_closure_detail_6401844.webp" 
              alt="Coffee bag degassing valve closeup" 
              className="w-full rounded-lg shadow-md"
              caption="One-way degassing valve for freshly roasted coffee"
            />
          </div>
        </div>
      )
    },
    {
      id: 'valve-types',
      title: 'Degassing Valve Options',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>We offer multiple valve options to suit your needs:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">Standard Degassing Valve</h4>
              <p className="text-sm mb-2">Classic one-way valve for conventional pouches.</p>
              <ul className="text-xs space-y-1 text-amber-700">
                <li>• Plastic or foil construction</li>
                <li>• Reliable CO₂ release</li>
                <li>• Works with all bag materials</li>
                <li>• Most cost-effective option</li>
              </ul>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50/50">
              <h4 className="font-semibold text-green-800 mb-2">Compostable Degassing Valve</h4>
              <p className="text-sm mb-2">Fully compostable valve for eco-friendly packaging.</p>
              <ul className="text-xs space-y-1 text-green-700">
                <li>• Made from PLA/plant-based materials</li>
                <li>• Maintains compostability certification</li>
                <li>• Same performance as standard</li>
                <li>• ASTM D6400 compatible</li>
              </ul>
              <Link to="/products/compostable-coffee-bags" className="text-xs text-primary-600 hover:underline mt-2 inline-block">View compostable bags →</Link>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">Low-Profile Valve</h4>
              <p className="text-sm mb-2">Minimal visual impact, maximum function.</p>
              <ul className="text-xs space-y-1 text-blue-700">
                <li>• Sits flush with bag surface</li>
                <li>• Clean aesthetic for premium brands</li>
                <li>• Same CO₂ release performance</li>
                <li>• Ideal for minimalist packaging</li>
              </ul>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50">
              <h4 className="font-semibold text-purple-800 mb-2">Aroma Valve</h4>
              <p className="text-sm mb-2">Allows consumers to smell the coffee.</p>
              <ul className="text-xs space-y-1 text-purple-700">
                <li>• Press to release aroma</li>
                <li>• Great for retail settings</li>
                <li>• Interactive consumer experience</li>
                <li>• Premium positioning</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Coffee Bag Material Options',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Choose the right material for your coffee packaging:</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Material</th>
                  <th className="p-3 text-left">Barrier</th>
                  <th className="p-3 text-left">Shelf Life</th>
                  <th className="p-3 text-left">Sustainability</th>
                  <th className="p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Kraft + VMPET</td>
                  <td className="p-3">High</td>
                  <td className="p-3">12+ months</td>
                  <td className="p-3">Conventional</td>
                  <td className="p-3">Classic artisan look</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">Kraft + PLA/PBAT</td>
                  <td className="p-3">Medium</td>
                  <td className="p-3">3-6 months</td>
                  <td className="p-3">Compostable ♻️</td>
                  <td className="p-3">Fresh roast, DTC</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">Mono-PE + EVOH</td>
                  <td className="p-3">High</td>
                  <td className="p-3">12+ months</td>
                  <td className="p-3">Recyclable ♻️</td>
                  <td className="p-3">Retail, grocery</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">Matte Black + Foil</td>
                  <td className="p-3">Highest</td>
                  <td className="p-3">18+ months</td>
                  <td className="p-3">Premium</td>
                  <td className="p-3">Specialty, single-origin</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Link to="/materials/compostable" className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200">Compostable Options</Link>
            <Link to="/products/recyclable-mono-material-pouches" className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200">Recyclable Options</Link>
            <Link to="/features/barrier-options" className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200">Barrier Guide</Link>
          </div>
        </div>
      )
    },
    {
      id: 'bag-styles',
      title: 'Coffee Bag Styles with Valves',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Degassing valves can be added to all our coffee bag styles:</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <Link to="/packaging/stand-up-pouches" className="block bg-neutral-50 p-4 rounded-lg border border-neutral-200 hover:shadow-md transition text-center">
              <span className="text-3xl mb-2 block">📦</span>
              <h4 className="font-semibold text-neutral-800">Stand-Up Pouches</h4>
              <p className="text-xs mt-1 text-neutral-600">Most popular for retail</p>
            </Link>
            <Link to="/packaging/flat-bottom-bags" className="block bg-neutral-50 p-4 rounded-lg border border-neutral-200 hover:shadow-md transition text-center">
              <span className="text-3xl mb-2 block">🧱</span>
              <h4 className="font-semibold text-neutral-800">Flat Bottom Bags</h4>
              <p className="text-xs mt-1 text-neutral-600">Premium shelf presence</p>
            </Link>
            <Link to="/packaging/side-gusset-bags" className="block bg-neutral-50 p-4 rounded-lg border border-neutral-200 hover:shadow-md transition text-center">
              <span className="text-3xl mb-2 block">📐</span>
              <h4 className="font-semibold text-neutral-800">Side Gusset Bags</h4>
              <p className="text-xs mt-1 text-neutral-600">Classic coffee bag style</p>
            </Link>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">Valve Placement Options:</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• <strong>Front center:</strong> Most visible, standard placement</li>
              <li>• <strong>Back panel:</strong> Clean front for branding</li>
              <li>• <strong>Top gusset:</strong> For flat bottom bags</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Additional Coffee Bag Features',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-neutral-50 p-4 rounded-lg">
              <span className="text-2xl">🔒</span>
              <div>
                <h4 className="font-semibold text-neutral-800">Resealable Zipper</h4>
                <p className="text-sm text-neutral-600">Press-to-close zipper keeps coffee fresh after opening.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-neutral-50 p-4 rounded-lg">
              <span className="text-2xl">🪟</span>
              <div>
                <h4 className="font-semibold text-neutral-800">Clear Window</h4>
                <p className="text-sm text-neutral-600">Show off your beans with a viewing window.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-neutral-50 p-4 rounded-lg">
              <span className="text-2xl">✂️</span>
              <div>
                <h4 className="font-semibold text-neutral-800">Tear Notch</h4>
                <p className="text-sm text-neutral-600">Easy opening for consumer convenience.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-neutral-50 p-4 rounded-lg">
              <span className="text-2xl">🕳️</span>
              <div>
                <h4 className="font-semibold text-neutral-800">Hang Hole</h4>
                <p className="text-sm text-neutral-600">For retail display on pegs.</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/features/reclosure-options" className="text-primary-600 hover:underline">View all closure & feature options →</Link>
          </p>

          {/* Coffee Bag Features Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">Coffee Bag Closure & Valve Options</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/reclose/ads/a_valve_closure_detail_6401844.webp" 
                alt="Coffee bag degassing valve closeup showing one-way release" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Degassing Valve"
              />
              <ClickableImage 
                src="/imgs/reclose/ads/a_tintie_coffee_pouch_correct_4114906.webp" 
                alt="Tin tie coffee pouch closure option" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Tin Tie Closure"
              />
              <ClickableImage 
                src="/imgs/reclose/ads/a_reclosure_options_kv_product_photo_7983949.webp" 
                alt="Various reclosure options for coffee packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Reclosure Options"
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp" 
                alt="Coffee roastery using degassing valve bags" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Roastery Use Case"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'moq',
      title: 'Ordering Information',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">100</div>
              <div className="text-sm text-green-600 font-medium">Minimum Order</div>
              <p className="text-xs mt-2 text-neutral-600">Digital printed with valve</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">7-10</div>
              <div className="text-sm text-blue-600 font-medium">Days Production</div>
              <p className="text-xs mt-2 text-neutral-600">Including valve application</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-1">$0.08</div>
              <div className="text-sm text-purple-600 font-medium">Valve Add-On</div>
              <p className="text-xs mt-2 text-neutral-600">Per bag (volume pricing)</p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">Complete Coffee Bag Pricing:</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• <strong>250g bag + valve + zipper:</strong> from $0.65/bag (1,000+ qty)</li>
              <li>• <strong>500g bag + valve + zipper:</strong> from $0.85/bag (1,000+ qty)</li>
              <li>• <strong>1kg bag + valve + zipper:</strong> from $1.10/bag (1,000+ qty)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">What is a degassing valve and why do coffee bags need one?</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">A degassing valve is a one-way valve that allows CO₂ to escape from the bag while preventing oxygen from entering. Freshly roasted coffee releases CO₂ for 24-72 hours after roasting. Without a valve, the bag would bloat or burst, and you'd have to wait days before packaging. The valve lets you pack immediately after roasting while maintaining freshness.</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">Are compostable degassing valves available?</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">Yes! We offer fully compostable degassing valves made from PLA and other plant-based materials. These maintain ASTM D6400 and EN 13432 certification when used with our compostable coffee bag materials, ensuring the entire package can be industrially composted.</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">How long will my coffee stay fresh with a degassing valve?</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">Shelf life depends on the barrier level of your packaging material. With high-barrier materials (like Kraft + VMPET or Mono-PE + EVOH), properly packaged coffee with a degassing valve can stay fresh for 12+ months. Medium-barrier compostable options typically provide 3-6 months freshness.</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">What is the minimum order for coffee bags with valves?</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">Our minimum order is just 100 pieces for digital printed coffee bags with degassing valves. This makes it perfect for small-batch roasters, sample runs, or testing new packaging designs before scaling up.</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">Can I choose where the valve is placed on my bag?</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">Yes, we offer multiple valve placement options: front center (most visible), back panel (keeps front clean for branding), or top gusset (for flat bottom bags). We'll work with you to determine the best placement for your bag style and design.</div>
          </details>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Order Coffee Bags with Degassing Valves',
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-4">Ready to package your fresh roast?</h4>
          <p className="text-neutral-700 mb-6">
            Get a custom quote for coffee bags with degassing valves. We'll help you choose the right material, size, and valve type.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              Free Consultation
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              Shop Coffee Bags
            </Link>
          </div>
          
          <div className="mt-6 pt-4 border-t border-amber-200">
            <p className="text-sm text-neutral-600">
              <strong>Related:</strong>{' '}
              <Link to="/products/compostable-coffee-bags" className="text-primary-600 hover:underline">Compostable Coffee Bags</Link> |{' '}
              <Link to="/industry/coffee-tea" className="text-primary-600 hover:underline">Coffee Industry Solutions</Link> |{' '}
              <Link to="/case-studies/coffee-roastery" className="text-primary-600 hover:underline">Coffee Roastery Case Study</Link>
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <Helmet>
        <title>Coffee Bags with Degassing Valves | One-Way Valve | Fresh Roast | Achieve Pack</title>
        <meta name="description" content="Coffee bags with degassing valves keep fresh roasted beans fresh. One-way valve releases CO₂. Compostable and recyclable options. Low MOQ from 100 pieces." />
        <link rel="canonical" href="https://achievepack.com/products/coffee-bags-degassing-valve" />
        <meta property="og:title" content="Coffee Bags with Degassing Valves | Achieve Pack" />
        <meta property="og:description" content="Keep fresh roasted coffee fresh with one-way degassing valves. Low MOQ from 100 pieces." />
        <meta property="og:url" content="https://achievepack.com/products/coffee-bags-degassing-valve" />
        <meta name="keywords" content="coffee bags degassing valve, one-way valve coffee bags, fresh roast packaging, coffee bag valve, compostable coffee bags valve, specialty coffee packaging, roaster packaging, coffee pouch valve" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Coffee Bags with Degassing Valves",
            "description": "Premium coffee bags with one-way degassing valves for freshly roasted coffee. Available in compostable, recyclable, and conventional materials.",
            "brand": { "@type": "Brand", "name": "Achieve Pack" },
            "category": "Coffee Packaging",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "0.65",
              "highPrice": "1.50",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Coffee Bags with Degassing Valves | Fresh Roast Protection | Achieve Pack"
        description="Premium coffee bags with one-way degassing valves. Protect freshly roasted coffee with CO2 release. Available in compostable and recyclable options."
        keywords={['coffee bags with degassing valves', 'one-way valve coffee bags', 'fresh roast coffee packaging', 'coffee degassing valve', 'specialty coffee bags']}
        heroTitle="Coffee Bags with Degassing Valves"
        heroSubtitle="One-Way Valve | Fresh Roast Protection | Compostable & Recyclable Options"
        introSummary="Professional coffee bags featuring integrated one-way degassing valves that release CO2 while preventing oxygen entry. Available in compostable and recyclable materials from 100 pieces MOQ."
        sections={sections}
        heroImage="/imgs/reclose/ads/a_valve_closure_detail_6401844.webp"
      />
    </>
  )
}

export default CoffeeBagsDegassingValvePage
