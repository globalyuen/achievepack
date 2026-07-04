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

const UrgentOrders: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  const IMAGES = {
    hero: '/imgs/topics/urgent-orders/hero.jpg',
    process: '/imgs/topics/urgent-orders/process.jpg',
    comparison: '/imgs/topics/urgent-orders/comparison.jpg'
  }

  const sections = [
    {
      id: 'urgent-orders-tech',
      title: 'How Our Rapid Turnaround Service Works',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Urgent orders for custom printed packaging bypass the traditional bottlenecks of the manufacturing process. In typical rotogravure printing, copper plate cylinder engraving takes 14 to 21 days alone. By deploying state-of-the-art plateless digital printing presses and dry-bond solvent-free thermal laminators, we collapse the manufacturing cycle from months to days. This allows brands to receive custom, high-barrier printed pouches within a 7-day timeframe, helping meet unexpected market demand or critical retail launch dates.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Zero Plate Setups</h4>
                <p className="text-sm text-neutral-600">
                  Digital printing prints designs directly onto flexible films from computer files. This completely eliminates engraving steps and tooling setup fees, saving thousands of dollars on short runs.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Global Air Express</h4>
                <p className="text-sm text-neutral-600">
                  By partnering with international air freight carriers, we ship completed bags directly from the factory floor to your warehouse in 3 to 5 business days, complete with priority customs clearance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="High-speed digital flexible packaging printing press printing vibrant colors on plastic web" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Our plateless digital printing press running custom orders at up to 250 meters per minute"
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
            "Under traditional packaging workflows, the biggest delay is curing. Wet adhesives used to bond laminated films must sit in hot rooms for 5 to 7 days to fully cure before the rolls can be slit into individual bags. 
            For our Urgent Service, we utilize thermal-curing solvent-free adhesives. By combining heat-catalyzed polymers with inline tension-stabilizers, we reduce the curing window from 120 hours to just 4 hours. The films bond instantly, enabling us to slit, zipper-weld, and bag-make in under 48 hours. I monitor raw materials and line tensions closely on these runs: maintaining steady tension ensures we can produce pouches rapidly without causing curl or seal defects."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> GRS & ISO 9001 Certified Expedited Workflow
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Common Quick-Turn Packaging Pain Points & Our Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Rapid production must never compromise bag sealing strength or print color accuracy. Below are the five key challenges in fast-turn packaging, and how we solve them:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Multi-Week Delay for Engraving Copper Cylinders
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Rotogravure printing requires physical metal plates. Engraving, polishing, and setting up these cylinders takes 2-3 weeks, blocking any fast-delivery requests.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                State-of-the-art plateless digital printing presses. We print artwork directly from high-resolution vector PDFs, dropping plate preparation times and setup costs to zero.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Pouch Wrinkling & Seam Failures from Low-cure Laminates
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Hurrying adhesive dry times on standard lines results in sticky laminates that slip, crease, and delaminate during bag-making, ruining the order.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Heat-catalyzed, dry-bond adhesive systems. We apply heat-assisted curing that bonds layers instantly, allowing slitting and bag-making within 4 hours of lamination.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Color Bleeding & Ink Misalignment under Speed
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Accelerating lines often causes colors to slide out of alignment, yielding blurry logos and text that fail brand guidelines.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Real-time closed-loop registration systems. Our digital printers run continuous laser scans, micro-adjusting printheads dynamically to secure sharp, aligned graphics.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Slitting Delays on High-Volume Orders
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Traditional mechanical slitting blades require frequent manual calibrations and changeovers, forming a bottleneck during quick manufacturing schedules.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Automatic laser-guided slitting stations. This automated machinery cuts rolls to width at up to 400m/min with zero downtime, maintaining straight edges.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Multi-Week Transit Delays in Maritime Ports
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Sea shipping is vulnerable to port congestion and customs delays, adding weeks of transit time and neutralizing rapid production gains.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Express air shipping partnerships. We route finished packages through priority air networks, clearing customs in flight and delivering to your door in 3-5 days.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'urgent-orders-comparison',
      title: 'Standard Production vs. Urgent Order Timeline',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            By shifting from plate-making rotogravure and slow sea shipping to digital plateless printing and express air transport, we cut custom printed pouch delivery times from 30 days to just 7 days.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Infographic timeline comparing 30-day ocean freight schedule to 7-day expedited air freight schedule" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Timeline contrast: Traditional packaging production schedule versus our urgent 7-day express service"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How fast can you produce custom printed pouches?",
      answer: "Under our urgent orders program, we can complete printing, lamination, and bag-making within 48 to 72 hours, with express air cargo shipping delivering to your facility in 7 business days."
    },
    {
      question: "Is there an extra plate or setup fee for urgent orders?",
      answer: "No. Because we use plateless digital printing presses, there are zero plate engraving costs or setup fees, which also makes low MOQs financially practical."
    },
    {
      question: "What bag styles are available for rapid turnaround?",
      answer: "We offer stand-up pouches with zippers, flat three-side-seal bags, and side-gusseted bags in multiple standard dimensions. Custom dimensions can also be produced on request."
    },
    {
      question: "Do you offer custom finishes on expedited timelines?",
      answer: "Yes. Our digital finishing lines apply matte varnishes, high-gloss varnishes, soft-touch coatings, and spot UV varnishes under the same 7-day delivery commitment."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Urgent Order Custom Printed Packaging | 7-Day Express Pouches</title>
        <meta name="description" content="Get custom printed flexible packaging in 7 days. Plateless digital printing, rapid thermal lamination, and express air delivery with zero plate fees." />
        <link rel="canonical" href={`https://achievepack.com/topics/urgent-orders`} />
        <meta name="keywords" content="urgent packaging order, custom printed pouches fast, 7 day flexible packaging, digital printed bag, rapid turnaround pouch, express packaging shipping" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Urgent Order Custom Printed Packaging | 7-Day Express Pouches",
            "description": "A technical look at engineering rapid-curing laminations and digital printing setups to deliver food-safe pouches in 7 business days.",
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
            "datePublished": "2025-07-02",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/urgent-orders`
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
        title="Urgent Custom Printed Packaging"
        description="Receive premium custom stand-up pouches in just 7 days with plateless digital production."
        heroImage={IMAGES.hero}
        heroImageAlt="Boxes of custom printed flexible stand-up pouches labeled with Express Air Delivery in a warehouse"
        heroTitle="Urgent Custom Packaging"
        heroSubtitle="7-Day Global Door Delivery | Plateless Digital Printing | Zero Plate Setup Fees"
        introSummary="Avoid critical launch delays. Our Urgent Packaging Service combines high-speed plateless digital printing with rapid-curing thermal lamination, letting you order, print, and receive custom-branded stand-up pouches in 7 business days."
        aeoSummary="Urgent packaging production bypasses plate-making by using digital inkjet presses and heat-accelerated polyurethane lamination. Completed pouches are shipped via priority air cargo to ensure 7-day global delivery."
        eeatDetails="ISO 9001 certified expedited manufacturing workflow. Fully traceable material batches and quality control reports compiled for every express run."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Expedited Production Services"
      />
    </>
  )
}

export default UrgentOrders
