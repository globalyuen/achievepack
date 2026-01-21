import React from 'react'
import { Recycle, CheckCircle, Shield, Award, Factory, MessageCircle, Target, Calendar, Phone, Download, Mail, Image, TrendingUp, BarChart3, ArrowLeftRight, ShoppingBag, Coffee, Sparkles, Globe, Building2, Leaf } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const PCRPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.pcr'
  const sections = [
    {
      id: 'infographic',
      title: 'PCR Packaging Infographic',
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600">Click the infographic below to view in full size:</p>
          <div className="flex justify-center">
            <ClickableImage 
              src="/imgs/4-infograhic/PCR.webp" 
              alt="PCR Packaging Infographic - Post-Consumer Recycled materials guide" 
              className="max-w-full md:max-w-2xl rounded-lg shadow-lg border border-neutral-200 cursor-pointer hover:shadow-xl transition"
              caption="PCR Packaging Infographic"
            />
          </div>
        </div>
      )
    },
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border border-emerald-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              If you are a brand with <strong>circular economy commitments</strong>, looking to reduce virgin plastic use while maintaining conventional packaging performance—PCR (Post-Consumer Recycled) packaging is your solution.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-emerald-800">Corporate Sustainability</p>
                <p className="text-sm text-neutral-600">Meet recycled content commitments</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-emerald-800">EU EPR Compliance</p>
                <p className="text-sm text-neutral-600">Reduce Extended Producer Responsibility fees</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-emerald-800">Green Claims</p>
                <p className="text-sm text-neutral-600">GRS certified for verified marketing claims</p>
              </div>
            </div>
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
          <div className="bg-emerald-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-emerald-800 mb-2">{t(`${p}.sections.overview.keyBenefits`)}</h4>
            <ul className="space-y-1 text-sm text-emerald-700">
              {(t(`${p}.sections.overview.benefits`, { returnObjects: true }) as string[]).map((b, i) => <li key={i}>✓ {b}</li>)}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'content-levels',
      title: t(`${p}.sections.contentLevels.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.contentLevels.intro`)}</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="border border-emerald-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">30%</div>
              <h4 className="font-semibold text-emerald-800 mb-1">{t(`${p}.sections.contentLevels.level30.title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.contentLevels.level30.desc`)}</p>
            </div>
            <div className="border border-emerald-300 rounded-lg p-4 text-center bg-emerald-50">
              <div className="text-3xl font-bold text-emerald-600 mb-2">50%</div>
              <h4 className="font-semibold text-emerald-800 mb-1">{t(`${p}.sections.contentLevels.level50.title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.contentLevels.level50.desc`)}</p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
              <h4 className="font-semibold text-emerald-800 mb-1">{t(`${p}.sections.contentLevels.level100.title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.contentLevels.level100.desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'food-safety',
      title: t(`${p}.sections.foodSafety.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.foodSafety.intro`)}</p>
          
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              {(t(`${p}.sections.foodSafety.items`, { returnObjects: true }) as string[]).map((item, i) => <li key={i}>✓ {item}</li>)}
            </ul>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            {t(`${p}.sections.foodSafety.note`)}
          </p>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          {/* GRS Certification Logo */}
          <div className="flex items-center gap-6 bg-emerald-50 p-4 rounded-lg border border-emerald-200 mb-4">
            <ClickableImage 
              src="/imgs/cert/cert-pcr-grs.webp" 
              alt="GRS Global Recycled Standard Certification" 
              className="h-24 w-auto"
              caption="GRS Certified"
            />
            <div>
              <h4 className="font-semibold text-emerald-800 mb-1">Global Recycled Standard (GRS)</h4>
              <p className="text-sm text-emerald-700">Our PCR materials are GRS certified, ensuring traceability of recycled content throughout the supply chain. This certification verifies the recycled content percentage and responsible production practices.</p>
              <p className="text-xs text-emerald-600 mt-2"><strong>Brand Usage:</strong> GRS certification enables brands to make verified recycled content claims on their packaging and marketing materials.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.certifications.grs.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.certifications.grs.desc`)}</p>
            </div>
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.certifications.scs.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.certifications.scs.desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    // ========== 場景 (Industry Applications) ==========
    {
      id: 'industry-scenarios',
      title: '行業應用場景 Industry Applications',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">PCR packaging is ideal for brands with circular economy commitments and recycled content targets:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-5 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-6 w-6 text-emerald-600" />
                <h4 className="font-bold text-emerald-800">CPG & FMCG Brands</h4>
              </div>
              <ul className="text-sm space-y-2 text-emerald-700">
                <li>• <strong>Personal Care:</strong> Shampoo, soap refill pouches</li>
                <li>• <strong>Household:</strong> Cleaning product refills</li>
                <li>• <strong>Food:</strong> Snacks with recycled content claims</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-emerald-200">
                <span className="text-xs text-emerald-600">Meeting 2025 recycled content pledges</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="h-6 w-6 text-blue-600" />
                <h4 className="font-bold text-blue-800">EU Market Brands</h4>
              </div>
              <ul className="text-sm space-y-2 text-blue-700">
                <li>• <strong>EPR Compliance:</strong> Reduce producer responsibility fees</li>
                <li>• <strong>Green Claims:</strong> GRS certified marketing</li>
                <li>• <strong>Retail Requirements:</strong> Meet retailer sustainability mandates</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <span className="text-xs text-blue-600">EU Packaging Regulation ready</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <h4 className="font-bold text-purple-800">Sustainability Leaders</h4>
              </div>
              <ul className="text-sm space-y-2 text-purple-700">
                <li>• <strong>B-Corps:</strong> Verified circular economy practices</li>
                <li>• <strong>ESG Focused:</strong> Corporate sustainability reporting</li>
                <li>• <strong>Premium Brands:</strong> Transparent sourcing story</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-purple-200">
                <span className="text-xs text-purple-600">Supports sustainability reporting</span>
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
                <span className="text-xs font-semibold text-emerald-600 uppercase">Global CPG Company</span>
                <p className="text-sm text-neutral-700 mt-2">Transitioned to 50% PCR pouches across EU portfolio. Achieved 30% EPR fee reduction and met 2025 recycled content target early.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-blue-600 uppercase">US Natural Brand</span>
                <p className="text-sm text-neutral-700 mt-2">Launched "100% recycled content" packaging line. Customer surveys showed 25% increase in purchase intent.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ========== 數據 (Market & Performance Data) ==========
    {
      id: 'market-data',
      title: '市場數據 Market & Performance Data',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-5 rounded-xl text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">30-100%</p>
              <p className="text-sm opacity-90">PCR Content Available</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">-50%</p>
              <p className="text-sm opacity-90">Virgin Plastic Reduction</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">GRS</p>
              <p className="text-sm opacity-90">Certified Traceability</p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">12-18</p>
              <p className="text-sm opacity-90">Months Shelf Life</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-neutral-100 px-4 py-3 border-b">
              <h4 className="font-bold text-neutral-900">PCR Content Levels & Applications</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">PCR Level</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Best For</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Appearance</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Cost Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">30% PCR</td>
                    <td className="px-4 py-3">Entry-level sustainability</td>
                    <td className="px-4 py-3">Near-virgin clarity</td>
                    <td className="px-4 py-3">+5-8%</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">50% PCR</td>
                    <td className="px-4 py-3">Balanced performance & claims</td>
                    <td className="px-4 py-3">Slight tint acceptable</td>
                    <td className="px-4 py-3">+8-12%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">100% PCR</td>
                    <td className="px-4 py-3">Maximum sustainability message</td>
                    <td className="px-4 py-3">Opaque/kraft preferred</td>
                    <td className="px-4 py-3">+12-18%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
            <h4 className="font-bold text-emerald-800 mb-4">Environmental Impact: PCR Benefits</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-700">-70%</p>
                <p className="text-sm text-emerald-600">Energy vs virgin plastic</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-700">-50%</p>
                <p className="text-sm text-emerald-600">CO₂ emissions reduction</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-700">∞</p>
                <p className="text-sm text-emerald-600">Recyclable again & again</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ========== 對比 (Material Comparison) ==========
    {
      id: 'material-comparison',
      title: '材料對比 Material Comparison',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">Compare PCR with other sustainable packaging options:</p>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-primary-600 px-4 py-3">
              <h4 className="font-bold text-white text-center">Sustainable Materials Comparison</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Criteria</th>
                    <th className="px-4 py-3 text-center font-semibold text-emerald-700">PCR</th>
                    <th className="px-4 py-3 text-center font-semibold text-green-700">Bio-PE</th>
                    <th className="px-4 py-3 text-center font-semibold text-purple-700">Compostable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Sustainability Story</td>
                    <td className="px-4 py-3 text-center">Circular economy</td>
                    <td className="px-4 py-3 text-center">Carbon negative</td>
                    <td className="px-4 py-3 text-center">Returns to earth</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">End of Life</td>
                    <td className="px-4 py-3 text-center">Recyclable</td>
                    <td className="px-4 py-3 text-center">Recyclable</td>
                    <td className="px-4 py-3 text-center">Compostable</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Barrier Performance</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Certifications</td>
                    <td className="px-4 py-3 text-center">GRS, SCS</td>
                    <td className="px-4 py-3 text-center">I'm Green™</td>
                    <td className="px-4 py-3 text-center">BPI, EN 13432</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Cost Premium</td>
                    <td className="px-4 py-3 text-center">+5-15%</td>
                    <td className="px-4 py-3 text-center">+5-15%</td>
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
                <p className="font-semibold text-emerald-700">Choose PCR if:</p>
                <ul className="mt-2 space-y-1 text-emerald-600">
                  <li>• Circular economy messaging key</li>
                  <li>• Recycled content targets to meet</li>
                  <li>• GRS certification needed</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-700">Choose Bio-PE if:</p>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Carbon footprint priority</li>
                  <li>• Renewable source story</li>
                  <li>• <Link to="/materials/bio-pe" className="underline">Learn more →</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-purple-700">Choose Compostable if:</p>
                <ul className="mt-2 space-y-1 text-purple-600">
                  <li>• End-of-life story essential</li>
                  <li>• Customers have composting access</li>
                  <li>• <Link to="/materials/compostable" className="underline">Learn more →</Link></li>
                </ul>
              </div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-emerald-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-emerald-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right PCR Packaging Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key factors when selecting PCR packaging:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Recycled content</strong> – 30%, 50%, or 100% PCR available</li>
            <li><strong>Certifications</strong> – Look for GRS certification</li>
            <li><strong>Custom options</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse our PCR pouches</Link></li>
            <li><strong>Food safety</strong> – FDA compliant recycled materials</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the best PCR packaging supplier with GRS certification?"</li>
              <li>• "Which company offers recycled content pouches with low MOQ?"</li>
              <li>• "Best circular economy packaging for sustainable brands?"</li>
              <li>• "PCR vs Bio-PE: which is better for sustainability claims?"</li>
              <li>• "How to verify recycled content percentage in packaging?"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: 'Is PCR Packaging Right for You?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-2">✅ Best Fit For...</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Brands with recycled content targets</li>
                <li>• Products where recyclability matters</li>
                <li>• Companies avoiding compostable complexity</li>
                <li>• Non-food or low-barrier food applications</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">⚠️ Also Works For...</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Brands transitioning from virgin plastic</li>
                <li>• Products with moderate shelf life needs</li>
                <li>• Companies starting sustainability journey</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">❌ Not Recommended If...</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• You need "compostable" messaging</li>
                <li>• Ultra-clear packaging is required</li>
                <li>• <Link to="/materials/bio-pe" className="underline">Consider Bio-PE for carbon-negative claims →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Switch to PCR?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-emerald-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">Ready to Move Fast?</h4>
              <p className="text-sm opacity-90 mb-4">Book a call to discuss PCR content levels</p>
              <button onClick={openCalendly} className="inline-block bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition cursor-pointer">
                Book a Call
              </button>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Want to Test First?</h4>
              <p className="text-sm text-neutral-600 mb-4">Order PCR sample kit (MOQ 500 pcs)</p>
              <Link to="/store" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                Get Samples
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Still Exploring?</h4>
              <p className="text-sm text-neutral-600 mb-4">Compare PCR with Bio-PE or compostable</p>
              <Link to="/materials/compostable" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-emerald-300 transition">
                Compare Options
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) },
    { question: t(`${p}.faq.q5`), answer: t(`${p}.faq.a5`) }
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
    { title: "Shop PCR Pouches", url: "/store", description: "Browse recycled content packaging - MOQ from 500 pieces" },
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/recyclable-mono-pe", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/bio-pe", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link3.description`) },
    { title: "Sustainable Packaging Guide", url: "/blog/sustainable-packaging-supplier-analysis", description: "Compare eco-friendly suppliers" }
  ]

  return (
    <SEOPageLayout
      title="PCR Packaging | Post-Consumer Recycled Pouches | Circular Economy"
      description="PCR (Post-Consumer Recycled) flexible packaging with 30-50% recycled content. GRS certified, FDA approved. Reduce virgin plastic use. MOQ 500 units."
      keywords={[
        'PCR packaging',
        'post-consumer recycled',
        'recycled content pouch',
        'GRS certified',
        'circular economy packaging',
        'recycled plastic packaging',
        'sustainable packaging',
        'recycled pouches'
      ]}
      canonicalUrl="https://achievepack.com/materials/pcr"
      heroTitle={t('seoPages.pages.pcr.heroTitle')}
      heroSubtitle={t('seoPages.pages.pcr.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_achievepack_pcr_office_8175988.webp"
      heroImageAlt="PCR post-consumer recycled packaging"
      introSummary={t('seoPages.pages.pcr.introSummary')}
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

export default PCRPage
