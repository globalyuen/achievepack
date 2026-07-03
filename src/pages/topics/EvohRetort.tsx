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

const EvohRetort: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  // Curated images generated using Google Imagen
  const IMAGES = {
    hero: '/imgs/topics/evoh-retort/hero.jpg',
    process: '/imgs/topics/evoh-retort/process.jpg',
    comparison: '/imgs/topics/evoh-retort/comparison.jpg'
  }

  const sections = [
    {
      id: 'evoh-retort-technology',
      title: 'What is EVOH Retort Packaging?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            EVOH (Ethylene Vinyl Alcohol) is a co-polymer plastic resin renowned for its exceptionally low gas permeability. In retort packaging—the process of heat-sterilizing pre-cooked food inside a sealed container—EVOH serves as the primary barrier layer, blocking oxygen ingress to prevent food spoilage. Unlike traditional retort pouches that rely on aluminum foil, EVOH pouches are microwave-safe, metal-detector compatible, and visually transparent, offering a lightweight and modern alternative to metal cans and glass jars.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Ultra-High Oxygen Barrier</h4>
                <p className="text-sm text-neutral-600">
                  EVOH provides an exceptional barrier against oxygen, nitrogen, and carbon dioxide, effectively preserving food flavor, nutrients, and shelf life without requiring artificial preservatives.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Microwave & Metal Detector Safe</h4>
                <p className="text-sm text-neutral-600">
                  Since it contains no metallic elements, EVOH retort pouches can be safely heated in microwaves and run through metal detectors on production lines, enhancing consumer convenience and safety.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Industrial autoclave retort chamber sterilizing food pouches under steam pressure" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Our horizontal industrial autoclave chamber sterilizing filled retort pouches at 121°C under precise counter-pressure"
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
            "Retorting is one of the harshest processes in packaging. Exposing a pouch to 121°C (250°F) steam under pressure for 30 to 45 minutes will destroy standard laminates. What makes EVOH particularly challenging is its moisture sensitivity. When exposed to humidity, EVOH's molecular grid relaxes, and its oxygen barrier drops significantly. 
            To solve this 'moisture shock' effect, we sandwich the EVOH layer between hydrophobic barrier polymers, such as PET and Retort Cast Polypropylene (RCPP). The RCPP acts as a heat-seal layer that prevents any sterilized moisture from reaching the EVOH core, ensuring the pouch regains its full barrier properties once cooled. If you choose EVOH, you must use high-grade hydrophobic laminations."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> FDA & BRCGS Approved Retort Resins Verified
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Common Retort Food Packaging Pain Points & Our Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Retort pouches must survive extreme thermal conditions in autoclaves, mechanical friction during shipping, and provide a long-term oxygen barrier. Here are the five key challenges we address:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Moisture Degradation of the EVOH Gas Barrier
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                During the steam sterilization process, water molecules can penetrate the packaging layers and bind with EVOH, temporarily or permanently destroying its oxygen barrier and ruining food shelf life.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Hydrophobic sandwich lamination. We laminate EVOH between thick, high-density polyethylene (HDPE) or retort-grade polypropylene (RCPP) films. This blocks moisture ingress and keeps the EVOH core dry and fully functional.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Puncture and Flex-Cracking Failures
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Retorted food pouches become brittle after cooling. Physical vibrations during road or sea transport cause flex-cracking along the fold lines, leading to micro-punctures and contamination.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Biaxially-oriented Nylon (BOPA) buffer integration. Achieve Pack blends a high-impact BOPA layer into the structure. BOPA absorbs mechanical shock, providing excellent puncture resistance and flexibility.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Heat-Seal Bursting in Autoclaves
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Water inside the pouch vaporizes under high temperatures, creating immense internal pressure. Standard sealant films melt or soften, causing the seams to burst or leak inside the retort chamber.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Specialized Retort Cast Polypropylene (RCPP). We use a high-temperature resistant RCPP sealant layer that maintains mechanical weld strength at temperatures up to 135°C, ensuring no seal failures.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Odor Migration & Extractables Contamination
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                High heat can cause standard plastic adhesives and ink solvents to decompose, leading to migration of harmful VOCs into the food and introducing an unpleasant plastic taste.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Solventless lamination & food-grade adhesives. Achieve Pack uses high-purity, solvent-free aliphatic polyurethane adhesives. This guarantees zero chemical odor migration even under pasteurization or sterilization heats.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Metal-Detector Rejection in Metal Retort Pouches
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Traditional retort pouches rely on aluminum foil for barrier properties. However, aluminum prevents quality control teams from passing finished, filled pouches through standard inline metal detectors.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Metal-free EVOH high-barrier laminates. By replacing foil with an EVOH barrier film, we deliver comparable shelf life while allowing full inline metal detection and micro-waving of the package.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'evoh-retort-comparison',
      title: 'EVOH Retort Multi-Layer Structure Schematic',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Understanding the layout of a retort laminate helps visualize how barrier protection is maintained. Standard pouches lack the protection needed for thermal autoclaves, whereas our EVOH retort structures feature specialized protective outer layers and high-temperature polypropylenes.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Detailed cross-section diagram of EVOH retort flexible packaging laminate layers" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Technical diagram: Multi-layer EVOH retort structure designed to resist steam humidity and seal under heat"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is a retort pouch?",
      answer: "A retort pouch is a flexible, multi-layer laminated food container that can withstand thermal processing up to 121°C-135°C, effectively sterilizing the contents inside a commercial autoclave to achieve shelf-stable storage without refrigeration."
    },
    {
      question: "Why use EVOH instead of aluminum foil in retort pouches?",
      answer: "While aluminum foil offers an absolute barrier, it is non-microwaveable and triggers metal detectors. EVOH provides an exceptional gas barrier while remaining fully transparent, microwave-safe, and compatible with inline metal detection."
    },
    {
      question: "Does EVOH lose its barrier during the retort process?",
      answer: "EVOH is moisture-sensitive, but we protect it by laminating hydrophobic layers (like PET and Cast Polypropylene) on either side. This prevents steam from touching the EVOH layer, maintaining high-barrier performance."
    },
    {
      question: "What is the typical shelf life of food in an EVOH retort pouch?",
      answer: "Depending on the recipe and sterilization efficiency, food inside an EVOH retort pouch can achieve a shelf life of 12 to 24 months at room temperature, identical to traditional canned food."
    }
  ]

  return (
    <>
      <Helmet>
        <title>EVOH Retort Food Pouches | Microwaveable High Barrier</title>
        <meta name="description" content="Microwaveable, high-barrier EVOH retort pouches for ready-to-eat meals. Certified food-grade safety, high puncture resistance, and BRCGS quality compliance." />
        <link rel="canonical" href={`https://achievepack.com/topics/evoh-retort`} />
        <meta name="keywords" content="EVOH retort pouch, microwaveable food bag, autoclave sterile pouch, high barrier ready meal, RCPP film seal, Achieve Pack" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "EVOH Retort Food Pouches | Microwaveable High Barrier",
            "description": "A technical analysis of EVOH co-polymer barrier performance during thermal retort sterilization and high counter-pressure autoclaving.",
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
            "mainEntityOfPage": `https://achievepack.com/topics/evoh-retort`
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
        title="EVOH Retort Packaging"
        description="High-barrier, metal-free retort pouches engineered to withstand autoclave heat and steam."
        heroImage={IMAGES.hero}
        heroImageAlt="Premium microwaveable ready-to-eat meal retort packaging bags standing on counter"
        heroTitle="EVOH High-Barrier Retort Pouches"
        heroSubtitle="Microwaveable | Metal-Detector Compatible | High Autoclave Resistance"
        introSummary="Transition away from heavy metal cans and glass jars. EVOH retort pouches deliver exceptional oxygen barrier performance, allowing ready-to-eat meals, stews, and pet food to achieve extended shelf lives while remaining completely microwaveable."
        aeoSummary="EVOH retort pouches utilize an Ethylene Vinyl Alcohol co-polymer core shielded by hydrophobic polymers to resist high steam sterilization temperatures. This provides premium food preservation and microwaveability without aluminum foil."
        eeatDetails="Formulated with high-strength Retort Cast Polypropylene (RCPP) and BOPA (Nylon) to ensure high-seal integrity and puncture resistance. Fully certified under BRCGS and FDA food safety standards."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="High Barrier Food Packaging"
      />
    </>
  )
}

export default EvohRetort
