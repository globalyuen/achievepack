import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Factory, Building2, Leaf } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  en: {
    title: "DriedFruitFlatBottomPouch Packaging | Achieve Pack",
    description: "Premium sustainable packaging solutions",
    heroTitle: "High-Performance DriedFruitFlatBottomPouch Packaging",
    empathyHook: "Engineered for maximum freshness and sustainability.",
    point1Title: "Point 1", point1Desc: "Desc 1", point1Sol: "Sol 1",
    point2Title: "Point 2", point2Desc: "Desc 2", point2Sol: "Sol 2",
    point3Title: "Point 3", point3Desc: "Desc 3", point3Sol: "Sol 3",
    point4Title: "Point 4", point4Desc: "Desc 4", point4Sol: "Sol 4",
    point5Title: "Point 5", point5Desc: "Desc 5", point5Sol: "Sol 5",
    compTitle: "Comparison", compDesc: "Why choose us",
    faq1Q: "Q1", faq1A: "A1",
    faq2Q: "Q2", faq2A: "A2",
    faq3Q: "Q3", faq3A: "A3",
  },
  'zh-tw': {}, 'zh-cn': {}, ko: {}, ja: {}, de: {}, es: {}, fr: {}, pt: {}, th: {}, vi: {}, ms: {}, ar: {}
};

export default function DriedFruitFlatBottomPouchPage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const tLocalRaw = localTranslations[currentLang as keyof typeof localTranslations];
  const tLocal: any = (tLocalRaw && Object.keys(tLocalRaw).length > 0) ? tLocalRaw : localTranslations.en;
  const isPouchDomain = getDomain() === 'pouch';

  return (
    <SEOPageLayout
        title={tLocal.title}
        description={tLocal.description}
    >
      <Helmet>
        <title>{tLocal.title}</title>
        <meta name="description" content={tLocal.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium border border-primary-500/30 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Technical Engineering Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {tLocal.heroTitle}
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
            {tLocal.empathyHook}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Pain Points Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">5 Manufacturing Pain Points & Engineering Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: tLocal.point1Title, desc: tLocal.point1Desc, sol: tLocal.point1Sol, icon: Factory },
              { title: tLocal.point2Title, desc: tLocal.point2Desc, sol: tLocal.point2Sol, icon: ShieldCheck },
              { title: tLocal.point3Title, desc: tLocal.point3Desc, sol: tLocal.point3Sol, icon: Building2 },
              { title: tLocal.point4Title, desc: tLocal.point4Desc, sol: tLocal.point4Sol, icon: Leaf },
              { title: tLocal.point5Title, desc: tLocal.point5Desc, sol: tLocal.point5Sol, icon: Factory }
            ].map((point, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-neutral-700" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{point.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{point.desc}</p>
                <div className={`p-3 rounded-lg ${isPouchDomain ? 'bg-[#D4FF00]/10 border border-[#D4FF00]/20' : 'bg-primary-50 border border-primary-100'}`}>
                  <p className={`text-sm font-medium ${isPouchDomain ? 'text-neutral-900' : 'text-primary-900'}`}>
                    <span className="block text-xs uppercase tracking-wider opacity-70 mb-1">Solution</span>
                    {point.sol}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mb-20 bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">{tLocal.compTitle}</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl">{tLocal.compDesc}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="p-4 rounded-tl-lg font-semibold">Parameter</th>
                  <th className="p-4 font-semibold border-l border-neutral-700">Standard Approach</th>
                  <th className="p-4 rounded-tr-lg font-semibold border-l border-neutral-700">Achieve Pack Engineered</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-medium text-neutral-900">Material Integrity</td>
                  <td className="p-4 text-neutral-600 border-l border-neutral-200">High failure rate under stress</td>
                  <td className="p-4 text-green-700 font-medium border-l border-neutral-200 bg-green-50/50">Zero-failure structural mapping</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-medium text-neutral-900">Compliance</td>
                  <td className="p-4 text-neutral-600 border-l border-neutral-200">Often misses localized FDA/EU requirements</td>
                  <td className="p-4 text-green-700 font-medium border-l border-neutral-200 bg-green-50/50">100% Guaranteed Certification</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900">Unit Cost Impact</td>
                  <td className="p-4 text-neutral-600 border-l border-neutral-200">High waste yields expensive per-unit cost</td>
                  <td className="p-4 text-green-700 font-medium border-l border-neutral-200 bg-green-50/50">Optimized layout reduces material waste by 14%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Technical FAQ</h2>
          <div className="space-y-4">
            {[
              { q: tLocal.faq1Q, a: tLocal.faq1A },
              { q: tLocal.faq2Q, a: tLocal.faq2A },
              { q: tLocal.faq3Q, a: tLocal.faq3A }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-neutral-200 rounded-xl overflow-hidden">
                <summary className="p-6 font-semibold text-lg cursor-pointer marker:text-transparent flex justify-between items-center hover:bg-neutral-50 transition-colors">
                  {faq.q}
                  <span className="text-neutral-400 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <div className="px-6 pb-6 text-neutral-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Ryan's Profile */}
        <div className="bg-neutral-900 rounded-2xl p-8 md:p-10 text-white max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img src="/imgs/ryan-profile.jpg" alt="Ryan - Chief Packaging Engineer" className="w-32 h-32 rounded-full object-cover border-4 border-neutral-800" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Expert Engineering Advice?</h3>
              <p className="text-neutral-400 mb-6 max-w-xl">
                I'm Ryan, Chief Packaging Engineer at Achieve Pack. I specialize in resolving chronic packaging failures and optimizing for high-speed automated filling lines.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:ryan@achievepack.com" className="px-6 py-3 bg-white text-neutral-900 font-bold rounded-lg hover:bg-neutral-100 transition-colors">
                  Email ryan@achievepack.com
                </a>
                <a href="https://wa.me/8613437812971" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-neutral-700 font-bold rounded-lg hover:bg-neutral-800 transition-colors">
                  WhatsApp +86 134 3781 2971
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SEOPageLayout>
  );
}
