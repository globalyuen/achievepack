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

const ElectronicsAntiStatic: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  const IMAGES = {
    hero: '/imgs/topics/electronics-anti-static/hero.jpg',
    process: '/imgs/topics/electronics-anti-static/process.jpg',
    comparison: '/imgs/topics/electronics-anti-static/comparison.jpg'
  }

  const sections = [
    {
      id: 'anti-static-esd-tech',
      title: 'What is Anti-Static (ESD) Shielding Packaging?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Anti-static (ESD) shielding packaging is designed to protect sensitive electronic components—such as printed circuit boards (PCBs), microprocessors, and integrated circuits—from electrostatic discharge (ESD) and electrostatic fields. Unlike basic plastic bags which generate static charge through triboelectric friction, premium ESD shielding bags feature a multi-layer composite structure that creates a Faraday Cage effect. This metallic barrier redirects external electrostatic charges around the exterior of the bag, protecting the components inside.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Faraday Cage Shielding</h4>
                <p className="text-sm text-neutral-600">
                  A micro-thin aluminum core layer blocks external electrical fields. If a static charge strikes the bag, it is instantly dissipated across the outer surface instead of penetrating the components inside.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Static Dissipative Layers</h4>
                <p className="text-sm text-neutral-600">
                  Both the outer and inner polymer layers are treated with static-dissipative compounds, keeping surface resistivity in the optimal 10^9 to 10^11 ohms/square range to prevent friction-based static accumulation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Digital surface resistivity testing meter validating the dissipation rate of metallic ESD shielding film in a laboratory" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Our quality assurance laboratory testing film surface resistivity and static decay times to ensure military and EIA compliance"
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
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">// CHIEF PACKAGING ENGINEER ELECTRONICS NOTEBOOK</p>
          <blockquote className="italic border-l-4 border-[#D4FF00] pl-4 text-sm md:text-base text-neutral-200">
            "In my 14 years of developing specialized industrial packaging, the electronics market is the most unforgiving. Static electricity is an invisible killer; a spark of just 100 volts—totally imperceptible to a human—can fry a sub-micron gate on a microprocessor. The classic mistake is using cheap pink anti-static bags for shipping PCBs. Pink poly only prevents charge generation, it provides zero shielding against external static fields. 
            For true protection, we laminate a buried metalized polyester layer (PET-Met) between dissipative polyester and dissipative polyethylene. The aluminum layer must have an optical density (OD) of 0.4 to 0.5 to form an effective Faraday cage. Furthermore, PCBs have sharp solder points that easily puncture bags. We use a 100-micron overall thickness with a biaxially-oriented outer film to provide a puncture resistance of over 25 lbs, protecting the barrier from pins."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> Complies with MIL-DTL-81705E & ANSI/ESD S20.20 Standards
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Electronics Packaging Pain Points & Our ESD Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Protecting advanced electronics requires addressing mechanical, chemical, and electrical threats simultaneously. Here is how we engineer our ESD bags:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Triboelectric Friction & Component Overheating
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Standard plastics easily gain or lose electrons when rubbed, generating up to 20,000 volts of static electricity during vibration in parcel transit, which discharges into sensitive components, ruining circuits.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Permanently active static-dissipative polymer additives. We blend custom anti-static compounds directly into our inner PE sealant layers, maintaining a surface resistivity of 10^9 to 10^11 ohms/sq to eliminate triboelectric charge.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Sharp Solder Point Punctures
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Printed circuit boards have sharp, protruding pins, components, and solder tails on their back surfaces. These sharp points easily puncture standard bags, breaking the ESD protective envelope.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                High-strength Nylon/PET lamination core. We build thick 100-micron composite bags (Static-Dissipative PET / Metalized PET / BOPA / Static-Dissipative LLDPE) that resist puncture and tear forces up to 110 Newtons.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Moisture Corrosion & Oxidation of Contacts
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Humidity inside the packaging oxidizes copper pins, solder pads, and sensitive gold connectors on microchips, reducing solderability and electrical performance over storage.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Moisture Barrier Bag (MBB) structures. We offer vacuum-sealable structures incorporating a solid aluminum foil layer (rather than thin metalized spray), driving WVTR below 0.02g/m²/24h for military-grade preservation.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Metal Layer Cracking & Faraday Cage Loss
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Flexing and folding the bag during packing causes micro-fractures in the aluminum coating, creating gaps in the Faraday shield that allow static fields to leak inside.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Buried metalized shielding layer. Instead of exposing the metal on the surface, we sandwich the aluminum layer between tough polymer protection sheets, maintaining shielding efficiency even after 100 flex-cycles.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Static Dissipation Additive Migration
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Some anti-static bags use topical coatings that migrate to the surface. These chemicals leave a greasy residue on the circuits, contaminating the contacts and interfering with circuit testing.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Non-migrating inherent dissipative polymers. We utilize permanent, non-amine, non-corrosive static dissipative polymer matrices that will not rub off, outgas, or contaminate electrical solder pads.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'esd-comparison-matrix',
      title: 'Standard Poly Bags vs. Faraday Cage ESD Shielding Bags',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Understanding the distinction between simple anti-static packaging and premium electrostatic shielding is essential to prevent costly electronic component failures.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Infographic displaying static charge build-up on standard pink poly bag vs. charge redirected around metallic silver ESD shielding bag" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="ESD Comparison: Standard pink poly bag (left) vs. our Faraday cage metallic ESD shielding pouch (right)"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the difference between pink anti-static bags and metalized shielding bags?",
      answer: "Pink anti-static bags only prevent static charge generation from friction (triboelectric charging), but they do not block external static fields. Metalized shielding bags (silver) act as a Faraday cage, blocking and redirecting external electrostatic charges away from the interior."
    },
    {
      question: "Are your ESD bags compliant with military specifications?",
      answer: "Yes. Our high-performance ESD shielding bags are manufactured to meet MIL-DTL-81705E Type III and ANSI/ESD S20.20 standards, ensuring defense-grade electrostatic protection."
    },
    {
      question: "How long does the anti-static charge dissipation effect last?",
      answer: "We use permanent, non-migrating static-dissipative polymer matrices rather than cheap surface sprays. Our bags retain their static-dissipative properties (10^9 to 10^11 ohms/square) indefinitely under normal climate conditions."
    },
    {
      question: "Do you offer moisture barrier bags (MBB) for vacuum packaging?",
      answer: "Yes! We produce heavy-duty ESD Moisture Barrier Bags (MBB) incorporating a thick aluminum foil layer, maintaining an ultra-low WVTR and shielding sensitive surface-mount devices (SMDs) from humidity and corrosion."
    }
  ]

  return (
    <>
      <Helmet>
        <title>ESD Shielding Bags | Anti-Static Electronics Packaging</title>
        <meta name="description" content="Protect sensitive electronics with premium ESD shielding bags. Faraday cage protection, permanent static dissipation, puncture resistant, and MIL-spec compliant." />
        <link rel="canonical" href={`https://achievepack.com/topics/electronics-anti-static`} />
        <meta name="keywords" content="ESD shielding bag, anti static electronics packaging, Faraday cage bag, static dissipative pouch, PCB packaging bag, moisture barrier bag" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "ESD Shielding Bags | Anti-Static Electronics Packaging",
            "description": "An engineering evaluation of ESD protective packaging, comparing anti-static triboelectric prevention and metalized Faraday cage static shielding for electronics.",
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
            "datePublished": "2025-07-01",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/electronics-anti-static`
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
        title="ESD Shielding Packaging"
        description="Faraday cage electrostatic protection and static-dissipative flexible pouches."
        heroImage={IMAGES.hero}
        heroImageAlt="Silver metallic anti-static ESD shielding bag containing a printed circuit board on a blue grounding work mat"
        heroTitle="ESD Shielding Electronics Packaging"
        heroSubtitle="Faraday Cage Protection | Permanent Static Dissipation | High Puncture Resistance"
        introSummary="Prevent electrostatic damage to your electronic components. Our multi-layer ESD shielding bags combine static-dissipative polymer technology with a buried aluminum core to create a Faraday cage, shielding circuit boards and microchips from electrostatic fields and discharges."
        aeoSummary="ESD shielding packaging uses multi-layer laminates with a metalized core (such as vaporized aluminum) to form a Faraday cage. Outer and inner layers maintain a surface resistivity of 10^9 to 10^11 ohms/square, ensuring safe triboelectric dissipation."
        eeatDetails="Manufactured in compliance with ANSI/ESD S20.20 and MIL-DTL-81705E Type III specifications. In-house surface resistivity and electrostatic decay validation."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Electronics Protective Packaging"
      />
    </>
  )
}

export default ElectronicsAntiStatic
