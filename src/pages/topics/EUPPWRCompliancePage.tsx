import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getDomain } from '../../utils/domain';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { 
  Shield, Award, Recycle, Leaf, Clock, ArrowRight, 
  AlertTriangle, FileCheck, Check, 
  Package, BarChart3, HelpCircle 
} from 'lucide-react';
import { useCalendly } from '../../contexts/CalendlyContext';

export default function EUPPWRCompliancePage() {
  const { t } = useTranslation();
  const { openCalendly } = useCalendly();
  const isPouch = getDomain() === 'pouch';

  const p = 'seoPages.pages.eUPPWRCompliance';

  // Determine B2B or B2C specific text
  const seoTitle = isPouch ? t(`${p}.b2c.seo.title`) : t(`${p}.b2b.seo.title`);
  const seoDesc = isPouch ? t(`${p}.b2c.seo.metaDescription`) : t(`${p}.b2b.seo.description`);
  
  // Keywords extraction
  const seoKeywords = isPouch 
    ? [
        t(`${p}.b2c.seo.keywords.item1`), 
        t(`${p}.b2c.seo.keywords.item2`), 
        t(`${p}.b2c.seo.keywords.item3`), 
        t(`${p}.b2c.seo.keywords.item4`), 
        t(`${p}.b2c.seo.keywords.item5`)
      ]
    : (t(`${p}.b2b.seo.keywords`) || '').split(',').map((k: string) => k.trim());

  const heroTitle = isPouch ? t(`${p}.b2c.heroTitle`) : t(`${p}.b2b.layout.heroTitle`);
  const heroSubtitle = isPouch ? t(`${p}.b2c.heroSubtitle`) : t(`${p}.b2b.layout.heroSubtitle`);
  
  const introSummary = isPouch 
    ? t(`${p}.theVoluntaryPhaseOfEcoMarketin`) 
    : t(`${p}.b2b.layout.introSummary`);

  // Build the Tech Matrix data table
  const tableData = [
    { param: t(`${p}.techMatrix.param1`), value: t(`${p}.techMatrix.value1`), benefit: t(`${p}.techMatrix.benefit1`) },
    { param: t(`${p}.techMatrix.param2`), value: t(`${p}.techMatrix.value2`), benefit: t(`${p}.techMatrix.benefit2`) },
    { param: t(`${p}.techMatrix.param3`), value: t(`${p}.techMatrix.value3`), benefit: t(`${p}.techMatrix.benefit3`) },
    { param: t(`${p}.techMatrix.param4`), value: t(`${p}.techMatrix.value4`), benefit: t(`${p}.techMatrix.benefit4`) },
    { param: t(`${p}.techMatrix.param5`), value: t(`${p}.techMatrix.value5`), benefit: t(`${p}.techMatrix.benefit5`) },
    { param: t(`${p}.techMatrix.param6`), value: t(`${p}.techMatrix.value6`), benefit: t(`${p}.techMatrix.benefit6`) },
  ];

  // FAQs
  const faqs = [
    { question: t(`${p}.faqs.q1`), answer: t(`${p}.faqs.a1`) },
    { question: t(`${p}.faqs.q2`), answer: t(`${p}.faqs.a2`) },
    { question: t(`${p}.faqs.q3`), answer: t(`${p}.faqs.a3`) },
    { question: t(`${p}.faqs.q4`), answer: t(`${p}.faqs.a4`) },
    { question: t(`${p}.faqs.q5`), answer: t(`${p}.faqs.a5`) },
    { question: t(`${p}.faqs.q6`), answer: t(`${p}.faqs.a6`) },
  ];

  // 5 Pain Points & Solutions
  const painPoints = isPouch 
    ? [
        { num: '01', problem: t(`${p}.oversizedBoxesAndDoubleWalledC`), solution: t(`${p}.the50VoidSpaceLimit`) },
        { num: '02', problem: t(`${p}.startingJanuary12030GroupedTra`), solution: t(`${p}.doubleWallsFalseBottomsAndEmpt`) },
        { num: '03', problem: t(`${p}.toResolveConsumerConfusionAcro`), solution: t(`${p}.eu20282029RecyclingQrPassportS`) },
        { num: '04', problem: t(`${p}.vagueMarketingTagsLikeEcoFrien`), solution: t(`${p}.compliantClaimsBackedByDocs`) },
        { num: '05', problem: t(`${p}.technicalSpecificationEprTaxRe`), solution: t(`${p}.transitioningToCertifiedMonoMa`) },
      ]
    : [
        { num: '01', problem: t(`${p}.01SkuAudit`), solution: t(`${p}.identifyDoubleWallsHeavyLamina`) },
        { num: '02', problem: t(`${p}.02Redesign`), solution: t(`${p}.convertComplexMultiLayeredBarr`) },
        { num: '03', problem: t(`${p}.03PreArtwork`), solution: t(`${p}.incorporate2028ReadyUnifiedSor`) },
        { num: '04', problem: t(`${p}.04Validate`), solution: t(`${p}.requestGrsCertificationsLcaCar`) },
        { num: '05', problem: t(`${p}.05Deploy`), solution: t(`${p}.lockInSupplyVolumesWithAudited`) },
      ];

  return (
    <SEOPageLayout
      title={seoTitle}
      description={seoDesc}
      keywords={seoKeywords}
      heroTitle={heroTitle}
      heroSubtitle={heroSubtitle}
      introSummary={introSummary}
      heroImage="/imgs/topics/eu-ppwr-compliance.png"
      heroImageAlt={isPouch ? t(`${p}.b2c.heroImageAlt`) : t(`${p}.b2b.sections.infographic.imageAlt`)}
      materialType="recyclable"
    >
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
      </Helmet>

      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, idx) => (
            <article key={idx} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{faq.question}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{faq.answer}</p>
              </div>
            </article>
          ))}
        </section>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 space-y-16">
        
        {/* Intro Hook Section */}
        <section className="prose prose-neutral max-w-none">
          <p className="text-xl text-neutral-700 leading-relaxed font-semibold italic border-l-4 border-emerald-600 pl-4">
            {isPouch ? t(`${p}.b2c.achievePackText`) : t(`${p}.b2b.layout.description`)}
          </p>
          <p className="text-lg text-neutral-600 mt-4 leading-relaxed">
            {t(`${p}.adaptEarlyOrFaceRegulatoryPena`)}
          </p>
        </section>

        {/* Section: Timeline Accordion */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-sm">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
            <Clock className="h-6 w-6 text-emerald-600" />
            {isPouch ? t(`${p}.b2c.sections.timeline.title`) : t(`${p}.b2b.sections.targets.title`)}
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-amber-500 pl-4 py-2">
              <h4 className="font-bold text-amber-800">{t(`${p}.august122026`)}</h4>
              <p className="text-neutral-600 text-sm">{t(`${p}.generalApplicationBeginsStrict`)}</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-bold text-blue-800">{t(`${p}.20282029Window`)}</h4>
              <p className="text-neutral-600 text-sm">{t(`${p}.harmonizedMaterialSortingIcons`)}</p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4 py-2">
              <h4 className="font-bold text-emerald-800">{t(`${p}.january12030`)}</h4>
              <p className="text-neutral-600 text-sm">{t(`${p}.theBigBangDeadline100Recyclabl`)}</p>
            </div>
          </div>
        </section>

        {/* Section: Volumetric Minimization & 50% Void Space Caps */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {isPouch ? t(`${p}.b2c.sections.minimization.title`) : t(`${p}.b2b.sections.minimization.title`)}
            </h2>
            <p className="text-neutral-600 mb-4">
              {isPouch ? t(`${p}.the50ECommerceAndTransportCap`) : t(`${p}.b2b.sections.factoryTesting.p1`)}
            </p>
            <p className="text-neutral-600">
              {isPouch ? t(`${p}.cruciallyFillerMaterialsLikeBu`) : t(`${p}.b2b.sections.factoryTesting.p2`)}
            </p>
          </div>
          <div>
            <ClickableImage 
              src="/imgs/topics/eu-ppwr-void-space.png" 
              alt={isPouch ? t(`${p}.b2c.sections.minimization.imageAlt`) : t(`${p}.b2b.sections.minimization.imageAlt`)} 
              className="w-full rounded-xl shadow-md border" 
            />
          </div>
        </section>

        {/* Section: Recycling Labels & QR Passports */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {isPouch ? t(`${p}.b2c.sections.sorting.title`) : t(`${p}.b2b.sections.infographic.title`)}
            </h2>
            <p className="text-neutral-600 mb-4">
              {t(`${p}.nationalRecyclingSymbolsArePhased` || `${p}.toResolveConsumerConfusionAcro`)}
            </p>
            <p className="text-neutral-600">
              {t(`${p}.20282029HarmonizedMaterialPict` || `${p}.eu20282029RecyclingQrPassportS`)}
            </p>
          </div>
          <div className="md:order-1">
            <ClickableImage 
              src="/imgs/topics/eu-ppwr-sorting-labels.png" 
              alt={isPouch ? t(`${p}.b2c.sections.sorting.imageAlt`) : t(`${p}.b2b.sections.infographic.imageAlt`)} 
              className="w-full rounded-xl shadow-md border" 
            />
          </div>
        </section>

        {/* Ryan's Engineering Notebook */}
        <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl">
          <h4 className="font-bold text-amber-800 text-lg mb-2 flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-600" />
            🔬 From Ryan Wong's Engineering Notebook
          </h4>
          <p className="text-neutral-700 italic leading-relaxed">
            {isPouch ? t(`${p}.b2c.sections.factoryDirect.p1`) : t(`${p}.b2b.sections.factoryTesting.p1`)}
          </p>
        </div>

        {/* 5 Pain Points & Solutions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-emerald-600" />
            {isPouch ? t(`${p}.b2c.sections.roadmap.title`) : t(`${p}.b2b.sections.roadmap.title`)}
          </h2>
          <div className="grid gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white p-6 rounded-xl border border-neutral-800">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-mono">{item.num}</span> 
                  {item.problem}
                </h3>
                <div className="bg-emerald-950/40 border border-emerald-900/60 text-emerald-100 p-4 rounded-lg">
                  <strong className="text-emerald-400">✅ Solution: </strong>
                  {item.solution}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specification Matrix */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-emerald-600" />
            {t(`${p}.technicalSpecificationEprTaxRe`)}
          </h2>
          <div className="overflow-x-auto border rounded-xl">
            <table className="min-w-full divide-y divide-neutral-200 text-sm">
              <thead className="bg-neutral-50 font-bold text-neutral-800">
                <tr>
                  <th className="px-6 py-3 text-left">{t(`${p}.metricParameter`)}</th>
                  <th className="px-6 py-3 text-left">{t(`${p}.euPpwrCompliantValue`)}</th>
                  <th className="px-6 py-3 text-left">{t(`${p}.eprModulatedTaxReliefImpact`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-600">
                {tableData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                    <td className="px-6 py-4 font-medium text-neutral-900">{row.param}</td>
                    <td className="px-6 py-4">{row.value}</td>
                    <td className="px-6 py-4">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Products Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition bg-white">
              <div>
                <img src="/imgs/store/products/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch-thumbnail-6.jpg" alt="Compostable Pouch" className="w-full h-36 object-cover mb-4 rounded-lg" />
                <h3 className="font-bold text-neutral-950 mb-1">Compostable Stand Up Pouch</h3>
                <p className="text-xs text-neutral-500 mb-4">{t(`${p}.requestFreeSampleKit`)}</p>
              </div>
              <Link to="/store/product/compostable-stand-up-pouch" className="text-emerald-600 font-bold hover:underline text-sm mt-auto block">
                View Product →
              </Link>
            </div>
            <div className="border rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition bg-white">
              <div>
                <img src="/imgs/store/products/clear-matte-zipper-stand-up-pouch-thumbnail-6.webp" alt="Kraft Paper Pouch" className="w-full h-36 object-cover mb-4 rounded-lg" />
                <h3 className="font-bold text-neutral-950 mb-1">Kraft Paper Stand Up Pouch</h3>
                <p className="text-xs text-neutral-500 mb-4">{t(`${p}.sampleKitDescription`)}</p>
              </div>
              <Link to="/store/product/kraft-paper-stand-up-pouch" className="text-emerald-600 font-bold hover:underline text-sm mt-auto block">
                View Product →
              </Link>
            </div>
            <div className="border rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition bg-white">
              <div>
                <img src="/imgs/store/products/stand-up-pouch-full-matte-pe70-hero.jpg" alt="Recyclable PE Bags" className="w-full h-36 object-cover mb-4 rounded-lg" />
                <h3 className="font-bold text-neutral-950 mb-1">Recyclable Mono-PE Pouch</h3>
                <p className="text-xs text-neutral-500 mb-4">{t(`${p}.b2c.related.art1`)}</p>
              </div>
              <Link to="/store/product/custom-printed-mylar-bags" className="text-emerald-600 font-bold hover:underline text-sm mt-auto block">
                View Product →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-6 bg-neutral-50 p-6 md:p-8 rounded-2xl border">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
            <HelpCircle className="h-6 w-6 text-emerald-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white border rounded-xl p-4 cursor-pointer group [&_summary::-webkit-details-marker]:hidden">
                <summary className="font-bold text-neutral-950 flex justify-between items-center outline-none">
                  <span>{faq.question}</span>
                  <span className="text-neutral-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-neutral-600 text-sm leading-relaxed border-t pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* E-E-A-T Author Card */}
        <div className="bg-neutral-950 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-lg">
          <div className="w-24 h-24 rounded-full bg-emerald-800 flex-shrink-0 flex items-center justify-center text-3xl font-black font-mono">
            RW
          </div>
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-block bg-emerald-600/30 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/20">
              14+ Years Packaging Engineering | GRS & FSC Auditing Expert
            </div>
            <h3 className="text-xl font-bold text-white">Ryan Wong</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Co-Founder & Chief Packaging Engineer at Achieve Pack. Specializing in high-performance biopolymers, mono-material structures, and full compliance strategies with EU PPWR and California SB 54 regulations.
            </p>
          </div>
        </div>

      </div>
    </SEOPageLayout>
  );
}