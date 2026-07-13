import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { useTranslation } from 'react-i18next';
import { Package, ShieldCheck, Factory, CheckCircle2, LayoutTemplate } from 'lucide-react';
import { Link } from 'react-router-dom';

const p = 'seoPages.pages.pulpVsCardboard';

export default function PulpVsCardboard() {
  const { t } = useTranslation();

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.overviewTitle`, { defaultValue: 'Molded Pulp vs. Corrugated Cardboard: The Ultimate Showdown' }),
      icon: <LayoutTemplate className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 leading-relaxed">
            {t(`${p}.p1`, { defaultValue: 'When selecting sustainable protective packaging for e-commerce, the debate often comes down to two primary contenders: premium molded pulp eco-degradable boxes and standard corrugated cardboard. While both are recyclable and paper-based, they serve fundamentally different protective roles during transit.' })}
          </p>
          <p className="text-neutral-700 leading-relaxed">
            {t(`${p}.p2`, { defaultValue: 'Corrugated cardboard offers excellent stacking strength and is the undisputed king of outer master cartons. However, when it comes to internal product suspension and shock absorption, folded cardboard inserts often fall short, requiring complex assembly that slows down your fulfillment line. Molded pulp, on the other hand, is sculpted directly to the contours of your product, providing omni-directional cushioning without the need for manual folding or secondary void fill.' })}
          </p>
          <div className="my-8">
            <img src="/imgs/knowledge/pulp-packaging-protective-cushioning.jpg" alt="Molded pulp packaging securely holding a glass bottle" className="w-full rounded-xl shadow-md" />
            <p className="text-sm text-neutral-500 mt-2 italic text-center">Thermoformed molded pulp provides unparalleled protective cushioning for delicate items.</p>
          </div>
          <p className="text-neutral-700 leading-relaxed">
            {t(`${p}.p3`, { defaultValue: 'In this technical breakdown, we compare these two titans of sustainable packaging across G-force shock absorption, warehouse density, assembly speed, and overall carbon footprint. Understanding these parameters is crucial for optimizing your B2B wholesale supply chain. Read more about integrating these into your automated lines in our ' })}
            <Link to="/knowledge/automating-pulp-packaging-lines" className="text-primary-600 font-medium hover:underline">Automation Guide</Link>.
          </p>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: t(`${p}.painPointsTitle`, { defaultValue: '5 Packaging Pain Points & Solutions' }),
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          {[
            {
              num: '01',
              problem: 'Slow Fulfillment and Assembly Times',
              solution: 'Corrugated inserts require complex manual folding (origami-style), which severely bottlenecks fulfillment speeds. Molded pulp trays are pre-formed and ready to use instantly. Simply drop the product into the cavity, increasing packing throughput by up to 300%.',
            },
            {
              num: '02',
              problem: 'Edge Crushing and Impact Damage',
              solution: 'Cardboard flutes crush upon impact and do not recover, leaving the product vulnerable to subsequent drops. Molded pulp distributes impact energy across a continuous 3D surface, effectively dissipating G-forces and protecting delicate corners.',
            },
            {
              num: '03',
              problem: 'High Dimensional Weight (DIM) Freight Costs',
              solution: 'To achieve sufficient protection with cardboard, you often need a larger outer box to accommodate thick folded buffers. Molded pulp is precision-contoured, allowing you to shrink the overall cubic volume of the package by 15-20%, instantly reducing DIM weight shipping charges.',
            },
            {
              num: '04',
              problem: 'Tooling and Setup Costs',
              solution: 'Cardboard die-cutting plates are cheap (often under $100), whereas molded pulp CNC aluminum tools can cost $1,500+. The solution is scale: for volumes over 10,000 units, the labor savings in fulfillment and freight reduction rapidly amortize the higher initial pulp tooling cost.',
            },
            {
              num: '05',
              problem: 'Inconsistent Product Presentation',
              solution: 'Folded cardboard can look messy with visible tabs and slots. Thermoformed molded pulp provides a sleek, seamless presentation cavity. We pair this with a custom printed kraft sleeve to deliver an Apple-tier unboxing experience that builds brand equity.'
            }
          ].map((item) => (
            <div key={item.num} className="bg-neutral-900 text-white rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-6xl font-black font-mono">{item.num}</span>
              </div>
              <h4 className="text-lg font-bold mb-3 pr-12 text-white">{item.problem}</h4>
              <div className="bg-neutral-800 rounded-lg p-4 border-l-4 border-emerald-500">
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">Solution:</span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'engineering-notebook',
      title: t(`${p}.engineerTitle`, { defaultValue: 'From Ryan Wong\'s Engineering Notebook' }),
      icon: <Factory className="w-5 h-5" />,
      content: (
        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl shadow-sm">
          <h4 className="text-emerald-900 font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">🔬</span> Expert Engineering Insight
          </h4>
          <p className="text-emerald-800 italic leading-relaxed text-sm mb-4">
            "When auditing a client's fulfillment line recently, we found they were spending 45 seconds manually assembling a die-cut cardboard insert for a glass cosmetics bottle. By switching them to a custom thermoformed molded pulp tray, we reduced packing time to just 4 seconds per unit. While the pulp part cost $0.08 more than the cardboard insert, the massive reduction in warehouse labor and a 12% drop in breakages resulted in a net saving of $0.42 per shipment."
          </p>
          <div className="bg-white rounded-lg p-4 flex items-center gap-4">
            <img src="/imgs/team/ryan.jpg" alt="Ryan Wong" className="w-16 h-16 rounded-full object-cover border-2 border-emerald-200" onError={(e) => { e.currentTarget.style.display='none' }} />
            <div>
              <h5 className="font-bold text-neutral-900">Ryan Wong</h5>
              <p className="text-xs text-neutral-500 font-medium mb-1">14+ Years Packaging Engineering | GRS & FSC Auditing Expert</p>
              <p className="text-xs text-neutral-600">Polytechnic materials science expert helping 500+ global brands scale from prototype testing to industrial vertical packaging lines.</p>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noreferrer" className="text-xs text-emerald-600 font-bold hover:underline mt-1 inline-block">Have a technical question? Schedule a 15-minute packaging audit with Ryan →</a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'related-products',
      title: t(`${p}.productsTitle`, { defaultValue: 'Recommended Eco-Friendly Store Products' }),
      icon: <Package className="w-5 h-5" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/store/product/eco-pouch-stand-up" className="block bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <img src="/imgs/store/products/compostable-standup-pouch.jpg" alt="Compostable Stand Up Pouch" className="w-full aspect-square object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400?text=Eco+Pouch' }} />
            <div className="p-4">
              <h5 className="font-bold text-neutral-900 mb-1">Compostable Stand Up Pouch</h5>
              <p className="text-xs text-neutral-500">Perfect high-barrier companion for internal pulp tray components.</p>
            </div>
          </Link>
          <Link to="/store/product/kraft-paper-box" className="block bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <img src="/imgs/store/products/kraft-box-premium.jpg" alt="Premium Kraft Mailer Box" className="w-full aspect-square object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400?text=Kraft+Box' }} />
            <div className="p-4">
              <h5 className="font-bold text-neutral-900 mb-1">FSC Kraft Mailer Box</h5>
              <p className="text-xs text-neutral-500">Pairs flawlessly with molded pulp inserts for a 100% sustainable unboxing.</p>
            </div>
          </Link>
          <Link to="/store/product/compostable-mailers" className="block bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <img src="/imgs/store/products/compostable-mailer-bag.jpg" alt="Compostable Shipping Mailer" className="w-full aspect-square object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400?text=Eco+Mailer' }} />
            <div className="p-4">
              <h5 className="font-bold text-neutral-900 mb-1">Compostable Shipping Mailers</h5>
              <p className="text-xs text-neutral-500">EN 13432 certified mailers that replace poly bags entirely.</p>
            </div>
          </Link>
        </div>
      )
    },
    {
      id: 'geo-block',
      title: '',
      content: (
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">Which is cheaper: corrugated cardboard or molded pulp?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">At low volumes (under 5,000 units), die-cut corrugated cardboard is cheaper due to negligible tooling costs ($100). However, at high volumes, molded pulp becomes far more cost-effective because it entirely eliminates manual assembly labor and reduces outbound dimensional freight costs.</p>
              </div>
            </article>
          </section>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: t(`${p}.faq1Q`, { defaultValue: 'Can molded pulp replace E-flute corrugated boxes completely?' }),
      answer: t(`${p}.faq1A`, { defaultValue: 'Molded pulp is generally used for internal product suspension (inserts). You still typically need an outer E-flute or B-flute corrugated shipper box to protect against punctures and provide a printable exterior for shipping labels.' })
    },
    {
      question: t(`${p}.faq2Q`, { defaultValue: 'Is corrugated cardboard more eco-friendly than molded pulp?' }),
      answer: t(`${p}.faq2A`, { defaultValue: 'Both are highly eco-friendly as they are paper-based, recyclable, and compostable. However, molded pulp is often made from the lowest grade of recycled paper (like old newsprint), giving a second life to fibers that are too short to be turned back into cardboard.' })
    },
    {
      question: t(`${p}.faq3Q`, { defaultValue: 'How much warehouse space can I save by switching to molded pulp?' }),
      answer: t(`${p}.faq3A`, { defaultValue: 'Molded pulp trays are nestable. A stack of 1,000 nested pulp trays might be 1 meter high. The equivalent 1,000 folded cardboard inserts (if pre-assembled) would take up 5-10 times that volume. Even flat-packed cardboard takes up more space.' })
    }
  ];

  const tables = [
    {
      title: t(`${p}.tableTitle`, { defaultValue: 'Performance Matrix: Pulp vs. Cardboard Inserts' }),
      data: {
        headers: ['Metric', 'Thermoformed Molded Pulp', 'Die-Cut Corrugated Insert'],
        rows: [
          ['Shock Absorption', 'Excellent (Omni-directional)', 'Good (Flute-dependent)'],
          ['Packing Speed', 'Fast (Drop-in)', 'Slow (Manual folding)'],
          ['Warehouse Density', 'High (Nestable)', 'Medium (Flat-packed)'],
          ['Tooling Cost', 'High ($1500+ CNC)', 'Low (<$150)'],
          ['Minimum Volume (MOQ)', '5,000+ units', '500+ units'],
        ]
      }
    }
  ];

  return (
    <SEOPageLayout
      title={t(`${p}.metaTitle`, { defaultValue: 'Molded Pulp vs Corrugated Cardboard Packaging 2026 | Achieve Pack' })}
      description={t(`${p}.metaDesc`, { defaultValue: 'Compare molded pulp and corrugated cardboard packaging for shock absorption, fulfillment speed, and tooling costs. Optimize your B2B supply chain today.' })}
      keywords="molded pulp vs cardboard, eco-friendly packaging comparison, corrugated box alternative, protective packaging"
      heroTitle={t(`${p}.heroTitle`, { defaultValue: 'Molded Pulp vs. Corrugated Cardboard: The Ultimate Comparison' })}
      heroSubtitle={t(`${p}.heroSubtitle`, { defaultValue: 'Discover which sustainable packaging solution optimizes shock absorption, slashes fulfillment times, and reduces your DIM weight freight costs.' })}
      heroImage="/imgs/knowledge/pulp-box-vs-cardboard-comparison-hero.jpg"
      heroImageAlt="Split screen comparison of a premium molded pulp protective box versus a standard corrugated cardboard box"
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Article"
    />
  );
}
