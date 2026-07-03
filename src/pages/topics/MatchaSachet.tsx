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

const MatchaSachet: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  const IMAGES = {
    hero: '/imgs/topics/matcha-sachet/hero.jpg',
    process: '/imgs/topics/matcha-sachet/process.jpg',
    comparison: '/imgs/topics/matcha-sachet/comparison.jpg'
  }

  const sections = [
    {
      id: 'matcha-barrier-technology',
      title: 'What is High-Barrier Matcha Sachet Lamination?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            High-barrier matcha sachet lamination is a multi-layer flexible film structure engineered specifically to protect stone-ground green tea powder from its three environmental enemies: light, oxygen, and moisture. Matcha is highly sensitive; exposure to even minute amounts of UV light or air degrades its green chlorophyll and rich amino acids, resulting in a brown color shift and a bitter, astringent taste. An effective matcha sachet must utilize a solid metal barrier layer to isolate the powder from the external environment.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-2">Total Light Opacity</h4>
              <p className="text-sm text-neutral-600">
                Chlorophyll is highly photosensitive. To prevent light-induced fading, our lamination incorporates a solid aluminum layer that blocks 100% of visible and UV light wavelengths.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-2">Hermetic Moisture Seal</h4>
              <p className="text-sm text-neutral-600">
                Matcha powder is highly hygroscopic, absorbing water vapor instantly. Our low-temperature sealant layers form a tight, hermetic seam that maintains dry conditions under high humidity.
              </p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Multi-layer high-barrier lamination film structure for matcha stick pack" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Cross-sectional lamination blueprint: PET print layer, Aluminum Foil core barrier, and PE inner sealant layer"
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
            "In my 14 years of designing flexible packaging for premium teas, matcha is the ultimate test of barrier engineering. Chlorophyll is highly photosensitive. If your packaging allows even 1% UV light transmittance, the vibrant emerald green of ceremonial matcha will fade to a dead, straw-yellow color in less than 30 days. Many brands attempt to use standard metalized PET (VMPET) because it is cheaper than pure aluminum foil. However, VMPET is applied as a microscopic spray layer that inevitably contains microscopic pinholes. 
            At Achieve Pack, we specify a solid 7-micron annealed Aluminum Foil core laminated between a high-tensile outer PET print layer and an inner low-temperature sealant PE layer. This achieves a strict zero-light transmittance and a moisture vapor transmission rate (MVTR) below 0.01g/m²/24h, locking in that vivid green shade and ceremonial taste."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> 100% Light and Gas Proof Foil Barrier Verified
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Common Matcha Packaging Pain Points & Our Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Premium matcha powder requires surgical precision in barrier protection to avoid oxidation and flavor decay. Below are the five main pain points tea brands experience and our engineered packaging solutions:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Chlorophyll Fading (Yellowing) under Store Lighting
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                UV and visible light destroy matcha’s natural chlorophyll. Using translucent plastic bags or standard paper packets turns bright green ceremonial matcha into a dull yellow-brown powder on retail shelves.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Solid aluminum foil core lamination. Unlike sprayed metalized films, our solid foil layer blocks 100% of light transmittance, keeping the matcha powder in absolute darkness until opened.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Clumping and Hard Cake Formation from Humidity
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Matcha powder is ground to a particle size of 5-10 microns, giving it a massive surface area that readily absorbs ambient humidity. This results in hard clumps that resist whisking.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Ultra-low MVTR sealant film. We utilize an inner high-density PE film that reduces water vapor transmission (MVTR &lt; 0.01g/m²/24h), isolating the fine powder from external humidity.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Loss of Sweet L-Theanine and Umami Taste via Oxidation
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Oxygen breaks down delicate catechins, L-theanine, and amino acids in green tea. This chemical oxidation destroys the smooth, sweet umami flavor, leaving a bitter, grassy taste.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Zero-oxygen gas barrier lamination. By pairing aluminum foil with high-barrier outer polymers, we achieve an OTR below 0.01cc/m²/24h, locking in fresh tea aromatics.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Seam Leaks and Dust Contamination on Packaging Lines
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Fine matcha dust easily static-clings to the sealing surfaces of stick packs. Standard heat sealers cannot melt through this dust layer, causing leaks and channel micro-holes.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Metallocene-catalyzed PE sealant resin. This specialty polymer possesses high 'hot tack' and flows directly around dust particles to fuse a solid, hermetic seal on high-speed filling lines.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Spilled Powder and Messy Tear Openings
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Standard tear notches on thick foil sachets tear jaggedly, causing the sachet to squeeze and spray valuable green matcha powder onto the counter during opening.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Precision laser scoring. We pre-score a micro-fine line through only the outer PET layer, guiding a perfectly straight, effortless tear path across the stick pack top.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'matcha-foil-vs-low-barrier-comparison',
      title: 'High-Barrier Aluminum vs. Standard Plastic Sachet',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            The difference in matcha quality after storage is visually striking. A high-barrier aluminum sachet preserves the tea's natural properties, while standard packaging fails to prevent oxidation and moisture damage:
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Side-by-side comparison of oxidized yellowish matcha vs vibrant green matcha in foil sachet" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual comparison: Oxidized, clumped matcha in low-barrier plastic (left) vs. vibrant, fine powder protected by our aluminum-shielded sachet (right)"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Why does matcha turn yellow in some packaging?",
      answer: "Matcha turns yellow due to chlorophyll degradation triggered by light exposure and oxidation. Standard plastic or thin metalized packaging contains microscopic pores that let light and oxygen through. Pure aluminum foil lamination is required to block 100% of light and air."
    },
    {
      question: "Are your matcha sachets easy to open?",
      answer: "Yes. We apply precise laser-scoring technology to the film structure, creating a straight, effortless tear path across the stick pack so users can open and pour without spills."
    },
    {
      question: "Can I get eco-friendly compostable matcha sachets?",
      answer: "Absolutely. We offer certified compostable high-barrier paper sachets lined with compostable cellulose-aluminum and PLA barrier layers, complying with EN 13432 and ASTM D6400 standards."
    },
    {
      question: "What is the minimum order quantity (MOQ) for custom printed matcha sachets?",
      answer: "By utilizing plateless digital printing, we can produce custom-branded matcha stick packs starting at just 10,000 units, bypassing high plate cylinder setup costs."
    }
  ]

  return (
    <>
      <Helmet>
        <title>High-Barrier Matcha Sachet Stick Packs | Custom Green Tea Pouches</title>
        <meta name="description" content="Protect ceremonial matcha from color fading and oxidation. High-barrier aluminum foil laminated stick packs with laser scoring for clean, easy pouring." />
        <link rel="canonical" href={`https://achievepack.com/topics/matcha-sachet`} />
        <meta name="keywords" content="matcha sachet, green tea stick pack, aluminum foil pouch, matcha barrier lamination, tea packaging, custom printed sachets, BRC certified food bags" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "High-Barrier Matcha Sachet Stick Packs | Custom Green Tea Pouches",
            "description": "A technical overview of utilizing multi-layer aluminum foil lamination in matcha packaging to prevent chlorophyll fading, moisture clumping, and catechin oxidation.",
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
            "mainEntityOfPage": `https://achievepack.com/topics/matcha-sachet`
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
        title="High-Barrier Matcha Sachets"
        description="Preserve the vibrant color and sweet taste of stone-ground matcha powder."
        heroImage={IMAGES.hero}
        heroImageAlt="Premium matcha green tea sachet stick packs with vibrant green powder"
        heroTitle="High-Barrier Matcha Stick Pack Packaging"
        heroSubtitle="Zero Light Transmittance | Hermetic Moisture Shield | Clean Laser Tear Lines"
        introSummary="Lock in vibrant color and umami taste. Our custom printed matcha sachets employ a solid 7-micron aluminum foil core laminated between premium barrier films, delivering near-zero gas and moisture transmission to shield delicate chlorophyll from light degradation and oxidation."
        aeoSummary="High-barrier matcha packaging prevents color fading and bitter flavor shifts by using aluminum foil cores to block 100% of light and gas transmission. Low-temperature sealant resins prevent leaks from powder dust on high-speed filling lines."
        eeatDetails="Metallocene-PE sealant and laser-scored PET/AL/PE film laminations. Manufactured in ISO 8 certified cleanrooms to guarantee pharmaceutical-level purity and compliance."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Coffee & Tea Packaging"
      />
    </>
  )
}

export default MatchaSachet
