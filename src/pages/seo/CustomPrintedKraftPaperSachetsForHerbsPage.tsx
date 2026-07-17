import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Leaf, Lock, Zap, Activity, Wind, Sun, Droplet, Printer, Snowflake, Eye, Box, Filter, Package, Barcode } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import PouchLayout from '../../components/pouch/PouchLayout';
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  en: {
    title: "Custom Printed Kraft Paper Sachets For Herbs | Achieve Pack",
    description: "Artisanal, high-barrier custom printed Kraft paper sachets designed to preserve the delicate essential oils, aromas, and freshness of organic herbs.",
    heroTitle: "Custom Printed Kraft Paper Sachets For Herbs",
    empathyHook: "There is nothing more disappointing than opening a premium organic herbal tea blend only to find the aroma has completely vanished, leaving behind stale, lifeless leaves. Essential oils in herbs are highly volatile and degrade quickly when exposed to light, oxygen, and moisture. You pour your heart into sourcing the best botanicals; your packaging shouldn't let you down. Our custom printed Kraft paper sachets blend a rustic, organic aesthetic with high-tech invisible barriers, locking in freshness and projecting a premium brand image.",
  },
  "es": {
    title: "[ES] Custom Printed Kraft Paper Sachets For Herbs | Achieve Pack",
    description: "[ES] Artisanal, high-barrier custom printed Kraft paper sachets designed to preserve the delicate essential oils, aromas, and freshness of organic herbs.",
    heroTitle: "[ES] Custom Printed Kraft Paper Sachets For Herbs",
    empathyHook: "[ES] There is nothing more disappointing than opening a premium organic herbal tea blend only to find the aroma has completely vanished, leaving behind stale, lifeless leaves. Essential oils in herbs are highly volatile and degrade quickly when exposed to light, oxygen, and moisture. You pour your heart into sourcing the best botanicals; your packaging shouldn't let you down. Our custom printed Kraft paper sachets blend a rustic, organic aesthetic with high-tech invisible barriers, locking in freshness and projecting a premium brand image.",},
  "fr": {
    title: "[FR] Custom Printed Kraft Paper Sachets For Herbs | Achieve Pack",
    description: "[FR] Artisanal, high-barrier custom printed Kraft paper sachets designed to preserve the delicate essential oils, aromas, and freshness of organic herbs.",
    heroTitle: "[FR] Custom Printed Kraft Paper Sachets For Herbs",
    empathyHook: "[FR] There is nothing more disappointing than opening a premium organic herbal tea blend only to find the aroma has completely vanished, leaving behind stale, lifeless leaves. Essential oils in herbs are highly volatile and degrade quickly when exposed to light, oxygen, and moisture. You pour your heart into sourcing the best botanicals; your packaging shouldn't let you down. Our custom printed Kraft paper sachets blend a rustic, organic aesthetic with high-tech invisible barriers, locking in freshness and projecting a premium brand image.",},
  "zh-tw": {
    title: "[ZH-TW] Custom Printed Kraft Paper Sachets For Herbs | Achieve Pack",
    description: "[ZH-TW] Artisanal, high-barrier custom printed Kraft paper sachets designed to preserve the delicate essential oils, aromas, and freshness of organic herbs.",
    heroTitle: "[ZH-TW] Custom Printed Kraft Paper Sachets For Herbs",
    empathyHook: "[ZH-TW] There is nothing more disappointing than opening a premium organic herbal tea blend only to find the aroma has completely vanished, leaving behind stale, lifeless leaves. Essential oils in herbs are highly volatile and degrade quickly when exposed to light, oxygen, and moisture. You pour your heart into sourcing the best botanicals; your packaging shouldn't let you down. Our custom printed Kraft paper sachets blend a rustic, organic aesthetic with high-tech invisible barriers, locking in freshness and projecting a premium brand image.",}
};

