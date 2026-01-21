import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Shield, Award, CheckCircle, Package, Layers, Factory, TrendingUp, BarChart3, ArrowLeftRight, Building2, ShoppingBag, Coffee, Sparkles, Globe, Recycle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';

const KraftMediumBarrierPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.kraftMediumBarrier';
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Kraft Medium Barrier packaging</strong> offers enhanced protection with metallized or aluminum layers, extending shelf life to 6-12 months for moderately sensitive products.
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Key Features</h4>
            <ul className="space-y-1 text-sm">
              <li>• Natural kraft exterior with enhanced barrier layers</li>
              <li>• Medium oxygen and moisture protection (6-12 month shelf life)</li>
              <li>• Ideal for coffee, nuts, dried fruits, and supplements</li>
              <li>• Metallized or aluminum foil barrier options</li>
              <li>• Premium aesthetic with functional performance</li>
            </ul>
          </div>
          
          <p className="mt-4">
            Perfect for roasted coffee, premium snacks, dried fruits, protein powders, vitamins, organic nuts, and specialty teas requiring extended freshness.
          </p>
        </div>
      )
    },
    {
      id: 'specifications',
      title: 'Technical Specifications',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our kraft medium barrier structure provides balanced protection for moderate shelf life requirements.</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">Material Structure</h4>
              <p className="text-sm">Kraft Paper / Metallized Layer / PE</p>
              <ul className="text-xs mt-2 space-y-1 text-amber-700">
                <li>• 80-120g kraft paper base</li>
                <li>• 12-15µm metallized film or aluminum foil</li>
                <li>• Food-grade PE sealant layer</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">Barrier Properties</h4>
              <p className="text-sm">Medium-high oxygen and moisture barrier</p>
              <ul className="text-xs mt-2 space-y-1 text-blue-700">
                <li>• MVTR: 1-3 g/m²/day</li>
                <li>• OTR: 5-20 cc/m²/day</li>
                <li>• Shelf life: 6-12 months</li>
              </ul>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50/50">
              <h4 className="font-semibold text-green-800 mb-2">Available Formats</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• Stand-up pouches with valve</li>
                <li>• Flat bottom bags</li>
                <li>• Side gusset bags</li>
                <li>• Quad seal bags</li>
              </ul>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50">
              <h4 className="font-semibold text-purple-800 mb-2">Special Features</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• Degassing valves for coffee</li>
                <li>• Resealable zippers</li>
                <li>• Tear notches</li>
                <li>• Spot UV printing</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Ideal Applications',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Kraft medium barrier is the sweet spot for products requiring moderate protection without the cost of high barrier materials.</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Roasted coffee beans',
              'Specialty ground coffee',
              'Premium loose leaf tea',
              'Roasted nuts & seeds',
              'Dried fruits',
              'Protein powders',
              'Superfood powders',
              'Nutritional supplements',
              'Energy bars',
              'Chocolate & cocoa',
              'Spice blends',
              'Artisan granola'
            ].map((item, idx) => (
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
      id: 'advantages',
      title: 'Advantages & Limitations',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Best For</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>✓ Coffee and tea products</li>
                <li>✓ 6-12 month shelf life needs</li>
                <li>✓ Moderately sensitive to oxygen/moisture</li>
                <li>✓ Premium brand positioning</li>
                <li>✓ Natural aesthetic with protection</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Considerations</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• Higher cost than low barrier</li>
                <li>• Not suitable for very long shelf life (18+ months)</li>
                <li>• Metallized layer reduces recyclability</li>
                <li>• Requires proper storage conditions</li>
              </ul>
            </div>
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
          <p className="text-lg">Kraft medium barrier is the most popular choice for coffee roasters and premium food brands:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="h-6 w-6 text-amber-600" />
                <h4 className="font-bold text-amber-800">Coffee Roasters</h4>
              </div>
              <ul className="text-sm space-y-2 text-amber-700">
                <li>• <strong>Specialty Coffee:</strong> 9-12 month freshness with valve</li>
                <li>• <strong>Ground Coffee:</strong> Excellent aroma retention</li>
                <li>• <strong>Third Wave:</strong> Premium craft aesthetic</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-amber-200">
                <span className="text-xs text-amber-600">Most popular choice for roasters</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-6 w-6 text-green-600" />
                <h4 className="font-bold text-green-800">Premium Snacks</h4>
              </div>
              <ul className="text-sm space-y-2 text-green-700">
                <li>• <strong>Roasted Nuts:</strong> Maintain crunch & freshness</li>
                <li>• <strong>Dried Fruits:</strong> Preserve natural moisture</li>
                <li>• <strong>Granola:</strong> Keep clusters crispy</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-green-200">
                <span className="text-xs text-green-600">Natural look + protection</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <h4 className="font-bold text-purple-800">Health & Wellness</h4>
              </div>
              <ul className="text-sm space-y-2 text-purple-700">
                <li>• <strong>Protein Powders:</strong> Keep dry & fresh</li>
                <li>• <strong>Superfood Blends:</strong> Preserve nutrients</li>
                <li>• <strong>Tea Blends:</strong> Aroma protection</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-purple-200">
                <span className="text-xs text-purple-600">Natural positioning for health brands</span>
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
                <span className="text-xs font-semibold text-amber-600 uppercase">US Specialty Roaster</span>
                <p className="text-sm text-neutral-700 mt-2">"Kraft medium barrier with valve is our sweet spot - 9 month shelf life, beautiful craft look, and customers love the natural aesthetic."</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-green-600 uppercase">EU Organic Snack Brand</span>
                <p className="text-sm text-neutral-700 mt-2">"Switched from plastic to kraft medium barrier. Sales up 20% - customers associate kraft with natural and organic."</p>
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
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">1-3</p>
              <p className="text-sm opacity-90">MVTR (g/m²/day)</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">5-20</p>
              <p className="text-sm opacity-90">OTR (cc/m²/day)</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">6-12</p>
              <p className="text-sm opacity-90">Months Shelf Life</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">60-70%</p>
              <p className="text-sm opacity-90">Renewable Content</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-neutral-100 px-4 py-3 border-b">
              <h4 className="font-bold text-neutral-900">Medium Barrier Structure Options</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Structure</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Barrier Layer</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Shelf Life</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Kraft/MET PET/PE</td>
                    <td className="px-4 py-3">Metallized PET</td>
                    <td className="px-4 py-3">9-12 months</td>
                    <td className="px-4 py-3">Coffee, premium snacks</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Kraft/ALU/PE</td>
                    <td className="px-4 py-3">Thin Aluminum</td>
                    <td className="px-4 py-3">12 months</td>
                    <td className="px-4 py-3">Supplements, tea</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Kraft/VMPET/PE</td>
                    <td className="px-4 py-3">Vacuum Metallized</td>
                    <td className="px-4 py-3">6-9 months</td>
                    <td className="px-4 py-3">Nuts, dried fruits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4">Why Brands Choose Medium Barrier</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">Best Value</p>
                <p className="text-sm text-blue-600">Protection vs cost balance</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">60-70%</p>
                <p className="text-sm text-blue-600">Renewable kraft content</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">#1</p>
                <p className="text-sm text-blue-600">Choice for coffee roasters</p>
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
          <p className="text-lg">Compare kraft medium barrier with other options:</p>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-primary-600 px-4 py-3">
              <h4 className="font-bold text-white text-center">Kraft Barrier Options</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Criteria</th>
                    <th className="px-4 py-3 text-center font-semibold text-blue-700">Medium Barrier</th>
                    <th className="px-4 py-3 text-center font-semibold text-amber-700">High Barrier</th>
                    <th className="px-4 py-3 text-center font-semibold text-green-700">Low Barrier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Ideal Products</td>
                    <td className="px-4 py-3 text-center">Coffee, nuts, snacks</td>
                    <td className="px-4 py-3 text-center">Pharma, freeze-dried</td>
                    <td className="px-4 py-3 text-center">Bakery, dry goods</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Shelf Life</td>
                    <td className="px-4 py-3 text-center">6-12 months</td>
                    <td className="px-4 py-3 text-center">12-24+ months</td>
                    <td className="px-4 py-3 text-center">3-6 months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Value Rating</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐ Best</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐ Premium</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐ Budget</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Sustainability</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐ (metallized)</td>
                    <td className="px-4 py-3 text-center">⭐⭐ (aluminum)</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐ (recyclable)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">💡 Quick Decision Guide</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-blue-700">Choose Medium Barrier if:</p>
                <ul className="mt-2 space-y-1 text-blue-600">
                  <li>• Coffee, nuts, or snacks</li>
                  <li>• 6-12 month shelf life works</li>
                  <li>• Best value-protection balance</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-700">Choose High Barrier if:</p>
                <ul className="mt-2 space-y-1 text-amber-600">
                  <li>• Need 12-24+ month shelf life</li>
                  <li>• Very sensitive products</li>
                  <li>• <Link to="/materials/kraft-high-barrier" className="underline">Learn more →</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-700">Choose Low Barrier if:</p>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• 3-6 month shelf life OK</li>
                  <li>• Sustainability priority</li>
                  <li>• <Link to="/materials/kraft-low-barrier" className="underline">Learn more →</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>While medium barrier packaging includes barrier layers, it still maintains a lower environmental impact than traditional plastic packaging.</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Renewable Content</h4>
              <p className="text-sm text-green-700">60-70% renewable kraft paper content from sustainable forests.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Reduced Plastic</h4>
              <p className="text-sm text-blue-700">50% less plastic compared to all-plastic pouches.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Lower Emissions</h4>
              <p className="text-sm text-amber-700">40-50% reduction in carbon footprint vs. plastic packaging.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ];

  return (
    <SEOPageLayout
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={[
        'kraft medium barrier packaging',
        'kraft coffee bags',
        'metallized kraft pouches'
      ]}
      canonicalUrl="https://achievepack.com/materials/kraft-medium-barrier"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      heroImageAlt="Kraft medium barrier pouches with metallized layers for coffee and premium foods"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
    />
  );
};

export default KraftMediumBarrierPage;
