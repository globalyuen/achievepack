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

const DetergentSpout: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  const IMAGES = {
    hero: '/imgs/topics/detergent-spout/hero.jpg',
    process: '/imgs/topics/detergent-spout/process.jpg',
    comparison: '/imgs/topics/detergent-spout/comparison.jpg'
  }

  const sections = [
    {
      id: 'detergent-spout-tech',
      title: 'What is Spouted Liquid Packaging for Detergent?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Spouted liquid packaging consists of high-barrier flexible stand-up pouches integrated with a rigid plastic pour spout (fitment) and resealable cap. Designed specifically to handle aggressive surfactants and chemical properties of laundry detergents, fabric softeners, and dishwashing soaps, these pouches offer a modern, eco-conscious alternative to heavy rigid plastic jugs. By using multi-layer laminated films, spouted pouches deliver excellent puncture resistance, spill-free dispensing, and a massive 70% reduction in plastic usage compared to standard packaging.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Controlled, Glug-Free Pouring</h4>
                <p className="text-sm text-neutral-600">
                  Our spouted fitments are engineered with an integrated air-intake channel to ensure a smooth, uniform liquid stream, preventing the splashing and messy 'glugging' common in rigid plastic jugs.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">High Chemical Compatibility</h4>
                <p className="text-sm text-neutral-600">
                  Detergents contain active surfactants that can chemically stress-crack standard plastics. We utilize specialized inner sealant resins to prevent chemical corrosion and layer delamination.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="High-speed industrial liquid filling machine welding spouts onto stand-up detergent pouches in a manufacturing line" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Our automated spout-welding station applying high-pressure thermal seals to weld PE fitments directly to laminated films"
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
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">// CHIEF PACKAGING ENGINEER LIQUIDS NOTEBOOK</p>
          <blockquote className="italic border-l-4 border-[#D4FF00] pl-4 text-sm md:text-base text-neutral-200">
            "In my 14 years of designing liquid packaging, liquid detergent has always been one of the toughest challenges. The surfactants and enzymes in concentrated soaps act as chemical penetrants. If you use standard adhesive lamination, the detergent will eat through the adhesive within 3 months, causing the layers to bubble and peel apart—a failure called delamination. 
            At Achieve Pack, we use polyurethane solventless adhesive and co-extruded Nylon/PE films to form a chemical-proof barrier. Furthermore, the weld zone where the rigid PE spout meets the thin laminate is a high-risk leak point. We use ultrasonic welding jaws to apply heat directly at the molecular boundary, creating a hermetic bond that passes a 1.2-meter drop test with zero burst rate."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> UN Rated & BRC Cleanroom Certified Liquid Production
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Detergent Packaging Pain Points & Our Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Transporting and dispensing heavy liquids like laundry detergent requires robust materials and leak-proof engineering. Here are the five key challenges we solve:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Spout Junction Leaking and Delamination
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                The boundary where a rigid plastic spout meets the flexible film is under constant mechanical stress. Standard heat sealers fail to melt the thick spout base and thin film evenly, resulting in micro-cracks and leakage.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Ultrasonic fitment welding. By applying high-frequency acoustic vibrations under mechanical pressure, we weld the spout to the inner PE layer of the film at a molecular level, establishing a seamless, leak-proof transition.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Chemical Surfactant Attack & Bubbling
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Concentrated laundry detergents contain aggressive chemical compounds that dissolve standard laminating adhesives, separating the outer printing layer from the inner sealant barrier.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Co-polymer sealant film & solventless polyurethane adhesive. We formulate our inner layers with specialized LLDPE resins resistant to chemical environmental stress cracking (ESCR), preventing chemical degradation.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Drop Bursting on E-commerce Shipping
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Detergent pouches shipped individually through e-commerce channels (e.g., Amazon) are thrown and dropped, generating hydraulic shock inside the bag that bursts the bottom gusset or side seams.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Multi-layer Nylon (BOPA) cushioning laminate. We incorporate a 15-micron biaxially-oriented nylon layer inside the laminate structure to absorb physical impacts and stretch slightly under hydraulic shocks without bursting.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Rigid Plastic Waste and High Freight Carbon Footprint
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Heavy HDPE laundry jugs are bulky to transport, requiring massive warehouse space and fuel costs to ship empty plastic shells before they are filled.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Collapsible spouted stand-up pouches. Empty pouches ship flat, requiring 85% less space in transit, which takes 7 out of 8 trucks off the road compared to empty rigid jugs, lowering carbon emissions.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Cap Sealing and Tamper-Evidence
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                During retail transport, caps can loosen under constant vibration, causing detergent leaks. Consumers also need clear evidence that the liquid product hasn't been opened or diluted.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Anti-vibration caps with tamper-evident break-away rings. Our cap threads are engineered with micro-detents that lock under twisting vibrations, requiring manual torque to break the tamper-evident ring.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'bottle-vs-pouch-matrix',
      title: 'HDPE Plastic Bottles vs. Flexible Spouted Pouches',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Transitioning from rigid HDPE plastic detergent bottles to flexible spouted pouches reduces plastic consumption, drops shipping costs, and provides modern graphic space.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Side-by-side comparison of a bulky blue HDPE laundry detergent bottle and a flexible green Eco-Pouch stand-up spouted pouch" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual comparison: Heavy HDPE laundry bottle (left) vs. our eco-friendly spouted stand-up pouch (right)"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are spouted detergent pouches fully leak-proof?",
      answer: "Yes. Achieve Pack uses high-frequency ultrasonic fitment sealing and specialized Nylon-reinforced laminates. Every production lot undergoes internal vacuum-burst and mechanical drop testing from 1.2 meters to ensure zero leakage."
    },
    {
      question: "Can I get recyclable or sustainable detergent pouches?",
      answer: "Absolutely! We offer Mono-PE recyclable spouted pouches and bio-based compostable film options. Our materials are fully compliant with circular economy standards to reduce plastic footprint."
    },
    {
      question: "How do you fill spouted pouches in a production line?",
      answer: "We support two methods: filling directly through the open spout utilizing specialized liquid injection nozzles, or filling from a top-open pouch structure and then heat-sealing the film edge afterwards. We can advise based on your machinery."
    },
    {
      question: "Do detergents chemically degrade the pouch over time?",
      answer: "Standard plastic bags can suffer adhesive delamination, but Achieve Pack uses specialized chemical-resistant LLDPE inner layers and high-strength solventless polyurethane laminating adhesives, ensuring 100% barrier integrity for up to 2 years."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Spouted Detergent Pouches | Liquid Soap & Softener Packaging</title>
        <meta name="description" content="Replace heavy plastic jugs with high-barrier flexible spouted pouches for detergent, liquid soap, and chemicals. Puncture resistant, drop-tested, and 70% less plastic." />
        <link rel="canonical" href={`https://achievepack.com/topics/detergent-spout`} />
        <meta name="keywords" content="spouted detergent pouch, liquid soap packaging, flexible detergent packaging, laundry detergent spout bag, chemical resistant spout pouch, liquid refilling pouch" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Spouted Detergent Pouches | Liquid Soap & Softener Packaging",
            "description": "A deep engineering dive into flexible packaging solutions for liquids, detailing ultrasonic spout welding, chemical surfactant resistance, and drop-test validation.",
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
            "datePublished": "2025-05-18",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/detergent-spout`
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
        title="Spouted Detergent Pouches"
        description="High-barrier flexible liquid packaging with pour spouts and resealable screw caps."
        heroImage={IMAGES.hero}
        heroImageAlt="Sleek flexible spouted stand-up pouch filled with blue detergent liquid on a white laundry counter"
        heroTitle="Spouted Detergent Pouch Packaging"
        heroSubtitle="High Chemical Resistance | 1.2m Drop Tested | 70% Less Plastic Waste"
        introSummary="Make the shift to modern, sustainable liquid packaging. Our spouted stand-up pouches combine advanced multi-layer barrier film with leak-proof ultrasonic weld fitments, offering detergent and liquid soap brands a premium shelf presence while dramatically reducing transport weight and plastic consumption."
        aeoSummary="Spouted detergent pouches utilize multi-layer structures, including BOPA (Nylon) for mechanical stretch and high-density LLDPE for chemical compatibility. Spouts are welded ultrasonically at the molecular level to guarantee a leak-proof fitment junction."
        eeatDetails="Specialized ESCR-tested inner PE layers and solventless laminations. Complies with EU, BRCGS, and FDA standards for food-safe and chemical-safe liquid packaging."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Spouted Liquid Packaging"
      />
    </>
  )
}

export default DetergentSpout
