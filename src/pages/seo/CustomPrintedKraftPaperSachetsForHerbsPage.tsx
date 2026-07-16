import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Factory, Building2, Leaf } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import PouchLayout from '../../components/pouch/PouchLayout';
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  en: {
    title: "Custom Printed Kraft Paper Sachets For Herbs | Achieve Pack",
    description: "Premium Custom Printed Kraft Paper Sachets For Herbs solutions designed for maximum performance and sustainability.",
    heroTitle: "Custom Printed Kraft Paper Sachets For Herbs",
    empathyHook: "Herbs require delicate aromatic preservation. Our high-barrier Kraft paper sachets blend a natural, organic look with robust functional layers to lock in terpenes and flavors.",
  }
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
        "name": "What are the benefits of Custom Printed Kraft Paper Sachets For Herbs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It provides superior protection, extends shelf life, and ensures sustainable end-of-life disposal while maintaining premium brand aesthetics."
        }
      }
    ]
  };

  const content = (
    <div className="max-w-7xl mx-auto px-4 py-16 text-neutral-800">
      <div className="mb-12">
        <img 
          src="/imgs/blog/heros/custom-printed-kraft-paper-sachets-for-herbs-hero.png" 
          alt="Custom Printed Kraft Paper Sachets For Herbs" 
          className="w-full max-w-4xl rounded-2xl shadow-xl mx-auto mb-10 object-cover"
        />
        <p className="text-xl leading-relaxed max-w-3xl mx-auto text-neutral-600 font-medium">
          {tLocal.empathyHook}
        </p>
      </div>

      <div className="bg-neutral-50 rounded-2xl p-8 mb-16 border border-neutral-100 shadow-sm max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Technical Engineering Breakdown</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Maximum Barrier Protection</h3>
              <p className="text-neutral-600">Engineered multilayer structures guarantee oxygen, moisture, and UV light resistance to extend product shelf life.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Sustainable Materials</h3>
              <p className="text-neutral-600">Available in fully compostable, mono-material recyclable, or PCR (post-consumer recycled) variants.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border border-neutral-200 rounded-xl p-6 bg-white">
            <h4 className="font-bold text-lg mb-2">What are the benefits of Custom Printed Kraft Paper Sachets For Herbs?</h4>
            <p className="text-neutral-600">It provides superior protection, extends shelf life, and ensures sustainable end-of-life disposal while maintaining premium brand aesthetics.</p>
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
