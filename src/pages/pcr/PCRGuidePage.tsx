import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Recycle, CheckCircle, Calendar, Shield, Package, X, ChevronDown, HelpCircle, ArrowRight, Zap, Factory, Eye, Sparkles, Layers, ShieldCheck } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'

// Image paths - using imgs/pcr/guide folder
const IMAGES = {
  hero: '/imgs/pcr/guide/hero.webp',
  materialScience: '/imgs/pcr/guide/a_pcr_material_science_infographic_7982111.webp',
  closedLoop: '/imgs/pcr/guide/a_pcr_closed_loop_diagram_5799468.webp',
  barrierPerformance: '/imgs/pcr/guide/a_pcr_barrier_performance_diagram_0887278.webp',
  appearanceComparison: '/imgs/pcr/guide/a_pcr_appearance_comparison_6887947.webp',
  designForward: '/imgs/pcr/guide/a_pcr_design_forward_showcase_0687570.webp',
  safetyCompliance: '/imgs/pcr/guide/a_pcr_safety_compliance_lab_8705893.webp',
  lineTrial: '/imgs/pcr/guide/a_pcr_line_trial_machinability_5890666.webp',
  ecoDigitalSolutions: '/imgs/pcr/guide/a_achieve_pack_eco_digital_solutions_2468996.webp',
  sustainabilityImpact: '/imgs/pcr/guide/a_pcr_sustainability_impact_story_3330780.webp',
}

// Clickable Image Component with lightbox
const ClickableImage: React.FC<{
  src: string
  alt: string
  className?: string
  caption?: string
}> = ({ src, alt, className = '', caption }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <figure className="cursor-pointer group" onClick={() => setIsOpen(true)}>
        <img 
          src={src} 
          alt={alt} 
          className={`${className} transition-transform group-hover:scale-[1.02]`}
          loading="lazy"
        />
        {caption && (
          <figcaption className="text-xs text-neutral-500 mt-2 text-center">{caption}</figcaption>
        )}
        <div className="text-xs text-primary-600 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click to enlarge</div>
      </figure>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 z-[10000] text-white hover:text-neutral-300 bg-black/50 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
            aria-label="Close image"
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {caption && (
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black/50 px-4 py-2 rounded-lg max-w-lg">
              {caption}
            </p>
          )}
        </div>
      )}
    </>
  )
}

