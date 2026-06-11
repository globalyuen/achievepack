import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Layout, Leaf, Droplets, Shield } from 'lucide-react'

export default function RefillPouchesPage() {
  const sections = [
    {
      id: 'circular-model',
      title: 'The Circular Refill Brand Model',
      icon: <Layout className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            The subscription refill model is changing how consumer packaged goods (CPG) brands approach sustainability. Instead of selling a rigid plastic or heavy glass jar with every purchase, brands ship a premium "durable" container (like glass or ceramics) once, followed by lightweight, flat-shipped compostable refill pouches.
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-black text-2xl uppercase mb-4">Refill Model Advantages:</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>Customer Loyalty:</strong> Refill pouches incentivize subscription-based repeat purchases.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>Material Savings:</strong> Flat pouches use up to 70% less raw materials than rigid containers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>Shelf Differentiation:</strong> Matte Kraft paper or metallic refill bags look extremely premium and stand out on grocery shelves.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Compostable Refill Pouch Materials',
      icon: <Leaf className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            To hold powders, dry goods, coffee, or cosmetics refills, these pouches need protective barrier layers. We laminate wood-pulp-derived cellulose films (NatureFlex™) with plant-based starch binders (PLA/PBAT), offering high grease barriers and oxygen blocks while allowing the bag to decompose within 90 days in composting conditions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">Refill Pouch Structures</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ Matte Kraft Paper + Metallized Cellulose + PLA (High Barrier MetPLA)</li>
                <li>✓ Clear Cellulose + PLA Sealant (Transparent Window)</li>
                <li>✓ Certified ASTM D6400 & EN 13432</li>
                <li>✓ PFAS-free and FDA food contact approved</li>
              </ul>
            </div>
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">Refill Product Types</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ Organic Spices, Salts & Herb Seasonings</li>
                <li>✓ Coffee Beans, Ground Coffee & Cocoa Powders</li>
                <li>✓ Supplement Powders, Protein & Superfoods</li>
                <li>✓ Dry Bath Salts, Cosmetics & Cleaning Powders</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'carbon-freight',
      title: 'Carbon Footprint and Economic Freight Benefits',
      icon: <Droplets className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            Shipping empty glass bottles or thick plastic jars is incredibly inefficient, basically transportating empty air across continents. Flat-shipped refill pouches pack with maximum density, drastically lowering freight volume:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 font-mono text-center text-black">
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-green-600 mb-1">-80%</div>
              <div className="text-xs font-bold uppercase text-neutral-500">Warehouse Storage Space saved</div>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-blue-600 mb-1">-65%</div>
              <div className="text-xs font-bold uppercase text-neutral-500">Logistics Transport Costs</div>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-purple-600 mb-1">90 Days</div>
              <div className="text-xs font-bold uppercase text-neutral-500">Organic Degradation Timeline</div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqSections = [
    {
      q: "How do refill pouches reduce transport emissions?",
      a: "Refill pouches are shipped completely flat. One standard cargo pallet can hold up to 50,000 flat pouches, compared to only 3,000 empty glass bottles. This 16x increase in shipping density reduces freight trucks on the road and lowers Scope 3 carbon metrics."
    },
    {
      q: "What products are best suited for compostable refill pouches?",
      a: "Dry ingredients like loose tea, spices, coffee, grain cereals, and protein powders are perfect. For wet products like lotion refills, we recommend our specialized high-barrier Bio-PE recyclable spouted pouches."
    },
    {
      q: "Are refill pouches durable enough for mail-order shipping?",
      a: "Yes. Our MetPLA Triplex laminate has a thickness of 120-140 microns, providing strong puncture resistance to withstand postal sorting machinery and envelopes without tearing."
    }
  ]

  return (
    <BlogArticleTemplate
      title="Glass Bottles Paired with Compostable Refill Pouches | POUCH.ECO"
      metaDescription="Build a sustainable refill subscription brand. Learn how durable glass containers paired with certified compostable flat refill pouches lower shipping costs."
      canonicalUrl="https://pouch.eco/sustainable-packaging-revolution-glass-bottles-paired-with-compostable-refill-pouches-for-an-eco-friendly-lifestyle"
      heroTitle={
        <>
          Glass Bottles Paired with<br />
          <span className="text-[#10b981]">Compostable Refill Pouches</span>
        </>
      }
      heroSubtitle="Launch a circular refill subscription. Reduce carbon footprints by shipping lightweight, flat-packed ASTM D6400 certified compostable bags to refill durable jars."
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="CIRCULAR_REFILL"
      categoryColor="#10b981"
      readTime="9 min read"
      sections={sections}
      faqSections={faqSections}
      ctaTitle="Develop Your Circular Refill Pouch"
      ctaDescription="Find the perfect size to refill your custom glass jars. Download vector dielines or request a free stock sample kit."
      achievePackLink="https://achievepack.com/materials/compostable"
      achievePackText="Need high-volume wholesale compostable refill packaging for retail distribution?"
    />
  )
}
