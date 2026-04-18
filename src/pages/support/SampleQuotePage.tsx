import React from 'react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Package, Clock, CheckCircle, ArrowRight, Truck, Palette, ScrollText, Factory, Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const SampleQuotePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <SEOPageLayout
      title="Sample Packaging Quotes & Timeline"
      description="Request physical samples of stand-up pouches, flat bottom bags, and sustainable materials. Validate your construction, print quality, and branding before bulk production."
      keywords={['packaging samples', 'prototype pouch', 'printed samples', 'material validation', 'Achieve Pack samples']}
      heroTitle="Validate with Confidence: Request Samples"
      heroSubtitle="Experience the texture, durability, and print precision of our eco-friendly packaging before committing to full-scale production."
      heroImage="/imgs/samples/achieve_pack_samples_hero.png"
      heroImageAlt="Achieve Pack sustainable packaging samples"
      introSummary="Real-world validation is the cornerstone of successful product launches. Achieve Pack offers three distinct sampling routes—from handcrafted material prototypes to full-scale commercial trials—ensuring your final packaging exceeds expectations without the risk of unknowns."
      sections={[
        {
          id: 'options',
          title: 'Sampling Options',
          icon: <Package className="h-6 w-6 text-primary-600" />,
          content: (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Option 1 */}
              <div className="group bg-white border border-neutral-200 rounded-2xl p-0 shadow-sm hover:shadow-md transition overflow-hidden relative flex flex-col">
                <div className="absolute top-0 right-0 z-10 bg-primary-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Fastest</div>
                <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
                  <img 
                    src="/imgs/samples/achieve-hand-made-sample.png" 
                    alt="Hand-made material sample" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 pt-8 relative flex-grow flex flex-col">
                  <div className="absolute -top-6 left-6 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center border border-neutral-100 group-hover:scale-110 transition">
                    <Palette className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Material Prototype</h3>
                  <div className="text-3xl font-extrabold text-primary-600 mb-4">$200 <span className="text-sm text-neutral-400 font-normal">/ unit</span></div>
                  <p className="text-sm text-neutral-600 mb-6">Handcrafted sample used to verify sizing, material feel, and basic construction. Ideal for initial physical check.</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      Digital Pattern Proof
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      Hand-trimmed & Sealed
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      Verify Dimensions
                    </li>
                  </ul>
                  <a 
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-neutral-900 text-white rounded-lg font-bold hover:bg-neutral-800 transition flex items-center justify-center gap-2"
                  >
                    Request Sample <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Option 2 */}
              <div className="group bg-white border-2 border-primary-500 rounded-2xl p-0 shadow-md hover:shadow-lg transition relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 z-10 bg-primary-500 text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest ring-4 ring-white/20">Most Popular</div>
                <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
                  <img 
                    src="/imgs/samples/achieve-commercial-sample.png" 
                    alt="Commercial product sample" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 pt-8 relative flex-grow flex flex-col">
                  <div className="absolute -top-6 left-6 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center border border-primary-100 group-hover:scale-110 transition">
                    <Factory className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Final Product Sample</h3>
                  <div className="mb-4">
                    <div className="text-3xl font-extrabold text-primary-600">$400 <span className="text-sm text-neutral-400 font-normal">for Eco Materials</span></div>
                    <div className="text-sm font-bold text-neutral-500 mt-1 italic">Starts from $100 for conventional plastics</div>
                  </div>
                  <p className="text-sm text-neutral-600 mb-6 font-medium">Produced on industrial assembly lines. Perfect for verifying final print quality and commercial functionality.</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-2 text-sm text-neutral-700 font-semibold">
                      <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      Recyclable/Bio-PE/Compostable
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700 font-semibold">
                      <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      Full Feature Set (Zip/Valve)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700 font-semibold">
                      <CheckCircle className="h-4 v-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      Retail-Ready Standards
                    </li>
                  </ul>
                  <a 
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition flex items-center justify-center gap-2"
                  >
                    Order Prototype <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Option 3 */}
              <div className="group bg-white border border-neutral-200 rounded-2xl p-0 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
                <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
                  <img 
                    src="/imgs/samples/achieve-sheet-sample.png" 
                    alt="Flat sheet print proof" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 pt-8 relative flex-grow flex flex-col">
                  <div className="absolute -top-6 left-6 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center border border-neutral-100 group-hover:scale-110 transition">
                    <ScrollText className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Artwork Print Only</h3>
                  <div className="text-3xl font-extrabold text-primary-600 mb-4">$100 <span className="text-sm text-neutral-400 font-normal">/ unit</span></div>
                  <p className="text-sm text-neutral-600 mb-6">Commercial press print on a sheet. Ideal for color matching and high-resolution artwork review.</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      Verify Color Accuracy
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      Sheet Format Proof
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      Check Material Effects
                    </li>
                  </ul>
                  <a 
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-neutral-900 text-white rounded-lg font-bold hover:bg-neutral-800 transition flex items-center justify-center gap-2"
                  >
                    Get Print Proof <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'timeline',
          title: 'Production Timeline',
          icon: <Clock className="h-6 w-6 text-primary-600" />,
          content: (
            <div className="bg-neutral-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <Clock className="h-64 w-64 -translate-y-24 translate-x-24" />
              </div>
              <div className="relative z-10 grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-primary-500 rounded-full"></div>
                    Sample Prep Speed
                  </h3>
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                      <div>
                        <h4 className="text-lg font-bold text-primary-400">Hand-made / Print Proof</h4>
                        <p className="text-neutral-300">Fast-tracked production. Typically completed within 14 days of artwork approval.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                      <div>
                        <h4 className="text-lg font-bold text-primary-400">Commercial Prototype</h4>
                        <p className="text-neutral-300">Requires machine setup. Typically 32-40 days for final assembly and QC.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Truck className="h-5 w-5 text-primary-500" />
                    Global Logistics
                  </h3>
                  <p className="text-neutral-400 text-sm mb-6">All samples are shipped via Express Air (DHL/FedEx) to ensure you spend less time waiting and more time validating.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white/5 rounded-lg text-center">
                      <div className="text-xs text-neutral-500 uppercase font-bold mb-1">Production</div>
                      <div className="text-lg font-bold">1-2 Weeks</div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg text-center">
                      <div className="text-xs text-neutral-500 uppercase font-bold mb-1">Air Shipping</div>
                      <div className="text-lg font-bold">3-5 Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]}
      faqs={[
        {
          question: "Can the sample cost be credited toward my main order?",
          answer: "Yes! For major trials like the Final Product Sample, we typically credit back the full sampling fee once your bulk production order is finalized. This ensures our partners can validate quality without additional long-term overhead."
        },
        {
          question: "Can I test the samples with real products?",
          answer: "Absolutely. We encourage durability testing. Our samples are designed to undergo real-world filling, shelf-life, and transit tests so you know exactly how your material will perform."
        },
        {
          question: "Do you offer free samples?",
          answer: "We provide generic material catalogs and size guides free of charge (shipping only). Custom-branded samples require machine setup and labor, which is why there is a flat fee for the 'First Draft'."
        }
      ]}
      ctaTitle="Get Your Physical Samples"
      ctaDescription="Don't leave your brand to chance. Order high-fidelity samples today and secure your product's success."
      ctaButtonText="Request Sample Quote"
      ctaButtonUrl="https://calendly.com/30-min-free-packaging-consultancy"
    />
  )
}

export default SampleQuotePage