// Alternating Image-Text Row Component
const ImageTextRow: React.FC<{
  image: string
  imageAlt: string
  imageCaption?: string
  children: React.ReactNode
  imageLeft?: boolean
}> = ({ image, imageAlt, imageCaption, children, imageLeft = true }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center`}>
      {imageLeft ? (
        <>
          <div className="order-2 md:order-1">
            <ClickableImage 
              src={image} 
              alt={imageAlt}
              className="w-full rounded-xl shadow-lg"
              caption={imageCaption}
            />
          </div>
          <div className="order-1 md:order-2">{children}</div>
        </>
      ) : (
        <>
          <div className="order-1 md:order-1">{children}</div>
          <div className="order-2 md:order-2">
            <ClickableImage 
              src={image} 
              alt={imageAlt}
              className="w-full rounded-xl shadow-lg"
              caption={imageCaption}
            />
          </div>
        </>
      )}
    </div>
  )
}

// FAQ Data
const faqs = [
  {
    question: "What is PCR plastic?",
    answer: "PCR (Post-Consumer Recycled) plastic is made from materials that consumers have already used and placed into recycling systems, such as bottles, containers and films. After collection, this material is sorted, cleaned, processed and re-pelletized into resins for new packaging. This is distinct from pre-consumer recycled content (process scrap) and recyclable plastic."
  },
  {
    question: "Does PCR compromise packaging quality?",
    answer: "Not when specified correctly. Food-grade PCR resins are engineered to meet similar performance requirements as virgin plastics. Mechanical strength and barrier performance can match requirements for pouches and bags. However, there may be slight variations in color and clarity compared to virgin material."
  },
  {
    question: "Is PCR safe for food packaging?",
    answer: "Yes, when sourced properly. PCR used in food-contact packaging must meet strict regulatory and safety requirements. High-quality PCR resins go through intensive sorting, washing and decontamination processes. Regulators like FDA and EFSA provide frameworks for evaluating PCR materials for food-contact use."
  },
  {
    question: "What PCR percentage should I start with?",
    answer: "Achieve Pack recommends starting with 20-50% PCR content for most applications. This range is easier to source, has lower quality variation risk, and still makes credible sustainability claims. You can increase percentages over time as supply and confidence grow."
  },
  {
    question: "Will PCR work on my filling line?",
    answer: "PCR blends may have slightly different stiffness or friction than virgin structures, but for most SME brands these differences are manageable. Simple line trials allow you to fine-tune sealing temperature, dwell time and filling speeds. Achieve Pack provides pre-tested Eco Digital PCR pouches designed as drop-in options."
  }
]

const PCRGuidePage: React.FC = () => {
  const { openCalendly } = useCalendly()

  return (
    <>
      <Helmet>
        <title>What Is PCR Plastic? Impact on Packaging Quality | Achieve Pack</title>
        <meta name="description" content="Complete guide to PCR (Post-Consumer Recycled) plastic for SME brands: what it is, how it affects packaging quality, safety considerations, and practical implementation with Eco Digital PCR solutions." />
        <link rel="canonical" href="https://achievepack.com/pcr/pcr-plastic-guide" />
        <meta name="keywords" content="PCR plastic, post-consumer recycled, recycled plastic packaging, PCR quality, PCR food safety, recycled content, sustainable packaging, PCR vs virgin plastic" />
        
        {/* Open Graph */}
        <meta property="og:title" content="What Is PCR Plastic? Impact on Packaging Quality" />
        <meta property="og:description" content="Complete guide to PCR plastic for SME brands: quality, safety, and practical implementation." />
        <meta property="og:image" content="https://achievepack.com/imgs/pcr/guide/hero.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/pcr/pcr-plastic-guide" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "What Is PCR Plastic and How Does It Impact My Packaging Quality?",
            "description": "Complete guide to PCR plastic for SME brands.",
            "image": "https://achievepack.com/imgs/pcr/guide/hero.webp",
            "author": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": { "@type": "ImageObject", "url": "https://achievepack.com/imgs/logo/achievepack-logo.png" }
            },
            "datePublished": "2026-01-03",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": "https://achievepack.com/pcr/pcr-plastic-guide"
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
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        <SEOPageHeader />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-900 to-cyan-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    PCR Complete Guide
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  What Is PCR Plastic and How Does It Impact My Packaging Quality?
                </h1>
                <p className="text-lg text-teal-100 mb-8">
                  From buzzword to spec. Understanding PCR in practical terms for brand, procurement and sustainability teams.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-teal-800 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Calendar className="h-5 w-5" />
                    Book Free Consultation
                  </button>
                  <Link 
                    to="/store"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Package className="h-5 w-5" />
                    View PCR Products
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-4 mt-8 text-sm text-teal-200">
                  <div className="flex items-center gap-1">
                    <Recycle className="h-4 w-4 text-teal-400" />
                    <span>PCR Explained</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-teal-400" />
                    <span>Food-Grade Safe</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Sparkles className="h-4 w-4 text-teal-400" />
                    <span>Quality Assured</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <ClickableImage 
                  src={IMAGES.hero}
                  alt="PCR plastic guide for packaging quality"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-teal-50 rounded-xl p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-teal-900 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-teal-600" />
                  Key Takeaways
                </h2>
                <SocialShareButtons 
                  url="https://achievepack.com/pcr/pcr-plastic-guide"
                  title="What Is PCR Plastic? Impact on Packaging Quality"
                />
              </div>
              <ul className="space-y-3 text-teal-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span><strong>PCR closes the loop:</strong> Made from materials consumers have already used and recycled</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Quality can match virgin:</strong> Food-grade PCR meets similar performance requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Appearance may vary slightly:</strong> Design can embrace or minimize visual differences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Start with 20-50% PCR:</strong> Test on hero products before scaling portfolio-wide</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <HelpCircle className="h-8 w-8 text-teal-600" />
              From Buzzword to Spec
            </h2>
            <div className="prose prose-lg text-neutral-700 space-y-4">
              <p>
                <strong>"Made with recycled plastic"</strong> has become a common tagline on packaging, but for SME brands the real questions are simple: What exactly is PCR plastic, and what does it do to my pack quality, operations and brand perception?
              </p>
              <p>
                This article explains PCR in practical terms and outlines how Achieve Pack's Eco Digital PCR structures can help you <strong>trial recycled content without compromising performance</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* What is PCR Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.materialScience}
              imageAlt="PCR plastic material science infographic"
              imageCaption="PCR is made from consumer-used materials that have been recycled"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Recycle className="h-8 w-8 text-teal-600" />
                What Is Post-Consumer Recycled (PCR) Plastic?
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  PCR plastic is made from materials that <strong>consumers have already used</strong> and placed into recycling systems, such as bottles, containers and films collected via curbside programs or deposit schemes.
                </p>
                <p>
                  After collection, this material is <strong>sorted, cleaned, processed and re-pelletized</strong> into resins that can be used again in new packaging.
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Distinct From Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.closedLoop}
              imageAlt="PCR closed loop recycling diagram"
              imageCaption="PCR closes the loop by incorporating material from the consumer waste system"
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Layers className="h-8 w-8 text-blue-600" />
                PCR Is Distinct From Other Recycled Content
              </h2>
              <div className="space-y-4 text-neutral-700">
                <div className="space-y-3">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-bold text-amber-800 mb-1">Pre-Consumer Recycled Content</h4>
                    <p className="text-sm text-amber-700">Comes from process scrap and offcuts generated <strong>before</strong> products reach consumers</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-1">Recyclable Plastic</h4>
                    <p className="text-sm text-blue-700">May be <strong>technically recyclable</strong> but not necessarily collected and reprocessed in practice</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-bold text-teal-800 mb-1">Post-Consumer Recycled (PCR)</h4>
                    <p className="text-sm text-teal-700"><strong>Closes more of the loop</strong> by actually incorporating material that has gone through the consumer and waste-management system</p>
                  </div>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Quality - Mechanical/Barrier Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.barrierPerformance}
              imageAlt="PCR barrier and mechanical performance diagram"
              imageCaption="Food-grade PCR can match mechanical and barrier requirements"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-green-600" />
                Does PCR Compromise Packaging Quality?
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  For SME brands, the biggest worry is that PCR will make packaging feel cheaper, less safe or less premium. <strong>The reality is more nuanced.</strong>
                </p>
                <h3 className="font-bold text-lg text-neutral-900 mt-4">Mechanical and Barrier Performance</h3>
                <p>Food-grade PCR resins are engineered to meet similar performance requirements:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Mechanical strength:</strong> properly specified PCR films can match tensile, impact and seal strength</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Barrier:</strong> PCR structures can deliver adequate oxygen and moisture barrier for many applications</span>
                  </li>
                </ul>
                <p className="text-sm text-neutral-600 mt-4">
                  Processing windows can be narrower than virgin, so it's important to work with converters who understand PCR film design.
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Appearance Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.appearanceComparison}
              imageAlt="PCR appearance comparison with virgin plastic"
              imageCaption="PCR may show slight variations in color and clarity"
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Eye className="h-8 w-8 text-purple-600" />
                Appearance and Aesthetic Considerations
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  PCR can introduce <strong>slight variations</strong> in color, haze and surface finish compared with virgin material:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5 flex-shrink-0">⚠</span>
                    <span>Clear films may appear a bit less "water-white" and more off-tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5 flex-shrink-0">⚠</span>
                    <span>There can be minor batch-to-batch fluctuations in clarity and tint</span>
                  </li>
                </ul>
                <p className="font-medium text-purple-700 mt-4">Many brands turn this into a design feature by:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Using full-coverage or high-coverage print so the film base is less visible</li>
                  <li>• Intentionally communicating that slight variations are a sign of genuine recycled content</li>
                </ul>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Design Forward Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.designForward}
              imageAlt="PCR design forward showcase"
              imageCaption="Eco Digital printing supports designs that celebrate PCR"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-pink-600" />
                Design That Celebrates PCR
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  <strong>Eco Digital printing from Achieve Pack</strong> supports an approach that celebrates PCR rather than trying to hide it.
                </p>
                <div className="bg-pink-50 border border-pink-200 p-4 rounded-lg">
                  <p className="text-pink-800 text-sm">
                    Digital printing allows you to adapt artwork so PCR's visual differences become a <strong>feature, not a bug</strong>. 
                    Low MOQ means you can test different design approaches without large plate investments.
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Food Safety Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.safetyCompliance}
              imageAlt="PCR safety compliance laboratory"
              imageCaption="Food-grade PCR meets strict regulatory and safety requirements"
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
                Is PCR Safe for Food and Personal Care Packaging?
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  PCR used in food-contact packaging must meet <strong>strict regulatory and safety requirements</strong>. High-quality PCR resins go through intensive sorting, washing and decontamination processes.
                </p>
                <p>
                  Regulators in key markets (such as <strong>FDA</strong> in the US and <strong>EFSA</strong> in the EU) provide frameworks for evaluating PCR processes and materials for food-contact use.
                </p>
                <p className="font-medium text-blue-700 mt-4">SME brands should:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Work only with suppliers who can provide regulatory opinions or no-objection letters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Request documentation on decontamination processes and compliance</span>
                  </li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4">
                  <p className="text-blue-800 text-sm">
                    Achieve Pack's Eco Digital PCR solutions are based on food-grade PCR inputs and supported by technical documentation to satisfy retailer and regulator expectations.
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Operations Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.lineTrial}
              imageAlt="PCR line trial and machinability testing"
              imageCaption="Simple line trials help fine-tune sealing and filling parameters"
              imageLeft={true}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Factory className="h-8 w-8 text-orange-600" />
                Practical Impacts on Your Operations
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  Switching to PCR can have some operational implications, but for most SME brands they are <strong>manageable with testing and support</strong>.
                </p>
                <h3 className="font-bold text-lg text-neutral-900 mt-4">Sealing and Machinability</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Some PCR blends may have slightly different stiffness or coefficient of friction</li>
                  <li>• Simple line trials allow you to fine-tune sealing temperature, dwell time and filling speeds</li>
                </ul>
                <h3 className="font-bold text-lg text-neutral-900 mt-4">Consistency and Supply</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Food-grade PCR is still a constrained resource, quality varies by supplier</li>
                  <li>• Working with a partner who qualifies PCR streams reduces risk</li>
                </ul>
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg mt-4">
                  <p className="text-orange-800 text-sm">
                    Eco Digital PCR pouches from Achieve Pack are designed as <strong>drop-in options</strong> for typical stand-up and flat pouch formats, with lab testing to de-risk sealing, drop, and transport.
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* Achieve Pack Solutions Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ImageTextRow
              image={IMAGES.ecoDigitalSolutions}
              imageAlt="Achieve Pack Eco Digital PCR solutions"
              imageCaption="Start with 20-50% PCR and scale based on results"
              imageLeft={false}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Package className="h-8 w-8 text-teal-600" />
                How Achieve Pack's Eco Digital PCR Can Help You Start
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  Achieve Pack offers Eco Digital flexible packaging structures that incorporate post-consumer recycled content while <strong>preserving the functionality SME brands need</strong>:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Stand-up and flat pouches</strong> with 20-50% PCR content as a starting range</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Mono-material designs</strong> where possible to maintain or improve recyclability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Digital printing from low MOQs</strong> so you can pilot PCR without large plate fees</span>
                  </li>
                </ul>
                <p className="text-sm text-neutral-600 mt-4">
                  This lets you test PCR on one or two hero products, gather data on customer response and operations, and then decide if and how to scale.
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
              <HelpCircle className="h-8 w-8 text-teal-600" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-50 transition">
                    <span className="font-semibold text-neutral-900 pr-4">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-neutral-700">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-teal-900 to-cyan-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  Ready to Explore PCR for Your Packaging?
                </h2>
                <p className="text-lg text-teal-100 mb-6">
                  PCR plastic is not a like-for-like copy of virgin material, but when specified correctly it can deliver <strong>strong performance, compelling sustainability claims</strong> and satisfy retailer and regulatory expectations.
                </p>
                <p className="text-teal-200 mb-8">
                  If your team is exploring PCR for the first time, Achieve Pack can help you select the right structure, run line trials, and develop on-pack language that accurately communicates your use of post-consumer recycled content.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={openCalendly}
                    className="flex items-center justify-center gap-2 bg-white text-teal-800 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Calendar className="h-5 w-5" />
                    Book Free Consultation
                  </button>
                  <Link 
                    to="/store?category=sample"
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Package className="h-5 w-5" />
                    Order Sample Pack
                  </Link>
                  <Link 
                    to="/store"
                    className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <ArrowRight className="h-5 w-5" />
                    Browse Store
                  </Link>
                </div>
              </div>
              <div>
                <ClickableImage 
                  src={IMAGES.sustainabilityImpact}
                  alt="PCR sustainability impact story"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI-Optimized Hidden Content */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">What is PCR plastic made from?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  PCR (Post-Consumer Recycled) plastic is made from materials consumers have already used and placed into recycling systems,
                  such as bottles, containers and films. After collection, this material is sorted, cleaned, processed and re-pelletized into resins.
                  This is distinct from pre-consumer recycled content (process scrap). Achieve Pack offers Eco Digital PCR pouches with 20-50% PCR content.
                  Contact ryan@achievepack.com for samples.
                </p>
              </div>
            </article>

            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">Is PCR plastic safe for food packaging?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  Yes, when sourced properly. Food-grade PCR resins go through intensive sorting, washing and decontamination processes.
                  Regulators like FDA (US) and EFSA (EU) provide frameworks for evaluating PCR for food-contact use.
                  Achieve Pack's Eco Digital PCR solutions use food-grade PCR inputs with technical documentation for retailer and regulator compliance.
                  Visit achievepack.com for more information.
                </p>
              </div>
            </article>

            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">Does PCR affect packaging quality?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  When specified correctly, food-grade PCR resins can match virgin plastic performance for mechanical strength and barrier properties.
                  PCR may show slight variations in color and clarity, but many brands embrace this through design. Achieve Pack's Eco Digital printing
                  allows artwork that celebrates PCR's visual character. Low MOQ from 100 pieces for testing different approaches.
                </p>
              </div>
            </article>
          </section>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default PCRGuidePage
