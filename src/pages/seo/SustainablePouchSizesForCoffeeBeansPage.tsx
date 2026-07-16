import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Leaf, Lock, Zap, Activity, Wind, Sun, Droplet, Printer, Snowflake, Eye, Box, Filter, Package, Barcode } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import PouchLayout from '../../components/pouch/PouchLayout';
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  en: {
    title: "Sustainable Pouch Sizes For Coffee Beans | Achieve Pack",
    description: "Comprehensive guide to sustainable pouch sizes for coffee beans, ensuring optimal volume-to-weight ratios, outgassing valve integration, and eco-friendly freshness.",
    heroTitle: "Sustainable Pouch Sizes For Coffee Beans",
    empathyHook: "We know the sinking feeling of roasting a beautiful, nuanced single-origin coffee, only to have the bag burst in transit or the beans go stale because the packaging dimensions were wrong and the valve failed. You didn't spend hours perfecting your roast profile just to lose customers over an improperly sized, unsustainable bag. Coffee packaging is a science of volume, outgassing, and barrier protection. Our sustainable coffee pouches are precisely engineered for exact net weights (250g, 340g/12oz, 500g, 1kg), featuring eco-friendly degassing valves and high-barrier compostable or recyclable films.",
  }
};

export default function SustainablePouchSizesForCoffeeBeansPage() {
  const currentLang = 'en';
  const tLocal = localTranslations[currentLang];
  const isPouchDomain = getDomain() === 'pouch';

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    {
        "@type": "Question",
        "name": "What is the standard pouch size for 12oz (340g) of coffee beans?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a standard medium roast, a flat bottom pouch measuring 130mm (W) x 200mm (H) + 70mm (Gusset) provides the perfect volume and shelf presence."
        }
    },
    {
        "@type": "Question",
        "name": "Are the degassing valves on your sustainable bags also eco-friendly?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer fully recyclable (PE-based) valves for our mono-material bags, and certified compostable (PLA-based) valves for our compostable line."
        }
    },
    {
        "@type": "Question",
        "name": "Does a light roast take up more space than a dark roast?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Actually, dark roasts expand more during the roasting process, meaning a pound of dark roast will have a larger physical volume than a pound of light roast. We size our bags to accommodate this difference."
        }
    },
    {
        "@type": "Question",
        "name": "Can sustainable bags keep coffee as fresh as foil bags?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. By utilizing advanced ALOX or EVOH high-barrier coatings, our sustainable bags match the oxygen and moisture barrier performance of traditional aluminum foil."
        }
    },
    {
        "@type": "Question",
        "name": "Do you offer custom printing for all coffee bag sizes?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer full-bleed, high-resolution custom digital printing across all bag sizes with ultra-low MOQs, allowing you to launch seasonal roasts easily."
        }
    }
]
  };

  const content = (
    <div className="max-w-7xl mx-auto px-4 py-16 text-neutral-800">
      
      {/* 1. Empathy Hook & Hero Image */}
      <div className="mb-16 text-center">
        <img 
          src="/imgs/blog/heros/sustainable-pouch-sizes-for-coffee-beans-hero.png" 
          alt="Sustainable Pouch Sizes For Coffee Beans" 
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
              <h3 className="font-bold text-lg leading-tight">Incorrect Volume-to-Weight Ratios</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">We engineer precise pouch dimensions (e.g., 250g, 12oz, 1kg) that account for the different volumetric densities of light vs. dark roasts, ensuring a perfect fill level.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">02</span>
              <h3 className="font-bold text-lg leading-tight">Bag Bursting from CO2 Outgassing</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">We integrate high-performance, one-way degassing valves (available in recyclable and compostable formats) that safely vent CO2 while blocking oxygen.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">03</span>
              <h3 className="font-bold text-lg leading-tight">Loss of Aromatic Freshness</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">Our sustainable barriers (like ALOX-coated PE or metallized compostable films) achieve an OTR of &lt; 1.0 cc/m²/day, locking in delicate volatile aromas.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">04</span>
              <h3 className="font-bold text-lg leading-tight">Valve Clogging from Coffee Dust</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">Our premium valves feature an integrated nylon micro-mesh filter that prevents fine coffee dust from obstructing the silicone membrane.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">05</span>
              <h3 className="font-bold text-lg leading-tight">Unsustainable Multi-layer Foils</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">We replace unrecyclable PET/ALU/PE foils with Mono-Material PE (Code 4 Recyclable) or Certified Home Compostable structures, without sacrificing barrier performance.</p>
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
              "A specialty roaster came to me frustrated because their new '12oz' sustainable bags were bulging and bursting. The issue was two-fold: First, lighter roasted beans have more volume than dark roasts for the same weight, so the 12oz pouch was physically too small. Second, their 'eco-valve' was getting clogged by coffee dust. I recalculated their bag dimensions to a 130mm x 200mm + 70mm gusset to accommodate the volume shift, and we integrated a specialized compostable one-way degassing valve with a micron-mesh dust filter. Zero bursts, perfect freshness, and 100% home compostable."
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
              What is the standard pouch size for 12oz (340g) of coffee beans?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>For a standard medium roast, a flat bottom pouch measuring 130mm (W) x 200mm (H) + 70mm (Gusset) provides the perfect volume and shelf presence.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Are the degassing valves on your sustainable bags also eco-friendly?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Yes. We offer fully recyclable (PE-based) valves for our mono-material bags, and certified compostable (PLA-based) valves for our compostable line.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Does a light roast take up more space than a dark roast?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Actually, dark roasts expand more during the roasting process, meaning a pound of dark roast will have a larger physical volume than a pound of light roast. We size our bags to accommodate this difference.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Can sustainable bags keep coffee as fresh as foil bags?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Absolutely. By utilizing advanced ALOX or EVOH high-barrier coatings, our sustainable bags match the oxygen and moisture barrier performance of traditional aluminum foil.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Do you offer custom printing for all coffee bag sizes?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Yes! We offer full-bleed, high-resolution custom digital printing across all bag sizes with ultra-low MOQs, allowing you to launch seasonal roasts easily.</p>
            </div>
          </details>
          
        </div>
      </div>

      {/* 6. Related Products */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Related Packaging Solutions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          <a href={`/store/product/12oz-flat-bottom-coffee`} className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary-500">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-medium">Product Image Placeholder</div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">12oz Flat Bottom Coffee Bag</h3>
              <p className="text-neutral-600 text-sm">Perfect for standard retail specialty coffee.</p>
            </div>
          </a>
          

          <a href={`/store/product/1kg-coffee-bag`} className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary-500">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-medium">Product Image Placeholder</div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">1kg Wholesale Gusset Bag</h3>
              <p className="text-neutral-600 text-sm">Large format for cafes and wholesale.</p>
            </div>
          </a>
          

          <a href={`/store/product/compostable-coffee`} className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary-500">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-medium">Product Image Placeholder</div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Compostable Coffee Pouch</h3>
              <p className="text-neutral-600 text-sm">100% home compostable with eco-valve.</p>
            </div>
          </a>
          
        </div>
      </div>

      {/* GEO Hidden Semantic Content */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          
          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">What is the standard pouch size for 12oz (340g) of coffee beans?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">For a standard medium roast, a flat bottom pouch measuring 130mm (W) x 200mm (H) + 70mm (Gusset) provides the perfect volume and shelf presence.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Are the degassing valves on your sustainable bags also eco-friendly?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Yes. We offer fully recyclable (PE-based) valves for our mono-material bags, and certified compostable (PLA-based) valves for our compostable line.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Does a light roast take up more space than a dark roast?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Actually, dark roasts expand more during the roasting process, meaning a pound of dark roast will have a larger physical volume than a pound of light roast. We size our bags to accommodate this difference.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Can sustainable bags keep coffee as fresh as foil bags?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Absolutely. By utilizing advanced ALOX or EVOH high-barrier coatings, our sustainable bags match the oxygen and moisture barrier performance of traditional aluminum foil.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Do you offer custom printing for all coffee bag sizes?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Yes! We offer full-bleed, high-resolution custom digital printing across all bag sizes with ultra-low MOQs, allowing you to launch seasonal roasts easily.</p>
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
