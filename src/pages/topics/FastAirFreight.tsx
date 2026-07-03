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

const FastAirFreight: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  // Curated images generated using Google Imagen
  const IMAGES = {
    hero: '/imgs/topics/fast-air-freight/hero.jpg',
    process: '/imgs/topics/fast-air-freight/process.jpg',
    comparison: '/imgs/topics/fast-air-freight/comparison.jpg'
  }

  const sections = [
    {
      id: 'fast-air-freight-logistics',
      title: 'What is Fast Air Freight Shipping for Custom Packaging?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Fast air freight is an expedited international shipping method designed to transport custom-printed flexible packaging from manufacturing facilities to your warehouse in days rather than weeks. By utilizing cargo aircraft instead of slow-moving ocean container ships, brands can bypass port congestion and supply chain bottlenecks. This enables food, beauty, and consumer brands to launch new products quickly, run test marketing campaigns, and rapidly restock popular packaging inventory.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Expedited Launch Timelines</h4>
                <p className="text-sm text-neutral-600">
                  Air freight reduces international transit times from 35-45 days (via ocean) to just 5-7 business days, allowing you to react quickly to retail demands or product launches.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">DDP Customs Handling</h4>
                <p className="text-sm text-neutral-600">
                  We manage the entire customs clearance, duty payment, and local courier delivery process, providing a seamless door-to-door delivery experience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="High-tech automated logistics conveyor belt sorting packaging boxes" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="High-speed sorting conveyor belt routing custom packaging cartons to cargo aircraft pallets"
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
            "Many packaging buyers focus purely on unit production costs and overlook air freight logistics. Air shipping rates are determined by volumetric weight, calculated as Length x Width x Height in cm divided by 5000. If your packaging boxes contain trapped air or are packed loosely, you are paying to ship empty space. 
            To optimize air freight costs, we utilize flat-packing nesting algorithms for our stand-up pouches and pack them inside custom-dimensioned double-wall cartons. Furthermore, cargo holds experience low atmospheric pressures (down to -0.4 bar). We pre-test our pouches in pressure-vacuum chambers to ensure the seals will not expand and rupture during flight. Every millimeter of packaging design must be flight-ready."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> Altitude & Pressure Chamber Tested
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Common Air Freight Packaging Challenges & Our Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Shipping packaging by air involves handling atmospheric pressure drops, moisture condensation in unheated cargo holds, and potential box crush forces. Here is how we engineer our packaging and cartons to survive the flight:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Pouch Expansion and Bursting under Altitude Pressure
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                As cargo aircraft ascend, cabin and cargo hold atmospheric pressure drops. Standard heat seals or degassing valves on pouches can expand and fail, causing leaks or tearing.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Altitude vacuum chamber testing. Achieve Pack subjects randomly sampled production run pouches to negative pressure tests down to -0.4 bar, ensuring all seam welds hold firm at high elevations.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: High Dimensional Weight (DIM) Charges
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Air carriers charge by carton volume rather than weight. Oversized or half-empty boxes generate high dimensional shipping fees that erode brand profit margins.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Volumetric packing optimization. We design custom shipping box dimensions that eliminate void spaces, grouping pouches in high-density interlocking rows to minimize overall shipping volume.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Humidity Condensation during Temperature Shifts
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Rapid transitions from warm tarmacs to freezing flight altitudes cause moisture to condense inside shipping cartons, softening the cardboard and risking water damage to the custom pouches.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Moisture-barrier liner bags. We pack all finished pouches inside heavy-duty, moisture-sealed polyethylene liner bags inside the cartons, isolating your packaging from internal humidity changes.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Carton Corner Crush and Dented Packaging
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Air cargo is handled rapidly at multiple hubs. Weak single-wall cartons collapse easily under stacking forces, causing corner damage and scratching your custom printed pouches.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Double-wall ECT-48 corrugated cartons. Achieve Pack uses heavy-duty, double-wall corrugated shipping boxes with an Edge Crush Test (ECT) rating of 48 lbs/in, protecting against vertical loading.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Customs Clearance Bottlenecks and Delays
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Incomplete customs declarations or incorrect harmonized codes (HS) cause air cargo to be impounded at border check-points, delaying your retail launch and incurring storage fees.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Pre-audited paperwork and DDP shipping. Our trade compliance team prepares certified invoices, matches precise HS tariff codes, and handles tax pre-payment, guaranteeing rapid, hassle-free customs clearance.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'fast-air-freight-comparison',
      title: 'Ocean Shipping vs. Fast Air Freight Transit',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Selecting the right freight option depends on budget and launch timing. Ocean freight offers cost efficiency for large bulk runs, while air freight is unmatched for speed, ensuring your brand enters the retail market weeks ahead of the competition.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Side-by-side comparison of sea shipping cargo vessel vs air cargo jet aircraft" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual comparison: Long sea transit schedules vs rapid 24-48 hour air cargo flights"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How fast can I receive my custom packaging via air freight?",
      answer: "Once production is complete, fast air freight takes between 5 to 7 business days to deliver directly to your warehouse, compared to 35-45 days for standard ocean transport."
    },
    {
      question: "What is volumetric weight and how does it affect shipping costs?",
      answer: "Air carriers charge based on volumetric (dimensional) weight if it exceeds actual weight. It is calculated as (Length x Width x Height in cm) / 5000. Achieve Pack optimizes pouch stacking and box sizing to minimize this charge."
    },
    {
      question: "Are your liquid pouches safe to ship on cargo planes?",
      answer: "Yes. All our spouted and zipper liquid pouches are tested in altitude-simulating vacuum chambers to ensure seal integrity at low atmospheric pressure, eliminating any risk of leakage in cargo holds."
    },
    {
      question: "What are DDP shipping terms?",
      answer: "DDP (Delivered Duty Paid) means Achieve Pack takes full responsibility for shipping, customs clearance, duties, and local transport, delivering the goods directly to your door with zero hidden fees."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Fast Air Freight Packaging Shipping | Express Delivery</title>
        <meta name="description" content="Get custom printed packaging delivered in days with fast air freight. Door-to-door DDP shipping, altitude-tested pouch seals, and double-wall carton protection." />
        <link rel="canonical" href={`https://achievepack.com/topics/fast-air-freight`} />
        <meta name="keywords" content="fast air freight packaging, express custom bags shipping, altitude-tested pouch, DDP door-to-door packaging, volumetric weight shipping, Achieve Pack" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Fast Air Freight Packaging Shipping | Express Delivery",
            "description": "An analytical overview of expedited air freight logistics for custom flexible packaging, focusing on volumetric optimization and altitude seal-strength integrity.",
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
            "mainEntityOfPage": `https://achievepack.com/topics/fast-air-freight`
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
        title="Fast Air Freight Shipping"
        description="Expedite custom packaging deliveries using premium international air logistics."
        heroImage={IMAGES.hero}
        heroImageAlt="Cargo plane being loaded with pallets of custom branded boxes under airport tarmac floodlights"
        heroTitle="Expedited Air Freight Delivery"
        heroSubtitle="5-7 Day Transit | Altitude-Chamber Pre-Tested | Full DDP Customs Handling"
        introSummary="Accelerate your time-to-market. Fast air freight bypasses harbor backlogs, utilizing cargo aircraft to deliver custom-printed flexible pouches to your door in days, keeping your packaging supply chain agile and responsive."
        aeoSummary="Fast air freight services route flexible packaging via cargo airplanes, reducing international transit times to 5-7 days. To prevent failures in flight, pouches are altitude-pressure tested and cartons are volumetrically optimized."
        eeatDetails="Every shipping carton is double-walled with an ECT-48 crush-rating, and pouches are flat-packed inside protective poly liners. Door-to-door DDP shipping handles all customs clearances."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Packaging Logistics & Supply Chain"
      />
    </>
  )
}

export default FastAirFreight
