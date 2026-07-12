import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  CheckCircle, ChevronDown, Calendar, ShoppingCart,
  Award, Shield, AlertTriangle, Zap, FileText, Package, BarChart2
} from 'lucide-react'

const p = 'seoPages.pages.foodCodingCompliance'

const FoodCodingCompliancePage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'food packaging coding compliance',
    'date coding food pouches',
    'GS1 barcode flexible packaging',
    'food label regulatory requirements',
    'lot number coding packaging',
    'TTO TIJ inkjet food coding',
    'FDA food labeling compliance',
    'EU food information regulation'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Inkjet Ink Smearing on Eco / Compostable Films',
      solution: 'Compostable PLA and kraft films have low surface energy, causing standard solvent inks to bead or smear within seconds. The solution is to specify UV-curable inkjet or MEK-resistant ink formulations compatible with bio-based film surfaces, or switch to Thermal Transfer Overprinting (TTO) ribbons rated for bio-film contact.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Barcode Fails Retail Scan Verification',
      solution: 'AI-generated or low-resolution barcodes printed onto flexible pouches frequently fail ANSI/ISO scan verification due to bar width deviation and ink spread on matte finishes. Always supply your GS1-registered GTIN as a vector EPS file, and request a Grade A scan quality test certificate from your printer before shipment.',
      icon: <BarChart2 className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Missing Mandatory Fields Under EU Regulation 1169/2011',
      solution: 'EU food labels must display 14 mandatory elements, including allergen highlighting, net quantity in metric units, country of origin, best-before date, and storage conditions. Brands routinely miss the nutrition declaration format (per 100g/ml mandatory). Use the EU Food Information to Consumers (FIC) checklist and have legal counsel in your target market review before print.',
      icon: <FileText className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Date Codes Disappearing on High-Humidity Products',
      solution: 'Frozen food and refrigerated product pouches experience condensation that washes out water-based inkjet codes within days on shelf. The engineering fix is to apply hot-stamped or TTO-printed codes during the pouch-making stage rather than at the filling line, or use UV-cured inks that polymerize to an abrasion-resistant layer regardless of moisture exposure.',
      icon: <Zap className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Code Position Inconsistency on High-Speed Lines',
      solution: 'At speeds above 80 pouches/minute, registration drift causes date codes to print off-center or overlap the zipper closure area — making them unreadable and triggering retailer compliance rejections. Integrate a photoelectric sensor-triggered encoder synchronized to your filling machine PLC, and set a hard exclusion zone (min. 5mm from any heat seal or zipper).',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What information is legally required on food packaging in the EU?'),
      a: t(`${p}.faq.a1`, 'Under EU Regulation 1169/2011 (FIC), food packaging must display: product name, ingredients list with allergens highlighted, net quantity, best-before or use-by date, storage and use conditions, name and address of the food business operator, country of origin (for certain foods), nutrition declaration, and alcohol content where applicable. The minimum font size for mandatory information is 1.2mm (0.9mm on small packs below 80cm²).')
    },
    {
      q: t(`${p}.faq.q2`, 'What is the difference between TTO, TIJ, and CIJ coding for pouches?'),
      a: t(`${p}.faq.a2`, 'Thermal Transfer Overprinting (TTO) uses a heated printhead to transfer ink from a ribbon onto film — ideal for flexible packaging and eco films, producing high-resolution 300 DPI codes. Thermal InkJet (TIJ) uses cartridge-based ink dispensed by heat — fast changeover, good for matte kraft, but ink compatibility must be verified. Continuous InkJet (CIJ) sprays charged droplets — highest speed (up to 200 packs/min), but requires regular maintenance and can smear on certain eco film surfaces.')
    },
    {
      q: t(`${p}.faq.q3`, 'Can date codes be printed on compostable pouches?'),
      a: t(`${p}.faq.a3`, 'Yes, but standard oil-based inkjet inks will smear on bio-film surfaces. The recommended approach is UV-curable inkjet systems or TTO with wax-resin ribbons specifically formulated for bio-based PE and PLA films. Always conduct an ink adhesion test (tape pull test, ASTM D3359) before full production to ensure durability through the product shelf life.')
    },
    {
      q: t(`${p}.faq.q4`, 'What is a GS1 barcode and is it required for retail food products?'),
      a: t(`${p}.faq.a4`, 'GS1 barcodes (EAN-13 or UPC-A) are globally standardized product identification codes required for retail POS scanning. To use one, you must register with your local GS1 member organization and obtain a Company Prefix. The barcode must be printed as a scalable vector with a minimum 80% magnification and a light margin (quiet zone) of at least 3.63mm on each side. AI-generated barcodes CANNOT be used as they lack verified checksum digits.')
    },
    {
      q: t(`${p}.faq.q5`, 'How do I prevent date codes from fading on frozen food pouches?'),
      a: t(`${p}.faq.a5`, 'Use UV-cured inkjet or laser etching for frozen and refrigerated applications. Laser etching removes a thin surface layer of the film to create a permanent, ink-free mark — completely immune to moisture. For pouches with a matte OPP or kraft outer layer, TTO printing during pouch forming (before the filling line) creates a code beneath the seal layer, protecting it from surface abrasion and moisture throughout shelf life.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'Food Packaging Coding: Why Compliance Is Non-Negotiable'),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Food packaging coding compliance</strong> {t(`${p}.sections.overview.desc`, 'is the process of ensuring every piece of printed information on your flexible food pouch — from the date code to the barcode to the allergen declarations — meets the legal requirements of every market where you sell your product. Getting this wrong does not just cost you money in recalls and fines; it costs you retailer relationships that can take years to rebuild.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'In 2024 alone, the FDA issued over 3,400 food recall notices in North America, with mislabelling (including undeclared allergens and incorrect date formats) accounting for the single largest recall category. In the EU, equivalent notices under Regulation 1169/2011 continue to rise year-on-year as enforcement becomes more automated. For brands operating across multiple markets — APAC, North America, and Europe simultaneously — the coding compliance matrix can become overwhelmingly complex.')}</p>

          <div className="bg-primary-50 p-5 rounded-xl border border-primary-100 mt-4">
            <h4 className="font-semibold text-primary-800 mb-3">{t(`${p}.sections.overview.whyTitle`, 'Key Coding Elements Every Food Brand Must Control')}</h4>
            <ul className="space-y-2 text-sm">
              {[
                t(`${p}.sections.overview.why1`, '📅 Date Codes: Best Before (BB), Use By (UB), Manufactured Date — format varies by market (DD/MM/YYYY vs MM/DD/YYYY)'),
                t(`${p}.sections.overview.why2`, '📦 Batch / Lot Numbers: Mandatory for product traceability and recall management under GFSI, BRC, and SQF standards'),
                t(`${p}.sections.overview.why3`, '🔢 GS1 Barcodes: EAN-13 (Global), UPC-A (USA/Canada) — must be GS1-registered, not AI-generated'),
                t(`${p}.sections.overview.why4`, '⚠️ Allergen Statements: Bold/italic highlighting required for 14 major allergens under EU FIC, with "Contains:" declaration under FDA'),
                t(`${p}.sections.overview.why5`, '🌍 Country of Origin: Mandatory for meat, fish, honey, and fresh produce in EU; recommended for all food in most markets'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/food-coding-compliance-guide.jpg"
              alt="Industrial inkjet coding system printing date codes and batch numbers on food pouches"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'High-speed thermal transfer overprinting system coding date codes and lot numbers on food-grade flexible pouches at 120 units/min.')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'painpoints',
      title: t(`${p}.sections.painpoints.title`, '5 Packaging Coding Pain Points & Engineering Solutions'),
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">{t(`${p}.sections.painpoints.intro`, 'After working with 500+ food brands across coffee, supplements, pet food, and snacks, these are the five most common coding failures we see — and the proven engineering solutions to fix each one.')}</p>
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
      id: 'standards',
      title: t(`${p}.sections.standards.title`, 'Global Food Coding Regulatory Standards'),
      icon: <FileText className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.standards.intro`, 'Flexible pouch brands selling internationally must comply with multiple, sometimes conflicting, regulatory frameworks simultaneously. Here is a breakdown of the key standards:')}</p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="text-left px-4 py-3">Market</th>
                  <th className="text-left px-4 py-3">Regulation</th>
                  <th className="text-left px-4 py-3">Date Format</th>
                  <th className="text-left px-4 py-3">Key Requirement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['European Union', 'Reg. 1169/2011 (FIC)', 'DD/MM/YYYY', '14 mandatory elements, min. 1.2mm font'],
                  ['United States', 'FDA 21 CFR Part 101', 'MM/DD/YYYY', '"Best by" preferred, allergen "Contains:" format'],
                  ['United Kingdom', 'UK FIR 2014 (post-Brexit)', 'DD/MM/YYYY', 'Same as EU but UK-specific address required'],
                  ['Australia / NZ', 'FSANZ Standard 1.2.7', 'DD/MM/YYYY', 'Date mark + storage instructions mandatory'],
                  ['Canada', 'SFCR / Food and Drug Act', 'YYYY/MM/DD', 'Bilingual English/French labelling required'],
                  ['China', 'GB 7718-2011', 'YYYY/MM/DD', 'Production date + shelf life in Chinese mandatory'],
                ].map(([market, reg, date, req], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                    <td className="px-4 py-3 font-medium">{market}</td>
                    <td className="px-4 py-3 text-primary-700">{reg}</td>
                    <td className="px-4 py-3 font-mono text-xs">{date}</td>
                    <td className="px-4 py-3 text-neutral-600">{req}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">🔬 {t(`${p}.sections.standards.notebookTitle`, "From Ryan Wong's Engineering Notebook")}</h4>
            <p className="text-sm text-amber-900 italic">
              {t(`${p}.sections.standards.notebook`, '"One of the most expensive mistakes I see brands make is printing date codes in a single format for all markets. A client shipping the same SKU to both the UK and the US had their entire US shipment held at customs because their date code read "01/02/2025" — which US customs read as January 2nd (in the past) rather than February 1st (future date, as intended). The fix took one print run but the delay cost $40,000 in demurrage and emergency airfreight. Always use the unambiguous 4-character month abbreviation (e.g. 01 FEB 2025) for multi-market shipments." — Ryan Wong, Co-Founder')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'products',
      title: t(`${p}.sections.products.title`, 'Related Packaging Products'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.products.intro`, 'Our flexible packaging is pre-tested for compatibility with leading coding systems. These products are specifically suitable for inline TTO and TIJ date coding:')}</p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              { label: 'Eco Stand-Up Pouch', link: '/products/eco-stand-up-pouch-guide', img: '/imgs/store/products/eco-side-gusset-hero.png', desc: 'Mono-PE recyclable pouches pre-validated for TTO coding at speeds up to 120 ppm.' },
              { label: 'Side Gusset Coffee Bag', link: '/products/side-gusset-coffee-bag-packaging', img: '/imgs/store/products/side-gusset-coffee-bag-hero.png', desc: 'Kraft + PE side gusset bags with a flat rear panel designated for date code placement.' },
              { label: 'Flat Bottom Box Pouch', link: '/products/eco-box-bottom-pouch', img: '/imgs/store/products/eco-box-bottom-hero.png', desc: 'Wide flat base provides a stable coding surface — ideal for frozen and chilled food with condensation-resistant TTO codes.' },
            ].map(({ label, link, img, desc }, i) => (
              <div key={i} className="border border-neutral-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition">
                <img src={img} alt={label} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-neutral-800 text-sm mb-1">{label}</h4>
                  <p className="text-xs text-neutral-600 mb-3">{desc}</p>
                  <Link to={link} className="text-xs text-primary-600 hover:underline font-medium">View product details →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
            <p className="text-sm text-neutral-700">Also see: <Link to="/solutions/packaging-line-automation" className="text-primary-600 hover:underline">Packaging Line Automation Guide</Link> · <Link to="/solutions/eco-packaging-coding" className="text-primary-600 hover:underline">Eco Packaging Coding Solutions</Link></p>
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
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">GRS & FSC Auditing Expert</span>
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">GFSI / BRC Compliance</span>
              </div>
              <p className="text-neutral-300 text-sm mt-3">
                {t(`${p}.sections.expert.bio`, 'Ryan has guided 500+ global food brands through multi-market coding compliance reviews, from FDA labelling for US retail to BRC audit requirements for UK supermarkets. He specialises in production-line coding integration for eco and conventional flexible packaging.')}
              </p>
              <button
                onClick={openCalendly}
                className="mt-4 flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white text-sm px-4 py-2 rounded-lg transition font-medium"
              >
                <Calendar className="h-4 w-4" />
                {t(`${p}.sections.expert.cta`, 'Book a Coding Compliance Consultation')}
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`, 'Need Coding-Ready Packaging?'),
      icon: <ShoppingCart className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-50 to-green-50 p-6 rounded-2xl border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-3">{t(`${p}.sections.cta.heading`, 'Get coding-compatible eco pouches with a dedicated code panel')}</h4>
          <p className="text-neutral-700 mb-5">{t(`${p}.sections.cta.desc`, 'Every Achieve Pack flexible pouch comes with a pre-designated coding area on the rear panel. We advise on ink compatibility, conduct TTO/TIJ adhesion testing, and provide PDF dieline templates with safe print zones for your coding equipment setup.')}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.bookBtn`, 'Book a Free Compliance Audit')}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {t(`${p}.sections.cta.viewBtn`, 'Shop Coding-Ready Pouches')}
            </Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t(`${p}.seo.title`, 'Food Packaging Coding Compliance Guide 2025 | Date Codes, Barcodes & Regulations')}
        description={t(`${p}.seo.description`, 'Complete guide to food packaging coding compliance: EU FIC, FDA labelling, GS1 barcodes, TTO/TIJ date coding, allergen statements, and lot number requirements for flexible pouches.')}
        keywords={keywords}
        schemaType="Article"
        ogImage="/imgs/store/products/food-coding-compliance-guide.jpg"
      />

      <SEOPageLayout
        heroBgColor="#1e3a5f"
        title={t(`${p}.seo.title`, 'Food Packaging Coding Compliance Guide 2025 | Date Codes, Barcodes & Regulations')}
        description={t(`${p}.seo.description`, 'Complete guide to food packaging coding compliance: EU FIC, FDA labelling, GS1 barcodes, TTO/TIJ date coding, allergen statements, and lot number requirements for flexible pouches.')}
        keywords={keywords}
        heroTitle={t(`${p}.seo.heroTitle`, 'Food Packaging Coding Compliance')}
        heroSubtitle={t(`${p}.seo.heroSubtitle`, 'Avoid Recalls. Pass Retail Audits. Master Multi-Market Labelling. A Complete Guide to Date Codes, Barcodes, Allergen Statements & Regulatory Requirements.')}
        introSummary={t(`${p}.seo.introSummary`, 'Food packaging coding compliance covers every piece of printed information on your flexible pouch: date codes, batch numbers, GS1 barcodes, allergen declarations, and nutrition facts. Non-compliance risks product recalls, retailer delisting, and regulatory fines across EU, FDA, and APAC markets. This guide walks you through the five most critical compliance pain points, engineering solutions, and coding technology choices for eco and conventional flexible packaging.')}
        sections={sections}
        heroImage="/imgs/store/products/food-coding-compliance-guide.jpg"
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
          <h2>Food Packaging Coding Compliance Guide</h2>
          <p>Topics: Date code compliance, EU FIC Regulation 1169/2011, FDA 21 CFR 101, GS1 barcodes, TTO/TIJ coding, allergen labelling, lot number traceability. Relevant to: coffee bags, stand-up pouches, side gusset bags, flat bottom pouches, food-grade flexible packaging.</p>
        </section>
      </div>
    </>
  )
}

export default FoodCodingCompliancePage
