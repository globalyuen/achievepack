import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Leaf, Lock, Zap, Activity, Wind, Sun, Droplet, Printer, Snowflake, Eye, Box, Filter, Package, Barcode } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import PouchLayout from '../../components/pouch/PouchLayout';
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  en: {
    title: "Digital Print Flexible Packaging For Pharmaceuticals | Achieve Pack",
    description: "High-precision digital print flexible packaging for pharmaceuticals, ensuring serialization compliance, child-resistant safety, and ultra-low MOQs for clinical trials.",
    heroTitle: "Digital Print Flexible Packaging For Pharmaceuticals",
    empathyHook: "We know the sinking feeling of a product recall because a packaging batch had a smudged lot number, or realizing you're forced to buy 100,000 units just to package a small clinical trial run. You didn't spend millions on pharmaceutical R&D to have your compliance compromised by outdated printing technology. Pharmaceutical packaging demands absolute precision, traceability, and uncompromising barriers. Our digital print flexible packaging offers pixel-perfect serialization, medical-grade barriers, and agile low-volume runs, ensuring your nutraceuticals and pharma products are safe, compliant, and market-ready.",
  },
  "es": {
    title: "[ES] Digital Print Flexible Packaging For Pharmaceuticals | Achieve Pack",
    description: "[ES] High-precision digital print flexible packaging for pharmaceuticals, ensuring serialization compliance, child-resistant safety, and ultra-low MOQs for clinical trials.",
    heroTitle: "[ES] Digital Print Flexible Packaging For Pharmaceuticals",
    empathyHook: "[ES] We know the sinking feeling of a product recall because a packaging batch had a smudged lot number, or realizing you're forced to buy 100,000 units just to package a small clinical trial run. You didn't spend millions on pharmaceutical R&D to have your compliance compromised by outdated printing technology. Pharmaceutical packaging demands absolute precision, traceability, and uncompromising barriers. Our digital print flexible packaging offers pixel-perfect serialization, medical-grade barriers, and agile low-volume runs, ensuring your nutraceuticals and pharma products are safe, compliant, and market-ready.",},
  "fr": {
    title: "[FR] Digital Print Flexible Packaging For Pharmaceuticals | Achieve Pack",
    description: "[FR] High-precision digital print flexible packaging for pharmaceuticals, ensuring serialization compliance, child-resistant safety, and ultra-low MOQs for clinical trials.",
    heroTitle: "[FR] Digital Print Flexible Packaging For Pharmaceuticals",
    empathyHook: "[FR] We know the sinking feeling of a product recall because a packaging batch had a smudged lot number, or realizing you're forced to buy 100,000 units just to package a small clinical trial run. You didn't spend millions on pharmaceutical R&D to have your compliance compromised by outdated printing technology. Pharmaceutical packaging demands absolute precision, traceability, and uncompromising barriers. Our digital print flexible packaging offers pixel-perfect serialization, medical-grade barriers, and agile low-volume runs, ensuring your nutraceuticals and pharma products are safe, compliant, and market-ready.",},
  "zh-tw": {
    title: "[ZH-TW] Digital Print Flexible Packaging For Pharmaceuticals | Achieve Pack",
    description: "[ZH-TW] High-precision digital print flexible packaging for pharmaceuticals, ensuring serialization compliance, child-resistant safety, and ultra-low MOQs for clinical trials.",
    heroTitle: "[ZH-TW] Digital Print Flexible Packaging For Pharmaceuticals",
    empathyHook: "[ZH-TW] We know the sinking feeling of a product recall because a packaging batch had a smudged lot number, or realizing you're forced to buy 100,000 units just to package a small clinical trial run. You didn't spend millions on pharmaceutical R&D to have your compliance compromised by outdated printing technology. Pharmaceutical packaging demands absolute precision, traceability, and uncompromising barriers. Our digital print flexible packaging offers pixel-perfect serialization, medical-grade barriers, and agile low-volume runs, ensuring your nutraceuticals and pharma products are safe, compliant, and market-ready.",}
};

