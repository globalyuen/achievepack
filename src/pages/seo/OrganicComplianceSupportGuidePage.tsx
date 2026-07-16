import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Leaf, AlertTriangle, BookOpen, Package } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import PouchLayout from '../../components/pouch/PouchLayout';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  en: {
    title: "Organic Compliance Support Guide | Achieve Pack",
    description: "Premium Organic Compliance Support Guide solutions designed for maximum performance and sustainability.",
    heroTitle: "Organic Compliance Support Guide",
    empathyHook: "Navigating organic packaging compliance can be a maze of regulations. We simplify the certification process with traceable, verified materials that seamlessly align with global organic standards.",
  }
};

export default function OrganicComplianceSupportGuidePage() {
  const currentLang = 'en';
  const tLocal = localTranslations[currentLang];
  const isPouchDomain = getDomain() === 'pouch';

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the core benefits of Organic Compliance Support Guide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It provides superior barrier protection and sustainable disposal options without compromising on high-end visual aesthetics."
        }
      }
    ]
  };

  const content = (
    <div className="max-w-7xl mx-auto px-4 py-16 text-neutral-800">
      <div className="mb-12">
        <img 
          src="/imgs/seo/organic_compliance_support_guide_infographic_5.png" 
          alt="Organic Compliance Support Guide" 
          className="w-full max-w-4xl rounded-2xl shadow-xl mx-auto mb-10 object-cover"
        />
        <p className="text-xl leading-relaxed max-w-3xl mx-auto text-neutral-600 font-medium">
          {tLocal.empathyHook}
        </p>
      </div>

      <div className="bg-neutral-50 rounded-2xl p-8 mb-16 border border-neutral-100 shadow-sm max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">5 Pain Points & Solutions</h2>
        <div className="space-y-6">
          {[1,2,3,4,5].map(num => (
            <div key={num} className="bg-neutral-900 text-white p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl">0{num}</div>
              <h3 className="text-xl font-bold mb-3 pr-12 text-white">Challenge: Maintaining structural integrity & freshness</h3>
              <div className="bg-emerald-900/40 p-4 rounded-lg border border-emerald-500/30">
                <span className="text-emerald-400 font-bold flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4" /> ✅ Solution:
                </span>
                <p className="text-emerald-100">Implement our 120-micron multi-layer lamination capable of sustaining a 0.05 bar pressure differential, ensuring absolute seal reliability.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 p-8 rounded-xl max-w-4xl mx-auto mb-16">
        <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5" /> 🔬 From Ryan Wong's Engineering Notebook
        </h4>
        <p className="italic text-amber-800 leading-relaxed mb-4">
          "When we tested standard packaging films against rapid moisture changes, they repeatedly delaminated. We had to rethink the adhesive layer. By switching to a solventless curing process over 48 hours, we eliminated VOC emissions and increased the bond strength by 30%. The result is a structure that won't wrinkle or tear under extreme retail environments."
        </p>
        <p className="text-amber-900 font-bold">— Ryan Wong, Co-Founder & Chief Packaging Engineer</p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border border-neutral-200 rounded-xl bg-white group cursor-pointer">
            <summary className="font-bold text-lg p-6 hover:text-primary-600 transition-colors">What are the main advantages of Organic Compliance Support Guide?</summary>
            <div className="p-6 pt-0 text-neutral-600 border-t border-neutral-100 mt-2">
              <p>It provides an incredible balance of high-barrier protection (OTR &lt; 0.1) and aesthetic appeal, backed by rigorous GRS/FSC certifications.</p>
            </div>
          </details>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">Related Store Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-neutral-200 rounded-xl p-4 bg-white hover:shadow-md transition-shadow">
            <Package className="w-8 h-8 text-primary-500 mb-3" />
            <h4 className="font-bold mb-2">Sustainable Stand Up Pouch</h4>
            <p className="text-sm text-neutral-600 mb-4">Perfect match for these technical requirements.</p>
            <a href="/store/product/sustainable-stand-up-pouch" className="text-primary-600 font-medium text-sm hover:underline">View Product →</a>
          </div>
          <div className="border border-neutral-200 rounded-xl p-4 bg-white hover:shadow-md transition-shadow">
            <Package className="w-8 h-8 text-primary-500 mb-3" />
            <h4 className="font-bold mb-2">Eco Flat Bottom Bag</h4>
            <p className="text-sm text-neutral-600 mb-4">High capacity alternative.</p>
            <a href="/store/product/eco-flat-bottom-bag" className="text-primary-600 font-medium text-sm hover:underline">View Product →</a>
          </div>
          <div className="border border-neutral-200 rounded-xl p-4 bg-white hover:shadow-md transition-shadow">
            <Package className="w-8 h-8 text-primary-500 mb-3" />
            <h4 className="font-bold mb-2">Recyclable Gusset Bag</h4>
            <p className="text-sm text-neutral-600 mb-4">Ideal for wholesale volumes.</p>
            <a href="/store/product/recyclable-gusset-bag" className="text-primary-600 font-medium text-sm hover:underline">View Product →</a>
          </div>
        </div>
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
            <p className="text-xl md:text-2xl font-bold max-w-3xl">
              {tLocal.empathyHook}
            </p>
          </div>
          {content}
        </div>
        </div>
      </PouchLayout>
    );
  }

  return (
    <SEOPageLayout title={tLocal.title} description={tLocal.description}>
      <Helmet>
        <title>{tLocal.title}</title>
        <meta name="description" content={tLocal.description} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <section className="bg-neutral-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {tLocal.heroTitle}
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
            {tLocal.empathyHook}
          </p>
        </div>
      </section>
      {content}
    </SEOPageLayout>
  );
}
