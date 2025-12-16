import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, AlertCircle, Lightbulb, TrendingUp, Package, CheckCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const BathProductsCaseStudy = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.csBathProducts';
  const heroImage = '/imgs/seo-photos/a_bavarian_bliss_bath_bombs_spa_pouch_9301794.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-primary-50 p-6 rounded-xl mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="text-sm text-neutral-500 mb-1">Company</p><p className="font-semibold text-lg">Bavarian Bliss Bath Co.</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Industry</p><p className="font-semibold">Bath Bombs & Body Products</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Location</p><p className="font-semibold">Munich, Bavaria, Germany</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Package Type</p><p className="font-semibold">Clear Window Pouches</p></div>
            </div>
          </div>
          <p>Bavarian Bliss creates handmade bath bombs and fizzing products using Alpine botanicals. Selling at Christmas markets and spa boutiques, they needed packaging that showcased their colorful products while protecting from humidity.</p>
        </div>
      )
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      content: (
        <ul className="space-y-3 text-neutral-700">
          <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Moisture sensitivity</strong> critical—humidity activates bath bombs prematurely</span></li>
          <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Product visibility</strong> essential for colorful bath bomb appeal</span></li>
          <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Christmas market sales</strong> requiring gift-worthy packaging</span></li>
          <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Seasonal production</strong> with variable quantities</span></li>
        </ul>
      )
    },
    {
      id: 'solution',
      title: 'Our Solution',
      icon: <Lightbulb className="h-5 w-5 text-green-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              Clear Recyclable PE
            </h4>
            <p className="text-sm text-blue-700">Crystal-clear recyclable mono-PE shows off colorful bath bombs beautifully.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              High Moisture Barrier
            </h4>
            <p className="text-sm text-green-700">Enhanced seal structure prevents humidity from activating fizzing ingredients.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              Kraft Header Card
            </h4>
            <p className="text-sm text-purple-700">Attached kraft header with brand printing for gift appeal and hanging display.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-amber-600" />
              Seasonal Flexibility
            </h4>
            <p className="text-sm text-amber-700">Digital printing on header allows 250-piece minimum for seasonal editions.</p>
          </div>
        </div>
      )
    },
    {
      id: 'results',
      title: 'The Results',
      icon: <TrendingUp className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-sm text-green-700">Product Visible</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">Zero</div>
              <div className="text-sm text-blue-700">Humidity Failures</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">3X</div>
              <div className="text-sm text-purple-700">Market Sales</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">6</div>
              <div className="text-sm text-amber-700">Seasonal Editions</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
            "Our Christmas market sales tripled! Customers love seeing the beautiful colors through the clear pouch, and zero bath bombs have gone fizzy before purchase."
            <footer className="mt-2 text-sm font-semibold text-neutral-700">— Anna Schmidt, Owner, Bavarian Bliss Bath Co.</footer>
          </blockquote>
        </div>
      )
    },
    {
      id: 'specs',
      title: 'Package Specifications',
      icon: <Package className="h-5 w-5 text-neutral-600" />,
      content: (
        <div className="bg-neutral-100 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Format:</strong> Clear Pouch with Header Card</div>
            <div><strong>Size:</strong> 120 × 180mm (2-pack capacity)</div>
            <div><strong>Material:</strong> Clear mono-PE + kraft header</div>
            <div><strong>Barrier:</strong> High moisture barrier</div>
            <div><strong>Closure:</strong> Heat seal</div>
            <div><strong>Printing:</strong> Digital on header</div>
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
      keywords={['bath bomb packaging', 'clear pouches', 'moisture barrier packaging', 'cosmetic packaging']}
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

export default BathProductsCaseStudy;
