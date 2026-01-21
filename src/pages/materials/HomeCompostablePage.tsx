import React from 'react'
import { Home, Leaf, CheckCircle, Clock, Award, Target, Shield, Calendar, Phone, Download, Mail, MessageCircle, Building2, TrendingUp, BarChart3, ArrowLeftRight, Factory, ShoppingBag, Coffee, Sparkles, Globe, Recycle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import ClickableImage from '../../components/ClickableImage'

const HomeCompostablePage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  
  const p = 'seoPages.pages.homeCompostable'
  
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              If you are a brand selling to <strong>eco-conscious consumers</strong> who compost at home, or targeting markets like <strong>Australia, UK, or Germany</strong> where home composting is common—home compostable packaging lets your customers dispose responsibly in their own backyard.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-green-800">Organic Food Brands</p>
                <p className="text-sm text-neutral-600">Complete the eco story from product to packaging</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-green-800">Tea & Herbal Products</p>
                <p className="text-sm text-neutral-600">Natural products deserve natural disposal</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-green-800">AU/UK/EU Sellers</p>
                <p className="text-sm text-neutral-600">Meet local composting certifications</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Home className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong>
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">{t(`${p}.sections.overview.whyChoose`)}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t(`${p}.sections.overview.benefit1`)}</li>
            <li>{t(`${p}.sections.overview.benefit2`)}</li>
            <li>{t(`${p}.sections.overview.benefit3`)}</li>
            <li>{t(`${p}.sections.overview.benefit4`)}</li>
            <li>{t(`${p}.sections.overview.benefit5`)}</li>
          </ul>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          {/* Certification Badges Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/cert-din-home-compost.png" 
                alt="DIN CERTCO Home Compostable Certification" 
                className="h-16 w-auto mb-2"
                caption="Home Compostable"
              />
              <span className="text-xs font-semibold text-neutral-800">OK Home</span>
              <span className="text-xs text-neutral-500">TÜV Austria</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/cert-ABA-as5810.png" 
                alt="ABA AS5810 Australian Home Composting Certification" 
                className="h-16 w-auto mb-2"
                caption="AS5810 Australia"
              />
              <span className="text-xs font-semibold text-neutral-800">AS 5810</span>
              <span className="text-xs text-neutral-500">Australia</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/logo-compostable-seed.png" 
                alt="EU Seedling Logo Compostable" 
                className="h-16 w-auto mb-2"
                caption="EU Seedling"
              />
              <span className="text-xs font-semibold text-neutral-800">Seedling</span>
              <span className="text-xs text-neutral-500">EU Standard</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/logo-achievepack-BPI.jpg" 
                alt="BPI Certified Compostable" 
                className="h-16 w-auto mb-2"
                caption="BPI Certified"
              />
              <span className="text-xs font-semibold text-neutral-800">BPI</span>
              <span className="text-xs text-neutral-500">US Standard</span>
            </div>
          </div>
          
          {/* Detailed Certification Info */}
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-green-200 flex-shrink-0">
                  <ClickableImage src="/imgs/cert/cert-din-home-compost.png" alt="OK Home" className="h-10 w-auto" caption="OK Home" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">{t(`${p}.sections.certifications.okHome.title`)}</h4>
                  <p className="text-sm text-green-700">{t(`${p}.sections.certifications.okHome.subtitle`)}</p>
                </div>
              </div>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.certifications.okHome.feature1`)}</li>
                <li>• {t(`${p}.sections.certifications.okHome.feature2`)}</li>
                <li>• {t(`${p}.sections.certifications.okHome.feature3`)}</li>
                <li>• {t(`${p}.sections.certifications.okHome.feature4`)}</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-blue-200 flex-shrink-0">
                  <ClickableImage src="/imgs/cert/cert-ABA-as5810.png" alt="AS5810" className="h-10 w-auto" caption="AS5810" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">{t(`${p}.sections.certifications.as5810.title`)}</h4>
                  <p className="text-sm text-blue-700">{t(`${p}.sections.certifications.as5810.subtitle`)}</p>
                </div>
              </div>
              <ul className="text-sm space-y-1">
                <li>• {t(`${p}.sections.certifications.as5810.feature1`)}</li>
                <li>• {t(`${p}.sections.certifications.as5810.feature2`)}</li>
                <li>• {t(`${p}.sections.certifications.as5810.feature3`)}</li>
                <li>• {t(`${p}.sections.certifications.as5810.feature4`)}</li>
              </ul>
            </div>
          </div>
          
          {/* Certification Link */}
          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 mt-4">
            <p className="text-sm text-neutral-600">
              <strong>Verify our certifications:</strong> View all our compostable certifications and download official documents at our <Link to="/company/certificates" className="text-primary-600 hover:underline">Certificates Page</Link>.
            </p>
          </div>
        </div>
      )
    },
    // ========== Scenario (Industry Applications) ==========
    {
      id: 'industry-scenarios',
      title: 'Industry Applications',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">Home compostable packaging is ideal for brands targeting eco-conscious consumers who compost at home:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="h-6 w-6 text-amber-600" />
                <h4 className="font-bold text-amber-800">Specialty Tea & Coffee</h4>
              </div>
              <ul className="text-sm space-y-2 text-amber-700">
                <li>• <strong>Loose Leaf Tea:</strong> Kraft/PLA sachets for premium tea</li>
                <li>• <strong>Single Origin Coffee:</strong> Small batch roasters</li>
                <li>• <strong>Herbal Blends:</strong> Natural products, natural disposal</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-amber-200">
                <span className="text-xs text-amber-600">Perfect for farmers market & specialty retail</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-6 w-6 text-green-600" />
                <h4 className="font-bold text-green-800">Organic Food Brands</h4>
              </div>
              <ul className="text-sm space-y-2 text-green-700">
                <li>• <strong>Organic Snacks:</strong> Complete the eco-story</li>
                <li>• <strong>Dried Fruits:</strong> Clear window options available</li>
                <li>• <strong>Seeds & Nuts:</strong> Short shelf life products</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-green-200">
                <span className="text-xs text-green-600">Appeals to health & eco-conscious consumers</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <h4 className="font-bold text-purple-800">AU/UK/EU Markets</h4>
              </div>
              <ul className="text-sm space-y-2 text-purple-700">
                <li>• <strong>Australia:</strong> AS 5810 certified for local compliance</li>
                <li>• <strong>UK:</strong> Garden composting culture strong</li>
                <li>• <strong>Germany:</strong> High home composting adoption</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-purple-200">
                <span className="text-xs text-purple-600">Regional certifications available</span>
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
                <span className="text-xs font-semibold text-green-600 uppercase">Australian Tea Brand</span>
                <p className="text-sm text-neutral-700 mt-2">Switched to AS 5810 certified pouches. Customer feedback: "Love that I can compost the bag with my tea leaves!"</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-amber-600 uppercase">UK Organic Snacks</span>
                <p className="text-sm text-neutral-700 mt-2">Launched with OK Home certified bags. 40% of customers mentioned packaging in positive reviews.</p>
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
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">45%</p>
              <p className="text-sm opacity-90">UK Households Compost at Home</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">65%</p>
              <p className="text-sm opacity-90">Australian Home Composters</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">180</p>
              <p className="text-sm opacity-90">Days to Full Decomposition</p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">20-30°C</p>
              <p className="text-sm opacity-90">Ambient Temperature Composting</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-neutral-100 px-4 py-3 border-b">
              <h4 className="font-bold text-neutral-900">Home Compostable Material Options</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Material</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Decomposition</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Shelf Life</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Certifications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Kraft/PLA</td>
                    <td className="px-4 py-3">90-180 days</td>
                    <td className="px-4 py-3">3-6 months</td>
                    <td className="px-4 py-3">OK Home, AS5810</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">PBAT/PLA Blend</td>
                    <td className="px-4 py-3">90-180 days</td>
                    <td className="px-4 py-3">6-9 months</td>
                    <td className="px-4 py-3">OK Home</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">NatureFlex™</td>
                    <td className="px-4 py-3">45-90 days</td>
                    <td className="px-4 py-3">6-12 months</td>
                    <td className="px-4 py-3">OK Home, TÜV</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Paper/PLA</td>
                    <td className="px-4 py-3">60-120 days</td>
                    <td className="px-4 py-3">3-6 months</td>
                    <td className="px-4 py-3">OK Home, AS5810</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-800 mb-4">Environmental Impact: Home vs Landfill</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">0</p>
                <p className="text-sm text-green-600">Microplastics after composting</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">100%</p>
                <p className="text-sm text-green-600">Returns nutrients to soil</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">-70%</p>
                <p className="text-sm text-green-600">CO₂ vs plastic in landfill</p>
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
          <p className="text-lg">Understanding home vs industrial compostable helps you make the right choice:</p>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 px-4 py-3">
              <h4 className="font-bold text-white text-center">Home Compostable vs Industrial Compostable</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Feature</th>
                    <th className="px-4 py-3 text-left font-semibold text-green-700">🏡 Home Compostable</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-700">🏭 Industrial Compostable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Temperature Required</td>
                    <td className="px-4 py-3 text-green-700">✓ 20-30°C (ambient)</td>
                    <td className="px-4 py-3 text-blue-700">58°C+ (controlled)</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Where to Compost</td>
                    <td className="px-4 py-3 text-green-700">✓ Backyard bin</td>
                    <td className="px-4 py-3 text-blue-700">Commercial facility</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Consumer Accessibility</td>
                    <td className="px-4 py-3 text-green-700">✓ Easy - home garden</td>
                    <td className="px-4 py-3 text-amber-700">△ Requires facility access</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Barrier Properties</td>
                    <td className="px-4 py-3 text-amber-700">△ Low-Medium</td>
                    <td className="px-4 py-3 text-blue-700">✓ Medium-High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Shelf Life</td>
                    <td className="px-4 py-3">3-9 months</td>
                    <td className="px-4 py-3">9-12+ months</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Cost</td>
                    <td className="px-4 py-3 text-amber-700">△ Higher premium</td>
                    <td className="px-4 py-3 text-green-700">✓ More economical</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">💡 Quick Decision Guide</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-green-700">Choose Home Compostable if:</p>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Your customers have gardens/compost bins</li>
                  <li>• Selling in AU/UK/EU markets</li>
                  <li>• Products with 3-6 month shelf life</li>
                  <li>• Premium eco-story is key differentiator</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Choose Industrial Compostable if:</p>
                <ul className="mt-2 space-y-1 text-blue-600">
                  <li>• Need longer shelf life (9-12+ months)</li>
                  <li>• Higher barrier required</li>
                  <li>• Commercial composting accessible to customers</li>
                  <li>• <Link to="/materials/industrial-compostable" className="underline">Learn more →</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t(`${p}.sections.materials.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.materials.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{t(`${p}.sections.materials.kraftPla.title`)}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• {t(`${p}.sections.materials.kraftPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature3`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature4`)}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{t(`${p}.sections.materials.pbatPla.title`)}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• {t(`${p}.sections.materials.pbatPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature3`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature4`)}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{t(`${p}.sections.materials.cellulose.title`)}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• {t(`${p}.sections.materials.cellulose.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.cellulose.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.cellulose.feature3`)}</li>
                <li>• {t(`${p}.sections.materials.cellulose.feature4`)}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{t(`${p}.sections.materials.paper.title`)}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• {t(`${p}.sections.materials.paper.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.paper.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.paper.feature3`)}</li>
                <li>• {t(`${p}.sections.materials.paper.feature4`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'timeline',
      title: t(`${p}.sections.timeline.title`),
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.timeline.intro`)}</p>
          
          <div className="bg-gradient-to-r from-green-50 to-primary-50 p-4 rounded-lg mt-4">
            <div className="grid grid-cols-5 gap-2 text-center text-sm">
              <div className="p-2">
                <div className="text-2xl mb-1">📦</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month1`)}</div>
                <div className="text-xs text-neutral-600">{t(`${p}.sections.timeline.month1Desc`)}</div>
              </div>
              <div className="p-2">
                <div className="text-2xl mb-1">💧</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month2`)}</div>
                <div className="text-xs text-neutral-600">{t(`${p}.sections.timeline.month2Desc`)}</div>
              </div>
              <div className="p-2">
                <div className="text-2xl mb-1">🍂</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month3`)}</div>
                <div className="text-xs text-neutral-600">{t(`${p}.sections.timeline.month3Desc`)}</div>
              </div>
              <div className="p-2">
                <div className="text-2xl mb-1">🌱</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month4`)}</div>
                <div className="text-xs text-neutral-600">{t(`${p}.sections.timeline.month4Desc`)}</div>
              </div>
              <div className="p-2">
                <div className="text-2xl mb-1">🌍</div>
                <div className="font-semibold">{t(`${p}.sections.timeline.month5`)}</div>
                <div className="text-xs text-neutral-600">{t(`${p}.sections.timeline.month5Desc`)}</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            {t(`${p}.sections.timeline.note`)}
          </p>
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
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
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
      id: 'ai-search',
      title: 'Finding Home Compostable Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What's the difference between home and industrial compostable packaging?"</li>
              <li>• "Best OK Compost HOME certified pouch supplier?"</li>
              <li>• "Can home compostable bags handle coffee with degassing valve?"</li>
              <li>• "AS 5810 certified packaging for Australian market"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: 'Is Home Compostable Right for You?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-2">✅ Best Fit For...</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Products with short shelf life (3-6 months)</li>
                <li>• Markets with active home composting culture</li>
                <li>• Consumers who garden or compost at home</li>
                <li>• Premium products where eco-value justifies cost</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">⚠️ Also Works For...</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Brands with educational consumer base</li>
                <li>• Products not needing high barrier</li>
                <li>• Regional launches in eco-conscious areas</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">❌ Not Recommended If...</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• You need 12+ month shelf life</li>
                <li>• High barrier is required</li>
                <li>• <Link to="/materials/industrial-compostable" className="underline">Consider industrial compostable →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Go Home Compostable?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">Ready to Move Fast?</h4>
              <p className="text-sm opacity-90 mb-4">Book a call to discuss certifications</p>
              <button onClick={openCalendly} className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
                Book a Call
              </button>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Want to Test First?</h4>
              <p className="text-sm text-neutral-600 mb-4">Order home compostable samples</p>
              <Link to="/store" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                Get Samples
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Still Exploring?</h4>
              <p className="text-sm text-neutral-600 mb-4">Compare home vs industrial options</p>
              <Link to="/materials/industrial-compostable" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-green-300 transition">
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
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/industrial-compostable", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/industry/coffee-tea", description: t(`${p}.relatedLinks.link3.description`) }
  ]

  return (
    <SEOPageLayout
      title={t(`${p}.title`)}
      description={t(`${p}.introSummary`)}
      keywords={['home compostable packaging', 'backyard compostable', 'OK Compost HOME', 'AS 5810', 'compostable pouches', 'biodegradable packaging']}
      canonicalUrl="https://achievepack.com/materials/home-compostable"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/seo-photos/a_achievepack_home_compostable_balcony_9883994.webp"
      heroImageAlt="Home compostable packaging in garden compost"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.ctaTitle`)}
      ctaDescription={t(`${p}.ctaDescription`)}
    />
  )
}

export default HomeCompostablePage
