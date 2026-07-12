import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  CheckCircle, ChevronDown, Calendar, ShoppingCart,
  Award, Shield, AlertTriangle, Zap, Settings, Package, Activity
} from 'lucide-react'

const p = 'seoPages.pages.packagingLineAutomation'

const PackagingLineAutomationPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'packaging line automation',
    'VFFS vertical form fill seal machine',
    'automated pouch filling machine',
    'flexible packaging automation',
    'robotic packaging line',
    'HFFS horizontal form fill seal',
    'packaging line integration',
    'pouch filling speed optimization'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Pouch Film Jam on VFFS Machine at High Speed',
      solution: 'Film jams at speeds above 60 pouches/min typically originate from incorrect film tension, uneven winding on the supply roll, or film static buildup causing sheets to adhere. The engineering fix is a servo-driven unwind system with a dancer roll and tension feedback loop, combined with an ionizing bar to neutralize static before the forming tube. Set forming tube clearance to ±0.2mm of your film width specification.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Inconsistent Seal Strength on Eco / Mono-PE Film',
      solution: 'Mono-material recyclable PE films (especially MDO-PE outer layers) have a narrower heat seal window (typically 130–150°C) compared to conventional PET/PE laminates (160–200°C). Seal strength failures occur when jaw temperature drifts ±5°C. Use a closed-loop PID temperature controller on all seal jaws, and validate with a destructive pull test (minimum 8N/25mm) after every 30 minutes of runtime.',
      icon: <Zap className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Product Spillage Into Seal Zone Causing Contaminated Seals',
      solution: 'Powders, coffee grounds, and granules falling into the heat seal zone result in weak seals that fail during transport. The solution is a vibratory settling mechanism placed between the fill station and the sealing jaw, plus a targeted compressed air purge jet at 0.5 bar that clears the seal area 50ms before jaw closure. For fine powders, install a transverse seal jaw with a built-in scraper blade.',
      icon: <Settings className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Zipper Insertion Alignment Failures',
      solution: 'Reclosable zipper pouches require the zipper track to land within ±1mm of the bag opening. On high-speed lines, mechanical drift and thermal expansion of the zipper guide rail cause misalignment. Install a vision system camera at the zipper insertion station (minimum 2MP, 60fps) to reject non-conforming bags before sealing, and use a heated zipper guide with a linear servo actuator to dynamically correct alignment.',
      icon: <Activity className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Downtime During Film Roll Changeover',
      solution: 'On a standard VFFS line running at 80 ppm, a manual film splice takes 8–12 minutes, losing 640–960 pouches per changeover. Install an automatic splicing unit (zero-speed splicer) that pre-stages the new roll on a standby mandrel, and executes a flying splice at full production speed. Combined with a 12-metre film accumulator, this reduces changeover downtime to under 30 seconds.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What is the difference between VFFS and HFFS packaging machines?'),
      a: t(`${p}.faq.a1`, 'Vertical Form Fill Seal (VFFS) machines form pouches from a flat film roll, fill them with product from above using gravity or an auger, and heat-seal them vertically. They are best for free-flowing products like coffee, snacks, powders, and grains. Horizontal Form Fill Seal (HFFS) machines form pouches horizontally — ideal for solid items like bars, blocks of cheese, or pre-formed trays. VFFS machines typically achieve higher speeds (up to 200 ppm for small sachets) and are more common in flexible pouch production.')
    },
    {
      q: t(`${p}.faq.q2`, 'How fast can an automated pouch filling line run?'),
      a: t(`${p}.faq.a2`, 'Speed depends entirely on product type and pouch size. A standard VFFS line running 200–500g stand-up pouches with coffee or powder achieves 60–120 pouches per minute. Multi-head weigher-equipped lines for snacks can reach 180 ppm. For stick packs and sachets (under 30g), rotary VFFS machines can hit 600–800 units/min. Zipper insertion and degassing valve applicators typically cap practical speed at 80–100 ppm per lane.')
    },
    {
      q: t(`${p}.faq.q3`, 'Are eco-friendly pouches compatible with standard VFFS machines?'),
      a: t(`${p}.faq.a3`, 'Yes, but requires calibration. Mono-PE recyclable films and compostable PLA films have different slip coefficients, melting points, and static properties compared to conventional PET/PE laminates. Your machine technician must adjust: forming tube size (±0.5mm for eco film stiffness), jaw temperature (reduce 15–25°C for mono-PE), film tension (increase by 10–15% for stiffer MDO-PE films), and install an ionizing bar for static-prone PLA films.')
    },
    {
      q: t(`${p}.faq.q4`, 'What is the ROI timeline for packaging line automation?'),
      a: t(`${p}.faq.a4`, 'For a medium-volume food brand producing 100,000+ units/month, a fully automated VFFS line with multi-head weigher typically pays back in 18–36 months. The calculation: a line running at 80 ppm over 8 hours produces 38,400 pouches/day vs. a manual packing team producing 8,000–12,000 pouches/day at similar labor cost. Automation also eliminates per-unit labor cost variability, reduces product giveaway by 0.5–1.5% through precision filling, and cuts sealing defect rates from 2–5% to under 0.1%.')
    },
    {
      q: t(`${p}.faq.q5`, 'Can I integrate a coding machine into an existing packaging line?'),
      a: t(`${p}.faq.a5`, 'Yes. TTO (Thermal Transfer Overprinting) and TIJ (Thermal InkJet) coding units can be integrated inline between the forming tube and the cross-sealing jaw on most VFFS machines. The coding module is triggered by the machine\'s PLC encoder signal, applying date codes and batch numbers synchronised to each pouch cycle. Integration requires a 24VDC signal cable and a mounting bracket; most brands complete this upgrade in under 4 hours without machine downtime.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'What Is Packaging Line Automation and Why Does It Matter?'),
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Packaging line automation</strong> {t(`${p}.sections.overview.desc`, 'is the integration of mechanical, electronic, and software systems to replace manual packaging operations with fully automated processes — from film unwinding and pouch forming, to product filling, zipper insertion, heat sealing, date coding, and case packing. For food, beverage, supplement, and pet food brands using flexible pouches, automation is the single highest-leverage investment available to reduce cost-per-unit, improve seal quality, and scale output without proportionally increasing headcount.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'The global flexible packaging market reached $248 billion in 2024 and is projected to grow at 4.5% CAGR through 2032, driven by the shift from rigid containers (glass, tin, rigid plastic) to lightweight, sustainable flexible formats. Brands that automate their pouch filling lines today gain a 30–50% cost-per-unit advantage over competitors still relying on manual packing benches — a structural advantage that compounds as volumes grow.')}</p>

          <div className="bg-primary-50 p-5 rounded-xl border border-primary-100 mt-4">
            <h4 className="font-semibold text-primary-800 mb-3">{t(`${p}.sections.overview.whyTitle`, 'Key Automation Technologies for Flexible Pouch Lines')}</h4>
            <ul className="space-y-2 text-sm">
              {[
                t(`${p}.sections.overview.why1`, '⚙️ VFFS Machine: Vertical Form Fill Seal — the backbone of high-speed pouch production, forming, filling, and sealing in one continuous motion'),
                t(`${p}.sections.overview.why2`, '⚖️ Multi-Head Weigher: Rotary combination weigher achieving ±0.5g fill accuracy at speeds up to 180 drops/min'),
                t(`${p}.sections.overview.why3`, '🤖 Robotic Case Packer: 6-axis robot picking sealed pouches from conveyor and packing into shipping cases at 40+ cycles/min'),
                t(`${p}.sections.overview.why4`, '📸 Vision Inspection System: 8MP inline camera detecting seal defects, code readability, zipper alignment, and fill level — rejecting non-conforming bags automatically'),
                t(`${p}.sections.overview.why5`, '🖨️ Inline TTO Coder: Synchronized date code printer triggered by machine PLC signal, printing on every pouch at line speed'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/packaging-line-automation-guide.jpg"
              alt="Automated packaging line with robotic arms and VFFS machines filling eco pouches"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'Modern automated pouch filling line: multi-head weigher, VFFS machine, inline TTO coder, vision inspection, and robotic case packer — fully integrated.')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'painpoints',
      title: t(`${p}.sections.painpoints.title`, '5 Packaging Line Pain Points & Engineering Solutions'),
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">{t(`${p}.sections.painpoints.intro`, 'Based on 14 years of packaging engineering experience and line validation work with 300+ food and supplement brands, these are the five most frequently encountered automation challenges — and the specific engineering solutions that resolve them:')}</p>
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
      id: 'comparison',
      title: t(`${p}.sections.comparison.title`, 'Manual vs. Semi-Auto vs. Fully Automated: Performance Comparison'),
      icon: <Activity className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.comparison.intro`, 'The right level of automation depends on your monthly volume. This table helps brands choose the right investment tier:')}</p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="text-left px-4 py-3">Parameter</th>
                  <th className="text-left px-4 py-3">Manual Packing</th>
                  <th className="text-left px-4 py-3">Semi-Automatic</th>
                  <th className="text-left px-4 py-3">Fully Automated</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Output (ppm)', '3–8', '20–40', '60–180'],
                  ['Labour Cost per 1,000 units', '$18–35', '$8–15', '$1.50–4'],
                  ['Fill Accuracy', '±5–8%', '±2–3%', '±0.5%'],
                  ['Seal Defect Rate', '3–8%', '0.5–2%', '<0.1%'],
                  ['Suitable Monthly Volume', '<10,000 units', '10k–100k units', '>100k units'],
                  ['CapEx Investment', '$0–5k', '$20k–80k', '$150k–500k+'],
                  ['ROI Timeline', 'N/A', '12–18 months', '18–36 months'],
                ].map(([param, manual, semi, full], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                    <td className="px-4 py-3 font-medium">{param}</td>
                    <td className="px-4 py-3 text-red-600">{manual}</td>
                    <td className="px-4 py-3 text-amber-600">{semi}</td>
                    <td className="px-4 py-3 text-primary-700 font-semibold">{full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">🔬 {t(`${p}.sections.comparison.notebookTitle`, "From Ryan Wong's Engineering Notebook")}</h4>
            <p className="text-sm text-amber-900 italic">
              {t(`${p}.sections.comparison.notebook`, '"The biggest mistake I see is brands buying a semi-automatic machine to bridge the gap, then running it 24/7 to meet demand instead of upgrading to full automation. A semi-auto machine run at 140% of rated capacity lasts 14 months before the sealing jaws warp and the film tension servo fails. By then, they\'ve spent $30,000 in repairs and lost $80,000 in downtime — enough to have purchased a fully automated line from the start. My rule: if you need the machine running more than 16 hours a day, skip semi-auto entirely." — Ryan Wong, Co-Founder')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'products',
      title: t(`${p}.sections.products.title`, 'Automation-Compatible Packaging Products'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.products.intro`, 'Every Achieve Pack flexible pouch is manufactured to tight dimensional tolerances to ensure reliable performance on your automated filling line. Our product specs include forming tube compatibility data:')}</p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              { label: 'Eco Stand-Up Pouch', link: '/products/eco-stand-up-pouch-guide', img: '/imgs/store/products/eco-side-gusset-hero.png', desc: 'VFFS-compatible mono-PE pouches. Forming tube tolerances ±0.3mm. Available in pre-made or rollstock format.' },
              { label: 'Eco Box Bottom Pouch', link: '/products/eco-box-bottom-pouch', img: '/imgs/store/products/eco-box-bottom-hero.png', desc: 'Pre-made flat bottom bags for rotary or linear fill-and-seal machines. Top-fill opening: ±1mm.' },
              { label: 'Side Gusset Coffee Bag', link: '/products/side-gusset-coffee-bag-packaging', img: '/imgs/store/products/side-gusset-coffee-bag-hero.png', desc: 'Pre-made with synchronized one-way valve. Compatible with horizontal top-seal machines at 40–80 ppm.' },
            ].map(({ label, link, img, desc }, i) => (
              <div key={i} className="border border-neutral-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition">
                <img src={img} alt={label} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-neutral-800 text-sm mb-1">{label}</h4>
                  <p className="text-xs text-neutral-600 mb-3">{desc}</p>
                  <Link to={link} className="text-xs text-primary-600 hover:underline font-medium">View specs →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
            <p className="text-sm text-neutral-700">Related guides: <Link to="/solutions/food-coding-compliance" className="text-primary-600 hover:underline">Food Coding Compliance</Link> · <Link to="/solutions/eco-packaging-coding" className="text-primary-600 hover:underline">Eco Packaging Coding</Link></p>
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
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">VFFS / HFFS Line Expert</span>
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">BRC / GFSI Compliance</span>
              </div>
              <p className="text-neutral-300 text-sm mt-3">
                {t(`${p}.sections.expert.bio`, 'Ryan has commissioned and validated automated pouch filling lines for 300+ food and supplement brands globally, from 30 ppm semi-automatic benchtop VFFS units to fully integrated 180 ppm robotic case packing lines. He specialises in eco-film VFFS calibration and inline coding integration.')}
              </p>
              <button
                onClick={openCalendly}
                className="mt-4 flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white text-sm px-4 py-2 rounded-lg transition font-medium"
              >
                <Calendar className="h-4 w-4" />
                {t(`${p}.sections.expert.cta`, 'Book a Line Automation Consultation')}
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`, 'Source VFFS-Ready Pouches for Your Line'),
      icon: <ShoppingCart className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-50 to-green-50 p-6 rounded-2xl border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-3">{t(`${p}.sections.cta.heading`, 'Get pre-made or rollstock pouches with line-tested forming tolerances')}</h4>
          <p className="text-neutral-700 mb-5">{t(`${p}.sections.cta.desc`, 'We supply detailed dieline templates with forming tube dimensions, film tension parameters, and heat seal window specifications for every pouch format we produce. Request a free sample pack to test on your existing machine before placing your production order.')}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.bookBtn`, 'Discuss Line Compatibility')}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {t(`${p}.sections.cta.viewBtn`, 'Browse All Pouches')}
            </Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t(`${p}.seo.title`, 'Packaging Line Automation Guide 2025 | VFFS, Robotic & Inline Coding Solutions')}
        description={t(`${p}.seo.description`, 'Complete guide to flexible packaging line automation: VFFS machines, multi-head weighers, inline TTO coding, vision inspection, and robotic case packing for eco and conventional pouches.')}
        keywords={keywords}
        schemaType="Article"
        ogImage="/imgs/store/products/packaging-line-automation-guide.jpg"
      />

      <SEOPageLayout
        heroBgColor="#1a2744"
        title={t(`${p}.seo.title`, 'Packaging Line Automation Guide 2025 | VFFS, Robotic & Inline Coding Solutions')}
        description={t(`${p}.seo.description`, 'Complete guide to flexible packaging line automation: VFFS machines, multi-head weighers, inline TTO coding, vision inspection, and robotic case packing for eco and conventional pouches.')}
        keywords={keywords}
        heroTitle={t(`${p}.seo.heroTitle`, 'Packaging Line Automation')}
        heroSubtitle={t(`${p}.seo.heroSubtitle`, 'Scale Efficiently. Cut Cost-per-Unit. Eliminate Defects. The Complete Guide to VFFS Machines, Robotic Packing & Inline Coding for Flexible Pouches.')}
        introSummary={t(`${p}.seo.introSummary`, 'Packaging line automation transforms manual pouch packing operations into high-speed, precision manufacturing. This guide covers VFFS and HFFS machine selection, multi-head weigher integration, TTO date coding, vision inspection systems, and the five most common automation failure modes with engineering-grade solutions for food, supplement, and pet food brands using flexible packaging.')}
        sections={sections}
        heroImage="/imgs/store/products/packaging-line-automation-guide.jpg"
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
          <h2>Packaging Line Automation for Flexible Pouches</h2>
          <p>Topics: VFFS machine, HFFS machine, multi-head weigher, robotic case packer, vision inspection, TTO coder, eco film VFFS calibration, pouch filling speed, seal strength testing. Relevant to: coffee pouches, supplement pouches, pet food pouches, snack bags, food-grade flexible packaging.</p>
        </section>
      </div>
    </>
  )
}

export default PackagingLineAutomationPage
