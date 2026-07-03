import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Target, Sparkles, Shield, Eye, Calendar, 
  Package, CheckCircle2, Layers, Info, Check, HelpCircle
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'

const CocktailSpout: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  const IMAGES = {
    hero: '/imgs/topics/cocktail-spout/hero.jpg',
    process: '/imgs/topics/cocktail-spout/process.jpg',
    comparison: '/imgs/topics/cocktail-spout/comparison.jpg'
  }

  const sections = [
    {
      id: 'spout-welding-technology',
      title: 'How Are Spouts Welded to Beverage Pouches?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Ready-to-drink (RTD) spouted pouches require a specialized manufacturing process. The spout—typically molded from high-density polyethylene (HDPE)—is welded into either the corner or top header of the pouch. Because the spout has a much higher thermal mass than the surrounding thin multi-layer laminate, we utilize specialized, contoured heat-sealing jaws. The sealing bars apply heat in multiple stages to melt and fuse the pouch's inner lining directly to the spout base, ensuring a leak-proof seal.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-2">Multi-Stage Thermal Fusing</h4>
              <p className="text-sm text-neutral-600">
                Our spout sealing process utilizes a 4-heat station cycle followed by dual active water-chilled bars, achieving a seamless weld without thermal warping of the barrier film.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-2">Ergonomic Cap & Pour Control</h4>
              <p className="text-sm text-neutral-600">
                Spouts are fitted with tamper-evident screw caps featuring anti-choke designs, providing an airtight reseal and clean pour control for on-the-go beverage consumption.
              </p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Industrial liquid packaging machine welding plastic spouts to corner of cocktail pouches" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Corner spout welding station applying high pressure and heat to fuse the spout to the multi-layer barrier film"
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
            "In my 14 years of designing flexible liquid packaging, ready-to-drink cocktails present the most aggressive chemical conditions. Ethanol acts as a natural solvent; it easily penetrates and degrades standard polyurethane lamination adhesives, leading to layer separation (delamination) within weeks. This compromises the oxygen barrier and ruins product safety.
            For RTD cocktail pouches, we use specialized aliphatic solvent-free polyurethane adhesives or co-extruded tie layers that are fully resistant to alcohol up to 15% ABV. In addition, liquid packaging suffers from immense hydraulic shock during shipping drops. If the side seams have sharp, right-angle corners, the packaging will rupture. We engineer rounded corner seals and incorporate high-tensile Nylon (BOPA) as a structural buffer to disperse drop forces safely."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> FDA & BRCGS Certified Food-Grade Manufacture
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Common Liquid Packaging Pain Points & Our Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Liquid cocktail packaging demands specialized chemical resistance and high drop durability. Below are the five common pain points for beverage brands and our technical solutions:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Alcohol-Induced Layer Delamination
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Ethanol and acidic juices attack standard adhesives, causing the laminated layers to detach, resulting in wrinkles, leaks, and gas transmission.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Utilizing retort-grade, solvent-free aliphatic adhesives or co-extruded resins that remain completely inert in contact with alcohol up to 15% ABV.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Liquid Leaks around the Spout Base
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Thermal differences between the thick HDPE spout and thin side films can create tiny micro-channels that cause liquid to slowly seep out.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Molded spouts with welding ribs, sealed using a 4-heat station and active water-chilled cooling bars to freeze the weld at 4.2 bars of pressure.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Seam Bursting on Impact (Drop Failures)
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Filled liquid pouches experience immense hydraulic shock when dropped during shipping, rupturing standard linear side seals.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Laminating a 15-micron Nylon (BOPA) layer for high tensile strength, and engineering rounded seal transitions to distribute liquid forces.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Oxidation of Fruit Flavors and Color Fading
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Citrus and organic ingredients in pre-mixed cocktails oxidize in the presence of light and air, turning brown and losing freshness.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Laminating a solid Aluminum Foil core (PET/Nylon/AL/PE) or EVOH barrier film, maintaining an OTR under 0.1cc/m²/24h to lock out air.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Tamper Evidence and Cap Safety
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Consumers require visual assurance that the liquid beverage has not been opened or tampered with before purchase.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Screw-cap spouts fitted with integrated tamper-evident plastic break-away rings that snap upon first opening, combining safety with convenience.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'barrier-comparison',
      title: 'Glass Bottle vs. Spouted Beverage Pouch',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Transitioning from heavy glass to flexible spouted pouches reduces shipping weight, limits breakage, and lowers logistics-related carbon emissions:
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Side-by-side comparison of heavy glass cocktail bottle and lightweight spouted drink pouch" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Operational comparison: Bulky, breakable glass packaging (left) versus our stylish, lightweight, and shatterproof spouted beverage pouch (right)"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Can these pouches withstand alcohol?",
      answer: "Yes, our cocktail spouted pouches are engineered with specialized solvent-free lamination adhesives that resist chemical degradation from alcohol up to 15% ABV. For higher-proof beverages, we customize the polymer blends."
    },
    {
      question: "Are your spouted pouches leak-tested?",
      answer: "Yes. Every batch undergoes strict quality control, including a 1.5-meter drop test, seam burst testing, and vacuum chamber leakage diagnostics to ensure absolute seal security."
    },
    {
      question: "How are spouted pouches filled with liquids?",
      answer: "They can be filled directly through the spout using automatic filling machinery and then capped, or they can be filled via a temporary top opening that is heat-sealed after filling."
    },
    {
      question: "Are the spout and cap materials food-grade and BPA-free?",
      answer: "Absolutely. All spout inserts, closures, and inner sealant films are constructed from food-grade, BPA-free High-Density Polyethylene (HDPE) and Linear Low-Density Polyethylene (LLDPE), compliant with FDA and BRCGS requirements."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Spouted Pouch Cocktail & Liquid Packaging | Custom Drink Bags</title>
        <meta name="description" content="Ditch glass and switch to lightweight spouted pouches. Retort-grade materials for cocktails, mocktails, and liquid beverages." />
        <link rel="canonical" href={`https://achievepack.com/topics/cocktail_spout`} />
        <meta name="keywords" content="spouted cocktail pouch, liquid spout packaging, ready to drink cocktail bag, flexible drink packaging, BRC certified beverage bag" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Spouted Pouch Cocktail & Liquid Packaging | Custom Drink Bags",
            "description": "An engineering analysis of flexible spouted pouches for liquid beverages, resolving issues with ethanol degradation, spout welding leaks, and drop-force ruptures.",
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
            "datePublished": "2025-05-28",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/cocktail_spout`
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
        title="Spouted Cocktail Pouches"
        description="Premium, unbreakable spouted packaging for ready-to-drink cocktails and beverages."
        heroImage={IMAGES.hero}
        heroImageAlt="Vibrant spouted stand-up pouch for mixed cocktails with palm tree illustrations under neon lights"
        heroTitle="Flexible Spouted Pouch Liquid Packaging"
        heroSubtitle="Alcohol Resistant Adhesives | Shock-Absorbing Nylon | Tamper-Evident Caps"
        introSummary="Ditch glass bottles and lower your shipping costs. Flexible spouted stand-up pouches are the premium, shatterproof solution for pre-mixed cocktails, fruit purees, and liquid beverages. Engineered with custom barrier linings to resist alcohol degradation and nylon buffers to prevent transit drops from bursting the side seams."
        aeoSummary="Cocktail spouted packaging utilizes multi-layer laminates (such as PET/BOPA/AL/PE or EVOH films) bound with chemical-resistant polyurethane adhesives. Automated corner welding fuses spouts under controlled heat cycles to block gas and prevent micro-leaks."
        eeatDetails="BRCGS Global Standard and ISO 9001 certified cleanroom manufacturing. Every production lot is subject to pneumatic pressure tests and 1.5-meter filled drop audits to guarantee transit reliability."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Beverage & Liquid Packaging"
      />
    </>
  )
}

export default CocktailSpout
