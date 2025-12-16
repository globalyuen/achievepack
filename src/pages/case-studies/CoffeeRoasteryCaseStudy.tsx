import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, AlertCircle, Lightbulb, TrendingUp, Package, CheckCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const CoffeeRoasteryCaseStudy = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.csCoffeeRoastery';
  const heroImage = '/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-primary-50 p-6 rounded-xl mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-neutral-500 mb-1">Company</p>
                <p className="font-semibold text-lg">Bean & Bole Coffee Roastery</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Industry</p>
                <p className="font-semibold">Specialty Coffee</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Location</p>
                <p className="font-semibold">Portland, Oregon, USA</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Package Type</p>
                <p className="font-semibold">Stand-Up Pouches with Valve</p>
              </div>
            </div>
          </div>
          <p>Bean & Bole is a specialty coffee roastery focused on direct-trade relationships with farmers and sustainable practices. They needed packaging that aligned with their commitment to environmental responsibility while maintaining freshness for their premium single-origin beans.</p>
        </div>
      )
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="mb-4">Bean & Bole faced several packaging challenges:</p>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span><strong>Traditional multi-layer plastics</strong> conflicted with their sustainability values</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span><strong>Barrier requirements</strong> for coffee freshness seemed incompatible with eco materials</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span><strong>High MOQ from other suppliers</strong> (10,000+ bags) was too much for their small-batch approach</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span><strong>Degassing valve compatibility</strong> with sustainable materials was unclear</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'solution',
      title: 'Our Solution',
      icon: <Lightbulb className="h-5 w-5 text-yellow-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="mb-4">We worked with Bean & Bole to develop a custom packaging solution:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                Material Selection
              </h4>
              <p className="text-sm text-blue-700">Kraft paper exterior with compostable PLA inner layer, providing medium-high barrier suitable for 3-4 month shelf life. Certified EN 13432 compostable.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Degassing Valve
              </h4>
              <p className="text-sm text-green-700">Compatible one-way valve integrated to release CO2 from freshly roasted beans while preventing oxygen entry.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                Small Batch Production
              </h4>
              <p className="text-sm text-purple-700">Initial order of just 500 bags per SKU using digital printing—perfect for testing and their artisan approach.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-amber-600" />
                Premium Finish
              </h4>
              <p className="text-sm text-amber-700">Matte finish with spot UV on logo for tactile premium feel that matches their brand positioning.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'results',
      title: 'The Results',
      icon: <TrendingUp className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-5 bg-gradient-to-b from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-sm text-green-700">Compostable Packaging</div>
            </div>
            <div className="text-center p-5 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">35%</div>
              <div className="text-sm text-blue-700">Customer Satisfaction Increase</div>
            </div>
            <div className="text-center p-5 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">4 mo</div>
              <div className="text-sm text-purple-700">Shelf Life Maintained</div>
            </div>
            <div className="text-center p-5 bg-gradient-to-b from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">500</div>
              <div className="text-sm text-amber-700">Bag Minimum Order</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-primary-500 bg-primary-50 p-4 rounded-r-lg italic text-neutral-700">
            "Our customers love that they can compost our coffee bags. It's become a key differentiator for us in the specialty coffee market. Achieve Pack made the transition seamless."
            <footer className="mt-2 text-sm font-semibold text-neutral-900 not-italic">— Marcus Chen, Founder, Bean & Bole</footer>
          </blockquote>
        </div>
      )
    },
    {
      id: 'specs',
      title: 'Package Specifications',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 rounded-xl border border-neutral-200">
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Format:</strong> Stand-Up Pouch</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Size:</strong> 140 × 200 + 80mm (250g capacity)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Material:</strong> Kraft + PLA (compostable)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Barrier:</strong> Medium-High (OTR &lt; 2.0)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Closure:</strong> Press-to-close zipper</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Features:</strong> Degassing valve, tear notch</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Printing:</strong> Digital, 4-color + spot UV</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Finish:</strong> Matte exterior</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Certification:</strong> EN 13432, food-safe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Order Size:</strong> 500 pcs initial, 2000 pcs reorder</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: t(`${p}.faq.q1`),
      answer: t(`${p}.faq.a1`)
    },
    {
      question: t(`${p}.faq.q2`),
      answer: t(`${p}.faq.a2`)
    },
    {
      question: t(`${p}.faq.q3`),
      answer: t(`${p}.faq.a3`)
    }
  ];

  return (
    <SEOPageLayout
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={['coffee packaging case study', 'compostable coffee bags', 'specialty coffee packaging', 'degassing valve compostable', 'sustainable coffee roastery']}
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

export default CoffeeRoasteryCaseStudy;
