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

const PetFoodQuadSeal: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouch = getDomain() === 'pouch'

  // Curated images generated using Google Imagen
  const IMAGES = {
    hero: '/imgs/topics/pet-food-quad-seal/hero.jpg',
    process: '/imgs/topics/pet-food-quad-seal/process.jpg',
    comparison: '/imgs/topics/pet-food-quad-seal/comparison.jpg'
  }

  const sections = [
    {
      id: 'quad-seal-tech',
      title: 'What is a Quad Seal Bag for Pet Food?',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            A quad seal bag (also known as a four-corner seal bag) is a side-gusset pouch featuring four vertical corner welds. By sealing all four corners of the bag, the packaging maintains a rigid, box-like structure that stands perfectly upright on retail shelves, providing four flat branding panels for maximum graphics display.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Structural Stability</h4>
                <p className="text-sm text-neutral-600">
                  The four vertical seals act as structural pillars. This prevents the bag from bulging or slumping under the weight of heavy dry kibble, keeping the product looking neat on shelves.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Four Branding Panels</h4>
                <p className="text-sm text-neutral-600">
                  With no back seam running down the middle, both the front and back of the pouch are completely flat and seamless, allowing for uninterrupted high-definition graphics and branding.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-6">
            <ClickableImage 
              src={IMAGES.process} 
              alt="High-speed vertical form fill seal packaging machine producing quad seal bags" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Our state-of-the-art packaging line sealing the four corners of gusseted pouches for heavy pet food runs"
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
            "Dry pet food is heavy (typically 2kg to 15kg) and contains high levels of animal fats and oils. Standard packaging often suffers from bottom-seal failures when dropped and ugly grease stains that seep through the film. 
            In my 14 years of designing pet food packaging, the quad-seal shape is our go-to solution for heavier weights. The 5mm corner weld lines distribute vertical and side forces, preventing the bag from bulging or splitting. To block grease, we co-extrude a high-barrier laminated structure using BOPET, Aluminum foil, and a modified metallocene PE sealant layer. The AL layer provides 100% barrier protection against light and oxygen, preventing fat oxidation, while the metallocene PE ensures hermetic seals that never seep oil."
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> Heavy-Duty Drop Test & Grease Migration Verified
          </p>
        </div>
      )
    },
    {
      id: 'five-pain-points',
      title: '5 Pet Food Packaging Pain Points & Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Designing large, heavy-duty pet food packaging bags requires addressing issues related to seal strength, fat migration, shelf stability, and easy opening:
          </p>
          
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                Pain Point: Pouch Bursting on Drop Impacts
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Heavy bags of dog or cat kibble frequently burst open along the bottom or back seams when dropped from retail shelves or during warehouse handling.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Reinforced quad-seal corner welds. Sealing all four vertical corners distributes internal pressure during impact, preventing the seals from bursting.
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                Pain Point: Fat Migration & Exterior Grease Stains
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Natural oils and fats in dry kibble can seep through standard plastics, causing greasy dark stains to appear on the outside of the bag.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Modified metallocene-catalyzed PE inner sealant. This material is highly resistant to grease and oils, creating a barrier that prevents fat migration.
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                Pain Point: Loss of Kibble Freshness and Rancid Smell
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Exposure to oxygen and moisture causes pet food fats to oxidize, resulting in stale kibble and an unpleasant rancid odor when the bag is opened.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Multi-layer lamination incorporating Aluminum foil or EVOH. This achieves an oxygen and moisture transmission rate close to zero, locking in fresh taste for up to 24 months.
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                Pain Point: Bags Bulging and Falling Over
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Standard pillow or back-seam bags bulge in the middle and fall over easily, cluttering retail displays and obscuring brand logos.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Gusseted box-shape quad seal design. The flat bottom and four vertical corner seals keep the bag standing perfectly upright and square.
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                Pain Point: Inefficient Closures on Large Bags
              </h4>
              <p className="text-sm text-neutral-600 mb-3">
                Consumers struggle to open and re-close large pet food bags, leading to food exposure to air, moisture, and pests like bugs or mice.
              </p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                Pocket zippers or slider zippers. These heavy-duty resealable zippers allow consumers to easily open and seal the bag, keeping the food fresh and secure.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pillow-vs-quad-comparison',
      title: 'Comparing Pillow Bags and Quad Seal Bags',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            Standard back-seal pillow bags bulge under weight and slide off retail shelves. In contrast, the quad seal design features four reinforced vertical edges that keep the bag perfectly square and upright, maximizing shelf visibility.
          </p>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Side-by-side comparison showing a bulging pillow coffee bag on the left and a rigid quad seal stand-up bag on the right" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual comparison: Bulging back-seal pillow bag (left) versus stable, square-sided quad seal bag (right)"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is a quad seal bag?",
      answer: "A quad seal bag is a side-gusseted pouch with all four vertical corners sealed. This structure gives the bag a clean, box-like shape that stands upright and provides four flat panels for branding."
    },
    {
      question: "Are quad seal bags suitable for wet pet food?",
      answer: "No. Quad seal bags are designed for dry pet food, treats, and kibble. Wet pet food requires retort pouches or cans that can withstand high-temperature sterilization processes."
    },
    {
      question: "Can you add carrying handles to quad seal bags?",
      answer: "Yes! We can punch handle holes into the side gussets or add reinforced plastic handles to make it easier for consumers to carry heavy bags (e.g., 5kg to 15kg)."
    },
    {
      question: "Are your pet food bags recyclable?",
      answer: "We offer both high-barrier non-recyclable options (with Aluminum foil) and recyclable mono-material PE quad-seal pouches that are accepted in standard plastic recycling streams."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Pet Food Quad Seal Packaging | Custom Kibble Bags</title>
        <meta name="description" content="Premium pet food quad seal packaging bags. High-durability vertical corner welds, grease-proof liners, and oxygen barriers. Low MOQs and custom sizes." />
        <link rel="canonical" href={`https://achievepack.com/topics/pet-food-quad-seal`} />
        <meta name="keywords" content="pet food quad seal, custom dog food bags, side gusset kibble pouch, grease proof pet bags, stand up cat food bag, pocket zipper pouch" />
        
        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Pet Food Quad Seal Packaging | Custom Kibble Bags",
            "description": "A technical review of utilizing quad-seal pouches to package dry pet food, preventing grease migration and seam bursting.",
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
            "mainEntityOfPage": `https://achievepack.com/topics/pet-food-quad-seal`
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
        title="Pet Food Quad Seal Packaging"
        description="High-stability side-gusset bags with four corner seals for premium pet kibble and treats."
        heroImage={IMAGES.hero}
        heroImageAlt="Premium dog food bag in quad seal shape standing on a clean wooden floor"
        heroTitle="Quad Seal Pet Food Packaging"
        heroSubtitle="Stable Box Shape | Grease-Proof Sealant | Corner Weld Reinforcement"
        introSummary="Improve your pet food shelf appeal and durability. Quad seal side-gusset pouches stand securely on retail shelves without bulging, providing airtight closures and grease-resistant barriers to keep kibble fresh."
        aeoSummary="Pet food quad seal bags feature four vertical corner welds that act as structural pillars, preventing bulging under dry kibble weight. Utilizing co-extruded Aluminum or EVOH barriers along with metallocene PE sealant layers prevents oil migration and fat oxidation."
        eeatDetails="Food-grade, BRCGS-certified materials designed for heavy-duty drop tests. Pocket zippers and carrying handles can be fully customized."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        contentCategory="Pet Supplies Packaging"
      />
    </>
  )
}

export default PetFoodQuadSeal
