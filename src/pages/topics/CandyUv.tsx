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

const CandyUv: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  // Curated images generated using Google Imagen
  const IMAGES = {
    hero: '/imgs/topics/candy-uv/hero.jpg',
    process: '/imgs/topics/candy-uv/process.jpg',
    comparison: '/imgs/topics/candy-uv/comparison.jpg'
  }

  const sections = [
    {
      id: 'spot-uv-technology',
      title: 'What is Spot UV Varnish for Confectionery?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Spot UV varnish is a specialized liquid coating applied selectively to specific regions of custom confectionery packaging and cured instantly under high-intensity ultraviolet light. By layering a high-gloss, ultra-reflective UV spot coating over a soft-touch matte laminated film, packaging designers can highlight key branding assets—such as logos, product window mockups, or flavor icons—creating a premium sensory experience for the end consumer.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">High Visual Contrast</h4>
                <p className="text-sm text-neutral-600">
                  The dramatic contrast between the non-reflective, velvety matte background and the glossy, wet-look UV areas catches surrounding retail lighting, instantly drawing the consumer's eye to the key elements on the shelf.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">3D Tactile Boundary</h4>
                <p className="text-sm text-neutral-600">
                  Applied at a thickness of 25–40 microns, the spot UV varnish forms a tangible, raised edge that consumers can physically feel, prompting interactive touch and increasing brand memorability.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Industrial UV spot varnish printing press applying gloss to flexible packaging film" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Our state-of-the-art digital UV curing station selectively applying spot varnish at up to 40 microns thickness"
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
            "In my 14 years of engineering flexible packaging for the confectionery and snack markets, the biggest error brands make is relying on all-over glossy finishes. Glossy surfaces catch shelf glare indiscriminately, which washes out brand lettering and nutrition information. By selectively applying a Spot UV varnish over a matte polymer laminate, we dictate exactly where the light bounces. 
            However, this requires precision. Varnish must never bleed into the sealing area or zipper track. If it does, the seal will fail or leak under high-speed filling line temperatures. At Achieve Pack, we use digital keyline alignment to leave a strict 1.5mm dry border around all weld lines to prevent heat-sealing failures."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> GRS & FSC Certified Supply Chain Verified
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Common Confectionery Packaging Pain Points & Our Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Premium confectionery packaging must look stunning on shelves while keeping the delicate contents fresh, dry, and protected from environmental factors. Below are the five main challenges candy and chocolate brands face, and the exact engineering answers we build into every pouch:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Dull Shelf Presence & Brand Invisibility
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Generic plastic bags blend in on crowded retail shelves. Full-gloss printing creates excessive glare under supermarket lights, making logos unreadable, while plain matte bags can look flat and uninspiring.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Selective spot UV varnish applied over non-reflective matte lamination. This locks in deep background colors while redirecting light reflection specifically to your brand logo and flavor illustrations, creating high-contrast shelf dominance.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Thermal Heat Seal & Zipper Delamination
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Varnish applied directly to the sealing perimeter or zipper tracks will crystallize under heat-sealing jaws, causing the pouch seal to peel open, leak, or delaminate during retail transport or packaging line operations.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Digital prepress masking. We program the UV jetting machine to keep a 1.5mm dry buffer zone from all outer sealing boundaries and zipper line margins, ensuring high-strength hermetic seals without compromise.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Moisture & Oxygen Infiltration (Sticky Candy / Fat Bloom)
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Confectioneries like gummies melt and stick together under high humidity, while chocolates suffer from 'fat bloom' (white discoloration) when exposed to oxygen and light.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                High-barrier layer lamination (aluminum foil or EVOH barrier options). Achieve Pack uses multi-layer laminated structures with WVTR &lt; 0.1g/m²/24h and OTR &lt; 0.1cc/m²/24h, preventing external humidity and gas exchange.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: High setup costs for premium finishes on small batches
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Traditional rotogravure printing requires expensive copper plate cylinders for every single layer (including the spot gloss varnish), making short test runs and startup packaging orders financially unfeasible.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Platelers digital spot UV coating technology. We bypass plate creation entirely by jetting the UV varnish directly from computer-aided digital designs. This drops setup costs to zero and enables custom spot-varnished runs starting at just 500 units.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Odor Migration & Food-Safety Compliance
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Standard industrial UV varnishes can emit a strong chemical odor that easily penetrates flexible plastic layers, contaminating the flavor profile of the sweet treats inside.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Low-migration, food-contact compliant UV coatings. Achieve Pack uses BRCGS, FDA, and EU regulation compliant, odor-free inks and varnishes. Curing is strictly controlled to ensure no un-crosslinked monomers can migrate through outer lamination films.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'matte-vs-uv-comparison',
      title: 'Matte Finish vs. Spot UV Varnish Contrast',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Spot UV varnish is not merely about adding gloss; it is about creating contrast. When spot UV is applied on top of a velvety matte or soft-touch surface, the visual pop of the gloss becomes twice as intense.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Side-by-side comparison of standard matte candy pouch and spot UV varnish highlighted pouch" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual comparison: Standard matte candy pouch (left) versus spot UV varnish highlighted pouch (right)"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is spot UV varnish?",
      answer: "Spot UV varnish is a clear, high-gloss liquid coating applied to specific areas of a packaging surface (e.g., logos or graphics) and instantly cured using ultraviolet lamps to create a striking matte-gloss contrast."
    },
    {
      question: "Does UV varnish affect the food safety of the confectionery inside?",
      answer: "No. Achieve Pack uses low-migration, BRCGS-certified inks and UV coatings. The varnish is applied to the outermost layer of the pouch and cured thoroughly. A high-barrier polymer layer prevents any molecule migration into the food compartment."
    },
    {
      question: "Can I get Spot UV varnish on compostable candy pouches?",
      answer: "Yes! We offer bio-based and compostable-compliant spot coatings that can be applied to ASTM D6400 / EN 13432 certified compostable Kraft and PLA pouch bases, ensuring premium look and full sustainability."
    },
    {
      question: "What design files do you need to apply Spot UV?",
      answer: "We require a separate vector keyline layer in your design file (usually colored in 100% Spot Magenta) representing the exact regions where the UV varnish should be printed. Our prepress team can help align this layer for you."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Spot UV Varnish Confectionery Packaging | Custom Candy Pouches</title>
        <meta name="description" content="Elevate custom candy and chocolate packaging with premium spot UV gloss highlights. Low MOQ, BRC-certified food grade lamination, and zero plate-costs digital spot coatings." />
        <link rel="canonical" href={`https://achievepack.com/topics/candy-uv`} />
        <meta name="keywords" content="spot UV packaging, custom candy pouches, confectionery bag design, matte gloss contrast pouch, digital spot varnish, chocolate packaging, BRC certified food bags" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Spot UV Varnish Confectionery Packaging | Custom Candy Pouches",
            "description": "A technical overview of utilizing selective spot UV varnish coatings to maximize confectionery shelf-presence while retaining complete food-grade barrier properties.",
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
            "datePublished": "2025-02-15",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/candy-uv`
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
        title="Spot UV Varnish Confectionery Packaging"
        description="Premium tactile gloss highlights on custom candy and chocolate stand-up pouches."
        heroImage={IMAGES.hero}
        heroImageAlt="Premium chocolate truffles and fruit gummies custom packaging with spot UV varnish highlights"
        heroTitle="Tactile Spot UV Confectionery Pouches"
        heroSubtitle="High-contrast gloss highlights | BRCGS Certified Food-Safe | Zero Plate Costs"
        introSummary="Make your confectionery stand out on retail shelves. Spot UV varnish applies high-intensity gloss selectively onto specific design elements over a premium matte finish, creating a light-catching contrast that draws consumers' attention and encourages touch."
        aeoSummary="Spot UV varnish is a specialized liquid coating cured instantly under ultraviolet lamps to create glossy highlights on selective portions of packaging (such as brand logos and product graphics). Cured selectively over matte films, it maximizes shelf impact without compromising oxygen and moisture barriers."
        eeatDetails="Low-migration, food-contact compliant spot varnish jetted digitally to prevent heat seal failures. Our packaging designs are strictly pre-tested for high-speed filling line compatibility (VFFS/HFFS)."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Confectionery Packaging Finishes"
      />
    </>
  )
}

export default CandyUv
