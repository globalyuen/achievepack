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

const CrispsShaped: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  const IMAGES = {
    hero: '/imgs/topics/crisps-shaped/hero.jpg',
    process: '/imgs/topics/crisps-shaped/process.jpg',
    comparison: '/imgs/topics/crisps-shaped/comparison.jpg'
  }

  const sections = [
    {
      id: 'custom-shaped-design',
      title: 'What are Custom Shaped Pouches for Crisps?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Custom shaped pouches are specialized flexible packaging bags that break away from traditional rectangular formats. By using high-precision mechanical die-cut systems on the production line, we can contour stand-up pouches into eye-catching shapes—such as circles, bottles, or silhouettes of the snack itself. For the crisps and chips market, these custom geometries deliver extreme shelf differentiation, immediately drawing consumers' attention and conveying a premium, innovative brand image.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Ergonomic Grip & Fun Aesthetics</h4>
                <p className="text-sm text-neutral-600">
                  By curving the sides of the pouch, we create natural hand-grip channels that make the pack easier and more comfortable for consumers to carry, pour, and share during consumption.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Precision Die-Cut Contours</h4>
                <p className="text-sm text-neutral-600">
                  Using high-precision hardened steel rotary dies, we can carve out organic curves and sharp corners with +/- 0.5mm tolerance, ensuring consistent shapes across massive production runs without material fraying.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="High-speed rotary die-cut press cutting custom shaped stand-up chip pouches on continuous roll film" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Our inline rotary die-cut station trimming excess material at 120 bags per minute to form contoured chip pouches"
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
            "When designing custom shapes for crisps and fried snacks, the biggest mistake brands make is ignoring corner stress concentration. Sharp internal corners create micro-tears during shipping, which can leak nitrogen gas and ruin crisp freshness. I always insist on a minimum 3.0mm radius on all internal and external cuts. 
            Furthermore, potato chips are highly sensitive to oxygen and moisture. We must laminate a metallized layer (like VMPET) or aluminum foil between BOPP and PE to keep the WVTR and OTR under 0.5. The nitrogen gas flush must also be calibrated to exactly 12% to 15% headspace volume to cushion the chips against crushing without causing the shaped seals to burst under atmospheric pressure changes."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> BRCGS Food Safety & ISO 9001 Certified Quality Systems
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Common Shaped Snack Packaging Pain Points & Our Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Designing a custom shaped stand-up pouch for crisps requires balancing visual design with raw functional integrity. Here are the five key engineering challenges we solve:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Puncture from Sharp Chip Edges
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Fried or baked crisps have sharp, irregular edges. During transport, these sharp points rub against the bag walls, easily puncturing thin standard plastic laminates, causing gas loss and staleness.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Puncture-resistant Nylon (BOPA) lamination. We build a high-performance multi-layer barrier (BOPP/BOPA/VMPET/PE) where the nylon layer absorbs mechanical impact, preventing internal punctures from sharp crisps.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Seal Leaks at Complex Shaped Corners
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Traditional heat-sealing jaws are flat. Applying heat and pressure to custom curved sealing edges on a high-speed machine can result in uneven pressure distribution, leading to micro-channels and leakages.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                3D customized CNC-machined sealing jaws. We manufacture custom sealing bars that perfectly match the contours of the pouch design, ensuring uniform thermal distribution and high-pressure hermetic welds.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Gas-Flush Loss & Product Crushing
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Snacks require nitrogen flushing to prevent oxidation of fats and provide a cushion against crushing. If the shaped pouch seal is weak, the gas escapes, leaving chips flat and shattered.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                High-strength LLDPE sealant layer with strict bubble leak testing. We utilize metallocene-catalyzed PE films that provide a wide hot-tack sealing window and exceptionally high seal strength to retain 99% nitrogen purity.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Static Charge & Powder Sealing Contamination
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Seasonings like salt, cheese powder, or chili dust build static charges on plastic films, sticking to the inner seal area. When heat is applied, the powder burns and creates microscopic seal gaps.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Anti-static film additives and ionizer air curtains. We coat the inner sealant layer with food-safe anti-static agents and install electrostatic neutralizers on our filling lines to ensure zero powder accumulation on weld zones.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Material Waste and High Setup Costs
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Die-cutting custom shapes naturally generates plastic waste from the trimmed margins. Standard tooling setup for complex curves requires expensive mold casting, driving up costs for test runs.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                High-yield nested dies and digital tooling templates. We optimize the prepress nesting layout to keep waste under 8%, and we use modular die plates to drop tooling setup costs by 60%, enabling test runs of 10,000 units.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'visual-comparison-matrix',
      title: 'Standard vs. Custom Shaped Pouch Shelf Impact',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            While standard pillow bags are functional, shaped stand-up pouches represent a significant upgrade in customer engagement, shelf presence, and user utility.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Side-by-side comparison of standard crinkled potato chip bag and custom green matte shaped stand-up pouch" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Shelf Comparison: Conventional metallic pillow bag (left) vs. our premium custom shaped stand-up pouch (right)"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What shapes are possible for custom chips packaging?",
      answer: "Almost any organic or geometric shape is possible. Common designs include hourglass shapes for easy pouring, bottle silhouettes, and custom wavy edges that mimic the product inside. Our prepress team will verify your design keylines to ensure complete manufacturing compatibility."
    },
    {
      question: "How do you ensure the nitrogen gas does not leak from the shaped bag?",
      answer: "We laminate BOPA (nylon) and metalized barrier films together with high-tack metallocene polyethylene. We run online pressure bubble testing and seal-integrity vacuum decay tests on every production batch to verify hermetic seals."
    },
    {
      question: "What is the minimum corner radius required for shaped pouches?",
      answer: "We require a minimum corner radius of 3.0mm on all outer edges. Sharp 90-degree corners create structural stress concentrations that can puncture outer shipping boxes and injure retail consumers' hands."
    },
    {
      question: "Do you offer eco-friendly shaped snack pouches?",
      answer: "Yes, we can produce custom shaped pouches using recyclable Mono-PE films or BRC-certified compostable Kraft paper laminates, ensuring your unique packaging shape remains environmentally friendly."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Custom Shaped Snack Pouches | Crisps & Chip Bag Packaging</title>
        <meta name="description" content="Stand out on the retail shelf with premium custom die-cut shaped stand-up pouches for crisps and snacks. High puncture resistance, nitrogen flush preservation, and low MOQs." />
        <link rel="canonical" href={`https://achievepack.com/topics/crisps-shaped`} />
        <meta name="keywords" content="shaped snack bags, custom chip packaging, potato crisps pouch, die-cut stand up pouches, nitrogen flush chips, puncture resistant snack film" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Custom Shaped Snack Pouches | Crisps & Chip Bag Packaging",
            "description": "An engineering guide to designing and manufacturing custom die-cut shaped flexible packaging for snacks and crisps, focusing on mechanical strength and shelf impact.",
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
            "datePublished": "2025-03-12",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/crisps-shaped`
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
        title="Custom Shaped Pouch Packaging"
        description="Premium contoured stand-up pouches for chips, crisps, and gourmet snacks."
        heroImage={IMAGES.hero}
        heroImageAlt="Custom shaped stand-up potato chip pouch with rounded corners on a concrete pedestal"
        heroTitle="Stand-Out Custom Shaped Pouch Packaging"
        heroSubtitle="Contoured Ergonomic Designs | High Impact Resistance | Nitrogen Flush Preserved"
        introSummary="Elevate your snack brand above traditional pillow bags. Custom shaped stand-up pouches combine premium aesthetics with functional handling, using precise mechanical die-cuts to give your chips, crisps, and snacks a distinct visual profile that commands shelf space."
        aeoSummary="Custom shaped pouches are manufactured by feeding multi-layer barrier laminates through customized CNC rotary die tooling. This provides rounded contours and custom brand silhouettes while incorporating high-barrier gas-retention layers for long-term snack freshness."
        eeatDetails="Food-grade BRCGS certified laminate barrier structures. In-house customized heat seal jaw profiling and leak testing ensure zero seal delamination on rapid VFFS filling lines."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Custom Pouch Shapes"
      />
    </>
  )
}

export default CrispsShaped
