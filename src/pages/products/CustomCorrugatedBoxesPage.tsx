import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  Package, CheckCircle, ChevronDown, Award, Lightbulb, Box
} from 'lucide-react'

const p = 'seoPages.pages.customCorrugatedBoxes'

const CustomCorrugatedBoxesPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'custom printed corrugated mailer boxes',
    'eco-friendly shipping boxes',
    'b2b subscription box packaging',
    'e-commerce shipping boxes',
    'custom mailer box supplier',
    'printed shipping cartons',
    'durable subscription boxes',
    'custom flute packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What is the difference between E-flute and B-flute for mailer boxes?'),
      a: t(`${p}.faq.a1`, 'E-flute is approximately 1.5mm thick, offering excellent printability and crush resistance, making it the standard for premium e-commerce mailer boxes. B-flute is thicker (approx. 3mm), providing superior cushioning for heavier or more fragile items but with slightly lower print resolution for fine details.')
    },
    {
      q: t(`${p}.faq.q2`, 'Can I print on both the inside and outside of the corrugated box?'),
      a: t(`${p}.faq.a2`, 'Yes, dual-sided printing is highly recommended for subscription boxes to create a premium unboxing experience. We utilize high-resolution digital and flexographic printing to ensure vibrant colors and sharp text on both the exterior and interior kraft or white liners.')
    },
    {
      q: t(`${p}.faq.q3`, 'Are your custom printed corrugated boxes eco-friendly?'),
      a: t(`${p}.faq.a3`, 'Absolutely. Our corrugated boards are made from 60-90% recycled post-consumer waste. We use water-based, non-toxic soy inks for printing, ensuring the final mailer box is 100% kerbside recyclable and biodegradable.')
    },
    {
      q: t(`${p}.faq.q4`, 'What is the minimum order quantity (MOQ) for custom mailer boxes?'),
      a: t(`${p}.faq.a4`, 'For digitally printed custom corrugated mailer boxes, our MOQ starts at just 500 units. For larger scale flexographic runs, we recommend 3,000+ units for the best economy of scale.')
    },
    {
      q: t(`${p}.faq.q5`, 'Do I need packaging tape to seal a corrugated mailer box?'),
      a: t(`${p}.faq.a5`, 'Our standard mailer boxes feature a front-tuck closure with dust flaps that provide a secure friction fit. However, for e-commerce transit, we recommend adding a tamper-evident sealing sticker or upgrading to our "Peel & Seal" adhesive strip design for tape-free fulfillment.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'Premium Custom Printed Corrugated Mailer Boxes'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>The ultimate unboxing experience starts with a structural masterpiece.</strong> {t(`${p}.sections.overview.desc`, 'Custom printed corrugated mailer boxes are the backbone of modern e-commerce and subscription brands. They offer the perfect balance of structural integrity for transit and a high-end canvas for your brand identity.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'Whether you are shipping cosmetics, electronics, apparel, or curated subscription goods, a generic brown box simply doesn\'t cut it anymore. Our custom mailer boxes are engineered to protect your products from the rigorous logistics network while delivering a "wow" moment when your customer opens the flap.')}</p>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/custom-corrugated-mailer-boxes-guide.jpg"
              alt="Premium custom printed corrugated mailer boxes used for e-commerce subscription packaging"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'High-quality custom printed corrugated mailer box featuring vibrant flexographic printing and sturdy E-flute material for premium unboxing.')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: t(`${p}.sections.painPoints.title`, '5 Pain Points & Solutions for E-Commerce Box Packaging'),
      icon: <Lightbulb className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 mb-4">{t(`${p}.sections.painPoints.desc`, 'Shipping physical products directly to consumers introduces unique logistical and branding challenges. Here is how we engineer solutions for the most common corrugated packaging pain points.')}</p>
          
          <div className="grid gap-4">
            {[
              {
                problem: t(`${p}.sections.painPoints.p1`, 'Crushed or Damaged Products During Transit'),
                solution: t(`${p}.sections.painPoints.s1`, 'We engineer mailer boxes using ECT-32 rated E-flute or B-flute corrugated board. The fluted medium acts as a shock absorber, specifically calibrated to withstand the 50+ lb crush weights commonly experienced in courier sorting facilities, ensuring your product arrives intact.')
              },
              {
                problem: t(`${p}.sections.painPoints.p2`, 'Dull or Flaking Print on Kraft Surfaces'),
                solution: t(`${p}.sections.painPoints.s2`, 'Printing directly onto porous kraft paper often results in muted colors. We solve this by applying a premium bleached white top-liner with an aqueous (AQ) coating before digital or flexographic printing. This ensures Pantone-accurate color matching and prevents ink rub-off during transit.')
              },
              {
                problem: t(`${p}.sections.painPoints.p3`, 'Slow Fulfillment and High Labor Costs'),
                solution: t(`${p}.sections.painPoints.s3`, 'Standard boxes require manual taping which drastically slows down fulfillment lines. We offer "Crash-Lock" auto-bottom bases and integrated "Peel & Seal" adhesive tear strips. This reduces assembly and packing time from 45 seconds to under 10 seconds per box.')
              },
              {
                problem: t(`${p}.sections.painPoints.p4`, 'Excessive Dimensional Weight (DIM) Shipping Charges'),
                solution: t(`${p}.sections.painPoints.s4`, 'Shipping carriers charge by dimensional weight, meaning oversized boxes cost significantly more. We precision-engineer custom die-cut templates tailored exactly to your product dimensions down to the millimeter, minimizing void fill requirements and optimizing your DIM weight tier.')
              },
              {
                problem: t(`${p}.sections.painPoints.p5`, 'Lack of Unboxing "Wow" Factor'),
                solution: t(`${p}.sections.painPoints.s5`, 'A plain exterior fails to build anticipation. We utilize dual-sided litho-lamination printing, allowing for minimalist branding on the outside to deter porch pirates, while revealing vibrant, full-color brand messaging and flood-coated interiors the moment the dust flaps are opened.')
              }
            ].map((item, i) => (
              <div key={i} className="bg-neutral-900 rounded-xl p-5 border border-neutral-800 text-neutral-300">
                <div className="flex items-start gap-3">
                  <div className="text-2xl font-black text-neutral-700">0{i + 1}</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">{item.problem}</h4>
                    <div className="flex items-start gap-2 bg-neutral-800/50 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-neutral-300 leading-relaxed"><span className="text-green-400 font-semibold">Solution:</span> {item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'expert',
      title: t(`${p}.sections.expert.title`, 'Expert Author'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-neutral-900 to-primary-900 rounded-2xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">RW</div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{t(`${p}.sections.expert.name`, 'Ryan Wong')}</h3>
              <p className="text-primary-300 text-sm">{t(`${p}.sections.expert.title2`, 'Co-Founder & Chief Packaging Engineer')}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">14+ Years Packaging Engineering</span>
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">Structural Design Specialist</span>
              </div>
              <p className="text-neutral-300 text-sm mt-3 italic">
                {t(`${p}.sections.expert.bio`, '"When designing corrugated mailers, the die-line is everything. A millimeter discrepancy in the dust flaps will cause the box to bulge or pop open during transit. We always recommend creating a physical structural prototype using the exact ECT-32 E-flute board before committing to a mass printing run. Furthermore, always ensure your background artwork bleeds at least 3mm past the cutting lines to prevent white edges on your final folded box."')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: t(`${p}.sections.faq.title`, 'Frequently Asked Questions'),
      icon: <Box className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="group bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200">
              <button
                className="flex items-center justify-between w-full p-5 cursor-pointer hover:bg-neutral-100 transition text-left"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span className="font-semibold text-neutral-900 pr-4">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-neutral-500 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-neutral-700 text-sm">{faq.a}</div>
              )}
            </div>
          ))}

          {/* JSON-LD FAQ Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })}} />
        </div>
      )
    }
  ]

  // GEO Targeted Content Block
  const geoBlock = (
    <div className="sr-only">
      <h2>Custom Corrugated Mailer Boxes for Global Markets</h2>
      <p>Whether you are shipping B2B subscription boxes across North America or fulfilling local e-commerce orders in Europe, our custom printed corrugated mailer boxes ensure structural integrity. Available with custom inserts, E-flute, and B-flute configurations for optimal shipping rates. Connect with Achieve Pack for bulk custom packaging manufacturing.</p>
    </div>
  )

  return (
    <>
      <DualDomainSEOHead 
        title={t(`${p}.meta.title`, 'Custom Corrugated Mailer Boxes | Achieve Pack')}
        description={t(`${p}.meta.desc`, 'Premium custom printed corrugated boxes. Perfect for subscription boxes, e-commerce, and heavy retail items. Explore E-flute and B-flute options.')}
        keywords={keywords}
        ogImage="/imgs/store/products/custom-corrugated-mailer-boxes-guide.jpg"
      />
      <SEOPageLayout
        title={t(`${p}.meta.title`, 'Custom Printed Corrugated Boxes | E-commerce & Subscription Packaging')}
        description={t(`${p}.meta.desc`, 'Premium custom printed corrugated boxes. Perfect for subscription boxes, e-commerce, and heavy retail items. Explore E-flute and B-flute options.')}
        keywords={keywords}
        sections={sections}
        heroTitle={t(`${p}.hero.title`, 'Custom Printed Corrugated Mailer Boxes')}
        heroSubtitle={t(`${p}.hero.subtitle`, 'Engineered for the rigors of e-commerce and the elegance of retail. Our corrugated boxes offer unmatched protection and unboxing experiences.')}
        heroImage="/imgs/store/products/custom-corrugated-mailer-boxes-guide.jpg"
      />
      {geoBlock}
    </>
  )
}

export default CustomCorrugatedBoxesPage
