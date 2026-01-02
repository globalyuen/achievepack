import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, AlertTriangle, CheckCircle, Award, Calendar, Target, Shield, Recycle, Droplets, TreeDeciduous, Factory, Package, ArrowLeft, X, ChevronRight, Mail, Phone, Sprout, Globe, Building2 } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'

// Image paths
const IMAGES = {
  hero: '/imgs/compostable/benefits/a_achievepack_composting_locator_hero_9733153.webp',
  heroLearn: '/imgs/compostable/benefits/hero.webp',
  landfill: '/imgs/compostable/benefits/Educational cross-section.webp',
  commercial: '/imgs/compostable/benefits/Commercial composting facility illustration.webp',
  benefits: '/imgs/compostable/benefits/Benefits grid showing.webp',
  premium: '/imgs/compostable/benefits/Premium product photography.webp',
  heroIllustration: '/imgs/compostable/benefits/hero illustration.webp'
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

const CompostingBenefitsPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  return (
    <>
      <Helmet>
        <title>The Composting Benefits for Our Planet – And What It Means for Your Packaging | Achieve Pack</title>
        <meta name="description" content="How composting cuts emissions, protects soil and water, and how Achievepack® compostable packaging fits into the picture. Learn the environmental benefits of commercial composting and certified compostable packaging." />
        <link rel="canonical" href="https://achievepack.com/compostable/composting-benefits" />
        <meta name="keywords" content="composting benefits, environmental composting, compostable packaging, reduce emissions, soil health, commercial composting, EN 13432, ASTM D6400, sustainable packaging, organic waste" />
        
        {/* Open Graph */}
        <meta property="og:title" content="The Composting Benefits for Our Planet – And What It Means for Your Packaging" />
        <meta property="og:description" content="How composting cuts emissions, protects soil and water, and how Achievepack® compostable packaging fits into the picture." />
        <meta property="og:image" content="https://achievepack.com/imgs/compostable/benefits/a_achievepack_composting_locator_hero_9733153.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/compostable/composting-benefits" />
        
        {/* Article Schema with E-E-A-T signals */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The Composting Benefits for Our Planet – And What It Means for Your Packaging",
            "description": "How composting cuts emissions, protects soil and water, and how Achievepack® compostable packaging fits into the picture.",
            "image": "https://achievepack.com/imgs/compostable/benefits/a_achievepack_composting_locator_hero_9733153.webp",
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
            "datePublished": "2025-01-02",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": "https://achievepack.com/compostable/composting-benefits",
            "about": [
              { "@type": "Thing", "name": "Composting" },
              { "@type": "Thing", "name": "Sustainable Packaging" },
              { "@type": "Thing", "name": "Environmental Benefits" }
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
                "name": "What are the environmental benefits of composting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Composting reduces greenhouse gas emissions by preventing methane release from landfills, returns nutrients to soil reducing the need for synthetic fertilizers, improves water retention by up to 20%, reduces municipal waste management costs, and diverts organic waste from overfilled landfills."
                }
              },
              {
                "@type": "Question",
                "name": "What happens to organic waste in landfills?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In landfills, organic waste is sealed in an anaerobic environment without oxygen. This causes slow decomposition that releases methane (28x more potent than CO2) and carbon dioxide. Valuable nutrients like nitrogen, phosphorus, and potassium are locked away instead of returning to the soil."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between backyard and commercial composting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Backyard composting uses simple bins for household food scraps and yard waste, taking weeks to months to produce compost. Commercial composting operates at city scale with controlled temperatures exceeding 140°F (60°C), can process bones, dairy, and certified compostable packaging in 90-180 days."
                }
              },
              {
                "@type": "Question",
                "name": "Can compostable packaging actually be composted?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, but only in commercial composting facilities that reach temperatures exceeding 140°F. Packaging must be certified to EN 13432 (EU) or ASTM D6400 (US) standards. At these temperatures, certified compostable packaging breaks down in 90-180 days alongside food waste, becoming part of the finished compost."
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
            "name": "How to Support Composting with Your Brand's Packaging",
            "description": "Practical steps for brands to support composting through certified compostable packaging",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Choose certified compostable packaging",
                "text": "Select packaging certified to EN 13432 or ASTM D6400 standards from suppliers like Achievepack"
              },
              {
                "@type": "HowToStep",
                "name": "Label clearly",
                "text": "State the certification standard and provide plain-language instructions: 'Compost at your local commercial facility. Compostable in 90–180 days.'"
              },
              {
                "@type": "HowToStep",
                "name": "Partner with local infrastructure",
                "text": "Research composting facilities in your key markets and verify they accept certified compostable packaging"
              },
              {
                "@type": "HowToStep",
                "name": "Tell the full story",
                "text": "Use your website and social media to explain why composting matters and why you chose compostable packaging"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
              <ArrowLeft className="h-5 w-5" /> Back to Home
            </Link>
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary-600" />
              <span className="text-xl font-bold text-primary-600">AchievePack</span>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-800 to-green-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Environmental Guide
                  </span>
                  <span className="text-green-300 text-sm">5 min read</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  The Composting Benefits for Our Planet
                </h1>
                <p className="text-lg md:text-xl text-green-100 mb-6">
                  And What It Means for Your Packaging
                </p>
                <p className="text-green-200 mb-8">
                  How composting cuts emissions, protects soil and water, and how Achievepack® compostable packaging fits into the picture.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openCalendly}
                    className="flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                  >
                    <Calendar className="h-5 w-5" />
                    Free Consultation
                  </button>
                  <Link
                    to="/compostable/composting-services"
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
                  alt="Composting benefits for sustainable packaging - Achievepack"
                  className="rounded-2xl shadow-2xl w-full"
                  caption="Composting transforms organic waste into valuable soil amendment"
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
              <li className="text-neutral-900 font-medium">Composting Benefits</li>
            </ol>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-12">
          
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Sprout className="h-8 w-8 text-green-600" />
              Why Composting Matters Now
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p>
                Every year, roughly <strong>34.6 million tons</strong> of organic waste—food scraps, yard trimmings, compostable packaging—enters America's waste stream. The majority ends up in one of two places: buried in landfills or burned in incinerators. Neither option is optimal.
              </p>
              <p>
                When organic waste is landfilled, it's sealed in plastic bags, compacted with other trash, and buried. This creates an <strong>anaerobic environment</strong>—starved of oxygen and microbes—where material doesn't decompose naturally. Instead, it slowly rots, releasing methane and carbon dioxide that drive climate change. In that same airless environment, nutrients that could nourish soil are essentially locked away, lost forever.
              </p>
              <p>
                Incineration isn't much better. Burning that same waste generates toxic ash and additional CO2 emissions without any positive output.
              </p>
              <p>
                But there's a <strong>third path</strong>. Composting transforms that same organic waste into a soil-building resource. It's not a new idea—gardeners have been doing it for centuries—but when scaled through commercial infrastructure, it becomes a genuine climate and soil solution that brands can actively support. And that's where the story gets interesting for your <Link to="/materials" className="text-primary-600 hover:underline">packaging strategy</Link>.
              </p>
            </div>
          </section>

          {/* What Happens to Organic Waste in Landfills */}
          <section className="mb-16">
            <ImageTextRow
              image={IMAGES.landfill}
              imageAlt="Cross-section illustration showing organic waste decomposition in landfill vs composting"
              imageCaption="Landfill decomposition creates methane; composting creates soil"
              imageLeft={true}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <AlertTriangle className="h-7 w-7 text-amber-500" />
                  What Happens to Organic Waste in Landfills
                </h2>
                <div className="text-neutral-700 space-y-4">
                  <p>
                    The numbers are striking. In 2018, an estimated <strong>35 million tons</strong> of uneaten food entered U.S. landfills, accounting for roughly <strong>24% of the municipal waste stream</strong>. But the problem extends beyond food. Paper, cardboard, yard waste, and items labeled "compostable" but sent to the wrong place all contribute to this burden.
                  </p>
                  <p>
                    Here's the chain reaction: In a landfill, organic material is entombed under layers of refuse and compacted soil. Without oxygen, it cannot decompose aerobically. Instead, microbes that thrive in anaerobic conditions take over. These microbes break down organic matter, but the byproducts are <strong>methane and carbon dioxide</strong>—both potent greenhouse gases.
                  </p>
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-amber-800 font-medium">
                      Methane is about <strong>28 times more effective</strong> at trapping heat than CO2 over a 100-year period.
                    </p>
                  </div>
                  <p>
                    Meanwhile, valuable nutrients—nitrogen, phosphorus, potassium—remain locked in that anaerobic environment or are released as pollutants that leach into groundwater. What could have regenerated soil instead becomes a long-term environmental liability.
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* Types of Composting */}
          <section className="mb-16">
            <ImageTextRow
              image={IMAGES.commercial}
              imageAlt="Commercial composting facility with industrial windrows processing organic waste"
              imageCaption="Commercial composting facilities process organic waste at temperatures exceeding 140°F"
              imageLeft={false}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <Factory className="h-7 w-7 text-green-600" />
                  Types of Composting: Backyard vs. Commercial
                </h2>
                <div className="text-neutral-700 space-y-4">
                  <p>
                    Composting isn't one-size-fits-all. The method depends on scale and infrastructure.
                  </p>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">🏡 Backyard Composting</h4>
                    <p className="text-sm text-green-700">
                      A simple bin where households layer "browns" (carbon-rich materials like leaves and cardboard) and "greens" (nitrogen-rich materials like food scraps) at roughly a 2:1 ratio. Keep it moist, turn it regularly, and in weeks to months you'll have dark, crumbly compost.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">🏭 Commercial Composting</h4>
                    <p className="text-sm text-blue-700">
                      Applies the same biology at city scale. Dedicated facilities collect organic waste, pile it in massive windrows, and manage temperature, moisture, and aeration. These piles reach internal temperatures <strong>exceeding 140°F (60°C)</strong>. At that temperature, pathogenic organisms are killed, and the facility can break down bones, greases, dairy, and crucially, <Link to="/materials/industrial-compostable" className="text-primary-600 hover:underline">certified compostable food packaging</Link>.
                    </p>
                  </div>
                  
                  <p className="text-sm text-neutral-600 italic">
                    Commercial composting is where Achievepack's solutions fit into the circular economy. Industrial facilities are the infrastructure that makes <Link to="/compostable/biodegradable-vs-compostable" className="text-primary-600 hover:underline">compostable packaging</Link> actually useful.
                  </p>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* Key Environmental Benefits */}
          <section className="mb-16">
            <ImageTextRow
              image={IMAGES.benefits}
              imageAlt="Benefits grid showing environmental advantages of composting - reduced emissions, soil health, water retention"
              imageCaption="Key environmental benefits of composting organic waste"
              imageLeft={true}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <TreeDeciduous className="h-7 w-7 text-green-600" />
                  Key Environmental Benefits of Composting
                </h2>
                <p className="text-neutral-700 mb-4">
                  When organic waste is composted instead of landfilled or incinerated, several benefits compound:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-neutral-800">Reduces dependence on synthetic fertilizers</strong>
                      <p className="text-sm text-neutral-600">Compost returns nutrients—nitrogen, phosphorus, potassium—back into the soil ecosystem naturally.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-neutral-800">Lowers municipal waste management costs</strong>
                      <p className="text-sm text-neutral-600">When organic material is composted instead of hauled to landfills, cities save significantly on disposal costs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-neutral-800">Reduces greenhouse gas emissions</strong>
                      <p className="text-sm text-neutral-600">Composting one ton of organic waste avoids the equivalent of <strong>1.4 metric tons of CO2</strong>.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Droplets className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-neutral-800">Improves water retention</strong>
                      <p className="text-sm text-neutral-600">Finished compost can increase soil's water-holding capacity by approximately <strong>20%</strong>.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Recycle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-neutral-800">Reduces pressure on landfills</strong>
                      <p className="text-sm text-neutral-600">The U.S. has over 2,600 active landfills, many reaching capacity. Composting diverts a major portion of the waste stream.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ImageTextRow>
          </section>

          {/* Where Compostable Packaging Fits In */}
          <section className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Package className="h-8 w-8 text-green-600" />
              Where Compostable Packaging Fits In
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p>
                This is the critical juncture. For most of its history, "<Link to="/compostable/biodegradable-vs-compostable" className="text-primary-600 hover:underline">compostable packaging</Link>" was a niche concept because infrastructure didn't exist. But as commercial composting facilities have expanded—especially in food-forward cities and regions with strong organics diversion programs—compostable packaging has moved from theoretical to practical.
              </p>
              
              <div className="bg-white p-6 rounded-xl border my-6">
                <h4 className="font-semibold text-neutral-800 mb-3">Here's the scenario:</h4>
                <p className="text-neutral-700">
                  A coffee roaster sells their beans in a compostable pouch. A consumer brews the coffee, composts the used grounds and the residue-lined bag together. In a city with curbside food waste collection that partners with a commercial compost facility, both the food scraps and the compostable pouch travel to the same facility. At 140°F+, the <Link to="/company/certificates" className="text-primary-600 hover:underline">certified compostable structure</Link> breaks down in 90 to 180 days alongside the organic matter, becoming part of the finished compost.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <h4 className="font-semibold text-amber-800 mb-2">The crucial qualifier:</h4>
                <p className="text-amber-800">
                  <strong>Certification and clarity matter.</strong> Compostable packaging should meet established standards like <Link to="/company/certificates" className="text-primary-600 hover:underline">EN 13432</Link> (European standard) or <strong>ASTM D6400</strong> (U.S. standard). These certifications ensure the material will actually compost in industrial conditions and won't leave microplastics or toxins behind. Vague "biodegradable" claims don't cut it; they often mislead consumers and facilities.
                </p>
              </div>

              <p className="mt-6">
                When a brand chooses certified compostable packaging and clearly labels it, they're making a tangible choice: turning food-soiled packaging—items that can't be effectively recycled because they're contaminated—into feedstock for the composting system. It's elegant, practical, and increasingly viable in markets with developed organics infrastructure.
              </p>
            </div>
          </section>

          {/* Achievepack's Compostable Solutions */}
          <section className="mb-16">
            <ImageTextRow
              image={IMAGES.heroIllustration}
              imageAlt="Achievepack certified compostable packaging solutions for brands"
              imageCaption="Achievepack® designs certified compostable packaging for modern retail requirements"
              imageLeft={false}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <Award className="h-7 w-7 text-primary-600" />
                  Achievepack's Compostable Solutions for Brands
                </h2>
                <div className="text-neutral-700 space-y-4">
                  <p>
                    This is where your brand strategy meets environmental impact. At Achievepack, we design <Link to="/materials/industrial-compostable" className="text-primary-600 hover:underline">compostable packaging</Link> specifically for brands that want this story to be real.
                  </p>
                  <p>
                    We build structures certified to <Link to="/company/certificates" className="text-primary-600 hover:underline">EN 13432 and ASTM D6400</Link>—the gold standards:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary-600" />
                      <span><strong>For coffee roasters:</strong> Degassing valves to preserve freshness</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary-600" />
                      <span><strong>For snack makers:</strong> High-barrier structures that keep products crisp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary-600" />
                      <span><strong>For pet treats & supplements:</strong> Resealable closures and custom sizes</span>
                    </li>
                  </ul>
                  <p className="text-sm text-neutral-600 italic">
                    All of it compostable. All of it designed for modern retail and supply chain requirements.
                  </p>
                  <div className="bg-green-100 p-4 rounded-lg border border-green-200 mt-4">
                    <p className="text-green-800 font-medium">
                      <strong>Low minimum order quantities</strong> mean even small roasters and emerging brands can access certified compostable packaging. You don't have to be Nestlé to get certified compostable packaging. You just have to decide it matters.
                    </p>
                  </div>
                </div>
              </div>
            </ImageTextRow>
          </section>

          {/* The Business Case */}
          <section className="mb-16 bg-neutral-100 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Target className="h-8 w-8 text-primary-600" />
              The Business Case
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border">
                <CheckCircle className="h-6 w-6 text-green-500 mb-3" />
                <h4 className="font-semibold text-neutral-800 mb-2">Works With Infrastructure</h4>
                <p className="text-sm text-neutral-600">Your packaging now works with the <Link to="/compostable/composting-services" className="text-primary-600 hover:underline">composting systems in your market</Link>, not against them.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border">
                <Shield className="h-6 w-6 text-green-500 mb-3" />
                <h4 className="font-semibold text-neutral-800 mb-2">Authentic Marketing</h4>
                <p className="text-sm text-neutral-600">You can market authentically—"This pouch composts at your local commercial facility"—without greenwashing.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border">
                <CheckCircle className="h-6 w-6 text-green-500 mb-3" />
                <h4 className="font-semibold text-neutral-800 mb-2">Customer Satisfaction</h4>
                <p className="text-sm text-neutral-600">Your customers feel good about their purchase. Your supply chain stays competitive.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border">
                <Leaf className="h-6 w-6 text-green-500 mb-3" />
                <h4 className="font-semibold text-neutral-800 mb-2">Reduced Environmental Cost</h4>
                <p className="text-sm text-neutral-600">You're reducing the overall environmental cost of your product.</p>
              </div>
            </div>
          </section>

          {/* Practical Steps for Brands */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <Building2 className="h-8 w-8 text-primary-600" />
              Practical Steps for Brands Supporting Composting
            </h2>
            <p className="text-neutral-700 mb-6">If you're interested in making this real, here's where to start:</p>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-semibold text-neutral-800 mb-2">1. Clarify and Label</h4>
                <p className="text-neutral-600">On your packaging, clearly state the certification standard (<Link to="/company/certificates" className="text-primary-600 hover:underline">EN 13432 or ASTM D6400</Link>) and provide plain-language instructions: "Compost at your local commercial facility. Compostable in 90–180 days." No mystery. No greenwashing.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-semibold text-neutral-800 mb-2">2. Partner with Local Infrastructure</h4>
                <p className="text-neutral-600">Research <Link to="/compostable/composting-services" className="text-primary-600 hover:underline">composting facilities in your key markets</Link>. Some accept food-soiled packaging; others don't yet. Understand the landscape. If your facility is curious about compostable packaging, offer samples. This partnership strengthens the entire system.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-semibold text-neutral-800 mb-2">3. Tell the Full Story</h4>
                <p className="text-neutral-600">Use your website, social media, and customer communications to explain <Link to="/compostable/biodegradable-vs-compostable" className="text-primary-600 hover:underline">why composting matters</Link> and why you chose compostable packaging. Talk to your customers. Most want to make the right choice; they just need context.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-semibold text-neutral-800 mb-2">4. Measure and Iterate</h4>
                <p className="text-neutral-600">Track customer feedback, facility acceptance, and any market feedback on your packaging. Real-world data will inform your next iteration.</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16 bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Conclusion: Composting Is a Business Opportunity, Not Just a Disposal Solution
            </h2>
            <div className="space-y-4 text-green-100">
              <p>
                Composting is often framed as a back-end waste management question. But for brands, it's actually a <strong className="text-white">front-end strategy question</strong>. When you choose compostable packaging and communicate it clearly, you're participating in a regenerative system. You're reducing emissions, supporting soil health, and building a credible sustainability story.
              </p>
              <p>
                The infrastructure is growing. Commercial composting capacity in North America is <Link to="/compostable/composting-services" className="text-white underline hover:text-green-200">expanding every year</Link>. Standards are clear. Consumer interest is real. And the environmental gains are measurable.
              </p>
              <p className="font-semibold text-white text-lg">
                Your packaging can work with nature, not against it. Let's make that real in 2026.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16 bg-white rounded-2xl p-8 border-2 border-primary-200">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 text-center">
              Ready to Make the Move?
            </h2>
            <p className="text-neutral-700 text-center mb-8 max-w-2xl mx-auto">
              If you're ready to explore whether compostable packaging makes sense for your product and market—let's talk. Achievepack offers <strong>free 30-minute consultations</strong> to help you navigate the options.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <button
                onClick={openCalendly}
                className="flex flex-col items-center gap-3 bg-primary-600 text-white p-6 rounded-xl hover:bg-primary-700 transition"
              >
                <Calendar className="h-8 w-8" />
                <span className="font-semibold">Book a Consultation</span>
                <span className="text-sm text-primary-200">Review your current packaging</span>
              </button>
              <Link
                to="/store"
                className="flex flex-col items-center gap-3 bg-green-600 text-white p-6 rounded-xl hover:bg-green-700 transition"
              >
                <Package className="h-8 w-8" />
                <span className="font-semibold">Request Samples</span>
                <span className="text-sm text-green-200">Feel the difference</span>
              </Link>
              <Link
                to="/materials"
                className="flex flex-col items-center gap-3 bg-neutral-800 text-white p-6 rounded-xl hover:bg-neutral-900 transition"
              >
                <Leaf className="h-8 w-8" />
                <span className="font-semibold">Explore Materials</span>
                <span className="text-sm text-neutral-400">Full range of options</span>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
              <a href="mailto:hello@achievepack.com" className="flex items-center justify-center gap-2 text-primary-600 hover:underline">
                <Mail className="h-5 w-5" />
                hello@achievepack.com
              </a>
              <span className="hidden sm:inline text-neutral-300">|</span>
              <Link to="/company/contact" className="flex items-center justify-center gap-2 text-primary-600 hover:underline">
                <Phone className="h-5 w-5" />
                Contact Us
              </Link>
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/compostable/composting-services" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
                <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">Composting Service Finder</h4>
                <p className="text-sm text-neutral-600 mt-1">Find facilities near you</p>
              </Link>
              <Link to="/compostable/biodegradable-vs-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
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
              <Link to="/materials/home-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition group">
                <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">Home Compostable</h4>
                <p className="text-sm text-neutral-600 mt-1">TÜV OK Home certified</p>
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
                <Leaf className="h-8 w-8 text-white" />
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

      {/* Footer */}
      <Footer />
    </>
  )
}

export default CompostingBenefitsPage
