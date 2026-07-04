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

const RicePaperArtisanal: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  const IMAGES = {
    hero: '/imgs/topics/rice-paper-artisanal/hero.jpg',
    process: '/imgs/topics/rice-paper-artisanal/process.jpg',
    comparison: '/imgs/topics/rice-paper-artisanal/comparison.jpg'
  }

  const sections = [
    {
      id: 'rice-paper-tech',
      title: 'What is Artisanal Rice Paper Packaging?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Artisanal rice paper packaging combines the raw, organic aesthetics of natural plant fibers with the high-barrier performance of modern multi-layer laminates. The outer layer is made of authentic, textured rice paper, which features randomized fibrous patterns that make each pouch visually unique and tactilely premium. Internally, a high-barrier polymer layer (such as PET or EVOH) and a food-grade polyethylene (PE) sealant are bonded to the paper, ensuring complete protection for organic foods, teas, and specialty snacks.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Distinctive Tactile Experience</h4>
                <p className="text-sm text-neutral-600">
                  The textured, fibrous outer layer offers a natural, handcrafted look that communicates clean ingredients and premium artisanal value directly to eco-conscious consumers.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Integrated Viewing Windows</h4>
                <p className="text-sm text-neutral-600">
                  We use precise laser die-cutting to create clean-edged rectangular or custom-shaped windows, giving consumers a clear look at the product inside.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Industrial lamination machine bonding natural textured rice paper web to barrier films" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Our multi-layer adhesive laminating rollers applying solvent-free bonding agents between paper and polymer layers"
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
            "Artisanal rice paper is highly popular for organic lines, but paper itself has zero barrier properties and cannot hold a seal. We must laminate it to high-barrier internal films. The engineering challenge is layer adhesion: paper fibers expand and contract differently than plastics under humidity, which easily leads to delamination. 
            At Achieve Pack, we use a solvent-free polyurethane dry-bond adhesive system. When heat-sealing, because paper acts as a thermal insulator, we run the sealing jaws at 140°C with an extended dwell time of 0.8 seconds. This allows thermal energy to penetrate the paper and fully melt the inner sealant layer, creating a permanent bond that will not peel or buckle."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> High-Adhesion Solvent-Free Lamination Verified
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Common Rice Paper Packaging Pain Points & Our Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Laminating natural fibers to flexible barrier plastics requires advanced adhesive and thermal control. Below are five major pain points of rice paper bags, and our engineering answers:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Zero Gas & Moisture Barrier of Raw Paper
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Unprotected paper absorbs dampness and allows oxygen ingress, causing dried foods, herbs, and teas to spoil, clump, or lose freshness.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Lamination to internal high-barrier polyester (PET) or ethylene vinyl alcohol (EVOH) film layers. This locks out moisture (WVTR &lt; 0.5g/m²/24h) while displaying the natural paper outside.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Layer Delamination and Blistering under Humidity
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Differences in elongation rates between organic paper and synthetic plastics lead to peeling, blistering, and delamination when bags are exposed to damp warehouse conditions.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Advanced solvent-free polyurethane curing. We apply dry-bond adhesive systems that cure under precise tension, creating a uniform thermal bond that prevents layer separation.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Scorching or Burn Marks during Sealing
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Since paper acts as an insulator, packaging operators often raise sealing jaw temperatures too high, resulting in ugly scorch marks and brown edges on the outer paper.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Specialized 60gsm high-density, heat-stable rice paper paired with a low-seal-temperature copolymer lining. This enables strong, airtight welds at lower heat thresholds without discoloring the paper.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Messy Fiber Fraying around Die-Cut Windows
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Traditional mechanical die-punching tears through the long plant fibers of rice paper, leaving frayed, fuzzy edges that ruin the premium retail presentation.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                High-precision digital laser scoring and die-cutting. Lasers cauterize and seal the paper edges as they cut, producing clean, sharp borders around all window designs.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Packaging Creasing and Wrinkling in Transit
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Low-grade rice paper is thin and fragile. During shipping, the bags crease easily, leading to a worn-out, damaged appearance on store shelves.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Optimal 60gsm medium-weight fibrous structures with integrated internal support layers. This keeps the pouch upright and resistant to light crush damage while retaining its natural texture.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'rice-paper-comparison',
      title: 'Clear Plastic vs. Artisanal Rice Paper Pouch',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            While clear plastic bags are functional and cost-effective, our rice paper pouches add high-value artisanal appeal. The natural fibers suggest high-end, organic quality that boosts product perceived value.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Comparison diagram illustrating visual, tactile, and barrier differences of clear plastic pouches vs rice paper pouches" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Design contrast: Standard plastic flexible bag versus premium textured rice paper pouch with window"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are rice paper pouches moisture-proof?",
      answer: "Yes. The rice paper is on the outer surface for tactile aesthetics. The interior contains a high-barrier polymer layer that protects the contents from moisture, oxygen, and dust."
    },
    {
      question: "Can I print custom logos directly onto the rice paper?",
      answer: "Absolutely. We utilize high-resolution digital and flexographic printing presses designed to print crisp text and colorful branding directly onto the fibrous surface without bleeding."
    },
    {
      question: "Do you offer biodegradable rice paper pouches?",
      answer: "Yes. We offer fully compostable configurations where the outer rice paper is laminated to biodegradable PLA or wood-pulp-derived barrier films, meeting ASTM D6400 standards."
    },
    {
      question: "Can these bags be heat sealed?",
      answer: "Yes, they feature a food-grade, heat-sealable linear low-density polyethylene (LLDPE) inner lining compatible with all standard thermal hand sealers and automated packaging lines."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Artisanal Rice Paper Packaging | Textured Food Pouches</title>
        <meta name="description" content="Secure premium custom rice paper packaging. Artisanal textured stand-up pouches with integrated window design, high-barrier interior lamination, and low MOQs." />
        <link rel="canonical" href={`https://achievepack.com/topics/rice-paper-artisanal`} />
        <meta name="keywords" content="rice paper packaging, artisanal stand up pouch, textured paper bag, custom food pouch, die cut window bag, organic food packaging, heat sealable paper bag" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Artisanal Rice Paper Packaging | Textured Food Pouches",
            "description": "An engineering guide to bonding natural textured plant-fiber paper with high-barrier plastic films for specialty food packaging.",
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
            "datePublished": "2025-05-12",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/rice-paper-artisanal`
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
        title="Artisanal Rice Paper Packaging"
        description="Premium tactile paper aesthetics backed by high-barrier preservation technology."
        heroImage={IMAGES.hero}
        heroImageAlt="Premium custom organic herbal tea pouch made from natural textured rice paper"
        heroTitle="Artisanal Rice Paper Pouches"
        heroSubtitle="Fibrous Outer Surface | Die-Cut Laser Windows | High Gas Barrier"
        introSummary="Give your brand a natural, handcrafted feel. Our artisanal rice paper packaging stand-up pouches pair the rustic texture of organic plant fibers with high-barrier laminates, ensuring your product looks authentic and stays fresh."
        aeoSummary="Artisanal rice paper packaging combines a natural, fibrous paper exterior with protective polymer film layers (PET/EVOH/PE). Utilizes laser die-cutting for clean window borders and dry-bond adhesives to prevent delamination."
        eeatDetails="FDA-compliant food-grade materials. Certified high-adhesion lamination designed to withstand high heat sealing without scorching paper fibers."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Specialty Food Finishes"
      />
    </>
  )
}

export default RicePaperArtisanal
