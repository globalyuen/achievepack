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

const p = 'seoPages.pages.customTuckBoxes'

const CustomTuckBoxesPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'custom printed tuck boxes',
    'retail carton packaging',
    'cosmetic box printing',
    'supplement box packaging',
    'custom retail packaging supplier',
    'auto bottom tuck boxes',
    'straight tuck end boxes',
    'foil stamping boxes'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What is the difference between Straight Tuck End (STE) and Reverse Tuck End (RTE)?'),
      a: t(`${p}.faq.a1`, 'In a Straight Tuck End box, both the top and bottom closure panels fold in the same direction, providing a clean front panel ideal for display. In a Reverse Tuck End box, the top flap folds in one direction and the bottom flap in the opposite direction. RTE is more efficient to lay out on a printing sheet, making it slightly more cost-effective.')
    },
    {
      q: t(`${p}.faq.q2`, 'When should I choose an Auto-Bottom box over a standard tuck end?'),
      a: t(`${p}.faq.a2`, 'An Auto-Bottom box features a pre-glued bottom base that automatically locks into place when the box is popped open. We highly recommend this for brands assembling 1,000+ units, as it drastically reduces labor time compared to manually folding tuck-end bases.')
    },
    {
      q: t(`${p}.faq.q3`, 'What premium finishes can be applied to tuck boxes?'),
      a: t(`${p}.faq.a3`, 'We offer a wide array of luxury finishing options including Spot UV coating, hot foil stamping (gold, silver, holographic), embossing/debossing, and soft-touch matte lamination to give your retail packaging a high-end tactile feel.')
    },
    {
      q: t(`${p}.faq.q4`, 'What paperboard weights do you offer for custom tuck boxes?'),
      a: t(`${p}.faq.a4`, 'We typically use 14pt (250gsm) to 24pt (400gsm) SBS (Solid Bleached Sulfate) paperboard, which provides a premium white surface for vibrant printing. We also offer 100% recycled Kraft board and metallic foil paperboard options.')
    },
    {
      q: t(`${p}.faq.q5`, 'Can you provide custom inserts for the tuck boxes?'),
      a: t(`${p}.faq.a5`, 'Yes! We precision-engineer custom inserts made from matching paperboard, molded pulp, or EVA foam to perfectly cradle your product, ensuring it remains secure and beautifully presented upon opening.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'Premium Custom Printed Retail Tuck Boxes'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Retail shelves are crowded. Your packaging needs to stand out immediately.</strong> {t(`${p}.sections.overview.desc`, 'Custom printed tuck boxes (folding cartons) are the industry standard for retail products, offering a smooth, premium surface for high-resolution graphics and luxury finishes.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'Whether you are packaging high-end cosmetics, dietary supplements, pharmaceuticals, or luxury consumer goods, our folding cartons are engineered to protect your product while communicating exceptional quality. From straight tuck ends to crash-lock auto-bottoms, we manufacture structural designs tailored to your fulfillment speed and aesthetic goals.')}</p>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/custom-tuck-boxes-retail-guide.jpg"
              alt="Premium custom printed retail tuck boxes for cosmetics and supplements with foil stamping"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'Premium custom printed retail tuck boxes featuring luxury finishes like foil stamping and straight tuck end design.')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: t(`${p}.sections.painPoints.title`, '5 Pain Points & Solutions for Retail Box Packaging'),
      icon: <Lightbulb className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 mb-4">{t(`${p}.sections.painPoints.desc`, 'Designing folding cartons for the retail environment involves balancing aesthetics with structural integrity. Here is how we solve the most common challenges.')}</p>
          
          <div className="grid gap-4">
            {[
              {
                problem: t(`${p}.sections.painPoints.p1`, 'Boxes Bulging or Tearing Under Product Weight'),
                solution: t(`${p}.sections.painPoints.s1`, 'Products like heavy glass jars (cosmetics) can cause standard 14pt boxes to bow or tear at the base. We engineer heavier 24pt (400gsm) SBS board with a reinforced 123-Bottom (Snap-Lock) or glued Auto-Bottom to support weights up to 1.5kg securely.')
              },
              {
                problem: t(`${p}.sections.painPoints.p2`, 'Scuffing and Fingerprints on Dark Packaging'),
                solution: t(`${p}.sections.painPoints.s2`, 'Dark printed backgrounds (black, navy) are highly susceptible to scuffing and fingerprints during transit and retail handling. We apply an anti-scuff matte lamination or a soft-touch velvet coating that repels oils and protects the ink layer, maintaining a pristine appearance.')
              },
              {
                problem: t(`${p}.sections.painPoints.p3`, 'Products Rattling or Moving Inside the Box'),
                solution: t(`${p}.sections.painPoints.s3`, 'A loose product feels cheap and risks damage. We design precision die-cut internal paperboard inserts or eco-friendly molded pulp trays that perfectly hug the contours of your product, providing a secure, high-end presentation upon unboxing.')
              },
              {
                problem: t(`${p}.sections.painPoints.p4`, 'Color Inconsistency Across Different Batches'),
                solution: t(`${p}.sections.painPoints.s4`, 'Brand colors shifting between production runs damages brand equity. We utilize Pantone (PMS) spot color printing alongside our CMYK process, employing spectrophotometers during the press run to ensure exact color fidelity (Delta E < 2) across every batch.')
              },
              {
                problem: t(`${p}.sections.painPoints.p5`, 'Time-Consuming Manual Assembly'),
                solution: t(`${p}.sections.painPoints.s5`, 'Standard Reverse Tuck End (RTE) boxes require packers to fold multiple flaps, increasing labor costs. By utilizing an Auto-Bottom structure, the base of the box forms instantly when popped open, reducing assembly time by up to 70% for large production lines.')
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
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">Retail Presentation Specialist</span>
              </div>
              <p className="text-neutral-300 text-sm mt-3 italic">
                {t(`${p}.sections.expert.bio`, '"When designing retail folding cartons, the scoring and folding lines must account for paperboard thickness. For a 24pt board, if you don\'t create double scores or leave adequate tolerance for folding, the ink at the edges will crack, exposing the white paper beneath. We mitigate this by scoring from the unprinted side and aligning the grain direction of the paperboard parallel to the main vertical folds, ensuring clean, sharp, crack-free edges."')}
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
      <h2>Custom Printed Retail Tuck Boxes for Global Brands</h2>
      <p>Elevate your cosmetic, supplement, and pharmaceutical products with premium custom printed tuck boxes. Featuring Straight Tuck End (STE) and Auto-Bottom designs for fast assembly, enhanced with spot UV and hot foil stamping. Reach out to Achieve Pack for high-quality retail folding carton manufacturing tailored to North American and European markets.</p>
    </div>
  )

  return (
    <>
      <DualDomainSEOHead 
        title={t(`${p}.meta.title`, 'Custom Printed Tuck Boxes | Achieve Pack')}
        description={t(`${p}.meta.desc`, 'Premium custom printed tuck boxes and folding cartons. Enhance your retail products with luxury finishes like spot UV, foil stamping, and auto-bottom designs.')}
        keywords={keywords}
        ogImage="/imgs/store/products/custom-tuck-boxes-retail-guide.jpg"
      />
      <SEOPageLayout
        title={t(`${p}.meta.title`, 'Custom Printed Tuck Boxes | Retail Carton Packaging')}
        description={t(`${p}.meta.desc`, 'Premium custom printed tuck boxes and folding cartons. Enhance your retail products with luxury finishes like spot UV, foil stamping, and auto-bottom designs.')}
        keywords={keywords}
        sections={sections}
        heroTitle={t(`${p}.hero.title`, 'Custom Printed Retail Tuck Boxes')}
        heroSubtitle={t(`${p}.hero.subtitle`, 'Command attention on the retail shelf with premium folding cartons featuring structural integrity, vibrant high-resolution printing, and luxury finishes.')}
        heroImage="/imgs/store/products/custom-tuck-boxes-retail-guide.jpg"
      />
      {geoBlock}
    </>
  )
}

export default CustomTuckBoxesPage
