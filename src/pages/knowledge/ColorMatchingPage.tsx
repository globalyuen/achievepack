import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { useTranslation } from 'react-i18next';
import { Palette, ShieldCheck, Factory, CheckCircle2, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const p = 'seoPages.pages.colorMatching';

export default function ColorMatchingPage() {
  const { t } = useTranslation();

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.overviewTitle`, { defaultValue: 'Why Standard CMYK Formulas Fall Short on Real Substrates' }),
      icon: <Palette className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 leading-relaxed font-semibold">
            {t(`${p}.introSummary`)}
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Standard Pantone-to-CMYK translation tables assume a standardized, perfectly white reference paper. In reality, modern flexible packaging materials are completely different:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2.5 text-neutral-600">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Substrate Variance:</strong> Natural kraft paper absorbs ink and shifts towards warm/yellow tones, while metallic foil reflections amplify dark CMYK tones.</span>
            </li>
            <li className="flex items-start gap-2.5 text-neutral-600">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Matte Over-Varnish Impact:</strong> Applying a protective matte oil coating diffuses ambient light, immediately shifting how a purple or grey looks under store shelves.</span>
            </li>
            <li className="flex items-start gap-2.5 text-neutral-600">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Press Calibration:</strong> Different digital presses have micro-variances, making visual check-offs essential to offset mechanical variances.</span>
            </li>
          </ul>
          <div className="my-8">
            <img src="/imgs/knowledge/color-matching/pms-cmyk-deviation.png" alt="Pantone Color Matching on Digital Packaging" className="w-full rounded-xl shadow-md" />
            <p className="text-sm text-neutral-500 mt-2 italic text-center">Gloss vs. Matte Digital Pouch proofing showing CMYK spectrum differences under calibrated studio lighting.</p>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: t(`${p}.painPointsTitle`, { defaultValue: '5 Pain Points Solved: Color Matching' }),
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          {[
            {
              num: '01',
              problem: 'Unpredictable Color Shifts on Matte Materials',
              solution: 'Over-varnishing with matte oil diffuses reflections and alters human eye perception, shifting tones significantly. We run material-specific custom CMYK adjustments to compensate for matte diffusion, ensuring your final pouch matches your target Pantone.',
            },
            {
              num: '02',
              problem: 'Muddy Violet, Grey, and Olive Tones',
              solution: 'These intermediate colors contain multi-channel CMYK blends where a 1% shift ruins the tone. We mandate pre-press physical proofing or calibrated video proofing for these sensitive colors to lock in the exact formula.',
            },
            {
              num: '03',
              problem: 'High Costs for Physical Mockups',
              solution: 'Traditional physical shipped mockups are expensive and slow. We offer a free video proofing workflow where we print a color ladder on your actual substrate and film it under D65 standard lighting until you choose the visual match.',
            },
            {
              num: '04',
              problem: 'Inconsistent Bulk Production Runs',
              solution: 'Once you approve the color match from our calibration strip, we save the custom CMYK percentages to your account as a proprietary formula. This guarantees absolute consistency across all your future bulk print runs.',
            },
            {
              num: '05',
              problem: 'Substrate Base Tone Interference',
              solution: 'Kraft paper is yellow; metallic foil is dark. Our calibrating team adjusts CMYK parameters to completely offset the material\'s specific base tone instead of relying on textbook paper-based Pantone conversions.',
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
            "I constantly see brands assume that providing a Pantone (PMS) code guarantees perfect colors on flexible packaging. The reality is that CMYK translation curves are designed for bleached white paper. When we print on natural Kraft or aluminized PET film, the substrate's base color violently shifts the final result. That's why we built our custom color ladder calibration system—we don't guess the CMYK formula, we dial it in empirically on your exact material before mass production begins."<br/><br/>
            — Ryan Wong, Co-Founder & Chief Packaging Engineer
          </p>
          <div className="bg-white rounded-lg p-4 flex items-center gap-4 mt-4">
            <img src="/imgs/team/Ryan Wong - Packaging Specialist.png" alt="Ryan Wong" className="w-16 h-16 rounded-full object-cover border-2 border-emerald-200" onError={(e) => { e.currentTarget.style.display='none' }} />
            <div>
              <h5 className="font-bold text-neutral-900">Ryan Wong</h5>
              <p className="text-xs text-neutral-500 font-medium mb-1">14+ Years Packaging Engineering | Supply Chain Expert</p>
              <p className="text-xs text-neutral-600">Helping DTC brands avoid costly color shifts through precision digital proofing and sustainable packaging development.</p>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noreferrer" className="text-xs text-emerald-600 font-bold hover:underline mt-1 inline-block">Schedule a 15-minute technical consultation with Ryan →</a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'related-products',
      title: t(`${p}.productsTitle`, { defaultValue: 'Products Requiring Critical Color Matching' }),
      icon: <Package className="w-5 h-5" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/store/product/stand-up-pouch-matte" className="block bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <img src="/imgs/store/products/stand-up-pouch-full-matte-pe70-hero.jpg" alt="Matte Stand Up Pouch" className="w-full aspect-square object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400?text=Matte+Pouch' }} />
            <div className="p-4">
              <h5 className="font-bold text-neutral-900 mb-1">Matte Stand Up Pouches</h5>
              <p className="text-xs text-neutral-500">Requires dedicated CMYK profiling to account for light diffusion.</p>
            </div>
          </Link>
          <Link to="/store/product/metallic-foil-pouch" className="block bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <img src="/imgs/store/products/spouted-foil-pouch-thumbnail-5.webp" alt="Metallic Foil Pouch" className="w-full aspect-square object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400?text=Foil+Pouch' }} />
            <div className="p-4">
              <h5 className="font-bold text-neutral-900 mb-1">Metallic Foil Pouches</h5>
              <p className="text-xs text-neutral-500">High reflectivity demands custom white-ink underprinting formulas.</p>
            </div>
          </Link>
          <Link to="/store/product/kraft-paper-pouch" className="block bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <img src="/imgs/store/products/stand-up-zipper-bag-50-tablets-white-kraft-paper-60g-pla-pba.png" alt="Kraft Paper Pouch" className="w-full aspect-square object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400?text=Kraft+Pouch' }} />
            <div className="p-4">
              <h5 className="font-bold text-neutral-900 mb-1">Natural Kraft Pouches</h5>
              <p className="text-xs text-neutral-500">Warm base tone shifts colors; requires heavy CMYK compensation.</p>
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
              <h3 itemProp="name">How does matte varnish affect color matching on packaging?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">Applying a matte over-varnish diffuses ambient light, which alters human eye perception and shifts the underlying tones. It requires custom CMYK profiling to compensate for this light diffusion and hit the target Pantone color.</p>
              </div>
            </article>
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">Why doesn't textbook Pantone-to-CMYK work on Kraft paper?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">Standard Pantone-to-CMYK conversion assumes a bright white paper base. Natural Kraft paper has a warm yellow/brown base tone that absorbs ink and shifts colors drastically. We must adjust the CMYK parameters specifically for Kraft to achieve visual parity.</p>
              </div>
            </article>
          </section>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: t(`${p}.faq.q1`),
      answer: t(`${p}.faq.a1`)
    },
    {
      question: t(`${p}.faq.q2`),
      answer: t(`${p}.faq.a2`)
    },
    {
      question: t(`${p}.faq.q3`),
      answer: t(`${p}.faq.a3`)
    },
    {
      question: t(`${p}.faq.q4`),
      answer: t(`${p}.faq.a4`)
    },
    {
      question: t(`${p}.faq.q5`),
      answer: t(`${p}.faq.a5`)
    },
    {
      question: t(`${p}.faq.q6`),
      answer: t(`${p}.faq.a6`)
    }
  ];

  const tables = [
    {
      title: t(`${p}.tableTitle`, { defaultValue: 'Color Matching Matrix' }),
      data: {
        headers: ['Printing / Proofing Method', 'Color Spectrum Source', 'Color Accuracy Profile', 'Best Application Use Case'],
        rows: [
          ['Official PMS-to-CMYK Data', 'Theoretical official Pantone table conversion', 'Low to Moderate (Fails on thin films & papers)', 'Initial layout design drafts only.'],
          ['Achieve Pack Video Proofing', 'Material-specific custom CMYK adjustments', 'Very High (Adjusted visual parity)', 'Brands needing exact matches on low-MOQ digital runs.'],
          ['Physical Shipped Mockup', 'Material-specific custom CMYK + printed sample', 'Excellent (Exact physical proof)', 'Premium enterprise brands with critical compliance runs.'],
          ['Flexo Spot-Color Printing', 'Physical spot-color mixed wet inks (Pantone)', 'Perfect (100% Pantone match)', 'High volume production (5,000+ units per SKU).'],
        ]
      }
    }
  ];

  return (
    <SEOPageLayout
      title={`${t(`${p}.title`)} | Achieve Pack`}
      description={t(`${p}.description`)}
      keywords="pantone color matching, CMYK digital printing, custom packaging color, pouch proofing, flexible packaging colors"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/knowledge/color-matching/pms-cmyk-deviation.png"
      heroImageAlt="Pantone Color Matching on Digital Packaging"
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Article"
    />
  );
}
