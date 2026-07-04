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

const HomeVsIndustrialCompostable: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  // Curated images generated using Google Imagen
  const IMAGES = {
    hero: '/imgs/topics/home-vs-industrial-compostable/hero.jpg',
    process: '/imgs/topics/home-vs-industrial-compostable/process.jpg',
    comparison: '/imgs/topics/home-vs-industrial-compostable/comparison.jpg'
  }

  const sections = [
    {
      id: 'composting-definitions',
      title: 'Home vs. Industrial Compostable: The Core Differences',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Compostable packaging is designed to break down into organic matter without leaving toxic chemical residues behind. However, the environmental conditions required for biodegradation vary significantly between backyard home compost bins and high-temperature commercial industrial composting facilities.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Home Composting (Ambient)</h4>
                <p className="text-sm text-neutral-600">
                  Home compostable packaging is designed to biodegrade at ambient temperatures (20°C to 30°C) in backyard compost bins. It relies on natural garden microbes and takes up to 12 months to break down completely.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Industrial Composting (Thermophilic)</h4>
                <p className="text-sm text-neutral-600">
                  Industrial compostable packaging requires thermophilic temperatures (55°C to 60°C) along with managed humidity and oxygen levels. These commercial facilities break down tough bio-polymers like PLA in under 180 days.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Industrial windrow composting facility turning organic waste rows under steam" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Commercial industrial composting facilities manage temperature and moisture to decompose bio-polymers rapidly"
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
            "Greenwashing allegations occur when brands sell industrial-only compostable PLA bags to consumers who toss them into garden compost heaps, where they remain intact for years. Backyard piles rarely reach the 55°C temperature required to hydrolyze polylactic acid (PLA). 
            In my 14 years of engineering bio-materials, I tell clients to choose their structures carefully. If you want backyard composting, you must use thinner, elastomer-rich polymers like PBAT and PBS (certified OK Compost Home). If your customers have access to municipal green bins, then high-barrier PLA/Cellulose laminates (certified EN 13432) are the way to go. We also ensure that all our inks and lamination adhesives are fully certified compostable to prevent soil toxicity."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> DIN Certco, TÜV Austria & Biodegradable Products Institute (BPI) Verified
          </p>
        </div>
      )
    },
    {
      id: 'five-pain-points',
      title: '5 Compostable Packaging Pain Points & Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Replacing standard fossil-fuel plastics with compostable films requires solving key issues related to barrier protection, seal strength, and material lifespan:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Shortened Product Shelf Life (Barrier Leakage)
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Uncoated bio-plastics let moisture and oxygen pass through easily, making coffee lose its aroma, chips go stale, and dry food spoil quickly.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                High-barrier metallized cellulose or EVOH-coated PLA. We build multi-layer bio-films that keep moisture and oxygen transmission rates below 1.0g/m²/24h, matching the barrier performance of traditional plastics.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Weak Heat Seals & Bursting Pouch Seams
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Compostable films have narrow heat-sealing windows, leading to weak seals that burst open on high-speed filling lines or during shipping.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Optimized PBS/PBAT co-polymer sealant layers. This blend widens the heat-sealing window and provides high seal strength, preventing bags from bursting under pressure.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Premature Degradation During Warehousing
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Bio-based materials can absorb moisture and begin breaking down early in humid warehouses before the product ever reaches retail shelves.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Humidity-stabilized bio-resins. Our compostable films are designed to remain fully stable in dry warehouse storage, only degrading when exposed to soil microbes and high moisture in compost.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Toxic Ink & Glue Residues Left in Compost
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Using standard solvent inks and polyurethane glues on compostable bags leaves toxic heavy metals in the soil, failing eco-safety tests.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Water-based inks and certified compostable adhesives. We print with non-toxic, soy/water-based inks and use compostable lamination glues to ensure the bag breaks down cleanly.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: High Material Costs for Eco-Friendly Substrates
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Compostable polymers can cost 2 to 3 times more than petroleum-based plastics, eating into the margins of growing brands.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Downgauged material designs. We optimize the thickness of each layer in our multi-layer laminates, reducing bio-resin volume while keeping the pouch strong and protective.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'composting-comparison',
      title: 'Visualizing Home vs. Industrial Composting',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Understanding the decomposition process helps brands choose the right packaging and label it correctly. Industrial compostable packaging requires the high temperatures of commercial facilities, whereas home compostable packaging breaks down at ambient temperatures.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Infographic showing decomposition differences: Home compostable at ambient temp vs Industrial compostable at 60C" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual breakdown: Home composting (left) versus commercial industrial composting (right)"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Can I throw industrial compostable packaging into my backyard compost bin?",
      answer: "No. Industrial compostable materials (like PLA) require high temperatures (55°C–60°C) to break down. Backyard compost piles rarely reach these temperatures, so the packaging will not degrade."
    },
    {
      question: "What certifications should I look for in home compostable packaging?",
      answer: "Look for the 'TÜV OK Compost Home' certification or compliance with the Australian AS 5810 standard, which guarantee the packaging degrades safely in home compost piles."
    },
    {
      question: "Do compostable pouches dissolve in landfills or oceans?",
      answer: "No. Compostable packaging is not designed to degrade in landfills or oceans, which lack the heat, oxygen, and microbial activity found in compost piles. They must be composted."
    },
    {
      question: "Are compostable pouches as strong as plastic pouches?",
      answer: "Yes. By laminating multiple bio-polymer layers (like Kraft paper, cellulose, and PBS), we create pouches with tensile strength and barrier properties that match traditional plastic."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Home vs. Industrial Compostable Packaging | Eco Pouches</title>
        <meta name="description" content="Understand the differences between home and industrial compostable packaging. Certified TÜV OK Compost Home and ASTM D6400 / EN 13432 materials." />
        <link rel="canonical" href={`https://achievepack.com/topics/home-vs-industrial-compostable`} />
        <meta name="keywords" content="home compostable packaging, industrial compostable bags, compostable coffee pouch, PLA biodegradable bags, OK Compost Home, EN 13432" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Home vs. Industrial Compostable Packaging | Eco Pouches",
            "description": "An engineering analysis comparing home compostable and industrial compostable packaging, including temperature requirements and material structures.",
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
            "datePublished": "2025-05-20",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/home-vs-industrial-compostable`
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
        title="Home vs. Industrial Compostable Packaging"
        description="Understanding composting standards, decomposition temperatures, and eco-friendly packaging substrates."
        heroImage={IMAGES.hero}
        heroImageAlt="Decomposing home compostable kraft pouch in soil with healthy green sprouts"
        heroTitle="Home vs. Industrial Composting"
        heroSubtitle="Ambient Biodegradation | High-Temperature Commercial Facilities | Certified Bio-films"
        introSummary="Make the right choice for the planet. Home compostable packaging breaks down naturally in backyard compost bins at ambient temperatures, while industrial compostable films require high-temperature municipal facilities to decompose."
        aeoSummary="The difference between home and industrial compostability lies in temperature and time. Home compostable packaging degrades at ambient temperatures (20-30°C) using PBS or PBAT. Industrial compostable packaging requires thermophilic temperatures (55-60°C) to hydrolyze bio-polymers like PLA."
        eeatDetails="All compostable packaging is BRCGS food-safe compliant and certified by TÜV Austria, DIN Certco, and BPI to ensure safe, chemical-free biodegradation."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Compostable Packaging Science"
      />
    </>
  )
}

export default HomeVsIndustrialCompostable