export default function DigitalPrintFlexiblePackagingForPharmaceuticalsPage() {
  const currentLang = 'en';
  const tLocal = localTranslations[currentLang];
  const isPouchDomain = getDomain() === 'pouch';

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    {
        "@type": "Question",
        "name": "Does digital printing meet pharmaceutical compliance standards?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We use low-migration, food-and-pharma safe inks. Our manufacturing processes comply with ISO 9001 and BRC/GFSI cleanroom standards, ensuring complete safety."
        }
    },
    {
        "@type": "Question",
        "name": "Can you print unique lot numbers on every pouch?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Through Variable Data Printing (VDP), we can print unique alphanumeric lot codes, expiration dates, and 2D barcodes directly onto the film during the main print run."
        }
    },
    {
        "@type": "Question",
        "name": "What is the barrier performance of your pharma pouches?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer multi-layer laminates including Aluminum foil and PCTFE (Aclar), which provide the absolute highest barrier against moisture, oxygen, and UV light (MVTR &lt; 0.01)."
        }
    },
    {
        "@type": "Question",
        "name": "Are your child-resistant zippers certified?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our child-resistant closures are tested and certified to meet the stringent requirements of ASTM D3475 and US CPSC standards."
        }
    },
    {
        "@type": "Question",
        "name": "What is the turnaround time for digital pharma packaging?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because there are no printing plates to manufacture, our digital print lead times are exceptionally fast, typically shipping within 10 to 15 business days."
        }
    }
]
  };

  const content = (
    <div className="max-w-7xl mx-auto px-4 py-16 text-neutral-800">
      
      {/* 1. Empathy Hook & Hero Image */}
      <div className="mb-16 text-center">
        <img 
          src="/imgs/blog/heros/digital-print-flexible-packaging-for-pharmaceuticals-hero.png" 
          alt="Digital Print Flexible Packaging For Pharmaceuticals" 
          className="w-full max-w-5xl rounded-2xl shadow-xl mx-auto mb-10 object-cover"
        />
        <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-neutral-600 font-medium">
          {tLocal.empathyHook}
        </p>
      </div>

      {/* 2. 5 Pain Points & Solutions */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">5 Packaging Pain Points & Engineering Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">01</span>
              <h3 className="font-bold text-lg leading-tight">High MOQs for Clinical Trials</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">Our plate-free digital printing technology allows for ultra-low MOQs (as low as 1,000 units), perfect for clinical trials, small-batch nutraceuticals, and multi-SKU product launches.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">02</span>
              <h3 className="font-bold text-lg leading-tight">Serialization & Track-and-Trace Compliance</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">We offer variable data printing (VDP), allowing every single pouch to have a unique, scannable QR code, serialized barcode, or sequential lot number for full supply chain traceability.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">03</span>
              <h3 className="font-bold text-lg leading-tight">Child Resistance Requirements</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">We integrate certified Child-Resistant (CR) push-to-turn or hidden-lock zippers that comply with ASTM D3475 and Poison Prevention Packaging Act (PPPA) standards.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">04</span>
              <h3 className="font-bold text-lg leading-tight">Microbial & Oxygen Contamination</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">Our pharma-grade structures utilize medical-grade aluminum foils or high-barrier EVOH, achieving near-zero OTR and MVTR to protect sensitive active pharmaceutical ingredients (APIs).</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">05</span>
              <h3 className="font-bold text-lg leading-tight">Counterfeit Products</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">Digital printing allows for complex micro-text, invisible UV-reactive inks, and holographic security elements to prevent counterfeiting and ensure brand authenticity.</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* 3. Ryan Wong's Engineering Notebook */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="bg-amber-50 border-2 border-amber-200 p-8 rounded-2xl shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldCheck className="w-24 h-24" />
          </div>
          <div className="relative z-10">
            <h4 className="font-bold text-amber-900 text-xl mb-4 flex items-center gap-3">
              <span className="bg-amber-200 text-amber-900 p-2 rounded-lg">🔬</span> 
              From Ryan Wong's Engineering Notebook
            </h4>
            <p className="italic text-amber-800 text-lg leading-relaxed mb-6">
              "I recently worked with a biotech startup launching a new probiotic supplement. They needed 50 different SKU variations for a multi-region clinical trial, but traditional rotogravure printers required massive plate fees and a 50k MOQ per SKU. They were stuck. I transitioned them to our HP Indigo digital printing press. We used a high-barrier pharma-grade PET/ALU/PE laminate. With digital printing, there are no plates. We printed all 50 SKUs in a single run of 5,000 total units, complete with serialized QR codes and sequential lot numbering on every single pouch. We saved them over $40,000 in setup fees and cut their lead time from 8 weeks to 10 days."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-900">RW</div>
              <div>
                <p className="font-bold text-amber-900">Ryan Wong</p>
                <p className="text-sm text-amber-700">Co-Founder & Packaging Engineer | 14+ Years Exp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Technical Comparison Matrix */}
      <div className="max-w-5xl mx-auto mb-20 overflow-x-auto">
        <h2 className="text-3xl font-bold mb-8">Technical Material Comparison</h2>
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-neutral-900 text-white">
              <th className="p-4 font-semibold rounded-tl-xl">Material Structure</th>
              <th className="p-4 font-semibold">Oxygen Barrier (OTR)</th>
              <th className="p-4 font-semibold">Moisture Barrier (MVTR)</th>
              <th className="p-4 font-semibold">Eco-Profile</th>
              <th className="p-4 font-semibold rounded-tr-xl">Best For</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="p-4 font-medium">PET / ALU / PE</td>
              <td className="p-4 text-emerald-600 font-bold">&lt; 0.01</td>
              <td className="p-4 text-emerald-600 font-bold">&lt; 0.01</td>
              <td className="p-4 text-neutral-500">Conventional</td>
              <td className="p-4 text-neutral-600">Maximum shelf life, pharma, extreme barrier</td>
            </tr>
            <tr className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="p-4 font-medium">MDO-PE / EVOH / PE</td>
              <td className="p-4 text-emerald-600 font-bold">&lt; 1.0</td>
              <td className="p-4 text-emerald-600 font-bold">&lt; 1.0</td>
              <td className="p-4 text-blue-600 font-bold">100% Recyclable</td>
              <td className="p-4 text-neutral-600">Sustainable foods, coffee, powders</td>
            </tr>
            <tr className="border-b border-neutral-100 hover:bg-neutral-50">
              <td className="p-4 font-medium">Kraft / ALOX / PLA</td>
              <td className="p-4 text-emerald-600 font-bold">&lt; 2.0</td>
              <td className="p-4 text-emerald-600 font-bold">&lt; 3.0</td>
              <td className="p-4 text-green-600 font-bold">Home Compostable</td>
              <td className="p-4 text-neutral-600">Organic herbs, premium teas, eco-brands</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 5. FAQs */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          
          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Does digital printing meet pharmaceutical compliance standards?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Yes. We use low-migration, food-and-pharma safe inks. Our manufacturing processes comply with ISO 9001 and BRC/GFSI cleanroom standards, ensuring complete safety.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Can you print unique lot numbers on every pouch?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Absolutely. Through Variable Data Printing (VDP), we can print unique alphanumeric lot codes, expiration dates, and 2D barcodes directly onto the film during the main print run.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              What is the barrier performance of your pharma pouches?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>We offer multi-layer laminates including Aluminum foil and PCTFE (Aclar), which provide the absolute highest barrier against moisture, oxygen, and UV light (MVTR &lt; 0.01).</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Are your child-resistant zippers certified?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Yes. Our child-resistant closures are tested and certified to meet the stringent requirements of ASTM D3475 and US CPSC standards.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              What is the turnaround time for digital pharma packaging?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Because there are no printing plates to manufacture, our digital print lead times are exceptionally fast, typically shipping within 10 to 15 business days.</p>
            </div>
          </details>
          
        </div>
      </div>

      {/* 6. Related Products */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Related Packaging Solutions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          <a href="/spec/biope-pp-triplex-metalised" className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary-500">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative"><img src="/imgs/store/products/compostable-oval-doypack-premium.png" className="w-full h-full object-cover" alt="Related Product" /></div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Child-Resistant Mylar Bag</h3>
              <p className="text-neutral-600 text-sm">ASTM certified CR zipper pouch.</p>
            </div>
          </a>
          

          <a href="/spec/biope-kraft-vmpet" className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary-500">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative"><img src="/imgs/store/products/eco-boxbottom-premium.png" className="w-full h-full object-cover" alt="Related Product" /></div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Serialized Pharma Sachet</h3>
              <p className="text-neutral-600 text-sm">Single-dose with variable data printing.</p>
            </div>
          </a>
          

          <a href="/spec/biope-pet-triplex-aluminum" className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary-500">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative"><img src="/imgs/store/products/stand-up-pouch-full-matte-pe70-hero.jpg" className="w-full h-full object-cover" alt="Related Product" /></div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">High-Barrier Nutraceutical Pouch</h3>
              <p className="text-neutral-600 text-sm">Foil-lined for absolute freshness.</p>
            </div>
          </a>
          
        </div>
      </div>

      {/* GEO Hidden Semantic Content */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          
          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Does digital printing meet pharmaceutical compliance standards?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Yes. We use low-migration, food-and-pharma safe inks. Our manufacturing processes comply with ISO 9001 and BRC/GFSI cleanroom standards, ensuring complete safety.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Can you print unique lot numbers on every pouch?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Absolutely. Through Variable Data Printing (VDP), we can print unique alphanumeric lot codes, expiration dates, and 2D barcodes directly onto the film during the main print run.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">What is the barrier performance of your pharma pouches?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">We offer multi-layer laminates including Aluminum foil and PCTFE (Aclar), which provide the absolute highest barrier against moisture, oxygen, and UV light (MVTR &lt; 0.01).</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Are your child-resistant zippers certified?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Yes. Our child-resistant closures are tested and certified to meet the stringent requirements of ASTM D3475 and US CPSC standards.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">What is the turnaround time for digital pharma packaging?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Because there are no printing plates to manufacture, our digital print lead times are exceptionally fast, typically shipping within 10 to 15 business days.</p>
            </div>
          </article>
          
        </section>
      </div>

    </div>
  );

  if (isPouchDomain) {
    return (
      <PouchLayout>
        <div className="bg-[#FAF9F6] min-h-screen font-mono">
          <Helmet>
            <title>{tLocal.title.replace('Achieve Pack', 'Pouch.eco')}</title>
            <meta name="description" content={tLocal.description} />
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
          </Helmet>
          
          <div className="pt-32 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="border-4 border-black rounded-2xl bg-[#D4FF00] p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-16">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
                {tLocal.heroTitle}
              </h1>
            </div>
            {content}
          </div>
        </div>
      </PouchLayout>
    );
  }

  return (
    <SEOPageLayout
        title={tLocal.title}
        description={tLocal.description}
    >
      <Helmet>
        <title>{tLocal.title}</title>
        <meta name="description" content={tLocal.description} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl">
            {tLocal.heroTitle}
          </h1>
        </div>
      </section>

      {content}
    </SEOPageLayout>
  );
}
