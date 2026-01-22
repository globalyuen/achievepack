import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, AlertCircle, Lightbulb, TrendingUp, Package, CheckCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const OrganicNutsCaseStudy = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.csOrganicNuts';
  const heroImage = '/imgs/seo-photos/a_nutrivie_nuts_sustainable_pouch_lifestyle_0132786.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Who Is This Client?',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-primary-50 p-6 rounded-xl mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="text-sm text-neutral-500 mb-1">Company</p><p className="font-semibold text-lg">NutriVie Organic</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Industry</p><p className="font-semibold">Organic Nuts & Seeds</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Location</p><p className="font-semibold">Lyon, France</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Package Type</p><p className="font-semibold">Stand-Up Pouches with Euro Slot</p></div>
            </div>
          </div>
          <p>NutriVie sources organic nuts and seeds from European farms, selling through organic supermarkets across France and Germany. They needed EU PPWR-compliant packaging that maintained product freshness.</p>
        </div>
      )
    },
    {
      id: 'challenge',
      title: 'What Challenge Did They Face?',
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      content: (
        <div className="space-y-4">
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>EU PPWR deadline</strong> approaching for packaging compliance</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Rancidity prevention</strong> critical for nut freshness</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Retail hanging display</strong> required for supermarket fixtures</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>15+ SKU range</strong> needing cost-effective solution</span></li>
          </ul>
        </div>
      )
    },
    {
      id: 'solution',
      title: 'How Did Achieve Pack Help?',
      icon: <Lightbulb className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                Recyclable Mono-Material
              </h4>
              <p className="text-sm text-blue-700">Mono-PE structure meets EU PPWR recyclability requirements with full compliance documentation.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                High Oxygen Barrier
              </h4>
              <p className="text-sm text-green-700">EVOH layer prevents nut rancidity, maintaining freshness for 12+ months shelf life.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                Euro Slot Integration
              </h4>
              <p className="text-sm text-purple-700">Reinforced hang hole for supermarket peg displays without separate header.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-amber-600" />
                Unified Design System
              </h4>
              <p className="text-sm text-amber-700">Plate printing with variable color bands—one plate set for 15 SKUs.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'results',
      title: 'What Results Did They Achieve?',
      icon: <TrendingUp className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-sm text-green-700">PPWR Compliant</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">15</div>
              <div className="text-sm text-blue-700">SKUs Unified</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">12 mo</div>
              <div className="text-sm text-purple-700">Shelf Life</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">-30%</div>
              <div className="text-sm text-amber-700">Plate Costs</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
            "The unified design approach saved us thousands on plates while creating a cohesive brand look. Plus we're PPWR-ready ahead of schedule."
            <footer className="mt-2 text-sm font-semibold text-neutral-700">— Pierre Dumont, Director, NutriVie Organic</footer>
          </blockquote>
        </div>
      )
    },
    {
      id: 'specs',
      title: 'What Packaging Specs Were Used?',
      icon: <Package className="h-5 w-5 text-neutral-600" />,
      content: (
        <div className="bg-neutral-100 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Format:</strong> Stand-Up Pouch with Euro Slot</div>
            <div><strong>Size:</strong> 140 × 200 + 80mm (200g)</div>
            <div><strong>Material:</strong> Mono-PE with EVOH</div>
            <div><strong>Barrier:</strong> High (anti-rancidity)</div>
            <div><strong>Features:</strong> Euro slot, tear notch, zipper</div>
            <div><strong>Printing:</strong> Plate, 6 colors + variable bands</div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) }
  ];

  return (
    <SEOPageLayout
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={['nut packaging', 'EU PPWR compliant', 'organic food packaging', 'recyclable food pouches']}
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage={heroImage}
      sections={sections}
      introSummary={t(`${p}.introSummary`)}
      faqs={faqs}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
      ctaButtonUrl="/contact"
    />
  );
};

export default OrganicNutsCaseStudy;
