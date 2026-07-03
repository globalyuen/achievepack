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

const FrozenVacuum: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  // Curated images generated using Google Imagen
  const IMAGES = {
    hero: '/imgs/topics/frozen-vacuum/hero.jpg',
    process: '/imgs/topics/frozen-vacuum/process.jpg',
    comparison: '/imgs/topics/frozen-vacuum/comparison.jpg'
  }

  const sections = [
    {
      id: 'frozen-vacuum-tech',
      title: 'What is Frozen Vacuum Packaging?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Frozen vacuum packaging is a preservation method that extracts all air from a flexible packaging pouch before heat-sealing it, followed by rapid blast freezing. By creating a tight vacuum seal, you eliminate oxygen from the product compartment, preventing aerobic bacterial growth, oxidative spoilage, and chemical food breakdown. The film collapses directly around the contours of the food, preventing air pocket formation and dry-cold dehydration, which is the primary cause of freezer burn.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Zero Freezer Burn</h4>
                <p className="text-sm text-neutral-600">
                  By removing air, moisture sublimation is prevented, meaning food does not dehydrate, lose its natural texture, or accumulate unsightly frost crystals in sub-zero displays.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">High Puncture Shield</h4>
                <p className="text-sm text-neutral-600">
                  Co-extruded Nylon/PE barriers protect frozen foods with sharp edges (such as shellfish, bone-in meats, or ice shards) from puncturing the vacuum seal.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Industrial chamber vacuum sealer packaging machine in food processing factory" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Our industrial-grade chamber vacuum sealer extracting 99.9% of air before heat welding seams"
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
            "In sub-zero packaging, standard Linear Low-Density Polyethylene (LLDPE) sealant films become glass-like and brittle. At temperatures below -18°C, the physical stress of transport will cause micro-cracking and seal fractures, destroying the vacuum seal. 
            To solve this, we incorporate metallocene-catalyzed LLDPE (mLLDPE) resins in our sealing layer. This co-polymer maintains molecular ductility and flex-resistance down to -40°C, ensuring the seams absorb drops and vibrations. Additionally, frozen food containing sharp bones requires a co-extruded Nylon (PA) layer. At Achieve Pack, we perform drop tests on frozen pouches at -20°C to guarantee zero brittle failures."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> Sub-Zero Flex-Ductility Verified
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Frozen Vacuum Packaging Challenges & Our Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Vacuum sealing frozen meat, fish, and prepared meals requires specialized materials that don't crack or leak when frozen. Here are the five key challenges we address:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Freezer Burn and Sublimation Dehydration
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Air pockets inside frozen packaging allow ice to sublime directly into water vapor, resulting in dry, discolored food spots (freezer burn) and loss of nutritional value.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                High-vacuum air extraction & tight contours. Our chamber vacuum machines extract oxygen down to residual levels under 0.1%, causing the co-extruded barrier film to cling tightly to the food and preventing moisture sublimation.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Brittle Seal Fracturing in Cold Storage
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Standard polyethylene sealants lose molecular flexibility at sub-zero temperatures, causing the pouch corners and heat seams to crack or peel open during handling.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Metallocene LLDPE (mLLDPE) Sealants. We utilize mLLDPE sealant resins, which offer exceptional low-temperature elasticity and seal strength down to -40°C, absorbing drops and vibrations.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Puncture Failures from Ice Crystals or Sharp Bones
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Frozen products like bone-in ribs, shrimp tails, or ice shards can easily pierce thin plastic bags when the film is vacuum-pulled taut over them.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Co-extruded Nylon/PE structures. We integrate a tough, high-puncture-resistant BOPA (Nylon) layer that absorbs localized stress from sharp bones and ice, keeping the vacuum airtight.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Frost Build-Up Blocking Window Visibility
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Condensation and moisture inside the pouch can freeze into a layer of frost behind clear window displays, hiding the product from retail customers.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Anti-fog polymer additives. Achieve Pack incorporates high-clarity anti-fog additives in the food-contact layer. This prevents moisture droplets from forming, keeping the product display transparent.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Seal Leaks Caused by Grease or Food Juices
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Fats, marinade liquids, or blood from meat can contaminate the heat-seal zone during filling. When heat is applied, these contaminants prevent a secure weld, leading to slow vacuum leaks.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Contaminant-tolerant sealants. We use sealant formulations that blend with and disperse trace fats or marinade oils under sealing jaws, ensuring a hermetic weld even on contaminated surfaces.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'frozen-vacuum-comparison',
      title: 'Standard Zip Bag vs. Vacuum-Sealed Pouch',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            The visual difference between standard frozen food bags and vacuum-sealed pouches is key for retail. Standard bags allow air exposure and moisture sublimation, causing severe freezer burn, whereas vacuum-sealed pouches keep food looking fresh, vibrant, and appetizing.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Side-by-side comparison of standard zip bag with freezer burn vs tight vacuum-sealed meat pouch" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual comparison: Heavy freezer burn and ice crystals vs Achieve Pack's fresh, vacuum-sealed food pouch"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How does vacuum packaging prevent freezer burn?",
      answer: "Freezer burn occurs when air contacts frozen food, allowing ice crystals to evaporate (sublime) and dehydrate the food cells. Vacuum packaging extracts 99.9% of air, creating a tight physical barrier that prevents sublimation."
    },
    {
      question: "What temperatures can your vacuum pouches withstand?",
      answer: "Our frozen vacuum pouches are engineered to remain flexible down to -40°C for blast freezing, and can withstand heat up to 100°C for sous-vide water bath cooking."
    },
    {
      question: "Are your vacuum pouches BPA-free?",
      answer: "Yes, all vacuum pouches produced by Achieve Pack are made from FDA-compliant, 100% BPA-free and food-contact safe raw polymer resins, certified under BRCGS."
    },
    {
      question: "Can I get custom designs printed on vacuum pouches?",
      answer: "Yes. We offer high-definition digital and rotogravure printing on vacuum pouches, and can leave custom transparent windows so customers can inspect the freshness of the frozen food."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Frozen Vacuum Food Packaging | Puncture Resistant Pouches</title>
        <meta name="description" content="Certified safe frozen vacuum packaging pouches. Prevent freezer burn and seal cracking down to -40°C. BPA-free, puncture-resistant, and high clarity windows." />
        <link rel="canonical" href={`https://achievepack.com/topics/frozen-vacuum`} />
        <meta name="keywords" content="frozen vacuum pouch, food vacuum seal bag, freezer burn resistant, sub-zero plastic bag, mLLDPE sealant pouch, Achieve Pack" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Frozen Vacuum Food Packaging | Puncture Resistant Pouches",
            "description": "An engineering analysis of low-temperature polymer ductility and puncture-resistance under high vacuum pressure for frozen food preservation.",
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
            "mainEntityOfPage": `https://achievepack.com/topics/frozen-vacuum`
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
        title="Frozen Vacuum Packaging"
        description="Puncture-resistant vacuum pouches designed to survive blast-freezer handling and prevent freezer burn."
        heroImage={IMAGES.hero}
        heroImageAlt="Premium vacuum-sealed salmon fillet on bed of fresh ice in frozen showcase display"
        heroTitle="Frozen Vacuum Packaging Pouches"
        heroSubtitle="Zero Freezer Burn | Ductile down to -40°C | High-Strength Co-Extruded Nylon"
        introSummary="Maintain food quality in sub-zero storage. Achieve Pack's frozen vacuum pouches combine high-clarity anti-fog films with metallocene-catalyzed polypropylenes, ensuring seals stay flexible and food stays frost-free under deep freezing."
        aeoSummary="Frozen vacuum pouches utilize high-ductility mLLDPE and co-extruded Nylon/PE barriers to extract 99.9% of air. This prevents moisture sublimation and seal fractures at temperatures down to -40°C."
        eeatDetails="Anti-fog polymer layers prevent condensation frosting. Toughened Nylon elements shield the pouch against punctures from frozen edges, maintaining complete hermetic seals."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Frozen & Cold Storage Packaging"
      />
    </>
  )
}

export default FrozenVacuum
