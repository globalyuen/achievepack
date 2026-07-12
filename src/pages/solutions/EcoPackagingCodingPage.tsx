import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  CheckCircle, ChevronDown, Calendar, ShoppingCart,
  Award, Shield, AlertTriangle, Leaf, Package, Droplet, Recycle
} from 'lucide-react'

const p = 'seoPages.pages.ecoPackagingCoding'

const EcoPackagingCodingPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'eco packaging coding',
    'compostable pouch date coding',
    'sustainable packaging marking',
    'food safe ink coding eco pouch',
    'biodegradable bag barcode printing',
    'TTO coding compostable film',
    'QR code eco packaging',
    'recyclable pouch marking compliance'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Standard Solvent Inks Do Not Adhere to Bio-Based Films',
      solution: 'PLA (Polylactic Acid) and Kraft/PE compostable films have a surface energy below 38 dynes/cm — below the threshold for reliable solvent ink adhesion. The solution is to either corona-treat the coding area with a 48-dyne surface energy level immediately before printing, or switch to UV-curable inkjet inks that polymerize to the surface via light activation, regardless of dyne level.',
      icon: <Droplet className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Recycling Stream Contamination from Non-Recyclable Ink',
      solution: 'Many conventional inkjet inks contain pigments and resins that contaminate the polymer melt during mechanical recycling, reducing the recyclate quality grade from "Food Contact" to "Non-Food Contact." Use water-based or deinkable inks certified to RecyClass or APR protocol for recyclable pouches, ensuring the coding does not downgrade the recycling classification of the entire package.',
      icon: <Recycle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'TTO Ribbon Leaves Wax Residue on Compostable Film',
      solution: 'Standard wax TTO ribbons designed for PET/PE laminates transfer at 80–100°C, leaving a micro-wax residue layer on the compostable film surface that can inhibit the composting microorganism activity and invalidate EN 13432 certification claims. Use resin-only TTO ribbons validated for compostable surfaces, and request a certificate of conformity from your ribbon supplier confirming no wax content and biodegradable carrier film.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'QR Codes Print Blurry on Matte Kraft Surfaces',
      solution: 'Matte kraft fiber surfaces absorb ink unevenly, causing QR code modules to merge at the edges — failing digital verification at scan distances above 15cm. The solution is to specify a 35% larger QR code module size (minimum 2.5cm × 2.5cm for matte kraft), switch to a 600 DPI print resolution inkjet head, and designate a varnish spot-coat zone on the kraft film to provide a sealed, flat coding surface.',
      icon: <Shield className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Eco Packaging Claims Require Traceability Coding',
      solution: 'Greenwashing regulations under the EU Green Claims Directive (2024) require all environmental claims on packaging to be substantiated and traceable to a specific batch of certified raw materials. This means your lot number coding must link directly to your certification body\'s batch database (e.g., TUV Rhineland OK Compost Home lot, or Seedling-certified PLA supply chain). Implement a batch coding scheme that embeds the certification reference within the lot number format.',
      icon: <Leaf className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What coding method is best for compostable packaging?'),
      a: t(`${p}.faq.a1`, 'Thermal Transfer Overprinting (TTO) with resin-only (wax-free) ribbons is the most reliable method for compostable packaging. The resin formulation is available in biodegradable variants certified under EN 13432 and ASTM D6400, ensuring the coding material does not impede the compostability certification of the bag. For kraft-paper-based packaging, food-safe water-based inkjet systems using vegetable-oil-derived inks provide excellent adhesion without surface pre-treatment.')
    },
    {
      q: t(`${p}.faq.q2`, 'Can I print a QR code on a recyclable pouch?'),
      a: t(`${p}.faq.a2`, 'Yes, but the ink matters as much as the QR code itself. For mono-material recyclable PE or PP pouches, use inks certified to the APR (Association of Plastics Recyclers) Design Guide for Recyclability. These inks are specifically formulated to remain colourless in the melt phase during mechanical recycling, ensuring your QR-coded pouch retains its recyclability classification. Avoid carbon-black-based black inks for near-infrared (NIR) sorted streams, as NIR sorters cannot detect black pouches.')
    },
    {
      q: t(`${p}.faq.q3`, 'Does printing on eco packaging affect its environmental certifications?'),
      a: t(`${p}.faq.a3`, 'Yes, in some cases. Under EN 13432 (EU compostability standard), any material added to the packaging — including inks, adhesives, and coatings — must also pass compostability testing. If your printing ink contains synthetic pigments or petroleum-based resins, the certified compostable base film may lose its certification when combined with non-compostable inks. Always request a "Total Package Compostability" test certificate that covers both the film AND the printed ink layer.')
    },
    {
      q: t(`${p}.faq.q4`, 'What is the EU Green Claims Directive and how does it affect packaging coding?'),
      a: t(`${p}.faq.a4`, 'The EU Green Claims Directive (adopted 2024, enforcement 2026) requires all environmental marketing claims on products — including "compostable," "recyclable," "made from recycled content" — to be substantiated by third-party certified evidence and traceable to specific production batches. In practical terms, this means your packaging lot number must link to auditable supply chain records proving the eco claim for that specific batch. Generic eco labels without traceability codes will be classified as greenwashing and carry fines of up to 4% of annual EU revenue.')
    },
    {
      q: t(`${p}.faq.q5`, 'How do I make sure my date coding does not contaminate the recycling stream?'),
      a: t(`${p}.faq.a5`, 'Choose inks certified by RecyClass (EU) or APR (North America) for the specific polymer type of your pouch. RecyClass issues polymer-specific ink certification reports — e.g., "PE Film Compatible" — confirming the ink does not impact NIR sortability, flotation separation, or melt quality during PET or PE mechanical recycling. Request these certificates from your ink supplier before full production. Water-based inks on PE films typically perform best in wash-off and deinking trials.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'Why Eco Packaging Coding Is a Different Challenge'),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Eco packaging coding</strong> {t(`${p}.sections.overview.desc`, 'is the specialised practice of applying date codes, batch numbers, barcodes, and QR codes to sustainable flexible packaging — compostable pouches, mono-material recyclable bags, and kraft-based packaging — while preserving both the functional readability of the code and the environmental certification of the packaging material. It is a technically demanding field that sits at the intersection of printing chemistry, materials science, and regulatory compliance.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'What makes eco packaging coding uniquely challenging is that the very properties that make a packaging material sustainable — low surface energy (compostable PLA), paper fiber absorption (kraft), or recycling-stream compatibility (mono-PE) — are the same properties that make standard coding technologies unreliable. A date code printed with a conventional solvent ink on a compostable pouch can strip the packaging\'s EN 13432 compostability certification. A carbon-black ink on a recyclable PE pouch will render it undetectable to NIR sorting machines. These are not edge cases — they are routine failures that cost brands certification status and retailer compliance.')}</p>

          <div className="bg-primary-50 p-5 rounded-xl border border-primary-100 mt-4">
            <h4 className="font-semibold text-primary-800 mb-3">{t(`${p}.sections.overview.whyTitle`, 'Eco-Compatible Coding Methods at a Glance')}</h4>
            <ul className="space-y-2 text-sm">
              {[
                t(`${p}.sections.overview.why1`, '🖨️ Resin-Only TTO Ribbons: Wax-free, biodegradable-certified ribbons for compostable film surfaces — preserves EN 13432 compliance'),
                t(`${p}.sections.overview.why2`, '💧 Water-Based Inkjet: Vegetable oil-derived, VOC-free inks for kraft and paper-based surfaces — 100% compatible with home compost streams'),
                t(`${p}.sections.overview.why3`, '🔆 UV-Curable Inkjet: Instant light-cure inks for low-energy bio-film surfaces — no smearing, high resolution, APR-compatible formulations available'),
                t(`${p}.sections.overview.why4`, '⚡ Laser Etching: Removes the outer coating layer to create a permanent, ink-free mark — zero contamination of recycling or composting streams'),
                t(`${p}.sections.overview.why5`, '📱 Serialised QR Codes: 2D codes linking to batch traceability records — mandatory under EU Green Claims Directive 2026 enforcement'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/eco-packaging-coding-guide.jpg"
              alt="Compostable kraft stand-up pouch with QR code, date code, and eco certification logos"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'Compostable kraft pouch with legible date code, QR-code traceability link, and OK Compost Home certification seal — all achieved without compromising EN 13432 classification.')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'painpoints',
      title: t(`${p}.sections.painpoints.title`, '5 Eco Packaging Coding Pain Points & Solutions'),
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">{t(`${p}.sections.painpoints.intro`, 'These are the five critical coding challenges specific to sustainable flexible packaging — and the material-science-based solutions that solve each one without compromising eco certifications:')}</p>
          <div className="space-y-4 mt-4">
            {painPoints.map((pp, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-neutral-900 px-5 py-3 flex items-center gap-3">
                  <span className="text-primary-400 font-bold text-2xl font-mono">{pp.num}</span>
                  <div className="text-white">{pp.icon}</div>
                  <h4 className="font-semibold text-white text-sm">{pp.problem}</h4>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm font-semibold text-primary-700 mb-1">✅ Solution:</p>
                  <p className="text-sm text-neutral-700">{pp.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`, 'Ink & Coding Certification Reference Table'),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.certifications.intro`, 'Use this table to match your packaging material type to the correct coding technology and certification standard:')}</p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="text-left px-4 py-3">Packaging Material</th>
                  <th className="text-left px-4 py-3">Recommended Coding</th>
                  <th className="text-left px-4 py-3">Ink Certification Needed</th>
                  <th className="text-left px-4 py-3">Risk if Wrong Ink</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Compostable PLA Film', 'Wax-free TTO / Water-Based Inkjet', 'EN 13432 / ASTM D6400 ink cert', 'Loses compostability certification'],
                  ['Kraft Paper Bag', 'Water-Based Inkjet / Laser', 'FSC ink compatible, VOC-free', 'Ink bleed / QR code failure'],
                  ['Mono-PE Recyclable', 'APR-certified inkjet / TTO', 'APR Critical Guidance Protocol', 'NIR sorting failure, recycling downgrade'],
                  ['Mono-PP Recyclable', 'UV-curable inkjet / Laser', 'RecyClass PP-compatible', 'Contaminates polymer melt'],
                  ['PCR (Recycled Content)', 'UV-curable / TTO wax-resin', 'APR or RecyClass certified', 'Colour inconsistency on recycled surface'],
                  ['BioPE (Sugarcane PE)', 'Standard inkjet / TTO', 'Standard PE ink protocols', 'Minimal additional risk vs. fossil PE'],
                ].map(([material, coding, cert, risk], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                    <td className="px-4 py-3 font-medium">{material}</td>
                    <td className="px-4 py-3 text-primary-700">{coding}</td>
                    <td className="px-4 py-3 text-xs">{cert}</td>
                    <td className="px-4 py-3 text-red-600 text-xs">{risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">🔬 {t(`${p}.sections.certifications.notebookTitle`, "From Ryan Wong's Engineering Notebook")}</h4>
            <p className="text-sm text-amber-900 italic">
              {t(`${p}.sections.certifications.notebook`, '"The most expensive certification mistake I\'ve seen: a UK supplement brand printed date codes on their certified home-compostable PLA pouches using a standard Linx CIJ solvent ink — the same ink they\'d used on their conventional pouches for years. Their certification body (TUV Austria, OK Compost Home) revoked the certification on the printed lot because the ink failed the 90-day disintegration test. They had to destroy £280,000 worth of finished stock. The ink swap would have cost them £800 in a different ink cartridge." — Ryan Wong, Co-Founder')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'products',
      title: t(`${p}.sections.products.title`, 'Eco Packaging Products with Pre-Tested Coding Compatibility'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.products.intro`, 'Each of our eco packaging products ships with a Coding Compatibility Card documenting the recommended ink systems, surface dyne level, and any pre-treatment requirements:')}</p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              { label: 'Recyclable Side Gusset Bags', link: '/products/recyclable-side-gusset-bags', img: '/imgs/store/products/recyclable-side-gusset-hero.png', desc: 'Mono-PE recyclable. APR-certified ink compatible. Pre-designated 40×25mm rear panel code zone.' },
              { label: 'Eco Flat Bottom Pouch', link: '/products/eco-flat-bottom-pouch', img: '/imgs/store/products/eco-flat-bottom-hero.png', desc: 'BioPE or PCR film. UV-curable ink compatible. Wide flat base rear panel ideal for QR code + date code.' },
              { label: 'Recyclable Mono-PE Stand-Up', link: '/products/eco-stand-up-pouch-guide', img: '/imgs/store/products/eco-side-gusset-hero.png', desc: 'Mono-PE with corona-treated code zone. Tested with leading TTO ribbon suppliers. Dyne level ≥44.' },
            ].map(({ label, link, img, desc }, i) => (
              <div key={i} className="border border-neutral-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition">
                <img src={img} alt={label} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-neutral-800 text-sm mb-1">{label}</h4>
                  <p className="text-xs text-neutral-600 mb-3">{desc}</p>
                  <Link to={link} className="text-xs text-primary-600 hover:underline font-medium">View coding specs →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
            <p className="text-sm text-neutral-700">Related: <Link to="/solutions/food-coding-compliance" className="text-primary-600 hover:underline">Food Coding Compliance</Link> · <Link to="/solutions/packaging-line-automation" className="text-primary-600 hover:underline">Packaging Line Automation</Link> · <Link to="/products/premium-eco-packaging-comparison" className="text-primary-600 hover:underline">Premium Eco Packaging Comparison</Link></p>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: t(`${p}.sections.faq.title`, 'Frequently Asked Questions'),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
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
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">EN 13432 Compostability Expert</span>
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">RecyClass / APR Certified</span>
              </div>
              <p className="text-neutral-300 text-sm mt-3">
                {t(`${p}.sections.expert.bio`, 'Ryan has advised 200+ eco packaging brands on coding-compatible material selection, ink qualification testing, and compostability/recyclability certification preservation. He leads Achieve Pack\'s sustainable packaging R&D laboratory where new eco film and ink combinations are validated before customer production.')}
              </p>
              <button
                onClick={openCalendly}
                className="mt-4 flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white text-sm px-4 py-2 rounded-lg transition font-medium"
              >
                <Calendar className="h-4 w-4" />
                {t(`${p}.sections.expert.cta`, 'Book an Eco Coding Consultation')}
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`, 'Get Your Eco Pouch with Coding-Compatible Surface'),
      icon: <ShoppingCart className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-50 to-green-50 p-6 rounded-2xl border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-3">{t(`${p}.sections.cta.heading`, 'Every Achieve Pack eco pouch comes with ink compatibility documentation')}</h4>
          <p className="text-neutral-700 mb-5">{t(`${p}.sections.cta.desc`, 'We provide a Coding Compatibility Card with every eco pouch order, documenting surface dyne level, recommended ink systems, TTO ribbon compatibility, and any pre-treatment requirements. Request a free coding test sample to verify your equipment setup before production.')}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.bookBtn`, 'Request a Coding Test Sample')}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {t(`${p}.sections.cta.viewBtn`, 'Shop Eco Pouches')}
            </Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t(`${p}.seo.title`, 'Eco Packaging Coding Guide 2025 | Compostable & Recyclable Pouch Date Codes')}
        description={t(`${p}.seo.description`, 'Complete guide to eco packaging coding: ink compatibility for compostable PLA and recyclable mono-PE pouches, EU Green Claims compliance, QR code traceability, and certification-safe TTO coding solutions.')}
        keywords={keywords}
        schemaType="Article"
        ogImage="/imgs/store/products/eco-packaging-coding-guide.jpg"
      />

      <SEOPageLayout
        heroBgColor="#14532d"
        title={t(`${p}.seo.title`, 'Eco Packaging Coding Guide 2025 | Compostable & Recyclable Pouch Date Codes')}
        description={t(`${p}.seo.description`, 'Complete guide to eco packaging coding: ink compatibility for compostable PLA and recyclable mono-PE pouches, EU Green Claims compliance, QR code traceability, and certification-safe TTO coding solutions.')}
        keywords={keywords}
        heroTitle={t(`${p}.seo.heroTitle`, 'Eco Packaging Coding')}
        heroSubtitle={t(`${p}.seo.heroSubtitle`, 'Print Dates. Preserve Certifications. Maintain Recyclability. The Definitive Guide to Coding on Compostable, Recyclable, and Kraft Flexible Packaging.')}
        introSummary={t(`${p}.seo.introSummary`, 'Applying date codes, barcodes, and QR codes to eco-friendly flexible packaging requires different ink chemistry, coding technology, and certification awareness than conventional plastic pouches. The wrong ink on a compostable pouch strips its EN 13432 certification. The wrong barcode colour on a recyclable pouch makes it invisible to NIR sorting. This guide covers the five critical eco coding challenges and the engineering solutions to solve them without compromising your sustainability credentials.')}
        sections={sections}
        heroImage="/imgs/store/products/eco-packaging-coding-guide.jpg"
      />

      {/* GEO Hidden Semantic Block */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, i) => (
            <article key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{faq.q}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{faq.a}</p>
              </div>
            </article>
          ))}
        </section>
        <section data-ai-product="true">
          <h2>Eco Packaging Coding for Compostable and Recyclable Flexible Pouches</h2>
          <p>Topics: EN 13432 compostable ink, APR recyclable ink, RecyClass, TTO resin ribbon, water-based inkjet, UV-curable inkjet, laser etching, EU Green Claims Directive 2024, QR code traceability. Relevant to: compostable kraft bags, mono-PE recyclable pouches, PLA film pouches, BioPE packaging.</p>
        </section>
      </div>
    </>
  )
}

export default EcoPackagingCodingPage
