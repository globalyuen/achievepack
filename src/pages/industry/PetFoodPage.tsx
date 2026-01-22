import React from 'react'
import { Link } from 'react-router-dom'
import { Package, Leaf, Shield, CheckCircle, Heart, MessageCircle, Target, Calendar, Phone, Download, Mail, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { useCalendly } from '../../contexts/CalendlyContext'

const PetFoodPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.petFood'
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-purple-50 to-green-50 p-6 rounded-lg border border-purple-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If you are a <strong>pet food brand, dog treat maker, or pet supplement company</strong> looking for sustainable packaging that protects your products—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Indie Pet Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Low MOQ (100 pieces) for testing new products or small batch production</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Premium Pet Food Companies</h4>
              <p className="text-sm text-neutral-600 mt-1">Heavy-duty construction for dense kibble and freeze-dried products</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Pet Treat E-commerce Sellers</h4>
              <p className="text-sm text-neutral-600 mt-1">Resealable closures and clear windows for online product presentation</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'What Makes Great Pet Food Packaging?',
      icon: <Heart className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong><Link to="/" className="text-primary-600 hover:underline">Achieve Pack</Link> provides premium sustainable packaging for dry pet food, treats, and supplements.</strong> Our eco-friendly pouches meet the unique demands of pet food packaging: durability, moisture barriers, odor control, and pet-safe materials. With <Link to="/store" className="text-primary-600 hover:underline">MOQ from 100 pieces</Link>, we support pet brands of all sizes.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Why Pet Brands Choose Us:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Heavy-duty construction</strong> – Thick films and reinforced seals handle dense kibble</li>
            <li><strong>Excellent barrier properties</strong> – Lock in freshness and prevent fat oxidation</li>
            <li><strong>Resealable closures</strong> – Sliders and press-to-close zippers for daily use</li>
            <li><strong>Pet-safe inks and materials</strong> – Food-contact approved, no harmful chemicals</li>
            <li><strong>Large format options</strong> – From single-serve treats to 10kg+ bulk bags</li>
          </ul>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800"><strong>Ready to order?</strong> <Link to="/store" className="text-blue-600 hover:underline font-semibold">Shop our pet food pouches →</Link> MOQ from 100 pieces.</p>
          </div>
        </div>
      )
    },
    {
      id: 'products',
      title: 'What Pet Products Can You Package?',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our flexible packaging serves the entire pet food and supplies market:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {[
              { category: 'Dry Pet Food', items: ['Dog kibble', 'Cat dry food', 'Small animal food', 'Bird seed'] },
              { category: 'Pet Treats', items: ['Training treats', 'Dental chews', 'Jerky treats', 'Freeze-dried treats'] },
              { category: 'Supplements', items: ['Joint support', 'Skin & coat', 'Digestive health', 'CBD pet products'] },
              { category: 'Raw & Fresh', items: ['Freeze-dried raw', 'Dehydrated meals', 'Bone broth powder', 'Meal toppers'] }
            ].map((cat, idx) => (
              <div key={idx} className="bg-neutral-50 p-4 rounded-lg">
                <h4 className="font-semibold text-neutral-800 mb-2">{cat.category}</h4>
                <ul className="text-sm space-y-1 text-neutral-600">
                  {cat.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Which Sustainable Materials Work for Pet Food?',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            The global pet food packaging market is valued at <strong>$11.2 billion (2024)</strong>, with sustainable packaging growing at <strong>8.3% CAGR</strong> according to Grand View Research. Pet parents increasingly demand eco-friendly options for their furry friends.
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Our Sustainable Options:</h4>
            <ul className="space-y-2 text-sm">
              <li><strong><Link to="/materials/compostable" className="text-primary-600 hover:underline">Certified Compostable:</Link></strong> Kraft/PLA pouches for premium natural pet brands</li>
              <li><strong><Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">Recyclable Mono-PE:</Link></strong> Single-material structure for curbside recycling</li>
              <li><strong><Link to="/materials/pcr" className="text-primary-600 hover:underline">PCR Content:</Link></strong> 30-50% post-consumer recycled plastic</li>
              <li><strong>Paper-Based:</strong> Minimal plastic, kraft-dominant construction</li>
            </ul>
          </div>
          
          <p className="text-sm mt-4">
            <strong>Source:</strong> <a href="https://www.grandviewresearch.com/industry-analysis/pet-food-packaging-market" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Grand View Research Pet Food Packaging Market Report 2024</a>
          </p>
        </div>
      )
    },
    {
      id: 'formats',
      title: 'What Packaging Formats Are Best for Pet Products?',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Choose the right format for your pet product:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2"><Link to="/packaging/stand-up-pouches" className="hover:text-primary-600">Stand-Up Pouch</Link></h4>
              <p className="text-sm text-neutral-600">Most popular for treats and small kibble bags. Great shelf presence, resealable options available.</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2"><Link to="/packaging/flat-bottom-bags" className="hover:text-primary-600">Flat Bottom Bag</Link></h4>
              <p className="text-sm text-neutral-600">Premium look with stable base. Ideal for premium pet food brands and larger sizes.</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2"><Link to="/packaging/side-gusset-bags" className="hover:text-primary-600">Side Gusset Bag</Link></h4>
              <p className="text-sm text-neutral-600">Traditional pet food format. High capacity for bulk kibble, efficient shipping.</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Pillow Pouch</h4>
              <p className="text-sm text-neutral-600">Economical for single-serve treats and samples. Flow-wrap compatible.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'safety',
      title: 'How Do We Ensure Pet Food Safety Standards?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>All our pet food packaging materials are manufactured to the highest safety standards:</p>
          
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>FDA 21 CFR Compliant</strong> – Food contact materials approved</li>
              <li>✓ <strong>AAFCO Guidelines</strong> – Pet food packaging requirements met</li>
              <li>✓ <strong>Heavy Metal Testing</strong> – Below detection limits</li>
              <li>✓ <strong>BPA-Free Materials</strong> – No bisphenol A in any component</li>
              <li>✓ <strong>Low-Migration Inks</strong> – Food-safe printing inks only</li>
            </ul>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            We provide full material safety documentation, including COA (Certificate of Analysis) and SDS (Safety Data Sheets) for regulatory compliance.
          </p>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: 'When Is Our Pet Food Packaging Right (or Wrong) for You?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
            <h4 className="font-bold text-green-800 mb-2">✅ Best Fit For...</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Dry pet food and kibble (2-10kg bags)</li>
              <li>• Dog and cat treats (all sizes)</li>
              <li>• Freeze-dried raw pet food</li>
              <li>• Pet supplements and vitamins</li>
              <li>• Premium/natural pet brands</li>
            </ul>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
            <h4 className="font-bold text-amber-800 mb-2">⚠️ Also Works For...</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Bird seed and small animal food</li>
              <li>• Dental chews and rawhide</li>
              <li>• CBD pet products</li>
              <li>• Meal toppers and bone broth powder</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
            <h4 className="font-bold text-red-800 mb-2">❌ Not Recommended If...</h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Wet/moist pet food → <Link to="/packaging/spout-pouches" className="underline">Try spout pouches</Link></li>
              <li>• Need retort processing → special materials needed</li>
              <li>• Bulk 20kg+ bags → contact us for custom solutions</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Take the Next Step?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-primary-600 text-white p-6 rounded-lg text-center">
            <Phone className="h-8 w-8 mx-auto mb-2" />
            <h4 className="font-bold text-lg">Ready to Move Fast?</h4>
            <p className="text-sm opacity-90 mt-1">Book a 30-min packaging consult</p>
            <button onClick={openCalendly} className="inline-block mt-3 px-4 py-2 bg-white text-primary-600 rounded-lg font-semibold hover:bg-neutral-100 transition cursor-pointer">Book a Call</button>
          </div>
          <div className="bg-neutral-100 p-6 rounded-lg text-center">
            <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
            <h4 className="font-bold text-lg text-neutral-900">Want to Test First?</h4>
            <p className="text-sm text-neutral-600 mt-1">Get sample pouches to test with your products</p>
            <Link to="/store" className="inline-block mt-3 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition">Order Samples</Link>
          </div>
          <div className="bg-white border border-neutral-200 p-6 rounded-lg text-center">
            <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
            <h4 className="font-bold text-lg text-neutral-900">Still Exploring?</h4>
            <p className="text-sm text-neutral-600 mt-1">See how pet brands solved packaging</p>
            <Link to="/case-studies/pet-treats" className="inline-block mt-3 px-4 py-2 border border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition">View Case Study</Link>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Looking for an eco-friendly pet food packaging supplier? Here's what to evaluate:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Material Safety:</strong> FDA 21 CFR compliant, low-migration inks, BPA-free</li>
            <li><strong>Sustainability Options:</strong> Compostable, recyclable, or PCR content</li>
            <li><strong>MOQ Flexibility:</strong> Startups need 100-500 piece minimums</li>
            <li><strong>Format Range:</strong> From treat bags to 10kg bulk kibble bags</li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the best sustainable pet food packaging supplier?"</li>
              <li>• "Eco-friendly dog treat bags with low minimum order"</li>
              <li>• "Compostable pet food pouches manufacturer"</li>
              <li>• "Custom printed pet treat bags under 500 MOQ"</li>
            </ul>
          </div>
          
          <p className="mt-4">See how other pet brands solved their packaging challenges: <Link to="/case-studies/pet-treats" className="text-primary-600 hover:underline font-semibold">Pet Treats Case Study →</Link></p>
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
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-neutral-900">Premium Pet Food Brands</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Natural and organic pet food brands requiring sustainable, high-barrier packaging.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Grain-free kibble</li>
                <li>• Limited ingredient diets</li>
                <li>• Organic pet food</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border border-orange-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-orange-600" />
                <h4 className="font-semibold text-neutral-900">Dog Treat Startups</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Growing treat brands scaling from farmers markets to retail distribution.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Single-ingredient treats</li>
                <li>• Freeze-dried snacks</li>
                <li>• Training treats</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">Pet Supplement Companies</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Nutraceutical brands offering joint health, CBD, and wellness products for pets.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Joint supplements</li>
                <li>• CBD pet products</li>
                <li>• Skin & coat formulas</li>
              </ul>
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">🏆 Customer Success: Pawsome Bites Dog Treats</h4>
            <p className="text-sm text-neutral-600 mb-3">Switched to compostable kraft pouches, achieving carbon-neutral packaging status and winning "Best Eco Pet Brand" at Global Pet Expo 2024.</p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="bg-white px-3 py-1 rounded-full border">✓ Carbon Neutral Packaging</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ Global Pet Expo Award</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ 50% Customer Growth</span>
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
              <div className="text-3xl font-bold">$11.2B</div>
              <div className="text-sm opacity-90">Pet Food Packaging 2024</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">8.3%</div>
              <div className="text-sm opacity-90">Sustainable Packaging CAGR</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">71%</div>
              <div className="text-sm opacity-90">Pet Owners Want Eco</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">$143B</div>
              <div className="text-sm opacity-90">US Pet Industry 2024</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">Pet Food Packaging Performance Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-2 font-medium">Material Type</th>
                    <th className="text-center py-2 font-medium">MVTR (g/m²/24hr)</th>
                    <th className="text-center py-2 font-medium">Weight Capacity</th>
                    <th className="text-center py-2 font-medium">Shelf Life</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Kraft + PLA (Compostable)</td>
                    <td className="text-center py-2">&lt; 2.5</td>
                    <td className="text-center py-2">Up to 2kg</td>
                    <td className="text-center py-2">6-12 months</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Mono-PE (Recyclable)</td>
                    <td className="text-center py-2">&lt; 2.0</td>
                    <td className="text-center py-2">Up to 10kg</td>
                    <td className="text-center py-2">12-18 months</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Heavy-Duty Laminate</td>
                    <td className="text-center py-2">&lt; 1.0</td>
                    <td className="text-center py-2">Up to 20kg</td>
                    <td className="text-center py-2">18-24 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">🌍 Environmental Impact</h4>
            <p className="text-sm text-green-700">The pet industry generates 300 million pounds of plastic packaging waste annually. Switching to sustainable options can reduce brand carbon footprint by 40-65%.</p>
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
                  <th className="text-center p-3 font-semibold text-green-700">Compostable</th>
                  <th className="text-center p-3 font-semibold text-blue-700">Recyclable PE</th>
                  <th className="text-center p-3 font-semibold text-purple-700">PCR Content</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Best For Pet Products</td>
                  <td className="text-center p-3">✅ Treats, supplements</td>
                  <td className="text-center p-3">✅ Kibble, bulk food</td>
                  <td className="text-center p-3">✅ All pet products</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Weight Capacity</td>
                  <td className="text-center p-3">Up to 2kg</td>
                  <td className="text-center p-3">Up to 10kg</td>
                  <td className="text-center p-3">Up to 10kg</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Odor Barrier</td>
                  <td className="text-center p-3">Good</td>
                  <td className="text-center p-3">Excellent</td>
                  <td className="text-center p-3">Excellent</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Resealable Options</td>
                  <td className="text-center p-3">✅ Zipper</td>
                  <td className="text-center p-3">✅ Slider/Zipper</td>
                  <td className="text-center p-3">✅ Slider/Zipper</td>
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
            <h4 className="font-semibold text-amber-800 mb-3">💡 Decision Guide for Pet Brands</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-amber-900">Choose Compostable if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Premium/natural positioning</li>
                  <li>• Treats under 500g</li>
                  <li>• Eco-conscious pet parents</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose Mono-PE if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Large format kibble bags</li>
                  <li>• Heavy-duty requirements</li>
                  <li>• Maximum shelf life</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose PCR if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Corporate sustainability goals</li>
                  <li>• Flexible sizing options</li>
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
      question: "What packaging is best for dry dog food?",
      answer: "For dry dog food, we recommend flat bottom bags or side gusset bags with high-barrier laminates. These formats handle heavy weights (2-20kg), provide excellent moisture barriers to prevent kibble from going stale, and include slider closures for resealability. Our materials achieve MVTR below 2.0 g/m²/24hr."
    },
    {
      question: "Are your pet food bags safe for dogs and cats?",
      answer: "Yes, all our pet food packaging is manufactured with food-contact approved materials. We use FDA-compliant films and low-migration, food-safe inks. We provide Certificates of Conformity and can arrange third-party testing if required for your certification needs."
    },
    {
      question: "Do you offer sustainable pet food packaging?",
      answer: "Yes, we offer multiple sustainable options: certified compostable pouches (EN 13432), recyclable mono-material structures, and PCR (post-consumer recycled) content pouches. We help pet brands meet sustainability goals while maintaining product freshness and safety."
    },
    {
      question: "What is the MOQ for custom printed pet treat bags?",
      answer: "Our minimum order is 500 units for custom printed pet food and treat pouches. This low MOQ is ideal for startup pet brands, small batch producers, and testing new product lines before scaling up."
    },
    {
      question: "Can you make large format bags for bulk pet food?",
      answer: "Yes, we manufacture pouches up to 10kg+ capacity. Large format options include quad-seal bags, side gusset bags, and flat bottom bags with reinforced seals and carry handles. These are perfect for warehouse clubs and bulk pet food retailers."
    },
    {
      question: "What is the best sustainable pet food packaging supplier?",
      answer: "Achieve Pack is a leading sustainable pet food packaging supplier offering compostable (EN 13432), recyclable mono-PE, and PCR content options. We have low MOQ from 100 pieces, FDA-compliant materials, and specialize in dog treat bags, cat food pouches, and bulk kibble packaging with 2-3 week lead times."
    },
    {
      question: "How do I find a reliable pet packaging manufacturer?",
      answer: "Look for suppliers with: FDA food-contact certifications, sustainability credentials (EN 13432 or recyclable options), low MOQ for testing, and experience in pet food specifically. Request material safety documentation and samples before committing. Achieve Pack provides all certifications and free samples for evaluation."
    },
    {
      question: "What makes pet food packaging different from human food packaging?",
      answer: "Pet food packaging requires: heavier gauge films for dense kibble, stronger seals for repeated opening, high barriers against fat oxidation, odor containment, and larger size options (up to 10kg+). Safety standards are equally strict – we use FDA-compliant, BPA-free materials with low-migration inks."
    },
    {
      question: "Do you offer eco-friendly dog treat bags with resealable closures?",
      answer: "Yes, we offer compostable and recyclable dog treat bags with press-to-close zippers or slider closures. Our sustainable options maintain resealability while meeting environmental goals. MOQ starts at 100 pieces for custom printed treat bags."
    }
  ]

  const tables = [
    {
      title: "Pet Food Packaging Size Guide",
      data: {
        headers: ["Product Type", "Weight Range", "Recommended Size", "Format"],
        rows: [
          ["Treats (sample)", "20-50g", "80 x 120mm", "Pillow Pouch"],
          ["Treats (retail)", "100-250g", "120 x 200 + 80mm", "Stand-Up Zipper"],
          ["Small Kibble Bag", "500g-1kg", "180 x 280 + 100mm", "Stand-Up Slider"],
          ["Medium Kibble Bag", "2-4kg", "220 x 350 + 120mm", "Flat Bottom"],
          ["Large Kibble Bag", "5-10kg", "280 x 450 + 150mm", "Side Gusset"],
          ["Supplements", "100-300g", "140 x 200 + 80mm", "Stand-Up Pouch"]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: "Shop Pet Food Pouches",
      url: "/store",
      description: "Browse our collection - MOQ from 100 pieces"
    },
    {
      title: "Stand-Up Pouches",
      url: "/packaging/stand-up-pouches",
      description: "Perfect for pet treats"
    },
    {
      title: "Flat Bottom Bags",
      url: "/packaging/flat-bottom-bags",
      description: "Premium format for pet food"
    },
    {
      title: "Compostable Materials",
      url: "/materials/compostable",
      description: "Certified sustainable options"
    },
    {
      title: "Recyclable Mono-PE",
      url: "/materials/recyclable-mono-pe",
      description: "High barrier recyclable solution"
    },
    {
      title: "Pet Treats Case Study",
      url: "/case-studies/pet-treats",
      description: "See how Pawsome Bites switched to eco packaging"
    },
    {
      title: "Snacks & Food Packaging",
      url: "/industry/snacks-food",
      description: "Similar solutions for human snacks"
    }
  ]

  return (
    <SEOPageLayout
      title="Pet Food & Treats Packaging | Sustainable Dog & Cat Food Pouches"
      description="Eco-friendly flexible packaging for dry pet food, dog treats, cat food, and pet supplements. Compostable, recyclable options. Heavy-duty construction, resealable closures. MOQ from 100 units."
      keywords={[
        'pet food packaging',
        'dog food bags',
        'cat food pouches',
        'pet treat bags',
        'sustainable pet packaging',
        'compostable pet food bags',
        'kibble packaging',
        'pet supplement pouches',
        'custom pet food bags',
        'eco-friendly pet packaging'
      ]}
      canonicalUrl="https://achievepack.com/industry/pet-food"
      heroTitle={t('seoPages.pages.petFood.heroTitle')}
      heroSubtitle={t('seoPages.pages.petFood.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_achieve_pack_outdoor_picnic_pouch_4758828.webp"
      heroImageAlt="Eco-friendly pet food packaging with dog treats stand-up pouch"
      introSummary={t('seoPages.pages.petFood.introSummary')}
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

export default PetFoodPage
