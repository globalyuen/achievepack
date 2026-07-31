import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterSEOPageTemplate from '../../components/seo/FooterSEOPageTemplate';
import { getDomain } from '../../utils/domain';
import PouchLayout from '../../components/pouch/PouchLayout';

const PackagingLineAutomationPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const baseKey = 'seoPages.pages.packagingLineAutomation';
  const lang = i18n.language || 'en';

  // Helper to safely get nested translation objects
  const getNestedArray = (key: string) => {
    const val = t(key, { returnObjects: true });
    return Array.isArray(val) ? val : [];
  };

  if (getDomain() === 'pouch') { return <PouchLayout><div className="p-12 text-center text-xl font-bold">Redirecting...{/* 1:1 Human Packaging Experts & Designers Callout Card */}
        <section className="my-12 bg-primary-950/80 border border-primary-500/40 rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-mono rounded-full uppercase">
              🤝 1:1 Human Expert & Designer Consultation
            </div>
            <h3 className="text-2xl font-bold text-white">
              1:1 Human Packaging Experts & Designers (24/7 All-Rounded Help)
            </h3>
            <p className="text-primary-200/90 text-sm leading-relaxed">
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Packaging Line Automation.
            </p>
          </div>
          <button onClick={openCalendly} className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-8 py-4 rounded-xl shadow-lg whitespace-nowrap transition-all">
            Book 1:1 Expert Consultation
          </button>
        </section>

        {/* From the Desk of Ryan Wong E-E-A-T Anecdote Card */}
        <section className="my-12 bg-neutral-900 border-l-4 border-emerald-500 rounded-r-2xl p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <img src="/imgs/ryan-wong-avatar.jpg" alt="Ryan Wong" className="w-12 h-12 rounded-full border-2 border-emerald-400 bg-neutral-800" />
            <div>
              <h4 className="font-bold text-white text-lg">From the Engineering Desk of Ryan Wong</h4>
              <p className="text-xs text-emerald-400 font-mono">Co-Founder & Chief Packaging Engineer | Achieve Pack</p>
            </div>
          </div>
          <p className="text-neutral-300 text-sm italic leading-relaxed">"Snack products live or die by texture. High humidity rapidly softens potato chips, granola, and dried fruits if water vapor penetrates film seams. By engineering a high-density Mono-PE matrix with nitrogen flush gas retention, we guarantee zero crispness loss and extend snack shelf life past 12 months with zero plastic waste penalty."</p>
        </section>

        </div></PouchLayout>; }

  return (
    <FooterSEOPageTemplate
      pageTitle={t(`${baseKey}.pageTitle`) as string}
      pageDescription={t(`${baseKey}.pageDescription`) as string}
      heroImage="/imgs/knowledge/molded-pulp-packaging-automation-hero.jpg"
      heroTitle={t(`${baseKey}.heroTitle`) as string}
      heroSubtitle={t(`${baseKey}.heroSubtitle`) as string}
      primaryKeyword="Packaging Line Automation"
      secondaryKeywords={["VFFS integration", "packaging machine material", "automated bagging"]}
      schemaType="Product"
      language={lang}
      
      overviewTitle={t(`${baseKey}.overviewTitle`) as string}
      overviewContent={t(`${baseKey}.overviewContent`) as string}
      
      painPoints={getNestedArray(`${baseKey}.painPoints`)}
      benefits={getNestedArray(`${baseKey}.benefits`)}
      
      technicalSpecs={{
        materialLayers: getNestedArray(`${baseKey}.technicalSpecs.materialLayers`),
        printingOptions: getNestedArray(`${baseKey}.technicalSpecs.printingOptions`),
        sustainability: getNestedArray(`${baseKey}.technicalSpecs.sustainability`)
      }}
      
      engineeringNotebook={{
        title: t(`${baseKey}.engineeringNotebook.title`) as string,
        author: t(`${baseKey}.engineeringNotebook.author`) as string,
        date: t(`${baseKey}.engineeringNotebook.date`) as string,
        content: t(`${baseKey}.engineeringNotebook.content`) as string,
        keyTakeaway: t(`${baseKey}.engineeringNotebook.keyTakeaway`) as string
      }}
      
      faqs={getNestedArray(`${baseKey}.faqs`)}
      
      targetUrl={`https://achievepack.com/solutions/packaging-line-automation`}
    />
  );
};

export default PackagingLineAutomationPage;


