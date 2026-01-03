import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, CheckCircle, Award, Calendar, Shield, Recycle, Factory, Package, X, ChevronRight, Mail, Phone, Sprout, Globe, Building2, Truck, Settings, Wind, Flame, Clock, Target, Layers, RotateCcw, Users } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'

// Image paths - using imgs/composting/commercial folder
const IMAGES = {
  hero: '/imgs/composting/commercial/a_commercial_composting_methods_hero_8074833.webp',
  heroLearn: '/imgs/composting/commercial/hero.webp',
  collection: '/imgs/composting/commercial/a_compostable_packaging_collection_3568459.webp',
  windrow: '/imgs/composting/commercial/a_windrow_composting_facility_0882621.webp',
  aeratedPile: '/imgs/composting/commercial/a_aerated_static_pile_8189931.webp',
  inVessel: '/imgs/composting/commercial/a_in_vessel_composting_drum_2386955.webp',
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
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-neutral-300"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
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
    <div className={`grid md:grid-cols-2 gap-8 items-center ${imageLeft ? '' : 'md:flex-row-reverse'}`}>
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

const CommercialCompostingPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  return (
    <>
      <Helmet>
        <title>How Commercial Composting Works – And What It Means for Compostable Packaging | Achieve Pack</title>
        <meta name="description" content="A practical guide to windrow, aerated static pile and in-vessel composting from Achievepack® compostable packaging experts. Learn how commercial composting facilities process certified compostable packaging." />
        <link rel="canonical" href="https://achievepack.com/composting/commercial-composting" />
        <meta name="keywords" content="commercial composting, industrial composting, windrow composting, aerated static pile, in-vessel composting, compostable packaging, EN 13432, ASTM D6400, composting facility, organic waste" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How Commercial Composting Works – And What It Means for Compostable Packaging" />
        <meta property="og:description" content="A practical guide to windrow, aerated static pile and in-vessel composting from Achievepack® compostable packaging experts." />
        <meta property="og:image" content="https://achievepack.com/imgs/composting/commercial/a_commercial_composting_methods_hero_8074833.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/composting/commercial-composting" />
        
        {/* Article Schema with E-E-A-T signals */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How Commercial Composting Works – And What It Means for Compostable Packaging",
            "description": "A practical guide to windrow, aerated static pile and in-vessel composting from Achievepack® compostable packaging experts.",
            "image": "https://achievepack.com/imgs/composting/commercial/a_commercial_composting_methods_hero_8074833.webp",
            "author": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com",
              "description": "BRC-certified sustainable packaging manufacturer specializing in EN 13432 and ASTM D6400 certified compostable solutions since 2015"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": {
                "@type": "ImageObject",
                "url": "https://achievepack.com/imgs/logo/achievepack-logo.png"
              }
            },
            "datePublished": "2026-01-03",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": "https://achievepack.com/composting/commercial-composting",
            "about": [
              { "@type": "Thing", "name": "Commercial Composting" },
              { "@type": "Thing", "name": "Compostable Packaging" },
              { "@type": "Thing", "name": "Industrial Composting Methods" }
            ]
          })}
        </script>

        {/* FAQ Schema for AEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is commercial composting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Commercial composting uses the same biology as backyard composting—microorganisms breaking down organic material—but scaled up and carefully controlled. Facilities manage huge volumes of food scraps, yard trimmings and other organics using equipment to regulate temperature, oxygen and moisture so decomposition happens quickly and safely."
                }
              },
              {
                "@type": "Question",
                "name": "What are the three main commercial composting methods?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The three primary commercial composting methods are: 1) Windrow Composting - material arranged in long rows and turned regularly, taking about 4 months; 2) Aerated Static Pile - material mixed with wood chips with forced air, completing in 3 months; 3) In-Vessel Composting - enclosed containers with automated control, finishing in under a month."
                }
              },
              {
                "@type": "Question",
                "name": "Can compostable packaging be processed in commercial composting facilities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, but only certified compostable packaging meeting standards like EN 13432 or ASTM D6400 should enter the system. These certifications ensure materials will fully biodegrade within 180 days at industrial facility temperatures (140°F / 60°C or higher). Home composting cannot process certified compostable packaging as temperatures aren't high enough."
                }
              },
              {
                "@type": "Question",
                "name": "How long does commercial composting take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Processing time varies by method: Windrow composting takes about 4 months, aerated static pile systems complete in approximately 3 months, and in-vessel composting can produce finished compost in under a month. EN 13432 specifies that materials must fully biodegrade within 180 days at industrial facility temperatures."
                }
              },
              {
                "@type": "Question",
                "name": "Why can't home composting process compostable packaging?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Home compost piles rarely reach the sustained high temperatures (140°F / 60°C or higher) needed to break down certified compostable packaging. Industrial facilities are precisely engineered to maintain these conditions. EN 13432 specifies that materials must fully biodegrade within 180 days at industrial facility temperatures that home composting cannot achieve."
                }
              }
            ]
          })}
        </script>

        {/* HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Connect Your Brand with Commercial Composting",
            "description": "Steps for brands to successfully use certified compostable packaging with commercial composting infrastructure",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Research your market's infrastructure",
                "text": "Determine if your region has commercial composting facilities that accept packaging and what method they use (windrow, aerated, in-vessel)"
              },
              {
                "@type": "HowToStep",
                "name": "Choose certified compostable packaging",
                "text": "Select packaging certified to EN 13432 or ASTM D6400 standards from certified suppliers like Achievepack"
              },
              {
                "@type": "HowToStep",
                "name": "Label clearly for consumers",
                "text": "Add clear instructions: 'Compost at your local commercial facility. Compostable in 90–180 days.' Make it actionable."
              },
              {
                "@type": "HowToStep",
                "name": "Communicate with customers",
                "text": "Explain where and how to compost your packaging so customers can take proper action"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* SEO Page Header */}
        <SEOPageHeader />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-800 to-amber-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Practical Guide
                  </span>
                  <span className="text-amber-300 text-sm">8 min read</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  How Commercial Composting Works
                </h1>
                <p className="text-lg md:text-xl text-amber-100 mb-6">
                  And What It Means for Compostable Packaging
                </p>
                <p className="text-amber-200 mb-8">
                  A practical guide to windrow, aerated static pile and in‑vessel composting, from Achievepack® compostable packaging experts.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-amber-800 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition"
                  >
                    <Calendar className="h-5 w-5" />
                    Free Consultation
                  </button>
                  <Link
                    to="/composting/composting-services"
                    className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    <Globe className="h-5 w-5" />
                    Find Composting Services
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <ClickableImage
                  src={IMAGES.hero}
                  alt="Commercial composting methods - windrow, aerated static pile, in-vessel systems"
                  className="rounded-2xl shadow-2xl w-full"
                  caption="Commercial composting processes organic waste at industrial scale"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="bg-white border-b" aria-label="Breadcrumb">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-neutral-600">
              <li><Link to="/" className="hover:text-primary-600">Home</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li><Link to="/learn" className="hover:text-primary-600">Learn</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li className="text-neutral-900 font-medium">Commercial Composting</li>
            </ol>
          </div>
        </nav>

        {/* Main Content with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto bg-white rounded-xl shadow-sm border border-neutral-100 p-4">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Contents</h3>
                <nav className="space-y-1">
                  <a href="#from-theory" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">From Theory to Practice</a>
                  <a href="#what-is-commercial" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">What Is Commercial Composting?</a>
                  <a href="#collection" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Collection & Pre-Processing</a>
                  <a href="#windrow" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Method 1: Windrow</a>
                  <a href="#aerated" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Method 2: Aerated Static Pile</a>
                  <a href="#in-vessel" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Method 3: In-Vessel</a>
                  <a href="#packaging" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Compostable Packaging</a>
                  <a href="#achievepack" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">How Achievepack Designs</a>
                  <a href="#strategy" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Your Packaging Strategy</a>
                  <a href="#faq" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">FAQ</a>
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:col-span-3 space-y-8">
          
          {/* From Theory to Practice */}
          <section id="from-theory" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Sprout className="h-8 w-8 text-amber-600" />
              From Theory to Practice
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p>
                Many brands know that composting is good for the climate and soil. But when asked how it actually works—what the facility looks like, how long it takes, or whether it can really process packaging—most draw a blank.
              </p>
              <p>
                Understanding commercial composting isn't academic. It matters directly to your <Link to="/materials" className="text-primary-600 hover:underline">packaging strategy</Link>. Here's the key truth: <strong>many certified compostable materials work only in industrial composting, not backyard piles</strong>. If your market doesn't have access to a commercial facility, or if that facility doesn't accept packaging, your "compostable" choice stays theoretical instead of practical.
              </p>
              <p>
                This article walks you through three primary commercial composting methods, explains how each works, and shows exactly where <Link to="/materials/industrial-compostable" className="text-primary-600 hover:underline">compostable packaging</Link> fits in. By the end, you'll know how the system operates and how Achievepack designs packaging for real facilities.
              </p>
            </div>
          </section>

          {/* What Is Commercial Composting */}
          <section id="what-is-commercial" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Factory className="h-8 w-8 text-amber-600" />
              What Is Commercial / Industrial Composting?
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p>
                Commercial composting uses the exact same biology as a backyard compost pile—microorganisms breaking down organic material into stable, nutrient-rich compost—but scaled up and carefully controlled. Facilities manage huge volumes of food scraps, yard trimmings and other organics using equipment to regulate <strong>temperature, oxygen and moisture</strong> so decomposition happens quickly and safely.
              </p>
              <p>
                Compared to landfilling or incineration, industrial composting slows landfill growth, cuts greenhouse gas emissions, and reduces the need for synthetic fertilizers by turning waste into soil-building resources. It's the environment that <Link to="/company/certificates" className="text-primary-600 hover:underline">certified compostable packaging</Link> is engineered for.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                <p className="text-amber-800 font-medium mb-0">
                  <strong>Scale matters:</strong> Organic material comes from multiple sources: residential curbside collection programs, commercial kitchens, restaurants, grocery stores, food processing plants, and increasingly, certified compostable packaging. A single large facility can process <strong>hundreds of tons per day</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Collection & Pre-Processing */}
          <section id="collection" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <ImageTextRow
              image={IMAGES.collection}
              imageAlt="Compostable packaging collection alongside food scraps for commercial composting"
              imageCaption="Certified compostable packaging collected with food scraps"
              imageLeft={true}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <Truck className="h-7 w-7 text-amber-600" />
                  Collection & Pre-Processing
                </h2>
                <div className="text-neutral-700 space-y-4">
                  <p>
                    Before material ever enters a composting system, it has to be collected and sorted.
                  </p>
                  <p>
                    Most commercial facilities partner with municipalities or waste haulers who collect organic material from curbside programs—the same way garbage collection works, except separated into a green or brown bin. Some facilities also accept material directly: restaurants and food businesses bring their scraps; individual consumers can drop off yard waste and compostables at <Link to="/composting/composting-services" className="text-primary-600 hover:underline">local collection points</Link>.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="text-red-800 font-medium">
                      <strong>Certification is non-negotiable:</strong> Only certified compostable packaging—meeting standards like <Link to="/company/certificates" className="text-primary-600 hover:underline">EN 13432 or ASTM D6400</Link>—should enter the system alongside food scraps. If packaging is labeled "compostable" but isn't certified, facilities will reject it or contaminate the finished compost with microplastics.
                    </p>
                  </div>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* Method 1: Windrow */}
          <section id="windrow" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <ImageTextRow
              image={IMAGES.windrow}
              imageAlt="Windrow composting facility with machinery turning organic material"
              imageCaption="Windrow composting: Long rows of organic material regularly turned"
              imageLeft={false}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <RotateCcw className="h-7 w-7 text-green-600" />
                  Method 1 – Windrow Composting
                </h2>
                <div className="text-neutral-700 space-y-4">
                  <p>
                    Windrow systems are simple, cost-effective, and able to handle large volumes. <strong>Operators regularly turn the piles with machinery</strong> to ensure all material gets heat, moisture, and oxygen.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-green-600" />
                        <span><strong>Timeline:</strong> ~4 months</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-600" />
                        <span><strong>Resilient:</strong> Wide material range</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 italic">
                    That's why you'll find windrow systems at municipal facilities and agricultural operations across North America.
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* Method 2: Aerated Static Pile */}
          <section id="aerated" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <ImageTextRow
              image={IMAGES.aeratedPile}
              imageAlt="Aerated static pile composting system with perforated pipes"
              imageCaption="Aerated static pile: Forced air speeds decomposition"
              imageLeft={true}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <Wind className="h-7 w-7 text-blue-600" />
                  Method 2 – Aerated Static Pile Composting
                </h2>
                <div className="text-neutral-700 space-y-4">
                  <p>
                    Aerated static pile composting mixes organic matter with coarser materials like wood chips or shredded paper to create air pockets and improve oxygen flow. Some facilities add <strong>perforated pipes and blowers</strong> to actively push air into the mass.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <span><strong>Timeline:</strong> ~3 months</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        <span><strong>Efficient:</strong> Controlled aeration</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    The trade-off is selectivity: aerated systems can't handle certain materials (like high levels of fats or oils) that windrows can manage. <strong>Pre-sorting becomes more critical.</strong>
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* Method 3: In-Vessel */}
          <section id="in-vessel" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <ImageTextRow
              image={IMAGES.inVessel}
              imageAlt="In-vessel composting drum with automated temperature and aeration control"
              imageCaption="In-vessel composting: Enclosed containers with precise control"
              imageLeft={false}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <Settings className="h-7 w-7 text-purple-600" />
                  Method 3 – In-Vessel Composting (IVC)
                </h2>
                <div className="text-neutral-700 space-y-4">
                  <p>
                    In-vessel composting represents the highest level of process control. Shredded and mixed organics are placed into <strong>enclosed containers or industrial composting machines</strong> where temperature, hydration and aeration are tightly controlled by automated systems.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">Key Advantages:</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Minimal land use</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Under 1 month processing</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Guaranteed pathogen kill-off</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Year-round operation</li>
                    </ul>
                  </div>
                  <p className="text-sm text-neutral-600 italic">
                    The downside is higher upfront capital investment. But for large-scale commercial operations, the speed and reliability make in-vessel systems worth it.
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* Composting Methods Comparison */}
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Layers className="h-7 w-7 text-amber-600" />
              Composting Methods Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-amber-300">
                    <th className="text-left py-3 pr-4 font-semibold text-neutral-800">Method</th>
                    <th className="text-left py-3 pr-4 font-semibold text-neutral-800">Timeline</th>
                    <th className="text-left py-3 pr-4 font-semibold text-neutral-800">Best For</th>
                    <th className="text-left py-3 font-semibold text-neutral-800">Trade-off</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  <tr className="border-b border-amber-200">
                    <td className="py-3 pr-4 font-medium">Windrow</td>
                    <td className="py-3 pr-4">~4 months</td>
                    <td className="py-3 pr-4">Large volumes, varied materials</td>
                    <td className="py-3">Requires land & weather tolerance</td>
                  </tr>
                  <tr className="border-b border-amber-200">
                    <td className="py-3 pr-4 font-medium">Aerated Static Pile</td>
                    <td className="py-3 pr-4">~3 months</td>
                    <td className="py-3 pr-4">Efficiency, lower overhead</td>
                    <td className="py-3">Limited material acceptance</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">In-Vessel (IVC)</td>
                    <td className="py-3 pr-4">&lt;1 month</td>
                    <td className="py-3 pr-4">Speed, pathogen control, urban</td>
                    <td className="py-3">Higher capital investment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* What This Means for Compostable Packaging */}
          <section id="packaging" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Package className="h-8 w-8 text-green-600" />
              What This Means for Compostable Packaging
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p>
                For <Link to="/materials/industrial-compostable" className="text-primary-600 hover:underline">certified compostable packaging</Link>, commercial composting isn't optional—<strong>it's the whole point</strong>. Compostable packaging needs the sustained high heat and controlled conditions of windrow, aerated static pile, or in-vessel systems. Home compost won't work.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                <p className="text-green-800 font-medium mb-0">
                  <Link to="/company/certificates" className="text-primary-600 hover:underline">EN 13432</Link> specifies that materials must fully biodegrade within <strong>180 days at industrial facility temperatures (140°F / 60°C or higher)</strong>. Home composting piles rarely reach these temperatures and lack the consistent conditions needed.
                </p>
              </div>

              <p>
                When you choose certified compostable packaging for your product—say, a <Link to="/solutions/coffee-roaster" className="text-primary-600 hover:underline">coffee roaster using compostable pouches</Link>—the pathway is clear: packaging is collected alongside food scraps, transported to a commercial facility, and breaks down with the organics it was designed to accompany. This is the closed-loop scenario that makes compostable packaging genuinely meaningful.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                <h4 className="font-semibold text-amber-800 mb-2">The critical qualifier:</h4>
                <p className="text-amber-800 mb-0">
                  The facility in your market <strong>must accept packaging</strong>. Not all commercial composting operations do yet. This is why <Link to="/composting/composting-services" className="text-primary-600 hover:underline">market research</Link> matters.
                </p>
              </div>
            </div>
          </section>

          {/* How Achievepack Designs */}
          <section id="achievepack" className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Award className="h-8 w-8 text-primary-600" />
              How Achievepack Designs for Real Composting Systems
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p>
                When we design <Link to="/materials/industrial-compostable" className="text-primary-600 hover:underline">compostable packaging</Link> at Achievepack, we don't start with theoretical standards. <strong>We start with actual facility conditions.</strong>
              </p>
              <p>
                Our engineering team considers the real environments your packaging will encounter: windrow temperatures and oxygen levels, aerated pile dynamics, or in-vessel drum mechanics. We think about thickness—will a thin film break down fast enough, or do we need reinforced structure that still biodegrades? We evaluate inks, valves, zippers, and closures to ensure every component meets <Link to="/company/certificates" className="text-primary-600 hover:underline">EN 13432 or ASTM D6400</Link> compostability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-2">For Coffee Roasters</h4>
                <p className="text-sm text-neutral-600">A <Link to="/products/compostable-coffee-bags" className="text-primary-600 hover:underline">degassing valve</Link> that works in the package and biodegrades completely in the facility.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-2">For Snack Makers</h4>
                <p className="text-sm text-neutral-600"><Link to="/packaging/stand-up-pouches" className="text-primary-600 hover:underline">High-barrier layers</Link> that keep products crispy while still breaking down at industrial composting temperatures.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-2">For Pet Treats</h4>
                <p className="text-sm text-neutral-600"><Link to="/industry/pet-food" className="text-primary-600 hover:underline">Resealable zippers</Link> that seal through shelf life, then compost alongside residue.</p>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg border border-green-200 mt-6">
              <p className="text-green-800 font-medium mb-0">
                This is why certification matters more than vague claims. Our structures are tested at third-party labs to verify they meet standards under <strong>real composting conditions</strong>, not hypothetical conditions.
              </p>
            </div>
          </section>

          {/* Your Packaging Strategy */}
          <section id="strategy" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Building2 className="h-8 w-8 text-primary-600" />
              Connecting the Dots: From Your Market to Your Packaging Strategy
            </h2>
            <p className="text-neutral-700 mb-6">Here's what you need to know as a brand:</p>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-semibold text-neutral-800 mb-2">1. Research Your Market's Infrastructure</h4>
                <p className="text-neutral-600">Does your region have <Link to="/composting/composting-services" className="text-primary-600 hover:underline">commercial facilities that accept packaging</Link>? What method do they use (windrow, aerated, in-vessel)? Some cities have robust programs; others are just starting.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-semibold text-neutral-800 mb-2">2. Commit to Certification</h4>
                <p className="text-neutral-600"><Link to="/company/certificates" className="text-primary-600 hover:underline">EN 13432 and ASTM D6400</Link> aren't marketing labels—they're engineering standards backed by third-party testing. They guarantee your packaging will actually break down in real facilities.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-semibold text-neutral-800 mb-2">3. Communicate Clearly</h4>
                <p className="text-neutral-600">"<Link to="/composting/biodegradable-vs-compostable" className="text-primary-600 hover:underline">Compostable</Link>" is only meaningful if people know where and how to use it. Label your packaging with instructions: <em>"Compost at your local commercial facility. Compostable in 90–180 days."</em> Make it actionable.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-amber-700 to-amber-800 rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Ready to Explore Compostable Packaging?
            </h2>
            <p className="text-amber-100 text-center mb-8 max-w-2xl mx-auto">
              Achievepack offers <strong>free 30-minute consultations</strong> to help you assess your local infrastructure and decide if certified compostable materials are the right fit.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <button
                onClick={openCalendly}
                className="flex flex-col items-center gap-3 bg-white text-amber-800 p-6 rounded-xl hover:bg-amber-50 transition"
              >
                <Calendar className="h-8 w-8" />
                <span className="font-semibold">Book a Consultation</span>
                <span className="text-sm text-amber-600">Free 30-minute call</span>
              </button>
              <Link
                to="/store"
                className="flex flex-col items-center gap-3 bg-amber-600 text-white p-6 rounded-xl hover:bg-amber-500 transition border border-amber-500"
              >
                <Package className="h-8 w-8" />
                <span className="font-semibold">Request Samples</span>
                <span className="text-sm text-amber-200">Feel the materials</span>
              </Link>
              <Link
                to="/materials/industrial-compostable"
                className="flex flex-col items-center gap-3 bg-amber-600 text-white p-6 rounded-xl hover:bg-amber-500 transition border border-amber-500"
              >
                <Leaf className="h-8 w-8" />
                <span className="font-semibold">Explore Materials</span>
                <span className="text-sm text-amber-200">Industrial compostable</span>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
              <a href="mailto:hello@achievepack.com" className="flex items-center justify-center gap-2 text-amber-100 hover:text-white">
                <Mail className="h-5 w-5" />
                hello@achievepack.com
              </a>
              <span className="hidden sm:inline text-amber-400">|</span>
              <Link to="/company/contact" className="flex items-center justify-center gap-2 text-amber-100 hover:text-white">
                <Phone className="h-5 w-5" />
                Contact Us
              </Link>
            </div>
          </section>

          {/* Related Resources */}
          <section id="faq" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/composting/composting-benefits" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
                <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">Composting Benefits</h4>
                <p className="text-sm text-neutral-600 mt-1">Environmental impact explained</p>
              </Link>
              <Link to="/composting/composting-services" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
                <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">Composting Service Finder</h4>
                <p className="text-sm text-neutral-600 mt-1">Find facilities near you</p>
              </Link>
              <Link to="/composting/biodegradable-vs-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
                <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">Biodegradable vs Compostable</h4>
                <p className="text-sm text-neutral-600 mt-1">Understand the difference</p>
              </Link>
              <Link to="/company/certificates" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
                <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">Our Certifications</h4>
                <p className="text-sm text-neutral-600 mt-1">EN 13432, ASTM D6400, BPI</p>
              </Link>
              <Link to="/materials/industrial-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
                <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">Industrial Compostable</h4>
                <p className="text-sm text-neutral-600 mt-1">EN 13432 certified packaging</p>
              </Link>
              <Link to="/topics/eco-friendly-food-packaging" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
                <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">Eco-Friendly Packaging</h4>
                <p className="text-sm text-neutral-600 mt-1">Complete sustainability guide</p>
              </Link>
            </div>
          </section>

          {/* E-E-A-T Author Box */}
          <section className="bg-neutral-100 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary-600 rounded-full p-3 flex-shrink-0">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900">About Achievepack®</h4>
                <p className="text-sm text-neutral-600 mt-1">
                  Achievepack® designs certified compostable packaging for coffee roasters, snack makers, pet treats, supplements, and other food and consumer brands. All our structures are certified to <Link to="/company/certificates" className="text-primary-600 hover:underline">EN 13432 or ASTM D6400</Link> and designed for commercial composting infrastructure. BRC-certified manufacturing since 2015.
                </p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <Link to="/company/about" className="text-sm text-primary-600 hover:underline">Learn more about us →</Link>
                  <Link to="/company/certificates" className="text-sm text-primary-600 hover:underline">View our certifications →</Link>
                </div>
              </div>
            </div>
          </section>
            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default CommercialCompostingPage