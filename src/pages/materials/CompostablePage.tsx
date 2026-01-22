import React from 'react'
import { Leaf, Shield, Award, CheckCircle, Globe, Recycle, MessageCircle, BookOpen, Building2, Target, Calendar, Phone, Download, Mail, Image, TrendingUp, BarChart3, ArrowLeftRight, Factory, ShoppingBag, Coffee, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CompostablePage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  
  // Translation key prefix
  const p = 'seoPages.pages.compostable'
  
  const sections = [
    {
      id: 'infographic',
      title: 'What Is Compostable Packaging at a Glance?',
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600">Click the infographic below to view in full size:</p>
          <div className="flex justify-center">
            <ClickableImage 
              src="/imgs/4-infograhic/compost.webp" 
              alt="Compostable Materials Infographic - Complete guide to compostable packaging" 
              className="max-w-full md:max-w-2xl rounded-lg shadow-lg border border-neutral-200 cursor-pointer hover:shadow-xl transition"
              caption="Compostable Materials Infographic"
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
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-lg border border-primary-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              If you're a <strong>US specialty coffee roaster</strong>, an <strong>organic food brand</strong>, or a <strong>DTC wellness company</strong> looking to ditch plastic packaging for genuinely eco-friendly options—without sacrificing freshness or breaking the bank—you're in the right place.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-primary-800">Coffee Roasters</p>
                <p className="text-sm text-neutral-600">You can switch to certified compostable bags with degassing valves</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-primary-800">Snack Brands</p>
                <p className="text-sm text-neutral-600">You'll meet sustainability goals without sacrificing shelf life</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-primary-800">Supplement Companies</p>
                <p className="text-sm text-neutral-600">Premium eco packaging that resonates with health-conscious consumers</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong>
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.keyFacts`)}</h4>
            <ul className="space-y-1 text-sm">
              <li>• {t(`${p}.sections.overview.fact1`)}</li>
              <li>• {t(`${p}.sections.overview.fact2`)}</li>
              <li>• {t(`${p}.sections.overview.fact3`)}</li>
              <li>• {t(`${p}.sections.overview.fact4`)}</li>
              <li>• {t(`${p}.sections.overview.fact5`)}</li>
            </ul>
          </div>
          
          <p className="mt-4">
            {t(`${p}.sections.overview.marketInfo`)}
          </p>
        </div>
      )
    },
    {
      id: 'materials',
      title: t(`${p}.sections.materials.title`),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.materials.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-primary-200 rounded-lg p-4 bg-primary-50/50">
              <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.materials.kraftPla.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.kraftPla.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-primary-700">
                <li>• {t(`${p}.sections.materials.kraftPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature3`)}</li>
              </ul>
            </div>
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.materials.whiteKraftPla.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.whiteKraftPla.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-amber-700">
                <li>• {t(`${p}.sections.materials.whiteKraftPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.whiteKraftPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.whiteKraftPla.feature3`)}</li>
              </ul>
            </div>
            <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <h4 className="font-semibold text-emerald-800 mb-2">{t(`${p}.sections.materials.natureFlex.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.natureFlex.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-emerald-700">
                <li>• {t(`${p}.sections.materials.natureFlex.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.natureFlex.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.natureFlex.feature3`)}</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.materials.pbatPla.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.pbatPla.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-blue-700">
                <li>• {t(`${p}.sections.materials.pbatPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature3`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>{t(`${p}.sections.certifications.intro`)}</p>
          
          {/* Certification Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center">
              <ClickableImage 
                src="/imgs/cert/logo-compostable-seed.png" 
                alt="Seedling Logo - OK Compost Certified" 
                className="h-20 w-auto mb-2"
                caption="Seedling Logo"
              />
              <span className="text-xs text-center text-neutral-600">EU Seedling</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center">
              <ClickableImage 
                src="/imgs/cert/logo-achievepack-BPI.jpg" 
                alt="BPI Certified Compostable - Achieve Pack" 
                className="h-20 w-auto mb-2"
                caption="BPI Certified"
              />
              <span className="text-xs text-center text-neutral-600">US BPI</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center">
              <ClickableImage 
                src="/imgs/cert/cert-din-home-compost.png" 
                alt="DIN CERTCO Home Compostable Certification" 
                className="h-20 w-auto mb-2"
                caption="Home Compostable"
              />
              <span className="text-xs text-center text-neutral-600">Home Compost</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center">
              <ClickableImage 
                src="/imgs/cert/cert-ABA-as5810.png" 
                alt="ABA AS5810 Australian Biodegradable Certification" 
                className="h-20 w-auto mb-2"
                caption="AS5810 Australia"
              />
              <span className="text-xs text-center text-neutral-600">AU AS5810</span>
            </div>
          </div>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <ClickableImage src="/imgs/cert/logo-compostable-seed.png" alt="Seedling Logo" className="h-12 w-auto" caption="EU Seedling Logo" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.eu.title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.eu.desc`)}</p>
                <p className="text-xs text-primary-600 mt-1"><strong>Artwork Usage:</strong> Brands using our compostable materials can display the Seedling logo on their packaging to communicate eco-credentials to consumers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <ClickableImage src="/imgs/cert/logo-achievepack-BPI.jpg" alt="BPI Certified" className="h-12 w-auto" caption="BPI Certification" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.us.title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.us.desc`)}</p>
                <div className="mt-2 p-3 bg-white rounded-lg border border-blue-100">
                  <p className="text-xs text-blue-800"><strong>⚠️ BPI Logo Usage:</strong> The BPI logo is granted to Achieve Pack as the certified manufacturer. If your brand wants to display the BPI logo on your packaging, you must <strong>apply for a sub-license</strong> through BPI.</p>
                  <a href="https://products.bpiworld.org/companies/achieve-pack-company" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline mt-2">
                    → View Achieve Pack BPI Certification Online
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <ClickableImage src="/imgs/cert/cert-ABA-as5810.png" alt="AS5810 Certified" className="h-12 w-auto" caption="AS5810 Australian Certification" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.au.title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.au.desc`)}</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            {t(`${p}.sections.certifications.note`)}
          </p>
        </div>
      )
    },
    // ========== Scenario (Industry Applications) ==========
    {
      id: 'industry-scenarios',
      title: 'Which Industries Are Switching to Compostable Packaging?',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">Here's the thing: compostable packaging isn't just a trend—it's reshaping entire industries. Let's look at who's making the switch and why:</p>
          
          {/* Industry Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Coffee & Tea */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="h-6 w-6 text-amber-600" />
                <h4 className="font-bold text-amber-800">Coffee & Tea</h4>
              </div>
              <ul className="text-sm space-y-2 text-amber-700">
                <li>• <strong>Specialty Roasters:</strong> Kraft/PLA pouches with degassing valves</li>
                <li>• <strong>Tea Brands:</strong> Compostable sachets and stand-up pouches</li>
                <li>• <strong>Cafes:</strong> Retail bags for whole bean sales</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-amber-200">
                <span className="text-xs text-amber-600">Case: US roaster reduced carbon footprint by 65%</span>
              </div>
            </div>
            
            {/* Food & Snacks */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-6 w-6 text-green-600" />
                <h4 className="font-bold text-green-800">Food & Snacks</h4>
              </div>
              <ul className="text-sm space-y-2 text-green-700">
                <li>• <strong>Organic Snacks:</strong> Stand-up pouches for chips, nuts, granola</li>
                <li>• <strong>Dried Fruits:</strong> Clear window pouches for visibility</li>
                <li>• <strong>Superfoods:</strong> Premium kraft bags for powders</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-green-200">
                <span className="text-xs text-green-600">Shelf life: 6-12 months for dry goods</span>
              </div>
            </div>
            
            {/* Health & Wellness */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <h4 className="font-bold text-purple-800">Health & Wellness</h4>
              </div>
              <ul className="text-sm space-y-2 text-purple-700">
                <li>• <strong>Supplements:</strong> Premium pouches for protein powders</li>
                <li>• <strong>CBD Products:</strong> Child-resistant compostable options</li>
                <li>• <strong>Natural Beauty:</strong> Eco sachets for bath products</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-purple-200">
                <span className="text-xs text-purple-600">Appeals to health-conscious consumers</span>
              </div>
            </div>
          </div>
          
          {/* Real-World Case Studies */}
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 mt-6">
            <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary-600" />
              Real Customer Success Stories
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-primary-600 uppercase">US Specialty Coffee</span>
                <p className="text-sm text-neutral-700 mt-2">Switched 50,000 units/month to kraft/PLA pouches. Customer feedback: "90% positive response to sustainability messaging."</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-green-600 uppercase">EU Organic Brand</span>
                <p className="text-sm text-neutral-700 mt-2">Launched new line with EN 13432 certified pouches. Result: 25% increase in premium retail placement.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ========== Data (Market & Performance Data) ==========
    {
      id: 'market-data',
      title: 'What Do Market Trends Say About Compostable Packaging?',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          {/* Market Statistics */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">$15.2B</p>
              <p className="text-sm opacity-90">Global Market Size 2024</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">14.5%</p>
              <p className="text-sm opacity-90">CAGR 2024-2030</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">65%</p>
              <p className="text-sm opacity-90">Carbon Reduction vs Plastic</p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">180</p>
              <p className="text-sm opacity-90">Days to Full Decomposition</p>
            </div>
          </div>
          
          {/* Performance Specifications Table */}
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-neutral-100 px-4 py-3 border-b">
              <h4 className="font-bold text-neutral-900">Technical Performance Data</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Parameter</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Kraft/PLA</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">PBAT/PLA</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">NatureFlex™</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">OTR (cc/m²/day)</td>
                    <td className="px-4 py-3">800-1200</td>
                    <td className="px-4 py-3">400-600</td>
                    <td className="px-4 py-3">7-10</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">WVTR (g/m²/day)</td>
                    <td className="px-4 py-3">20-40</td>
                    <td className="px-4 py-3">10-20</td>
                    <td className="px-4 py-3">35-50</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Shelf Life</td>
                    <td className="px-4 py-3">6-9 months</td>
                    <td className="px-4 py-3">9-12 months</td>
                    <td className="px-4 py-3">6-12 months</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Decomposition Time</td>
                    <td className="px-4 py-3">90-180 days</td>
                    <td className="px-4 py-3">90-180 days</td>
                    <td className="px-4 py-3">45-90 days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Certifications</td>
                    <td className="px-4 py-3">EN 13432, BPI</td>
                    <td className="px-4 py-3">EN 13432, ASTM D6400</td>
                    <td className="px-4 py-3">EN 13432, OK Home</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Environmental Impact Data */}
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-800 mb-4">Environmental Impact Metrics</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">-65%</p>
                <p className="text-sm text-green-600">CO₂ emissions vs conventional plastic</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">100%</p>
                <p className="text-sm text-green-600">Bio-based or renewable content</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">0</p>
                <p className="text-sm text-green-600">Microplastics after decomposition</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ========== Contrast (Material Comparison) ==========
    {
      id: 'material-comparison',
      title: 'Compostable vs Recyclable vs PCR: Which Is Best?',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">Real talk: choosing the right material can feel overwhelming. Here's a straightforward comparison to help you decide:</p>
          
          {/* Compostable vs Conventional Plastic */}
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-red-600 px-4 py-3">
              <h4 className="font-bold text-white text-center">Compostable vs Conventional Plastic</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Feature</th>
                    <th className="px-4 py-3 text-left font-semibold text-green-700">🌱 Compostable</th>
                    <th className="px-4 py-3 text-left font-semibold text-red-700">🛢️ Conventional Plastic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">End of Life</td>
                    <td className="px-4 py-3 text-green-700">✓ Returns to soil in 90-180 days</td>
                    <td className="px-4 py-3 text-red-700">✗ 400+ years to decompose</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Carbon Footprint</td>
                    <td className="px-4 py-3 text-green-700">✓ 65% lower emissions</td>
                    <td className="px-4 py-3 text-red-700">✗ High petroleum-based emissions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Consumer Perception</td>
                    <td className="px-4 py-3 text-green-700">✓ Premium eco-friendly image</td>
                    <td className="px-4 py-3 text-red-700">✗ Increasingly negative perception</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Regulatory Trend</td>
                    <td className="px-4 py-3 text-green-700">✓ Incentives & compliance ready</td>
                    <td className="px-4 py-3 text-red-700">✗ Facing bans globally</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Cost</td>
                    <td className="px-4 py-3 text-amber-700">△ 15-30% higher</td>
                    <td className="px-4 py-3 text-green-700">✓ Lower upfront cost</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Barrier Properties</td>
                    <td className="px-4 py-3 text-amber-700">△ Moderate (improving)</td>
                    <td className="px-4 py-3 text-green-700">✓ Excellent barrier</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Eco Materials Comparison */}
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-primary-600 px-4 py-3">
              <h4 className="font-bold text-white text-center">Eco-Friendly Materials Comparison</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Criteria</th>
                    <th className="px-4 py-3 text-center font-semibold text-green-700">Compostable</th>
                    <th className="px-4 py-3 text-center font-semibold text-blue-700">Recyclable Mono-PE</th>
                    <th className="px-4 py-3 text-center font-semibold text-purple-700">PCR Plastic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Best For</td>
                    <td className="px-4 py-3 text-center">Premium eco brands</td>
                    <td className="px-4 py-3 text-center">Mass market</td>
                    <td className="px-4 py-3 text-center">Circular economy focus</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Disposal Method</td>
                    <td className="px-4 py-3 text-center">Composting facility</td>
                    <td className="px-4 py-3 text-center">Recycling stream</td>
                    <td className="px-4 py-3 text-center">Recycling stream</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Consumer Appeal</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Shelf Life</td>
                    <td className="px-4 py-3 text-center">6-12 months</td>
                    <td className="px-4 py-3 text-center">12-18 months</td>
                    <td className="px-4 py-3 text-center">12-18 months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Price Premium</td>
                    <td className="px-4 py-3 text-center">+20-30%</td>
                    <td className="px-4 py-3 text-center">+5-10%</td>
                    <td className="px-4 py-3 text-center">+10-15%</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">MOQ at Achieve Pack</td>
                    <td className="px-4 py-3 text-center">1,000 pcs</td>
                    <td className="px-4 py-3 text-center">1,000 pcs</td>
                    <td className="px-4 py-3 text-center">1,000 pcs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Decision Helper */}
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">💡 Quick Decision Guide</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-amber-700">Choose Compostable if:</p>
                <ul className="mt-2 space-y-1 text-amber-600">
                  <li>• Strong sustainability story needed</li>
                  <li>• Customers have composting access</li>
                  <li>• Premium brand positioning</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Choose Mono-PE if:</p>
                <ul className="mt-2 space-y-1 text-blue-600">
                  <li>• Recycling is more accessible</li>
                  <li>• Need longer shelf life</li>
                  <li>• Cost-sensitive market</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-purple-700">Choose PCR if:</p>
                <ul className="mt-2 space-y-1 text-purple-600">
                  <li>• Circular economy messaging</li>
                  <li>• High barrier needed</li>
                  <li>• Existing recycling infrastructure</li>
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
          <p>{t(`${p}.sections.applications.intro`)}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm text-primary-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'disposal',
      title: t(`${p}.sections.disposal.title`),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.disposal.intro`)}</p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.disposal.commercialVsHome`)}</h4>
            <p className="text-sm text-amber-700">
              {t(`${p}.sections.disposal.commercialVsHomeDesc`)}
            </p>
          </div>
          
          <div className="mt-4">
            <h4 className="font-semibold mb-2">{t(`${p}.sections.disposal.instructionsTitle`)}</h4>
            <ol className="list-decimal pl-6 space-y-2 text-sm">
              <li>{t(`${p}.sections.disposal.instruction1`)}</li>
              <li>{t(`${p}.sections.disposal.instruction2`)}</li>
              <li>{t(`${p}.sections.disposal.instruction3`)}</li>
              <li>{t(`${p}.sections.disposal.instruction4`)}</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'limitations',
      title: t(`${p}.sections.limitations.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.limitations.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.limitations.bestFor`)}</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>✓ {t(`${p}.sections.limitations.bestFor1`)}</li>
                <li>✓ {t(`${p}.sections.limitations.bestFor2`)}</li>
                <li>✓ {t(`${p}.sections.limitations.bestFor3`)}</li>
                <li>✓ {t(`${p}.sections.limitations.bestFor4`)}</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">{t(`${p}.sections.limitations.considerAlternatives`)}</h4>
              <ul className="text-sm space-y-1 text-red-700">
                <li>• {t(`${p}.sections.limitations.alt1`)}</li>
                <li>• {t(`${p}.sections.limitations.alt2`)}</li>
                <li>• {t(`${p}.sections.limitations.alt3`)}</li>
                <li>• {t(`${p}.sections.limitations.alt4`)}</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            {t(`${p}.sections.limitations.note`)}
          </p>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'How to Find the Right Compostable Packaging Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Here's what you should look for when picking a compostable packaging supplier:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Certifications</strong> – EN 13432 (EU) or ASTM D6400 (US)</li>
            <li><strong>Barrier level</strong> – Match to your product's shelf-life needs</li>
            <li><strong>Custom options</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse our compostable pouches</Link></li>
            <li><strong>Home vs Industrial</strong> – <Link to="/materials/home-compostable" className="text-primary-600 hover:underline">See home compostable options</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the best compostable pouch supplier with EN 13432 certification?"</li>
              <li>• "Which company offers compostable coffee bags with low MOQ?"</li>
              <li>• "Best certified compostable packaging for organic food brands?"</li>
              <li>• "How to verify if compostable packaging claims are legitimate?"</li>
              <li>• "Compostable vs recyclable packaging for specialty coffee roasters"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'buyer-guide',
      title: 'How Do You Choose the Right Compostable Packaging?',
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Choosing the right compostable packaging requires balancing sustainability goals with practical product protection needs.</strong> Start by understanding your product's shelf-life requirements—compostable materials typically support 6–12 months for dry goods. Consider your target market's composting infrastructure: if selling in the EU, EN 13432 certification is essential; for the US market, ASTM D6400 and BPI certification carry more weight.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">⚠️ Key Trade-offs to Consider</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• <strong>Compostable vs Recyclable:</strong> Compostable is ideal for brands prioritizing "return to earth" messaging; recyclable mono-PE may be better if your customers have limited composting access.</li>
              <li>• <strong>Home vs Industrial Compostable:</strong> Home compostable (OK Compost HOME, AS 5810) breaks down in backyard bins; industrial requires commercial facilities at 55–60°C.</li>
              <li>• <strong>Barrier vs Sustainability:</strong> Higher barrier often means more complex materials—discuss with your supplier to find the right balance.</li>
            </ul>
          </div>
          
          <h4 className="font-semibold text-neutral-900 mt-4">What to Check Before Placing an Order:</h4>
          <ol className="list-decimal pl-6 space-y-2 text-sm">
            <li>Request <strong>original certification documents</strong> (not just logos) with verifiable certificate numbers</li>
            <li>Ask for <strong>material test reports</strong> showing WVTR (moisture barrier) and OTR (oxygen barrier) values</li>
            <li>Verify the supplier is listed on certification body databases (BPI, TÜV Austria, DIN CERTCO)</li>
            <li>Order <strong>sample packs</strong> to test sealing, printing quality, and shelf-life compatibility</li>
            <li>Confirm <strong>lead times</strong> (typically 6–8 weeks for custom compostable pouches)</li>
          </ol>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-green-800">
              <strong>Why Achieve Pack?</strong> We're BPI-certified (Certificate #10556097) with 13+ years of experience. Our MOQ starts at just 100 pieces—compare that to the 5,000–10,000 minimum typically required elsewhere. <Link to="/case-studies/coffee-roastery" className="text-green-600 hover:underline">See how US specialty roasters switched to our compostable bags →</Link>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'case-studies',
      title: 'How Have Other Brands Succeeded With Compostable Packaging?',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Don't just take our word for it. Here's how real brands made the switch to certified compostable packaging:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/case-studies/coffee-roastery" className="block p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
              <h4 className="font-semibold text-neutral-900">US Specialty Coffee Roaster</h4>
              <p className="text-sm text-neutral-600 mt-1">Switched from conventional plastic to kraft/PLA compostable pouches with degassing valve. Reduced packaging carbon footprint by 65%.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Read case study →</span>
            </Link>
            <Link to="/case-studies/superfood-brand" className="block p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
              <h4 className="font-semibold text-neutral-900">Organic Superfood Brand</h4>
              <p className="text-sm text-neutral-600 mt-1">Launched new product line with EN 13432 certified compostable stand-up pouches. Achieved premium shelf presence while meeting sustainability goals.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Read case study →</span>
            </Link>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            Over 500 brands worldwide trust Achieve Pack for their sustainable packaging needs. <Link to="/company/certificates" className="text-primary-600 hover:underline">View our certifications</Link> or <Link to="/company/factory-tour" className="text-primary-600 hover:underline">take a virtual factory tour</Link>.
          </p>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: 'When Is Compostable Packaging Right (or Wrong) for You?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-2">✅ Best Fit For...</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Brands with strong sustainability messaging</li>
                <li>• Products with 6-12 month shelf life needs</li>
                <li>• Markets with composting infrastructure (EU, CA, WA)</li>
                <li>• Premium positioning where eco-value adds margin</li>
                <li>• Coffee roasters, organic food, wellness brands</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">⚠️ Also Works For...</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Brands testing eco packaging for the first time</li>
                <li>• Products with moderate barrier requirements</li>
                <li>• Companies willing to educate consumers on disposal</li>
                <li>• Regional launches before national rollout</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">❌ Not Recommended If...</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• You need 18+ month shelf life</li>
                <li>• Your product requires ultra-high barrier</li>
                <li>• Your customers lack composting access</li>
                <li>• Price is the only consideration</li>
                <li>• <Link to="/materials/recyclable-mono-pe" className="underline">Consider recyclable mono-PE instead →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'How Can You Take the Next Step?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-lg">We get it—switching packaging is a big decision. You don't have to change everything overnight. Start with what makes sense for your business:</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-primary-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">Ready to Move Fast?</h4>
              <p className="text-sm opacity-90 mb-4">Book a 30-min call to discuss your exact needs</p>
              <button onClick={openCalendly} className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition cursor-pointer">
                Book a Call
              </button>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Want to Test First?</h4>
              <p className="text-sm text-neutral-600 mb-4">Order a sample kit to test sealing and shelf life</p>
              <Link to="/store" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                Get Sample Kit
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Still Exploring?</h4>
              <p className="text-sm text-neutral-600 mb-4">Download our buyer guide or browse case studies</p>
              <Link to="/case-studies/coffee-roastery" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-primary-300 transition">
                See Case Studies
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.faq.q1`),
      answer: t(`${p}.faq.a1`)
    },
    {
      question: t(`${p}.faq.q2`),
      answer: t(`${p}.faq.a2`)
    },
    {
      question: t(`${p}.faq.q3`),
      answer: t(`${p}.faq.a3`)
    },
    {
      question: t(`${p}.faq.q4`),
      answer: t(`${p}.faq.a4`)
    },
    {
      question: t(`${p}.faq.q5`),
      answer: t(`${p}.faq.a5`)
    }
  ]

  const tableHeaders = t(`${p}.table.headers`, { returnObjects: true }) as string[]
  const tables = [
    {
      title: t(`${p}.table.title`),
      data: {
        headers: tableHeaders,
        rows: [
          t(`${p}.table.row1`, { returnObjects: true }) as string[],
          t(`${p}.table.row2`, { returnObjects: true }) as string[],
          t(`${p}.table.row3`, { returnObjects: true }) as string[],
          t(`${p}.table.row4`, { returnObjects: true }) as string[],
          t(`${p}.table.row5`, { returnObjects: true }) as string[]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: "Shop Compostable Pouches",
      url: "/store",
      description: "Browse certified compostable packaging - MOQ from 100 pieces"
    },
    {
      title: t(`${p}.relatedLinks.link1.title`),
      url: "/materials/recyclable-mono-pe",
      description: t(`${p}.relatedLinks.link1.description`)
    },
    {
      title: t(`${p}.relatedLinks.link2.title`),
      url: "/industry/coffee-tea",
      description: t(`${p}.relatedLinks.link2.description`)
    },
    {
      title: t(`${p}.relatedLinks.link3.title`),
      url: "/packaging/stand-up-pouches",
      description: t(`${p}.relatedLinks.link3.description`)
    },
    {
      title: "Sustainable Packaging Guide",
      url: "/blog/sustainable-packaging-supplier-analysis",
      description: "Compare eco-friendly packaging suppliers"
    }
  ]

  return (
    <SEOPageLayout
      title={t('seoPages.pages.compostable.title')}
      description={t('seoPages.pages.compostable.description')}
      keywords={[
        'compostable packaging',
        'compostable pouches',
        'PLA packaging',
        'kraft paper pouch',
        'EN 13432 certified',
        'ASTM D6400',
        'biodegradable packaging',
        'sustainable packaging',
        'eco-friendly pouches',
        'plant-based packaging',
        'zero waste packaging'
      ]}
      canonicalUrl="https://achievepack.com/materials/compostable"
      heroTitle={t('seoPages.pages.compostable.heroTitle')}
      heroSubtitle={t('seoPages.pages.compostable.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      heroImageAlt="Certified compostable kraft paper pouches with EN 13432 certification"
      introSummary={t('seoPages.pages.compostable.introSummary')}
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

export default CompostablePage
