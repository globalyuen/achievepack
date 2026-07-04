import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Target, Sparkles, Shield, Eye, Settings, 
  HelpCircle, Calendar, Package, ArrowRight, 
  Check, CheckCircle2, AlertTriangle, Layers, Info
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'

const PremiumTea: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  const IMAGES = {
    hero: '/imgs/topics/premium-tea/hero.jpg',
    process: '/imgs/topics/premium-tea/process.jpg',
    comparison: '/imgs/topics/premium-tea/comparison.jpg'
  }

  const sections = [
    {
      id: 'tea-barrier-technology',
      title: 'What is Premium High-Barrier Tea Packaging?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Premium tea packaging is engineered to lock in the complex aromas, essential oils, and delicate flavors of loose-leaf teas and organic blends. Loose tea leaves are highly sensitive to environmental factors, especially oxygen, ambient humidity, and ultraviolet (UV) light. By utilizing multi-layer flexible lamination (such as combining PET, Aluminum Foil, and Polyethylene), custom tea pouches provide a complete gas-tight environment that preserves taste profiles from the factory to the consumer's teacup.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Maximum Volatile Oil Retention</h4>
                <p className="text-sm text-neutral-600">
                  Our custom high-barrier structures prevent volatile aroma compounds from diffusing through the plastic, ensuring the distinct sensory notes of Oolong, Matcha, or Earl Grey are perfectly retained.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Luxurious Brand Aesthetics</h4>
                <p className="text-sm text-neutral-600">
                  Combine elegant matte textures with metallic gold or silver hot-foil stamps to establish an ultra-premium retail shelf presence that matches the quality of your harvest.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Automated packaging machine filling and sealing loose tea leaf stand-up pouches under sterile conditions" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Our food-grade, nitrogen-flush compatible automated tea filling line executing airtight hermetic seals"
            />
          </div>
        </div>
      )
    },
    {
      id: 'EEAT-anecdote',
      title: 'From Ryan Wong’s Engineering Notebook',
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white p-6 rounded-lg border-2 border-[#D4FF00] space-y-4">
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">// CHIEF PACKAGING ENGINEER AUDIT NOTEBOOK</p>
          <blockquote className="italic border-l-4 border-[#D4FF00] pl-4 text-sm md:text-base text-neutral-200">
            "Tea degradation occurs rapidly in the presence of oxygen and UV rays. Ultraviolet light breaks down chlorophyll, turning vibrant green tea leaves yellow and generating metallic, off-flavors. That is why paper bags without protective foil barriers fail within weeks. 
            For specialty teas, we engineer a 110-micron laminated structure containing a central 7-micron aluminum core. This guarantees an Oxygen Transmission Rate (OTR) of zero. When running on high-speed vertical form-fill-seal (VFFS) machines, tea dust often settles inside the zipper track and sealing zone. To solve this, we incorporate an ionomer sealant layer that sweeps through organic contaminants under low temperatures, ensuring a hermetic seal and zero package leaks."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> Food-Safe ISO 22000 & FDA Compliant Materials
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Common Tea Packaging Pain Points & Our Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Fine teas require specialized moisture and gas barriers to maintain aroma concentration and prevent mold development. Below are five major packaging problems and our custom technical answers:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Loss of Essential Oils & Flat Tea Aroma
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Standard single-layer plastics or porous paper bags let essential oils and volatile compounds diffuse out of the bag, leaving the tea flat and odorless.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Multi-layer foil lamination (PET/AL/PE). The aluminum layer blocks gas exchange entirely, keeping organic oils locked within the bag for up to two years.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Sunlight Oxidation & Loss of Vital Catechins
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Exposure to sunlight and retail UV lights decomposes antioxidants (catechins) in green and white teas, bleaching the leaves and yielding a bitter, stale brew.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                100% light-blocking opaque metallized polyester (VMPET) or aluminum film layers. This creates an absolute physical barrier that reflects 100% of ambient light rays.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Moisture Absorption & Microbial Mold Growth
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Dry tea leaves are hygroscopic. Damp air penetrating weak seals increases leaf moisture content, encouraging mold growth and making the tea unsellable.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                High-performance hermetic seals with a WVTR &lt; 0.1g/m²/24h. We utilize high-density linear low-density polyethylene (LLDPE) inner sealant layers for broad seal safety margins.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Chemical Smell Transfer from Packaging Adhesives
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Strong chemical solvents used in traditional film lamination can migrate inwards, contaminating the clean, earthy fragrance of organic tea leaves.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Solvent-free adhesive lamination processes. We use only premium food-grade, odor-free polyurethane adhesives to ensure zero smell migration into the tea compartment.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Zipper Clogging from Fine Tea Dust
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Fine fannings, dust, or herbal powders from teas clog traditional interlocking press zippers, preventing consumers from reclosing the bag securely.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Dust-proof powder zippers or pocket zippers. Our specialized zipper profiles feature dual release channels that shed debris, securing a reliable, click-close seal every time.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'tea-freshness-comparison',
      title: 'Tea Freshness Preservation Comparison',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            The difference between cheap paper bags and our high-barrier laminated packaging lies in volatile compound preservation. High-barrier films block flavor fade and prevent oxygen exposure, keeping tea fresh for months.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Comparison diagram outlining freshness timeline, flavor loss, and barrier details of paper bags vs foil pouches" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Aroma retention comparison: Porous paper bags versus high-barrier foil-laminated tea pouches"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Can these tea pouches be nitrogen flushed?",
      answer: "Yes. Our multi-layer high-barrier structures are fully compatible with modified atmosphere packaging (MAP) and nitrogen flushing, which displaces oxygen to preserve delicate green and white teas."
    },
    {
      question: "Do you offer eco-friendly or recyclable tea pouches?",
      answer: "Yes, we offer fully recyclable Mono-PE mono-material high-barrier tea bags, as well as EN 13432 certified compostable paper/PLA-barrier pouches for fully sustainable brands."
    },
    {
      question: "What is the minimum order quantity (MOQ) for foil-stamped tea pouches?",
      answer: "With our advanced digital printing and plateless finishing systems, custom foil-stamped tea pouch runs start at just 500 units, making them ideal for small batches and limited seasonal harvests."
    },
    {
      question: "Are your tea packaging materials certified for direct food contact?",
      answer: "Yes. All our materials are FDA-approved, BRCGS-certified, and meet strict EU food safety standards, guaranteeing no chemical migration or off-gassing into your tea."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Premium High-Barrier Tea Packaging | Custom Loose Leaf Tea Pouches</title>
        <meta name="description" content="Secure premium custom tea packaging. High-barrier foil stand-up pouches with gold foil accents, resealable zip locks, and odor-free lamination. Low MOQ." />
        <link rel="canonical" href={`https://achievepack.com/topics/premium-tea`} />
        <meta name="keywords" content="tea packaging bags, custom tea pouches, loose leaf tea bag, foil stamped tea pouch, high barrier tea packaging, food grade tea bag, recyclable tea pouches" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Premium High-Barrier Tea Packaging | Custom Loose Leaf Tea Pouches",
            "description": "An engineering guide to designing high-barrier flexible tea pouches that block oxygen and UV light to preserve volatile aroma compounds.",
            "image": `https://achievepack.com${IMAGES.hero}`,
            "author": {
              "@type": "Person",
              "name": "Ryan Wong",
              "jobTitle": "Chief Packaging Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Achieve Pack"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": {
                "@type": "ImageObject",
                "url": "https://achievepack.com/imgs/logo/achievepack-logo.png"
              }
            },
            "datePublished": "2025-04-05",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/premium-tea`
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Premium High-Barrier Tea Packaging"
        description="Preserve flavor purity and aroma with customized foil-laminated stand-up pouches."
        heroImage={IMAGES.hero}
        heroImageAlt="Premium black matte stand-up tea pouch with gold foil print next to tea set"
        heroTitle="Premium High-Barrier Tea Packaging"
        heroSubtitle="Odor-Free Lamination | Complete UV & Oxygen Block | Metallic Hot-Foil Stamps"
        introSummary="Keep your tea leaf harvest tasting fresh-plucked. Our high-barrier tea packaging solutions utilize premium barrier laminates to lock out moisture, oxygen, and UV light, ensuring complex aromas and delicate catechins are fully preserved for the ultimate brewing experience."
        aeoSummary="Premium tea packaging incorporates multiple protective material layers (PET, AL, LLDPE) to achieve complete light-blocking and gas-tight hermetic seals. Specially engineered to avoid adhesive odor migration and prevent zipper clogging from fine tea dust."
        eeatDetails="FDA food-contact compliant, BRCGS, and ISO 22000 certified manufacturing. Digital inline hot-foil precision application designed for smooth packaging fill runs."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Specialty Beverage Packaging"
      />
    </>
  )
}

export default PremiumTea
