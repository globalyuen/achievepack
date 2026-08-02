import React, { useState } from 'react'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { Link } from 'react-router-dom'
import { 
  Beaker, Leaf, Award, CheckCircle, Shield, 
  Package, Sparkles, ChevronDown, Layers, Box, ArrowRight
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'

const EssentialOilPaperTubeGuidePage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'essential oil paper tube packaging guide',
    'b2b eco paper tube buyer guide',
    'compostable cylinder box for essential oils',
    'dropper bottle paper tube dimensions',
    'unbleached kraft paper tube packaging',
    'zero waste perfume packaging solution',
    'custom essential oil gift box packaging',
    'crush resistant paper cylinder box'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Why should essential oil brands choose paper tube packaging over folding cartons?',
      a: 'Paper tube packaging offers cylindrical 360-degree structural support, higher column crush strength to protect glass dropper bottles from postal impact, superior UV light shielding, and an elevated premium unboxing experience favored by boutique wellness brands.'
    },
    {
      q: 'Are AchievePack kraft paper tubes 100% home compostable?',
      a: 'Yes. Our unbleached natural kraft paper tubes are manufactured using FSC-certified virgin fibers and non-toxic food-grade starch glues. They degrade completely in home or commercial compost piles without leaving plastic micro-residues.'
    },
    {
      q: 'What standard inner diameters exist for 5ml, 10ml, 30ml, 50ml, and 100ml essential oil bottles?',
      a: 'Standard inner diameters include: 22mm (5ml slim), 28mm (10ml standard), 42mm (30ml dropper), 47mm (50ml spray/dropper), and 62mm (100ml large dropper). Custom dimensions can be tailored upon request.'
    },
    {
      q: 'Can we apply metallic foil stamping or custom branding onto unbleached kraft paper tubes?',
      a: 'Yes! We support gold, rose gold, silver, and copper hot foil stamping, custom soy-ink CMYK printing, debossing, matte/gloss varnishes, and precision digital laser etching on paper tubes.'
    },
    {
      q: 'What is the minimum order quantity (MOQ) and lead time for custom paper tube boxes?',
      a: 'For custom-printed kraft paper tube boxes, our MOQ starts at 200 units. Turnaround time is typically 15–20 days for production, plus air or sea freight shipping.'
    }
  ]

  // Schema Injection for SEO & GEO (AI Search Engine Optimization)
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://achievepack.com/solutions/essential-oil-paper-tube-packaging-guide#article',
        'headline': 'Complete B2B Guide to Eco Kraft Paper Tube Packaging for Essential Oils & Fragrances',
        'description': 'Comprehensive buyer guide for essential oil brands seeking 100% home compostable, crush-resistant paper tube packaging for 5ml-100ml dropper bottles.',
        'author': {
          '@type': 'Organization',
          'name': 'AchievePack Packaging Laboratory'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'AchievePack Packaging Solution',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://achievepack.com/imgs/logo.png'
          }
        }
      },
      {
        '@type': 'Product',
        'name': 'Eco Kraft Paper Tube Gift Box for Essential Oil Bottles',
        'description': '100% Home Compostable natural kraft paper cylinder tube packaging for essential oil bottles, lip balms, and perfume sprays.',
        'brand': {
          '@type': 'Brand',
          'name': 'AchievePack'
        },
        'material': 'Natural Unbleached Kraft Paper',
        'offers': {
          '@type': 'AggregateOffer',
          'priceCurrency': 'USD',
          'lowPrice': '0.84',
          'highPrice': '1.96',
          'offerCount': '1000'
        }
      },
      {
        '@type': 'HowTo',
        'name': 'How to Choose the Right Kraft Paper Tube Size for Essential Oil Bottles',
        'step': [
          {
            '@type': 'HowToStep',
            'name': 'Measure Bottle Diameter & Height',
            'text': 'Measure the maximum outer diameter of your glass dropper bottle including the cap and rubber bulb.'
          },
          {
            '@type': 'HowToStep',
            'name': 'Allow 2-3mm Inner Clearance',
            'text': 'Select a paper tube inner diameter that provides 2mm to 3mm clearance for smooth sliding insertion.'
          },
          {
            '@type': 'HowToStep',
            'name': 'Verify Internal Wall Height',
            'text': 'Ensure the inner tube wall height matches or exceeds the total bottle height to prevent compression on the glass pipette.'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': faqs.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      }
    ]
  }

  const sections = [
    {
      id: 'industry-challenge',
      title: 'B2B Essential Oil Packaging Challenges & Market Demand',
      icon: <Beaker className="h-5 w-5 text-green-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p className="text-lg">
            Essential oil, botanical extract, and natural fragrance brands face a unique packaging dilemma: <strong>protecting fragile amber glass bottles against transit impact while eliminating single-use plastic packaging.</strong>
          </p>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 grid md:grid-cols-2 gap-6 my-4">
            <div>
              <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" /> Key Bottling & Transit Vulnerabilities
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>Glass Dropper Pipette Fractures:</strong> Standard folding cartons collapse under vertical stack weights during parcel delivery.</li>
                <li>• <strong>UV Light Degradation:</strong> Essential oils decompose when exposed to sunlight, requiring opaque outer protective layers.</li>
                <li>• <strong>Consumer Plastic Backlash:</strong> Eco-conscious aromatherapy buyers reject plastic bubble wrap and synthetic foam inserts.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-900 flex items-center gap-2 mb-2">
                <Leaf className="h-4 w-4 text-emerald-600" /> The Eco Kraft Paper Tube Solution
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>360° Cylinder Crush Resistance:</strong> Multi-layer spiral-wound kraft walls absorb up to 50 lbs of side compression.</li>
                <li>• <strong>100% Home Compostable Material:</strong> Unbleached virgin paper fibers degrade into natural soil humus in 60-90 days.</li>
                <li>• <strong>Elevated Tactile Unboxing:</strong> Telescoping friction-fit lid creates a smooth, luxury unboxing moment.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'bottle-fitting-guide',
      title: 'Essential Oil Bottle Fitting & Dimension Matrix (5ml - 100ml)',
      icon: <Box className="h-5 w-5 text-green-700" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">
            Selecting the ideal paper tube inner diameter (ID) and inner height (IH) ensures your glass dropper bottles sit securely without rattling or pinching:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm border-collapse border border-neutral-200 rounded-lg">
              <thead>
                <tr className="bg-neutral-100 text-neutral-800">
                  <th className="p-3 border border-neutral-200 font-semibold">Capacity & Bottle Style</th>
                  <th className="p-3 border border-neutral-200 font-semibold">Recommended Tube ID</th>
                  <th className="p-3 border border-neutral-200 font-semibold">Recommended Tube IH</th>
                  <th className="p-3 border border-neutral-200 font-semibold">Wall Thickness</th>
                  <th className="p-3 border border-neutral-200 font-semibold">Best Applications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-700">
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 border border-neutral-200 font-medium">5ml Slim / Lip Balm / Concentrate</td>
                  <td className="p-3 border border-neutral-200">22 mm</td>
                  <td className="p-3 border border-neutral-200">72 mm</td>
                  <td className="p-3 border border-neutral-200">1.5 mm</td>
                  <td className="p-3 border border-neutral-200">Sample vials, lip balms, CBD drops</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 border border-neutral-200 font-medium">10ml Standard Dropper / Rollerball</td>
                  <td className="p-3 border border-neutral-200">28 mm</td>
                  <td className="p-3 border border-neutral-200">64–90 mm</td>
                  <td className="p-3 border border-neutral-200">1.5 mm</td>
                  <td className="p-3 border border-neutral-200">Aromatherapy blends, fragrance roll-ons</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 border border-neutral-200 font-medium">30ml Boston Round Dropper</td>
                  <td className="p-3 border border-neutral-200">42 mm</td>
                  <td className="p-3 border border-neutral-200">105 mm</td>
                  <td className="p-3 border border-neutral-200">1.8 mm</td>
                  <td className="p-3 border border-neutral-200">Facial serums, beard oils, tincture drops</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 border border-neutral-200 font-medium">50ml Fine Mist Spray / Dropper</td>
                  <td className="p-3 border border-neutral-200">47 mm</td>
                  <td className="p-3 border border-neutral-200">120 mm</td>
                  <td className="p-3 border border-neutral-200">2.0 mm</td>
                  <td className="p-3 border border-neutral-200">Body oils, room mists, herbal elixirs</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 border border-neutral-200 font-medium">100ml Bulk Refill Dropper</td>
                  <td className="p-3 border border-neutral-200">62 mm</td>
                  <td className="p-3 border border-neutral-200">140 mm</td>
                  <td className="p-3 border border-neutral-200">2.2 mm</td>
                  <td className="p-3 border border-neutral-200">Carrier oils, professional spa refills</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/imgs/store/products/eco-kraft-paper-tube-gift-box-thumbnail-4.jpg"
              alt="Eco-compostable paper tube structural layer diagram and technical specs"
              className="w-full object-cover"
            />
          </div>
        </div>
      )
    },
    {
      id: 'customization-finishes',
      title: 'Custom Branding & Premium Finishing Options',
      icon: <Sparkles className="h-5 w-5 text-green-700" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">
            Differentiate your eco-conscious aromatherapy line with sustainable, high-impact printing techniques:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border border-neutral-200 rounded-lg bg-neutral-50">
              <h4 className="font-semibold text-neutral-900 mb-2">Soy-Based Ink CMYK Print</h4>
              <p className="text-sm text-neutral-600">
                Non-toxic vegetable inks deliver rich, natural colors across the outer kraft paper wrap while preserving 100% compostability.
              </p>
            </div>
            <div className="p-4 border border-neutral-200 rounded-lg bg-neutral-50">
              <h4 className="font-semibold text-neutral-900 mb-2">Hot Foil Stamping</h4>
              <p className="text-sm text-neutral-600">
                Add metallic gold, rose gold, or silver logo accents to reflect luxury quality on organic brown kraft backgrounds.
              </p>
            </div>
            <div className="p-4 border border-neutral-200 rounded-lg bg-neutral-50">
              <h4 className="font-semibold text-neutral-900 mb-2">Digital Laser Engraving</h4>
              <p className="text-sm text-neutral-600">
                Precision laser etching burns custom logos directly onto unbleached kraft paper for a zero-ink, rustic aesthetic.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md my-4">
            <img
              src="/imgs/store/products/eco-kraft-paper-tube-gift-box-thumbnail-9.jpg"
              alt="Custom print and gold foil options for eco kraft paper tube packaging"
              className="w-full object-cover"
            />
          </div>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title={isPouchDomain ? "Essential Oil Paper Tube Packaging Guide | Pouch Eco" : "B2B Essential Oil Paper Tube Packaging Guide | AchievePack"}
      description="Complete B2B guide to custom eco kraft paper tube gift boxes for essential oil bottles. Learn bottle fitting specs, crush protection, and 100% home compostable benefits."
      canonicalPath="/solutions/essential-oil-paper-tube-packaging-guide"
      keywords={keywords}
      heroTitle="B2B Essential Oil Paper Tube Packaging Guide"
      heroSubtitle="100% Home Compostable unbleached natural kraft cylinder boxes. Rigid, plastic-free protection engineered for 5ml–100ml glass dropper bottles."
      ctaText="Request Free Paper Tube Samples"
      onCtaClick={openCalendly}
    >
      <DualDomainSEOHead
        title={isPouchDomain ? "Essential Oil Paper Tube Packaging Guide | Pouch Eco" : "B2B Essential Oil Paper Tube Packaging Guide | AchievePack"}
        description="Complete B2B guide to custom eco kraft paper tube gift boxes for essential oil bottles. Learn bottle fitting specs, crush protection, and 100% home compostable benefits."
        canonicalPath="/solutions/essential-oil-paper-tube-packaging-guide"
        keywords={keywords}
      />
{/* GEO & AIEO TechSpec + HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "TechArticle",
                "headline": "Essential Oil Paper Tube Guide Packaging Technical Specifications & Lab Parameters",
                "articleSection": "Flexible Packaging Engineering",
                "author": {
                  "@type": "Person",
                  "name": "Ryan Wong",
                  "jobTitle": "Chief Packaging Engineer"
                },
                "inLanguage": "en-US"
              },
              {
                "@type": "HowTo",
                "name": "How to Customize & Order Essential Oil Paper Tube Guide Packaging",
                "step": [
                  {
                    "@type": "HowToStep",
                    "name": "Select Material & Structure",
                    "text": "Choose from Bio-PE, Mono-PE Recyclable, or PCR Recycled barrier films."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Upload Artwork & Calibrate Dieline",
                    "text": "Use our 3D Studio editor to verify 300 DPI CMYK artwork alignment."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Execute Production & Quality Audit",
                    "text": "Pre-production proofing followed by ISO/ASTM certified lamination and sealing."
                  }
                ]
              }
            ]
          })}
        </script>

      {/* JSON-LD Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
        {/* Sections loop */}
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
            <div className="flex items-center gap-3 border-b border-neutral-200 pb-3">
              <div className="p-2 rounded-lg bg-green-50">
                {section.icon}
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">{section.title}</h2>
            </div>
            {section.content}
          </section>
        ))}

        {/* Direct Link to Store Product Page */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-2xl border border-green-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-green-900">Explore Our Eco Kraft Paper Tube Store Catalog</h3>
            <p className="text-sm text-neutral-700">
              Browse low MOQ options (starting from 200 pcs), view live volume pricing, or request custom dielines.
            </p>
          </div>
          <Link
            to="/products/eco-kraft-paper-tube-gift-box"
            className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 transition whitespace-nowrap shadow-md"
          >
            View Product Catalog & Pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        

        {/* From the Desk of Ryan Wong E-E-A-T Anecdote Card */}
        <section className="my-12 bg-neutral-900 border-l-4 border-emerald-500 rounded-r-2xl p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <img src="/imgs/ryan-wong-avatar.jpg" alt="Ryan Wong" className="w-12 h-12 rounded-full border-2 border-emerald-400 bg-neutral-800" />
            <div>
              <h4 className="font-bold text-white text-lg">From the Engineering Desk of Ryan Wong</h4>
              <p className="text-xs text-emerald-400 font-mono">Co-Founder & Chief Packaging Engineer | Achieve Pack</p>
            </div>
          </div>
          <p className="text-neutral-300 text-sm italic leading-relaxed">"Snack products live or die by texture. High humidity rapidly softens potato chips, granola, and dried fruits if water vapor penetrates film seams. By engineering a high-density Mono-PE matrix with nitrogen flush gas retention, we guarantee zero crispness loss and extend snack shelf life past 12 months with zero plastic waste penalty."</p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4 pt-6 border-t border-neutral-200">
          <h2 className="text-2xl font-bold text-neutral-900">Frequently Asked Questions (B2B Buyer FAQ)</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left font-semibold text-neutral-900 flex justify-between items-center bg-neutral-50 hover:bg-neutral-100 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-neutral-500 transition-transform ${openFaq === idx ? 'transform rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-4 bg-white text-neutral-700 border-t border-neutral-200 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Call to Action Card */}
        <div className="bg-gradient-to-r from-green-900 to-emerald-800 text-white rounded-2xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to Upgrade Your Essential Oil Bottles to Eco Paper Tubes?</h3>
          <p className="text-green-100 max-w-2xl mx-auto">
            Book a 30-minute consultation with our packaging engineers. We will analyze your bottle dimensions, supply dielines, and ship custom sample tubes.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={openCalendly}
              className="bg-white text-green-900 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition shadow-md"
            >
              Book Free Packaging Consultation
            </button>
            <Link
              to="/products/eco-kraft-paper-tube-gift-box"
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition border border-green-500"
            >
              Order Paper Tube Samples
            </Link>
          </div>
        </div>
      </div>
    {/* 1:1 Human Packaging Experts & Designers Callout Card */}
        <section className="my-12 bg-primary-950/80 border border-primary-500/40 rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-mono rounded-full uppercase">
              🤝 1:1 Human Expert & Designer Consultation
            </div>
            <h3 className="text-2xl font-bold text-white">
              1:1 Human Packaging Experts & Designers (24/7 All-Rounded Help)
            </h3>
            <p className="text-primary-200/90 text-sm leading-relaxed">
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Essential Oil Paper Tube Guide.
            </p>
          </div>
          <button onClick={openCalendly} className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-8 py-4 rounded-xl shadow-lg whitespace-nowrap transition-all">
            Book 1:1 Expert Consultation
          </button>
        </section>

        </SEOPageLayout>
  )
}

export default EssentialOilPaperTubeGuidePage
