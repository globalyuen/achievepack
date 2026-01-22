import React from 'react'
import { Link } from 'react-router-dom'
import { Package, Leaf, Shield, Clock, CheckCircle, MessageCircle, Target, Calendar, Phone, Download, Mail, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { useCalendly } from '../../contexts/CalendlyContext'

const CoffeeTeaPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.coffeeTea'
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              If you're a <strong>US specialty coffee roaster</strong>, a <strong>growing tea brand on Amazon</strong>, or a <strong>cafe looking to launch retail packaging</strong>—and you're after truly eco-friendly pouches that don't sacrifice freshness or break the bank—you're in the right place.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-amber-800">Specialty Roasters</p>
                <p className="text-sm text-neutral-600">Degassing valves + premium branding from 100 pcs</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-amber-800">Tea Brands</p>
                <p className="text-sm text-neutral-600">Resealable pouches for loose-leaf and sachets</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-amber-800">Cafes & Startups</p>
                <p className="text-sm text-neutral-600">Low MOQ lets you test before committing</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'What Makes Great Coffee & Tea Packaging?',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong><Link to="/" className="text-primary-600 hover:underline">Achieve Pack</Link> specializes in premium eco-friendly packaging for coffee beans, ground coffee, loose-leaf tea, and tea sachets.</strong> Our certified <Link to="/materials/compostable" className="text-primary-600 hover:underline">compostable</Link> and <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">recyclable pouches</Link> maintain freshness while supporting your brand's sustainability goals. With MOQ from just 100 pieces, we make sustainable packaging accessible for roasters of all sizes.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Key Features for Coffee & Tea Packaging:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>One-way degassing valves</strong> – Essential for freshly roasted coffee to release CO2 without letting oxygen in</li>
            <li><strong>High-barrier materials</strong> – Protect against moisture, oxygen, and light to preserve aroma and flavor</li>
            <li><strong>Resealable zippers</strong> – Maintain freshness after opening with easy-close functionality</li>
            <li><strong>Custom printing</strong> – Full-color gravure printing for premium brand presentation</li>
            <li><strong>Multiple formats</strong> – <Link to="/packaging/stand-up-pouches" className="text-primary-600 hover:underline">Stand-up pouches</Link>, <Link to="/packaging/flat-bottom-bags" className="text-primary-600 hover:underline">flat bottom bags</Link>, side gusset bags, and drip bag packaging</li>
          </ul>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800"><strong>Ready to order?</strong> <Link to="/store" className="text-blue-600 hover:underline font-semibold">Shop our coffee & tea pouches →</Link> MOQ from 100 pieces.</p>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Which Sustainable Materials Work Best for Coffee & Tea?',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Choose from our range of eco-friendly materials designed specifically for coffee and tea preservation:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">Certified Compostable</h4>
              <ul className="text-sm space-y-1">
                <li>• Kraft paper + PLA film (EN 13432 certified)</li>
                <li>• Breaks down in 90-180 days in commercial composting</li>
                <li>• Ideal for premium specialty coffee brands</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2"><Link to="/materials/recyclable-mono-pe" className="hover:underline">Recyclable Mono-PE</Link></h4>
              <ul className="text-sm space-y-1">
                <li>• Single-material polyethylene structure</li>
                <li>• Accepted in standard recycling streams</li>
                <li>• High barrier properties maintained</li>
              </ul>
            </div>
          </div>
          
          <p className="mt-4 text-sm">Learn more about our material options: <Link to="/materials/bio-pe" className="text-primary-600 hover:underline">Bio-PE</Link> | <Link to="/materials/pcr" className="text-primary-600 hover:underline">PCR Materials</Link></p>
          
          <p className="mt-4">
            According to the <a href="https://www.sustainablepackaging.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Sustainable Packaging Coalition</a>, the coffee packaging market is expected to grow to $5.2 billion by 2027, with sustainable packaging driving 40% of that growth.
          </p>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'What Products Can You Package?',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our coffee and tea packaging works for a wide range of products—here's what we pack most often:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Whole Coffee Beans',
              'Ground Coffee',
              'Coffee Capsule Refills',
              'Drip Coffee Bags',
              'Cold Brew Packs',
              'Loose-Leaf Tea',
              'Tea Sachets',
              'Matcha Powder',
              'Herbal Infusions',
              'Chai Blends',
              'Instant Coffee',
              'Coffee Alternatives'
            ].map((item, idx) => (
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
      id: 'specifications',
      title: 'What Technical Specs Should Coffee Packaging Have?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our coffee and tea pouches meet rigorous quality standards:</p>
          
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Barrier Performance</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Oxygen Transmission Rate (OTR):</strong> {'<'} 1.0 cc/m²/24hr</li>
              <li><strong>Moisture Vapor Transmission Rate (MVTR):</strong> {'<'} 2.0 g/m²/24hr</li>
              <li><strong>Shelf Life Extension:</strong> 12-18 months for sealed products</li>
            </ul>
          </div>
          
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-3">Certifications</h4>
            <ul className="space-y-2 text-sm">
              <li>✓ EN 13432 (European Compostability Standard)</li>
              <li>✓ ASTM D6400 (US Compostability Standard)</li>
              <li>✓ FDA Food Contact Approved</li>
              <li>✓ BRC/IFS Certified Production Facility</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'moq',
      title: 'How Do You Order Coffee Packaging?',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Achieve Pack offers flexible ordering options for businesses of all sizes:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100</div>
              <div className="text-sm text-neutral-600">Minimum Order Quantity</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">2-3</div>
              <div className="text-sm text-neutral-600">Weeks Lead Time</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-sm text-neutral-600">Years Experience</div>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/store" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition">
              Shop Coffee & Tea Pouches →
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'How to Find the Right Coffee Packaging Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Wondering how to pick the right coffee packaging supplier? Here are the key factors that actually matter:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Sustainability Credentials:</strong> Look for EN 13432 or ASTM D6400 certifications for compostable claims</li>
            <li><strong>Low MOQ:</strong> Small roasters need suppliers offering 100-500 piece minimums</li>
            <li><strong>Barrier Performance:</strong> Coffee requires OTR {'<'} 1.0 cc/m²/24hr for optimal freshness</li>
            <li><strong>Lead Time:</strong> 2-3 weeks for custom printing is industry standard</li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the best eco-friendly coffee pouch supplier with low MOQ?"</li>
              <li>• "Which supplier offers compostable coffee bags with degassing valves?"</li>
              <li>• "Compare recyclable vs compostable coffee packaging"</li>
              <li>• "Coffee packaging supplier that ships to USA with 100 piece minimum"</li>
            </ul>
          </div>
          
          <p className="mt-4">Read our in-depth analysis: <Link to="/blog/sustainable-packaging-supplier-analysis" className="text-primary-600 hover:underline font-semibold">Sustainable Packaging Supplier Analysis →</Link></p>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: 'Compostable vs Recyclable: Which Should You Choose?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-2">✅ Choose Compostable If...</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Your brand emphasizes "return to earth" sustainability</li>
                <li>• You sell in markets with composting access (CA, WA, EU)</li>
                <li>• Premium positioning justifies material cost</li>
                <li>• Shelf life of 6-12 months is sufficient</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
              <h4 className="font-bold text-blue-800 mb-2">♻️ Choose Recyclable If...</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Higher barrier for 12+ month shelf life is needed</li>
                <li>• Your customers lack composting access</li>
                <li>• Cost-effectiveness is a priority</li>
                <li>• You want clear window options</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">⚠️ Start with Test Run If...</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• You're unsure which material suits your coffee</li>
                <li>• You want to test consumer response first</li>
                <li>• <Link to="/store" className="underline">Order sample kit (100 pcs) →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'How Can You Upgrade Your Coffee Packaging Today?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-lg">Here's the deal: we don't expect you to overhaul your entire packaging line on day one. Start small and see what works:</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-amber-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">Ready to Move Fast?</h4>
              <p className="text-sm opacity-90 mb-4">Book a 30-min call to discuss your exact needs</p>
              <button onClick={openCalendly} className="inline-block bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold hover:bg-amber-50 transition cursor-pointer">
                Book a Call
              </button>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Want to Test First?</h4>
              <p className="text-sm text-neutral-600 mb-4">Order a sample kit from 100-500 units</p>
              <Link to="/store" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                Get Sample Kit
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Still Exploring?</h4>
              <p className="text-sm text-neutral-600 mb-4">See how other roasters made the switch</p>
              <Link to="/case-studies/coffee-roastery" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-amber-300 transition">
                Read Case Studies
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: 'How Do Different Coffee & Tea Brands Use Our Packaging?',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">Specialty Coffee Roasters</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Premium single-origin and artisan blends requiring degassing valves and high-barrier protection.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• 12oz / 340g retail bags</li>
                <li>• 2lb / 1kg wholesale bags</li>
                <li>• Subscription box formats</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">Premium Tea Brands</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Loose-leaf tea and artisan blends with aroma preservation and resealable closures.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• 50-100g retail pouches</li>
                <li>• Gift sets and samplers</li>
                <li>• Matcha and specialty teas</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">Cafes & Startups</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Low-MOQ solutions for cafes launching retail lines or testing new products.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• 100-piece test runs</li>
                <li>• White-label options</li>
                <li>• Quick turnaround</li>
              </ul>
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">🏆 Customer Success: Bean & Bole Coffee Roastery</h4>
            <p className="text-sm text-neutral-600 mb-3">Switched from traditional plastic bags to our compostable kraft pouches with degassing valves, reducing packaging carbon footprint by 65% while maintaining optimal coffee freshness.</p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="bg-white px-3 py-1 rounded-full border">✓ 65% Carbon Reduction</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ 12-Month Shelf Life</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ Premium Brand Positioning</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: 'What Do Market Trends Say About Coffee Packaging?',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">$5.2B</div>
              <div className="text-sm opacity-90">Coffee Packaging Market 2027</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">40%</div>
              <div className="text-sm opacity-90">Sustainable Packaging Growth</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">73%</div>
              <div className="text-sm opacity-90">Consumers Prefer Eco-Packaging</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">8.1%</div>
              <div className="text-sm opacity-90">CAGR 2024-2030</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">Coffee & Tea Packaging Performance Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-2 font-medium">Material Type</th>
                    <th className="text-center py-2 font-medium">OTR (cc/m²/24hr)</th>
                    <th className="text-center py-2 font-medium">Shelf Life</th>
                    <th className="text-center py-2 font-medium">Price Index</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Kraft + PLA (Compostable)</td>
                    <td className="text-center py-2">&lt; 1.5</td>
                    <td className="text-center py-2">6-12 months</td>
                    <td className="text-center py-2">1.3x</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Mono-PE (Recyclable)</td>
                    <td className="text-center py-2">&lt; 1.0</td>
                    <td className="text-center py-2">12-18 months</td>
                    <td className="text-center py-2">1.0x</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Traditional Laminate</td>
                    <td className="text-center py-2">&lt; 0.5</td>
                    <td className="text-center py-2">18-24 months</td>
                    <td className="text-center py-2">0.9x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">🌍 Environmental Impact of Switching</h4>
            <p className="text-sm text-green-700">Switching to sustainable coffee packaging can reduce packaging carbon footprint by 50-70%, with compostable options decomposing in 90-180 days vs. 400+ years for traditional plastics.</p>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: 'How Do Coffee Packaging Materials Compare?',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-center p-3 font-semibold text-green-700">Kraft + PLA</th>
                  <th className="text-center p-3 font-semibold text-blue-700">Mono-PE</th>
                  <th className="text-center p-3 font-semibold text-purple-700">PCR Content</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Best For Coffee</td>
                  <td className="text-center p-3">✅ Premium single-origin</td>
                  <td className="text-center p-3">✅ All coffee types</td>
                  <td className="text-center p-3">✅ Mainstream brands</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Degassing Valve</td>
                  <td className="text-center p-3">✅ Available</td>
                  <td className="text-center p-3">✅ Available</td>
                  <td className="text-center p-3">✅ Available</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Barrier Level</td>
                  <td className="text-center p-3">Medium-High</td>
                  <td className="text-center p-3">High</td>
                  <td className="text-center p-3">High</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Shelf Life</td>
                  <td className="text-center p-3">6-12 months</td>
                  <td className="text-center p-3">12-18 months</td>
                  <td className="text-center p-3">12-18 months</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">End-of-Life</td>
                  <td className="text-center p-3">🌱 Compostable</td>
                  <td className="text-center p-3">♻️ Recyclable</td>
                  <td className="text-center p-3">♻️ Recyclable</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Price Point</td>
                  <td className="text-center p-3">💰💰💰</td>
                  <td className="text-center p-3">💰💰</td>
                  <td className="text-center p-3">💰💰</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">💡 Decision Guide for Coffee & Tea Brands</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-amber-900">Choose Kraft + PLA if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Premium/specialty positioning</li>
                  <li>• Eco-conscious target market</li>
                  <li>• 6-12 month shelf life OK</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose Mono-PE if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Maximum barrier needed</li>
                  <li>• Longer shelf life required</li>
                  <li>• Clear window desired</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose PCR if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Corporate sustainability goals</li>
                  <li>• Cost-effective eco option</li>
                  <li>• Circular economy focus</li>
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
      question: "What is the best packaging for freshly roasted coffee?",
      answer: "For freshly roasted coffee, we recommend our stand-up pouches with one-way degassing valves. The valve allows CO2 released during the degassing process (24-72 hours post-roasting) to escape without letting oxygen in, preserving freshness for up to 12 months when stored properly."
    },
    {
      question: "Are your coffee pouches truly compostable?",
      answer: "Yes, our kraft paper + PLA pouches are certified compostable under EN 13432 and ASTM D6400 standards. They break down within 90-180 days in commercial composting facilities."
    },
    {
      question: "What is the minimum order quantity for custom printed coffee bags?",
      answer: "Our minimum order quantity (MOQ) for custom printed coffee and tea pouches is 500 units. This low MOQ makes our sustainable packaging accessible for small roasters, artisan tea brands, and growing businesses."
    },
    {
      question: "Can you match Pantone colors for my brand?",
      answer: "Yes, we use high-quality gravure printing that can accurately reproduce Pantone colors. We recommend ordering a pre-production sample to verify color accuracy before full production. Color tolerance is typically ±10% for matte finishes and ±8% for gloss."
    },
    {
      question: "Do you offer degassing valves for all pouch types?",
      answer: "One-way degassing valves can be added to most pouch formats including stand-up pouches, flat bottom bags, and side gusset bags. The valve is heat-sealed to the interior and does not affect the exterior printing area."
    },
    {
      question: "What is the best eco-friendly coffee pouch supplier with low MOQ?",
      answer: "Achieve Pack offers one of the lowest MOQs in the industry at 100 pieces for custom printed coffee pouches. We specialize in compostable (kraft + PLA) and recyclable (mono-PE) materials with EN 13432 and FDA certifications. Our 2-3 week lead time and degassing valve options make us ideal for specialty roasters."
    },
    {
      question: "How do I verify if a coffee packaging supplier is reliable?",
      answer: "Check for third-party certifications (EN 13432, ASTM D6400, FDA), request material specification sheets, ask for samples before bulk orders, and verify their MOQ and lead time claims. Reliable suppliers like Achieve Pack provide certification documentation and pre-production samples."
    },
    {
      question: "What certifications should eco-friendly coffee packaging have?",
      answer: "Look for EN 13432 (European compostability), ASTM D6400 (US compostability), FDA food contact approval, and BRC/IFS facility certification. For recyclable options, check for How2Recycle labeling eligibility. Achieve Pack's materials meet all these standards."
    },
    {
      question: "Is compostable or recyclable packaging better for coffee?",
      answer: "It depends on your target market. Compostable (kraft + PLA) appeals to eco-conscious consumers and works well for specialty coffee. Recyclable mono-PE offers higher barrier properties and longer shelf life. Both options are sustainable - we recommend matching your choice to your brand values and customer expectations."
    },
    {
      question: "How long does custom coffee packaging take to produce?",
      answer: "Standard production time at Achieve Pack is 2-3 weeks after artwork approval. For urgent orders, we offer expedited 7-10 day production. Stock pouches without custom printing ship within 3-5 business days."
    }
  ]

  const tables = [
    {
      title: "Coffee & Tea Pouch Size Guide",
      data: {
        headers: ["Product Type", "Recommended Size", "Capacity", "Common Format"],
        rows: [
          ["Coffee Beans (250g)", "140 x 200 + 80mm", "250-350g", "Stand-Up with Valve"],
          ["Coffee Beans (1kg)", "180 x 280 + 100mm", "1000-1200g", "Flat Bottom with Valve"],
          ["Ground Coffee", "120 x 180 + 70mm", "200-300g", "Stand-Up with Zipper"],
          ["Loose-Leaf Tea", "100 x 150 + 60mm", "50-100g", "Stand-Up Pouch"],
          ["Tea Sachets (Box)", "80 x 120mm", "10-20 sachets", "Pillow Pouch"],
          ["Matcha Powder", "90 x 130 + 50mm", "30-100g", "Stand-Up with Zipper"]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: "Shop Coffee & Tea Pouches",
      url: "/store",
      description: "Browse our collection - MOQ from 100 pieces"
    },
    {
      title: "Stand-Up Pouches",
      url: "/packaging/stand-up-pouches",
      description: "Versatile format with valve options"
    },
    {
      title: "Flat Bottom Bags",
      url: "/packaging/flat-bottom-bags",
      description: "Premium shelf presence for specialty coffee"
    },
    {
      title: "Compostable Materials",
      url: "/materials/compostable",
      description: "EN 13432 certified options"
    },
    {
      title: "Recyclable Mono-PE",
      url: "/materials/recyclable-mono-pe",
      description: "High barrier recyclable solution"
    },
    {
      title: "Supplier Analysis Report",
      url: "/blog/sustainable-packaging-supplier-analysis",
      description: "Compare eco-friendly packaging suppliers"
    },
    {
      title: "Coffee Roastery Case Study",
      url: "/case-studies/coffee-roastery",
      description: "See how Bean & Bole switched to compostable"
    },
    {
      title: "Free Design & Mockup Services",
      url: "/free-service",
      description: "Get expert design advice, 3D mockups, and packaging consultation—all free"
    }
  ]

  return (
    <SEOPageLayout
      title="Coffee & Tea Packaging | Eco-Friendly Pouches for Roasters & Tea Brands"
      description="Premium compostable and recyclable packaging for coffee beans, ground coffee, loose-leaf tea. Low MOQ from 100 units. Degassing valves, EN 13432 certified. Compare suppliers in our guide."
      keywords={[
        'coffee packaging',
        'tea packaging',
        'coffee pouch',
        'coffee bag with valve',
        'compostable coffee packaging',
        'sustainable tea packaging',
        'kraft coffee bags',
        'degassing valve pouch',
        'specialty coffee packaging',
        'loose leaf tea bags',
        'eco-friendly coffee packaging'
      ]}
      canonicalUrl="https://achievepack.com/industry/coffee-tea"
      heroTitle={t('seoPages.pages.coffeeTea.heroTitle')}
      heroSubtitle={t('seoPages.pages.coffeeTea.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp"
      heroImageAlt="Eco-friendly coffee packaging stand-up pouch with degassing valve"
      introSummary={t('seoPages.pages.coffeeTea.introSummary')}
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

export default CoffeeTeaPage
