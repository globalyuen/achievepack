import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Leaf, Droplets, Settings, Shield } from 'lucide-react'

export default function BioBasedSpoutPouchesPage() {
  const sections = [
    {
      id: 'sugarcane-pe',
      title: 'The Rise of Bio-Based Sugarcane PE',
      icon: <Leaf className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            The packaging industry is shifting away from fossil-based resins. Bio-based Polyethylene (Bio-PE) is manufactured using ethylene derived from sugarcane ethanol. During its growth cycle, sugarcane captures atmospheric CO₂, resulting in a packaging material with a negative carbon footprint from birth.
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-black text-2xl uppercase mb-4">Bio-PE Sourcing Highlights:</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>Identical Performance:</strong> Bio-based PE possesses the exact chemical structure as traditional fossil PE, ensuring identical moisture barriers and seal strength.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>100% Recyclable:</strong> Because it is chemically equivalent to HDPE/LDPE, Bio-PE is fully recyclable in the standard plastic recycling stream (RIC #4).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>EPR Compliance:</strong> Helps brands lower eco-tax fees under California SB 343 and European Extended Producer Responsibility laws.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'compostable-laminations',
      title: 'Compostable Liquid Barrier Laminations',
      icon: <Droplets className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            For brands targeting zero plastic waste, we offer certified compostable spout pouches. These utilize vacuum-metallized cellulose layers combined with biodegradable polybutylene succinate (Bio-PBS) to handle wet ingredients without dissolving.
          </p>
          
          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-xl uppercase mb-3 text-neutral-900">Compostable Liquid Caliper Specifications</h4>
            <div className="grid md:grid-cols-2 gap-4 text-xs font-mono bg-neutral-50 p-4 border-2 border-black">
              <div><strong>Core Laminate:</strong> NatureFlex™ + Bio-PBS (140 Micron)</div>
              <div><strong>Water Resistance:</strong> High (tested up to 90 days wet state)</div>
              <div><strong>Oxygen Barrier (OTR):</strong> &lt; 1.0 cc/m²/24hr</div>
              <div><strong>Moisture Barrier (WVTR):</strong> &lt; 1.5 g/m²/24hr</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spout-fitments',
      title: 'Technical Specs & Spout Fittings',
      icon: <Settings className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            Our factory integrates various spout sizes and caps designed to match commercial liquid filling machinery. We support custom positionings (corner spout or center top spout) depending on your brand's application:
          </p>
          
          <div className="overflow-x-auto border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full border-collapse bg-white font-['JetBrains_Mono'] text-left text-black text-xs md:text-sm">
              <thead>
                <tr className="bg-black text-[#D4FF00] font-black uppercase">
                  <th className="p-4">Spout Diameter</th>
                  <th className="p-4">Cap Configuration</th>
                  <th className="p-4">Ideal Liquid Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-4 font-bold">8.6mm Spout</td>
                  <td className="p-4">Standard Screw Cap or Anti-Choke Cap</td>
                  <td className="p-4">Juices, baby food purees, gel packs, water</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 font-bold">10mm / 15mm Spout</td>
                  <td className="p-4">Tamper-Evident Ribbed Screw Cap</td>
                  <td className="p-4">Syrups, honey, cosmetics refills, liquid soap</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">22mm Spout</td>
                  <td className="p-4">Wide-mouth Dispenser Cap</td>
                  <td className="p-4">Thick purees, yogurts, engine oil, industrial soap</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'carbon-metrics',
      title: 'Environmental Impact & Lifecycle Metrics',
      icon: <Shield className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            Replacing rigid glass bottles or heavy plastic jars with flexible bio-based spout pouches significantly reduces supply chain emissions:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 font-mono text-center text-black">
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-green-600 mb-1">-85%</div>
              <div className="text-xs font-bold uppercase text-neutral-500">Weight Compared to Glass</div>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-blue-600 mb-1">-65%</div>
              <div className="text-xs font-bold uppercase text-neutral-500">CO₂ Transportation Emissions</div>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-purple-600 mb-1">Negative</div>
              <div className="text-xs font-bold uppercase text-neutral-500">Bio-PE resin carbon footprint</div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqSections = [
    {
      q: "What is the difference between bio-based PE and biodegradable plastics?",
      a: "Bio-based PE is made from plant materials (sugarcane) instead of fossil oil, but it has the exact same chemical structure as traditional PE. This means it is 100% recyclable, but it is not biodegradable or compostable. Compostable plastics are designed to decompose organically under compost conditions."
    },
    {
      q: "Are bio-based spout pouches recyclable?",
      a: "Yes. Our sugarcane-derived Bio-PE spout pouches are constructed using mono-material laminations, making them fully recyclable under the standard PE stream (RIC #4 / LDPE) to support circular supply lines."
    },
    {
      q: "Can these spouted pouches handle hot-fill pasteurization?",
      a: "Yes, our Bio-PE and high-temp co-extruded structures can tolerate hot-fill temperatures up to 85°C-90°C, making them suitable for pasteurized juices and purees."
    }
  ]

  return (
    <BlogArticleTemplate
      title="Bio-Based Spout Pouches for Liquids | Eco-friendly Packaging | POUCH.ECO"
      metaDescription="Discover bio-based spout pouches for liquids. Plant-derived sugarcane Bio-PE and compostable structures with custom nozzles for drinks, purees, and refills."
      canonicalUrl="https://pouch.eco/eco-friendly-packaging-revolution-introducing-bio-based-spout-pouches-for-liquid"
      heroTitle={
        <>
          Introducing Bio-Based Spout<br />
          <span className="text-[#10b981]">Pouches for Liquid Packaging</span>
        </>
      }
      heroSubtitle="Ditch fossil plastics. Plant-based Bio-PE sugarcane spouted pouches offer elite gas barrier performance, leak-proof spouts, and full recyclability."
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="SUSTAINABLE_MATERIALS"
      categoryColor="#10b981"
      readTime="10 min read"
      sections={sections}
      faqSections={faqSections}
      ctaTitle="Develop Your Bio-Based Liquid Pack"
      ctaDescription="Verify spout fitments, material thickness, and custom configurations. Download dieline templates or order stock samples."
      achievePackLink="https://achievepack.com/packaging/spout-pouches"
      achievePackText="Need enterprise B2B compliance and certificates for retail liquid packaging?"
    />
  )
}
