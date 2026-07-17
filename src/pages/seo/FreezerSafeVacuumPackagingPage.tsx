import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Leaf, Lock, Zap, Activity, Wind, Sun, Droplet, Printer, Snowflake, Eye, Box, Filter, Package, Barcode } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import PouchLayout from '../../components/pouch/PouchLayout';
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  en: {
    title: "Freezer Safe Vacuum Packaging | Achieve Pack",
    description: "Industrial-grade freezer safe vacuum packaging designed to prevent freezer burn, withstand sub-zero temperatures, and maintain hermetic seals.",
    heroTitle: "Freezer Safe Vacuum Packaging",
    empathyHook: "We know the sinking feeling of pulling your premium frozen seafood or meat from cold storage, only to find the vacuum seal has failed, the packaging is brittle and cracked, and the product is ruined by freezer burn. You didn't invest in high-quality sourcing just to lose it to cheap, cracking plastics. Freezer environments are brutal on packaging materials. Our freezer-safe vacuum packaging is engineered with specialized cold-resistant polymers that remain flexible and hermetic down to -40°C, ensuring your product stays perfectly preserved from blast freezing to the consumer's kitchen.",
  },
  "es": {
    title: "[ES] Freezer Safe Vacuum Packaging | Achieve Pack",
    description: "[ES] Industrial-grade freezer safe vacuum packaging designed to prevent freezer burn, withstand sub-zero temperatures, and maintain hermetic seals.",
    heroTitle: "[ES] Freezer Safe Vacuum Packaging",
    empathyHook: "[ES] We know the sinking feeling of pulling your premium frozen seafood or meat from cold storage, only to find the vacuum seal has failed, the packaging is brittle and cracked, and the product is ruined by freezer burn. You didn't invest in high-quality sourcing just to lose it to cheap, cracking plastics. Freezer environments are brutal on packaging materials. Our freezer-safe vacuum packaging is engineered with specialized cold-resistant polymers that remain flexible and hermetic down to -40°C, ensuring your product stays perfectly preserved from blast freezing to the consumer's kitchen.",},
  "fr": {
    title: "[FR] Freezer Safe Vacuum Packaging | Achieve Pack",
    description: "[FR] Industrial-grade freezer safe vacuum packaging designed to prevent freezer burn, withstand sub-zero temperatures, and maintain hermetic seals.",
    heroTitle: "[FR] Freezer Safe Vacuum Packaging",
    empathyHook: "[FR] We know the sinking feeling of pulling your premium frozen seafood or meat from cold storage, only to find the vacuum seal has failed, the packaging is brittle and cracked, and the product is ruined by freezer burn. You didn't invest in high-quality sourcing just to lose it to cheap, cracking plastics. Freezer environments are brutal on packaging materials. Our freezer-safe vacuum packaging is engineered with specialized cold-resistant polymers that remain flexible and hermetic down to -40°C, ensuring your product stays perfectly preserved from blast freezing to the consumer's kitchen.",},
  "zh-tw": {
    title: "[ZH-TW] Freezer Safe Vacuum Packaging | Achieve Pack",
    description: "[ZH-TW] Industrial-grade freezer safe vacuum packaging designed to prevent freezer burn, withstand sub-zero temperatures, and maintain hermetic seals.",
    heroTitle: "[ZH-TW] Freezer Safe Vacuum Packaging",
    empathyHook: "[ZH-TW] We know the sinking feeling of pulling your premium frozen seafood or meat from cold storage, only to find the vacuum seal has failed, the packaging is brittle and cracked, and the product is ruined by freezer burn. You didn't invest in high-quality sourcing just to lose it to cheap, cracking plastics. Freezer environments are brutal on packaging materials. Our freezer-safe vacuum packaging is engineered with specialized cold-resistant polymers that remain flexible and hermetic down to -40°C, ensuring your product stays perfectly preserved from blast freezing to the consumer's kitchen.",}
};

