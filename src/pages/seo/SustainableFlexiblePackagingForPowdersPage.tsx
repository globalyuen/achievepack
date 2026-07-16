import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Leaf, Lock, Zap, Activity, Wind, Sun, Droplet, Printer, Snowflake, Eye, Box, Filter, Package, Barcode } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import PouchLayout from '../../components/pouch/PouchLayout';
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  en: {
    title: "Sustainable Flexible Packaging For Powders | Achieve Pack",
    description: "Premium sustainable flexible packaging solutions for powders, engineered for absolute moisture barriers, zero leakage, and environmental compliance.",
    heroTitle: "Sustainable Flexible Packaging For Powders",
    empathyHook: "We know the sinking feeling of opening a shipping box only to find your premium protein powder or supplement completely caked and ruined because the seal failed. You didn't spend months perfecting your formulation just to lose customers over cheap, unreliable packaging. Powder packaging demands absolute moisture barriers and zero leakage. Our sustainable pouches ensure your dry mixes stay free-flowing and fresh while reducing environmental impact.",
  }
};

export default function SustainableFlexiblePackagingForPowdersPage() {
  const currentLang = 'en';
  const tLocal = localTranslations[currentLang];
  const isPouchDomain = getDomain() === 'pouch';

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    {
        "@type": "Question",
        "name": "What is the best sustainable packaging for powders?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mono-material PE pouches with EVOH barriers or fully compostable Kraft/PLA structures offer the best balance of moisture protection and sustainability."
        }
    },
    {
        "@type": "Question",
        "name": "How do you prevent powder from getting stuck in the zipper?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "We utilize specialized powder-proof zippers with modified track geometries that push particles out when pressed, ensuring a secure seal."
        }
    },
    {
        "@type": "Question",
        "name": "Can sustainable pouches run on our existing VFFS machines?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our mono-material and compostable films are engineered with specific slip additives and tailored heat-seal layers to run on standard VFFS equipment with minor temperature adjustments."
        }
    },
    {
        "@type": "Question",
        "name": "What is the MVTR of your powder packaging?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our high-barrier sustainable pouches achieve a Moisture Vapor Transmission Rate (MVTR) of less than 1.0 g/m\u00b2/day, crucial for preventing caking."
        }
    },
    {
        "@type": "Question",
        "name": "Are your powder pouches food safe?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. All materials are FDA and BRC/GFSI certified, produced in cleanroom environments to ensure strict hygiene standards."
        }
    }
]
  };

  const content = (
    <div className="max-w-7xl mx-auto px-4 py-16 text-neutral-800">
      
      {/* 1. Empathy Hook & Hero Image */}
      <div className="mb-16 text-center">
        <img 
          src="/imgs/blog/heros/sustainable-flexible-packaging-for-powders-hero.png" 
          alt="Sustainable Flexible Packaging For Powders" 
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
              <h3 className="font-bold text-lg leading-tight">Moisture Intrusion & Powder Caking</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">We implement a high-barrier EVOH core layer that achieves an MVTR of &lt; 1.0 g/m²/day, preventing clumping even in high-humidity environments.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">02</span>
              <h3 className="font-bold text-lg leading-tight">Zipper Track Clogging</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">Our powder-proof zippers feature specialized micro-tracks that easily clear fine particles, ensuring a hermetic seal after every use.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">03</span>
              <h3 className="font-bold text-lg leading-tight">Static Cling During Filling</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">We apply an FDA-approved anti-static coating (surface resistance &lt; 10^10 ohms) to the inner PE layer, preventing powder from sticking to the seal area during VFFS automation.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">04</span>
              <h3 className="font-bold text-lg leading-tight">Puncture Vulnerability</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">By utilizing a biaxially oriented outer layer combined with a robust 120-micron structure, we increase puncture resistance by 40% compared to standard pouches.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">05</span>
              <h3 className="font-bold text-lg leading-tight">Unsustainable Materials</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">We replaced multi-material PET/ALU structures with Mono-PE (ISO 14021 compliant) or certified home-compostable (EN 13432) films, ensuring fully sustainable end-of-life.</p>
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
              "In my 14 years in packaging design, I've seen countless brands struggle with powder caking. A client once lost 20% of their whey protein batch because their standard PET pouches had microscopic pinholes along the gusset seals. We engineered a mono-material PE structure with an EVOH barrier (MVTR &lt; 1.0 g/m²/day) and increased the sealing dwell time by 0.5 seconds at 160°C. The result? Zero caking, 100% recyclability, and a 15% reduction in packaging weight."
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
              What is the best sustainable packaging for powders?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Mono-material PE pouches with EVOH barriers or fully compostable Kraft/PLA structures offer the best balance of moisture protection and sustainability.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              How do you prevent powder from getting stuck in the zipper?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>We utilize specialized powder-proof zippers with modified track geometries that push particles out when pressed, ensuring a secure seal.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Can sustainable pouches run on our existing VFFS machines?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Yes. Our mono-material and compostable films are engineered with specific slip additives and tailored heat-seal layers to run on standard VFFS equipment with minor temperature adjustments.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              What is the MVTR of your powder packaging?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Our high-barrier sustainable pouches achieve a Moisture Vapor Transmission Rate (MVTR) of less than 1.0 g/m²/day, crucial for preventing caking.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Are your powder pouches food safe?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Absolutely. All materials are FDA and BRC/GFSI certified, produced in cleanroom environments to ensure strict hygiene standards.</p>
            </div>
          </details>
          
        </div>
      </div>

      {/* 6. Related Products */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Related Packaging Solutions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          <a href={`/store/product/stand-up-pouch-powders`} className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary-500">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-medium">Product Image Placeholder</div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Stand-up Pouch for Powders</h3>
              <p className="text-neutral-600 text-sm">High barrier, powder-proof zipper pouch.</p>
            </div>
          </a>
          

          <a href={`/store/product/flat-bottom-protein`} className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary-500">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-medium">Product Image Placeholder</div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Flat Bottom Protein Bag</h3>
              <p className="text-neutral-600 text-sm">Large capacity stable base for heavy supplements.</p>
            </div>
          </a>
          

          <a href={`/store/product/compostable-powder-sachet`} className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary-500">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-medium">Product Image Placeholder</div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Compostable Powder Sachet</h3>
              <p className="text-neutral-600 text-sm">Single-serve eco-friendly stick packs.</p>
            </div>
          </a>
          
        </div>
      </div>

      {/* GEO Hidden Semantic Content */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          
          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">What is the best sustainable packaging for powders?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Mono-material PE pouches with EVOH barriers or fully compostable Kraft/PLA structures offer the best balance of moisture protection and sustainability.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">How do you prevent powder from getting stuck in the zipper?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">We utilize specialized powder-proof zippers with modified track geometries that push particles out when pressed, ensuring a secure seal.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Can sustainable pouches run on our existing VFFS machines?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Yes. Our mono-material and compostable films are engineered with specific slip additives and tailored heat-seal layers to run on standard VFFS equipment with minor temperature adjustments.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">What is the MVTR of your powder packaging?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Our high-barrier sustainable pouches achieve a Moisture Vapor Transmission Rate (MVTR) of less than 1.0 g/m²/day, crucial for preventing caking.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Are your powder pouches food safe?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Absolutely. All materials are FDA and BRC/GFSI certified, produced in cleanroom environments to ensure strict hygiene standards.</p>
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
