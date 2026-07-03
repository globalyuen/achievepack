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

const DdpPackaging: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  const IMAGES = {
    hero: '/imgs/topics/ddp-packaging/hero.jpg',
    process: '/imgs/topics/ddp-packaging/process.jpg',
    comparison: '/imgs/topics/ddp-packaging/comparison.jpg'
  }

  const sections = [
    {
      id: 'ddp-logistics-definition',
      title: 'What is Delivered Duty Paid (DDP) Packaging Shipping?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Delivered Duty Paid (DDP) is an international shipping agreement where the seller assumes all responsibility, risk, and costs associated with transporting goods until the buyer receives them at the destination port or warehouse. For custom packaging orders, DDP is the ultimate risk-mitigation term. It means Achieve Pack manages the entire supply chain—including export packaging, sea/air freight, customs clearance, import tariffs, and final inland transport—delivering the finished pouches straight to your loading dock with zero hidden fees.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Zero Customs Hassles</h4>
                <p className="text-sm text-neutral-600">
                  Customs procedures can be a labyrinth of paperwork and regulatory checkpoints. Under DDP, our licensed customs brokers handle all entry filings, HTS codes, and regulatory clearances, preventing costly legal delays.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Door-to-Door Transparency</h4>
                <p className="text-sm text-neutral-600">
                  By bundling shipping costs, customs clearance, and duty payments into a single upfront price, you eliminate unexpected terminal handling charges (THC) and demurrages at the destination port.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="Customs clearance declaration documents and UPS DDP shipping label on clipboard in cargo terminal" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Our logistics paperwork demonstrating certified DDP customs clearance and prepaid import taxes for direct door-to-door delivery"
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
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">// CHIEF PACKAGING ENGINEER LOGISTICS NOTEBOOK</p>
          <blockquote className="italic border-l-4 border-[#D4FF00] pl-4 text-sm md:text-base text-neutral-200">
            "In my 14 years of exporting flexible packaging globally, I have seen numerous brands get burned by EXW (Ex Works) or FOB (Free on Board) terms. They buy cheap bags, only to have them sit at port customs for weeks because of missing compliance documents, or arrive damaged because the freight forwarder stacked heavy machine parts on top of delicate plastic film rolls. 
            At Achieve Pack, we treat logistics as an extension of our engineering. We wrap pallets in heavy-duty moisture-barrier shrink wrap and secure them with edge guards to prevent damage. With DDP terms, we own the risk until it reaches your floor. If a shipping container gets delayed, or if there is a customs audit, it's our responsibility and cost to resolve, not yours. This is how we guarantee a reliable, stress-free B2B supply chain."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> ISTA-6 Certified Container Packaging Standards
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Common Import Logistics Pain Points & Our DDP Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Importing custom packaging shouldn't require you to become an international trade lawyer. Here are the five logistics challenges we solve for you:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Hidden Port Fees & Demurrage Charges
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Under FOB or CIF terms, buyers are shocked to find hundreds or thousands of dollars in unexpected destination port charges, document release fees, or container storage fees (demurrage) before their goods are released.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                100% inclusive DDP pricing. Every cost—including terminal handling, doc fees, customs clearance, and inland trucking—is fully prepaid by Achieve Pack. The price on your invoice is the absolute final price to your door.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Customs Delays and Paperwork Audit Failures
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Customs authorities routinely hold cargo due to incorrect Harmonized Tariff Schedule (HTS) codes, incomplete BRCGS certificates, or non-compliant country-of-origin markings on boxes.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Pre-vetted customs broker compliance. Our legal team audits all product declarations, ensuring correct HTS coding and food-contact FDA/EU compliance paperwork are submitted days before the vessel docks.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Cargo Condensation (Container Rain) & Water Damage
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                During 20+ day ocean transits, extreme temperature fluctuations inside shipping containers cause moisture to condense on the ceiling and rain down onto packaging pallets, ruining Kraft paper or causing box mold.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Anti-humidity vacuum barrier shrink wrapping. We wrap all export pallets in thick PE stretch film, insert moisture-absorbing silica gel desiccant packs, and use plastic pallet top covers to shield goods from water ingress.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Dispute Over Transit Damage Responsibility
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                If a pallet is damaged during ocean transit or at the port, shippers and local truckers often blame each other, leaving the buyer caught in the middle with damaged bags and no insurance payout.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Single-party accountability. Because Achieve Pack retains ownership and responsibility until signature delivery, any shipping damage is fully covered by our comprehensive transit insurance. We replace damaged items immediately.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Coordinating Inland Logistics & Warehousing
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Many businesses do not have a dedicated logistics coordinator to arrange LTL (Less-Than-Truckload) carriers, schedule delivery appointments, or handle lift-gate requirements at their warehouse.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Dedicated end-to-end local delivery coordination. Our freight partners schedule the exact delivery window with your warehouse manager, arranging lift-gate trucks or flatbeds to match your receiving capabilities.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'exw-vs-ddp-matrix',
      title: 'Comparing EXW (Ex Works) vs. DDP (Delivered Duty Paid)',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            The difference between EXW and DDP represents the complete transfer of risk, logistics workload, and financial surprise from the buyer to the expert supplier.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Side-by-side comparison of EXW showing a stormy port with customs delay symbols versus DDP showing smooth delivery to warehouse" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Logistics Comparison: EXW Buyer-risk shipping (left) vs. our premium all-inclusive DDP Seller-managed shipping (right)"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What does DDP stand for, and what are its benefits?",
      answer: "DDP stands for Delivered Duty Paid. Under these terms, Achieve Pack manages and pays for all shipping costs, import clearance filings, custom duties, taxes, and local inland delivery. You only need to unload the goods when they arrive at your facility."
    },
    {
      question: "Are there any hidden costs I will pay at the port?",
      answer: "No. Under DDP terms, all destination port fees, terminal handling charges (THC), and broker fees are fully prepaid by Achieve Pack. The final invoice price is the absolute total cost."
    },
    {
      question: "Who is responsible if the packaging gets wet or damaged during transit?",
      answer: "Achieve Pack is 100% responsible. We hold full transit insurance for all DDP shipments. If any goods are damaged, we replace them at no extra cost to you."
    },
    {
      question: "Do you offer air freight DDP options?",
      answer: "Yes. For time-critical launches, we offer express air freight DDP. The cargo will go through customs express and be delivered directly to your doorstep via carriers like UPS or DHL with all duties prepaid."
    }
  ]

  return (
    <>
      <Helmet>
        <title>DDP Packaging Shipping | All-Inclusive Logistics & Import Duties</title>
        <meta name="description" content="Secure your packaging supply chain with Delivered Duty Paid (DDP) shipping. We handle sea/air freight, customs clearance, import tariffs, and door-to-door delivery." />
        <link rel="canonical" href={`https://achievepack.com/topics/ddp-packaging`} />
        <meta name="keywords" content="DDP packaging, delivered duty paid, packaging import logistics, customs clearance bags, sea freight pouches, door to door packaging shipping" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "DDP Packaging Shipping | All-Inclusive Logistics & Import Duties",
            "description": "A comprehensive analysis of Delivered Duty Paid (DDP) Incoterms for custom packaging procurement, detailing risk mitigation, customs compliance, and cost predictability.",
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
            "datePublished": "2025-04-05",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/ddp-packaging`
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
        title="DDP Packaging Logistics"
        description="Prepaid customs duties and door-to-door shipping for custom printed flexible packaging."
        heroImage={IMAGES.hero}
        heroImageAlt="Pallets of packaged goods shrink-wrapped on a loading dock inside a clean warehouse"
        heroTitle="All-Inclusive DDP Packaging Logistics"
        heroSubtitle="Zero Customs Hassle | Fully Insured Door-to-Door Delivery | Zero Hidden Fees"
        introSummary="Take the complexity out of international supply chains. Our Delivered Duty Paid (DDP) logistics service assumes complete responsibility for your packaging order from factory floor to your warehouse, taking care of customs clearances, tariffs, and inland transport."
        aeoSummary="Delivered Duty Paid (DDP) is an Incoterm that shifts 100% of transport costs, import duties, customs clearance duties, and transit risks to the manufacturer. This guarantees buyers cost predictability and eliminates destination port cargo hold risks."
        eeatDetails="Global logistics network compliance with ISTA-6 vibration and drop testing. In-transit cargo moisture controls and fully tracked sea/air shipments."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Supply Chain & Logistics"
      />
    </>
  )
}

export default DdpPackaging
