import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  Package, CheckCircle, ChevronDown, Award, Lightbulb, Shield
} from 'lucide-react'

const p = 'seoPages.pages.cottonPaperFoilPouch'

const CottonPaperFoilPouchPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'premium cotton paper foil pouch',
    'silk paper packaging',
    'artisan coffee side gusset pouch',
    'high-barrier textured pouch',
    'luxury tea packaging',
    'foil lined paper bags',
    'custom printed silk paper pouch',
    'specialty coffee bags'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What makes cotton paper different from standard kraft paper packaging?'),
      a: t(`${p}.faq.a1`, 'Cotton paper (also known as silk paper) is manufactured using cotton fibers rather than wood pulp. This gives the pouch an incredibly soft, textured, and tactile feel that screams luxury. It is significantly more tear-resistant than standard kraft paper and absorbs ink beautifully for a muted, artisanal aesthetic.')
    },
    {
      q: t(`${p}.faq.q2`, 'Does the cotton paper pouch have high oxygen and moisture barriers?'),
      a: t(`${p}.faq.a2`, 'Yes. While the exterior is breathable cotton paper, the interior is laminated with a high-barrier aluminum foil (AL) or metalized polyester (VMPET) layer, combined with a food-grade PE sealing layer. This ensures absolute protection against oxygen, moisture, and UV light, preserving the freshness of coffee and tea for 12+ months.')
    },
    {
      q: t(`${p}.faq.q3`, 'Can I add a one-way degassing valve to the cotton paper pouch?'),
      a: t(`${p}.faq.a3`, 'Absolutely. For specialty roasted coffee, we can integrate a one-way degassing valve directly into the cotton paper foil laminate. The valve allows roasted beans to release CO2 without letting ambient oxygen into the bag.')
    },
    {
      q: t(`${p}.faq.q4`, 'Is it possible to hot foil stamp a logo onto the cotton paper surface?'),
      a: t(`${p}.faq.a4`, 'Yes! Hot foil stamping (in gold, silver, copper, or rose gold) looks exceptional against the matte, textured surface of the cotton paper. It creates a stunning high-contrast, premium focal point for your brand logo.')
    },
    {
      q: t(`${p}.faq.q5`, 'What pouch shapes are available for the cotton paper material?'),
      a: t(`${p}.faq.a5`, 'The most popular format for this material is the traditional Side Gusset Pouch (often used for premium artisan coffee and loose-leaf tea). However, we can also manufacture it as a Stand-Up Zipper Pouch or a Block Bottom Bag.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'Premium Silk Cotton Paper Foil Laminated Pouches'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Packaging you can feel before you even open it.</strong> {t(`${p}.sections.overview.desc`, 'In the world of specialty coffee, artisanal tea, and luxury confections, sensory experience is everything. Our Premium Silk Cotton Paper Foil Laminated Pouches provide an unparalleled tactile experience that standard plastic or kraft paper simply cannot replicate.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'By fusing a textured, organic cotton paper exterior with an impenetrable interior foil (AL/VMPET) barrier, we have created a pouch that feels incredibly rustic and handcrafted on the outside, while delivering state-of-the-art freshness protection on the inside. Elevate your brand\'s perceived value instantly with packaging that demands to be touched.')}</p>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/premium-cotton-paper-foil-pouch-guide.jpg"
              alt="Premium artisan coffee side gusset pouch made of textured silk cotton paper with foil barrier"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'Luxury artisan side gusset pouch constructed from premium silk cotton paper with an internal foil barrier for maximum freshness.')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: t(`${p}.sections.painPoints.title`, '5 Pain Points & Solutions for Artisan Packaging'),
      icon: <Lightbulb className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 mb-4">{t(`${p}.sections.painPoints.desc`, 'Specialty roasters and luxury brands face the difficult challenge of balancing artisanal aesthetics with rigorous shelf-life requirements. Here is how our cotton paper foil pouches bridge that gap.')}</p>
          
          <div className="grid gap-4">
            {[
              {
                problem: t(`${p}.sections.painPoints.p1`, 'Loss of Flavor and Aroma in Paper Packaging'),
                solution: t(`${p}.sections.painPoints.s1`, 'Standard paper bags allow oxygen to permeate, turning specialty coffee stale in weeks. We laminate the breathable cotton paper to a 7-micron thick Aluminum Foil (AL) core, providing an Oxygen Transmission Rate (OTR) of essentially zero, locking in volatile aroma compounds for over a year.')
              },
              {
                problem: t(`${p}.sections.painPoints.p2`, 'Cheap "Plastic" Feel on Premium Products'),
                solution: t(`${p}.sections.painPoints.s2`, 'Glossy or matte plastic films often feel mass-produced, contradicting the "small-batch" artisanal message. Our external layer utilizes long-fiber silk cotton paper. The natural, uneven fibers create a tactile friction that immediately signals high-end, handcrafted quality to the consumer\'s fingertips.')
              },
              {
                problem: t(`${p}.sections.painPoints.p3`, 'Ink Bleeding or Fading on Uncoated Paper'),
                solution: t(`${p}.sections.painPoints.s3`, 'Printing intricate logos on highly textured, uncoated paper often results in ink spread or dull colors. We utilize specialized UV-cured flexographic inks that sit on top of the cotton fibers rather than soaking in, ensuring crisp typography and vibrant brand colors without sacrificing the paper\'s texture.')
              },
              {
                problem: t(`${p}.sections.painPoints.p4`, 'Paper Tearing or Puncturing from Hard Edges'),
                solution: t(`${p}.sections.painPoints.s4`, 'Sharp roasted coffee beans or loose-leaf tea stems can puncture weak kraft paper. The internal LLDPE (Linear Low-Density Polyethylene) sealing layer in our pouches provides exceptional puncture resistance, absorbing internal impacts and preventing the exterior paper layer from tearing.')
              },
              {
                problem: t(`${p}.sections.painPoints.p5`, 'Difficulty in Resealing Paper Bags'),
                solution: t(`${p}.sections.painPoints.s5`, 'Traditional side gusset paper bags are notoriously difficult for consumers to reseal tightly. We offer integrated tin-ties attached directly to the cotton paper surface, or we can format the material into a flat-bottom pouch with a premium front-pocket pocket zipper, ensuring effortless resealability and sustained freshness.')
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
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">Flexible Laminates Specialist</span>
              </div>
              <p className="text-neutral-300 text-sm mt-3 italic">
                {t(`${p}.sections.expert.bio`, '"Laminating textured cotton paper to aluminum foil requires highly specialized adhesive curing processes. Standard solvent-based lamination can trap gases in the textured pockets of the paper, leading to delamination (bubbling) over time. We utilize advanced solventless lamination running at very precise nip-roller pressures to ensure a permanent, flawless bond between the soft organic paper exterior and the rigid metallic barrier core."')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: t(`${p}.sections.faq.title`, 'Frequently Asked Questions'),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
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
      <h2>Premium Cotton Paper Foil Pouches for Artisan Brands</h2>
      <p>Source luxury packaging for your specialty coffee or artisan tea brand. Our premium silk cotton paper foil laminated side gusset pouches offer high barrier protection with a handcrafted tactile feel. Custom printed with hot foil stamping available. We supply roasters and tea blenders across the USA, UK, and Australia with high-end flexible packaging.</p>
    </div>
  )

  return (
    <>
      <DualDomainSEOHead 
        title={t(`${p}.meta.title`, 'Premium Cotton Paper Foil Pouch | Achieve Pack')}
        description={t(`${p}.meta.desc`, 'Luxury artisan coffee and tea pouches made from textured silk cotton paper with an inner foil barrier for maximum freshness and a premium tactile experience.')}
        keywords={keywords}
        ogImage="/imgs/store/products/premium-cotton-paper-foil-pouch-guide.jpg"
      />
      <SEOPageLayout
        title={t(`${p}.meta.title`, 'Premium Cotton Paper Foil Pouch | Artisan Packaging')}
        description={t(`${p}.meta.desc`, 'Luxury artisan coffee and tea pouches made from textured silk cotton paper with an inner foil barrier for maximum freshness and a premium tactile experience.')}
        keywords={keywords}
        sections={sections}
        heroTitle={t(`${p}.hero.title`, 'Premium Cotton Paper Foil Pouches')}
        heroSubtitle={t(`${p}.hero.subtitle`, 'Elevate your artisanal coffee and tea with packaging that demands to be touched. Textured silk paper exterior meets a high-barrier aluminum core for ultimate freshness.')}
        heroImage="/imgs/store/products/premium-cotton-paper-foil-pouch-guide.jpg"
      />
      {geoBlock}
    </>
  )
}

export default CottonPaperFoilPouchPage
