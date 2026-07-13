import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { useTranslation } from 'react-i18next';
import { Package, ShieldCheck, Factory, CheckCircle2, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const p = 'seoPages.pages.moldedPulpGuide';

export default function MoldedPulpGuide() {
  const { t } = useTranslation();

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.overviewTitle`, { defaultValue: 'Why Molded Pulp is Revolutionizing E-Commerce' }),
      icon: <Leaf className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 leading-relaxed">
            {t(`${p}.p1`, { defaultValue: 'As global environmental regulations tighten, e-commerce brands are under immense pressure to eliminate single-use plastics. Molded pulp packaging has emerged as the premier eco-friendly alternative. Unlike traditional EPS (expanded polystyrene) or multi-layered plastic laminates, molded pulp is completely biodegradable, compostable, and recyclable.' })}
          </p>
          <p className="text-neutral-700 leading-relaxed">
            {t(`${p}.p2`, { defaultValue: 'Crafted from recycled paperboard, newspaper, or fast-growing agricultural fibers (like sugarcane bagasse or bamboo), molded pulp offers excellent protective cushioning. Our premium eco-degradable boxes are designed not just for sustainability, but to deliver an unboxing experience that screams quality. With advanced pressing technologies, we achieve smooth finishes, sharp edges, and high-fidelity structural integrity that rivals premium corrugated cardboard, while significantly reducing your carbon footprint.' })}
          </p>
          <div className="my-8">
            <img src="/imgs/knowledge/compostable-pulp-tray-texture.jpg" alt="Compostable molded pulp tray texture close-up showing organic fibers" className="w-full rounded-xl shadow-md" />
            <p className="text-sm text-neutral-500 mt-2 italic text-center">Close-up of our high-density compostable molded pulp texture, featuring organic fibers.</p>
          </div>
          <p className="text-neutral-700 leading-relaxed">
            {t(`${p}.p3`, { defaultValue: 'Transitioning to molded pulp isn\'t just about eco-compliance; it\'s about brand perception. Modern consumers actively seek out brands that share their environmental values. By utilizing our compostable molded pulp boxes, you immediately signal a commitment to sustainable practices. Explore related topics in our ' })}
            <Link to="/knowledge/pulp-boxes-vs-corrugated-cardboard" className="text-primary-600 font-medium hover:underline">Protective Packaging Comparison Guide</Link>.
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
              problem: 'High Breakage Rates During Transit',
              solution: 'Molded pulp is engineered with 3D structural ribs that absorb shock effectively. By custom-molding the pulp to the exact contours of your product, we eliminate internal movement. Drop tests show a 40% reduction in G-forces transferred to the product compared to loose-fill peanuts.',
            },
            {
              num: '02',
              problem: 'Rising Plastic Tax and Compliance Costs',
              solution: 'In regions like the UK and EU, plastic packaging taxes are heavily impacting margins. Molded pulp is 100% plastic-free, making it exempt from these taxes. It adheres to EN 13432 for compostability, ensuring completely penalty-free market access globally.',
            },
            {
              num: '03',
              problem: 'Poor Unboxing Aesthetics (The "Egg Carton" Look)',
              solution: 'Standard pulp can look rough, but our Thermoformed (Type 4) molded pulp undergoes a heated pressing process. This results in incredibly smooth surfaces, sharp drafting angles (down to 1.5 degrees), and a premium feel suitable for luxury cosmetics and electronics.',
            },
            {
              num: '04',
              problem: 'Storage Inefficiency and High Freight Costs',
              solution: 'Unlike rigid foam blocks, molded pulp trays are highly nestable. They stack tightly together, reducing warehouse storage requirements by up to 70% and maximizing pallet density during shipping, which drastically cuts inbound freight costs.',
            },
            {
              num: '05',
              problem: 'Moisture Damage in Humid Environments',
              solution: 'We integrate non-toxic, FDA-approved AKD (Alkyl Ketene Dimer) sizing agents directly into the pulp slurry during manufacturing. This provides exceptional water and grease resistance (Cobb value < 30g/m²), ensuring the packaging remains rigid even in damp conditions.',
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
          <p className="text-emerald-800 italic leading-relaxed text-sm">
            "In my 14 years in packaging design, the most common hesitation brands have with molded pulp is dimensional tolerance. With standard dry-pressed pulp (Type 1), tolerances can swing by ±2mm due to natural shrinkage during the oven drying phase. However, by upgrading to thermoformed wet-pressing (Type 4), we apply 5 tons of pressure at 150°C in the mold. This bakes the moisture out instantly, achieving a dimensional tolerance of ±0.5mm. This is critical when you are automating your packaging lines, as robotic pick-and-place arms require strict predictability to prevent jams."<br/><br/>
            — Ryan Wong, Co-Founder & Chief Packaging Engineer
          </p>
          <div className="bg-white rounded-lg p-4 flex items-center gap-4 mt-4">
            <img src="/imgs/team/ryan-in-exhib.webp" alt="Ryan Wong" className="w-16 h-16 rounded-full object-cover border-2 border-emerald-200" onError={(e) => { e.currentTarget.style.display='none' }} />
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
              <h3 itemProp="name">Is molded pulp packaging water resistant?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">Yes, by incorporating FDA-approved AKD sizing agents during the wet slurry phase, molded pulp can achieve a Cobb value of less than 30g/m², providing excellent water and grease resistance suitable for food contact and humid environments.</p>
              </div>
            </article>
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">How does molded pulp compare to EPS foam?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">Molded pulp is 100% biodegradable and compostable, avoiding plastic taxes. Structurally, custom thermoformed pulp provides equivalent or superior shock absorption (reducing G-forces by up to 40%) while taking up to 70% less warehouse space due to its nestable design.</p>
              </div>
            </article>
          </section>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: t(`${p}.faq1Q`, { defaultValue: 'What materials are used in your molded pulp packaging?' }),
      answer: t(`${p}.faq1A`, { defaultValue: 'We primarily use 100% recycled corrugated paperboard (OCC), old newsprint (ONP), and fast-growing virgin fibers like sugarcane bagasse and bamboo. All sources are FSC-certified to ensure sustainable forestry practices.' })
    },
    {
      question: t(`${p}.faq2Q`, { defaultValue: 'Is this packaging certified compostable?' }),
      answer: t(`${p}.faq2A`, { defaultValue: 'Yes. Our unbleached molded pulp products meet EN 13432 and ASTM D6400 standards for industrial compostability, naturally breaking down within 90 days without leaving toxic residues.' })
    },
    {
      question: t(`${p}.faq3Q`, { defaultValue: 'What is the minimum order quantity (MOQ) for custom pulp molds?' }),
      answer: t(`${p}.faq3A`, { defaultValue: 'Because custom molded pulp requires CNC milling of an aluminum mold, our standard MOQ for custom shapes is typically 5,000 units. However, for standard sizes, we offer stock options starting at just 500 units.' })
    },
    {
      question: t(`${p}.faq4Q`, { defaultValue: 'Can you print logos directly onto molded pulp?' }),
      answer: t(`${p}.faq4A`, { defaultValue: 'While direct digital printing is challenging on textured surfaces, we use laser etching directly in the tooling to emboss/deboss your logo seamlessly. For multi-color branding, we recommend a custom printed paper sleeve.' })
    }
  ];

  const tables = [
    {
      title: t(`${p}.tableTitle`, { defaultValue: 'Pulp Types Comparison' }),
      data: {
        headers: ['Property', 'Dry Pressed (Type 1)', 'Thermoformed (Type 4)'],
        rows: [
          ['Wall Thickness', '2mm - 4mm', '0.8mm - 1.5mm'],
          ['Surface Finish', 'Rough on one side', 'Smooth on both sides'],
          ['Draft Angle', '5 - 10 Degrees', '1.5 - 3 Degrees'],
          ['Dimensional Tolerance', '± 2.0mm', '± 0.5mm'],
          ['Best Used For', 'Egg cartons, heavy industrial', 'Cosmetics, electronics, luxury'],
        ]
      }
    }
  ];

  return (
    <SEOPageLayout
      title={t(`${p}.metaTitle`, { defaultValue: 'Molded Pulp Packaging Guide 2026: Eco-Degradable Box Solutions | Achieve Pack' })}
      description={t(`${p}.metaDesc`, { defaultValue: 'Discover why premium molded pulp is the ultimate compostable box solution for e-commerce. Explore protective qualities, VFFS automation compatibility, and B2B wholesale options.' })}
      keywords="molded pulp packaging, eco-degradable boxes, compostable packaging, B2B wholesale packaging, sustainable protective packaging"
      heroTitle={t(`${p}.heroTitle`, { defaultValue: 'Molded Pulp Packaging Guide: The Ultimate Eco-Box Solution' })}
      heroSubtitle={t(`${p}.heroSubtitle`, { defaultValue: 'Transform your unboxing experience with 100% compostable, structurally robust molded pulp. Discover technical specs, dimensional tolerances, and B2B wholesale capabilities.' })}
      heroImage="/imgs/knowledge/molded-pulp-eco-box-hero.jpg"
      heroImageAlt="Premium molded pulp eco-degradable box for e-commerce"
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Article"
    />
  );
}
