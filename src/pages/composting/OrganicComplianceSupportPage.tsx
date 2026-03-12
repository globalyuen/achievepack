import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, Shield, CheckCircle, Package, Download, X, ChevronRight, Mail, Phone, Calendar, FileCheck } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'

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

const OrganicComplianceSupportPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  return (
    <>
      <Helmet>
        <title>Organic & Non-GMO Compliance Support | Achieve Pack</title>
        <meta name="description" content="Supporting Your Brand’s Organic Integrity with Compostable Packaging. Download the Transparency Kit with Non-GMO affidavits and TÜV certificates for your auditor." />
        <link rel="canonical" href="https://achievepack.com/composting/organic-compliance-support" />
        <meta name="keywords" content="organic compliance support, Non-GMO packaging, organic certification packaging, USDA Organic packaging, compostable stand-up pouches, Achieve Pack organic support" />
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
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Compliance Guide
                  </span>
                  <span className="text-green-300 text-sm">5 min read</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  Organic & Non-GMO Compliance Support
                </h1>
                <p className="text-lg md:text-xl text-green-100 mb-6 font-medium">
                  Supporting Your Brand's Organic Integrity with Compostable Packaging
                </p>
                <p className="text-green-200 mb-8 max-w-xl">
                  We provide a full Transparency Kit to ensure your auditors have everything they need for a seamless approval process.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#compliance-kit"
                    className="flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
                  >
                    <Download className="h-5 w-5" />
                    Download Kit
                  </a>
                  <button
                    onClick={openCalendly}
                    className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    <Calendar className="h-5 w-5" />
                    Auditor Consultation
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <ClickableImage
                  src="/imgs/seo-photos/organic/eco_friendly_organic_pouch.webp"
                  alt="Premium lifestyle product photography of a compostable flat-bottom pouch with organic ingredients"
                  className="rounded-2xl shadow-2xl w-full"
                  caption="Maintain your organic certification with certified non-GMO compostable packaging."
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
              <li><Link to="/composting/composting-benefits" className="hover:text-primary-600">Composting</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li className="text-neutral-900 font-medium">Organic Compliance</li>
            </ol>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="space-y-16">
            
            {/* Commitment Section */}
            <section className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <Leaf className="h-8 w-8 text-green-600" />
                1. Our Commitment to Organic Brands
              </h2>
              <div className="prose prose-lg max-w-none text-neutral-700">
                <p>
                  At <strong>Achieve Pack</strong>, we understand that for organic-licensed brands, the packaging is just as important as the product inside. To maintain your certification (USDA Organic, EU Organic, HKORC, etc.), your packaging must meet strict "Non-GMO" and "Non-Toxicity" standards.
                </p>
                <div className="bg-green-50 p-6 rounded-xl border border-green-200 mt-6 md:flex items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-800 mb-2">The Transparency Kit</h3>
                    <p className="text-green-700 m-0">
                      We provide a full suite of compliance documents so you don't have to scramble when the auditor requests your Organic System Plan update.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <a href="#compliance-kit" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">Get Documents</a>
                  </div>
                </div>
              </div>
            </section>

            {/* Non-GMO Advantage */}
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-primary-600" />
                2. The Non-GMO Advantage (Sugarcane Base)
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                Our compostable stand-up pouches are primarily derived from <strong>Chinese Sugarcane</strong>. This natural feedstock offers significant advantages:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition">
                  <h4 className="font-bold text-lg mb-3 text-neutral-900">Inherently Non-GMO</h4>
                  <p className="text-neutral-600">There is currently no genetically modified (GM) sugarcane commercially grown in China. This means our raw materials are naturally compliant with organic "excluded methods" requirements (unlike standard corn-based PLA from GMO regions).</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition">
                  <h4 className="font-bold text-lg mb-3 text-neutral-900">Traceable Sourcing</h4>
                  <p className="text-neutral-600">We source our biomass locally to ensure a low carbon footprint and clear chain of custody. Everything is documented.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition">
                  <h4 className="font-bold text-lg mb-3 text-neutral-900">Zero Contamination</h4>
                  <p className="text-neutral-600">Our manufacturing facilities follow strict protocols to ensure no cross-contamination with GMO-derived resins or standard plastics.</p>
                </div>
              </div>
            </section>

            {/* Certificates Table */}
            <section className="bg-neutral-900 text-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-green-400" />
                3. Certifications & Proof (The "Auditor's Checklist")
              </h2>
              <p className="text-neutral-300 mb-8">When your organic certifier asks for proof, we provide the following documents:</p>
              
              <div className="overflow-x-auto bg-neutral-800 rounded-xl border border-neutral-700">
                <table className="w-full text-left">
                  <thead className="bg-black text-neutral-300">
                    <tr>
                      <th className="p-4 border-b border-neutral-700 font-semibold">Document</th>
                      <th className="p-4 border-b border-neutral-700 font-semibold">What it Proves</th>
                      <th className="p-4 border-b border-neutral-700 font-semibold">Why it Matters for Organic</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-700">
                    <tr className="hover:bg-neutral-800/50 transition">
                      <td className="p-4 font-medium text-green-400">Non-GMO Declaration</td>
                      <td className="p-4 text-neutral-300">Confirms the feedstock (sugarcane) is natural.</td>
                      <td className="p-4 text-neutral-300">Meets "Excluded Methods" rules.</td>
                    </tr>
                    <tr className="hover:bg-neutral-800/50 transition">
                      <td className="p-4 font-medium text-green-400">TÜV / BPI Certificate</td>
                      <td className="p-4 text-neutral-300">Proves 100% compostability & heavy metal limits.</td>
                      <td className="p-4 text-neutral-300">Ensures no soil toxicity.</td>
                    </tr>
                    <tr className="hover:bg-neutral-800/50 transition">
                      <td className="p-4 font-medium text-green-400">Food Safety (FDA/EU)</td>
                      <td className="p-4 text-neutral-300">Confirms the material is safe for food contact.</td>
                      <td className="p-4 text-neutral-300">Prevents chemical migration.</td>
                    </tr>
                    <tr className="hover:bg-neutral-800/50 transition">
                      <td className="p-4 font-medium text-green-400">Technical Data Sheet</td>
                      <td className="p-4 text-neutral-300">Details the exact layer structure of the pouch.</td>
                      <td className="p-4 text-neutral-300">Full transparency for your OSP.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                <Package className="h-8 w-8 text-primary-600" />
                4. Frequently Asked Questions
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                  <h4 className="font-bold text-lg mb-3 text-neutral-900">Q: Can I use your pouches for 1kg+ heavy items like Protein Powder?</h4>
                  <p className="text-neutral-600"><strong>A:</strong> Yes. Our high-barrier compostable films are engineered for high tensile strength. We offer specific 1kg stand-up pouch dimensions with reinforced seals to prevent bursting during shipping.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                  <h4 className="font-bold text-lg mb-3 text-neutral-900">Q: Do you use "Metalized" layers?</h4>
                  <p className="text-neutral-600"><strong>A:</strong> For organic customers requiring high oxygen barriers (to keep powder fresh), we use <strong>ALOX or SIOX coatings</strong> or specific compostable barrier films that provide the protection of foil without the environmental impact of traditional aluminum.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm md:col-span-2">
                  <h4 className="font-bold text-lg mb-3 text-neutral-900">Q: How do I add your packaging to my Organic System Plan (OSP)?</h4>
                  <p className="text-neutral-600"><strong>A:</strong> Simply download our <strong>Compliance Kit</strong> below and submit it to your certifying body. Most auditors accept our Non-GMO Affidavit and TÜV certificates as sufficient proof of compliance.</p>
                </div>
              </div>
            </section>

            {/* Download Kit */}
            <section id="compliance-kit" className="bg-primary-50 rounded-2xl p-8 border border-primary-100 text-center">
              <h2 className="text-3xl font-bold text-primary-900 mb-4 flex items-center justify-center gap-3">
                <Download className="h-8 w-8" />
                5. Download Your Compliance Kit
              </h2>
              <p className="text-lg text-primary-700 mb-8 max-w-2xl mx-auto">
                Click the links below to access our latest certifications. Host this info for your auditor or download directly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/docs/Non_GMO_Material_Declaration.pdf" download className="bg-white border-2 border-primary-200 hover:border-primary-500 text-primary-800 px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold transition hover:shadow-md">
                  <FileCheck className="h-5 w-5 text-primary-600" />
                  Non-GMO Declaration (PDF)
                </a>
                <a href="/docs/TUV_Austria_OK_Compost.pdf" download className="bg-white border-2 border-primary-200 hover:border-primary-500 text-primary-800 px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold transition hover:shadow-md">
                  <Shield className="h-5 w-5 text-primary-600" />
                  TÜV / BPI Certificate (PDF)
                </a>
                <a href="/docs/Material_Safety_Data_Sheet_MSDS.pdf" download className="bg-white border-2 border-primary-200 hover:border-primary-500 text-primary-800 px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold transition hover:shadow-md">
                  <Package className="h-5 w-5 text-primary-600" />
                  Safety Data (MSDS) (PDF)
                </a>
              </div>
              
              <div className="mt-12 pt-8 border-t border-primary-200">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Need physical samples for your review?</h3>
                <Link to="/store" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition text-lg">
                  Request a Sample Kit
                </Link>
                <p className="text-sm text-neutral-500 mt-4">Ships in 24 hours. Includes material samples and full documentation.</p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default OrganicComplianceSupportPage