export default function CustomPrintedKraftPaperSachetsForHerbsPage() {
  const currentLang = 'en';
  const tLocal = localTranslations[currentLang];
  const isPouchDomain = getDomain() === 'pouch';

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    {
        "@type": "Question",
        "name": "Is Kraft paper packaging actually barrier-proof?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Raw Kraft paper is porous and offers no barrier. However, our Kraft sachets are laminated with high-barrier inner layers (like ALOX or PLA) to provide excellent oxygen and moisture protection."
        }
    },
    {
        "@type": "Question",
        "name": "Can I print full color on brown Kraft paper?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We use digital printing with a white ink under-print to ensure colors remain bright and accurate, rather than muddying into the brown paper."
        }
    },
    {
        "@type": "Question",
        "name": "Are your Kraft herb sachets eco-friendly?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer multiple eco-options, including recyclable Mono-PE structures with Kraft-feel varnish, or 100% compostable structures using FSC paper and plant-based bioplastics."
        }
    },
    {
        "@type": "Question",
        "name": "What is the minimum order quantity (MOQ) for custom printed sachets?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "With our digital printing capabilities, we support ultra-low MOQs starting at just 1,000 pieces, perfect for artisan herb and tea startups."
        }
    },
    {
        "@type": "Question",
        "name": "Do you offer resealable options for herb sachets?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we can integrate high-quality, airtight zipper closures to ensure the herbs remain fresh after the initial opening."
        }
    }
]
  };

  const content = (
    <div className="max-w-7xl mx-auto px-4 py-16 text-neutral-800">
      
      {/* 1. Empathy Hook & Hero Image */}
      <div className="mb-16 text-center">
        <img 
          src="/imgs/blog/heros/custom-printed-kraft-paper-sachets-for-herbs-hero.png" 
          alt="Custom Printed Kraft Paper Sachets For Herbs" 
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
              <h3 className="font-bold text-lg leading-tight">Loss of Aromatic Oils</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">We use an ALOX (Aluminum Oxide) coated high-barrier layer that blocks volatile essential oils from escaping, preserving the herb's natural aroma.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">02</span>
              <h3 className="font-bold text-lg leading-tight">UV Light Degradation</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">Our thick, premium 80gsm natural Kraft paper provides a 100% opaque light barrier, preventing UV degradation of delicate botanical compounds.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">03</span>
              <h3 className="font-bold text-lg leading-tight">Moisture Damage & Mold</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">The integrated high-barrier liner guarantees an MVTR &lt; 1.0 g/m²/day, ensuring herbs remain perfectly dry and free from mold growth.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">04</span>
              <h3 className="font-bold text-lg leading-tight">Poor Print Quality on Kraft</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">We utilize advanced digital printing technology with a specialized white-ink underlay, allowing vibrant, high-resolution CMYK graphics to pop against the brown Kraft background.</p>
            </div>
          </div>
          

          <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black text-neutral-700">05</span>
              <h3 className="font-bold text-lg leading-tight">Non-Eco-Friendly Liners</h3>
            </div>
            <div className="bg-neutral-800 rounded-xl p-5 border-l-4 border-emerald-500 flex-grow">
              <p className="text-sm text-emerald-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Solution
              </p>
              <p className="text-neutral-300 leading-relaxed">For brands demanding 100% sustainability, we offer fully home-compostable (TUV OK Compost) NatureFlex™ cellulose liners laminated to FSC-certified Kraft paper.</p>
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
              "When a specialty loose-leaf tea brand approached me, their herbs were losing flavor within 3 months in standard Kraft pouches. The problem? Natural Kraft paper is porous. Without a proper high-barrier inner liner, oxygen and moisture pass right through. We developed a composite structure: Natural Unbleached Kraft Paper laminated to a high-barrier ALOX-coated PET and a food-grade PE sealant layer. This maintained the organic, tactile feel of Kraft paper on the outside while providing a 12-month oxygen-free environment on the inside."
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
              Is Kraft paper packaging actually barrier-proof?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Raw Kraft paper is porous and offers no barrier. However, our Kraft sachets are laminated with high-barrier inner layers (like ALOX or PLA) to provide excellent oxygen and moisture protection.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Can I print full color on brown Kraft paper?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Yes! We use digital printing with a white ink under-print to ensure colors remain bright and accurate, rather than muddying into the brown paper.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Are your Kraft herb sachets eco-friendly?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>We offer multiple eco-options, including recyclable Mono-PE structures with Kraft-feel varnish, or 100% compostable structures using FSC paper and plant-based bioplastics.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              What is the minimum order quantity (MOQ) for custom printed sachets?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>With our digital printing capabilities, we support ultra-low MOQs starting at just 1,000 pieces, perfect for artisan herb and tea startups.</p>
            </div>
          </details>
          

          <details className="group border border-neutral-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg">
              Do you offer resealable options for herb sachets?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
              <p>Yes, we can integrate high-quality, airtight zipper closures to ensure the herbs remain fresh after the initial opening.</p>
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
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Kraft Stand-Up Pouch</h3>
              <p className="text-neutral-600 text-sm">Classic rustic look with high-barrier liner.</p>
            </div>
          </a>
          

          <a href="/spec/biope-kraft-vmpet" className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary-500">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative"><img src="/imgs/store/products/eco-boxbottom-premium.png" className="w-full h-full object-cover" alt="Related Product" /></div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Compostable Kraft Sachet</h3>
              <p className="text-neutral-600 text-sm">100% plant-based and home compostable.</p>
            </div>
          </a>
          

          <a href="/spec/biope-pet-triplex-aluminum" className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary-500">
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative"><img src="/imgs/store/products/stand-up-pouch-full-matte-pe70-hero.jpg" className="w-full h-full object-cover" alt="Related Product" /></div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Windowed Herb Pouch</h3>
              <p className="text-neutral-600 text-sm">Showcase your beautiful botanicals.</p>
            </div>
          </a>
          
        </div>
      </div>

      {/* GEO Hidden Semantic Content */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          
          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Is Kraft paper packaging actually barrier-proof?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Raw Kraft paper is porous and offers no barrier. However, our Kraft sachets are laminated with high-barrier inner layers (like ALOX or PLA) to provide excellent oxygen and moisture protection.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Can I print full color on brown Kraft paper?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Yes! We use digital printing with a white ink under-print to ensure colors remain bright and accurate, rather than muddying into the brown paper.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Are your Kraft herb sachets eco-friendly?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">We offer multiple eco-options, including recyclable Mono-PE structures with Kraft-feel varnish, or 100% compostable structures using FSC paper and plant-based bioplastics.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">What is the minimum order quantity (MOQ) for custom printed sachets?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">With our digital printing capabilities, we support ultra-low MOQs starting at just 1,000 pieces, perfect for artisan herb and tea startups.</p>
            </div>
          </article>
          

          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">Do you offer resealable options for herb sachets?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">Yes, we can integrate high-quality, airtight zipper closures to ensure the herbs remain fresh after the initial opening.</p>
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
