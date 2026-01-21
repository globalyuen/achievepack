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
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              If you are a <strong>baby food brand</strong>, <strong>sauce manufacturer</strong>, or <strong>beverage company</strong> looking for packaging that pours like a bottle but costs less and ships lighter—spout pouches are your solution.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-blue-800">Baby Food Brands</p>
                <p className="text-sm text-neutral-600">Safe, portable, easy dispensing for infants</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-blue-800">Sauce & Condiment Makers</p>
                <p className="text-sm text-neutral-600">Hot-fill capable, mess-free pouring</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-blue-800">Beverage Companies</p>
                <p className="text-sm text-neutral-600">70% less plastic than rigid bottles</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'What is a Spout Pouch?',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>A spout pouch is a flexible stand-up pouch with a built-in pour spout and cap, designed for liquids, semi-liquids, and viscous products.</strong> This format combines the cost efficiency of flexible packaging with the functionality of rigid containers.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">Key Advantages:</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ Easy dispensing with reclosable cap</li>
              <li>✓ Uses 70% less plastic than rigid bottles</li>
              <li>✓ Self-standing for retail display</li>
              <li>✓ Lightweight, reduced shipping costs</li>
              <li>✓ High-barrier options available</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Common Applications',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Spout pouches are ideal for pourable products across many industries:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-2">Baby Food</h4>
              <ul className="text-sm space-y-1 text-pink-700">
                <li>• Fruit purées</li>
                <li>• Vegetable blends</li>
                <li>• Yogurt smoothies</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Sauces & Condiments</h4>
              <ul className="text-sm space-y-1 text-red-700">
                <li>• Ketchup & mayo</li>
                <li>• Hot sauce</li>
                <li>• Dressings</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Beverages</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• Smoothie packs</li>
                <li>• Cold brew coffee</li>
                <li>• Cocktail mixes</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Oils & Spreads</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• Cooking oils</li>
                <li>• Honey & syrups</li>
                <li>• Ghee</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Pet Food</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• Wet food toppers</li>
                <li>• Gravy & broths</li>
                <li>• Pet supplements</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Non-Food</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                <li>• Laundry detergent</li>
                <li>• Hand soap refills</li>
                <li>• Cleaning products</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spout-options',
      title: 'Spout & Cap Options',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Spout Sizes</h4>
              <ul className="text-sm space-y-1">
                <li>• <strong>8.6mm</strong> – Standard for liquids</li>
                <li>• <strong>10mm</strong> – Thicker liquids, purees</li>
                <li>• <strong>15mm</strong> – Viscous products</li>
                <li>• <strong>22mm</strong> – High viscosity, pastes</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Cap Features</h4>
              <ul className="text-sm space-y-1">
                <li>• Standard screw cap</li>
                <li>• Flip-top dispensing cap</li>
                <li>• Child-resistant (baby food)</li>
                <li>• Tamper-evident bands</li>
              </ul>
            </div>
          </div>
          
          {/* Spout Pouch Examples Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">Spout Pouch Options</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/closure/spout.webp" 
                alt="Spout cap for liquid and beverage packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Spout Cap"
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_spout_pouch_isolated_6857112.webp" 
                alt="Spout pouch for baby food and beverages" 
                className="w-full h-28 object-contain rounded-lg bg-neutral-50"
                caption="Spout Pouch"
              />
              <ClickableImage 
                src="/imgs/store/barrier/3-foil.webp" 
                alt="High barrier aluminum spout pouch" 
                className="w-full h-28 object-cover rounded-lg"
                caption="High Barrier"
              />
              <ClickableImage 
                src="/imgs/store/surface/glossy.webp" 
                alt="Glossy finish for premium spout pouches" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Glossy Finish"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'eco-materials',
      title: 'Eco-Friendly Material Options',
      icon: <Package className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Spout pouches can be produced with sustainable materials</strong> that reduce environmental impact without compromising on liquid barrier performance.
          </p>
          
          {/* Kraft-Look Explanation */}
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 mb-6">
            <h4 className="font-semibold text-amber-800 mb-2">🌾 What is "Kraft-Look"?</h4>
            <p className="text-amber-900">
              <strong>Kraft-look is a digital printed kraft pattern with matte coating</strong> applied to the pouch surface. It gives you the natural, premium appearance and tactile feel of kraft paper, while being <strong>100% waterproof</strong> — essential for liquid products.
            </p>
            <p className="text-sm text-amber-700 mt-2">
              Real kraft paper would absorb moisture, but our kraft-look finish delivers the aesthetic without compromising liquid barrier performance.
            </p>
          </div>
          
          {/* Important Clarification */}
          <div className="bg-blue-50 border-2 border-blue-200 p-5 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-3">ℹ️ Important: Understanding "Eco" Materials</h4>
            <p className="text-blue-900 mb-4">
              <strong>Bio-PE and PCR pouches are NOT biodegradable or compostable.</strong> They are traditional plastic at end-of-life. However, they are eco-friendly at the <strong>START</strong> of their lifecycle:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-100 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">Bio-PE (30-50% Bio-Based)</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Made from sugarcane polyethylene</li>
                  <li>• Renewable, sustainable source</li>
                  <li>• Reduces fossil fuel dependency</li>
                  <li>• Fully recyclable in PE streams</li>
                </ul>
                <Link to="/materials/bio-pe" className="text-xs text-green-600 hover:underline mt-2 inline-block">Learn more →</Link>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">PCR (30% Recycled Content)</h5>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Contains post-consumer recycled plastic</li>
                  <li>• Reduces virgin plastic demand</li>
                  <li>• GRS certified available</li>
                  <li>• Fully recyclable in PE streams</li>
                </ul>
                <Link to="/materials/pcr" className="text-xs text-purple-600 hover:underline mt-2 inline-block">Learn more →</Link>
              </div>
            </div>
            
            <p className="text-sm text-blue-700 mt-4">
              <strong>Need truly compostable?</strong> <Link to="/materials/compostable" className="underline">See our compostable options →</Link> (note: compostable spout pouches have limited availability)
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: 'Technical Specifications',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>Material:</strong> PET/AL/PE, PET/PE, or specialized structures</li>
              <li>✓ <strong>Capacity range:</strong> 50ml to 2L</li>
              <li>✓ <strong>Spout position:</strong> Top center, corner, or side</li>
              <li>✓ <strong>Hot-fill capable:</strong> Up to 85°C</li>
              <li>✓ <strong>Retort capable:</strong> Special structures for 121°C</li>
              <li>✓ <strong>FDA/EU compliant</strong> for food contact</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Spout Pouch Supplier',
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
      title: 'Is a Spout Pouch Right for You?',
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
      title: 'Ready to Launch with Spout Pouches?',
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
      title: '行業應用場景 Industry Applications',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-5 rounded-xl border border-pink-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-pink-600" />
                <h4 className="font-semibold text-neutral-900">Baby Food Brands</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Safe, portable spout pouches with child-safe caps for infant nutrition.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Fruit & vegetable purées</li>
                <li>• Yogurt smoothies</li>
                <li>• Toddler meals</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-5 rounded-xl border border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-neutral-900">Sauce & Condiment Makers</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Hot-fill capable spout pouches for sauces, dressings, and condiments.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Ketchup & mayonnaise</li>
                <li>• Hot sauces</li>
                <li>• Salad dressings</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">Eco-Conscious Brands</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Refill pouches using 70% less plastic than rigid bottles.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Bottle refill systems</li>
                <li>• Cleaning products</li>
                <li>• Personal care refills</li>
              </ul>
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">🏆 Customer Success: Little Sprouts Baby Food</h4>
            <p className="text-sm text-neutral-600 mb-3">Launched organic baby food line with our BPA-free spout pouches, achieving Clean Label certification and 200% growth in first year.</p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="bg-white px-3 py-1 rounded-full border">✓ Clean Label Certified</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ 200% YoY Growth</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ 70% Less Plastic</span>
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
              <div className="text-3xl font-bold">$3.8B</div>
              <div className="text-sm opacity-90">Spout Pouch Market 2027</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">8.5%</div>
              <div className="text-sm opacity-90">CAGR 2024-2027</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">70%</div>
              <div className="text-sm opacity-90">Less Plastic vs Bottles</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">60%</div>
              <div className="text-sm opacity-90">Shipping Cost Savings</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">Spout Pouch vs Rigid Bottle Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-2 font-medium">Feature</th>
                    <th className="text-center py-2 font-medium">Spout Pouch</th>
                    <th className="text-center py-2 font-medium">Rigid Bottle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Plastic Usage</td>
                    <td className="text-center py-2">70% less</td>
                    <td className="text-center py-2">Baseline</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Shipping Weight</td>
                    <td className="text-center py-2">60% lighter</td>
                    <td className="text-center py-2">Baseline</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Storage Efficiency</td>
                    <td className="text-center py-2">Flat before fill</td>
                    <td className="text-center py-2">Same volume</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Carbon Footprint</td>
                    <td className="text-center py-2">50% lower</td>
                    <td className="text-center py-2">Baseline</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">🌍 Environmental Impact</h4>
            <p className="text-sm text-green-700">Spout pouches use 70% less plastic than rigid bottles, ship flat to reduce transportation emissions, and can be produced with Bio-PE or PCR content for enhanced sustainability.</p>
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
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">💡 Decision Guide for Spout Pouches</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-amber-900">Choose Standard if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Cost optimization</li>
                  <li>• Retort processing</li>
                  <li>• Maximum barrier</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose Bio-PE if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Eco-conscious brand</li>
                  <li>• Renewable sourcing</li>
                  <li>• Premium positioning</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose PCR if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Corporate ESG</li>
                  <li>• Circular economy</li>
                  <li>• Cost-effective eco</li>
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
      question: "What products are spout pouches used for?",
      answer: "Spout pouches are ideal for liquids, semi-liquids, and viscous products including baby food purées, sauces, condiments, beverages, smoothie packs, cooking oils, honey, soups, and pet food toppers. They're also popular for non-food applications like detergent refills."
    },
    {
      question: "Are spout pouches recyclable?",
      answer: "Standard multi-material spout pouches are challenging to recycle in most municipal systems. However, we offer mono-PE spout pouches that are recyclable in PE recycling streams. The cap should be removed before recycling."
    },
    {
      question: "Can spout pouches be used for hot products?",
      answer: "Yes, we offer hot-fill spout pouches suitable for filling at up to 85°C. For sterilized, shelf-stable products, we provide retort-capable pouches that withstand 121°C processing."
    },
    {
      question: "What is the minimum order for spout pouches?",
      answer: "Our minimum order for custom printed spout pouches is 1,000 units. For plain pouches with standard caps, we can offer smaller quantities of 500 units."
    }
  ]

  const tables = [
    {
      title: "Spout Pouch Size Guide",
      data: {
        headers: ["Capacity", "Dimensions", "Typical Use"],
        rows: [
          ["90-100ml", "100 × 150mm", "Baby food single serve"],
          ["150ml", "110 × 170mm", "Baby food, smoothie"],
          ["250ml", "130 × 200mm", "Sauces, beverages"],
          ["500ml", "160 × 250mm", "Cooking oil, refills"],
          ["1L", "200 × 300mm", "Large format refills"],
          ["2L", "250 × 350mm", "Bulk refills, foodservice"]
        ]
      }
    }
  ]

  const relatedLinks = [
    { title: "Shop Spout Pouches", url: "/store", description: "Browse liquid packaging - MOQ from 500 pieces" },
    { title: "Baby Food Packaging", url: "/industry/baby-food", description: "Safe packaging for infant nutrition" },
    { title: "Sauces & Condiments", url: "/industry/sauces-condiments", description: "Liquid food packaging solutions" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Alternative for dry products" },
    { title: "Sustainable Packaging Guide", url: "/blog/sustainable-packaging-supplier-analysis", description: "Compare eco-friendly suppliers" }
  ]

  return (
    <SEOPageLayout
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
