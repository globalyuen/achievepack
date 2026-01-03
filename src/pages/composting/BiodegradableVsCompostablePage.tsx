import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, AlertTriangle, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Clock, ExternalLink, FileCheck, Search, X, Package } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'

// Image paths
const IMAGES = {
  hero: '/imgs/composting/vs/a_hero_biodegradable_vs_compostable_8031695.webp',
  lifecycle: '/imgs/composting/vs/a_lifecycle_compostable_infographic_2163778.webp',
  comparison: '/imgs/composting/vs/a_comparison_three_terms_1644691.webp',
  greenwashing: '/imgs/composting/vs/a_greenwashing_spotlight_5460764.webp',
  productTrust: '/imgs/composting/vs/a_product_trust_achievepack_5584835.webp',
  ctaBanner: '/imgs/composting/vs/a_cta_footer_banner_9735136.webp'
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

const BiodegradableVsCompostablePage: React.FC = () => {
  const { openCalendly } = useCalendly()

  return (
    <>
      <Helmet>
        <title>Biodegradable vs Compostable Packaging: How to Avoid Greenwashing | Achieve Pack</title>
        <meta name="description" content="Learn the critical difference between biodegradable and compostable packaging. Expert guide to EN 13432, ASTM D6400 certifications and how to avoid greenwashing. From Achievepack® certified compostable packaging experts." />
        <link rel="canonical" href="https://achievepack.com/composting/biodegradable-vs-compostable" />
        <meta name="keywords" content="biodegradable vs compostable, greenwashing packaging, EN 13432, ASTM D6400, compostable certification, BPI certified, TUV OK Compost, sustainable packaging" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Biodegradable vs Compostable Packaging: How to Avoid Greenwashing" />
        <meta property="og:description" content="A practical guide for coffee roasters and food brands. Learn to identify true compostable packaging from greenwashing." />
        <meta property="og:image" content="https://achievepack.com/imgs/composting/vs/a_hero_biodegradable_vs_compostable_8031695.webp" />
        <meta property="og:type" content="article" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Biodegradable vs Compostable Packaging: How to Avoid Greenwashing",
            "description": "A practical guide for coffee roasters and food brands to understand the difference between biodegradable and compostable packaging.",
            "image": "https://achievepack.com/imgs/composting/vs/a_hero_biodegradable_vs_compostable_8031695.webp",
            "author": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": {
                "@type": "ImageObject",
                "url": "https://achievepack.com/logo.png"
              }
            },
            "datePublished": "2025-01-02",
            "dateModified": "2025-01-02",
            "mainEntityOfPage": "https://achievepack.com/composting/biodegradable-vs-compostable"
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the difference between biodegradable and compostable packaging?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Biodegradable means a material will eventually break down, but with no timeframe or conditions specified. Compostable means the material will break down within 90-180 days under specific conditions (industrial or home composting) and leave no toxic residue, verified by certifications like EN 13432 or ASTM D6400."
                }
              },
              {
                "@type": "Question",
                "name": "What certifications should I look for in compostable packaging?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Look for EN 13432 (EU standard), ASTM D6400 (US standard), BPI Certified (US), TUV OK Compost (industrial), or TUV OK Home (home composting). These certifications require rigorous third-party testing and are verifiable in public databases."
                }
              },
              {
                "@type": "Question",
                "name": "How do I identify greenwashing in packaging claims?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Red flags include: vague terms like 'eco-friendly' without certifications, 'biodegradable' claims without timeframes, no third-party certification logos, inability to provide test reports, and claims that aren't verifiable in certification databases like BPI or TUV Austria."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* SEO Page Header */}
        <SEOPageHeader />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-800 to-green-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-amber-500 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">
                    Sustainability Guide
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  Biodegradable vs Compostable Packaging: How to Avoid Greenwashing
                </h1>
                <p className="text-lg md:text-xl text-green-100 mb-6">
                  A practical guide for coffee roasters and food brands, from Achievepack® certified compostable packaging experts.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
                  >
                    <Calendar className="h-5 w-5" />
                    Free Consultation
                  </button>
                  <Link
                    to="/store"
                    className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    Request Samples
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <ClickableImage 
                  src={IMAGES.hero}
                  alt="Biodegradable vs Compostable Packaging Visual Comparison"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto bg-white rounded-xl shadow-sm border border-neutral-100 p-4">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Contents</h3>
                <nav className="space-y-1">
                  <a href="#intro" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Why Terms Matter</a>
                  <a href="#biodegradable" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">What is Biodegradable</a>
                  <a href="#compostable" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">What is Compostable</a>
                  <a href="#comparison" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Key Differences</a>
                  <a href="#certifications" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Certifications</a>
                  <a href="#greenwashing" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Greenwashing Red Flags</a>
                  <a href="#cta" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Get Started</a>
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:col-span-3 space-y-8">
          
          {/* Introduction */}
          <section id="intro" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
              <h2 className="text-xl font-bold text-amber-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Why These Terms Matter
              </h2>
              <p className="text-amber-900">
                In the rush to appear sustainable, many brands use "biodegradable" and "compostable" interchangeably. 
                But these terms have <strong>vastly different meanings</strong>—and using them incorrectly can expose your brand 
                to greenwashing accusations, regulatory penalties, and loss of consumer trust.
              </p>
            </div>

            <ImageTextRow 
              image={IMAGES.hero}
              imageAlt="Understanding packaging terminology"
              imageCaption="The difference matters more than you think"
              imageLeft={true}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-neutral-900">The Greenwashing Risk</h3>
                <p className="text-neutral-700">
                  The FTC (Federal Trade Commission) in the US and equivalent bodies in the EU are increasingly 
                  cracking down on misleading environmental claims. Brands using "biodegradable" without qualification 
                  have faced fines and forced to remove claims from packaging.
                </p>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-red-800">
                    <strong>Real Risk:</strong> In 2024, several major brands faced legal action for using 
                    "biodegradable" claims on packaging that would only break down under industrial conditions 
                    that don't exist in most waste streams.
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* What is Biodegradable */}
          <section id="biodegradable" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Target className="h-7 w-7 text-amber-600" />
              What "Biodegradable" Really Means
            </h2>
            
            <ImageTextRow 
              image={IMAGES.comparison}
              imageAlt="Comparison of Biodegradable, Compostable, and Degradable terms"
              imageCaption="Three terms, very different meanings"
              imageLeft={false}
            >
              <div className="space-y-4">
                <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">Definition</h4>
                  <p className="text-amber-900">
                    "Biodegradable" simply means a material will <em>eventually</em> break down through natural 
                    biological processes. There's no specified timeframe—it could be 5 years or 500 years.
                  </p>
                </div>
                
                <h4 className="font-semibold text-neutral-800">The Problem:</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>No time requirement:</strong> A plastic bag in a landfill is technically "biodegradable"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>No condition specification:</strong> May require UV light, oxygen, or heat not present in landfills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>No residue standards:</strong> May leave microplastics or toxic compounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>No certification required:</strong> Anyone can claim it without proof</span>
                  </li>
                </ul>
              </div>
            </ImageTextRow>
          </section>

          {/* What is Compostable */}
          <section id="compostable" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Leaf className="h-7 w-7 text-green-600" />
              What "Compostable" Actually Guarantees
            </h2>
            
            <ImageTextRow 
              image={IMAGES.lifecycle}
              imageAlt="Compostable packaging lifecycle infographic"
              imageCaption="The 4-stage composting process"
              imageLeft={true}
            >
              <div className="space-y-4">
                <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Certified Standards</h4>
                  <p className="text-green-900">
                    "Compostable" is a <strong>legally defined term</strong> with strict standards that materials 
                    must meet through third-party testing.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h5 className="font-semibold text-neutral-800 flex items-center gap-2">
                      <span className="text-lg">🇪🇺</span> EN 13432
                    </h5>
                    <p className="text-sm text-neutral-600 mt-1">European standard for industrial composting. Requires 90% disintegration in 12 weeks.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <h5 className="font-semibold text-neutral-800 flex items-center gap-2">
                      <span className="text-lg">🇺🇸</span> ASTM D6400
                    </h5>
                    <p className="text-sm text-neutral-600 mt-1">US standard for compostable plastics. Requires 60% biodegradation in 180 days.</p>
                  </div>
                </div>

                <h4 className="font-semibold text-neutral-800 mt-4">The Guarantees:</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Defined timeframe:</strong> 90-180 days maximum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>No toxic residue:</strong> Must pass ecotoxicity tests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Third-party verified:</strong> Independent lab testing required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Database verifiable:</strong> Check BPI or TÜV Austria registries</span>
                  </li>
                </ul>
              </div>
            </ImageTextRow>
          </section>

          {/* Key Differences Table */}
          <section id="comparison" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <FileCheck className="h-7 w-7 text-blue-600" />
              Key Differences at a Glance
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-neutral-800 text-white">
                    <th className="text-left p-4 font-semibold">Criteria</th>
                    <th className="text-left p-4 font-semibold">Biodegradable</th>
                    <th className="text-left p-4 font-semibold bg-green-700">Compostable</th>
                    <th className="text-left p-4 font-semibold">Degradable</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  <tr className="border-b">
                    <td className="p-4 font-medium">Timeframe</td>
                    <td className="p-4">Undefined</td>
                    <td className="p-4 bg-green-50">90-180 days</td>
                    <td className="p-4">Undefined</td>
                  </tr>
                  <tr className="border-b bg-neutral-50">
                    <td className="p-4 font-medium">Certification Required</td>
                    <td className="p-4">❌ No</td>
                    <td className="p-4 bg-green-50">✅ Yes (EN 13432, ASTM D6400)</td>
                    <td className="p-4">❌ No</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Toxic Residue Testing</td>
                    <td className="p-4">❌ Not required</td>
                    <td className="p-4 bg-green-50">✅ Mandatory</td>
                    <td className="p-4">❌ Not required</td>
                  </tr>
                  <tr className="border-b bg-neutral-50">
                    <td className="p-4 font-medium">Verifiable</td>
                    <td className="p-4">❌ No public database</td>
                    <td className="p-4 bg-green-50">✅ BPI, TÜV databases</td>
                    <td className="p-4">❌ No</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Regulatory Compliance</td>
                    <td className="p-4 text-red-600">⚠️ FTC warning risk</td>
                    <td className="p-4 bg-green-50 text-green-700">✅ Compliant</td>
                    <td className="p-4 text-red-600">⚠️ Often banned (oxo-)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Other Terms to Watch */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Search className="h-7 w-7 text-purple-600" />
              Other Terms to Watch Out For
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">❌ "Degradable"</h4>
                <p className="text-sm text-red-700">
                  Means nothing specific. All materials are technically degradable given enough time.
                </p>
              </div>
              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">❌ "Oxo-degradable"</h4>
                <p className="text-sm text-red-700">
                  <strong>Banned in the EU.</strong> Fragments into microplastics. Not compostable.
                </p>
              </div>
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">⚠️ "Plant-based"</h4>
                <p className="text-sm text-amber-700">
                  Only describes origin. Bio-PE is plant-based but NOT compostable—it's recyclable like regular PE.
                </p>
              </div>
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">⚠️ "Eco-friendly"</h4>
                <p className="text-sm text-amber-700">
                  Vague marketing term. Ask: "What certification backs this claim?"
                </p>
              </div>
            </div>
          </section>

          {/* Identifying Greenwashing */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="h-7 w-7 text-red-600" />
              5 Red Flags: How to Spot Greenwashing
            </h2>
            
            <ImageTextRow 
              image={IMAGES.greenwashing}
              imageAlt="Greenwashing vs genuine certification comparison"
              imageCaption="Vague claims vs. transparent certification"
              imageLeft={false}
            >
              <div className="space-y-3">
                {[
                  { flag: 'No certification logo visible', tip: 'Legitimate certifications are displayed prominently' },
                  { flag: 'Claims without timeframes', tip: '"Biodegradable" without "within X days" is a red flag' },
                  { flag: 'No certificate number provided', tip: 'All certified products have verifiable registration numbers' },
                  { flag: 'Cannot provide test reports', tip: 'Ask for third-party lab reports—they should be readily available' },
                  { flag: 'Not listed in certification databases', tip: 'Verify at products.bpiworld.org or www.tuv-at.be/green-marks' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">{idx + 1}</span>
                      <div>
                        <p className="font-medium text-neutral-800">{item.flag}</p>
                        <p className="text-sm text-neutral-600">{item.tip}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ImageTextRow>
          </section>

          {/* Procurement Checklist */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <CheckCircle className="h-7 w-7 text-green-600" />
              6-Point Supplier Evaluation Framework
            </h2>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8 rounded-xl border border-green-200">
              <p className="text-neutral-700 mb-6">
                Use this checklist when evaluating any supplier claiming to offer compostable packaging:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { q: 'Which certification do you hold?', look: 'EN 13432, ASTM D6400, BPI, TÜV OK Compost/Home' },
                  { q: 'Can you provide the certificate number?', look: 'Should be verifiable in public databases' },
                  { q: 'Is it industrial or home compostable?', look: 'Match to your customers\' disposal options' },
                  { q: 'Do you have third-party test reports?', look: 'Not just manufacturer claims' },
                  { q: 'What is the shelf life of the material?', look: 'Compostable materials have shorter shelf life' },
                  { q: 'What happens at end-of-life?', look: 'Clear disposal instructions you can print' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-green-200">
                    <p className="font-medium text-neutral-800 mb-1">{idx + 1}. {item.q}</p>
                    <p className="text-sm text-green-700">Look for: {item.look}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Achievepack Positioning */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Award className="h-7 w-7 text-primary-600" />
              Why Brands Trust Achieve Pack
            </h2>
            
            <ImageTextRow 
              image={IMAGES.productTrust}
              imageAlt="Achieve Pack certified compostable products with certification badges"
              imageCaption="Every claim backed by verifiable certification"
              imageLeft={true}
            >
              <div className="space-y-4">
                <p className="text-neutral-700">
                  At Achieve Pack, we believe in <strong>transparency over marketing claims</strong>. 
                  Every product page shows exactly which certifications apply—and which don't.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">Certified Compostable Options</p>
                      <p className="text-sm text-neutral-600">TÜV OK Home, OK Compost Industrial, BPI verified</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">Recyclable Alternatives</p>
                      <p className="text-sm text-neutral-600">Mono-PE/PP for where composting infrastructure is limited</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">Low MOQ Sampling</p>
                      <p className="text-sm text-neutral-600">Test from 100 pieces before committing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">Full Documentation</p>
                      <p className="text-sm text-neutral-600">Test reports, certificates, and disposal instructions provided</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                  <a 
                    href="https://products.bpiworld.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Verify on BPI Database
                  </a>
                  <a 
                    href="https://www.tuv-at.be/green-marks/certified-products/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    TÜV Austria Registry
                  </a>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* The Honest Truth */}
          <section className="mb-16">
            <div className="bg-neutral-800 text-white p-6 md:p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-amber-400" />
                The Honest Truth About Composting Infrastructure
              </h3>
              <p className="text-neutral-300 mb-4">
                We acknowledge the reality: <strong>industrial composting facilities are not available everywhere.</strong> 
                In many regions, compostable packaging may end up in landfill where it won't break down as intended.
              </p>
              <p className="text-neutral-300">
                That's why we also offer <strong>recyclable mono-material options</strong> (Mono-PE, Mono-PP) for markets 
                where recycling infrastructure is more accessible than composting. The best sustainable choice 
                depends on your customers' real disposal options—not just what sounds good in marketing.
              </p>
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Explore Related Topics</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/materials/home-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">Home Compostable Materials</h4>
                <p className="text-sm text-neutral-600 mt-1">TÜV OK Home certified options</p>
              </Link>
              <Link to="/materials/industrial-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">Industrial Compostable</h4>
                <p className="text-sm text-neutral-600 mt-1">EN 13432 certified packaging</p>
              </Link>
              <Link to="/materials/recyclable-mono-pe" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">Recyclable Mono-PE</h4>
                <p className="text-sm text-neutral-600 mt-1">Single-material recyclable</p>
              </Link>
              <Link to="/topics/eco-friendly-food-packaging" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">Eco-Friendly Food Packaging</h4>
                <p className="text-sm text-neutral-600 mt-1">Complete guide for food brands</p>
              </Link>
              <Link to="/company/certificates" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">Our Certifications</h4>
                <p className="text-sm text-neutral-600 mt-1">BPI, TÜV, BRC documentation</p>
              </Link>
              <Link to="/support/faqs" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">FAQ</h4>
                <p className="text-sm text-neutral-600 mt-1">Common questions answered</p>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-8">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={IMAGES.ctaBanner}
                alt="Get started with certified compostable packaging"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70 flex items-center">
                <div className="p-6 md:p-10 max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to Make the Right Choice?
                  </h3>
                  <p className="text-green-100 mb-6">
                    Get free material samples with full certification documentation. 
                    We'll help you choose the right sustainable option for your brand.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={openCalendly}
                      className="flex items-center justify-center gap-2 bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition shadow-lg"
                    >
                      <Calendar className="h-5 w-5" />
                      Book Free Consultation
                    </button>
                    <Link
                      to="/store?category=sample"
                      className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
                    >
                      <Package className="h-5 w-5" />
                      Order Sample Pack
                    </Link>
                    <Link
                      to="/store"
                      className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                    >
                      Browse Store
                    </Link>
                  </div>
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

export default BiodegradableVsCompostablePage
