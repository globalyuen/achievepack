import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Shield, Award, CheckCircle, Package, Layers, Factory, TrendingUp, BarChart3, ArrowLeftRight, Building2, ShoppingBag, Coffee, Sparkles, Globe, Recycle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';

const KraftHighBarrierPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.kraftHighBarrier';
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Kraft High Barrier packaging</strong> features thick aluminum foil layers providing maximum protection for oxygen and moisture-sensitive products requiring 12-24+ month shelf life.
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Key Features</h4>
            <ul className="space-y-1 text-sm">
              <li>• Premium kraft exterior with aluminum foil barrier</li>
              <li>• Maximum oxygen and moisture protection (12-24+ months)</li>
              <li>• Ideal for long shelf life requirements</li>
              <li>• Superior light barrier properties</li>
              <li>• Excellent aroma retention</li>
            </ul>
          </div>
          
          <p className="mt-4">
            Perfect for premium coffee, freeze-dried foods, pharmaceuticals, probiotics, high-value supplements, aged cheeses, and any product requiring extended shelf life and maximum freshness protection.
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
          <p>Our kraft high barrier structure provides industry-leading protection for the most demanding applications.</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">Material Structure</h4>
              <p className="text-sm">Kraft / Aluminum Foil / PE</p>
              <ul className="text-xs mt-2 space-y-1 text-amber-700">
                <li>• 100-140g premium kraft paper</li>
                <li>• 25-40µm aluminum foil barrier</li>
                <li>• Multi-layer PE sealant (60-80µm)</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">Barrier Properties</h4>
              <p className="text-sm">Maximum barrier performance</p>
              <ul className="text-xs mt-2 space-y-1 text-blue-700">
                <li>• MVTR: &lt; 0.5 g/m²/day</li>
                <li>• OTR: &lt; 1.0 cc/m²/day</li>
                <li>• Shelf life: 12-24+ months</li>
              </ul>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50/50">
              <h4 className="font-semibold text-green-800 mb-2">Available Formats</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• Stand-up pouches</li>
                <li>• Flat bottom bags</li>
                <li>• Quad seal bags</li>
                <li>• Brick pouches</li>
              </ul>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50">
              <h4 className="font-semibold text-purple-800 mb-2">Premium Features</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• Degassing valves</li>
                <li>• Child-resistant zippers</li>
                <li>• Laser scoring for easy open</li>
                <li>• Embossing & debossing</li>
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
          <p>Kraft high barrier packaging is engineered for products requiring the highest level of protection and longest possible shelf life.</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Premium specialty coffee',
              'Single-origin coffee beans',
              'Pharmaceutical products',
              'Probiotics & enzymes',
              'Freeze-dried foods',
              'Emergency food rations',
              'High-value supplements',
              'Organic baby formula',
              'Aged cheese',
              'Medical cannabis',
              'Laboratory reagents',
              'Military MREs'
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
                <li>✓ Maximum shelf life (12-24+ months)</li>
                <li>✓ Highly sensitive products</li>
                <li>✓ Premium positioning</li>
                <li>✓ Export markets requiring long transit</li>
                <li>✓ Products requiring light barrier</li>
                <li>✓ Pharmaceutical-grade protection</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Considerations</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• Higher material cost</li>
                <li>• Aluminum layer not recyclable in standard streams</li>
                <li>• Heavier weight increases shipping costs</li>
                <li>• Higher MOQ typically required</li>
                <li>• Longer lead times for production</li>
              </ul>
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
          <p className="text-lg">Kraft high barrier packaging is the choice for products requiring maximum protection and longest shelf life:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="h-6 w-6 text-amber-600" />
                <h4 className="font-bold text-amber-800">Premium Coffee</h4>
              </div>
              <ul className="text-sm space-y-2 text-amber-700">
                <li>• <strong>Single Origin:</strong> Preserve complex flavor profiles</li>
                <li>• <strong>Aged/Reserve:</strong> 18-24 month storage</li>
                <li>• <strong>Export:</strong> Long transit time protection</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-amber-200">
                <span className="text-xs text-amber-600">With degassing valve for freshly roasted</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-6 w-6 text-green-600" />
                <h4 className="font-bold text-green-800">Nutraceuticals</h4>
              </div>
              <ul className="text-sm space-y-2 text-green-700">
                <li>• <strong>Probiotics:</strong> Maximum moisture barrier</li>
                <li>• <strong>Supplements:</strong> Preserve potency 24+ months</li>
                <li>• <strong>Medical Cannabis:</strong> Child-resistant options</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-green-200">
                <span className="text-xs text-green-600">Pharmaceutical-grade protection</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <h4 className="font-bold text-blue-800">Specialty Foods</h4>
              </div>
              <ul className="text-sm space-y-2 text-blue-700">
                <li>• <strong>Freeze-Dried:</strong> Emergency food, camping</li>
                <li>• <strong>Aged Cheese:</strong> Long maturation storage</li>
                <li>• <strong>MREs:</strong> Military-grade shelf life</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <span className="text-xs text-blue-600">12-24+ month protection</span>
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
                <span className="text-xs font-semibold text-amber-600 uppercase">Japanese Import Roaster</span>
                <p className="text-sm text-neutral-700 mt-2">Uses kraft high barrier for 6-month ocean shipping. Zero quality degradation reported after 18 months of shelf life testing.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-green-600 uppercase">US Probiotic Brand</span>
                <p className="text-sm text-neutral-700 mt-2">Switched to kraft/aluminum pouches. Lab tests confirmed 95% CFU viability at 24 months vs 70% in previous packaging.</p>
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
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">&lt;0.5</p>
              <p className="text-sm opacity-90">MVTR (g/m²/day)</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">&lt;1.0</p>
              <p className="text-sm opacity-90">OTR (cc/m²/day)</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">24+</p>
              <p className="text-sm opacity-90">Months Shelf Life</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">25-40</p>
              <p className="text-sm opacity-90">μm Aluminum Foil</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-neutral-100 px-4 py-3 border-b">
              <h4 className="font-bold text-neutral-900">Kraft Barrier Level Comparison</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Property</th>
                    <th className="px-4 py-3 text-left font-semibold text-amber-700">High Barrier</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-700">Medium Barrier</th>
                    <th className="px-4 py-3 text-left font-semibold text-green-700">Low Barrier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Barrier Layer</td>
                    <td className="px-4 py-3">Aluminum Foil (25-40μm)</td>
                    <td className="px-4 py-3">Metallized Film</td>
                    <td className="px-4 py-3">PE Coating Only</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">MVTR</td>
                    <td className="px-4 py-3 text-amber-600">&lt;0.5 g/m²/day ✓</td>
                    <td className="px-4 py-3">1-3 g/m²/day</td>
                    <td className="px-4 py-3">5-10 g/m²/day</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">OTR</td>
                    <td className="px-4 py-3 text-amber-600">&lt;1 cc/m²/day ✓</td>
                    <td className="px-4 py-3">5-20 cc/m²/day</td>
                    <td className="px-4 py-3">100-200 cc/m²/day</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Shelf Life</td>
                    <td className="px-4 py-3 text-amber-600">12-24+ months ✓</td>
                    <td className="px-4 py-3">6-12 months</td>
                    <td className="px-4 py-3">3-6 months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Cost</td>
                    <td className="px-4 py-3">$$$</td>
                    <td className="px-4 py-3">$$</td>
                    <td className="px-4 py-3">$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-4">Maximum Protection Benefits</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-700">100%</p>
                <p className="text-sm text-amber-600">Light barrier (opaque)</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-700">99%</p>
                <p className="text-sm text-amber-600">Aroma retention</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-700">24+</p>
                <p className="text-sm text-amber-600">Months protection</p>
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
          <p className="text-lg">Compare kraft high barrier with other kraft options and eco-alternatives:</p>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-primary-600 px-4 py-3">
              <h4 className="font-bold text-white text-center">Kraft Options Comparison</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Criteria</th>
                    <th className="px-4 py-3 text-center font-semibold text-amber-700">High Barrier</th>
                    <th className="px-4 py-3 text-center font-semibold text-blue-700">Medium Barrier</th>
                    <th className="px-4 py-3 text-center font-semibold text-green-700">Low Barrier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Best For</td>
                    <td className="px-4 py-3 text-center">Max shelf life needs</td>
                    <td className="px-4 py-3 text-center">Coffee, nuts, snacks</td>
                    <td className="px-4 py-3 text-center">Bakery, dry goods</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Protection Level</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐</td>
                    <td className="px-4 py-3 text-center">⭐⭐</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Sustainability</td>
                    <td className="px-4 py-3 text-center text-amber-600">△ Aluminum not recyclable</td>
                    <td className="px-4 py-3 text-center text-amber-600">△ Limited recyclability</td>
                    <td className="px-4 py-3 text-center text-green-600">✓ More recyclable</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Cost</td>
                    <td className="px-4 py-3 text-center">+30-50%</td>
                    <td className="px-4 py-3 text-center">+15-25%</td>
                    <td className="px-4 py-3 text-center">Baseline</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">💡 Quick Decision Guide</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-amber-700">Choose High Barrier if:</p>
                <ul className="mt-2 space-y-1 text-amber-600">
                  <li>• Need 12-24+ month shelf life</li>
                  <li>• Highly sensitive products</li>
                  <li>• Premium positioning justified</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Choose Medium Barrier if:</p>
                <ul className="mt-2 space-y-1 text-blue-600">
                  <li>• 6-12 month shelf life sufficient</li>
                  <li>• Coffee, nuts, dried goods</li>
                  <li>• <Link to="/materials/kraft-medium-barrier" className="underline">Learn more →</Link></li>
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
      id: 'quality',
      title: 'Quality & Certifications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our kraft high barrier packaging meets the highest industry standards for food safety and quality.</p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">FDA</div>
              <p className="text-xs text-blue-700">Food Contact Safe</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">BRC</div>
              <p className="text-xs text-green-700">Certified Facility</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">ISO</div>
              <p className="text-xs text-purple-700">9001:2015</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200 text-center">
              <div className="text-2xl font-bold text-amber-600 mb-1">HACCP</div>
              <p className="text-xs text-amber-700">Compliant</p>
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
        'kraft high barrier packaging',
        'aluminum kraft pouches',
        'long shelf life packaging'
      ]}
      canonicalUrl="https://achievepack.com/materials/kraft-high-barrier"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      heroImageAlt="Kraft high barrier pouches with aluminum foil for long shelf life products"
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

export default KraftHighBarrierPage;
