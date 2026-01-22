import React from 'react'
import { Recycle, Leaf, Shield, CheckCircle, Factory, MessageCircle, BookOpen, Building2, Image, TrendingUp, BarChart3, ArrowLeftRight, ShoppingBag, Coffee, Sparkles, Globe, Target, Calendar, Phone, Download, Mail } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const RecyclableMonoPEPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.recyclableMonoPE'
  const sections = [
    {
      id: 'infographic',
      title: 'What Is Recyclable Mono-PE at a Glance?',
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600">Click the infographic below to view in full size:</p>
          <div className="flex justify-center">
            <ClickableImage 
              src="/imgs/4-infograhic/recyclable.webp" 
              alt="Recyclable Mono-PE Infographic - Complete guide to recyclable packaging" 
              className="max-w-full md:max-w-2xl rounded-lg shadow-lg border border-neutral-200 cursor-pointer hover:shadow-xl transition"
              caption="Recyclable Mono-PE Infographic"
            />
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong>
          </p>
          
          {/* Recycling Symbol Section */}
          <div className="flex items-center gap-6 bg-blue-50 p-4 rounded-lg border border-blue-200 my-4">
            <ClickableImage 
              src="/imgs/cert/logo-recycle-number-4-and-5.png" 
              alt="Recyclable Symbol #4 LDPE and #5 PP" 
              className="h-20 w-auto"
              caption="Recycling Code #4 & #5"
            />
            <div>
              <h4 className="font-semibold text-blue-800 mb-1">Recycling Code #4 (LDPE) / #5 (PP)</h4>
              <p className="text-sm text-blue-700">Our mono-PE pouches are made from single-material polyethylene, accepted in most curbside and store drop-off recycling programs. The resin code can be printed on your packaging.</p>
              <p className="text-xs text-blue-600 mt-2"><strong>Artwork Usage:</strong> You can include the recycling symbol on your pouch design to communicate recyclability to consumers.</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.overview.keyBenefits`)}</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              {(t(`${p}.sections.overview.benefits`, { returnObjects: true }) as string[]).map((b, i) => <li key={i}>✓ {b}</li>)}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'how-it-works',
      title: t(`${p}.sections.howItWorks.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.howItWorks.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.howItWorks.evoh.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.evoh.desc`)}</p>
            </div>
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.howItWorks.pePe.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.pePe.desc`)}</p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.howItWorks.coatings.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.coatings.desc`)}</p>
            </div>
            <div className="border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.howItWorks.oriented.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.oriented.desc`)}</p>
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
          <p>{t(`${p}.sections.applications.intro`)}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm text-blue-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'recycling',
      title: t(`${p}.sections.recycling.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.recycling.whereTitle`)}</h4>
            <ul className="space-y-2 text-sm">
              {(t(`${p}.sections.recycling.options`, { returnObjects: true }) as string[]).map((opt, i) => <li key={i}>✓ {opt}</li>)}
            </ul>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            {t(`${p}.sections.recycling.note`)}
          </p>
        </div>
      )
    },
    // ========== Scenario (Industry Applications) ==========
    {
      id: 'industry-scenarios',
      title: 'Which Industries Use Recyclable Mono-PE?',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">Mono-PE recyclable packaging is the circular economy solution for brands committed to keeping materials in use:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-6 w-6 text-blue-600" />
                <h4 className="font-bold text-blue-800">Food & Snacks</h4>
              </div>
              <ul className="text-sm space-y-2 text-blue-700">
                <li>• <strong>Snack Brands:</strong> Chips, nuts, dried fruits</li>
                <li>• <strong>Pet Food:</strong> Treats and dry food pouches</li>
                <li>• <strong>Frozen Foods:</strong> Vegetables, ready meals</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <span className="text-xs text-blue-600">EVOH layer maintains 9-12 month shelf life</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="h-6 w-6 text-green-600" />
                <h4 className="font-bold text-green-800">Coffee Industry</h4>
              </div>
              <ul className="text-sm space-y-2 text-green-700">
                <li>• <strong>Roasters:</strong> Mono-PE with EVOH for freshness</li>
                <li>• <strong>Subscriptions:</strong> Widely recyclable messaging</li>
                <li>• <strong>Retail:</strong> How2Recycle label compatible</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-green-200">
                <span className="text-xs text-green-600">Degassing valves available</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <h4 className="font-bold text-purple-800">Non-Food Applications</h4>
              </div>
              <ul className="text-sm space-y-2 text-purple-700">
                <li>• <strong>Personal Care:</strong> Refill pouches</li>
                <li>• <strong>Detergents:</strong> Household product refills</li>
                <li>• <strong>E-commerce:</strong> Protective mailers</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-purple-200">
                <span className="text-xs text-purple-600">Perfect for refill economy</span>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 mt-6">
            <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary-600" />
              Customer Success Stories
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-blue-600 uppercase">US Snack Brand</span>
                <p className="text-sm text-neutral-700 mt-2">Switched from multi-layer laminate to mono-PE. Added "Widely Recyclable" label. Result: 20% increase in retailer shelf placement.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-green-600 uppercase">EU Pet Food Company</span>
                <p className="text-sm text-neutral-700 mt-2">Transitioned entire treat line to mono-PE. Customer feedback: "Finally packaging I can recycle!" 15% sales increase.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ========== Data (Market & Performance Data) ==========
    {
      id: 'market-data',
      title: 'MarketData Market & Performance Data',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">95%</p>
              <p className="text-sm opacity-90">PE Recycling Rate (EU)</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">9-12</p>
              <p className="text-sm opacity-90">Months Shelf Life (w/EVOH)</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">#4</p>
              <p className="text-sm opacity-90">Resin Code (LDPE)</p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">∞</p>
              <p className="text-sm opacity-90">Times Recyclable</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-neutral-100 px-4 py-3 border-b">
              <h4 className="font-bold text-neutral-900">Mono-PE Structure Options</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Structure</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Barrier Level</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Shelf Life</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">PE/PE (Basic)</td>
                    <td className="px-4 py-3">Low</td>
                    <td className="px-4 py-3">3-6 months</td>
                    <td className="px-4 py-3">Dry goods, non-food</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">PE/EVOH/PE</td>
                    <td className="px-4 py-3">Medium-High</td>
                    <td className="px-4 py-3">9-12 months</td>
                    <td className="px-4 py-3">Coffee, snacks, pet food</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">OPE/PE (Oriented)</td>
                    <td className="px-4 py-3">Medium</td>
                    <td className="px-4 py-3">6-9 months</td>
                    <td className="px-4 py-3">Frozen foods, meat</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">PE + Barrier Coating</td>
                    <td className="px-4 py-3">Medium</td>
                    <td className="px-4 py-3">6-9 months</td>
                    <td className="px-4 py-3">General food applications</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4">Environmental Impact: Recyclable vs Landfill</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">-80%</p>
                <p className="text-sm text-blue-600">Energy vs virgin production</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">-70%</p>
                <p className="text-sm text-blue-600">CO₂ when recycled</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">0</p>
                <p className="text-sm text-blue-600">Waste to landfill (if recycled)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ========== Contrast (Material Comparison) ==========
    {
      id: 'material-comparison',
      title: 'Material Comparison',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">Compare mono-PE with other sustainable packaging options:</p>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-primary-600 px-4 py-3">
              <h4 className="font-bold text-white text-center">Recyclable vs Compostable Comparison</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Criteria</th>
                    <th className="px-4 py-3 text-center font-semibold text-blue-700">Mono-PE</th>
                    <th className="px-4 py-3 text-center font-semibold text-purple-700">Mono-PP</th>
                    <th className="px-4 py-3 text-center font-semibold text-green-700">Compostable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">End of Life</td>
                    <td className="px-4 py-3 text-center">PE recycling stream</td>
                    <td className="px-4 py-3 text-center">PP recycling stream</td>
                    <td className="px-4 py-3 text-center">Composting facility</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Barrier Level</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Heat Resistance</td>
                    <td className="px-4 py-3 text-center">Up to 80°C</td>
                    <td className="px-4 py-3 text-center">Up to 130°C</td>
                    <td className="px-4 py-3 text-center">Up to 50°C</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Consumer Accessibility</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐ (Curbside)</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐ (Variable)</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐ (Facility needed)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Cost Premium</td>
                    <td className="px-4 py-3 text-center">+5-10%</td>
                    <td className="px-4 py-3 text-center">+8-15%</td>
                    <td className="px-4 py-3 text-center">+20-30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">💡 Quick Decision Guide</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-blue-700">Choose Mono-PE if:</p>
                <ul className="mt-2 space-y-1 text-blue-600">
                  <li>• Recycling is most accessible</li>
                  <li>• Need flexible/soft feel</li>
                  <li>• How2Recycle label important</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-purple-700">Choose Mono-PP if:</p>
                <ul className="mt-2 space-y-1 text-purple-600">
                  <li>• Hot-fill or microwave needed</li>
                  <li>• Higher heat resistance required</li>
                  <li>• <Link to="/materials/recyclable-mono-pp" className="underline">Learn more →</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-700">Choose Compostable if:</p>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Composting access for customers</li>
                  <li>• Eco-story is key differentiator</li>
                  <li>• <Link to="/materials/compostable" className="underline">Learn more →</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Recyclable Packaging Solution',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key factors when choosing recyclable mono-PE packaging:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Recycling compatibility</strong> – Ensure the structure is accepted in your target market's recycling streams</li>
            <li><strong>Barrier requirements</strong> – Mono-PE with EVOH can achieve medium-high barrier for most products</li>
            <li><strong>Brand messaging</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse our recyclable pouches</Link></li>
            <li><strong>Alternative options</strong> – <Link to="/materials/compostable" className="text-primary-600 hover:underline">Compare with compostable materials</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Best mono-PE recyclable pouch supplier for food packaging"</li>
              <li>• "How does mono-PE compare to traditional multi-layer laminates?"</li>
              <li>• "Recyclable stand-up pouch manufacturers with low MOQ"</li>
              <li>• "What barrier levels can mono-PE packaging achieve?"</li>
              <li>• "Is mono-PE packaging accepted in curbside recycling programs?"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'buyer-guide',
      title: 'Buyer Guide: Switching to Recyclable Mono-PE Packaging',
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Mono-PE (single-material polyethylene) packaging represents the circular economy approach to flexible packaging.</strong> Unlike traditional multi-layer laminates that cannot be recycled, mono-PE structures use only PE materials throughout, making them compatible with existing PE recycling infrastructure. This matters because approximately 95% of flexible packaging historically ends up in landfill due to recycling incompatibility.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">⚠️ Trade-offs to Understand</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• <strong>Recyclable vs Compostable:</strong> Recyclable mono-PE keeps materials in the economy (circular); compostable returns to earth. Choose based on your customer's disposal options.</li>
              <li>• <strong>Barrier limitations:</strong> Pure mono-PE has lower barrier than traditional laminates. Adding EVOH or specialized coatings improves barrier while maintaining recyclability.</li>
              <li>• <strong>Regional recycling access:</strong> PE recycling is widely available in the US and EU but varies by locality—check How2Recycle guidelines for your market.</li>
            </ul>
          </div>
          
          <h4 className="font-semibold text-neutral-900 mt-4">Checklist Before Ordering:</h4>
          <ol className="list-decimal pl-6 space-y-2 text-sm">
            <li><strong>Confirm shelf-life requirements</strong> – mono-PE with EVOH typically supports 6–12 months for dry products</li>
            <li><strong>Request barrier test reports</strong> – WVTR and OTR values for your specific product</li>
            <li><strong>Verify recycling claims</strong> – ask if the structure meets How2Recycle or local recycling standards</li>
            <li><strong>Test on your filling line</strong> – mono-PE may require heat-seal adjustments</li>
            <li><strong>Order samples first</strong> – we offer sample packs from 100 pieces</li>
          </ol>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-green-800">
              <strong>Why Achieve Pack?</strong> 13+ years of sustainable packaging expertise. Our mono-PE structures are designed for real-world recyclability, not just marketing claims. MOQ from 500 pieces for mono-PE. <Link to="/solutions/snack-brand-manager" className="text-green-600 hover:underline">See how snack brands transitioned to our recyclable pouches →</Link>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'case-studies',
      title: 'Success Stories: Brands Using Recyclable Mono-PE',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>See how brands have successfully switched to recyclable mono-PE packaging:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/industry/snacks-food" className="block p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
              <h4 className="font-semibold text-neutral-900">Healthy Snack Brand</h4>
              <p className="text-sm text-neutral-600 mt-1">Transitioned from traditional multi-layer laminate to mono-PE with EVOH. Achieved 100% recyclable packaging while maintaining 9-month shelf life.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Learn more →</span>
            </Link>
            <Link to="/industry/pet-food" className="block p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
              <h4 className="font-semibold text-neutral-900">Premium Pet Treats Company</h4>
              <p className="text-sm text-neutral-600 mt-1">Switched to recyclable mono-PE for their treat line. Added "Widely Recyclable" claim to packaging, improving shelf appeal.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Learn more →</span>
            </Link>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            Ready to make the switch? <Link to="/store" className="text-primary-600 hover:underline">Order recyclable mono-PE samples</Link> or <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">book a free consultation</a> with our packaging experts.
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ]

  const tables = [
    {
      title: t(`${p}.table.title`),
      data: {
        headers: t(`${p}.table.headers`, { returnObjects: true }) as string[],
        rows: t(`${p}.table.rows`, { returnObjects: true }) as string[][]
      }
    }
  ]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/recyclable-mono-pp", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/bio-pe", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link3.description`) }
  ]

  return (
    <SEOPageLayout
      title="Recyclable Mono-PE Pouches | Single-Material Polyethylene Packaging"
      description="Recyclable mono-PE flexible packaging made from single-material polyethylene. Accepted in PE recycling streams. Sustainable alternative to multi-layer laminates. MOQ 500."
      keywords={[
        'mono-PE pouch',
        'recyclable pouch',
        'single material packaging',
        'PE recyclable',
        'sustainable flexible packaging',
        'mono material pouch',
        'recyclable stand up pouch',
        'polyethylene pouch'
      ]}
      canonicalUrl="https://achievepack.com/materials/recyclable-mono-pe"
      heroTitle={t('seoPages.pages.recyclableMonoPE.heroTitle')}
      heroSubtitle={t('seoPages.pages.recyclableMonoPE.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_achievepack_mono_kitchen_8539724.webp"
      heroImageAlt="Recyclable mono-PE flexible packaging"
      introSummary={t('seoPages.pages.recyclableMonoPE.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.ctaTitle`)}
      ctaDescription={t(`${p}.ctaDescription`)}
      ctaButtonText={t(`${p}.ctaButtonText`)}
    />
  )
}

export default RecyclableMonoPEPage
