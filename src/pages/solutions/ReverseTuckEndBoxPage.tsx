import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  CheckCircle, ChevronDown, Calendar, ShoppingCart,
  Award, Shield, AlertTriangle, Leaf, Package, Wind, Sparkles, RefreshCw, Box
} from 'lucide-react'

const ReverseTuckEndBoxPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'reverse tuck end box',
    'straight tuck paper box',
    'custom double tuck box',
    'premium kraft paperboard box',
    'custom retail packaging boxes',
    'tuck flap folding carton',
    'fsc certified paper packaging',
    'eco friendly paper box'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Flap Bulging and Insecure Closure During Transit',
      solution: 'Standard tuck flaps often bow outward when filled with heavier items, compromising retail display. We engineer friction-fit reverse tuck closures with precise 0.5mm die-cut tolerances and friction locks, ensuring the flap snaps flush and stays closed during rough transit.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Paperboard Cracking on Score Lines During Assembly',
      solution: 'Low-grade paperboard cracks at the fold lines, revealing unsightly white fibers. Our premium 300-350gsm FSC-certified Kraft and C1S paperboard utilizes long-fiber construction and humidity-controlled scoring presses, allowing sharp 90-degree folds without microscopic tearing.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Slow Manual Fulfillment & Assembly Bottlenecks',
      solution: 'Complex box structures slow down fulfillment teams. The reverse tuck end box (RTE) features a friction-fit bottom and top closure that snaps together instantly. Our pre-glued side seams allow operators to "pop and fill" up to 30% faster than standard auto-bottom boxes.',
      icon: <RefreshCw className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Print Color Shifts and Registration Inconsistencies',
      solution: 'Printing directly on raw Kraft paper often mutes colors. For high-fidelity branding, we apply a bio-based opaque white underprint beneath CMYK layers on Kraft, or utilize high-gloss white paperboard with digital registration tolerances of <0.1mm for perfectly aligned gradients.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Lack of Eco-Friendly Certification for Retail Buyers',
      solution: 'Modern retail buyers demand documented sustainability. Every batch of our paper boxes can be verified with Forest Stewardship Council (FSC) chain-of-custody certificates, utilizing 100% water-based soy inks and repulpable aqueous coatings that do not hinder the paper recycling stream.',
      icon: <Leaf className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: 'What is the difference between Reverse Tuck End (RTE) and Straight Tuck End (STE) boxes?',
      a: 'In a Reverse Tuck End box, the top and bottom closure panels fold in opposite directions (one tucks from the front, one from the back). In a Straight Tuck End box, both panels fold in the same direction. RTE is more cost-effective as they nest perfectly on printing sheets, reducing paper waste.'
    },
    {
      q: 'Are your paper boxes certified for direct food contact?',
      a: 'We offer food-grade virgin Kraft and C1S (Coated One Side) paperboard with FDA-compliant barrier coatings (FDA 21 CFR 176.170) inside the box, making them safe for direct contact with dry foods, baked goods, and confectioneries.'
    },
    {
      q: 'What is the minimum order quantity (MOQ) for custom printed tuck boxes?',
      a: 'On Pouch Eco, our digital short-run printing for paper boxes starts at just 100 pieces per design, perfect for artisan testing. For Achieve Pack enterprise clients, offset printing begins at 5,000 pieces for maximum wholesale cost efficiency.'
    },
    {
      q: 'Can I add custom windows or foil stamping to the box?',
      a: 'Yes! We support custom die-cut PET/PLA transparent windows so customers can see your product. We also offer premium surface finishes including hot foil stamping (gold, silver, rose gold), spot UV gloss, and soft-touch matte lamination.'
    },
    {
      q: 'Do I need to glue the boxes myself?',
      a: 'No. All our reverse tuck end and straight tuck end boxes are precision die-cut, folded, and side-seam glued at our facility. They ship flat to save you freight costs, and you simply pop them open and tuck the ends to assemble.'
    }
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Reverse Tuck End Box Packaging | Straight Tuck Folding Cartons',
    image: 'https://achievepack.com/imgs/store/products/reverse-tuck-end-paper-box-hero.jpg',
    author: {
      '@type': 'Person',
      name: 'Ryan Wong',
      jobTitle: 'Chief Packaging Engineer',
      url: 'https://achievepack.com/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Achieve Pack',
      logo: {
        '@type': 'ImageObject',
        url: 'https://achievepack.com/imgs/logo-achievepack-dark.png'
      }
    },
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0]
  }

  return (
    <SEOPageLayout>
      <DualDomainSEOHead
        title={isPouchDomain
          ? "Custom Reverse Tuck End Boxes | Low MOQ Paper Packaging"
          : "Wholesale Reverse Tuck End Paper Boxes | Folding Cartons | Achieve Pack"
        }
        description={isPouchDomain
          ? "Design custom reverse tuck end paper boxes for your artisan brand. 100% recyclable Kraft & FSC paperboard. Low MOQ digital printing starting at 100 pcs."
          : "Engineer premium retail paper packaging with precision die-cut Reverse Tuck End (RTE) folding cartons. FSC-certified, FDA-compliant, high-volume offset printing."
        }
        keywords={keywords.join(', ')}
        ogImage="/imgs/store/products/reverse-tuck-end-paper-box-hero.jpg"
      />

      {/* Semantic GEO Block */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((f, i) => (
            <article key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{f.q}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{f.a}</p>
              </div>
            </article>
          ))}
        </section>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-neutral-900 border-b border-white/10">
        <div className="absolute inset-0 bg-[url('/imgs/pattern-dots.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/20 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-neutral-800 border border-neutral-700 rounded-full px-4 py-1.5 mb-8">
              <span className="text-primary-400">
                <Box className="w-4 h-4" />
              </span>
              <span className="text-neutral-300 text-sm font-medium tracking-wide uppercase">
                Folding Cartons & Paper Boxes
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Precision-Engineered <span className="text-primary-400">Reverse Tuck End Boxes</span> for Premium Retail.
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Eliminate crushed corners and floppy closures. Our structural paperboard folding cartons snap perfectly into place with zero glue required by your fulfillment team, combining lightning-fast assembly with ultra-rigid FSC-certified eco-protection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto bg-primary-600 hover:bg-primary-500 text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-primary-500/25 flex items-center justify-center">
                <span>Request Box Samples</span>
                <ShoppingCart className="w-5 h-5 ml-2" />
              </Link>
              <button
                onClick={openCalendly}
                className="w-full sm:w-auto bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white font-semibold py-4 px-8 rounded-xl transition-all flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2 text-primary-400" />
                <span>Book 1:1 Packaging Audit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Empathy Hook & Quick Answer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            We know the frustration of ordering hundreds of custom paper boxes, only to find that the flaps tear when you fold them, or they pop open on the retail shelf because the die-cut measurements were off by a millimeter. A cheap box makes your premium product look cheap, and slow box assembly burns through your operational margins. You need structural rigidity, precise locking friction, and beautiful printing that doesn't crack on the edges.
          </p>

          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl shadow-sm mb-12">
            <h3 className="text-xl font-bold text-neutral-900 mb-2 flex items-center">
              <CheckCircle className="w-5 h-5 text-primary-600 mr-2" />
              Quick Specs: Reverse Tuck End (RTE) Box
            </h3>
            <p className="text-neutral-700">
              The Reverse Tuck End Box is the most versatile folding carton in retail packaging. Built from FSC-certified Kraft or C1S paperboard (300-400gsm), it features friction-fit top and bottom flaps that fold in opposite directions. This layout nests tighter on printer sheets than Straight Tuck boxes, reducing raw material waste by up to 20% while delivering a 100% recyclable, plastic-free unboxing experience.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Visual Showcase */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-neutral-900/10 border border-neutral-200">
              <ClickableImage
                src="/imgs/store/products/reverse-tuck-end-paper-box-hero.jpg"
                alt="Premium 16:9 studio 3D mockup of a reverse tuck end paper box in dark green botanical print."
                className="w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-neutral-900 mb-6">
                Why Brands Choose Reverse Tuck End (RTE) Packaging
              </h2>
              <ul className="space-y-4">
                {[
                  { title: 'Lightning Fast Fulfillment', desc: 'Pre-glued side seams. Just pop open the flat-pack, tuck the bottom flap, fill your product, and lock the top. Zero glue or tape needed on the assembly line.' },
                  { title: 'Maximum Cost Efficiency', desc: 'The opposite-folding top and bottom flaps interlock like puzzle pieces on the raw paperboard sheet. This nests perfectly during cutting, meaning we waste less paper and you pay less per box.' },
                  { title: 'Retail Stackability', desc: 'Friction-fit friction locks create flat, seamless edges on the top and bottom panels, allowing perfect vertical stacking on boutique shelves without wobbling.' },
                  { title: '100% Curbside Recyclable', desc: 'Made from single-source virgin pulp or recycled Kraft fibers. Completely plastic-free and fully accepted in municipal paper recycling streams.' }
                ].map((item, i) => (
                  <li key={i} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="bg-primary-100 text-primary-700 rounded-full w-6 h-6 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900">{item.title}</h4>
                      <p className="text-neutral-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Pain Points & Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
              5 Paper Packaging Pain Points & Engineering Solutions
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We resolve the most common folding carton failures before they ever reach your fulfillment center.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((pt, i) => (
              <div key={i} className={`bg-neutral-900 border border-neutral-800 p-8 rounded-2xl ${i === 4 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-neutral-800 p-3 rounded-lg text-primary-400">
                    {pt.icon}
                  </div>
                  <span className="text-5xl font-display font-black text-neutral-800">{pt.num}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">{pt.problem}</h3>
                <div className="bg-neutral-800/50 p-4 rounded-xl border border-primary-500/20">
                  <span className="inline-block px-2 py-1 bg-primary-500/10 text-primary-400 text-xs font-bold uppercase tracking-wider rounded mb-2">
                    ✅ Engineered Solution
                  </span>
                  <p className="text-neutral-300 text-sm leading-relaxed">{pt.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Notebook */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-amber-50 border border-amber-200 p-8 rounded-2xl relative overflow-hidden shadow-lg shadow-amber-900/5">
            <div className="absolute -right-12 -top-12 text-amber-500/10">
              <Award className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🔬</span>
                From Ryan Wong's Engineering Notebook
              </h4>
              <p className="italic text-amber-800/90 text-lg leading-relaxed mb-6">
                "Many startups complain that their paper boxes pop open on store shelves. The culprit is almost always cheap die-cutting. If the cutting blade on the tuck flap is off by just 0.5mm, or the friction lock radius isn't calibrated to the exact paperweight (e.g. 350gsm vs 300gsm), the paper tension pushes the flap back out. 
                <br /><br />
                We combat this by calibrating our die-cut CAD files down to 0.1mm tolerances. Furthermore, if you are printing a dark, heavy ink coverage on the fold lines, the ink matrix hardens the paper fiber, making it brittle. In those cases, we deploy a soft-touch matte lamination or aqueous coating to act as a flexible hinge, preventing the dreaded white-cracking effect when you assemble the box."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center overflow-hidden border-2 border-amber-300 mr-4">
                  <img src="/imgs/ryan-wong-avatar.jpg" alt="Ryan Wong" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
                <div>
                  <p className="font-bold text-amber-900">Ryan Wong</p>
                  <p className="text-amber-700 text-sm">Co-Founder & Chief Packaging Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Diagram Showcase */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Structural Anatomy of a Premium Tuck Box</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Visualizing the material layers, mechanical closures, and final retail presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700">
              <ClickableImage
                src="/imgs/store/products/reverse-tuck-end-paper-box-material.jpg"
                alt="Cross-section diagram of premium Kraft paperboard used for packaging."
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-white">Material Composition</h3>
                <p className="text-neutral-400 text-sm">High-strength FSC-certified organic Kraft fibers layered with water-based eco-coatings. Provides immense stacking strength while remaining 100% biodegradable and recyclable.</p>
              </div>
            </div>
            
            <div className="bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700">
              <ClickableImage
                src="/imgs/store/products/reverse-tuck-end-paper-box-parts.jpg"
                alt="Macro close-up shot of the top flap and locking mechanism of a reverse tuck end paper box."
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-white">Precision Die-Cut Closures</h3>
                <p className="text-neutral-400 text-sm">Friction-fit side locks and clean scored edges. Designed to snap into place effortlessly during assembly, preventing accidental opening during fulfillment or transport.</p>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700">
              <ClickableImage
                src="/imgs/store/products/reverse-tuck-end-paper-box-app.jpg"
                alt="Retail shelf setting displaying stacked premium Kraft reverse tuck end paper boxes."
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-white">Retail Shelf Presentation</h3>
                <p className="text-neutral-400 text-sm">Clean architectural lines and stable flat surfaces allow for flawless vertical stacking and premium aesthetic blocking in luxury retail environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Product Relations */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">Related Custom Packaging</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore our range of custom folding cartons and rigid box solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/solutions/custom-boxes-catalog" className="group border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 block">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-neutral-100 flex items-center justify-center">
                <Box className="w-16 h-16 text-neutral-300" />
              </div>
              <h3 className="font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2">Custom Paper Boxes</h3>
              <p className="text-sm text-neutral-600">Explore all custom folding carton shapes including Auto-Bottom and Snap-Lock boxes.</p>
            </Link>
            <Link to="/products/custom-pouch" className="group border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 block">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-neutral-100 flex items-center justify-center">
                <Package className="w-16 h-16 text-neutral-300" />
              </div>
              <h3 className="font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2">Flexible Packaging</h3>
              <p className="text-sm text-neutral-600">Pair your folding cartons with primary flexible pouches like Doypacks or Flat Bottom bags.</p>
            </Link>
            <Link to="/solutions/compostable-packaging" className="group border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 block">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-neutral-100 flex items-center justify-center">
                <Leaf className="w-16 h-16 text-neutral-300" />
              </div>
              <h3 className="font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2">Compostable Materials</h3>
              <p className="text-sm text-neutral-600">Learn about our certified home-compostable barrier films and natural kraft paper materials.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
              Reverse Tuck End vs. Straight Tuck End
            </h2>
            <p className="text-neutral-600">
              Choosing the right folding carton architecture for your production run.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="py-4 px-6 font-bold text-neutral-900 border-b border-neutral-200">Specification</th>
                  <th className="py-4 px-6 font-bold text-primary-700 border-b border-neutral-200 bg-primary-50">Reverse Tuck End (RTE)</th>
                  <th className="py-4 px-6 font-bold text-neutral-900 border-b border-neutral-200">Straight Tuck End (STE)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="py-4 px-6 font-medium text-neutral-700">Flap Folding Direction</td>
                  <td className="py-4 px-6 text-neutral-600 bg-primary-50/30">Opposite (One front, one back)</td>
                  <td className="py-4 px-6 text-neutral-600">Same (Both fold to the back)</td>
                </tr>
                <tr className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="py-4 px-6 font-medium text-neutral-700">Sheet Layout Efficiency</td>
                  <td className="py-4 px-6 text-neutral-600 bg-primary-50/30 font-semibold text-green-600">High (Flaps nest tightly together)</td>
                  <td className="py-4 px-6 text-neutral-600">Lower (Requires more paper spacing)</td>
                </tr>
                <tr className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="py-4 px-6 font-medium text-neutral-700">Unit Cost</td>
                  <td className="py-4 px-6 text-neutral-600 bg-primary-50/30 font-semibold text-green-600">More Economical</td>
                  <td className="py-4 px-6 text-neutral-600">Slightly Higher</td>
                </tr>
                <tr className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="py-4 px-6 font-medium text-neutral-700">Aesthetic Front Panel</td>
                  <td className="py-4 px-6 text-neutral-600 bg-primary-50/30">Top flap edge visible on front</td>
                  <td className="py-4 px-6 text-neutral-600 font-semibold">Clean front panel (No raw edges)</td>
                </tr>
                <tr className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="py-4 px-6 font-medium text-neutral-700">Best Application</td>
                  <td className="py-4 px-6 text-neutral-600 bg-primary-50/30">Cosmetics, supplements, retail goods</td>
                  <td className="py-4 px-6 text-neutral-600">Luxury items with display windows</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">Technical FAQs</h2>
            <p className="text-neutral-600">
              Answers regarding our custom folding cartons and tuck boxes.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-primary-300">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-bold text-neutral-900 pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-200 flex-shrink-0 ${openFaq === i ? 'rotate-180 text-primary-600' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'pb-5 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-neutral-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready to Upgrade Your Retail Packaging?
          </h2>
          <p className="text-xl text-neutral-300 mb-10">
            Stop losing margin to slow box assembly and structural failures. Get precision die-cut Reverse Tuck End boxes engineered for your specific product dimensions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-primary-900/50">
              Get an Instant Quote
            </Link>
            <button
              onClick={openCalendly}
              className="w-full sm:w-auto bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-4 px-10 rounded-xl transition-all border border-neutral-700 flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Free Audit
            </button>
          </div>
        </div>
      </section>
    </SEOPageLayout>
  )
}

export default ReverseTuckEndBoxPage
