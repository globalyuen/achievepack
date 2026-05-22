import React from 'react'
import { FileText, CheckCircle, Info, Download, Layers, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'

const MaterialDataSheetPage: React.FC = () => {
  const sections = [
    {
      id: 'overview',
      title: 'Product Overview & Specifications',
      icon: <Info className="h-5 w-5 text-emerald-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            This technical data sheet details the performance metrics and structural composition of our premium <strong>60gsm Kraft Paper + 50μ Compostable Inner Film</strong> laminate. Engineered for high performance and minimal environmental footprint, this compostable structure is ideal for brands seeking high-quality organic branding with reliable protection.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">Product Name</span>
              <p className="font-bold text-neutral-800 mt-1">Kraft & Compostable Laminate</p>
              <p className="text-xs text-neutral-500 mt-1">60gsm Kraft Paper + 50μ Compostable Inner Film.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">Material Structure</span>
              <p className="font-bold text-neutral-800 mt-1">Kraft / Compostable Film</p>
              <p className="text-xs text-neutral-500 mt-1">Natural uncoated Kraft paper laminated to organic biopolymer film.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">Calculation Basis</span>
              <p className="font-bold text-neutral-800 mt-1">Nominal 130μ / 130gsm</p>
              <p className="text-xs text-neutral-500 mt-1">Nominal total thickness of 0.13mm per 1 m² area.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Key Features & Common Applications',
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Key Features */}
            <div>
              <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                Performance Highlights
              </h4>
              <ul className="space-y-3">
                {[
                  'Paper-based compostable high-barrier laminate',
                  '100% Home & Industrial Compostable (EN 13432 & ASTM D6400)',
                  'Natural uncoated Kraft Paper aesthetics and premium organic texture',
                  'Exceptional seal strength and thermal sealing window',
                  'Optimized surface energy for high-definition eco-friendly inks'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications & Certs */}
            <div>
              <h4 className="font-bold text-neutral-900 mb-4">Recommended Applications</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Dry Foods', 'Coffee Beans', 'Confectionery', 'Nuts & Seeds', 'Dried Fruits', 'Baked Goods', 'Powders'].map(tag => (
                  <span key={tag} className="text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h4 className="font-bold text-neutral-900 mb-3">Industry Certifications</h4>
              <div className="flex gap-4 items-center bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                <img src="/imgs/bpi.svg" alt="BPI Certified" className="h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="/bcorp.svg" alt="B Corp" className="h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'structure',
      title: 'Material Structure Visualization',
      icon: <Layers className="h-5 w-5 text-emerald-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="leading-relaxed">
            Our multi-layer laminate uses natural cellulose fibers paired with compostable inner sealing film, bonded together with solvent-free bio-adhesives.
          </p>
          <div className="bg-white border border-neutral-200 p-8 rounded-2xl flex justify-center items-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <img 
              src="https://achievepack.com/imgs/store/barrier/2-paper.webp" 
              alt="Kraft Paper + Compostable Film Structure Diagram" 
              className="max-w-full h-auto max-h-64 object-contain"
            />
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: 'Technical Data & Engineering Specifications',
      icon: <FileText className="h-5 w-5 text-emerald-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="leading-relaxed">
            Below are the laboratory engineering specifications and physical properties of the laminated structure.
          </p>
          
          <div className="border border-neutral-200 rounded-2xl overflow-hidden shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-emerald-800 text-white font-semibold">
                    <th className="p-4 border-b border-emerald-900">Layer (层级)</th>
                    <th className="p-4 border-b border-emerald-900">Material (材料)</th>
                    <th className="p-4 border-b border-emerald-900 text-center">GSM</th>
                    <th className="p-4 border-b border-emerald-900 text-center">Thickness (mm)</th>
                    <th className="p-4 border-b border-emerald-900 text-center">Thickness (μm)</th>
                    <th className="p-4 border-b border-emerald-900 text-center">Weight %</th>
                    <th className="p-4 border-b border-emerald-900 text-center">Thickness %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-4 font-semibold text-neutral-900 bg-neutral-50/30">Outer Layer</td>
                    <td className="p-4 text-neutral-600">Kraft paper (uncoated)</td>
                    <td className="p-4 text-center font-medium">60</td>
                    <td className="p-4 text-center">0.08</td>
                    <td className="p-4 text-center">80</td>
                    <td className="p-4 text-center text-neutral-500">46.2%</td>
                    <td className="p-4 text-center text-neutral-500">61.5%</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-4 font-semibold text-neutral-900 bg-neutral-50/30">Inner Layer</td>
                    <td className="p-4 text-neutral-600">Compostable film (50μ)</td>
                    <td className="p-4 text-center font-medium">70</td>
                    <td className="p-4 text-center">0.05</td>
                    <td className="p-4 text-center">50</td>
                    <td className="p-4 text-center text-neutral-500">53.8%</td>
                    <td className="p-4 text-center text-neutral-500">38.5%</td>
                  </tr>
                  <tr className="bg-emerald-50/50 font-bold text-emerald-900">
                    <td className="p-4">TOTAL</td>
                    <td className="p-4 uppercase text-emerald-800">Laminated Structure</td>
                    <td className="p-4 text-center">130</td>
                    <td className="p-4 text-center">0.13</td>
                    <td className="p-4 text-center">130</td>
                    <td className="p-4 text-center">100%</td>
                    <td className="p-4 text-center">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Notes */}
          <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-2xl">
            <h5 className="font-bold text-neutral-900 mb-3 text-xs uppercase tracking-wider">Engineering & Analytical Notes:</h5>
            <ul className="space-y-2 text-xs text-neutral-500 list-disc list-inside">
              <li>60gsm kraft paper typical thickness range 70–85μm; nominal 80μm taken for target analysis.</li>
              <li>Compostable biopolymer film (50μm) is analyzed at an average density ρ = 1.4 g/cm³, representing a basis weight of ~70 g/m².</li>
              <li>Thickness and weight percentage share is calculated as: <code>Layer Value ÷ Total Value × 100%</code>.</li>
            </ul>
          </div>
          
          {/* Action button */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-neutral-100">
            <div className="text-xs text-neutral-400">
              Document ID: SPEC-AP-2026-V1 // Verified Secure Archive
            </div>
            <a 
              href="/pdfs/material_data_sheet.pdf?v=2" 
              className="inline-flex items-center gap-2 bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-emerald-800 transition shadow-sm hover:shadow"
            >
              <Download className="w-4 h-4" />
              Download Official Technical PDF
            </a>
          </div>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title="Material Data Sheet (60gsm Kraft Paper + 50μ Compostable Film)"
      description="Technical specifications, structural layers, and laboratory metrics for the 60gsm Kraft Paper + 50μ Compostable biopolymer packaging film."
      keywords={['material data sheet', 'compostable film specification', '60gsm kraft paper spec', 'achieve pack technical specs', 'compostable laminate table']}
      heroTitle="Technical Data Sheet"
      heroSubtitle="Official Engineering Specifications: 60gsm Kraft Paper + 50μ Compostable Inner Film"
      introSummary="Access the precise material composition, layer metrics, thickness distribution, and BPI / B Corp compliant technical parameters of our 100% compostable Kraft paper laminate."
      sections={sections}
      ctaTitle="Need a custom composite spec?"
      ctaDescription="Our engineering team can formulate custom barrier layers, custom paper thicknesses, and specialized sealing biopolymers tailored to your exact application."
      ctaButtonText="Talk to a Packaging Engineer"
      ctaButtonUrl="https://calendly.com/30-min-free-packaging-consultancy"
    />
  )
}

export default MaterialDataSheetPage