export default function FreezerSafeVacuumPackagingPage() {
  const currentLang = 'en';
  const tLocal = localTranslations[currentLang];
  const isPouchDomain = getDomain() === 'pouch';

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    {
        "@type": "Question",
        "name": "What temperature can your freezer safe vacuum bags withstand?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our specialized mPE and Nylon blended structures are tested and guaranteed to remain flexible and intact down to -40\u00b0C (-40\u00b0F), perfect for blast freezing."
        }
    },
    {
        "@type": "Question",
        "name": "How do you prevent bone punctures in vacuum packaging?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer heavy-duty, high-gauge co-extruded bags (up to 150+ microns) specifically designed with high puncture resistance for bone-in steaks and shellfish."
        }
    },
    {
        "@type": "Question",
        "name": "Can I boil these vacuum bags directly from the freezer?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer boil-in-bag (sous-vide) compatible structures that can go directly from a -20\u00b0C freezer into 100\u00b0C boiling water without delaminating."
        }
    },
    {
        "@type": "Question",
        "name": "Are your vacuum bags BPA-free and food safe?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. All our vacuum pouches are FDA and BRC/GFSI certified, completely free of BPA, phthalates, and heavy metals."
        }
    },
    {
        "@type": "Question",
        "name": "Can you custom print on vacuum bags?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer high-resolution reverse printing on the outer layer before lamination, meaning the ink is trapped and will never scratch off in the freezer."
        }
    }
]
  };

  const content = (
    <div className="max-w-7xl mx-auto px-4 py-16 text-neutral-800">
      
      {/* 1. Empathy Hook & Hero Image */}
      <div className="mb-16 text-center">
        <img 
          src="/imgs/blog/heros/freezer-safe-vacuum-packaging-hero.png" 
          alt="Freezer Safe Vacuum Packaging" 
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
              <h3 className="font-bold text-lg leading-tight">Brittle Cracking at Low Temps</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">We utilize metallocene polyethylene (mPE) blends that maintain high elasticity and impact resistance even at blast-freezing temperatures of -40°C.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">02</span>
              <h3 className="font-bold text-lg leading-tight">Freezer Burn & Oxidation</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">Our heavy-duty Polyamide (Nylon) exterior provides an exceptional oxygen barrier (OTR &lt; 5 cc/m²/day), entirely eliminating freezer burn.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">03</span>
              <h3 className="font-bold text-lg leading-tight">Bone Puncture Failures</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">For bone-in meats and sharp seafood, we deploy co-extruded structures up to 150 microns thick, increasing puncture resistance by 300% over standard bags.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">04</span>
              <h3 className="font-bold text-lg leading-tight">Seal Creep and Leakage</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">Our specialized sealant layers are formulated for high-tack, low-temperature initiation, ensuring seals hold tight even when contaminated by fats or juices.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">05</span>
              <h3 className="font-bold text-lg leading-tight">Cloudy Plastics Obscuring Product</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">We use high-clarity EVOH/mPE co-extrusions that remain crystal clear, allowing the premium quality of your frozen meats to shine through.</p>
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
              "A commercial seafood processor was experiencing a 15% failure rate in their frozen salmon fillets. Their standard PA/PE vacuum bags were shattering during transit at -20°C. In my 14 years of packaging engineering, this is a classic case of low-density polyethylene (LDPE) failing under thermal shock. We re-engineered their pouches using a specialized metallocene polyethylene (mPE) blended with a high-flexibility Polyamide (Nylon) layer. We increased the thickness to 110 microns and adjusted the sealing temperature to 170°C. The shattering stopped entirely, and they haven't had a freezer burn complaint since."
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
              What temperature can your freezer safe vacuum bags withstand?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Our specialized mPE and Nylon blended structures are tested and guaranteed to remain flexible and intact down to -40°C (-40°F), perfect for blast freezing.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              How do you prevent bone punctures in vacuum packaging?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>We offer heavy-duty, high-gauge co-extruded bags (up to 150+ microns) specifically designed with high puncture resistance for bone-in steaks and shellfish.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Can I boil these vacuum bags directly from the freezer?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Yes! We offer boil-in-bag (sous-vide) compatible structures that can go directly from a -20°C freezer into 100°C boiling water without delaminating.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Are your vacuum bags BPA-free and food safe?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Absolutely. All our vacuum pouches are FDA and BRC/GFSI certified, completely free of BPA, phthalates, and heavy metals.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Can you custom print on vacuum bags?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Yes, we offer high-resolution reverse printing on the outer layer before lamination, meaning the ink is trapped and will never scratch off in the freezer.</p>
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
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Clear Vacuum Pouch</h3>
              <p className="text-neutral-600 text-sm">High clarity, heavy-duty freezer pouch.</p>
            </div>
          </a>
          

          <a href="/spec/biope-kraft-vmpet" className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary-500">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative"><img src="/imgs/store/products/eco-boxbottom-premium.png" className="w-full h-full object-cover" alt="Related Product" /></div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Printed Vacuum Bag</h3>
              <p className="text-neutral-600 text-sm">Custom branded freezer-safe packaging.</p>
            </div>
          </a>
          

          <a href="/spec/biope-pet-triplex-aluminum" className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary-500">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative"><img src="/imgs/store/products/stand-up-pouch-full-matte-pe70-hero.jpg" className="w-full h-full object-cover" alt="Related Product" /></div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Sous-Vide Compatible Bag</h3>
              <p className="text-neutral-600 text-sm">From freezer to boiling water safely.</p>
            </div>
          </a>
          
        </div>
      </div>

      {/* GEO Hidden Semantic Content */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          
          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">What temperature can your freezer safe vacuum bags withstand?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Our specialized mPE and Nylon blended structures are tested and guaranteed to remain flexible and intact down to -40°C (-40°F), perfect for blast freezing.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">How do you prevent bone punctures in vacuum packaging?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">We offer heavy-duty, high-gauge co-extruded bags (up to 150+ microns) specifically designed with high puncture resistance for bone-in steaks and shellfish.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Can I boil these vacuum bags directly from the freezer?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Yes! We offer boil-in-bag (sous-vide) compatible structures that can go directly from a -20°C freezer into 100°C boiling water without delaminating.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Are your vacuum bags BPA-free and food safe?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Absolutely. All our vacuum pouches are FDA and BRC/GFSI certified, completely free of BPA, phthalates, and heavy metals.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Can you custom print on vacuum bags?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Yes, we offer high-resolution reverse printing on the outer layer before lamination, meaning the ink is trapped and will never scratch off in the freezer.</p>
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
