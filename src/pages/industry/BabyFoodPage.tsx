import React from 'react'
import { Package, Shield, CheckCircle, Droplets, Baby, MessageCircle, Target, Calendar, Mail, Download, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Leaf } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const BabyFoodPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If you are a <strong>baby food brand, infant nutrition company, or toddler snack producer</strong> looking for ultra-safe packaging—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Baby Purée Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Spout pouches with child-safe caps</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Infant Cereal Makers</h4>
              <p className="text-sm text-neutral-600 mt-1">High-barrier stand-up pouches</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Organic Baby Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Compostable & recyclable options</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'Baby Food & Infant Nutrition Packaging',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack provides premium food-safe packaging for baby food, infant cereals, toddler snacks, and baby purées.</strong> Our packaging meets the strictest safety standards with materials specifically designed for infant and child nutrition products. We offer <Link to="/materials/compostable" className="text-primary-600 hover:underline">compostable</Link> and <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">recyclable</Link> options for eco-conscious parents.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Why Choose Our Baby Food Packaging:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Ultra-safe materials</strong> – Zero migration, no BPA, phthalates, or harmful substances</li>
            <li><strong>High-barrier protection</strong> – Preserve nutrients, vitamins, and freshness</li>
            <li><strong>Spout pouches</strong> – Convenient for purées with child-safe caps</li>
            <li><strong>Resealable options</strong> – Portion control for cereals and snacks</li>
            <li><strong>Sustainable choices</strong> – Compostable and recyclable materials</li>
          </ul>
        </div>
      )
    },
    {
      id: 'products',
      title: 'Baby Products We Package',
      icon: <Baby className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-2">Baby Purées</h4>
              <ul className="text-sm space-y-1 text-pink-700">
                <li>• Fruit purées</li>
                <li>• Vegetable purées</li>
                <li>• Mixed meal purées</li>
                <li>• Yogurt blends</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Dry Baby Food</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                <li>• Infant cereals</li>
                <li>• Rice cereals</li>
                <li>• Oatmeal powders</li>
                <li>• Formula supplements</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Toddler Snacks</h4>
              <ul className="text-sm space-y-1 text-yellow-700">
                <li>• Puffs & melts</li>
                <li>• Teething biscuits</li>
                <li>• Fruit snacks</li>
                <li>• Veggie sticks</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spout',
      title: 'Spout Pouches for Purées',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our spout pouches are specifically designed for baby food applications:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Safety Features</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Child-safe caps (no choking hazard)</li>
                <li>✓ Tamper-evident seals</li>
                <li>✓ Smooth edges, no sharp parts</li>
                <li>✓ FDA & EU food contact approved</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Convenience Features</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Self-standing design</li>
                <li>✓ Reclosable cap</li>
                <li>✓ Clear window option</li>
                <li>✓ Squeeze-friendly material</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'safety',
      title: 'Safety & Compliance',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Baby food packaging requires the highest safety standards:</p>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>FDA 21 CFR 170-199</strong> – US food contact regulations</li>
              <li>✓ <strong>EU 10/2011</strong> – European food contact materials</li>
              <li>✓ <strong>EU 1935/2004</strong> – Framework regulation</li>
              <li>✓ <strong>BPA Free</strong> – No bisphenol A in any component</li>
              <li>✓ <strong>Phthalate Free</strong> – No plasticizers</li>
              <li>✓ <strong>Heavy Metal Testing</strong> – Below detection limits</li>
              <li>✓ <strong>Migration Testing</strong> – Certified safe for infant food</li>
            </ul>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            We provide full documentation including Certificates of Conformity, migration test reports, and material safety data sheets for regulatory compliance.
          </p>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Baby Food Packaging Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Looking for reliable baby food packaging? Here's how to find the right supplier:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Safety certifications</strong> – Verify FDA and EU compliance</li>
            <li><strong>Material testing</strong> – Request migration test reports</li>
            <li><strong>Custom options</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse our baby food packaging options</Link></li>
            <li><strong>Low MOQ</strong> – Start with 500 pieces minimum</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the safest baby food pouch supplier with BPA-free materials?"</li>
              <li>• "Which company offers eco-friendly baby puree spout pouches?"</li>
              <li>• "Best baby food packaging manufacturer with FDA compliance?"</li>
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
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Is it safe for babies?"</h4>
                  <p className="text-sm text-neutral-600">FDA, EU certified + BPA/phthalate-free with migration testing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Are spout caps child-safe?"</h4>
                  <p className="text-sm text-neutral-600">Yes, no choking hazard design with tamper-evident seals</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Can I test before bulk order?"</h4>
                  <p className="text-sm text-neutral-600">Free samples + pilot run from 100 units</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"What documentation provided?"</h4>
                  <p className="text-sm text-neutral-600">Full COC, migration tests, MSDS with every order</p>
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
      icon: <Baby className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-pink-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=Baby Food Packaging Quote" className="block w-full bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-pink-50 transition">
                Send Email
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Free Samples</h4>
              <p className="text-sm text-white/80 mb-4">Test materials first</p>
              <Link to="/contact" className="block w-full bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-pink-50 transition">
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
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-5 rounded-xl border border-pink-200">
              <div className="flex items-center gap-2 mb-3">
                <Baby className="h-5 w-5 text-pink-600" />
                <h4 className="font-semibold text-neutral-900">Organic Baby Food Brands</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Premium organic purée and cereal brands requiring ultra-safe, certified compostable packaging.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Stage 1-3 purées</li>
                <li>• Organic infant cereals</li>
                <li>• Baby yogurt pouches</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">Toddler Snack Companies</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Growing brands creating healthy finger foods and on-the-go snacks for toddlers.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• Puffs & melts</li>
                <li>• Teething biscuits</li>
                <li>• Fruit & veggie snacks</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-neutral-900">Startup Baby Brands</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">New entrants in the baby food market starting with small batches and low MOQ.</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>• 100-piece test runs</li>
                <li>• Farmers market products</li>
                <li>• D2C subscription boxes</li>
              </ul>
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">🏆 Customer Success: Little Sprouts Organic</h4>
            <p className="text-sm text-neutral-600 mb-3">Launched with our compostable spout pouches, achieving Clean Label Project certification and 200% growth in first year with eco-conscious millennial parents.</p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="bg-white px-3 py-1 rounded-full border">✓ Clean Label Certified</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ 200% YoY Growth</span>
              <span className="bg-white px-3 py-1 rounded-full border">✓ 100% BPA-Free</span>
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
              <div className="text-3xl font-bold">$91.5B</div>
              <div className="text-sm opacity-90">Baby Food Market 2030</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">6.8%</div>
              <div className="text-sm opacity-90">CAGR 2024-2030</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">78%</div>
              <div className="text-sm opacity-90">Parents Want Eco Packaging</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">52%</div>
              <div className="text-sm opacity-90">Choose Organic Baby Food</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">Baby Food Packaging Performance Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-2 font-medium">Packaging Type</th>
                    <th className="text-center py-2 font-medium">Safety Level</th>
                    <th className="text-center py-2 font-medium">Convenience</th>
                    <th className="text-center py-2 font-medium">Shelf Life</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Spout Pouches</td>
                    <td className="text-center py-2">⭐⭐⭐⭐⭐</td>
                    <td className="text-center py-2">⭐⭐⭐⭐⭐</td>
                    <td className="text-center py-2">12-18 months</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Glass Jars</td>
                    <td className="text-center py-2">⭐⭐⭐⭐⭐</td>
                    <td className="text-center py-2">⭐⭐⭐</td>
                    <td className="text-center py-2">24+ months</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">Stand-Up Pouches</td>
                    <td className="text-center py-2">⭐⭐⭐⭐⭐</td>
                    <td className="text-center py-2">⭐⭐⭐⭐</td>
                    <td className="text-center py-2">12-18 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">🌍 Environmental Impact</h4>
            <p className="text-sm text-green-700">Switching from glass jars to flexible pouches reduces packaging weight by 80% and transportation emissions by 60%, while compostable options break down completely in 90-180 days.</p>
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
                  <th className="text-center p-3 font-semibold text-green-700">Compostable</th>
                  <th className="text-center p-3 font-semibold text-blue-700">Standard Pouch</th>
                  <th className="text-center p-3 font-semibold text-purple-700">Recyclable PE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Best For Baby Products</td>
                  <td className="text-center p-3">✅ Dry cereals, snacks</td>
                  <td className="text-center p-3">✅ Purées, wet food</td>
                  <td className="text-center p-3">✅ All types</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">BPA-Free</td>
                  <td className="text-center p-3">✅ 100%</td>
                  <td className="text-center p-3">✅ 100%</td>
                  <td className="text-center p-3">✅ 100%</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Migration Testing</td>
                  <td className="text-center p-3">✅ Certified</td>
                  <td className="text-center p-3">✅ Certified</td>
                  <td className="text-center p-3">✅ Certified</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">Spout Option</td>
                  <td className="text-center p-3">❌ Limited</td>
                  <td className="text-center p-3">✅ Full range</td>
                  <td className="text-center p-3">✅ Available</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">End-of-Life</td>
                  <td className="text-center p-3">🌱 Compostable</td>
                  <td className="text-center p-3">🗑️ Landfill</td>
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
            <h4 className="font-semibold text-amber-800 mb-3">💡 Decision Guide for Baby Food Brands</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-amber-900">Choose Compostable if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Dry baby cereals & snacks</li>
                  <li>• Organic brand positioning</li>
                  <li>• Eco-conscious target market</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose Standard if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Wet purées & yogurt</li>
                  <li>• Maximum shelf life needed</li>
                  <li>• Spout pouch required</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">Choose Recyclable if:</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>• Balance eco + performance</li>
                  <li>• Cost-effective option</li>
                  <li>• Mainstream distribution</li>
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
      question: "What is the safest baby food pouch supplier with BPA-free materials?",
      answer: "Achieve Pack is a trusted baby food packaging supplier with 100% BPA-free, phthalate-free materials. All our baby food pouches are certified under FDA 21 CFR and EU 10/2011 regulations, with migration testing reports provided. We specialize in spout pouches with child-safe caps."
    },
    {
      question: "Do you offer spout pouches for baby purées?",
      answer: "Yes, we specialize in spout pouches for baby food purées. Our pouches feature child-safe caps, tamper-evident seals, and smooth construction without sharp edges. Available in 90ml, 120ml, and 150ml sizes."
    },
    {
      question: "What is the minimum order quantity for baby food packaging?",
      answer: "Our MOQ for baby food spout pouches is 500 pieces, making it accessible for small organic baby food brands and startups. For stand-up pouches for cereals and snacks, MOQ starts at 100 pieces."
    },
    {
      question: "Are your baby food pouches sustainable and eco-friendly?",
      answer: "Yes, we offer sustainable options including recyclable mono-material pouches and PCR (post-consumer recycled) content materials. Our dry baby food pouches are available in certified compostable materials (EN 13432). Check our compostable materials page for details."
    },
    {
      question: "What certifications do you provide for baby food packaging?",
      answer: "We provide comprehensive documentation including FDA compliance statements, EU Declaration of Conformity, migration test reports from accredited laboratories, and material safety data sheets (SDS). All certifications are provided with every order."
    },
    {
      question: "Which company offers the best baby food packaging with custom printing?",
      answer: "Achieve Pack offers premium baby food packaging with full-color custom printing (up to 10 colors with plate printing or unlimited colors with digital printing). We can match Pantone colors and include matte/gloss finishes for premium branding."
    }
  ]

  const tables = [
    {
      title: "Baby Food Packaging Size Guide",
      data: {
        headers: ["Product Type", "Size", "Capacity", "Format"],
        rows: [
          ["Baby purée", "100 x 150mm", "90-100ml", "Spout Pouch"],
          ["Baby purée", "110 x 170mm", "120-150ml", "Spout Pouch"],
          ["Infant cereal", "120 x 180 + 70mm", "200-300g", "Stand-Up Zipper"],
          ["Toddler snacks", "100 x 150 + 60mm", "30-60g", "Stand-Up Pouch"],
          ["Puffs", "80 x 120mm", "20-40g", "Stand-Up Pouch"]
        ]
      }
    }
  ]

  const relatedLinks = [
    { title: "Shop Baby Food Pouches", url: "/store", description: "Browse spout pouches and stand-up options - MOQ from 100 pieces" },
    { title: "Spout Pouches", url: "/packaging/spout-pouches", description: "Perfect for baby purées and liquid foods" },
    { title: "Compostable Packaging", url: "/materials/compostable", description: "Eco-friendly options for baby food" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Great for cereals and snacks" },
    { title: "Sustainable Packaging Guide", url: "/blog/sustainable-packaging-supplier-analysis", description: "Compare eco-friendly baby food packaging options" }
  ]

  return (
    <SEOPageLayout
      title="Baby Food Packaging | Spout Pouches, Infant Cereal Bags & Toddler Snack Pouches"
      description="Food-safe packaging for baby purées, infant cereals, and toddler snacks. Spout pouches with child-safe caps. FDA & EU compliant, BPA-free materials. MOQ 500 units."
      keywords={[
        'baby food packaging',
        'baby puree pouches',
        'spout pouches baby food',
        'infant cereal packaging',
        'toddler snack bags',
        'baby food pouches',
        'safe baby packaging',
        'BPA free food pouches',
        'child safe packaging'
      ]}
      canonicalUrl="https://achievepack.com/industry/baby-food"
      heroTitle={t('seoPages.pages.babyFood.heroTitle')}
      heroSubtitle={t('seoPages.pages.babyFood.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_food_beverage_vacation_lifestyle_2486493.webp"
      heroImageAlt="Safe baby food packaging spout pouches"
      introSummary={t('seoPages.pages.babyFood.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t('seoPages.pages.babyFood.cta.title')}
      ctaDescription={t('seoPages.pages.babyFood.cta.description')}
      ctaButtonText={t('seoPages.pages.babyFood.cta.button')}
    />
  )
}

export default BabyFoodPage
