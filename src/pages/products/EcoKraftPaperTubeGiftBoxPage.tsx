import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  Package, CheckCircle, ChevronDown, Award, Lightbulb, ShieldCheck, Sparkles, Leaf
} from 'lucide-react'

const p = 'seoPages.pages.ecoKraftPaperTube'

const EcoKraftPaperTubeGiftBoxPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'eco kraft paper tube gift box',
    'essential oil bottle paper tube packaging',
    'compostable paper tube box',
    'custom paper cylinder for essential oil',
    'biodegradable lip balm paper tube',
    'unbleached kraft paper tube box',
    'zero waste essential oil box',
    'sustainable cylinder gift box packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What bottle sizes fit into these Eco Kraft Paper Tubes?'),
      a: t(`${p}.faq.a1`, 'Our kraft paper tube gift boxes are engineered for standard 5ml, 10ml, 15ml, 30ml, 50ml, and 100ml essential oil dropper bottles, rollerball bottles, fragrance vials, and cosmetic jars. Custom inner diameter and height variations are available.')
    },
    {
      q: t(`${p}.faq.q2`, 'Are these kraft paper tube boxes 100% home compostable?'),
      a: t(`${p}.faq.a2`, 'Yes! Made from 100% unbleached natural kraft paperboard and biodegradable plant-based starch adhesives, these cylinder boxes break down naturally in home or industrial composting environments without releasing toxic microplastics.')
    },
    {
      q: t(`${p}.faq.q3`, 'Can I customize the paper tube with my brand logo and foil stamping?'),
      a: t(`${p}.faq.a3`, 'Abolutely. We offer full CMYK soy-ink printing, metallic hot foil stamping (gold, rose gold, silver), debossing, and precision laser engraving directly onto the outer unbleached kraft wall.')
    },
    {
      q: t(`${p}.faq.q4`, 'Do paper tube boxes provide enough crush protection for fragile glass bottles?'),
      a: t(`${p}.faq.a4`, 'Yes. The spiral-wound cylindrical structure provides superior vertical and lateral wall strength compared to standard folding cartons. The dual-wall friction fit and rolled top rim absorb shock during postal transit.')
    },
    {
      q: t(`${p}.faq.q5`, 'What is the minimum order quantity (MOQ) and shipping calculation?'),
      a: t(`${p}.faq.a5`, 'Our MOQ starts at 200 units. Because paper tubes are light but bulky, volumetric shipping factors apply (calculated with our 4x bulky freight rate modifier for air/sea door-to-door delivery).')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'Eco Kraft Paper Tube Gift Box for Essential Oil Bottles'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Elevate essential oil and cosmetic packaging with 100% compostable paper tubes.</strong> {t(`${p}.sections.overview.desc`, 'Designed for wellness, essential oil, fragrance, and organic skincare brands, our unbleached kraft paper tube gift boxes deliver rigid protection with zero plastic waste.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'Each cylinder features multi-layer spiral-wound kraft paperboard, smooth rolled rims, and a snug telescoping friction fit that protects glass dropper bottles from impact and UV light exposure.')}</p>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <ClickableImage
              src="/imgs/store/products/eco-kraft-paper-tube-gift-box-thumbnail-2.jpg"
              alt="Eco Kraft Paper Tube Gift Box range for essential oil bottles"
              className="w-full object-cover"
              caption={t(`${p}.sections.overview.imgCaption`, 'AchievePack 100% Home Compostable Kraft Paper Tube Box collection with precision fit for 10ml, 30ml, and 50ml dropper bottles.')}
            />
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t(`${p}.sections.features.title`, 'Key Technical Specifications & Features'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-neutral-200 p-4 rounded-lg bg-neutral-50">
              <h4 className="font-semibold text-neutral-900 flex items-center gap-2 mb-2">
                <Leaf className="h-4 w-4 text-green-600" />
                100% Biodegradable & Compostable
              </h4>
              <p className="text-sm text-neutral-600">
                Crafted from FSC-certified unbleached kraft virgin fibers and soy-based inks. 100% plastic-free and fully soil-decomposable.
              </p>
            </div>
            <div className="border border-neutral-200 p-4 rounded-lg bg-neutral-50">
              <h4 className="font-semibold text-neutral-900 flex items-center gap-2 mb-2">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                High Crush Resistance & Shock Absorbing
              </h4>
              <p className="text-sm text-neutral-600">
                Multi-ply rigid wall construction prevents glass breakage during courier shipping and protects light-sensitive essential oils.
              </p>
            </div>
            <div className="border border-neutral-200 p-4 rounded-lg bg-neutral-50">
              <h4 className="font-semibold text-neutral-900 flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-green-600" />
                Custom Branding & Gold Foil Options
              </h4>
              <p className="text-sm text-neutral-600">
                Enhance product presentation with precision hot foil stamping, custom printed labels, laser engraving, or full CMYK soy ink printing.
              </p>
            </div>
            <div className="border border-neutral-200 p-4 rounded-lg bg-neutral-50">
              <h4 className="font-semibold text-neutral-900 flex items-center gap-2 mb-2">
                <Package className="h-4 w-4 text-green-600" />
                Precision Bottle Fit (5ml - 100ml)
              </h4>
              <p className="text-sm text-neutral-600">
                Multiple inner diameter standard sizes available: 31mm, 42mm, 47mm, 50mm, and 62mm to fit amber glass droppers and rollerballs.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <ClickableImage
              src="/imgs/store/products/eco-kraft-paper-tube-gift-box-thumbnail-6.jpg"
              alt="Full size guide and specifications table for eco paper tubes"
              className="w-full object-cover"
            />
          </div>
        </div>
      )
    },
    {
      id: 'spec-table',
      title: t(`${p}.sections.specTable.title`, 'Size Guide & Dimensional Specifications'),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">
            Select standard sizes optimized for essential oil dropper bottles, perfume sprays, and salve jars:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse border border-neutral-200 rounded-lg">
              <thead>
                <tr className="bg-neutral-100 text-neutral-800">
                  <th className="p-3 border border-neutral-200 font-semibold">Bottle Capacity</th>
                  <th className="p-3 border border-neutral-200 font-semibold">Outer Height</th>
                  <th className="p-3 border border-neutral-200 font-semibold">Inner Height</th>
                  <th className="p-3 border border-neutral-200 font-semibold">Outer Diameter</th>
                  <th className="p-3 border border-neutral-200 font-semibold">Inner Diameter</th>
                  <th className="p-3 border border-neutral-200 font-semibold">Unit Weight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-700">
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 border border-neutral-200 font-medium">10ml Standard</td>
                  <td className="p-3 border border-neutral-200">59 mm</td>
                  <td className="p-3 border border-neutral-200">49 mm</td>
                  <td className="p-3 border border-neutral-200">31 mm</td>
                  <td className="p-3 border border-neutral-200">28 mm</td>
                  <td className="p-3 border border-neutral-200">11 g</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 border border-neutral-200 font-medium">10ml Tall (Dropper)</td>
                  <td className="p-3 border border-neutral-200">74 mm</td>
                  <td className="p-3 border border-neutral-200">64 mm</td>
                  <td className="p-3 border border-neutral-200">31 mm</td>
                  <td className="p-3 border border-neutral-200">28 mm</td>
                  <td className="p-3 border border-neutral-200">11 g</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 border border-neutral-200 font-medium">30ml Dropper</td>
                  <td className="p-3 border border-neutral-200">115 mm</td>
                  <td className="p-3 border border-neutral-200">105 mm</td>
                  <td className="p-3 border border-neutral-200">45 mm</td>
                  <td className="p-3 border border-neutral-200">42 mm</td>
                  <td className="p-3 border border-neutral-200">18 g</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 border border-neutral-200 font-medium">50ml Spray/Dropper</td>
                  <td className="p-3 border border-neutral-200">130 mm</td>
                  <td className="p-3 border border-neutral-200">120 mm</td>
                  <td className="p-3 border border-neutral-200">50 mm</td>
                  <td className="p-3 border border-neutral-200">47 mm</td>
                  <td className="p-3 border border-neutral-200">22 g</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 border border-neutral-200 font-medium">100ml Dropper</td>
                  <td className="p-3 border border-neutral-200">150 mm</td>
                  <td className="p-3 border border-neutral-200">140 mm</td>
                  <td className="p-3 border border-neutral-200">65 mm</td>
                  <td className="p-3 border border-neutral-200">62 mm</td>
                  <td className="p-3 border border-neutral-200">30 g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title={isPouchDomain ? "100% Home Compostable Kraft Paper Tube Box | Pouch Eco" : "Eco Kraft Paper Tube Gift Box for Essential Oil Bottles | AchievePack"}
      description="Custom unbleached eco kraft paper tube gift boxes for essential oil bottles, lip balms, serums and cosmetics. 100% home compostable, plastic-free & crush-resistant."
      canonicalPath="/products/eco-kraft-paper-tube-gift-box"
      keywords={keywords}
      heroTitle={t(`${p}.heroTitle`, 'Eco Kraft Paper Tube Gift Box for Essential Oil Bottles')}
      heroSubtitle={t(`${p}.heroSubtitle`, '100% Home Compostable unbleached natural kraft cylinder boxes. Rigid, plastic-free protection tailored for 5ml–100ml glass dropper bottles.')}
      ctaText={t(`${p}.ctaText`, 'Request Free Tube Samples & Quote')}
      onCtaClick={openCalendly}
    >
      <DualDomainSEOHead
        title={isPouchDomain ? "100% Home Compostable Kraft Paper Tube Box | Pouch Eco" : "Eco Kraft Paper Tube Gift Box for Essential Oil Bottles | AchievePack"}
        description="Custom unbleached eco kraft paper tube gift boxes for essential oil bottles, lip balms, serums and cosmetics. 100% home compostable, plastic-free & crush-resistant."
        canonicalPath="/products/eco-kraft-paper-tube-gift-box"
        keywords={keywords}
      />

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
        {/* Sections loop */}
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
            <div className="flex items-center gap-3 border-b border-neutral-200 pb-3">
              <div className="p-2 rounded-lg bg-primary-50">
                {section.icon}
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">{section.title}</h2>
            </div>
            {section.content}
          </section>
        ))}

        {/* Cross-Link Banner to Essential Oil B2B Guide */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm my-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-emerald-900">B2B Essential Oil Paper Tube Packaging Guide</h3>
            <p className="text-sm text-neutral-700">
              Read our comprehensive technical guide on glass dropper bottle fitting (5ml–100ml), crush resistance, and eco-luxury unboxing.
            </p>
          </div>
          <Link
            to="/solutions/essential-oil-paper-tube-packaging-guide"
            className="inline-flex items-center gap-2 bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-emerald-800 transition whitespace-nowrap shadow-md text-sm"
          >
            Read Essential Oil B2B Guide →
          </Link>
        </div>

        {/* Gallery grid of 10 AI images */}
        <section className="space-y-4 pt-6 border-t border-neutral-200">
          <h2 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary-600" />
            Product Gallery & Custom Printing Showcase
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div key={num} className="rounded-lg overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition">
                <ClickableImage
                  src={`/imgs/store/products/eco-kraft-paper-tube-gift-box-thumbnail-${num}.jpg`}
                  alt={`Eco Kraft Paper Tube Box View ${num}`}
                  className="w-full h-48 object-cover cursor-pointer"
                />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4 pt-6 border-t border-neutral-200">
          <h2 className="text-2xl font-bold text-neutral-900">Frequently Asked Questions</h2>
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

        {/* Bottom CTA Card */}
        <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white rounded-2xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to Package Your Oils in 100% Eco Kraft Paper Tubes?</h3>
          <p className="text-primary-100 max-w-2xl mx-auto">
            Order custom sample packs, verify cylinder tube dimensions, or get instant bulk pricing tailored to your brand.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={openCalendly}
              className="bg-white text-primary-900 px-6 py-3 rounded-lg font-bold hover:bg-primary-50 transition shadow-md"
            >
              Book a Free Design Consultation
            </button>
            <Link
              to="/store"
              className="bg-primary-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-600 transition border border-primary-500"
            >
              Explore Full Product Catalog
            </Link>
          </div>
        </div>
      </div>
    </SEOPageLayout>
  )
}

export default EcoKraftPaperTubeGiftBoxPage
